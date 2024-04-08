import sprout from "../../assets/sprout.png";
import Decoration from "../../components/decorations";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroductionBanner from "../../components/IntroductionBanner";
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
					<IntroductionBanner
						title={"Eu Sou"}
						subTitle={"programa"}
						className={"[&_.prop-title-section]:sm:-translate-x-10"}
						content={`Seja muito bem-vindo ao Programa “Eu Sou” uma jornada transformadora em
						direção ao bem-estar e ao desenvolvimento pessoal.`}
						imgSrc={sprout}
					/>
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
