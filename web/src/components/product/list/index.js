import React from 'react';
import './styles.css';

export default function Product() {
  return (
    <div className="col-12 product-list">
      <div className="row">
        <div className="col-3">
          <img alt="racao" src="https://www.petlove.com.br/images/products/226606/product/Ra%C3%A7%C3%A3o_Special_Dog_Premium_Carne_para_C%C3%A3es_Adultos_1777282.jpg?1596553246" className="img-fluid" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-secondary">R$ 30,00</label>
          </h6>
          <small>
            <b>Clique para visualizar o vídeo Ração Special Dog Premium Carne para Cães Adultos</b>
          </small>
        </div>
        <div className="col-3">
        <a className="btn btn-secondary rounded-circle">-</a>
        </div>
      </div>
    </div>
  );
}
