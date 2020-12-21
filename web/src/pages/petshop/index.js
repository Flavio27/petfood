import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPetshop } from '../../store/modules/shop/actions';
import Header from '../../components/header';
import Product from '../../components/product/card';
import './styles.css';

const Petshop = ({ match }) => {
  const dispatch = useDispatch();
  const { petshop } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestPetshop(match.params.id));
  }, []);

	return (
		<div className="h-100">
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-2">
						<img alt="petlove"
							src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
							className="img-fluid petshop-img"
						/>
						<b>PetLove</b>
						<div className="petshop-infos">
							<span className="mdi mdi-star"></span>
							<text>
								<b>2,8</b>
							</text>
							<span className="mdi mdi-cash-usd-outline"></span>
							<text>$$$</text>
							<span className="mdi mdi-crosshairs-gps"></span>
							<text>2.9 KM</text>
						</div>
						<label className="badge badge-primary">Frete Grátis</label>
					</div>
					<div className="col-10">
						<h5>Produtos</h5>
						<br />
						<div className="row list-products">
							{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(p => (
								<Product />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Petshop
