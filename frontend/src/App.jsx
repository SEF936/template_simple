import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DateDetails from "./pages/DateDetails";
import Admin from "./pages/Admin";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dates/:event" element={<DateDetails />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</BrowserRouter>
	);
}
