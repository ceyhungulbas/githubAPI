import React, { useState, useEffect } from 'react';

const GithubRepo = (props) =>{
    console.log("props: ", props);

    const [user, setUser] = useState(props)
    const [githubProfileRepo, setGithubProfileRepo] = useState([])

    useEffect(() =>{
        fetch(`https://api.github.com/users/${props.user.login}/repos`)
            .then(response => response.json())
            .then(data => setGithubProfileRepo(data))
    }, [])

    return(
        <>
            {githubProfileRepo.map((info) => {
                return(
                    <div className="githubRepo">
                        <a href={info.html_url} target="_blank" rel="noopener noreferrer">{info.name}</a>
                    </div>
                )
            })}
        </>
    )

}

export default GithubRepo