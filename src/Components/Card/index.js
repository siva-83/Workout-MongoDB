import "./index.css"
import {Link} from "react-router-dom"

export default function Card(props){
    console.log(`/${props.each.id}`)
    return(
        <Link className="card" to ={`/workouts/${props.each.id}`} >
               <img src={props.each.imageurl} className="cardimage"/>
               <h1>{props.each.heading}</h1>
               <p>{props.each.discriptionforcard}</p> 
        </Link>
     
       
    )
}