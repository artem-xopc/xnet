import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar';

function App(props) {
  debugger
  console.log(props)
  return (
    <div className="App">
      <NavBar state={props.state} addPost={props.addPost} updatePostText={props.updatePostText} />
    </div>
  );
}

export default App;
