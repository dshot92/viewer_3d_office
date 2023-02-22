import { React } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const getBack = () => {
	const rootElement = document.getElementById("root");
	const root = createRoot(rootElement);
	root.render(<App />);
};

const ViewerBackArrow = () => {
	return (
		<div className={"back"} onClick={getBack}>
			<i className="fa-solid fa-arrow-left"></i>
		</div>
	);
};

export default ViewerBackArrow;
