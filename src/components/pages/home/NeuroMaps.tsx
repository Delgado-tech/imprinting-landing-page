import { BadgeCheck } from "lucide-react";
import TextLink from "../../TextLink";
import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";

export default function NeuroMaps() {
	const resources = [
		"Consultas e tratamentos a distância",
		"Recursos de apoio ao paciente",
		"Repositório de dados e informações",
		"Monitoramento digital",
		"Chatbot Gamificado",
	];

	return (
		<section className="mt-64">
			<div className="flex justify-center">
				<Reveal>
					<div className="relative mb-12 flex w-fit flex-col items-center">
						<Decoration.Waves className="absolute -left-28 -top-[70%] z-10 scale-[25%] sm:-left-32 sm:scale-50 xl:scale-75" />
						<h2 className="font-poppins text-2xl font-medium text-custom-gray-03 max-xl:text-xl max-sm:text-lg">
							Hospital Digital
						</h2>
						<h2 className="flex flex-col items-center font-poppins text-6xl font-semibold text-custom-gray-07 max-xl:text-5xl max-sm:text-3xl sm:flex-row sm:items-end sm:gap-2 xl:gap-4">
							<span>Neuro Maps</span>
							<TextLink
								link="/neuro-maps"
								content="ver mais"
								className="text-2xl max-xl:text-xl max-sm:text-lg"
							/>
						</h2>
					</div>
				</Reveal>
			</div>
			<div className="px-8 max-sm:flex max-sm:justify-center lg:px-32">
				<ul className="grid gap-8 xs:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
					{resources.map((resource, index) => (
						<Reveal key={index} delay={0.1 * index}>
							<li className="flex gap-2 text-3xl text-custom-gray-09 max-xl:text-2xl max-sm:items-center max-sm:text-lg max-xs:flex-col max-xs:justify-center max-xs:text-center">
								<BadgeCheck className="min-h-6 min-w-6 translate-y-[2px] text-custom-blue-02 sm:min-h-8 sm:min-w-8 xl:translate-y-1" />
								{resource}
							</li>
						</Reveal>
					))}
				</ul>
			</div>
		</section>
	);
}
