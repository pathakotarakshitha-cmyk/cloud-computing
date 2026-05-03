import logo from './logo.svg';
import './App.css';

function App() {
  const isStudentMode=process.env.REACT_APP_KEY_USE_MODE.toString()==="student"
  return (
    <div className="App">
      <header className="App-header">
        <h1>{isStudentMode ?"student portal":"Faculty portal"}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn web development
        </a>
      </header>
    </div>
  );
}

export default App;
