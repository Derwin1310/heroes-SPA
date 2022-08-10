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
    console.log({searchText})
  }

	return (
		<>
			<h1>Searcher</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Searching</h4>
					<hr />

					<form>
						<input
							type='text'
							name='searchText'
							className='form-control'
							autoComplete='off'
              value={searchText}
              onChange={onInputChange}
              placeholder="Search a hero"
						/>

						<button onClick={onSearchSubmit} className='btn btn-outline-primary mt-1'>Search</button>
					</form>
				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />

					<div className='alert alert-primary' style={{display: showSearch ? '' : 'none'}}>
            Search a hero
          </div>

					<div className='alert alert-danger' style={{display: showError ? '' : 'none'}}>
            No hero with <b>{q}</b>
          </div>
				</div>

        {
          heroes.map(hero => <HeroCard key={hero.id} {...hero} />)
        }

        {/* <HeroCard /> */}
			</div>
		</>
	)
}
