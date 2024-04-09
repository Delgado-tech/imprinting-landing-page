import {
	BookMarkedIcon,
	HeartPulseIcon,
	SearchIcon,
	UsersIcon,
} from "lucide-react";
import Card, { Props as ICard } from "../../Card";
import Reveal from "../../animations/Reveal";

export default function Purpose() {
	const cards: ICard[] = [
		{
			icon: <SearchIcon className="size-16 max-md:size-12" />,
			title: "Pesquisa Neurocientifica",
			content: "Inovação em Neuro-psicofarmacologia e Neuro-aprendizagem",
		},
		{
			icon: <BookMarkedIcon className="size-16 max-md:size-12" />,
			title: "Educação Integrada",
			content:
				"Cursos e capacitações com IA, unindo conhecimentos ancestrais e neurociência",
		},
		{
			icon: <HeartPulseIcon className="size-16 max-md:size-12" />,
			title: "Saúde Inovadora",
			content: "Hospital digital com telemedicina e gestão de saúde",
		},
		{
			icon: <UsersIcon className="size-16 max-md:size-12" />,
			title: "Desenvolvimento Humano Global",
			content: "Rede global para mudança social",
		},
	];

	return (
		<section
			id="purpose-section"
			className="mb-10 flex flex-col items-center gap-8 p-5 px-8 lg:px-32 xl:items-start"
		>
			<Reveal>
				<h2 className="text-center font-roboto text-3xl font-semibold text-custom-gray-06 md:text-5xl xl:text-start">
					Nosso Propósito
				</h2>
			</Reveal>
			<Reveal delay={0.2}>
				<p className="max-w-[1000px] text-center text-lg text-custom-black md:text-2xl xl:text-start">
					Exploramos terapias inovadoras, sendo elas psicodélicas, ligadas a ciência,
					espiritualidade e filosofia. Comprovamos, por meio de evidências clínicas,
					como abordagens como essas podem impulsionar o bem-estar mental, físico e
					emocional de um indivíduo.
				</p>
			</Reveal>
			<div className="mt-8 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 2xl:grid-cols-4">
				{cards.map((card, index) => (
					<Reveal duration={0.4} delay={0.1 * index + 0.2} key={index}>
						<Card
							icon={card.icon}
							title={card.title}
							content={card.content}
							className="h-full"
						/>
					</Reveal>
				))}
			</div>
		</section>
	);
}
