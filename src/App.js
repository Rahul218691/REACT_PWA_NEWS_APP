import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Home,Nav} from './components';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route component={Home} path='/' exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;