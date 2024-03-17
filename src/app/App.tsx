import Footer from "../components/home/Footer.tsx";
import FormSection from "../components/home/FormSection.tsx";
import Header from "../components/home/Header.tsx";
import ImprintingCoin from "../components/home/ImprintingCoin.tsx";
import Introduction from "../components/home/Introduction.tsx";
import NeuroMaps from "../components/home/NeuroMaps.tsx";
import ProgramIAM from "../components/home/ProgramIAM.tsx";
import Purpose from "../components/home/Purpose.tsx";

function App() {
	return (
		<section>
			<main>
				<Header />
				<Introduction />
				<Purpose />
				<NeuroMaps />
				<ProgramIAM />
				<ImprintingCoin />
				<FormSection />
				<Footer />
			</main>
		</section>
	);
}

export default App;
