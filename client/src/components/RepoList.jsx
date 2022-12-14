import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <br></br>

    {props.repos.map(repo => <Repo repo={repo}/>)}
  </div>
)

export default RepoList;