import './styles.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png'

const Marker = ({ petshopicon }) => {
	const { petshopMapSelected } = useSelector((state) => state.shop);
	return (
		<Link to={`/petshop/${petshopicon._id}`}>
			<img src={petshopMapSelected === petshopicon._id ? MarkerIconSelected : MarkerIcon} />
			<img alt={petshopicon.nome}
				src={petshopicon.logo}
				className="img-marker"
			/>
		</Link>

	)
}

export default Marker