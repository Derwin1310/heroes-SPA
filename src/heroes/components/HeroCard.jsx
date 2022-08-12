import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, alter_ego, first_appearance }) => {
	const heroURL = `/assets/${id}.jpg`
	const animation = 'animate__animated animate__fadeIn'

	return (
		<div className={`card ${animation}`}>
			<img src={heroURL} alt={superhero} className='card__img' />

			<div className='card__desc'>
				<h2 className='card__desc__name'>{superhero}</h2>
				<h3 className='card__desc__alter-ego'>{alter_ego}</h3>
				<h4 className='card-text'>{first_appearance}</h4>
				<Link className='card__desc__link' to={`/hero/${id}`}>
					More...
				</Link>
			</div>
		</div>
	)
}
