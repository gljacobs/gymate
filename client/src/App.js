  
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './Pages/Home';
import SignUp from './Pages/SignUp'
import Navbar from './Components/Navbar';

// Make this functional
class App extends React.Component {


  render() {
    return (
      <div>
        <Router>
          <Navbar logout={this.logout} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Signup' exact component={SignUp} />
          </Switch>
        </Router>
      </div>
    );

  }
}

export default App;










