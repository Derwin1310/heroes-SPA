import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'
import { NavLinks } from './NavLinks'
import '../styles.sass'

export const Navbar = () => {
	const { user, logout } = useContext(AuthContext)
	const navigate = useNavigate()

	const onLogout = () => {
		logout()
		navigate('/login', {
			replace: true,
		})
	}

	return (
		<nav className='navbar'>
			{/* <Link className='' to='/'>
				Asociaciones
			</Link> */}

			<NavLinks />

			<div className='navbar__log'>
				<p className='navbar__log__user'>{user?.name}</p>

				<button onClick={onLogout} className='navbar__log__btn'>
					Log out
				</button>
			</div>
		</nav>
	)
}
