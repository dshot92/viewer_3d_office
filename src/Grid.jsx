import Card from "./Card";
import { useState, useEffect } from "react";
import { FiberContainer } from "./FiberContainer";
import { createRoot } from "react-dom/client";
import axios from "axios";

const MODEL_FOLDER = "./models/";
const FILE_EXTENSION = ".fbx";

const Grid = () => {
	const [items, setFiles] = useState([]);

	useEffect(() => {
		axios
			.get(MODEL_FOLDER)
			.then((response) => {
				const fbxFiles = response.data
					.filter((file) => file && file.endsWith && file.endsWith(FILE_EXTENSION))
					// .sort((a, b) => new Date(a.modifiedDate) - new Date(b.modifiedDate))
					.map((file, index) => ({
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
