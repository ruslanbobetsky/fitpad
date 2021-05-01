import { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Main from '../pages/Main/Main';
// import Health from '../pages/Health/Health';
// import Exercise from '../pages/Exercise/Exercise';
// import Training from '../pages/Training/Training';
// import Cardio from '../pages/Cardio/Cardio';
// import Nutrition from '../pages/Nutrition/Nutrition';
// import Drugs from '../pages/Drugs/Drugs';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import AuthLayout from '../components/layouts/AuthLayout';
import paths from './paths';
import AppLayout from '../components/layouts/AppLayout';
import AuthManager from '../services/AuthManager';

const authRoutes = [
  {
    path: paths.login,
    Component: Login,
    exact: true,
  },
  {
    path: paths.signUp,
    Component: SignUp,
    exact: true,
  },
];

const appRoutes = [
  {
    path: paths.myArticles,
    Component: Main,
    exact: true,
  },
];

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
              <Redirect to={paths.myArticles} />
            </Switch>
          </AppLayout>
        ) : (
          <AuthLayout login={this.login}>
            <Switch>
              {authRoutes.map(({ path, Component: C, exact }) => (
                <Route exact={exact} path={path}>
                  <C />
                </Route>
              ))}
              <Redirect to={paths.login} />
            </Switch>
          </AuthLayout>
        )}
      </Router>
    );
  }
}
