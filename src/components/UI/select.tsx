import { SelectArgs } from "../../types/args";
import "../../styles/UI/select.scss"

export default function Select({ name, value, id, options, onChange, className }: SelectArgs) {
	return (
		<div className={"selectBox " + className}>
			<select name={name} id={id} value={value} onChange={onChange} className="select">{
				options.map(o =>
					<option value={o.value}>
						{o.content}
					</option>)
			}</select>
			<span className="focus"></span>
		</div>
	)
}