import React from 'react'
import './styles.css'

const Product = () => {
	return (
		<div className="product col-3">
			<img src="https://a-static.mlcdn.com.br/618x463/racao-pedigree-equilibrio-natural-para-caes-adultos-de-racas-pequenas-1-kg/tanakaopetshop/4987989548/8573c3c4c05f7745db8e995f66e71138.jpg"
				className="img-fluid align-center"
				alt="" />
			<div className="row">
				<div className="col-6">
					<h4>
						<label className="badge badge-primary">R$ 90,00</label>
					</h4>
				</div>
				<div className="col-6 button-div">
					<button className="btn btn-primary rounded-circle">+</button>
				</div>
			</div>
			<small>
				<b>Ração Pedigree Equilíbrio Natural para Cães Adultos de Raças Pequenas - 1 Kg</b>
			</small>
		</div>
	)
}

export default Product
