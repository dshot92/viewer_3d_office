import { Routes, Route } from "react-router-dom";

import Grid from "./Grid";
import ModelViewer from "./ModelViewer";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Grid />} />
			<Route path=":name" element={<ModelViewer />} />
		</Routes>
	);
};

export default App;
