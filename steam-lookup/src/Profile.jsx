
import { useState, useEffect } from "react";
import { parse, stringify } from 'lossless-json';


export default function Profile({ userID }) {
    // State to store user data
    const [userData, setUserData] = useState(null);
    const [dataStatus, setDataStatus] = useState(null);


    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch(`..../api/v1/users/getUser/${userID}`);
                let data = await response.text();
               
                setUserData(parse(data));  // Update state when data is available
                setDataStatus(response.status);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        if (userID) fetchData();
    }, [userID]); // Runs when userID changes

    // Show loading message until data is fetched
    if (!userData) return (
        <div className="container mt-3">
            <div className="row">
                <div className="col text-center">
                    <div className="d-flex justify-content-center">
                        <div>
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    if (dataStatus == 404) return (
        <div className="container mt-3">
            <div className="row">
                <div className="col text-center">
                    <div className="d-flex justify-content-center">
                        <div>
                            <h1>User not found</h1>
                            <p>Make sure the Steam ID is correct</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // Extract user info from state
    let steamId = userData.steamId.toString();
    let profileName = userData.profileName.toString();
    let numGames = userData.numGames.toString();
    let avgWorth = userData.avgWorth.toString();
    let pfpURL = userData.pfpSrc.toString();
    let userURL = `https://steamcommunity.com/profiles/${steamId}`;

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col text-center">
                    <div className="d-flex justify-content-center">
                        <img src={pfpURL} alt="Profile Picture" />
                        <div className="ms-3">
                            <h1><a href={userURL} target="_blank" rel="noopener noreferrer">{profileName}</a></h1>
                            <p>ID: {steamId}</p>
                            <p>Number of Games: {numGames}</p>
                            <p>Account Worth: ${avgWorth} USD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
