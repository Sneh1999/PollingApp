import React from 'react';
import { Router, Route ,Switch} from 'react-router';
import Audience from './Audience'
import App from './App';
import Board from './Board';


const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/audience" component={Audience} />
            <Route path="/board" component={Board} />
            
        </Switch>
    </Router>
);
export default Routes;
