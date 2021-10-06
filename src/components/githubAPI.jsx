import React, { useState, useEffect } from 'react';
import GithubRepo from './GithubRepo';
import { Github } from "react-bootstrap-icons";
import "./GithubAPI.css"


const GithubAPI = () =>{
    const [user, setUser] = useState("ceyhungulbas")
    const [tempUser, setTempUser] = useState("")
    const [githubProfile, setGithubProfile] = useState([])

    useEffect(() =>{
        fetch(`https://api.github.com/search/users?q=${user}`)
            .then(response => response.json())
            .then(data => setGithubProfile(data.items))
    }, [user])

    useEffect(() => {
        fetch("https://api.github.com/rate_limit")
            .then(response => response.json)
            .then(data => console.log("data: ", data))

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(tempUser)
    }



    return(
        <div className="githubAPIMainDiv">
            <h1>Github API</h1>
            <div className="githubAPIMainDivFormArea">
                <form onSubmit={handleSubmit}>
                    <label>User</label>
                    <input 
                        type="text"
                        onChange={(e) => setTempUser(e.target.value)}
                    />
                    <button onClick={handleSubmit}> type="submit" value="Search!" </button>
                </form>
            
            </div>
            <div className="github">
                <div className="githubProfileParentDiv">
                    {githubProfile.map((user, key) => {
                    return(
                        <div className="githubProfileChildDiv" key={key}>
                            <h2>{user.login}</h2>
                            <img src={user.avatar_url} alt={user.login} />
                            <div className="githubProfileChildDivDetails">
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer"><Github /></a>
                            </div>
                            <div className="githubProfileRepoParentDiv">
                                <GithubRepo user={user} />
                            </div>
                        </div>
                        
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GithubAPI
