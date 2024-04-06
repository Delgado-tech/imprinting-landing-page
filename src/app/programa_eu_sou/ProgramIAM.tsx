import Header from "../../components/header/Header";
import IntroductionBanner from "../../components/pages/programa_eu_sou/IntroductionBanner";
import ProgramApresentation from "../../components/pages/programa_eu_sou/ProgramApresentation";
import ProgramDestination from "../../components/pages/programa_eu_sou/ProgramDestination";

export default function ProgramIAMPage() {
	return (
		<section>
			<Header />
			<main>
				<IntroductionBanner />
				<ProgramDestination />
				<ProgramApresentation />
			</main>
			{/* <Footer /> */}
		</section>
	);
}
