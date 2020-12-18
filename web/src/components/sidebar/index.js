
import React, { useEffect, useState } from 'react'
import Dock from 'react-dock'
import Product from '../product/list'
import './styles.css'

const SideBar = () => {
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		window.addEventListener('openCart', () => {
			setOpened(true)
		});
	}, [])

	return (
		<Dock
			isVisible={opened}
			position="right"
			onVisibleChange={(visible) => setOpened(visible)}
		>
			<div className="container-fluid h-100 pt-4 sidebar">
				<h5>Minha Sacola (5)</h5>
				<div className="row products">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(p => (
						<Product />
					))}
				</div>
				<div className="row align-items-end footer">
					<div className="col-12 d-flex justify-content-between align-items-center">
						<b className="d-inline-block">Total</b>
						<h3 className="d-inline-block">R$ 90,00</h3>
					</div>
					<button className="btn btn-block btn-lg btn-primary rounded-0 h-50 w-100 align-items-center ">
						Finalizar Compra
					</button>
				</div>
			</div>
		</Dock>
	)
}

export default SideBar
