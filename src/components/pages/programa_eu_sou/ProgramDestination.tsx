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
						<Reveal delay={0.4}>Promovendo o bem-estar</Reveal>
					</h3>
					<Reveal delay={0.6}>
						<p className="max-w-[1000px] text-xl max-sm:text-lg">
							O programa é uma iniciativa inovadora que busca promover o bem-estar e o
							desenvolvimento humano através do uso terapêutico de plantas medicinais e
							substâncias psicoativas.
						</p>
					</Reveal>
				</article>
				<article>
					<h3 className="relative mb-8 font-poppins text-2xl font-semibold text-custom-blue-02 max-sm:text-xl">
						<Decoration.LeftLineDot />
						<Reveal>Para quem o programa é destinado</Reveal>
					</h3>
					<Reveal delay={0.4}>
						<p className="mb-6 max-w-[1000px] text-xl max-sm:text-lg">
							O programa é destinado para pessoas que sofrem de diversos tipos de
							condições de saúde, tais como:
						</p>
					</Reveal>
					<Reveal delay={0.6}>
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
					<Reveal delay={0.4}>
						<ListItems
							items={[
								"Pesquisa, acolhimento e desenvolvimento de terapias integrativas com base científica tendo protocolos seguros e eficazes",
								"Integrar 1 milhão de associados em 36 meses, transformando vidas",
								"Promover o acolhimento humanizado de 10 milhões de pacientes voluntários em 36 meses",
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
