import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import history from '../helpers/history';
import Login from '../modules/Auth/login.container';
import PublicSection from './publicSection';

import PrivateSection from './privateSection';
import DashboardContainer from '../modules/Dashboard/dashboard.container';

import './app.scss';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <PublicSection>
          <Switch>
            <Redirect path="/" exact to="/login" />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </PublicSection>
        <PrivateSection>
          <Switch>
            <Redirect path="/" exact to="/dashboard" />
            <Route path="/dashboard" render={DashboardContainer} />
            {routes.map(({ url, component: Cmp }) => <Route path={url} render={() => <Cmp />} />)}
          </Switch>
        </PrivateSection>
      </Router>
    </div>
  );
}

export default App;
