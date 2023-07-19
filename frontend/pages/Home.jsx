import instance from "../helpers/instance";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const [timelines, setTimelines] = useState();

	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_URL}/timeline`)
			.then((result) => {
				setTimelines(result.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div id="HomeContainer">
			<h1>Home</h1>

			{timelines ? <p>{timelines[0].event}</p> : <p>Loading...</p>}
		</div>
	);
};

export default Home;
