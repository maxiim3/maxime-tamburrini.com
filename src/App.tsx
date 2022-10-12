import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Maxime</h1>
      <p>Welcome</p>
      <h2>Some projects</h2>
      <ul>
        <li>
          <a href="https://project.maxime-tamburrini.com/oc_projet_2/">
            Go to project 2
          </a>
        </li>
        <li>
          <a href="https://maxiim3.github.io">
            Go to project 3
          </a>
        </li>
        <li>
          <a href="https://project.maxime-tamburrini.com/oc_projet_4/starterOnly">
            Go to project 4
          </a>
        </li>
        <li>
          <a href="https://project.maxime-tamburrini.com/oc_projet_6/">
            Go to project 6
          </a>
        </li>
        <li>
          <a href="https://project.maxime-tamburrini.com/oc_projet_7/">
            Go to project 7
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
