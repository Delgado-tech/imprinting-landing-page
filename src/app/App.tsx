import Cards from "../components/home/Cards.tsx";
import FormContact from "../components/home/FormContact.tsx";
import Header from "../components/home/Header.tsx";
import ImprintingCoin from "../components/home/ImprintingCoin.tsx";
import Introduction from "../components/home/Introduction.tsx";
import NeuroMaps from "../components/home/NeuroMaps.tsx";
import ProgramIAM from "../components/home/ProgramIAM.tsx";

function App() {
	return (
		<section className="h-screen">
			{/* <Logo color="red" /> */}
			<main>
				<span id={"top"} />
				<Header />
				<Introduction />
				<Cards />
				<NeuroMaps />
				<ProgramIAM />
				<ImprintingCoin />
				<FormContact />
				<span id={"bottom"} />
			</main>
		</section>
	);
}

export default App;
