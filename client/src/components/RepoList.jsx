import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <br/>
    <br/>
    {props.repos.map((ele)=>{
    	return <Repo repo={ele}/>
    })}
  </div>
)

export default RepoList;

//RENDER REPO LIST ACCORDING TO STATE
//ONLY MOST RECENT 25