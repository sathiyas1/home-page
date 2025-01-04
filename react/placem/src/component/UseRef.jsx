import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const UseRef = () => {
    var [text,setText] = useState("")
    var [count,setCount] = useState(0)
    var prevcount = useRef(0)
    var prevtext = useRef("")
    useEffect(()=>{
        prevtext.current = text
        console.log("this is prev text", prevtext.current)
        console.log("this is current text",text)
    },[text])
    useEffect(()=>{
        prevcount.current = count
        console.log("this is prev count", prevcount.current)
        console.log("this is current count",count)
    },[count])
     return (
    <div>
        <h1>example of useRef</h1>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button>save</button>
        <h2>this is prevetext  {prevtext.current} </h2>
        <h3>this is the current  {text} </h3>
        <h1>the current render is {count}</h1>
        <h2>the previous render is {prevcount.current}</h2>
        <h1>Numbers</h1>
        <button onClick={(e)=>{setCount(count+1)}}>increase</button>
        <button onClick={(e)=>{if(count>0)setCount(count-1)}}>decrease</button>
    </div>
  )
}

export default UseRef