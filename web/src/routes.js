import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro/'
import Checkout from './pages/checkout'
import Home from './pages/home'
import PetShop from './pages/petshop'
import SideBar from './components/sidebar'

const Routes = () => {
	return (
		<>
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/petshop/:id" exact component={PetShop} />
				<Route path="/checkout" exact component={Checkout} />
				<Route path="/cadastro" exact component={Cadastro} />
				<SideBar />
			</Router>
		</>
	)
}
export default Routes