import React, { Component } from 'react';
import './App.css';
import {Home} from './components/Home';
import {Album} from './components/Album';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">          
            <a href="/"><h1 className="App-title">Album</h1></a>
          </header>
          <div className="App-main">          
            <Route exact={true} path = "/" component={Home}/>
            <Route path = "/:album" render={(m) => { 
              return (<Album name={m.match.params.album}/>);
            }}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;