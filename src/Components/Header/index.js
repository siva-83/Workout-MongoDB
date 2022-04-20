// import "./index.css"
// import Cookies from "js-cookie"
// import { useNavigate } from 'react-router-dom';

// export default function Header(){
//   const navigate=useNavigate()

//   const logout=()=>{
//     Cookies.remove('jwt_token')
//     navigate("/login")

//   }
//     return(
//         <div className="main-container">
//           <h1 onClick={()=>{navigate("/workouts")}} className="logo-head"><img src="https://p.kindpng.com/picc/s/160-1601328_fitness-icon-png-transparent-png.png" className="weblogo"/>WorkoutApp</h1>
//           {/* <button onClick={logout}>Logout</button> */}
//           {/* <button type="button" class="btn btn-outline-secondary logout-button" onClick={logout} >Logout</button> */}
//           <button type="button" class="btn btn-outline-primary logout-button" onClick={logout}>Logout</button>
//           {/* <button type="button" class="btn btn-secondary" onClick={logout}>Logout</button> */}
//         </div>
//     )
// }



import "./index.css"
import Cookies from "js-cookie"
import { Link, useNavigate } from 'react-router-dom';

export default function Header(props){
  const navigate=useNavigate()

  console.log("i am props in header",props)

  const logout=()=>{
    Cookies.remove('jwt_token')
    navigate("/login")

  }
    return(
        <div className="main-container">
          <h1 onClick={()=>{navigate("/home")}} className="logo-head"><img src="https://p.kindpng.com/picc/s/160-1601328_fitness-icon-png-transparent-png.png" className="weblogo"/>WorkoutApp</h1>
          <div className="nav-card">
            <Link to="/home" className="link"><p className="nav-items">Home</p></Link>
            <Link to="/workouts" className="link"><p className="nav-items">Workouts</p></Link>
            <Link to ="/workouthistory" className="link"><p className="nav-items">Workouthistory</p></Link>
            <Link to="/about" className="link"><p className="nav-items">About</p></Link>
            <Link to="/contact" className="link"><p className="nav-items">Contact Us</p></Link>
            <button type="button" className="logout-button" onClick={logout}>Logout</button>
          </div>
        </div>
    )
}