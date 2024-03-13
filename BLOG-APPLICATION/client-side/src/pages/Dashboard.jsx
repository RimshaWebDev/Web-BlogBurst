import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import DashSidebar from '../components/dashSidebar';
import DashProfile from '../components/dashProfile';
import DashPosts from '../components/dashPosts';
import DashUsers from '../components/dashUsers';
import DashComments from '../components/dashComments';
import DashboardComp from '../components/dashComplete';

export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() =>  {
  const urlParams = new URLSearchParams(location.search)
  const tabFromUrl = urlParams.get('tab')
  if (tabFromUrl) {
    setTab(tabFromUrl);
  }
}, 
[location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-68'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Profile.... */}
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
  );
}