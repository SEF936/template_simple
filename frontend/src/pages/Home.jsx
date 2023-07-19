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

	return (
		<div id="HomeContainer">
			<h1>Timeline of web languages</h1>

			<section>
				{timelines ? (
					timelines.map((t) => (
						<article key={t.id}>
							<p>
								{new Date(t.start_date).toLocaleDateString("fr-FR", {
									month: "long",
									year: "numeric",
								})}
							</p>
							<img src={t.event_icon} alt="" />
							<p>{t.event_name}</p>
						</article>
					))
				) : (
					<p>Loading...</p>
				)}
				<div />
			</section>
		</div>
	);
};

export default Home;
