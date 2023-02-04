import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar';

function App(props) {
  return (
    <div className="App" style={{backgroundColor: "rgb(17, 18, 18)", border: "none", color: "rgb(171 178 191)"}}>
      <NavBar />
    </div>
  );
}

export default App;
