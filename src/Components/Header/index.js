import "./index.css"
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate=useNavigate()

  const logout=()=>{
    Cookies.remove('jwt_token')
    navigate("/login")

  }
    return(
        <div className="main-container">
          <h1 onClick={()=>{navigate("/workouts")}} className="logo-head"><img src="https://p.kindpng.com/picc/s/160-1601328_fitness-icon-png-transparent-png.png" className="weblogo"/>Workouts</h1>
          {/* <button onClick={logout}>Logout</button> */}
          {/* <button type="button" class="btn btn-outline-secondary logout-button" onClick={logout} >Logout</button> */}
          <button type="button" class="btn btn-outline-primary logout-button" onClick={logout}>Logout</button>
          {/* <button type="button" class="btn btn-secondary" onClick={logout}>Logout</button> */}
        </div>
    )
}