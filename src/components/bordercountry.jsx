import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Bordercountry({isdark,bordercode}) {
    const[name,setname]=useState('')
    useEffect(function (){
      fetch(`https://restcountries.com/v3.1/alpha/${bordercode}`)
      .then(res=>res.json())
      .then(([data])=>{setname(data.name.common)})
       
    },[])
  return (
    <Link to={`/${name}`}>
        <button className={`${isdark ? 'dark border-none' : ' '} px-4 py-1 rounded border-2 border-black-500`} >{name}</button>
    </Link>
  )
}
