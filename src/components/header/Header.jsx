import hello from '../../assets/img/hello.png'

const Header = () => {
	return (
		<div className="flex justify-center items-center p-4 md:p-0 z-50 -mt-40">
			<div className="text-center flex flex-col gap-3 items-center px-4 md:px-0">
				<div className="flex flex-row gap-3 justify-center items-center">
					<p className="text-base md:text-xl text-gray1 font-medium px-2">
						🤟 Yo! I'm M. Bahri Aktan, a game broker and entrepreneur.
					</p>
					<img src={hello} alt="hello" className="w-24 md:w-auto" />
				</div>
				<h1 className="font-bold text-4xl md:text-6xl text-black leading-tight">
					Game Broker and M&A Advisory <br className="hidden md:inline" /> on{' '}
					<span className="text-gray">Game Acquisitions</span>
				</h1>
				<div className="mt-4 text-base md:text-sm text-gray font-medium">
					<p className="leading-relaxed">
						With 6 years of experience in the gaming industry, I proudly label myself as a seasoned professional.{' '}
						<br className="hidden md:inline" />
						Throughout my journey, I have successfully build and sold over 100 captivating games, showcasing{' '}
						<br className="hidden md:inline" /> my passion and expertise in this dynamic field.
					</p>
				</div>
				<div className="mt-6 mb-10 flex flex-row gap-2">
					<button className="bg-blue text-white px-5 py-3 md:px-6 md:py-2 rounded-xl text-sm md:text-sm">
						Contact
					</button>
					<button className="bg-cwhite text-black px-5 py-3 md:px-6 md:py-2 rounded-xl border-2 border-white text-sm md:text-sm">
						Resume
					</button>
				</div>
			</div>
		</div>
	)
}
export default Header
