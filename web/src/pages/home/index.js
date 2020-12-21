import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestPetShops } from '../../store/modules/shop/actions'
import './styles.css'
import Header from '../../components/header'
import PetShop from '../../components/petshop'
import Map from '../../components/map'


const Home = () => {
	const dispatch = useDispatch()
	const { petshops } = useSelector((state) => state.shop)

	useEffect(() => {
		dispatch(requestPetShops())
	}, [])

	return (
		<div className="h-100">
			<Header />
			<div className="container-fluid petshop-list-container">
				<div className="col-12 px-4 text-center">
					<h5>Mais proximos de você (5)</h5>
				</div>
				<ul className="col-12 petshop-list">
					{petshops.map(p => (
						<PetShop petshop={p}/>
					))}
				</ul>
			</div>
			<Map petshops={petshops}/>
		</div>
	)
}

export default Home; 