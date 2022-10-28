export default function Button({child}:{child: JSX.Element}) {
	return (
		<button className="button">
			{child}
		</button>
	)
}