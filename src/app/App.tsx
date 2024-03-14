import ImprintingCoin from "../components/home/ImprintingCoin.tsx";
import Introduction from "../components/home/Introduction.tsx";
import NeuroMaps from "../components/home/NeuroMaps.tsx";
import ProgramIAM from "../components/home/ProgramIAM.tsx";
import NavBar from "../components/home/NavBar.tsx"

function App() {
	return (
		<section className="h-screen">
			{/* <Logo color="red" /> */}
			<main>
				<NavBar />
				<Introduction />
				<NeuroMaps />
				<ProgramIAM />
				<ImprintingCoin />
			</main>
		</section>
	);
}

export default App;
