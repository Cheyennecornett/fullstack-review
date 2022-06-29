import React from 'react';


const Repo = ({repo}) => (
  <div>
    <img className="avatar" src={repo.img}></img>
    <div>Github Username: {repo.repo_owner}</div>
    <a href={repo.url}>{repo.repo_name}</a>
    <div>Forks:{repo.forks_count}</div>
    <br></br>
  </div>
);

export default Repo;