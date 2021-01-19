import Header from '../components/Header';
import './App.css';
import Ages from '../components/Ages';
import Info from '../components/Info';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Republic from './Republic';
import Rebellion from './Rebellion';
import Resistance from './Resistance';
import Footer from '../components/Footer';

function App() {
	return (
		<Router>
			<div
				className="background"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL + '/img/starsBG.jpg'})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					height: '100%'
				}}
			>
				<div id="top">
					<Header />
				</div>
				<div className="below-header">
					<Ages />
					<Info />
				</div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/republic">
						<Republic />
					</Route>
					<Route path="/rebellion">
						<Rebellion />
					</Route>
					<Route path="/resistance">
						<Resistance />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
