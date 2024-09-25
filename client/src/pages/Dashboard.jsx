import React, { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import DashProfile from '../components/DashProfile';
import DashSidebar from '../components/DashSidebar'
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComp from '../components/DashboardComp';

export default function Dashboard() {
  const [tab, setTab] = useState('');
  const location = useLocation();
  useEffect(()=>{
    const urlPrarams = new URLSearchParams(location.search);
    const tabFromUrl = urlPrarams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  })
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
    <div className='md:w-56'>
      {/* Sidebar */}
      <DashSidebar />
    </div>
    {/* profile... */}
    {tab === 'profile' && <DashProfile />}
    {/* posts... */}
    {tab === 'posts' && <DashPosts />}
    {/* users */}
    {tab === 'users' && <DashUsers />}
    {/* comments  */}
    {tab === 'comments' && <DashComments />}
    {/* dashboard comp */}
    {tab === 'dash' && <DashboardComp />}
  </div>
  )
}
