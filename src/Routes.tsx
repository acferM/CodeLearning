import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import ConteudosIniciante from './pages/ConteudosIniciante';
import ConteudosAvançado from './pages/ConteudosAvançado';
import VideoPlayer from './pages/VideoPlayer';

const Routes:React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/sobre" component={About} />
      <Route path="/conteudos/iniciante" component={ConteudosIniciante} />
      <Route path="/conteudos/avançado" component={ConteudosAvançado} />
      <Route path="/player" component={VideoPlayer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
