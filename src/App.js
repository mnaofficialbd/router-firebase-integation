import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}

export default App;
