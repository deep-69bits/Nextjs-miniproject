
import React, { useState } from 'react';
import axios from "axios"

function index({ posts }){
   
    const res=await  axios.get("http://localhost:3000/users");
    const posts = await Array.from(res.data)
    console.log(posts)
  return (
    <div>index
    <ul>
    {posts.map((post) => (
       
        
        <li> <h1>hello</h1>  {post}</li>

    ))}
  </ul>
    </div>
  )
}
export async function getStaticProps(context) {
   
     const res=await  axios.get("http://localhost:3000/users");
     const posts = await Array.from(res.data)
    return {
      props: {
         posts
      }, 
    }
  }
  

export default index