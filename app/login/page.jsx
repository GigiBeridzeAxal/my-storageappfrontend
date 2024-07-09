'use client'
import axios from 'axios'

import React, { useState } from 'react'


export default function page() {

    const [email ,setemail ] = useState()
    const [password , setpassword] = useState()
    const login = async() => {

        const loginapi = await axios.post(process.env.NEXT_PUBLIC_LOGIN , {email:email , password:password})

        if(loginapi){
           console.log(loginapi)
           const data = new FormData()
           const jwt = loginapi
           data.set('JWT' , jwt.data)
            const api = await axios.post('/api/cookie' , data , {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })

              if(api){
                window.location = "/"
              }

        }
        
    }



  return (
    <>
    <div className="login">
        
        <div className="inputs">
          <div className="logintittle">Member Login</div>
          <br />
           <div className="inputname">Email</div>
                      <input onChange={(e) => setemail(e.target.value)} type="text" placeholder='enter email' />
                      <div className="inputname">Password</div>
    <input onChange={(e) => setpassword(e.target.value)} type="text" placeholder='enter password' />
    <button onClick={() => login()}>login</button>
    
        </div>

    </div>

    </>
    
  )
}


