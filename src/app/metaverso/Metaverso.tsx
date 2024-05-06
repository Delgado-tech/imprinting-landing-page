import BrandingCoverTransition from "../../components/animations/transitions/BrandingCoverTransition";
import Decoration from "../../components/decorations";
import Footer from "../../components/footer/Footer";
import IntroductionBanner from "../../components/IntroductionBanner";
import MoreInfo from "../../components/pages/imprinting_coin/MoreInfo";
import AboutMetaverso from "../../components/pages/metaverso/AboutMetaverso";

export default function MetaversoPage() {
	return (
		<section>
			<BrandingCoverTransition />

			<div className="relative overflow-hidden">
				<Decoration.LeftLine />

				<main>
					<IntroductionBanner
						title="Metaverso"
						subTitle="Comunidade"
						content="A Comunidade Terapêutica no Metaverso oferece cuidados de saúde mental individualizados e em grupo, workshops e grupos de apoio para enfrentar desafios semelhantes. Este projeto da Imprinting DAO visa democratizar o acesso a cuidados de saúde mental de qualidade, promovendo bem-estar e inclusão no mundo virtual."
						className="from-custom-blue-02 to-custom-gray-09"
						lightText
					/>
					<AboutMetaverso />
					<MoreInfo />
				</main>
			</div>
			<Footer />
		</section>
	);
}
