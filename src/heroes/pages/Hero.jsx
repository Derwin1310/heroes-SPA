import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const Hero = () => {
  const animation = 'animate__animated animate__fadeIn'
  const navigate = useNavigate()
  const { id } = useParams()

  const hero = useMemo(() => getHeroById(id), [id])

  const onNavigateBack = () => {
    navigate(-1)
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters } = hero

  return (
    <div className={`card-wrapper ${animation}`}>
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={superhero}
          className="card-wrapper__img"
        />

      <div className="card-wrapper__desc">
        <h3 className="card-wrapper__title">{superhero}</h3>
        <ul className="list-desc">
          <li className="list-desc__item"><b>Alter ego:</b> {alter_ego}</li>
          <li className="list-desc__item"><b>Publisher:</b> {publisher}</li>
          <li className="list-desc__item"><b>First appearance:</b> {first_appearance}</li>
          <li className="list-desc__item"><b>Characters</b>: {characters}</li>
        </ul>

        <button
          onClick={onNavigateBack}
          className="card-wrapper__btn"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}
