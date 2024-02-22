import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import Shimmercard from './shimmercard';


export default function CountriesContainer({backgroundColor,regionTosearch,countryTosearch}) {
    const [countriesdata, setcountriesdata] = useState([]);
    let URL="https://restcountries.com/v3.1/all";
    if(regionTosearch != "--none--"){
        URL=`https://restcountries.com/v3.1/region/${regionTosearch}`
    }

    useEffect(function getdata(){
        fetch(URL)
        .then((res)=>{ res.json()
            .then((data)=>{
                setcountriesdata(data.filter((country)=>country.name.common.toLowerCase().includes(countryTosearch)))
            })
        })
    },[countryTosearch,regionTosearch])

  return (

        countriesdata.length==0 ?(<Shimmercard/>) :
        (
        
      <div className='grid place-items-center gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
               
               countriesdata.map((country)=>{
                return(
                    <CountryCard
                    key={country.name.common}
                    name={country.name.common}
                    flag={country.flags.png}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    data = {country}
                    backgroundColor={backgroundColor}
                    />
                    )
               })
        }

        </div>)
    
  )
}
