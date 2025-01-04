import React, {useMemo, useState} from 'react'
var slowfunc = (Number)=>{
    for (var i=0; i<200000;i++) {}
    return Number*2
}


 const UseMemo = () => {
    var [num , setnum] = useState(0);
    var[theme , settheme] = useState(true);
    var theme = {
        backgroundColor: theme? 'white':'black',
        color: theme? 'black':'white',
        fontSize: theme? '16px':'24px'
    }
    let doublenum =()=> useMemo(()=>slowfunc(num) ,[num])
return (
    <div>UseMemo
        <input type="number" value={num} onChange={(e)=>{setnum(e.target.value)}} />
        <button onClick={()=>{settheme(theme=!theme)}}>Toggle theme</button>
        <h2 style = {theme}>{doublenum()}</h2>
        <h2 style = {theme}>{num}</h2>
    </div>
  )
}
export default UseMemo