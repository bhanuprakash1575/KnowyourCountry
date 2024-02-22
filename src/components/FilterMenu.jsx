import React, { useContext, useState } from 'react'
import { Theme } from '../contexts/theme.js';

export default function FilterMenu({changehandler}) {
  const [message, setMessage] = useState("Filter By Region")
  const [backgroundColor] = useContext(Theme)
  const changeEvent = (e)=>{
    changehandler(e);
    if(e.target.value=="--none--"){
      setMessage("Filter By Region")
    }
  }
  
  return (

    <div className={`${backgroundColor ? 'dark border-none':' '} w-6/10 border-2 py-2 px-4 border-black-500 rounded lg:w-1/4`}>
        <select onBlur={()=>setMessage("Filter By Region")}onChange={changeEvent} onFocus={()=>setMessage("--none--")} className={`${backgroundColor ? 'dark':' '} w-full focus:outline-none`} name="selectCountriesByRegion" id="selectCountriesByRegion">
            <option value={message}>{message}</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    </div>
  )
}
