import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/signForms/signin/Signin';
import Signup from './components/signForms/signup/Signup';
import Main from './components/Main';

function App() {
  
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

export default App;
