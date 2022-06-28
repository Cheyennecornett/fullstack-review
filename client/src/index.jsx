import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []

    }

  }

  search (term) {
    // console.log(`${term} was searched`);
    // $.ajax({
    //   type: "POST",
    //   url: '/repos',
    //   data: {
    //     username: term
    //   },
    //   success: () => {
    //     this.getRepos();
    //   }
    // });
    axios
      .post('/repos', { username: term })
      .then(() => {
        return this.getRepos();
      })
      .catch(err => {
        console.log(err);
      });

  }

  getRepos() {
  //  $.ajax({
  //   type: 'GET',
  //   url: '/repos',
  //   success: (repos) => {
  //     console.log(repos)
  // this.setState({repos: repos})};
  //  },
  //  error: () => {
  //   console.log('ajax get rewuest failed');
  //  })
  return axios.get('/repos').then(({ data }) => {
    this.setState({
      repos: data
    });
  });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));