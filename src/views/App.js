import ChiaLayOut from "../components/ChiaLayOut/ChiaLayOut";
import Home from "../components/ChiaLayOut/Home";
import Header from "../components/demo/Header";
import HeaderRFC from "../components/demo/HeaderRFC";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

/**
 * 2 component:class component and function components(function/arrow)
 *
 */

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
