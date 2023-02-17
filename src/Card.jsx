import "./Grid.css";
import { React } from "react";

const Card = ({ title, description, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <span>{title}</span>
            {/* <p>{description}</p> */}
        </div>
    );
};

export default Card;
