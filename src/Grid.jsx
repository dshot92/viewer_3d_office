import Card from "./Card";
import { FiberContainer } from "./FiberContainer";
import ReactDOM from "react-dom";

const Grid = () => {
	const items = [
        { id: 1, title: "test.fbx", description: "This is item 1.", path: "./models/test.fbx" },
        { id: 2, title: "Test_low.fbx", description: "This is item 2.", path: "./models/Test_low.fbx" },
    ];

    const handleCardClick = (path) => {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<FiberContainer path={path} />);
    };
    return (
        <div className="container">
            <div className="grid">
                {items.map((item) => (
                    <Card key={item.id} title={item.title} description={item.description} onClick={() => handleCardClick(item.path)} />
                ))}
            </div>
        </div>
    );
};

export default Grid;
