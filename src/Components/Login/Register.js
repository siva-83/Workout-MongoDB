import React, { useCallback, useState } from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"
import "./Register.css"

export default function Register() {

   const [registrationstatus,setregistrationstatus]=useState(false)

    const validate = Yup.object({
        email: Yup.string().required("Required*").email("Invalid email"),
        password: Yup.string().required("Required*").min(6, "Password must be min 6 characters").max(12, "password must be max 12 charactors"),
        repassword: Yup.string().required("Required*").oneOf([Yup.ref('password'), null], "password is not matched")

    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repassword: ''
        },
        validationSchema: validate,
        onSubmit: async(values) =>{
            const newData = {
                email: values.email,
                password: values.password,
                
            }
            // const res = await fetch("http://localhost:4000/signup", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({...newData, jwtToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ"}) })
            const res = await fetch("http://localhost:4000/signup", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({...newData}) })
            const data = await res.json()
            console.log("successfully registered",data)
            if(data.success==true){
                setregistrationstatus(true)
            }
            else{
                if(data.message=='Duplicate key')
                alert("Username already used")
            }
            
        }
    })
  return (
    <>
        <h1 className='title'>Register Form</h1>
        <form className='form-card' autoComplete='off' onSubmit={formik.handleSubmit}>
            <div className='input-card'>
                <label className='label' htmlFor='email'>Email Address</label>
                <input placeholder='Email' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="text" id="email" name='email'/>
                {formik.touched.email && formik.errors.email? <p className='error-msg'>{formik.errors.email}</p>: null}
            </div>
            <div className='input-card'>
                <label className='label' htmlFor='password'>Password</label>
                <input placeholder='Password' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" id="password" name="password"/>
                {formik.touched.password && formik.errors.password? <p className='error-msg'>{formik.errors.password}</p>: null}
            </div>
            <div className='input-card'>
                <label className='label' htmlFor='repassword'>Confirm Password</label>
                <input placeholder='Confirm Password' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.repassword} type="password" id="repassword" name='repassword'/>
                {formik.touched.repassword && formik.errors.repassword? <p className='error-msg'>{formik.errors.repassword}</p>: null}
            </div>
            <button className='button' type='submit'>Register</button>
        </form>
        {registrationstatus?<p className='status-para'> successfully registered</p>:""}
        
    </>
  )
}