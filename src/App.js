import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Premium from './pages/Premium';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/premium" component={Premium} />
            <Route path="/academy" component={() => <h1>Academy</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
