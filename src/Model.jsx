import { useFBX } from "@react-three/drei";
import { useParams } from "react-router-dom";

import ModelBillboards from "./ModelBillboards";

import { itemsList } from "./Grid";

const Model = (props) => {
	const items = itemsList();

	const { name } = useParams();

	var found = items.filter(function (item) {
		return item.name === name;
	});

	const fbxModel = useFBX(found[0].fbxPath);

	if (!fbxModel.boundingSphere) {
		fbxModel.children[0].geometry.computeBoundingSphere();
	}

	// let boundingSphereRadius = fbxModel.children[0].geometry.boundingSphere.radius;
	// let norm_value = boundingSphereRadius * 20;
	let norm_value = 10000;

	let normalizedScale = [1, 1, 1].map((x) => x / norm_value);

	return (
		<>
			{props.showBillsBoards ? <ModelBillboards object={fbxModel} /> : <></>}

			<mesh scale={normalizedScale} position={[0, 0, 0]} autorotate={true}>
				<primitive object={fbxModel} dispose={null} />
			</mesh>
		</>
	);
};

export default Model;
