import Header from './Header'
import Search from './Search'
import Profile from './Profile'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

export default function App() {

    
    const [searchValue, setSearchValue] = useState(""); // Store input value
    const [showProfile, setShowProfile] = useState(false);

    return (
        <>
        <Header/>
        <Search setSearchValue={setSearchValue} setShowProfile={setShowProfile}/>
        {showProfile && <Profile userID={searchValue}/>}
        
        </>
    );
}
 
