import React from 'react';
import {  
  List, 
  Repo,
  Favorite,
  Boxer,
  Title,
   Link } from './styles';

function BoxRepo({title, repos}) {
  return (
    <Boxer>
    <Title>{title}</Title>
    <List>

      {repos.map( (repo) => (
        <Repo 
        key={repo.id}><Link 
        href={repo.link}>{repo.name}</Link></Repo>
      ))}
  
    </List>       
   </Boxer>


  );
}

function BoxFavorite({title, repos}) {
  return (
    <Boxer>
    <Title>{title}</Title>
    <List>

      {repos.map( (repo)=> (
        <Favorite 
        key={repo.id}><Link 
         >{repo.name}</Link></Favorite>
      ))}
  
    </List>       
   </Boxer>

  );
}


export {BoxRepo, BoxFavorite};