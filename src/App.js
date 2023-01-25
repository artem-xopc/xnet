import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar';

function App(props) {
  return (
    <div className="App">
      <NavBar posts={props.posts} text={props.text} />
    </div>
  );
}

export default App;
