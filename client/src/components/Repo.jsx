import React from 'react';


const Repo = ({repo}) => (
  <div>
    <div>Github Username: {repo.repo_owner}</div>
    <a href={repo.url}>{repo.repo_name}</a>
    <div>Forks:{repo.forks_count}</div>
  </div>
);

export default Repo;