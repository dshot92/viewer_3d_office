import Card from "./Card";
import { FiberContainer } from "./FiberContainer";
import { createRoot } from "react-dom/client";

import axios from "axios";
import { useState, useEffect } from "react";

const MODEL_FOLDER = "./models/";
// const FILE_EXTENSION = ".fbx";

const Grid = () => {
	const [items, setFiles] = useState([]);

	useEffect(() => {
		// .filter((file) => file && file.endsWith && file.endsWith(FILE_EXTENSION))
		axios
			.get(MODEL_FOLDER)
			.then((response) => {
				const fbxFiles = response.data.map((file, index) => ({
					id: index + 1,
					path: `${MODEL_FOLDER}/${file}`,
					name: file,
				}));
				setFiles(fbxFiles);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	// const items = [
	// 	{ id: 1, name: "Elephant Tower Raw", path: "./models/Elephant_Tower.fbx" },
	// 	{ id: 2, name: "Elephant Tower Remesh", path: "./models/Elephant_Tower_Remesh.fbx" },
	// 	{ id: 3, name: "Big Ben Solid", path: "./models/Big_Ben_Solid.fbx" },
	// 	{ id: 4, name: "T Hotel Solid", path: "./models/T_Hotel.fbx" },
	// 	{ id: 5, name: "Arc de Triomphe", path: "./models/Arc_de_Triomphe.fbx" },
	// 	{ id: 6, name: "Monteclaro Solid Layers", path: "./Models/Monteclaro_Solid_Layers.fbx" },
	// ];

	const handleCardClick = (path) => {
		const rootElement = document.getElementById("root");
		const root = createRoot(rootElement);
		root.render(<FiberContainer path={path} />);
	};
	return (
		<div className="container">
			<div className="grid">
				{items.map((item) => (
					<Card key={item.id} title={item.name} onClick={() => handleCardClick(item.path)} />
				))}
			</div>
		</div>
	);
};

export default Grid;
