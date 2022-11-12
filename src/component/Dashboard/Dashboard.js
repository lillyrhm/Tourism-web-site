import React from 'react'
import DashSidebar from './DashSidebar/DashSidebar'
import Topbar from './Topbar/Topbar'
import './dashboard.css';
import HomePage from '../../Pages/Home/HomePages';

export default function Dashboard() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <DashSidebar />
        <div className='others'>
        <HomePage />
        </div>
        </div>
    </div>
  )
}


