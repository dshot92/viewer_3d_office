import Card from "./Card";
import { useState, useEffect } from "react";
import { FiberContainer } from "./FiberContainer";
import { createRoot } from "react-dom/client";
import axios from "axios";

// const MODEL_FOLDER = "./models/";
// const FILE_EXTENSION = ".fbx";

const Grid = () => {
	// const [items, setFiles] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get(MODEL_FOLDER)
	// 		.then((response) => {
	// 			const fbxFiles = response.data
	// 				.filter((file) => file && file.endsWith && file.endsWith(FILE_EXTENSION))
	// 				.map((file, index) => ({
	// 					id: index + 1,
	// 					path: `${MODEL_FOLDER}/${file}`,
	// 					name: file,
	// 				}));
	// 			setFiles(fbxFiles);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

	const items = [
		{ id: 1, title: "Elephant Tower Raw", path: "./models/Elephant_Tower.fbx" },
		{ id: 2, title: "Elephant Tower Remesh", path: "./models/Elephant_Tower_Remesh.fbx" },
		{ id: 3, title: "Big Ben Solid", path: "./models/Big_Ben_Solid.fbx" },
		{ id: 4, title: "T Hotel Solid", path: "./models/T_Hotel.fbx" },
		{ id: 4, title: "Arc de Triomphe", path: "./models/Arc_de_Triomphe.fbx" },
	];

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
