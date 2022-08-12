import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../styles.sass'

export const Login = () => {
	const { login } = useContext(AuthContext)

	const navigate = useNavigate()

	const onLogin = () => {
		const lastPath = localStorage.getItem('lastPath') || '/'

		login('Coderwin')

		navigate(lastPath, {
			replace: true,
		})
	}

	const animation = 'animate__animated animate__fadeIn'

	return (
		<div className={`login ${animation}`}>
			<h1 className='login__tittle'>Login</h1>
			<hr />

			<button className='login__btn' onClick={onLogin}>
				Login
			</button>
		</div>
	)
}
