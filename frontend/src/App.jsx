import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Element from "../pages/Element";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dates/:event" element={<Element />} />
			</Routes>
		</BrowserRouter>
	);
}
