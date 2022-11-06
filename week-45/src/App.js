import './App.css';
import reactLogo from "./logo.svg"

function App() {
  return (
    <div>
        <nav>
            <img src={reactLogo} width="40px" alt="React logo"/>
            <h2>ReactFacts</h2>
            <p>React Course - Project 1</p>
        </nav>
        <div className="container">
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>
  );
}

export default App;

