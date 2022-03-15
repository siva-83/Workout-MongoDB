import Header from "../Header"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import "./index.css"

export default function Fullcard(){

    const[final,setfinal]=useState({})

    const req=useParams()

    console.log("got it",req)
    useEffect(()=>{
        fetch(`http://localhost:8888/workouts/${req.id}`,{method:"GET"}).then(res=>(res.json()))
        .then((data)=>setfinal(data))
    },[])


    return(
        <div className="main-home-container">
            <Header/>
            <div className="for-look">           
                 <div className="final-card-container">
                {final=={}?"":
                    <div className="fullcard-image-container">
                    <img src={final.imageurl} className="fullcard-image"/>
                    <h1 className="card-head-calorie">calorie/hour:{final.Calorieburnperhour} calorie</h1>
                    <h1>{final.heading}</h1>
                     <p>{final.fulldiscription}</p>
                    </div>
                
               
                    }
                    </div>       
        </div>
        </div>

    )
}