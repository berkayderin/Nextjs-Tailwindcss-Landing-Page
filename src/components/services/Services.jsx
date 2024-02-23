import beststar from '../../assets/img/beststar.png'
import compile from '../../assets/img/compile.png'
import customer from '../../assets/img/customer.png'
import docusign from '../../assets/img/docusign.png'
import escrow from '../../assets/img/escrow.png'
import star from '../../assets/img/star.png'
import team from '../../assets/img/team.png'

const Services = () => {
	return (
		<div>
			<div className="flex flex-col justify-center items-center gap-6 py-20 px-4 md:px-10">
				<img src={star} alt="star" width={45} height={45} />
				<h1 className="font-medium text-4xl md:text-5xl lg:text-6xl text-black text-center">
					What do <span className="text-gray"> we do </span> for you?
				</h1>
				<p className="text-md md:text-lg text-gray font-medium text-center">
					Here is a list of all of the things we typically do for any business we list.
				</p>
			</div>

			<div className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10">
					<div className="font-medium w-[413px] h-[242px] bg-vector50 rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom bg-no-repeat bg-cover">
						<img src={docusign} alt="docusign" width={165} height={42} />
						<div className="flex flex-col gap-2">
							<h1 className="text-lg text-black">DocuSign</h1>
							<p className="text-sm text-gray1 font-medium">
								Electronic signature software completes the entire signing process digitally via DocuSign.
							</p>
						</div>
					</div>
					<div className="font-medium w-[413px] h-[242px] bg-cwhite rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom">
						<img src={escrow} alt="escrow" width={165} height={42} />
						<div className="flex flex-col gap-2">
							<h1 className="text-lg text-black">Escrow</h1>
							<p className="text-sm text-gray1 font-medium">
								The escrow provider waits for the necessary conditions to be met, making sure both parties follow the
								agreement.
							</p>
						</div>
					</div>
					<div className="font-medium w-[413px] h-[242px] bg-cwhite rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom">
						<img src={compile} alt="compile" width={45} height={45} />
						<div className="flex flex-col gap-2">
							<h1 className="text-lg text-black">Compile and Organise Data</h1>
							<p className="text-sm text-gray1 font-medium">
								Organise all of the important information and data into what I call KPIs (Key Performance Indicators).
							</p>
						</div>
					</div>
					<div className="font-medium w-[413px] h-[242px] bg-cwhite rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom">
						<img src={team} alt="team" width={45} height={45} />
						<div className="flex flex-col gap-2">
							<h1 className="text-lg text-black">Professionally Managed Leads</h1>
							<p className="text-sm text-gray1 font-medium">
								We manage the listing for you, answering questions, organise buyer/seller calls and take care of all the
								leads.
							</p>
						</div>
					</div>
					<div className="font-medium w-[413px] h-[242px] bg-cwhite rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom">
						<img src={customer} alt="customer" width={45} height={45} />
						<div className="flex flex-col gap-2">
							<h1 className="text-lg text-black">100% Customer Satisfaction</h1>
							<p className="text-sm text-gray1 font-medium">
								We do a complete due diligence process of businesses we list to verify the data and the quality of the
								listing.
							</p>
						</div>
					</div>
					<div className="font-medium w-[413px] h-[242px] bg-cwhite rounded-3xl border border-white flex flex-col justify-between items-start gap-4 px-6 py-10 mx-auto shadow-bottom">
						<img src={beststar} alt="beststar" width={45} height={45} />
						<div className="flex flex-col gap-2">
							<h1 className="text-lg text-black">More than 10 Years Experience</h1>
							<p className="text-sm text-gray1 font-medium">
								Draw on a vast pool of experience from both the buyer and seller side. We have closed well over 150
								deals of all sizes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
