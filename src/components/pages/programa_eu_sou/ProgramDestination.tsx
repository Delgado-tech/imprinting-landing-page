import { LucideCheckCircle2 } from "lucide-react";
import ilustration from "../../../assets/woman_meditating.png";
import ListItems from "../../ListItems";
import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";

export default function ProgramDestination() {
	return (
		<section className="flex items-center justify-between gap-16 p-32 px-8 max-lg:flex-col lg:px-32 xl:items-start">
			<div className="flex flex-col gap-16">
				<article>
					<h3 className="relative mb-8 font-poppins text-2xl font-semibold text-custom-blue-02 max-sm:text-xl">
						<Decoration.LeftLineDot />
						<Reveal>Promovendo o bem-estar</Reveal>
					</h3>
					<Reveal>
						<p className="max-w-[1000px] text-xl max-sm:text-lg">
							O Programa de IPO Humano "Eu Sou Imprinting" é uma iniciativa inovadora
							que combina pesquisa científica rigorosa com o desenvolvimento humano e
							bem-estar social da comunidade Ethereum2. Através da tokenização dos
							dados produzidos por meio da metodologia DeepTech (imersão profunda)
							aplicada ao protocolo de terapia epigenética exclusivo, o IPO Humano
							Imprinting visa construir um repositório de dados global sobre o Fenômeno
							Imprinting e seus impactos na saúde mental, no desenvolvimento humano e
							no comportamento social.
						</p>
					</Reveal>
				</article>
				<article>
					<h3 className="relative mb-8 font-poppins text-2xl font-semibold text-custom-blue-02 max-sm:text-xl">
						<Decoration.LeftLineDot />
						<Reveal>Para quem o programa é destinado</Reveal>
					</h3>
					<Reveal>
						<p className="mb-6 max-w-[1000px] text-xl max-sm:text-lg">
							O programa é destinado para pessoas que sofrem de diversos tipos de
							condições de saúde, tais como:
						</p>
					</Reveal>
					<Reveal>
						<ListItems
							items={[
								"transtornos de saúde mental",
								"doenças neurodegenerativas",
								"dores crônicas",
								"problemas de ordem física",
								"problemas de ordem emocial",
							]}
							icon={<LucideCheckCircle2 />}
						/>
					</Reveal>
				</article>
				<article>
					<h3 className="relative mb-8 font-poppins text-2xl font-semibold text-custom-blue-02 max-sm:text-xl">
						<Decoration.LeftLineDot />
						<Reveal>Metas com o programa</Reveal>
					</h3>
					<Reveal>
						<ListItems
							items={[
								"Integrar 1 milhão de pesquisadores e profissionais de saúde associados em 36 meses (2024 a 2027)",
								"Promover o acolhimento humanizado de 10 milhões de pacientes voluntáriosem 36 meses (2024 a 2027)",
								"Promover a transparência através da estrutura do IPO",
								"Financiar pesquisas inovadoras sobre o Imprinting e seus impactos na saúde mental, no desenvolvimento humano e no comportamento social através dos tokens IMP",
								"Empoderar indivíduos através dos participantes do programa poderem monetizar seus dados e contribuirem diretamente para uma pesquisa clínica internacional",
							]}
							icon={<LucideCheckCircle2 />}
						/>
					</Reveal>
				</article>
			</div>
			<figure>
				<img src={ilustration} className="no-select" />
			</figure>
		</section>
	);
}
