import Footer from "../../components/footer/Footer.tsx";
import Header from "../../components/header/Header.tsx";
import FormSection from "../../components/pages/home/FormSection.tsx";
import ImprintingCoin from "../../components/pages/home/ImprintingCoin.tsx";
import Introduction from "../../components/pages/home/Introduction.tsx";
import NeuroMaps from "../../components/pages/home/NeuroMaps.tsx";
import ProgramIAM from "../../components/pages/home/ProgramIAM.tsx";
import Purpose from "../../components/pages/home/Purpose.tsx";

export default function HomePage() {
	return (
		<section>
			<Header />
			<main>
				<Introduction />
				<Purpose />
				<NeuroMaps />
				<ProgramIAM />
				<ImprintingCoin />
			</main>
			<FormSection />
			<Footer />
		</section>
	);
}
