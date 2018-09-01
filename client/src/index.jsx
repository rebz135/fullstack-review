import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  componentDidMount() {
    this.retrieve()
  }

  search (term) {
    console.log(`${term} was searched`);

    $.ajax({
      url: "http://localhost:1129/repos",
      method: "POST",
      data: JSON.stringify({term}),
      contentType: "application/json",
      // dataType: "json",
      success: (data)=>{
        this.retrieve();
      },
      error: (err)=>{}
    })
  }

  retrieve () {
    console.log('retrieve triggered')
    $.ajax({
      url: "http://localhost:1129/repos",
      method: "GET",
      // dataType: "json",
      success: (data)=>{
        this.setState({repos: data});
      },
      error: (err)=>{}
    })

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