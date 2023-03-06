import { Link } from "react-router-dom";

import Card from "./Card";

export const itemsList = () => {
	const list = [
		{ name: "Arc de Triomphe", fbxPath: "/models/Arc_de_Triomphe.fbx" },
		{ name: "Christ the Redeemer", fbxPath: "/models/Christ_the_Redeemer.fbx" },
		{ name: "San Marino", fbxPath: "/models/San_Marino_Solid.fbx" },
		{ name: "John Hopkins Uni", fbxPath: "/models/John_Hopkins_Uni_Solid.fbx" },
		{ name: "Parco Monteclaro", fbxPath: "/models/Monteclaro_Solid_Layers_Billboards.fbx" },
		{ name: "Santuario San Luca", fbxPath: "/models/Santuario_San_Luca.fbx" },
		{ name: "Sella del Diavolo", fbxPath: "/models/Sella_del_Diavolo.fbx" },
		{ name: "Allianz Stadium", fbxPath: "/models/Allianz_Stadium.fbx" },
	];
	return list;
};

const Grid = () => {
	const items = itemsList();
	return (
		<div className="container">
			<div className="gridTitle">
				<h1>Viewer-3D</h1>
			</div>
			<div className="grid">
				{items.map((item, index) => (
					<Link key={index} to={item.name} state={item.fbxPath}>
						<Card name={item.name} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Grid;
