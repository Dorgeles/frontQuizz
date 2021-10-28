import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Quizz from './components/QuizzPage/Quizz';

const PageNotFound = () => (
  <div>404 not Found</div>
)

const routes = (
  <BrowserRouter>
    <div>
    <Switch> 
      <Route path="/" component={App} exact={true}/>
      <Route path="/quizz" component={Quizz} />
      <Route component={PageNotFound}/>
    </Switch>
      
    </div>
  </BrowserRouter>
)
ReactDOM.render(
  routes,
  document.getElementById('root')
);

