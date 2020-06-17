import React from 'react';
import {Corpo, BoxContainer, BoxItem, Title} from './global';
// import { Container } from './styles';

function Menu({history}) {

    

  return (
    <Corpo>
     
      <BoxContainer>
        
        <BoxItem onClick={() => history.push('/appgithub')}>
          <Title>GitHub App</Title>
        </BoxItem>

      

      </BoxContainer>
    </Corpo>

  );
}

export default Menu;