import { useEffect, useRef } from "react";

export function useOberver (ref, canLoad, isLoading, callback) {
    const observer = useRef();
    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        let cb = function(entries) {
            if(entries[0].isIntersection && canLoad) {
                callback();
            }
            observer.current = new IntersectionObserver(cb);
            observer.current.observe(ref.current);
        }
    }, [isLoading])
};