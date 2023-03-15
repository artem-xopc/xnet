import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Pages/Navbar";
import { AuthContext } from "./Context/AuthContext";
import { useEffect, useState } from "react";

function App(props) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <NavBar />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
