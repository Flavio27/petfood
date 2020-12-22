import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCartProduct } from '../../../store/modules/shop/actions';
import './styles.css';


export default function Product({ produto }) {

  const dispatch = useDispatch();

  return (
    <div className="col-12 product-list">
      <div className="row">
        <div className="col-3">
          <img alt="racao" src={produto.capa} className="img-fluid" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ {produto.preco.toFixed(2)}</label>
          </h6>
          <small>
            <b>{produto.nome}</b>
          </small>
        </div>
        <div className="col-3">
          <a
            onClick={() => dispatch(toggleCartProduct(produto))}
            className="btn btn-secondary rounded-circle">-
          </a>
        </div>
      </div>
    </div>
  );
}
