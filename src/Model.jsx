import { useFBX, Billboard, Circle, Text, Html } from "@react-three/drei";
import { useParams } from "react-router-dom";

import { itemsList } from "./Grid";

const onPointerOver = (event) => {
	console.log(event);
	return <Html scaleFactor={1000}>100 Orthographic 101</Html>;
};

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

	let billboards = [...fbxModel.children].filter((bill) => bill.name.includes("billboard"));

	let boundingSphereRadius = fbxModel.children[0].geometry.boundingSphere.radius;

	return (
		<>
			{props.showBillsBoards ? (
				<>
					{billboards.map((bill) => (
						<Billboard key={bill.uuid} position={[...bill.position].map((x) => x / boundingSphereRadius)} onPointerOver={onPointerOver}>
							<Circle name={bill.name.split("$")[1].replace("_", " ")} position={[0, 0.5, 0]} scale={1}>
								<meshStandardMaterial color="blue" />
								<Circle name={bill.name.split("$")[1].replace("_", " ")} position={[0, 0, 0]} scale={0.85}>
									<meshStandardMaterial color="white" />
								</Circle>
								<Text position={[0, 2, 0]} fontSize={2} strokeWidth={0.05} color="white" strokeColor="blue">
									{bill.name.split("$")[1].replace("_", " ")}{" "}
								</Text>
							</Circle>
						</Billboard>
					))}
				</>
			) : (
				<></>
			)}
			<mesh scale={1 / boundingSphereRadius} position={[0, 0, 0]} autorotate={true}>
				<primitive object={fbxModel} dispose={null} />
			</mesh>
		</>
	);
};

export default Model;
