import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string';
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const Searcher = () => {
  const navigate =useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const showSearch = q.length === 0
  const showError = q.length > 0 && !heroes.length


  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q,
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)
  }

	return (
		<>
			<h1 className="title">Searcher</h1>
			<hr />

			<div className='search-page'>
				<div className='form-wrapper'>
					<h2 className='form-wrapper__title'>Searching</h2>

					<form className="form">
						<input
							type='text'
							name='searchText'
							className='form__searcher'
							autoComplete='off'
              value={searchText}
              onChange={onInputChange}
              placeholder="Search a hero"
						/>

						<button onClick={onSearchSubmit} className='form__btn'>Search</button>
					</form>
				</div>

				<div className='results-wrapper'>
					<h2 className="results-wrapper__title">Results</h2>

					<p className='results-wrapper__search-msg' style={{display: showSearch ? '' : 'none'}}>
            Looking for a Superhero? Let's go!
          </p>

					<p className='results-wrapper__error-msg' style={{display: showError ? '' : 'none'}}>
            No hero named {q}
          </p>
        	{heroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
				</div>
			</div>
		</>
	)
}
