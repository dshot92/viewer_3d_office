import { React } from "react";
import { useNavigate } from "react-router-dom";

const ViewerBackArrow = () => {
	const navigate = useNavigate();
	const clickHandler = () => {
		navigate("/");
	};
	return (
		<div className={"back"} onClick={clickHandler}>
			<i className="fa-solid fa-arrow-left"></i>
		</div>
	);
};

export default ViewerBackArrow;
