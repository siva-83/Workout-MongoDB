import Header from "../Header"
import { useEffect, useState } from "react"
import { Carousel, Dropdown } from "react-bootstrap"
import "./index.css"
import Card from "../Card"
import Cookies from "js-cookie"
import Graph from "../Graph"
import jwt_decode from "jwt-decode";

export default function Workouts(){
const[element,setelement]=useState([])

// const token=Cookies.get("jwt_token")
//         const decoded = jwt_decode(token);

// const[initial,setIntial]=useState("")

// const[order,setorder]=useState("Calorieburnperhour")
// const[Category,setcategory]=useState("")
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
        console.log("i am ready to use",data);






   function dynamicsort(property,order) {
          var sort_order = 1;
          if(order === "desc"){
              sort_order = -1;
          }
          return function (a, b){
              // a should come before b in the sorted order
              if(a[property] < b[property]){
                      return -1 * sort_order;
              // a should come after b in the sorted order
              }else if(a[property] > b[property]){
                      return 1 * sort_order;
              // a and b are the same
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


//   const settingvalue=(event)=>{
//         setIntial(event.target.value)
        
//   }

//   const settingcategory=(event)=>{
//       console.log("i am in setting order",event.target.value)
//       const jwtToken= Cookies.get("jwt_token")
      
//       fetch(`http://localhost:4000/workouts?sort=${order}`,{
//         method:"GET",
//         headers: {
//             Authorization: `Bearer ${jwtToken}`,
//           }
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         setelement(data)
//         ;
//     })
//   }
  


//   const settingorder=(event)=>{
//       console.log("selected option",event.target.value)
//       const jwtToken= Cookies.get("jwt_token")
//       const ele=event.target.value
//       console.log("i am in setting order",ele)
//     fetch(`http://localhost:4000/workouts?sort=${ele}`,{
//         method:"GET",
//         headers: {
//             Authorization: `Bearer ${jwtToken}`,
//           }
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log("ready to render",data);
//         setelement(data)
//         ;
//     })
//   }


    return(
        <div className="workouthistory-container">
        <Header className="headerinhistory"/>
        <ul className="workout-result">
        {
    
                
                element.length===0?"":element.map((eachitem)=>(<Graph eachitem={eachitem}/>))
            
            
        }
     </ul>

        
        </div>
    )
}