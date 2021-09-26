import React, { useState, useEffect } from 'react';
import GithubRepo from './GithubRepo';


const GithubAPI = () =>{
    const [user, setUser] = useState("")
    const [githubProfile, setGithubProfile] = useState([])

    

    useEffect(() =>{
        fetch(`https://api.github.com/search/users?q=${user}`)
            .then(response => response.json())
            .then(data => setGithubProfile(data.items))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return(
        <div className="githubAPIMainDiv">
            <h1>Github API</h1>
            <div className="githubAPIMainDivFormArea">
                <form onSubmit={handleSubmit}>
                    <span>User</span>
                    <input 
                        type="text" 
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input type="submit" />
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
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer">Github Link</a>
                            </div>
                            <div className="githubProfileRepoParentDiv">
                                <GithubRepo user = {user} />
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


{/* 
<div className="githubAPIMainDivFormArea">
    <span>Updated name: {user}</span>
    <p>Change name:</p>
    <input
        type="text"
        onChange={e => {
            setUser(e.target.value);
        }}
    />

</div> */}