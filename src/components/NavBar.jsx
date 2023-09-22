import React from "react";
import Logout from '../pages/Logout'

function NavBar({ searchQuery, setSearchQuery, setUser }) {
 
  const handleSearch = (e) => {
		const query = e.target.value;
		setSearchQuery(query);
	};

	return (
		<div className='nav-container remove-container'>
			<div className='logo remove-h1'>
				<h1>
					IMG<span>allery</span>
				</h1>
			</div>
			<div className='search-container'>
				<input
					className='search-bar'
					type='text'
					placeholder='Search...'
					value={searchQuery}
					onChange={handleSearch}
				/>
			</div>
			<Logout setUser={setUser} />
		</div>
	);
}

export default NavBar;