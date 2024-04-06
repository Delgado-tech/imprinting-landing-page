import { BadgeCheck } from "lucide-react";
import ilustration from "../../../assets/woman_meditating.png";

export default function ProgramDestination() {
	const listItems = [
		"transtornos de saúde mental",
		"doenças neurodegenerativas",
		"dores crônicas",
		"problemas de ordem física",
		"problemas de ordem emocial",
	];

	return (
		<section className="flex items-center justify-between gap-16 p-32 px-8 max-lg:flex-col lg:px-32 xl:items-start">
			<div className="flex flex-col gap-16">
				<article>
					<h3 className="mb-8 font-poppins text-2xl font-semibold text-custom-blue-02 max-sm:text-xl">
						Promovendo o bem-estar
					</h3>
					<p className="max-w-[1000px] text-xl max-sm:text-lg">
						O programa é uma iniciativa inovadora que busca promover o bem-estar e o
						desenvolvimento humano através do uso terapêutico de plantas medicinais e
						substâncias psicoativas.
					</p>
				</article>
				<article>
					<h3 className="mb-8 font-poppins text-2xl font-semibold text-custom-blue-02 max-sm:text-xl">
						Para quem o programa é destinado
					</h3>
					<p className="mb-6 max-w-[1000px] text-xl max-sm:text-lg">
						O programa é destinado para pessoas que sofrem de diversos tipos de
						condições de saúde, tais como:
					</p>
					<ul className="flex flex-col gap-4">
						{listItems.map((item, index) => (
							<li
								key={index}
								className="flex items-start gap-2 text-xl max-sm:text-lg"
							>
								<BadgeCheck className="translate-y-[4px] text-custom-blue-02 max-sm:max-w-6 max-xs:max-w-4" />
								<span className="text-blue-950">{item}</span>
							</li>
						))}
					</ul>
				</article>
			</div>
			<figure>
				<img src={ilustration} className="no-select" />
			</figure>
		</section>
	);
}
