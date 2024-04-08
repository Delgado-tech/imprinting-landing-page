import Decoration from "../../components/decorations";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroductionBanner from "../../components/IntroductionBanner";
import MoreInfo from "../../components/pages/neuro_maps/MoreInfo";
import Solutions from "../../components/pages/neuro_maps/Solutions";
import Targets from "../../components/pages/neuro_maps/Targets";

export default function NeuroMapsPage() {
	return (
		<section>
			<div className="relative">
				<Decoration.LeftLine />

				<Header />
				<main>
					<IntroductionBanner
						title="Neuro Maps"
						subTitle="Hospital Digital"
						content="Uma plataforma que permite consultas remotas e monitoramento em tempo real, promovendo o bem-estar em união com os ODS da ONU."
						className="from-custom-blue-02 to-custom-magenta-02"
						lightText
					/>
					<Targets />
					<Solutions />
					<MoreInfo />
				</main>
			</div>
			<Footer />
		</section>
	);
}
