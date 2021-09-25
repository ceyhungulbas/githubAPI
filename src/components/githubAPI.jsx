import React, { useState, useEffect } from 'react';


const GithubAPI = () =>{
    const [user, setUser] = useState("ceyhungul")
    const [githubProfile, setGithubProfile] = useState([])
    const [githubProfileRepo, setGithubProfileRepo] = useState({})

    

    useEffect(() =>{
        fetch(`https://api.github.com/search/users?q=${user}`)
            .then(response => response.json())
            .then(data => setGithubProfile(data.items))
            .then(data => console.log("data githubProfile", data))
            .then(console.log("githubProfile", githubProfile))

        fetch(`https://api.github.com/users/${user}/repos`)
            .then(response => response.json())
            .then(data => setGithubProfileRepo(data))
            .then(data => console.log("data githubProfileRepo", data))
            .then(console.log("githubProfileRepo", githubProfileRepo))
    }, [])

    return(
        <div className="githubAPIMainDiv">
            <h1>Github API</h1>
            <div className="githubAPIMainDivFormArea">

            
            </div>
            <div className="github">
                <div className="githubProfileParentDiv">
                    {githubProfile.map((user) => {
                    return(
                        <div className="githubProfileChildDiv">
                            <h2>{user.login}</h2>
                            <img src={user.avatar_url} alt={user.login} />
                            <div className="githubProfileChildDivDetails">
                                {/* {user.twitter_username ? <a href=`https://twitter.com/${user.twitter_username}`>Twitter</a> : null} */}
                                <a href={user.html_url} target="_blank">Github Link</a>
                            </div>
                        </div>
                        
                        )
                    })}
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default GithubAPI


{/* <div className="githubAPIMainDivFormArea">
    <span>Updated name: {user}</span>
    <p>Change name:</p>
    <input
        type="text"
        onChange={e => {
            setUser(e.target.value);
        }}
    />

</div> */}