import { React } from "react";
import { useNavigate } from "react-router-dom";

import App from "./App";

// const getBack = () => {
// 	const rootElement = document.getElementById("root");
// 	const root = createRoot(rootElement);
// 	root.render(<App />);
// };

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
