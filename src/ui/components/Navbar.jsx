import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

export const Navbar = () => {
	const { user, logout } = useContext(AuthContext)
	const navigate = useNavigate()

	const defaultClass = 'nav-item nav-link'

	const navLinks = [
		{
			name: 'Marvel',
			styles: defaultClass,
			path: '/marvel',
		},
		{
			name: 'DC',
			styles: defaultClass,
			path: '/dc',
		},
		{
			name: 'Searcher',
			styles: defaultClass,
			path: '/searcher',
		},
		{
			name: 'Hero',
			styles: defaultClass,
			path: '/hero',
		},
	]

	const onLogout = () => {
		logout()
		navigate('/login', {
			replace: true,
		})
	}

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
			<Link className='navbar-brand' to='/'>
				Asociaciones
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					{navLinks.map(({ name, styles, path }) => (
						<NavLink key={name} className={styles} to={path}>
							{name}
						</NavLink>
					))}
				</div>
			</div>

			<div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
				<ul className='navbar-nav ml-auto'>
					<span className='nav-item nav-link text-primary'>{user?.name}</span>

					<button onClick={onLogout} className='nav-item nav-link btn'>Log out</button>
				</ul>
			</div>
		</nav>
	)
}
