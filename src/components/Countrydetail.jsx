import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useOutletContext, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Bordercountry from './bordercountry'
import Shimmerdetails from './shimmerdetails'
import './style.css'
import { Theme } from '../contexts/theme.js'

export default function Countrydetail() {
  const state = useLocation().state;
  const [isdark] = useContext(Theme);
  console.log(isdark)
  const backArrow = <svg className="mb-0.5 ml-4 mr-2 h-4 inline border-0 border-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={`${isdark ? '#ffffff' : '#000000' }`} d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
  const getcurrencies = (currencyobject)=>{
    const generateCurrenciesString =(obj)=>{
      let str = "";
      for(const key in obj){
        if(typeof(obj[key])=='object'){
          str = generateCurrenciesString(obj[key]) + str
        }
        else{
          if(key=='symbol'){
            str = str + '('+obj[key]+'),' 
          }
          else{
            str = str + obj[key] ;
          }
        }
      }
      return str
    }
    let str =  generateCurrenciesString(currencyobject);
    return str.substring(0,str.length-1)
  }
  let borderlist = []
  const {countrykanaam} = useParams()
  const [detail,setdetail] = useState({})
  const update = (data)=>{
    setdetail({
      name:data.name.common,
      nativeName:Object.values(data.name.nativeName)[0].common,
      population:data.population,
      region:data.region,
      subregion:data.subregion,
      capital:data.capital,
      flag:data.flags.svg,
      tld:data.tld,
      languages:Object.values(data.languages).join(', '),
      currencies: getcurrencies(data.currencies),
      borders: data.borders
    })
  }
 
    useEffect(function (){
      if(state==null){
        console.log('fetching...')        
        fetch(`https://restcountries.com/v3.1/name/${countrykanaam}?fullText=true`)
        .then((response)=>response.json())
        .then(([data])=>{ 
          update(data);
        })
      }
      else{
        console.log('not fetching..')
        update(state)
      }
    },[countrykanaam])
    console.log('detail',detail)
    return (
      <>
        {
          Object.keys(detail).length == 0 ? <Shimmerdetails/> :
          <main className={`${isdark ? 'extradark': ' '} @apply min-h-calc  country-detail px-6 pt-11 lg:px-20`}>
            <Link className={`${isdark ? 'dark': ' '} shadow-sm shadow-slate-800  py-1 pr-4`} to='/'>{backArrow} Back</Link>
            <div className='main-container mt-16  lg:flex gap-10 '>
              <div className=' flag-container  md:h-96 lg:max-w-max'>
                <img className=' w-full h-full' src={detail.flag} alt="flag" />
              </div>
              <div className='information-container my-auto  '>
                <h1 className='text-3xl font-bold'>{countrykanaam}</h1>
                <div className='details-container flex flex-col gap-10  md:flex-row'>
                    <div className='major-details-container md:w-1/2 mt-5 flex flex-col gap-3'>
                    <p><span className='font-semibold'>Native Name: </span><span>{detail.nativeName}</span></p>
                    <p><span className='font-semibold'>Population: </span><span>{detail.population}</span></p>
                    <p><span className='font-semibold'>Region: </span><span>{detail.region}</span></p>
                    <p><span className='font-semibold'>Sub Region: </span><span>{detail.subregion}</span></p>
                    <p><span className='font-semibold'>Capital: </span><span>{detail.capital}</span></p>
                  </div>
                  <div className='minor-details-container flex flex-col gap-3  md:mt-5' >
                    <p><span className='font-semibold'> Top Level Domain: </span><span>{detail.tld}</span></p>
                    <p><span className='font-semibold'> Currencies: </span><span>{  detail.currencies}</span></p>
                    <p><span className='font-semibold'> languages: </span><span>{detail.languages}</span></p>
                  </div>

                </div>

                {
                  detail.borders!==undefined &&

                <div className=' flex items-center gap-x-2 gap-y-2 flex-wrap  mt-10 '>
                  <b>Border countries: </b>
                  {
                    detail.borders.map((code)=>{
                     return <Bordercountry isdark={isdark} key={code} bordercode={code}/>
                    })
                  }
                  {
                     
                  }
                  </div>

                }
              </div>
            </div>
          </main>
        } 
        
    </>
  )
}
