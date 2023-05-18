import { useState, KeyboardEvent } from "react"
import { BsSearch } from "react-icons/bs"
import classes from "./Search.module.css"
import { SearchProps } from "../../types/user"

export const Search = ({ loadUser }: SearchProps) => {
	const [userName, setUserName] = useState("")

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			loadUser(userName)
		}
	}
	return (
		<div className={classes.search}>
			<h2>Busque um usuário</h2>
			<p>Conheça seus melhores repositórios</p>
			<div className={classes.search_container}>
				<input type="text" placeholder="Digite o nome do usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
				<button onClick={() => loadUser(userName)}>
					<BsSearch />
				</button>
			</div>
		</div>
	)
}