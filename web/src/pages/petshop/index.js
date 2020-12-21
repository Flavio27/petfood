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

	console.log(petshop.produtos)
	return (
		<div className="h-100">
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-2">
						<img alt={petshop.nome}
							src={petshop.logo}
							className="img-fluid petshop-img"
						/>
						<b>{petshop.nome}</b>
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
						{petshop.produtos?.map((p) => (
                <Product produto={p} />
              ))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Petshop
