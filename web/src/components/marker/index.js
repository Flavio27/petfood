import './styles.css'
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png'

const Marker = () =>{
	return(
		<div>
			<img src={MarkerIcon}/>
			<img alt="petlove"
					src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
					className="img-marker"
				/>
		</div>
		
	)
}

export default Marker