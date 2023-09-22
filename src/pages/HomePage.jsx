import { useState } from 'react';
import NavBar from '../components/NavBar';
import Gallery from './Gallery';

function HomePage({setUser}){
    const [searchQuery, setSearchQuery] = useState('');

    	return (
		<>
			<NavBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				setUser={setUser}
			/>
			<Gallery searchQuery={searchQuery} />
		</>
	);
}

export default HomePage;