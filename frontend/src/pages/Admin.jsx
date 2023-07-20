import { Link } from "react-router-dom";

const Admin = () => {
	return (
		<div id="AdminContainer">
			<h1>Admin</h1>

			<p>Admin Page</p>

			<Link to="/">
				<button>Retour à l'accueil</button>
			</Link>
		</div>
	);
};

export default Admin;
