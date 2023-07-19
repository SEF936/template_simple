import instance from "../helpers/instance";
import { useEffect, useState } from "react";

const Home = () => {
	const [timelines, setTimelines] = useState();

	useEffect(() => {
		instance
			.get(`/timeline`)
			.then((result) => {
				setTimelines(result.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	console.log(timelines);
	return (
		<div id="HomeContainer">
			<h1>Home</h1>

			{timelines ? (
				timelines.map((t) => (
					<article key={t.id}>
						<p>{t.start_date}</p>
						<p>{t.end_date}</p>
						<p>{t.event}</p>
					</article>
				))
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Home;
