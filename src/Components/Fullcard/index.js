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
        <>
            <Header/>
            <div className="final-card-container">
                {final=={}?"":<div>
                <img src={final.imageurl}/>
                <h1>{final.heading}</h1>
                <p>{final.fulldiscription}</p>
                    </div>}
                    </div>       
        </>
    )
}