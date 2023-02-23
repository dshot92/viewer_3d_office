import { Link } from "react-router-dom";

import Card from "./Card";

export const itemsList = () => {
	const list = [
		{ id: 1, name: "Elephant Tower Raw", fbxPath: "/models/Elephant_Tower.fbx" },
		{ id: 2, name: "Elephant Tower Remesh", fbxPath: "/models/Elephant_Tower_Remesh.fbx" },
		{ id: 3, name: "Big Ben Solid", fbxPath: "/models/Big_Ben_Solid.fbx" },
		{ id: 4, name: "T Hotel Solid", fbxPath: "/models/T_Hotel.fbx" },
		{ id: 5, name: "Arc de Triomphe", fbxPath: "/models/Arc_de_Triomphe.fbx" },
		{ id: 6, name: "Monteclaro Solid Layers", fbxPath: "/models/Monteclaro_Solid_Layers.fbx" },
		{ id: 7, name: "Cagliari Museum Solid", fbxPath: "/models/Cagliari_Museum_Solid.fbx" },
		{ id: 8, name: "Christ the Redeemer", fbxPath: "/models/Christ_the_Redeemer.fbx" },
		{ id: 9, name: "San Marino Solid", fbxPath: "/models/San_Marino_Solid.fbx" },
		{ id: 10, name: "Altare della Patria Solid", fbxPath: "/models/Altare_della_Patria_Solid.fbx" },
		{ id: 11, name: "John Hopkins Uni Solid", fbxPath: "/models/John_Hopkins_Uni_Solid.fbx" },
	];
	return list;
};

const Grid = () => {
	const items = itemsList();
	return (
		<div className="container">
			<div className="grid">
				{items.map((item) => (
					<Link key={item.id} to={item.name} state={item.fbxPath}>
						<Card name={item.name} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Grid;
