import { Canvas } from "@react-three/fiber";
import { CameraControls, Sky } from "@react-three/drei";
import { Scene } from "./Scene";
import Grid from "./Grid";
import { Suspense } from "react";
import { BeatLoader } from "react-spinners";
import { React, forwardRef } from "react";
import { createRoot } from "react-dom/client";

function Loading() {
	return (
		<div className="Loader">
			<BeatLoader color="#ffffff" />
		</div>
	);
}

export const FiberContainer = forwardRef((props, ref) => {
	const getBack = () => {
		const rootElement = document.getElementById("root");
		const root = createRoot(rootElement);
		root.render(<Grid />);
	};
	return (
		<Suspense fallback={<Loading />}>
			<div className={"back"}>
				<span onClick={getBack}>&#x2190;</span>
			</div>
			<Canvas dpr={3} camera={{ position: [7500, 15000, 7500], fov: 50, near: 10, far: 10000000 }}>
				<Scene model={props.path} />
				{/* <Sky distance={450000} sunPosition={[0, 1000, 0]} inclination={0} azimuth={0.25} /> */}
				<CameraControls />
			</Canvas>
		</Suspense>
	);
});
