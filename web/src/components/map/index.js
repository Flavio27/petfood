import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'
import './styles.css'
import Marker from '../marker'


const Map = ({ petshops }) => {
	const { mapCenter } = useSelector(state => state.shop)

	return (
		<div className="container-map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
				center={mapCenter}
				defaultZoom={15}
			>
				{petshops.map(m => (
					<Marker petshopicon={m} lat={m.location.lat} lng={m.location.lng} />
				))}

			</GoogleMapReact>
		</div>
	)
}

export default Map