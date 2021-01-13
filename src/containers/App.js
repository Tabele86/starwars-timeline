import Header from '../components/Header';
import './App.css';

function App() {
	return (
		<div>
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
			</div>
		</div>
	);
}

export default App;
