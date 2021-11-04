import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import AOS from 'aos'
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import HelmetLBN from './components/helmetLBN';
import Contact from './components/contact';

import Footer from './components/footer';
import Work from './components/work';
import Us from './components/us';
import Home from './components/home';
import Navbar from './components/navBar';
import Bubble from './components/bubble';

import { GlobalProvider } from './context/GlobalContext';
import Technology from './components/technology';


function App() {

	AOS.init({
	duration: 800,
	easing: 'slide',
	once: true,
	// disable: 'mobile'
	});

	return (
		<div className="App site-wrap">
		<BrowserRouter basename={'/lbnodontologia'}>
			<GlobalProvider>
				<HelmetLBN/>
				<Navbar/>
				<Home/>
				<Us/>
				<Work/>
				<Technology/>
				<Contact/>
				<Footer/>
				<Bubble/>
			</GlobalProvider>
		</BrowserRouter>
		</div>
	);
}

export default App;
