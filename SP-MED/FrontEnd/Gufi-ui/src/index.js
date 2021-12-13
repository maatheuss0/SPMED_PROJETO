import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'

import './index.css';

import home from './pages/home/App';
import consultas from './pages/consultas/consultas'
import notFound from './pages/notFound/notFound';
import login from './pages/login/login';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={home}  /> {/* Home */ }
        <Route path="/consultas" component={consultas} /> {/* Consultas */ }
        <Route path="/notFound" component={notFound} /> {/* notFoynd */ }
        <Route path="/login" component={login} /> {/* login */ }
        <Redirect to="/notFound"  /> {/* Redirencina para Not Found caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
