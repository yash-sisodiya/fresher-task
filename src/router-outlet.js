import React, {Suspense} from 'react';
import { Route } from "react-router-dom";

const Pages = React.lazy(() => import('./pages/'));

function RouterOutlet(props) {
    return (   
        <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" render={props => (<Pages {...props} /> )}/>
        </Suspense> 
    );
}

export default RouterOutlet;
