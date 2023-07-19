import { useParams, useLocation } from "react-router";

const DateDetails = () => {
	const { event } = useParams();
	const location = useLocation();

	const desc = location.state;

	return (
		<div id="DateDetailsContainer">
			<h1>Details on {event} language</h1>

			{desc ? <p>{desc}</p> : ""}
		</div>
	);
};

export default DateDetails;
