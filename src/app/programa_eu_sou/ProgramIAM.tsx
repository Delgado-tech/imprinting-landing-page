import Decoration from "../../components/decorations";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroductionBanner from "../../components/pages/programa_eu_sou/IntroductionBanner";
import ProgramApresentation from "../../components/pages/programa_eu_sou/ProgramApresentation";
import ProgramDestination from "../../components/pages/programa_eu_sou/ProgramDestination";
import ProgramInterest from "../../components/pages/programa_eu_sou/ProgramInterest";

export default function ProgramIAMPage() {
	return (
		<section>
			<div className="relative">
				<Decoration.LeftLine />

				<Header />
				<main>
					<IntroductionBanner />
					<ProgramDestination />
					<div className="relative overflow-hidden">
						<ProgramApresentation />
						{/* Decorativo */}
						<span className="absolute -bottom-16 -left-[10%] z-[99] h-32 w-[120%] rounded-[50%] bg-custom-gray-10" />
					</div>
				</main>
			</div>

			<ProgramInterest />
			<Footer />
		</section>
	);
}
