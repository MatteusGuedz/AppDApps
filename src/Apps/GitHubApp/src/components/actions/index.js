import React from 'react';
import { Actions, Botao } from './styles';

function actions({getRepos,getStarred}) {
  return (
    <Actions>
    <Botao onClick={getRepos}>Ver Repositorios</Botao>
    <Botao onClick={getStarred}>Ver Favoritos</Botao>
    </Actions>   

  );
}

export default actions;