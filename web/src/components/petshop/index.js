import { useDispatch, useSelector } from 'react-redux'
import { setShopMapSelected, setMapCenter } from '../../store/modules/shop/actions'
import './styles.css'

const PetShop = ({ petshop }) => {

	const dispatch = useDispatch();
	const { petshopMapSelected } = useSelector((state) => state.shop);

	const setSelectedPetshop = () => {

    dispatch(setShopMapSelected(petshop._id));
    dispatch(setMapCenter(petshop.location));

	}

	return (
		<li
			className={`petshop d-inline-block ${petshopMapSelected === petshop._id ? 'active' : ''}`}
			onClick={() => setSelectedPetshop()}
		>
			<div className="d-inline-block">
				<img alt={petshop.nome}
					src={petshop.logo}
					className="img-fluid"
				/>
			</div>
			<div className="d-inline-block pl-3 align-bottom spaceImg">
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
		</li>
	)
}

export default PetShop