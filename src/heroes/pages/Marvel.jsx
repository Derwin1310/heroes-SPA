import { HeroList } from "../components/HeroList"

export const Marvel = () => {
	return (
		<>
			<h1 className="title">Marvel</h1>

			<hr />

			<HeroList publisher='Marvel Comics' />
		</>
	)
}
