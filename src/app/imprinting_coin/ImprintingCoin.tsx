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
						content="A Imprinting DAO, a primeira Agência Crypto Tech focada no desenvolvimento
							humano em saúde mental e bem-estar social, apresenta seu programa de IPO
							Humano (Oferta Pública Inicial), promovido por meio do fomento à rede Ethereum2.
							Este programa abre caminho para um futuro mais saudável, democrático, equitativo
							e próspero."
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
