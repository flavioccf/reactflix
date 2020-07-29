import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact></Route>
    <Route path="/cadastro/video" component={CadastroVideo} exact></Route>
    <Route path="/cadastro/categoria" component={CadastroCategoria} exact></Route>
    <Route component={() => (<div>404</div>)}></Route>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


