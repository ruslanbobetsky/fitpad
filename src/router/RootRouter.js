import { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { authRoutes, appRoutes } from './routes';
import AuthLayout from '../components/layouts/AuthLayout';
import paths from './paths';
import AppLayout from '../components/layouts/AppLayout';
import AuthManager from '../services/AuthManager';

export default class RootRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: AuthManager.isLoggedIn(),
    };
  }

  componentDidMount() {
    this.unsubscribeFromLoginStatusChange = AuthManager.onLoginStatusChange(
      (token) => {
        this.setState({ loggedIn: !!token });
      }
    );
    this.unsubscribeFromOnLogin = AuthManager.onLogin(() => {
      console.log('User was logged in!');
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromLoginStatusChange();
    this.unsubscribeFromOnLogin();
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        {loggedIn ? (
          <AppLayout>
            <Switch>
              {appRoutes.map(({ path, Component: C, exact }) => (
                <Route exact={exact} path={path}>
                  <C />
                </Route>
              ))}
              <Redirect to={paths.articles} />
            </Switch>
          </AppLayout>
        ) : (
          <AuthLayout login={this.login}>
            <Switch>
              <>
                {authRoutes.map(({ path, Component: C, exact }) => (
                  <Route exact={exact} path={path}>
                    <C />
                  </Route>
                ))}
              </>
              <Redirect to={paths.login} />
            </Switch>
          </AuthLayout>
        )}
      </Router>
    );
  }
}
