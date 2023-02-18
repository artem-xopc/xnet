import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../UI/Loader/Loader";
import { privateRoutes, publicRoutes } from "./main";

function AppRouter() {
//   const {isAuth, isLoading} = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(false);

//   if (isLoading) {
//     return <Loader />;
//   }

  return (
    <div>
      {/* {isAuth ? ( */}
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
        {/* <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes> */}

    </div>
  );
}

export default AppRouter;
