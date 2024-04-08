import BrandingCoverTransition from "../../components/animations/transitions/BrandingCoverTransition";
import Decoration from "../../components/decorations";
import Footer from "../../components/footer/Footer";
import IntroductionBanner from "../../components/IntroductionBanner";
import MoreInfo from "../../components/pages/imprinting_coin/MoreInfo";
import MoreThanACoin from "../../components/pages/imprinting_coin/MoreThanACoin";
import Targets from "../../components/pages/imprinting_coin/Targets";

export default function ImprintingCoinPage() {
	return (
		<section>
			<BrandingCoverTransition />

			<div className="relative overflow-hidden">
				<Decoration.LeftLine />

				<main>
					<IntroductionBanner
						title="Imprinting Coin"
						subTitle="Criptomoeda"
						content="Prepare-se para uma nova era na saúde mental e bem-estar social! O Instituto Imprinting,
                                liderado pelo visionário Jônatas Alexsandro da Rosa Rodrigues, anuncia o primeiro IPO (Oferta Pública Inicial) Humano
                                Imprinting Crypto Tech, abrindo caminho para um futuro mais promissor para todos."
						className="from-custom-blue-02 to-custom-gray-09"
						lightText
					/>
					<Targets />
					<MoreThanACoin />
					<MoreInfo />
				</main>
			</div>
			<Footer />
		</section>
	);
}
