import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Router>
        </div>
    )
}

export default App