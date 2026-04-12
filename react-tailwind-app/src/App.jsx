<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UseEffectDemo from "./components/UseEffectDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";
import AxiosDemo from "./components/AxiosDemo";
import Counter from "./components/Counter";
import CounterMessage from "./components/CounterMessage";

function App() {
  return (
    <div>
     <Counter />
     <CounterMessage />
    </div>
  );
}


export default App;
=======
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold underline">
        Hello Tailwind
      </h1>
    </div>
  )
}

export default App
>>>>>>> 080cca619c5b56b63a2c69075462440a518f1652
