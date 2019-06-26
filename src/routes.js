import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Contact from './components/Contact';
import PageContruction from './components/PageContruction';
import Page404 from './components/Page404';

const AppRouter = () =>
    <App>
        <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route exact path="/page-contruction" component={PageContruction} />
            <Route component={Page404} />
        </Switch>
    </App>

export default AppRouter;