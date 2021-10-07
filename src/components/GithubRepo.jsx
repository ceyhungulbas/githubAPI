import React, { useState, useEffect } from "react";

const GithubRepo = (props) => {
  console.log("props: ", props);

  const [githubProfileRepo, setGithubProfileRepo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.user.login}/repos`)
      .then((response) => response.json())
      .then((data) => setGithubProfileRepo(data));
  }, [props.user.login]);

  return (
    <>
      {githubProfileRepo.map((info, key) => {
        return (
          <div className="githubRepo" key={key}>
            <a href={info.html_url} target="_blank" rel="noopener noreferrer">
              - {info.name}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default GithubRepo;
