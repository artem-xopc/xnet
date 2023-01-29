import { CommentList } from "./Comments/CoomentList"


export const mainHelper = (props) => {
    debugger
    return (
        <div>
            <CommentList state={props.state.about.comments} />
        </div>
    )
}