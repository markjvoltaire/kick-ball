import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Route, Switch } from 'react-router-dom';
import Players from './PlayerFunction/Players';
import './App.css';
import Home from './Home/Home';
import Teams from './TeamFunction/Teams';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/teams" exact>
          Go To Teams
        </NavLink>

        <NavLink to="/players" exact>
          Go To Players
        </NavLink>

        <NavLink to="/" exact>
          Home
        </NavLink>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Players" component={Players} />

          <Route path="/teams">
            <Teams />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
