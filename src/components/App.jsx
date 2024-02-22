import React, { useContext, useState } from 'react'
import CountriesContainer from './CountriesContainer'
import CountryCard from './CountryCard'
import SearchBar from './SearchBar'
import FilterMenu from './FilterMenu'
import Header from './Header'
import { useOutletContext } from 'react-router-dom'
import './style.css';
import { Theme } from '../contexts/theme.js'

export default function App() {
    const [searchedcountry,setsearchedcountry] = useState('');
    const [selectedRegion,setselectedRegion]=useState("--none--");
    const [isDark]= useContext(Theme);
    
    console.log(isDark)
  return (
      <main className={`${isDark ? 'extradark':' '} @apply min-h-calc`}>
        <div className='flex flex-col gap-4 shadow-lg shadow-black-700 p-4 lg:flex-row justify-between' >
          <SearchBar  ChangeEvent={(e)=>{setsearchedcountry(e.target.value)}}/>
          <FilterMenu  changehandler={(e)=>setselectedRegion(e.target.value)}/>
        </div>
        <CountriesContainer backgroundColor={isDark} regionTosearch={selectedRegion} countryTosearch={searchedcountry}/>
 
      </main>
  )
}
