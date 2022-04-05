import React from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"
import Cookies from "js-cookie"
import "./Login.css"
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const validate = Yup.object({
        email: Yup.string().required("Required*").email("Invalid email"),
        password: Yup.string().required("Required*").min(6, "Password must be min 6 characters").max(12, "password must be max 12 charactors")

    })

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repassword: ''
        },
        validationSchema: validate,
        onSubmit: async (values) =>{
            const res = await fetch("http://localhost:4000/login", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({"email":formik.values.email,"password":formik.values.password}) })
        //    console.log("poor",res.body)
            const data = await res.json()
            checkTheData(data)
            console.log("japan",data);
            
        }
    })


    const checkTheData=(data)=>{
        const{token}=data
        console.log("america",token)
        if(data.auth=== true){
            Cookies.set("jwt_token", token, {expires: 30})
            navigate('/home')

        }
        else{
            console.log("kkkkkk",data)
            // alert("I am from frontend","User not Register")
            alert(data.error)
        }
    }

  return (
    <>
        <h1 className='title'>Login Form</h1>
        <form className='form-card' autoComplete='off' onSubmit={formik.handleSubmit}>
            <div className='input-card'>
                <label className='label' htmlFor='email'>Email Address</label>
                <input placeholder='Enter email' className='form-control outline-none' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="text" id="email" name='email'/>
                {formik.touched.email && formik.errors.email? <p className='error-msg'>{formik.errors.email}</p>: null}
            </div>
            <div className='input-card'>
                <label className='label' htmlFor='password'>Password</label>
                <input placeholder='Enter password' className='form-control outline-none' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" id="password" name="password"/>
                {formik.touched.password && formik.errors.password? <p className='error-msg'>{formik.errors.password}</p>: null}
            </div>
            <button className='button' type='submit'>Login</button>
        </form>
    </>
  )
}