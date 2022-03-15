import Home from "./Components/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Fullcard from "./Components/Fullcard";
import LoginRegister from "./Components/Login/LoginRegister";
import Cookies from "js-cookie"
import {Navigate, Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginRegister/>}/>
      <Route element = {<PrivateRoute/>}>
      <Route path="/workouts/" element={<Home/>}/>
      <Route path="/workouts/:id" element={<Fullcard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


function PrivateRoute(){
  const token=Cookies.get("jwt_token")
  return (
    <div>{token != undefined ? <Outlet/> : <Navigate to="/login" />}</div>
  )
}