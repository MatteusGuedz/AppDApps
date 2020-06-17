import React from 'react';
import { 
   InfoUser,
   ImageUser,
   NameUser,
   Link,
   ReposUser,
   Bold,
   Info 
  } from './styles';

function infoUser({ 
userinfo
  }) {
  return (
    <InfoUser>
        <ImageUser src={userinfo.photo}/>
        <NameUser>
        <Link href={`https://github.com/${userinfo.login}`}>{userinfo.username}</Link>
        </NameUser>

        <ReposUser>
          <Info>Repositorios:<Bold>{userinfo.repos}</Bold></Info>
          <Info>Seguidores:<Bold>{userinfo.followers}</Bold></Info>
          <Info>Seguindo:<Bold>{userinfo.following}</Bold></Info>
        </ReposUser>

       
      </InfoUser>
  )
    
}

export default infoUser;