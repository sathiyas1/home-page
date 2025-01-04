import axios from 'axios';
import React,{useState,useEffect} from "react";
import { data } from 'react-router-dom';
const UseEffect = () => {

var [post ,setpost]=useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
   .then(res=>{
        console.log(res)
        setpost(res.data)
    })
   .catch(err=>{console.log(err)})
    },[])
    return (
        <div>
            <h1>posts</h1>
            <h2>post are</h2>
            <ul>
                {post.map((post,index)=>(
                    <li id ='li' key={index}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
 }

export default UseEffect