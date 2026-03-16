import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UseEffectDemo from "./components/UseEffectDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";

function App() {
  return (
    <div>
      <UseCallbackDemo />
    </div>
  );
}


export default App;