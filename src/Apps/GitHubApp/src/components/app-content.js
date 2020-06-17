
import React from 'react'
import Search from './Search';
import InfoUser from './InfoUser';
import Actions from './actions';
import {BoxRepo, BoxFavorite} from './Boxers';
import {
  Aplicativo,
  Boxs
} from '../global';
const AppContent = ({
   userinfo,
   repos,
   starred,
   handleSearch,
   getRepos,
   getStarred,
   isFeathing

 }) => (
  <Aplicativo>
      
  <Search  isDisabled={isFeathing} handleSearch={handleSearch}/>
  {isFeathing && <div>Carregando...</div>}
  {!!userinfo && <InfoUser 
     userinfo={userinfo}    

     />}
  {!!userinfo && <Actions 
     getRepos={getRepos}
     getStarred={getStarred}
  />}


<Boxs> 

 
  
{!!repos.length && 
  <BoxRepo  
  title="Repositorios: "
  repos={repos}
  />
}    
 
{!!starred.length && 
  <BoxFavorite 
    title="Favoritos: "
    repos={starred}
  />
  }
</Boxs>     
   
</Aplicativo>
)

export default AppContent