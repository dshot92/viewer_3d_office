import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 2000);
	}, []);

	return (
		<div className="notFound">
			<p>NOT FOUND</p>
		</div>
	);
};

export default NotFound;
