import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation'

// Pages
import Login from './pages/Login';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/' exact component={Login} />
                </Switch>
            </Router>
        )
    }
}

export default App;
