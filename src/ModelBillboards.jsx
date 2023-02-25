import { Billboard, Circle, Text } from "@react-three/drei";

const ModelBillboards = (props) => {
	let fbxModel = props.object;

	if (!fbxModel.boundingSphere) {
		fbxModel.children[0].geometry.computeBoundingSphere();
	}

	let billboards = [...fbxModel.children].filter((bill) => bill.name.includes("billboard"));

	let boundingSphereRadius = fbxModel.children[0].geometry.boundingSphere.radius;
	let norm_value = boundingSphereRadius * 20;

	// https://codesandbox.io/s/bounds-and-makedefault-rz2g0?file=/src/App.js:2089-2092

	return (
		<>
			{billboards.map((bill) => (
				<Billboard key={bill.uuid} position={[...bill.position].map((x) => x / norm_value)}>
					<Circle name={bill.name.split("$")[1].replace("_", " ")} position={[0, 0.2, 0]} scale={0.05}>
						<meshStandardMaterial color="red" />
						<Circle name={bill.name.split("$")[1].replace("_", " ")} position={[0, 0, 0]} scale={0.75}>
							<meshStandardMaterial color="white" />
						</Circle>
						<Text position={[0, 1.75, 0]} fontSize={1.5}>
							{bill.name.split("$")[1].replace("_", " ")}{" "}
						</Text>
					</Circle>
				</Billboard>
			))}
		</>
	);
};

export default ModelBillboards;
