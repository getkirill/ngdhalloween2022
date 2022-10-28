import { ButtonArgs } from "../../types/args";
import '../../styles/UI/button.scss'

export default function Button({children, onClick, type}:ButtonArgs) {
	return (
		<button className={"button " + type} onClick={onClick}>
			{children}
		</button>
	)
}