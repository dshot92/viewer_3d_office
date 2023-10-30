import { useFBX } from "@react-three/drei";

const Grid = () => {
	const fbxPath = "/models/VROOM_Planimetry_v004.fbx";

	const fbxModel = useFBX(fbxPath);

	if (!fbxModel.boundingSphere) {
		fbxModel.children[0].geometry.computeBoundingSphere();
	}

	let boundingSphereRadius = fbxModel.children[0].geometry.boundingSphere.radius;

	return (
		<>
			<mesh scale={1 / boundingSphereRadius} position={[0, 0, 0]}>
				<primitive object={fbxModel} dispose={null} />
			</mesh>
		</>
	);
};

export default Grid;
