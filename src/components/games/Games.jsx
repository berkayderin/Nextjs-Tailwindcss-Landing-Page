import a from '../../assets/img/a.png'
import b from '../../assets/img/b.png'
import c from '../../assets/img/c.png'
import d from '../../assets/img/d.png'
import e from '../../assets/img/e.png'
import f from '../../assets/img/f.png'
import g from '../../assets/img/g.png'
import games from '../../assets/img/games.png'
import h from '../../assets/img/h.png'

const Games = () => {
	return (
		<div className="flex flex-col gap-16 p-10 justify-center items-center mb-14 mt-14">
			<div className="flex flex-col gap-3 items-center justify-center">
				<img src={games} alt="Icons" width={45} height={45} />
				<p className="text-5xl font-semibold">Games</p>
				<p className="text-gray text-lg">Games I Have Sold to My Customers</p>
			</div>
			<div className="relative group w-full sm:w-[750px] md:w-[900px] overflow-hidden">
				<div className="flex flex-col gap-2">
					<div className="absolute inset-0 pointer-events-none">
						<div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white99 to-transparent"></div>
						<div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white99 to-transparent"></div>
					</div>
					<div className="flex justify-center gap-2">
						{createGameDiv(d, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(e, 'Couch 2048 (iOS)', 'Engoa LLC')}
						{createGameDiv(f, 'Dino Chaos', 'FREEZE NOVA SRL')}
					</div>
					<div className="flex justify-center gap-2">
						{createGameDiv(g, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(h, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(a, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(b, 'Spend Billionaire Money', 'Engoa LLC')}
					</div>
					<div className="flex justify-center gap-2">
						{createGameDiv(c, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(d, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(e, 'Spend Billionaire Money', 'Engoa LLC')}
					</div>
					<div className="flex justify-center gap-2">
						{createGameDiv(f, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(g, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(h, 'Spend Billionaire Money', 'Engoa LLC')}
						{createGameDiv(a, 'Spend Billionaire Money', 'Engoa LLC')}
					</div>
				</div>
			</div>
		</div>
	)
}

function createGameDiv(image, title, company) {
	return (
		<div className="flex gap-2 items-center rounded-xl bg-white-gradient p-2 shadow-md shadow-white border-2 border-solid border-white">
			<img src={image} alt="icon" className="w-10" />
			<div className="w-60">
				<p>{title}</p>
				<p className="text-gray">{company}</p>
			</div>
		</div>
	)
}
export default Games
