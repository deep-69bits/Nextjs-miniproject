import Head from 'next/head'
import Image from 'next/image'
import layout from '../componets/layout'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import axios from "axios"

export default function Home() {
  
  const [ user, setUser] = useState({
    name: "",
    email:"",
    phonenumber:"",
})
const handleChange = e => {
  const { name, value } = e.target
  setUser({
      ...user,
      [name]: value
  })
}
  
const register = () => {
  const { name, email, phonenumber } = user
  if( name && email && phonenumber ){
      axios.post("http://localhost:3000/register", user)
      .then( res => {
          alert(res.data.message) 
      })
  } else {
      alert("invlid input")
  }

}

  return (
     <layout>
     <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }  ></input>
     <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
     <input type="text" name="phonenumber" value={user.phonenumber} placeholder="Your phone number" onChange={ handleChange }></input>
     <button onClick={register}>submit</button>
     </layout>
  )
}
