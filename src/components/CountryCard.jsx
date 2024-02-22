import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function CountryCard({name,flag,population,region,capital,data,backgroundColor}) {
  return (
    <Link className='w-3/4 ' to={`${name}`} state={data} >
      <div className={`${backgroundColor ? 'dark':' '}   card rounded-lg overflow-hidden shadow-lg shadow-black-100`}>
        <div className="flag">
          <img className='w-full h-48' src={flag} alt= {name + "flag"} />
        </div>
        <div className="countryInformation  py-2 px-4">
          <h1 className='text-2xl font-bold mb-2'>{name}</h1>

          <p><span className='font-medium'>Population: </span><span>{population}</span></p>
          <p><span className='font-medium'>Region: </span><span>{region}</span></p>
          <p><span className='font-medium'>Capital: </span><span>{capital}</span></p>
        </div>
      </div>
    </Link>
  )
}
