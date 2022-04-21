import Header from "../Header"
import { useEffect, useState } from "react"
import { Carousel} from "react-bootstrap"
import { Audio,Oval,Grid } from  'react-loader-spinner'
import "./index.css"
import Card from "../Card"
import Cookies from "js-cookie"

export default function Workouts(){
const[element,setelement]=useState([])

const[initial,setIntial]=useState("")

const order = "Calorieburnperhour"

useEffect(() => {
    const jwtToken= Cookies.get("jwt_token")
    
    fetch(`http://localhost:4000/workouts?sort=${order}`,{
        method:"GET",
        headers: {
                        Authorization: `Bearer ${jwtToken}`,
                      }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setelement(data)
        ;
    })
  }, [])


  const settingvalue=(event)=>{
        setIntial(event.target.value)
        
  }

  const settingorder=(event)=>{
      console.log("selected option",event.target.value)
      const jwtToken= Cookies.get("jwt_token")
      const ele=event.target.value
      console.log("i am in setting order",ele)
    fetch(`http://localhost:4000/workouts?sort=${ele}`,{
        method:"GET",
        headers: {
            Authorization: `Bearer ${jwtToken}`,
          }
    })
    .then(res => res.json())
    .then(data => {
        console.log("ready to render",data);
        setelement(data)
        ;
    })
  }


    return(
        <div className="main-home-container">
        <Header/>
            <div className="main-home-container-2">
                <div className="filter-container">
                    <div className="input-group input-cust">
                        <span className="input-group-text">Search</span>
                        <input type="text" onChange={settingvalue} className="input-cont"/>
                    </div>
                    <div> 
                        <select name="Order" id="cars" onChange={settingorder} className="selectstyle">
                                <option value="Calorieburnperhour">Low-High</option>
                                <option value="-Calorieburnperhour">High-Low</option>
                        </select>
                    </div>
                </div>
                <ul className="list-item-container">
                    {element.length===0? <Grid
    height="70"
    width="70"
    color='#329fc7'
    ariaLabel='loading'
  />:element.filter((eachele)=>(eachele.heading.toLowerCase().includes(initial))).map(each=>(<Card key={each._id} each={each}/>))}
                </ul>
            </div>
        </div>
    )
}