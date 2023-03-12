import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, Sky, Stars, PerspectiveCamera, Center, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { useControls } from "leva";

import Model from "./Model";
import Loading from "./Loading";

// https://codesandbox.io/s/19uq2u?file=/src/App.js:254-258

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
	const config = useControls({
		cameraFov: { value: 35, min: 2, max: 150, step: 0.001, onChange: (v) => {}, transient: false },
		day: { value: 0, min: 0, max: 0.25, step: 0.0001, onChange: (v) => {}, transient: false },
		autoRotate: { value: false, onChange: (v) => {}, transient: false },
		POI: false,
	});

	// https://threejs.org/examples/#webgl_shaders_sky
	let cameraPos = [50, 50, 50];
	let near = 10;
	let distance = 10000000;
	let inclination = 0.66;
	let azimuth = 0.5;
	let stars = 0;
	let mieCoefficient = 0.005;
	let mieDirectionalG = 0.98;

	// Bounds example:
	// https://codesandbox.io/s/bounds-and-makedefault-rz2g0?file=/src/App.js

	return (
		<Suspense fallback={<Loading />}>
			<Canvas>
				<ambientLight intensity={1} />
				<Center>
					<Bounds fit clip observe margin={1.2}>
						<Model showBillsBoards={config.POI} />
					</Bounds>
				</Center>
				<OrbitControls autoRotate={config.autoRotate} /* maxPolarAngle={Math.PI / 2} */ />
				<PerspectiveCamera makeDefault fov={config.cameraFov} position={cameraPos} near={near} far={distance} />
				<Sky
					distance={distance}
					sunPosition={calcPosFromAngles(inclination, azimuth)}
					inclination={inclination}
					azimuth={azimuth}
					mieCoefficient={mieCoefficient}
					mieDirectionalG={mieDirectionalG}
					rayleigh={config.day}
					turbidity={config.day}
				>
					<Stars radius={distance} depth={50} count={stars ? 10000 : 0} factor={1} fade saturation={1} speed={0.5} noise={0.5} />
				</Sky>
				{false && (
					<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
						<GizmoViewport axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]} labelColor="white" />
					</GizmoHelper>
				)}
			</Canvas>
		</Suspense>
	);
};

export default ModelViewer;
