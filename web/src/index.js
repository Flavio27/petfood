import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'
import Cadastro from './pages/cadastro/'
import Checkout from './pages/checkout'
import PetShop from './pages/petshop'

ReactDOM.render(
  <React.StrictMode>
    {/* <Cadastro/> */}
    {/* <Checkout/> */}
    <PetShop />
  </React.StrictMode>,
  document.getElementById('root')
);


