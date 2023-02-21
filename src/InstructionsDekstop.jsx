import { React } from "react";

import MouseSVG from "./MouseSVG";

const InstructionsDesktop = () => {
	return (
		<div className="instrictions Desktop">
			<div className={"left mouse"}>
				<MouseSVG />
				Pan
			</div>
			<div className={"wheel mouse"}>
				<MouseSVG />
				Zoom
			</div>
			<div className={"right mouse"}>
				<MouseSVG />
				Move
			</div>
		</div>
	);
};

export default InstructionsDesktop;
