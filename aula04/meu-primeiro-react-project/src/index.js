import React from 'react';
import ReactDOM from 'react-dom';
import Teste from './Componente1';
import {Componente2} from './Componente2';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Teste />
      <Componente2 />
      <Teste />
      <Componente2 />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);