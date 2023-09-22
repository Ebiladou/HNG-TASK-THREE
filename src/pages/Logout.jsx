import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout({setUser}) {

    const navigate = useNavigate();

  const handleLogout = () => {
    setUser(false);
    navigate('/');
  };

  return (
    <div className='logout-btn'> 
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Logout