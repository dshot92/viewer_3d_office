import { useFBX } from "@react-three/drei";

import ModelBillboards from "./ModelBillboards";

const Model = (props) => {
	const fbxFile = props.path;
	let fbxModel = useFBX(fbxFile);
	// console.log(fbxModel);

	if (!fbxModel.boundingSphere) {
		fbxModel.children[0].geometry.computeBoundingSphere();
	}

	let boundingSphereRadius = fbxModel.children[0].geometry.boundingSphere.radius;
	let norm_value = boundingSphereRadius * 20;

	let normalizedScale = props.scale.map((x) => x / norm_value);

	return (
		<>
			<ModelBillboards object={fbxModel} />
			<mesh scale={normalizedScale} position={props.position}>
				<primitive object={fbxModel} dispose={null} />
			</mesh>
		</>
	);
};

export default Model;
