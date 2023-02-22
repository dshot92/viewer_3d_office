const Card = (props) => {
	return (
		<button className="card">
			<span>{props.name}</span>
		</button>
	);
};

export default Card;
