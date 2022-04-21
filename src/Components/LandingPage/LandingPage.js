import React from 'react'
import "./LandingPage.css"
import LoginHeader from '../LoginHeader/LoginHeader'
import { Carousel} from "react-bootstrap"

export default function LandingPage() {


  return (
        <>
            <LoginHeader/>            
            <div className='land-page-container'>



            <div className='landing-page-carousel'>
            <Carousel className='car-container'>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block carousel-width"
                        src="https://img.freepik.com/free-vector/vector-cartoon-background-gym-with-girls-doing-fitness_33099-1205.jpg?w=1380&t=st=1648898526~exp=1648899126~hmac=e4346e0a0ecfed1d2e32dcfd360f716cab7eeb1945a8909b976ca0d2f8dd2a88"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block carousel-width"
                        src="https://img.freepik.com/free-vector/gym-isometric-landing-page-fitness-equipment_107791-897.jpg?w=1380&t=st=1648898665~exp=1648899265~hmac=cf8de39d9edce8a758e67fb2b3041efd807728094eb4898bf29624337c61eb55"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block carousel-width"
                        src="https://img.freepik.com/free-vector/sport-home-banner-template_52683-52350.jpg?t=st=1648958180~exp=1648958780~hmac=1ab2ec0bdc4ecc7d62de140c997c791394ae78dfe0d989a8b6f7dc59f18606e4&w=996"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block carousel-width"
                        src="https://img.freepik.com/free-vector/gym-interior-illustration_1262-16321.jpg?w=1060&t=st=1648958665~exp=1648959265~hmac=976acfbdb665de61513313effddff7c9b28d71bb5daa920fbfdaf56f630e64ab"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
            </div>

                <div>
                    <h1 className='welcome-title'>Welcome to the</h1>
                    <h1 className='workout-title'>Workouts</h1>
                    <h1 className='welcome-title2'>Track your workout history</h1>
                </div>
            </div>
            <div className='land-page-container'>
                <div>
                    <h1 className='intro-workout'>Exercise helps people keep a healthy weight and lower their risk of some diseases. Exercising regularly can help prevent weight gain, type 2 diabetes, heart disease, and high blood pressure. Bone-strengthening exercise — like jumping, running, or lifting weights — can help keep bones strong. More specifically, exercise can help reduce or prevent the following chronic health conditions.
</h1>
                </div>
            <img className='workout-image' src="https://img.freepik.com/free-vector/athletes-doing-fitness-exercise-gym-with-panoramic-windows-isolated-flat-vector-illustration-cartoon-people-cardio-training-weight-lifting_74855-8225.jpg?t=st=1647401572~exp=1647402172~hmac=eeb0ef11e13e8a5915ff749c640181cebfe33d919dc9aa9ec3cebb7fa1a57536&w=1060" alt="workout" />
            </div>
        </>
  )
}