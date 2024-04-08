import ilustration from "../../../assets/mobile-with-character.png";
import SectionImg from "../../SectionImg";
import Decoration from "../../decorations";

export default function Targets() {
	return (
		<section className="px-8 py-16 lg:px-32">
			<SectionImg
				imgSrc={ilustration}
				imgWrapBottom
				className="[&_.prop-content]:text-left"
				content={
					<div className="flex flex-col gap-16">
						<div className="flex flex-col gap-4">
							<h2 className="relative mb-2 font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
								<Decoration.LeftLineDot />
								Objetivos
							</h2>
							<p>
								O Hospital Digital NeuroMaps tem como objetivo primordial ampliar o
								acesso a serviços de saúde de qualidade, especialmente para populações
								em áreas remotas ou com recursos limitados.
							</p>
							<p>
								Ao mesmo tempo, busca proporcionar uma experiência personalizada e
								humanizada aos pacientes, considerando suas necessidades individuais.
							</p>
							<p>
								Além disso, o NeuroMaps está empenhado em promover o desenvolvimento
								humano por meio da educação, pesquisa e inovação em saúde.
							</p>
						</div>
						<div className="flex flex-col gap-4">
							<h2 className="relative mb-2 font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
								<Decoration.LeftLineDot />
								Funções
							</h2>
							<p>
								O Hospital Digital NeuroMaps oferece consultas e tratamentos remotos
								conduzidos por médicos e profissionais de saúde qualificados, utilizando
								videoconferência, chat e outras ferramentas online. Este modelo permite
								acesso conveniente a cuidados de saúde de qualidade, especialmente
								benéfico para pessoas em áreas remotas ou com dificuldades de locomoção.
							</p>
							<p>
								Além disso, o hospital emprega monitoramento digital para coletar e
								analisar dados de saúde dos pacientes em tempo real. Essa abordagem
								permite acompanhar a evolução de sua condição médica e identificar
								possíveis problemas de saúde de forma proativa.
							</p>
							<p>
								Para complementar, o NeuroMaps oferece recursos de apoio ao paciente,
								fornecendo acesso a informações sobre saúde, grupos de apoio e outras
								ferramentas para ajudar os pacientes a gerenciar sua saúde de maneira
								eficaz e informada. Essa abordagem holística visa promover o bem-estar
								geral e garantir uma experiência de cuidado completa e integrada.
							</p>
						</div>
					</div>
				}
			/>
		</section>
	);
}
