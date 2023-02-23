import { useLocation, useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraControls } from "@react-three/drei";
// import { Sky } from "@react-three/drei";

import Model from "./Model";
import Loading from "./Loading";
import Instructions from "./Instructions";
import ViewerBackArrow from "./ViewerBackArrow";

import { itemsList } from "./Grid";

const ModelViewer = () => {
	const items = itemsList();

	const { name } = useParams();

	var found = items.filter(function (item) {
		return item.name === name;
	});

	const fbxPath = found[0].fbxPath;

	let cameraFov = 50;
	let cameraPosition = [10, 10, 10];
	let cameraNearClip = 0.1;
	let cameraFarClip = 1000000;
	let cameraZoom = 1;

	let modelPosition = [0, 0, 0];
	let modelScale = [1, 1, 1]; // inside model the scale is remaped base on bounding sphere radius

	return (
		<Suspense fallback={<Loading />}>
			<ViewerBackArrow />
			<Instructions />
			<Canvas camera={{ position: cameraPosition, zoom: cameraZoom, fov: cameraFov, near: cameraNearClip, far: cameraFarClip }}>
				<ambientLight intensity={1} />
				<Model path={fbxPath} position={modelPosition} scale={modelScale} />
				{/* <Sky distance={450000} sunPosition={[0, 1000, 0]} inclination={0} azimuth={0.25} /> */}
				<CameraControls />
			</Canvas>
		</Suspense>
	);
};

export default ModelViewer;
