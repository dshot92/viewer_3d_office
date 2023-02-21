import { React } from "react";
import { createRoot } from "react-dom/client";

import Grid from "./Grid";

const getBack = () => {
	const rootElement = document.getElementById("root");
	const root = createRoot(rootElement);
	root.render(<Grid />);
};

const ViewerBackArrow = () => {
	return (
		<div className={"back"} onClick={getBack}>
			<i className="fa-solid fa-arrow-left"></i>
		</div>
	);
};

export default ViewerBackArrow;
