const Navbar = () => {
	return (
		<div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-[999] px-2 sm:px-6 lg:px-8">
			<div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-20 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-md border border-white border-opacity-40 rounded-2xl w-full sm:w-[52rem] h-[4.5rem] sm:h-[3.25rem] p-2 sm:p-5">
				<div className="text-slate-600 font-bold text-base sm:text-lg">MelihBahri</div>
				<ul className="text-gray flex gap-3 sm:gap-5 text-sm sm:text-base">
					<li>
						<a href="#" className="hover:text-gray-950 dark:hover:text-gray-300 transition">
							About
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-gray-950 dark:hover:text-gray-300 transition">
							Recent Listings
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-gray-950 dark:hover:text-gray-300 transition">
							Sold Games
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-gray-950 dark:hover:text-gray-300 transition">
							Services
						</a>
					</li>
				</ul>
				<div className="flex gap-3 sm:gap-5 justify-center items-center text-sm sm:text-base">
					<p className="text-gray">EN | TR</p>
					<button className="text-white bg-blue shadow-sm shadow-blue rounded-lg p-1 sm:p-2">Contact</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
