import { Link } from "react-router-dom";
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
						<Link
							key={t.id}
							to={`dates/${t.event_name}`}
							state={t.event_description}
						>
							<article>
								<p>
									{new Date(t.start_date).toLocaleDateString("en-EN", {
										month: "long",
										year: "numeric",
									})}
								</p>
								<img src={t.event_icon} alt="" />
								<p>{t.event_name}</p>
							</article>
						</Link>
					))
				) : (
					<p>Loading...</p>
				)}
				<div />
			</section>

			<Link to="/admin">
				<button>PAGE ADMIN</button>
			</Link>
		</div>
	);
};

export default Home;
