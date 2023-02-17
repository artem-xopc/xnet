import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../UI/Loader/Loader";
import { privateRoutes, publicRoutes } from "./main";

function AppRouter() {
  debugger;
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isAuth ? (
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
      ) : (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default AppRouter;
