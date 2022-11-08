import "./App.css";
import TheHeader from "./components/molecyles/TheHeader.jsx";

function App() {
  return (
    <div>
      <TheHeader title="ReactFacts" />
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
