import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
	const heroes = getHeroesByPublisher(publisher)

	return (
		<div className="row rows-cols-1 row-cols-md-3 g-3">
			{heroes.map(heroProps => (
				<HeroCard key={heroProps.id} {...heroProps}/>
			))}
		</div>
	)
}