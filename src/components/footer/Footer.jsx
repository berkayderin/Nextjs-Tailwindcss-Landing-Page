import instagram from '../../assets/img/instagram.png'
import linkedin from '../../assets/img/linkedin.png'
import phoneCall from '../../assets/img/phone-call.png'
import twitter from '../../assets/img/twitter.png'
import unitedKingdom from '../../assets/img/united-kingdom.png'
import whatsapp from '../../assets/img/whatsapp.png'

const Footer = () => {
	return (
		<div className="md:bg-pattern2 md:bg-origin-padding md:bg-no-repeat md:bg-cover bg-pattern2 bg-no-repeat bg-cover">
			<div className="flex flex-col items-center justify-center text-center p-4 md:p-10 gap-10">
				<img src={phoneCall} alt="phone call" width={45} height={45} />
				<p className="text-black text-3xl md:text-5xl font-semibold">
					Need more <span className="text-gray">knowledge?</span> <br />
					Lets talk!
				</p>
				<p className="text-md font-medium text-gray1">Lorem ipsum dolor sit amet consectetur.</p>
				<button
					className="bg-blue text-white font- rounded-xl flex flex-row gap-3 items-center px-4 py-2 border-white
				border-2"
				>
					Contact via
					<img src={whatsapp} alt="whatsapp" width={20} height={14} />
					WhatsApp
				</button>
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 gap-3 md:gap-96 text-gray1 text-sm font-medium">
				<p className="flex flex-row gap-3">
					Based in <img src={unitedKingdom} alt="united kingdom" width={32} height={16} className="rounded-md" />
				</p>
				<div className="flex flex-row gap-3">
					<div className="bg-white-gradient p-2 rounded-md cursor-pointer">
						<img src={twitter} alt="twitter" width={20} height={20} />
					</div>
					<div className="bg-white-gradient p-2 rounded-md cursor-pointer">
						<img src={linkedin} alt="linkedin" width={20} height={20} />
					</div>
					<div className="bg-white-gradient p-2 rounded-md cursor-pointer">
						<img src={instagram} alt="instagram" width={20} height={20} />
					</div>
				</div>
				<p>© 2024 MelihBahri.com</p>
			</div>
		</div>
	)
}

export default Footer
