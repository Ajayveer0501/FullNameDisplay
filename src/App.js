import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form><h1>Full Name Display</h1>
      <p>First Name: <input placeholder="Enter First Name" /></p>
      <p>Last Name: <input placeholder="Enter Last Name" /></p>
      <button type='submit'>Submit</button>
      <p>Full Name: {} {}</p>

            
      </form>

    </div>
  );
}

export default App;
