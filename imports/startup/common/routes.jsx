// Frontend
// imports / startup / client / routes.jsx

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components

// App
import App from '../../ui/components/app';

// Tweet
import TweetsContainer from '../../ui/components/tweets';
import Tweet from '../../ui/components/tweet';

// User
import UserLogin from '../../ui/components/user/login';
import UserRegister from '../../ui/components/user/register';

const AppRoutes = (
    <Router history={browserHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ TweetsContainer } />
            <Route path="tweet" component={ Tweet } />
            <Route path="login" component={ UserLogin } />
            <Route path="register" component={ UserRegister } />
        </Route>
    </Router>
);

export default AppRoutes;