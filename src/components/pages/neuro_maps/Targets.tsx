import ilustration from "../../../assets/mobile-with-character.png";
import SectionImg from "../../SectionImg";
import Reveal from "../../animations/Reveal";
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
								<Reveal delay={1}>Objetivos</Reveal>
							</h2>
							<Reveal delay={1.2}>
								<p>
									<span className="text-custom-blue-02">
										Ampliar o acesso a serviços de saúde mental de qualidade:
									</span>{" "}
									O NeuroMaps democratiza o acesso a cuidados especializados para
									populações em áreas remotas ou com recursos limitados.
								</p>
							</Reveal>
							<Reveal delay={1.4}>
								<p>
									<span className="text-custom-blue-02">
										Proporcionar uma experiência personalizada e humanizada:
									</span>{" "}
									Cada paciente recebe atenção individualizada e acompanhamento contínuo
									de profissionais qualificados.
								</p>
							</Reveal>
							<Reveal delay={1.6}>
								<p>
									<span className="text-custom-blue-02">
										Promover o desenvolvimento humano:
									</span>{" "}
									O NeuroMaps investe em educação, pesquisa e inovação para oferecer
									soluções eficazes para os desafios da saúde mental.
								</p>
							</Reveal>
						</div>
						<div className="flex flex-col gap-4">
							<h2 className="relative mb-2 font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
								<Decoration.LeftLineDot />
								<Reveal delay={0.2}>Funções</Reveal>
							</h2>
							<Reveal delay={0.2}>
								<p>
									<span className="text-custom-blue-02">
										Consultas e tratamentos remotos:
									</span>{" "}
									A plataforma oferece consultas online com médicos e profissionais de
									saúde mental experientes, utilizando videoconferência, chat e outras
									ferramentas digitais.
								</p>
							</Reveal>
							<Reveal delay={0.4}>
								<p>
									<span className="text-custom-blue-02">
										Monitoramento digital em tempo real:
									</span>{" "}
									O NeuroMaps coleta e analisa dados de saúde dos pacientes em tempo
									real, permitindo um acompanhamento preciso da evolução da sua condição.
								</p>
							</Reveal>
							<Reveal delay={0.6}>
								<p>
									<span className="text-custom-blue-02">
										Recursos de apoio ao paciente:
									</span>{" "}
									A plataforma oferece acesso a informações sobre saúde mental, grupos de
									apoio e outras ferramentas para auxiliar os pacientes na gestão de sua
									saúde.
								</p>
							</Reveal>
						</div>
					</div>
				}
			/>
		</section>
	);
}
