import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import history from '../helpers/history';
import Login from '../modules/Auth/Login.container';
import PublicSection from './PublicSection';

import PrivateSection from './PrivateSection';
import DashboardContainer from '../modules/Dashboard/Dashboard.container';

import './App.scss';

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
          </Switch>
        </PrivateSection>
      </Router>
    </div>
  );
}

export default App;
