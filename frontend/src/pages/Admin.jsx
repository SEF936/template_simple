import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../helpers/instance";

const Admin = () => {
	const [events, setEvents] = useState();

	useEffect(() => {
		instance
			.get("/timeline")
			.then((res) => setEvents(res.data))
			.catch((err) => console.error(err));
	}, []);

	console.log(events);

	return (
		<div id="AdminContainer">
			<h1>Admin</h1>

			{events ? (
				events.map((ev) => (
					<article key={ev.id}>
						<ul>
							<li>
								<span>ID</span>
								<input placeholder={ev.id} />
							</li>
							<li>
								<span>Start Date</span>
								<input placeholder={ev.start_date} />
							</li>
							<li>
								<span>End Date</span>
								<input placeholder={ev.end_date} />
							</li>
							<li>
								<span>Event Name</span>
								<input placeholder={ev.event_name} />
							</li>
							<li>
								<span>Event Icon URL</span>
								<input placeholder={ev.event_icon} />
							</li>
							<li>
								<span>Event Description</span>
								<input placeholder={ev.event_description} />
							</li>
						</ul>

						<div className="icon-container">
							<img
								src="https://cdn-icons-png.flaticon.com/512/1250/1250925.png"
								alt=""
							/>

							<img
								src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
								alt=""
							/>
						</div>
					</article>
				))
			) : (
				<p>Loading ...</p>
			)}

			<Link to="/">
				<button>Retour à l'accueil</button>
			</Link>
		</div>
	);
};

export default Admin;
