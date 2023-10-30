import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, PerspectiveCamera, Center } from "@react-three/drei";
import { useControls } from "leva";

import Model from "./Model";
import Loading from "./Loading";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary";

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
		autoRotate: { value: false, onChange: (v) => {}, transient: false },
	});

	// https://threejs.org/examples/#webgl_shaders_sky
	let cameraPos = [50, 50, 50];
	let near = 10;
	let distance = 10000000;

	// Bounds example:
	// https://codesandbox.io/s/bounds-and-makedefault-rz2g0?file=/src/App.js

	return (
		<ErrorBoundary fallback={<NotFound />}>
			<Suspense fallback={<Loading />}>
				<Canvas>
					<ambientLight intensity={0.2} />
					<pointLight position={[500, 400, 400]} intensity={0.1} />
					<pointLight position={[230, 230, -400]} intensity={0.3} />
					<pointLight position={[-300, -100, 100]} intensity={0.2} />
					<Center>
						<Bounds fit clip observe margin={1.2}>
							<Model />
						</Bounds>
					</Center>
					<OrbitControls autoRotate={config.autoRotate} /* maxPolarAngle={Math.PI / 2} */ />
					<PerspectiveCamera makeDefault fov={config.cameraFov} position={cameraPos} near={near} far={distance} />
				</Canvas>
			</Suspense>
		</ErrorBoundary>
	);
};

export default ModelViewer;
