import Header from "../Header"
import { useEffect, useState } from "react"
import "./index.css"
import Card from "../Card"

export default function Home(){

// const get=async()=>{
//     const res=await fetch("http://localhost:8888/workouts",{method:"GET"
// })
// const data=await res.json()
// console.log(data)
// // return(data.map(each=>(<img src={each.imageurl}/>)))

// }
const[element,setelement]=useState([])

useEffect(() => {
    fetch('http://localhost:8888/workouts',{
        method:"GET"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setelement(data)
        ;
    })
  }, [])

    return(
        <div className="main-home-container">
        <Header/>
        <div className="main-home-container-2">
            <div className="input-group input-cust">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
             </div>
             <ul className="list-item-container">
             {element.length==0?"":element.map(each=>(<Card each={each}/>))}
             </ul>
        </div>
        </div>
    )
}