import React, { Suspense } from 'react';
import { Route,Switch } from "react-router-dom";
import PagenotFound from './404-page';

const Dashboard = React.lazy(() => import('./dashboard'));

function RouterOutlet(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact={true} path="/" render={props => (<Dashboard {...props} />)} />
                <Route exact={true} path="/dashboard" render={props => (<Dashboard {...props} />)} />
                <Route component={PagenotFound} />
            </Switch>
        </Suspense>
    );
}

export default RouterOutlet;
