import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//IMPORTE DAS TELAs
import Menu from './components/_Menu/Menu';
import AppGit from './Apps/GitHubApp/src';


function Routes(){
 return (
  <BrowserRouter>
   <Switch>
   <Route path="/" exact component={Menu}/>  
   <Route path="/appgithub" component={AppGit}/>   
   </Switch>
  </BrowserRouter>
  );
}

export default Routes;