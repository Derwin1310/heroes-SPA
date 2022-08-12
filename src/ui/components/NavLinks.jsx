import { NavLink } from "react-router-dom"

export const NavLinks = () => {
	const handleActive = ({ isActive }) => `${isActive ? 'active' : ''}`

	const navLinks = [
		{
			name: 'Marvel',
			path: '/marvel',
		},
		{
			name: 'DC',
			path: '/dc',
		},
		{
			name: 'Searcher',
			path: '/searcher',
		},
		{
			name: 'Hero',
			path: '/hero',
		},
	]

	return (
		<div className='navbar__wrapper'>
			{navLinks.map(({ name, path }) => (
				<NavLink
					key={name}
					className={`navbar__links ${handleActive}`}
					to={path}
				>
					{name}
				</NavLink>
			))}
		</div>
	)
}
