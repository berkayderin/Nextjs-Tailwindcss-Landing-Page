import icon from '../../assets/img/icon.png'
import icons from '../../assets/img/icons.png'

const Section = () => {
	return (
		<div className="p-4 sm:p-5 flex flex-col gap-8 sm:gap-1 mt-10">
			<div className="flex flex-col gap-6 sm:gap-8 items-center p-4 sm:p-5">
				<img src={icon} className="w-16 sm:w-auto" alt="Icon" />
				<p className="text-gray text-md sm:text-lg">WHY ARE YOU HERE</p>
				<p className="font-bold text-3xl sm:text-5xl">
					Seller <span className="text-gray">or</span> Buyer?
				</p>
				<p className="text-gray1 text-md sm:text-lg">
					Here is a list of all of the things we typically do for any business we list.
				</p>
			</div>
			<div className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-center justify-center">
				<div className="bg-card items-center justify-center rounded-2xl p-4 sm:p-5 text-center flex flex-col gap-4 sm:gap-5 shadow-white bg-vector border-white border-solid border-2">
					<img src={icons} alt="Icons" className="w-12 sm:w-auto" />
					<div className="flex flex-col gap-2 sm:gap-3">
						<p className="font-semibold text-xl sm:text-2xl">Seller Title</p>
						<p className="text-gray1 mb-2 text-sm sm:text-base">
							Organise all of the important information and data <br />
							into what I call KPIs (Key Performance Indicators).
						</p>
						<button className="bg-blue rounded-lg shadow-sm shadow-blue w-full p-2 sm:p-1 text-white">Im Seller</button>
					</div>
				</div>
				<div className="bg-card items-center justify-center rounded-2xl p-4 sm:p-5 text-center flex flex-col gap-4 sm:gap-5 border-white border-solid border-2">
					<img src={icons} className="w-12 sm:w-auto" alt="Icons" />
					<div className="flex flex-col gap-2 sm:gap-3">
						<p className="font-semibold text-xl sm:text-2xl">Buyer Title</p>
						<p className="text-gray1 mb-2 text-sm sm:text-base">
							Organise all of the important information and data <br />
							into what I call KPIs (Key Performance Indicators).
						</p>
						<button className="bg-white rounded-lg shadow-sm shadow-white w-full p-2 sm:p-1">Im Buyer</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section
