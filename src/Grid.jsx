import Card from "./Card";
import { FiberContainer } from "./FiberContainer";
import { createRoot } from "react-dom/client";

const Grid = () => {
	const items = [
		{ id: 1, title: "Elephant Tower Raw", path: "./models/Elephant_Tower.fbx" },
		{ id: 2, title: "Elephant Tower Remesh", path: "./models/Elephant_Tower_Remesh.fbx" },
		{ id: 3, title: "Big Ben Solid", path: "./models/Big_Ben_Solid.fbx" },
	];

	const handleCardClick = (path) => {
		// const root = ReactDOM.createRoot(document.getElementById("root"));
		// root.render(<FiberContainer path={path} />);
		const rootElement = document.getElementById("root");
		const root = createRoot(rootElement);
		root.render(<FiberContainer path={path} />);
	};
	return (
		<div className="container">
			<div className="grid">
				{items.map((item) => (
					<Card key={item.id} title={item.title} onClick={() => handleCardClick(item.path)} />
				))}
			</div>
		</div>
	);
};

export default Grid;
