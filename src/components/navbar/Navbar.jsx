import logo from '../../assets/img/logo.png'

const Navbar = () => {
	return (
		<div className="top-0 left-0 z-[999] px-4 w-full mt-5 bg-pattern bg-cover bg-center bg-no-repeat h-[20rem]">
			<div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 bg-cwhite bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-md border border-white border-opacity-40 rounded-2xl md:w-[60rem] h-[6rem] md:h-[5rem] p-3 md:p-5 m-auto">
				<div>
					<img src={logo} alt="Logo" className="w-[132px] h-[32px]" />
				</div>
				<ul className="flex gap-4 md:gap-9 text-gray text-sm md:text-base items-center">
					<li>
						<a href="#" className="hover:text-black transition-all duration-300 ease-in-out">
							About
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-black transition-all duration-300 ease-in-out">
							Recent Listings
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-black transition-all duration-300 ease-in-out">
							Sold Games
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-black transition-all duration-300 ease-in-out">
							Services
						</a>
					</li>
				</ul>
				<div className="hidden md:flex gap-3 items-center">
					<p className="text-gray mr-2">EN | TR</p>
					<button className="bg-blue text-white rounded-lg px-3 py-1 md:px-5 md:py-2">Contact</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
