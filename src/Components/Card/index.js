import "./index.css"
import {Link} from "react-router-dom"

export default function Card(props){
    console.log(`/${props.each.id}`)
    return(
        <Link className="card shadow" to ={`/workouts/${props.each._id}`} >
               <img src={props.each.imageurl} className="cardimage"/>
               <h1 className="card-head-calorie">calorie/hour:{props.each.Calorieburnperhour} calorie</h1>
               <h1 className="card-head">{props.each.heading}</h1>
               <p className="card-para">{props.each.discriptionforcard}</p> 
        </Link>
     
       
    )
}