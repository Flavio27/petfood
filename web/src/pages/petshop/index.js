import React from 'react'
import Header from '../../components/header';

function PetShop() {
	return (
		<div className="h-100">
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-2">
					<img alt="petlove" 
					src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
					className="img-fluid"
					/>
					<b>PetLove</b>
					</div>
					<div className="col-10">

					</div>
				</div>
			</div>
		</div>
	)
}

export default PetShop
