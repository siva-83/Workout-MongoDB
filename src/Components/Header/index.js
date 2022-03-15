import "./index.css"
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate=useNavigate()

  const logout=()=>{
    Cookies.remove('jwt_token')
    navigate("/")

  }
    return(
        <div className="main-container">
          <h1 >Workouts</h1>
          <button onClick={logout}>Logout</button>
        </div>
    )
}