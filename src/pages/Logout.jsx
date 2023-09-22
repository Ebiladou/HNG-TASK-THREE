import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className='logout-btn'> 
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Logout