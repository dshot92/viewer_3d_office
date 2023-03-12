import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    // Redirect automatically after 10 seconds
    setTimeout(() => {
        console.log("time")
        navigate("/");
    }, 10000);

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100dvh", alignItems: "center", justifyContent: "center" }}>
		<h1>404 - Not Found!</h1>
		<Link to="/">Go Home</Link>
	</div>
    )
};

export default NotFound;
