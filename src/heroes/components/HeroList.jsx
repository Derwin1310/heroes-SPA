import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) 

	return (
		<div className="grid-list">
			{heroes.map(heroProps => (
				<HeroCard key={heroProps.id} {...heroProps}/>
			))}
		</div>
	)
}
