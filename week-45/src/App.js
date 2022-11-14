import "./App.css";
import MainContent from "./components/molecyles/MainContent";
import TheHeader from "./components/molecyles/TheHeader";

function App() {
  return (
    <div>
      <TheHeader title="ReactFacts" />
      <MainContent title="Fun Facts about React" />
    </div>
  );
}

export default App;
