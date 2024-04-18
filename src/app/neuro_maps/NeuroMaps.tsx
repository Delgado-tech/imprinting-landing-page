import BrandingCoverTransition from "../../components/animations/transitions/BrandingCoverTransition";
import Decoration from "../../components/decorations";
import Footer from "../../components/footer/Footer";
import IntroductionBanner from "../../components/IntroductionBanner";
import MoreInfo from "../../components/pages/neuro_maps/MoreInfo";
import Solutions from "../../components/pages/neuro_maps/Solutions";
import Targets from "../../components/pages/neuro_maps/Targets";

export default function NeuroMapsPage() {
	return (
		<section>
			<BrandingCoverTransition />

			<div className="relative">
				<Decoration.LeftLine />

				<main>
					<IntroductionBanner
						title="NeuroMaps"
						subTitle="Hospital Digital"
						content="Uma plataforma inovadora que oferece consultas
							remotas e monitoramento em tempo real para promover o bem-estar mental e a
							saúde social. Integrada à comunidade Ethereum2, a plataforma utiliza a tecnologia
							blockchain para garantir segurança, transparência e confiabilidade."
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
