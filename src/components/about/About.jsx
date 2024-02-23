import altgolge from '../../assets/img/altgolge.png'
import icons from '../../assets/img/x.png'
import ustgolge from '../../assets/img/ustgolge.png'

const About = () => {
	return (
		<div>
			<div className="flex flex-col p-10 gap-5 items-center">
				<div className="flex flex-col gap-3 items-center justify-center mt-10">
					<img src={icons} alt="Icons" className="mb-5" />
					<p className="font-semibold text-5xl text-center">
						What did <span className="text-gray">customers</span> say?
					</p>
					<p className="text-gray text-lg mt-2">Lorem ipsum dolor sit amet consectetur.</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
				{/* sol kartlar */}
				<div className="flex flex-col gap-5 items-center">
					{/* kart 1 */}
					<div className="relative font-medium w-[413px] h-[180px] bg-cwhite rounded-3xl flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom">
						<img src={ustgolge} alt="ustgolge" className="absolute top-0 left-0 w-full md:h-[30rem] z-[99] h-[20rem]" />
						<div className="flex flex-col gap-2 z-0">
							<p className="text-base text-gray1">
								Melih's dedication and reliability make him a valuable asset in the gaming industry.
							</p>
							<h1 className="text-lg text-black">Escrow</h1>
							<span className="text-sm text-gray1">Company Owners, Paris</span>
						</div>
					</div>

					{/* kart 2 */}
					<div className="font-medium w-[413px] h-[380px] bg-cwhite rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom">
						<div className="flex flex-col gap-2">
							<img src={icons} alt="Icons" width={45} height={45} />
							<p className="text-base text-gray1">
								Melih2 Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our
								project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our
								expectations. Melih's dedication and reliability make him a valuable asset in the gaming industry.
							</p>
							<h1 className="text-lg text-black">Escrow</h1>
							<span className="text-sm text-gray1">Company Owners, Paris</span>
						</div>
					</div>
					{/* kart 3 */}
					<div className="relative font-medium w-[413px] h-[250px] bg-cwhite rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto mb-30">
						<img src={altgolge} alt="altgolge" className="absolute bottom-0 left-0 w-full md:h-[40rem] z-[99]" />
						<div className="flex flex-col gap-2">
							<img src={icons} alt="Icons" width={45} height={45} />
							<p className="text-base text-gray1">
								Melih3 Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our
								project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our
								expectations.
							</p>
						</div>
					</div>
				</div>
				{/* sag kartlar */}
				<div className="flex flex-col gap-5 items-center mt-5">
					{/* kart 1 */}
					<div className="font-medium w-[413px] h-[380px] bg-cwhite rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom">
						<div className="flex flex-col gap-2">
							<img src={icons} alt="Icons" width={45} height={45} />
							<p className="text-base text-gray1">
								Melih4 Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our
								project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our
								expectations. Melih's dedication and reliability make him a valuable asset in the gaming industry.
							</p>
							<h1 className="text-lg text-black">Escrow</h1>
							<span className="text-sm text-gray1">Company Owners, Paris</span>
						</div>
					</div>
					{/* kart 2 */}
					<div className="font-medium w-[413px] h-[380px] bg-cwhite rounded-3xl flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto">
						<div className="flex flex-col gap-2">
							<img src={icons} alt="Icons" width={45} height={45} />
							<p className="text-base text-gray1">
								Melih5 Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our
								project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our
								expectations. Melih's dedication and reliability make him a valuable asset in the gaming industry.
							</p>
							<h1 className="text-lg text-black">Escrow</h1>
							<span className="text-sm text-gray1">Company Owners, Paris</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
