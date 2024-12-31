import react from 'react'
import {useState, useEffect } from 'react';

const UseEffect = () =>{
    var[text,setText]=useState("");
    return (
        <div>
            <input type ="text" placeholder="enter your text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <h2>Text typed is {Text}</h2>
        </div>
    )
}
export default UseEffect