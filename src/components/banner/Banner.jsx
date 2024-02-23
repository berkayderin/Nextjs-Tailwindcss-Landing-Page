const Banner = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 p-5">
			<div className="flex flex-col gap-5 items-center">
				<h1 className="font-semibold text-3xl md:text-5xl">+40</h1>
				<p className="text-gray text-base md:text-lg">Number Of Transactions</p>
			</div>
			<div className="flex flex-col gap-5 items-center">
				<h1 className="font-semibold text-3xl md:text-5xl">+30k</h1>
				<p className="text-gray text-base md:text-lg">Total Sales</p>
			</div>
			<div className="flex flex-col gap-5 items-center">
				<h1 className="font-semibold text-3xl md:text-5xl">+10k</h1>
				<p className="text-gray text-base md:text-lg">Number Of Clients</p>
			</div>
			<div className="flex flex-col gap-5 items-center">
				<h1 className="font-semibold text-3xl md:text-5xl">+60</h1>
				<p className="text-gray text-base md:text-lg">Number Of Studios</p>
			</div>
		</div>
	)
}

export default Banner
