import { Routes, Route } from "react-router-dom";

import Grid from "./Grid";
import ModelViewer from "./ModelViewer";
import NotFound from "./NotFound.jsx";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Grid />} />
			<Route exact path={"/models/:fbxPath"} element={<ModelViewer />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
