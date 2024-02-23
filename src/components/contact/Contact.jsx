import contact from '../../assets/img/contact.png'
import message from '../../assets/img/message.png'

const Contact = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center gap-10 py-20 px-4 md:px-10">
			<div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-gray2 p-6 md:p-10 rounded-3xl border-2 border-white shadow-md">
				<div className="flex flex-col gap-5">
					<div>
						<img src={message} alt="message" width={45} height={45} />
					</div>
					<h1 className="text-3xl md:text-5xl font-semibold text-center md:text-left">
						Contact <span className="text-gray">with</span> me
					</h1>
					<p className="text-sm md:text-base text-gray1 font-semibold text-center md:text-left">
						I will respond your business mail in 24 hours..
					</p>
					<form className="flex flex-col gap-5">
						<input
							type="text"
							placeholder="Name"
							className="py-3 px-5 rounded-lg text-xs bg-gray2 border-white border-2 shadow-md focus:outline-none"
						/>
						<input
							type="email"
							placeholder="Email"
							className="py-3 px-5 rounded-lg text-xs bg-gray2 border-white border-2 shadow-md focus:outline-none"
						/>
						<textarea
							placeholder="Message"
							className="py-3 px-5 rounded-lg text-xs bg-gray2 border-white border-2 shadow-md focus:outline-none"
							rows={4}
						/>
						<button className="bg-black text-white py-3 rounded-lg font-medium text-xs">Send Message</button>
					</form>
				</div>
				<div className="hidden md:block">
					<img src={contact} alt="contact" width={381} height={465} />
				</div>
			</div>
		</div>
	)
}

export default Contact
