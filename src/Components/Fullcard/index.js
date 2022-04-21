import React from "react"
import Header from "../Header"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Audio,Oval,Grid } from  'react-loader-spinner'
import "./index.css"
import Cookies from "js-cookie"
import jwt_decode from "jwt-decode";

export default function Fullcard(){

    const[final,setfinal]=useState({})
    const[caloriesburned,setcaloriesburned]=useState(0)
    const[clock,setclock]=useState("00:00:00")
    const[key,setkey]=useState("")
    const[count,setcount]=useState(0)
    const [startdisable, setstartdisable] = React.useState(false);
    const [stopdisable, setstopdisable] = React.useState(true);

    const req=useParams()

    console.log("got it",req)
  
    var imp=0;
   

    const starttimer=()=>{

        setstartdisable(true)
        setstopdisable(false)

        setkey(setInterval(()=>{
           
            imp=imp+1
          
          
           console.log(imp)

           let hours;
           let minutes;
           let seconds;

let caloriessold=((final.Calorieburnperhour)/3600)*imp
        console.log("i am calories to show",caloriessold)
        const totalburnedcalories=(caloriessold.toFixed(2))
        console.log("calaories burned till now",totalburnedcalories)
        setcaloriesburned(totalburnedcalories)
           const hour=()=>{
               if(Math.floor(imp / (60 * 60))<10){
                   hours=`0${Math.floor(imp / (60 * 60))}`
                   console.log("hour",hours)
                   return hours
               }
               else{
                   hours=Math.floor(imp / (60 * 60))
                   return hours
               }
           }

         

           const min=()=>{
               let divisor_for_minutes = imp % (60 * 60);
           let minutes = Math.floor(divisor_for_minutes / 60);
               if(Math.floor(divisor_for_minutes / 60)<10){
                   minutes=`0${Math.floor(divisor_for_minutes / 60)}`
                   return minutes
               }
               else{
                   minutes=`${Math.floor(divisor_for_minutes / 60)}`
                   return minutes
               }
           }
          

           const sec=()=>{
               let divisor_for_minutes = imp % (60 * 60);
               let divisor_for_seconds = divisor_for_minutes % 60;
               let seconds = Math.ceil(divisor_for_seconds);

               if(Math.ceil(divisor_for_seconds)<10){
                   seconds=`0${Math.ceil(divisor_for_seconds)}`
                   console.log("sec",seconds)
                   return seconds
               }
               else{
                   seconds=`${Math.ceil(divisor_for_seconds)}`
                   return seconds
               }

           }

           console.log("jeffa readyy",seconds)
           setclock(`${hour()}:${ min()}:${ sec()}`)
           console.log("I am clock",`${hour()}:${ min()}:${ sec()}`)
           setcount(imp)

       },1000))
    }

    const stoptimer=async()=>{


        setstartdisable(false)
        setstopdisable(true)

       
        console.log("count for caluculator",count)
        clearInterval(key)
        console.log("stopped");



        const token=Cookies.get("jwt_token")
        const decoded = jwt_decode(token);
        console.log("i am decode version",decoded)
        let monthelement;
        let dateelement;

        const date=()=>{
            if(new Date().getDate()<10){

                dateelement=`0${new Date().getDate()}`
            }
            else{
                dateelement=new Date().getDate()+1
            }
        }
date()





        const month=()=>{
            if(new Date().getMonth()+1<10){

                monthelement=`0${new Date().getMonth()+1}`
            }
            else{
                monthelement=new Date().getMonth()+1
            }
        }
month()
        const info={
            "user":decoded.id,
            "nameofworkout":final.heading,
            "caloriesburned":caloriesburned,
            "date":`${new Date().getFullYear()}-${monthelement}-${dateelement}`,
            "duration":count
        }
        console.log("i am your request body",info)
        const jwtToken= Cookies.get("jwt_token")

        const res = await fetch("http://localhost:4000/workoutshistory", {method: "POST", headers: {"Content-Type": "application/json",Authorization: `Bearer ${jwtToken}`}, body: JSON.stringify(info) })

    }


    useEffect(()=>{
                const jwtToken= Cookies.get("jwt_token")
                fetch(`http://localhost:4000/workouts/${req.id}`,{method:"GET", headers: {
                    Authorization: `Bearer ${jwtToken}`,
                  }}).then(res=>(res.json()))
                .then((data)=>{
                    console.log("jeffa",data)
                    setfinal(data)})
        
                
            },[])


    return(
        <>
            <Header userid={final._id}/>


{final=={}?<Grid
    height="70"
    width="70"
    color='#329fc7'
    ariaLabel='loading'
  />: <div className="main-card-container">
                    <div className="main-card">
                        <div className="image-caluculator-container">
                        <img src={final.imageurl} className="card-image"/>
                        <div className="calorie-burn-calculator shadow">
                            <h1 className="calorie-burn-heading">Calorie burn calculater</h1>
                            <div className="clock-calorie-calculater">



                            <div class="card card-forclock">
  <div class="card-header">
    Timer
  </div>
  <div class="card-body card-importent">
    <h5 class="card-title">{clock}</h5>
  </div>
</div>



<div class="card card-forclock">
  <div class="card-header">
    Calories burned
  </div>
  <div class="card-body card-importent">
    <h5 class="card-title">{caloriesburned}</h5>
  </div>
</div>
                            </div>
                            <div>
                            <button disabled={startdisable}  className="btn btn-primary" onClick={starttimer}>start</button>
                           
                            <button disabled={stopdisable}  className="btn btn-danger" onClick={stoptimer}> stop</button>
                            </div>
                        </div>
                        </div>   
                       
                        <div className="card-content">
                            <h1 className="card-heading">{final.heading}</h1>
                            <p className="card-calories">Loss of Weight : <span className="calorie">{final.Calorieburnperhour} Calorie/hr</span></p>
                            <h1 className="card-descrip">Description</h1>
                            <p className="card-para">{final.fulldiscription}</p>
                        </div>
                    </div>
                    <div className="video-player">
                        <h1 className="card-title">How To Work</h1>
                        <div className="video-container">
                        <ReactPlayer height="450px" width="800px" url={final.videourl}/>
                        </div>
                       
                    </div>
                </div>}


                
        </>
    )
}