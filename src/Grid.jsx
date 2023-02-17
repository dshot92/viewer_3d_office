import Card from "./Card";
import { FiberContainer } from "./FiberContainer";
import ReactDOM from "react-dom";

const Grid = () => {
    const items = [
        { id: 1, title: "test.fbx", description: "This is item 1.", path: "./models/test.fbx" },
        { id: 2, title: "test2.fbx", description: "This is item 2.", path: "./models/test2.fbx" },
        { id: 3, title: "Atlantic_Avenue_Beach_v001.fbx", description: "This is item 3.", path: "./models/Atlantic_Avenue_Beach_v001.fbx" },
        { id: 4, title: "test2.fbx", description: "This is item 2.", path: "./models/test2.fbx" },
        { id: 5, title: "test2.fbx", description: "This is item 2.", path: "./models/test2.fbx" },
        { id: 6, title: "test2.fbx", description: "This is item 2.", path: "./models/test2.fbx" },
        { id: 7, title: "test2.fbx", description: "This is item 2.", path: "./models/test2.fbx" },
        { id: 8, title: "test2.fbx", description: "This is item 2.", path: "./models/test2.fbx" },
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
