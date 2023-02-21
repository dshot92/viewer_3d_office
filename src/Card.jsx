import "./Grid.css";
import { React } from "react";

const Card = ({ title, onClick }) => {
	return (
		<button className="card" onClick={onClick}>
			<span>{title}</span>
		</button>
	);
};

export default Card;
