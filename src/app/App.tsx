import ImprintingCoin from "../components/home/ImprintingCoin.tsx";
import Introduction from "../components/home/Introduction.tsx";
import NeuroMaps from "../components/home/NeuroMaps.tsx";

function App() {
	return (
		<section className="h-screen">
			{/* <Logo color="red" /> */}
			<main>
				<Introduction />
				<NeuroMaps />
				<ImprintingCoin />
			</main>
		</section>
	);
}

export default App;
