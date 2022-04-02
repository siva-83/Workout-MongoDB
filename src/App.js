import Home from "./Components/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Fullcard from "./Components/Fullcard";
import LoginRegister from "./Components/Login/LoginRegister";
import Cookies from "js-cookie"
import {Navigate, Outlet} from "react-router-dom"
import Notfound from "./Components/Notfound";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route element = {<PrivateRoute1/>}>
    <Route path="/login" element={<LoginRegister/>}/>
    <Route path="/signup" element={<LoginRegister/>}/>
    </Route>
    {/* <Route path="/workouts/" element={<Home/>}/>
    <Route path="/workouts/:id" element={<Fullcard/>}/> */}
      <Route element = {<PrivateRoute/>}>
      <Route path="/workouts/" element={<Home/>}/>
      <Route path="/workouts/:id" element={<Fullcard/>}/>
      <Route path="*" element={<Notfound/>}/>
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


function PrivateRoute1(){
  const token=Cookies.get("jwt_token")
  return (
    <div>{token == undefined ? <Outlet/> : <Navigate to="/workouts" />}</div>
  )
}