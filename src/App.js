import Home from "./Components/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Fullcard from "./Components/Fullcard";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/workouts/:id" element={<Fullcard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
