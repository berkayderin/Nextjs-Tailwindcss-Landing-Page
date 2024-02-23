import icons from '../../assets/img/x.png'

const About = () => {
	return (
		<div className="flex flex-col p-10 gap-5 items-center">
			<div className="flex flex-col gap-3 items-center justify-center mt-10">
				<img src={icons} alt="Icons" className="mb-5" />
				<p className="font-semibold text-5xl text-center">
					What did <span className="text-gray">customers</span> say?
				</p>
				<p className="text-gray text-lg mt-2">Lorem ipsum dolor sit amet consectetur.</p>
			</div>
			<div
				className="relative w-full flex justify-center items-center overflow-hidden"
				style={{ height: '850px', maxWidth: '933px' }}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-white99 to-transparent h-20  pointer-events-none top-0"></div>
				<div className="absolute inset-0 bg-gradient-to-b from-white99 to-transparent h-20 pointer-events-none bottom-0"></div>
				<div className="flex flex-col md:flex-row gap-4 px-4 md:px-10 h-full w-full">
					<div className="flex flex-col md:gap-4 overflow-hidden w-full">
						<TestimonialCard
							text="Melih Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our expectations. Melih's dedication and reliability make him a valuable asset in the gaming industry."
							name="Sophie Leclerc"
							role="Company Owners, Paris"
						/>
						<TestimonialCard
							text="Melih Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our expectations. Melih's dedication and reliability make him a valuable asset in the gaming industry."
							name="John Doe"
							role="Game Developer, New York"
						/>
						<TestimonialCard
							text="Melih Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our expectations. Melih's dedication and reliability make him a valuable asset in the gaming industry."
							name="Jane Doe"
							role="Creative Director, London"
						/>
					</div>

					<div className="flex flex-col md:gap-4 overflow-hidden h-full w-full md:mt-20">
						<TestimonialCard
							text="Melih Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our expectations. Melih's dedication and reliability make him a valuable asset in the gaming industry."
							name="Alex Smith"
							role="Project Manager, Sydney"
						/>
						<TestimonialCard
							text="Melih Bahri is a true maestro in the gaming realm. His knack for understanding the intricacies of our project was remarkable. Collaborating with him was a breeze, and he delivered results that surpassed our expectations. Melih's dedication and reliability make him a valuable asset in the gaming industry."
							name="Maria Garcia"
							role="UI/UX Designer, Madrid"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const TestimonialCard = ({ text, name, role }) => (
	<div className="font-medium w-full md:w-[400px] h-[310px] rounded-3xl border border-white flex flex-col justify-between items-start gap-4 p-6 mx-auto bg-no-repeat bg-cover bg-cwhite mb-4 md:mb-0">
		<div className="flex flex-col gap-2 items-start justify-center">
			<img src={icons} alt="testimonial" className="w-16 h-16" />
			<p className="text-sm text-gray1 font-medium">{text}</p>
			<h1 className="text-xl font-semibold text-black">{name}</h1>
			<p className="text-sm text-gray">{role}</p>
		</div>
	</div>
)

export default About
