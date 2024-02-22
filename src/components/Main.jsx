import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Themeprovider } from '../contexts/theme.js';
export default function Main() {
  const [isDark,setIsdark] = useState(JSON.parse(localStorage.getItem('IsDark')));
  return (
    <Themeprovider>
    <Header />
    <Outlet />
    </Themeprovider>
  )
}
