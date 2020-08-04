import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';

require('dotenv').config();

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      {/* <Route path="/cadastro/categoria" component={CadastroCategoria} exact /> */}
      <Route component={() => (<div>404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
