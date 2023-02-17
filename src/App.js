import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Pages/Navbar";
import { AuthContext } from "./Components/Context/AuthContext";
import { useEffect, useState } from "react";

function App(props) {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem("auth")) {
      setIsAuth(true)
    }
    setIsLoading(false);
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
          isLoading,
        }}
      >
        <NavBar />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
