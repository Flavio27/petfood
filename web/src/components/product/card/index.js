import { useDispatch, useSelector } from 'react-redux';
import { toggleCartProduct } from '../../../store/modules/shop/actions';
import React from 'react';
import './styles.css';

const Product = ({ produto }) => {

	const dispatch = useDispatch();
	const { cart } = useSelector(state => state.shop)
	const added = cart.findIndex((p) => p._id === produto._id) !== -1;


	return (
		<div className="product col-3">
			<span className="mdi mdi-star"></span> {produto.avaliacoes}
			<img src={produto.capa}
				className="img-fluid align-center"
				alt="" />
			<div className="row">
				<div className="col-6">
					<h4>
						<label className="badge badge-primary">R$ {produto.preco.toFixed(2)}</label>
					</h4>
				</div>
				<div className="col-6 button-div">
					<button
						onClick={() => dispatch(toggleCartProduct(produto))}
						className={`btn btn-${added ? 'secondary' : 'primary'} rounded-circle`}>
						{added ? '-' : '+'}
					</button>
				</div>
			</div>
			<small>
				<b>{produto.nome}</b>
			</small>
		</div>
	)
}

export default Product
