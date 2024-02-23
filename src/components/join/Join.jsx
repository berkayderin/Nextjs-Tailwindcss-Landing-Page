import simsek from '../../assets/img/simsek.png'

const Join = () => {
	return (
		<div className="font-medium max-w-xs md:max-w-4xl h-auto bg-cwhite rounded-3xl border border-white flex flex-col justify-center items-center mx-auto shadow-bottom p-8 mt-14 mb-13">
			<div className="flex flex-col justify-center items-center gap-5">
				<img src={simsek} alt="simsek" className="w-12 h-12" />
				<h1 className="font-semibold text-xl md:text-5xl text-center text-black">
					Join the <span className="text-gray">Game Brokerage</span> newsletter
				</h1>
				<p className="text-md md:text-lg text-gray1 font-medium text-center">
					Subscribe to receive our latest game listings by email.
				</p>
				<div className="flex flex-col md:flex-row gap-2 items-center w-full md:w-auto">
					<input
						type="email"
						placeholder="Email Address"
						className="rounded-lg text-xs bg-gray2 border-white border-2 shadow-md focus:outline-none w-60 px-4 py-2"
					/>
					<button className="bg-blue text-white rounded-lg px-6 py-2 text-sm font-medium focus:outline-none border-2 border-white w-full md:w-auto">
						Subscribe
					</button>
				</div>
				<span className="text-xs font-normal text-gray text-center">
					We won't send you spam. Unsubscribe at any time. Built with ConvertKit
				</span>
			</div>
		</div>
	)
}

export default Join
