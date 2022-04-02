import Header from "../Header"
import { useEffect, useState } from "react"
import "./index.css"
import Card from "../Card"
import Cookies from "js-cookie"

export default function Home(){

// const get=async()=>{
//     const res=await fetch("http://localhost:8888/workouts",{method:"GET"
// })
// const data=await res.json()
// console.log(data)
// // return(data.map(each=>(<img src={each.imageurl}/>)))

// }
const[element,setelement]=useState([])

const[initial,setIntial]=useState("")

useEffect(async() => {

    console.log("i am in useeffect")
    const jwtToken= Cookies.get("jwt_token")
    // const resp=await fetch("http://localhost:6000/workouts",{
    //     method:"GET"
    // })
    // console.log(resp)

    // const data=await resp.json()
    // console.log("jeffa",data)
    // setelement(data)
    fetch('http://localhost:4000/workouts',{
        method:"GET",
        headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
    })
    .then(res => res.json())
    .then(data => {
        console.log("jeffa",data);
        setelement(data)
        ;
    })
  }, [])


  const settingvalue=(event)=>{
      console.log(event.target.value)
        setIntial(event.target.value)
  }

    return(
        <div className="main-home-container">
        <Header/>
        <div className="main-home-container-2">
            <div>
            <div className="input-group input-cust">
                <span class="input-group-text">Search</span>
                {/* <textarea class="form-control" aria-label="With textarea" onChange={settingvalue}></textarea> */}
                <input type="text" onChange={settingvalue} className="input-cont"/>
             </div>
             </div>
             <ul className="list-item-container">
                 {/* {element.length==0?"":element.map(each=>(<Card each={each}/>))} */}
             {element.length==0?"":element.filter((eachele)=>(eachele.heading.toLowerCase().includes(initial))).map(each=>(<Card each={each}/>))}
             </ul>
        </div>
        </div>
    )
}