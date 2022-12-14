import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DC, Hero, Marvel, Searcher } from '../pages'
import '../styles.sass'

export const HeroesRoutes = () => {
	const routs = [
		{
			path: 'marvel',
			element: <Marvel />,
		},
		{
			path: 'dc',
			element: <DC />,
		},
		{
			path: 'searcher',
			element: <Searcher />,
		},
		{
			path: 'hero/:id',
			element: <Hero />,
		},
		{
			path: '/',
			element: <Navigate to='/marvel' />,
		},
	]

	return (
		<>
			<Navbar />

			<section className='container'>
				<Routes>
					{routs.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
			</section>
		</>
	)
}
