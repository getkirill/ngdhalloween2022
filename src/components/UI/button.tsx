import { ButtonArgs } from "../../types/args";
import '../../styles/UI/button.scss'

export default function Button({children, onClick, type, size, className}:ButtonArgs) {
	return (
		<button className={`button ${type} ${size} ${className}`} onClick={onClick}>
			{children}
		</button>
	)
}