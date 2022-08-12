import { HeroList } from "../components/HeroList"

export const DC = () => {
  return (
    <>
      <h1 className="title">DC Comics</h1>
      <hr />

      <HeroList publisher='DC Comics' />
    </>
  )
}
