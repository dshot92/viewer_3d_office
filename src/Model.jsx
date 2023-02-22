import { useFBX } from "@react-three/drei";

const Model = (props) => {
	const fbxFile = props.path;

	// console.log("Model -> fbxPath:", fbxPath);

	let fbxModel = useFBX(fbxFile);

	// console.log(fbxModel);

	if (!fbxModel.boundingSphere) {
		fbxModel.children[0].geometry.computeBoundingSphere();
	}

	let boundingSphereRadius = fbxModel.children[0].geometry.boundingSphere.radius;

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
