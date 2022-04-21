import Header from "../Header"
import { useEffect, useState } from "react"
import { Carousel, Dropdown } from "react-bootstrap"
import { Audio,Oval,Grid } from  'react-loader-spinner'
import "./index.css"
import Card from "../Card"
import Cookies from "js-cookie"
import Graph from "../Graph"
import jwt_decode from "jwt-decode";

export default function Workouts(){
const[element,setelement]=useState([])
const[apistatus,setapistatus]=useState(false)
console.log("i am element",element,element.length)


useEffect(() => {
    const jwtToken= Cookies.get("jwt_token")
    
    fetch("http://localhost:4000/workoutshistory",{
        method:"GET",
        headers: {
                        Authorization: `Bearer ${jwtToken}`,
                      }
    })
    .then(res => res.json())
    .then(data => {
        setapistatus(true)
        console.log("i am ready to use",data);






   function dynamicsort(property,order) {
          var sort_order = 1;
          if(order === "desc"){
              sort_order = -1;
          }
          return function (a, b){
              if(a[property] < b[property]){
                      return -1 * sort_order;
              }else if(a[property] > b[property]){
                      return 1 * sort_order;
              }else{
                      return 0 * sort_order;
              }
          }
      }


      console.log("wanted data formate",data.sort(dynamicsort("date","desc")));

        setelement(data)
        ;
    })
  }, [])

  const assignsomthing=()=>{
    console.log("jeffa ga ready ra")
    if(apistatus==false){
        return(
            <Grid
        height="70"
        width="70"
        color='#329fc7'
        ariaLabel='loading'
      />
        )    
    }
    else{
        return(
            <h1 className="nohistory-found">No workout history found !!!</h1>
        )
    }
    
}

    return(
        <div className="workouthistory-container">
        <Header className="headerinhistory"/>
        <ul className="workout-result">
        {     
                element.length===0?<div className="final-info">{assignsomthing()}</div>:element.map((eachitem)=>(<Graph eachitem={eachitem}/>))   
        }
     </ul>

        
        </div>
    )
}