import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'
import Cadastro from './pages/cadastro/'
import Checkout from './pages/checkout'

ReactDOM.render(
  <React.StrictMode>
  {/* <Cadastro/> */}
  <Checkout/>
  </React.StrictMode>,
  document.getElementById('root')
);


