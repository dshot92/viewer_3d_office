import { Billboard, Circle, Text, Html, ScreenSpace } from "@react-three/drei";

const ModelBillboards = (props) => {
	let fbxModel = props.object;

	if (!fbxModel.boundingSphere) {
		fbxModel.children[0].geometry.computeBoundingSphere();
	}

	let billboards = [...fbxModel.children].filter((bill) => bill.name.includes("billboard"));

	let boundingSphereRadius = fbxModel.children[0].geometry.boundingSphere.radius;
	// let norm_value = boundingSphereRadius * 20;
	let norm_value = 10000;

	// https://codesandbox.io/s/bounds-and-makedefault-rz2g0?file=/src/App.js:2089-2092

	const onPointerOver = (event) => {
		console.log(event);
		return <Html scaleFactor={1000}>100 Orthographic 101</Html>;
	};

	return (
		<>
			{billboards.map((bill) => (
				<Billboard key={bill.uuid} position={[...bill.position].map((x) => x / norm_value)} onPointerOver={onPointerOver}>
					<Circle name={bill.name.split("$")[1].replace("_", " ")} position={[0, 0.2, 0]} scale={0.025}>
						<meshStandardMaterial color="blue" />
						<Circle name={bill.name.split("$")[1].replace("_", " ")} position={[0, 0, 0]} scale={0.85}>
							<meshStandardMaterial color="white" />
						</Circle>
						<Text position={[0, 3.0, 0]} fontSize={2.5} strokeWidth={0.035} color="white" strokeColor="blue">
							{bill.name.split("$")[1].replace("_", " ")}{" "}
						</Text>
					</Circle>
				</Billboard>
			))}
		</>
	);
};

export default ModelBillboards;
