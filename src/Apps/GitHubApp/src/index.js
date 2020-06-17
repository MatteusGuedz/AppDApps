import React, {Component} from 'react';
import ajax from '@fdaciuk/ajax';
import AppContent from './components/app-content';


class AppGit extends Component {
  constructor(){
  super()
  this.state = {
    userinfo:null,
    repos: [],
    starred:[],
    isFeathing:false
    }
  this.handleSearch = this.handleSearch.bind(this)
  //createClass o bind é automatico
  }

  getGitApiUrl(username, type){
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch(e){   
    const value = e.target.value
    const key = e.which || e.keyPress
    const ENTER =  13
     
    if(key === ENTER){
      this.setState({ isFeathing:true})
      ajax()
        .get(this.getGitApiUrl(value))
        .then(async (result) => {
    
      this.setState({
      userinfo:{
        photo: result.avatar_url,
        username:result.name,
        login:result.login,
        repos: result.public_repos,
        followers:result.followers,
        following:result.following,
      },
      repos: [],
      starred:[],
      })
    }).always(() => this.setState({isFeathing: false}))
      }   
    }

    getRepos(type){
      return (e) => {
        const username = this.state.userinfo.login;
    ajax()
      .get(this.getGitApiUrl(username, type))
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => {
            return {
            name: repo.name,
            link: repo.html_url,
            id: repo.id
            }
          }) 
        })
      })
    }
  } 
  

  render(){
    return ( 
  <AppContent 
        {...this.state}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
      handleSearch={this.handleSearch} 
      /*+facil que 
        * {(e) => this.handleSearch(e)} ou 
        * {this.handleSearch(e).bind(this)} */    
    />
   )
  }
}

export default AppGit;