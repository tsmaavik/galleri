import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import {Home} from './components/Home';
import {Album} from './components/Album';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <div class="head center">
                <ul>
                  <li><Link to='/'>Album</Link></li>
                  <li><Link to='/slide'>Alle bilder</Link></li>	
                </ul>
              </div>
          <div className="content center">          
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