import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
	<>
		<div style={{ display: "flex", flexDirection: "column", height: "100dvh", alignItems: "center", justifyContent: "center" }}>
			<h1>404 - Not Found!</h1>
			<Link to="/">Go Home</Link>
		</div>
	</>
);

export default NotFound;
