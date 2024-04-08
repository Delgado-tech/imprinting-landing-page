import ilustration_chatbot from "../../../assets/chatbot.png";
import ilustration_data_analist from "../../../assets/data-analist.png";
import ilustration_mobile_world from "../../../assets/mobile-world.png";
import Decoration from "../../decorations";
import SectionImg from "../../SectionImg";

export default function Solutions() {
	return (
		<section className="flex flex-col gap-8 px-8 py-16 lg:gap-28 lg:px-32">
			<h2 className="relative font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
				<Decoration.LeftLineDot />
				Soluções
			</h2>
			<SectionImg
				imgSrc={ilustration_chatbot}
				leakingFigure
				container
				imgWrapBottom
				reverse
				className="bg-custom-pastel-blue"
				content={
					<div className="flex flex-col gap-4">
						<h3 className="font-poppins text-2xl font-semibold text-custom-gray-07">
							Chatbot gamificado
						</h3>
						<p>
							Interface interativa que facilita a comunicação entre pacientes e
							profissionais de saúde
						</p>
					</div>
				}
			/>
			<SectionImg
				imgSrc={ilustration_data_analist}
				leakingFigure
				container
				imgWrapBottom
				className="bg-custom-pastel-green"
				content={
					<div className="flex flex-col gap-4">
						<h3 className="font-poppins text-2xl font-semibold text-custom-gray-07">
							Repositório de dados e informações
						</h3>
						<p>
							Base de dados abrangente com informações sobre saúde, doenças,
							tratamentos e outros temas relevantes.
						</p>
					</div>
				}
			/>
			<SectionImg
				imgSrc={ilustration_mobile_world}
				leakingFigure
				container
				imgWrapBottom
				reverse
				className="bg-custom-pastel-pink"
				content={
					<div className="flex flex-col gap-4">
						<h3 className="font-poppins text-2xl font-semibold text-custom-gray-07">
							Redes Descritiva, Diagnóstica, Preditiva e Prescritiva
						</h3>
						<p>
							Ferramentas de inteligência artificial que auxiliam os profissionais de
							saúde na análise de dados.
						</p>
					</div>
				}
			/>
		</section>
	);
}
