import { Routes, Route } from "react-router-dom";

import Grid from "./Grid";
import ModelViewer from "./ModelViewer";
import NotFound from "./NotFound.jsx";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Grid />} />
			<Route path=":fbxName" element={<ModelViewer />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
