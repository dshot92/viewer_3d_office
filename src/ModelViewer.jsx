import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Sky, Stars, PerspectiveCamera, Center, GizmoHelper, GizmoViewport, Environment } from "@react-three/drei";
import { useControls } from "leva";

import Model from "./Model";
import Loading from "./Loading";
import Instructions from "./Instructions";
import ViewerBackArrow from "./ViewerBackArrow";

// https://codesandbox.io/s/19uq2u?file=/src/App.js:254-258

// https://threejs.org/examples/#webgl_shaders_sky

export function calcPosFromAngles(inclination, azimuth) {
	const vector = [0, 0, 0];
	const theta = Math.PI * (inclination - 0.5);
	const phi = 2 * Math.PI * (azimuth - 0.5);

	vector[0] = Math.cos(phi);
	vector[1] = Math.sin(theta);
	vector[2] = Math.sin(phi);

	return vector;
}

const ModelViewer = () => {
	// Leva controls
	const { cameraFov } = useControls({
		cameraFov: { value: 35, min: 2, max: 150, step: 0.1 },
	});

	// const { distance, inclination, azimuth, mieCoefficient, mieDirectionalG, rayleigh, turbidity } = useControls({
	// 	distance: { value: 1000000, min: 0, max: 1000000, step: 0.001 },
	// 	inclination: { value: 0.66, min: 0.48, max: 1, step: 0.01 },
	// 	azimuth: { value: 0.5, min: 0, max: 1, step: 0.001 },
	// 	mieCoefficient: { value: 0.005, min: 0, max: 0.1, step: 0.001 },
	// 	mieDirectionalG: { value: 0.98, min: 0, max: 1, step: 0.001 },
	// 	rayleigh: { value: 0, min: 0, max: 0.25, step: 0.0001 },
	// 	turbidity: { value: 0, min: 0, max: 0.25, step: 0.001 },
	// });

	let distance = 1000000;
	let inclination = 0.66;
	let azimuth = 0.5;
	let mieCoefficient = 0.005;
	let mieDirectionalG = 0.98;
	let turbidity = 0;

	const { Day } = useControls({
		Day: { value: 0, min: 0, max: 0.25, step: 0.01 },
	});

	return (
		<Suspense fallback={<Loading />}>
			{/* <ViewerBackArrow /> */}
			{/* <Instructions /> */}
			<Canvas>
				<ambientLight intensity={1} />
				<Center disableY>
					<Model />
				</Center>
				<OrbitControls makeDefault /* maxPolarAngle={Math.PI / 2} */ />
				<PerspectiveCamera makeDefault fov={cameraFov} position={[10, 10, 10]} near={0.1} far={10000000} />
				<Sky
					distance={distance}
					sunPosition={calcPosFromAngles(inclination, azimuth)}
					inclination={inclination}
					azimuth={azimuth}
					mieCoefficient={mieCoefficient}
					mieDirectionalG={mieDirectionalG}
					rayleigh={Day}
					turbidity={Day}
				>
					<Stars radius={10.0} depth={50} count={5000} factor={40} saturation={1} fade speed={1} noise={1000} />
				</Sky>
				<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
					<GizmoViewport axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]} labelColor="white" />
				</GizmoHelper>
			</Canvas>
		</Suspense>
	);
};

export default ModelViewer;
