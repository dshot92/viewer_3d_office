import "./Grid.css";
import { React } from "react";

const Card = ({ title, onClick }) => {
	return (
		<div className="card" onClick={onClick}>
			<span>{title}</span>
		</div>
	);
};

export default Card;
