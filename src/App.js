import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar';
import mainHelp from './Components/mainHelper';

function App(props) {
  debugger
  return (
    <div className="App">
      <NavBar state={props.state} dispatch={props.dispatch} />
      <mainHelp />
    </div>
  );
}

export default App;
