import { Routes, Route } from "react-router-dom";

import ModelViewer from "./ModelViewer";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<ModelViewer />} />
		</Routes>
	);
};

export default App;
