import { React } from "react";
import { useFBX } from "@react-three/drei";
// import * as THREE from "three";

const Model = (props) => {
	let fbxModel = useFBX(props.fbxPath);

	console.log(fbxModel);

	if (!fbxModel.boundingSphere) {
		fbxModel.children[0].geometry.computeBoundingSphere();
	}

	let boundingSphereRadius = fbxModel.children[0].geometry.boundingSphere.radius;

	// fbxModel.children[0].material.map.minFilter = THREE.LinearFilter;
	// fbxModel.children[0].material.map.minFilter = THREE.NearestFilter;

	let normalizedScale = props.scale.map((x) => x / (boundingSphereRadius * 20));

	return (
		<>
			<mesh scale={normalizedScale} position={props.position}>
				<primitive object={fbxModel} dispose={null} />
			</mesh>
		</>
	);
};

export default Model;
