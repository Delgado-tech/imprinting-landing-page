import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "../components/animations/AnimatedRoutes";
import Header from "../components/header/Header";

export default function App() {
	return (
		<section>
			<BrowserRouter>
				<span id={"top"} />
				<Header />
				<AnimatedRoutes />
			</BrowserRouter>
		</section>
	);
}
