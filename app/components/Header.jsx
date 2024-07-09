'use client'
import React, { useEffect } from 'react'
import {useState} from 'react'

import axios from 'axios'


export default function Header() {

  const [user , setuser] = useState()
  const [usermenu , setusermenu] = useState()


  const logout = async() => {
    console.log("Logouting ..")
    const logoutacc = await axios.delete('/api/cookie')
    if(logoutacc.data.logouted == true){
      window.location = '/'
    }else{
      logout()
    }

    


  }


  const changeusermenu = () => {
    if(usermenu == undefined){
      setusermenu(true)
    }else{
      setusermenu(false)
    }
    if(usermenu == false){
      setusermenu(true)
    }
    
  }

  useEffect(() => {


  const getuserinfo = async() => {
    const post = await axios.get("api/getcookies")
    console.log(post.data)
    setuser(post.data)
  }
  getuserinfo()
    
  
  
  
  
  
  
   },[])
    

   if(user == undefined){
    return null
   }

  return (
    <div className="header">
        <div className="headerframe">

             <div className="leftheader flex gap-3 align-center">
                <div className="logo "><div className="textheader flex  items-center">Nimbus <div className="green text-emerald-500">Box</div></div></div>
                <div className="username gap-5 flex align-center">{user == 0 ? <div></div> : <><div className="line">/</div>  <div className="name">{user.username}</div></> }</div>
             </div>
             <div className="rightheader">
                <div className="sections flex align-center gap-3">
                {user == 0 ? <div className="signin bg-red-600 "><a href="/login">Sign In</a></div> : <div className='flex items-center' > <div className="usermail">{user.email}</div> <button onClick={() => changeusermenu()} className='userbtn' >
                  {usermenu == true ?    <div className="usermenu">
                  <div className="usermenuframe">
                    <button  onClick={() => logout()} className="logout text-red-500 flex items-center justify-center gap-2 ">Logout <img width={15} src="Logout.png" alt="" /></button>
                  </div>
                  </div> : <div></div>}
               <img width={50} src="User.png" alt="" /></button></div>}
         


                </div>
             </div>

        </div>
    </div>
  )
}

