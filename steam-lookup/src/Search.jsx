import { useState } from "react";


export default function Search({ setSearchValue, setShowProfile }){

    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        setSearchValue(inputValue); // Pass input value to App component
        setShowProfile(true); // Show Profile component
    };
    
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col text-center">
                    <p className="text">Look up Steam User by ID</p>
                    <div className="d-flex justify-content-center">
                        <input type="text" 
                        className="form-control w-50 " 
                        placeholder="Search for a Steam user"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button className="btn btn-dark ms-2" 
                        onClick={handleSearch}
                        disabled={!inputValue.trim()}
                        >Look Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
