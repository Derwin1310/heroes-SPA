import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const Hero = () => {
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
  // console.log(hero);

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-grouo ligt-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button
          onClick={onNavigateBack}
          className="btn btn-outline-primary">Back</button>
      </div>

    </div>
  )
}
