import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar';

function App(props) {
  return (
    <div className="App">
      <NavBar state={props.state} />
    </div>
  );
}

export default App;
