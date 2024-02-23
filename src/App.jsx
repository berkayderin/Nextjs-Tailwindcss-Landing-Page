import './App.css'

import About from './components/about/About'
import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Games from './components/games/Games'
import Header from './components/header/Header'
import Join from './components/join/Join'
import Navbar from './components/navbar/Navbar'
import Section from './components/section/Section'
import Services from './components/services/Services'

function App() {
	return (
		<div>
			<Navbar />
			<Header />
			<Banner />
			<Section />
			<Games />
			<Join />
			<Services />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
