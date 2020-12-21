import './styles.css'
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png'

const Marker = ({ petshopicon }) => {
	return (
		<div>
			<img src={MarkerIcon} />
			<img alt={petshopicon.nome}
				src={petshopicon.logo}
				className="img-marker"
			/>
		</div>

	)
}

export default Marker