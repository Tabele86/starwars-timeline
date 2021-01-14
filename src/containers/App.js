import Header from '../components/Header';
import './App.css';
import Ages from '../components/Ages';
import Info from '../components/Info';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

function App() {
	return (
		<div
			className="background"
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL + '/img/starsBG.jpg'})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: '100vh'
			}}
		>
			<Header />
			<div className="below-header">
				<Ages />
				<Info />
			</div>
			<Timeline />

			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
