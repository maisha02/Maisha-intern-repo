import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UseEffectDemo from "./components/UseEffectDemo";
import UseMemoDemo from "./components/UseMemoDemo";

function App() {
  return (
    <div>
      <UseMemoDemo />
    </div>
  );
}


export default App;