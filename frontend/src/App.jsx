import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DateDetails from "./pages/DateDetails";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dates/:event" element={<DateDetails />} />
			</Routes>
		</BrowserRouter>
	);
}
