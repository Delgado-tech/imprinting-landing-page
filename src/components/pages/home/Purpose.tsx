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
			title: "Pesquisa Neurocientífica",
			content:
				"Estudos sobre o Imprinting e seu impacto na saúde mental, bem-estar e comportamento social",
		},
		{
			icon: <UsersIcon className="size-16 max-md:size-12" />,
			title: "Desenvolvimento Humano",
			content:
				"Programas de imersão profunda para autoconhecimento, cura e desenvolvimento pessoal",
		},
		{
			icon: <BookMarkedIcon className="size-16 max-md:size-12" />,
			title: "Educação Continuada",
			content:
				"Cursos e capacitações com IA, unindo conhecimentos ancestrais e neurociência",
		},
		{
			icon: <HeartPulseIcon className="size-16 max-md:size-12" />,
			title: "Impacto Social",
			content:
				"Promoção de soluções de saúde mental e bem-estar para comunidades carentes e grupos vulneráveis",
		},
	];

	return (
		<section
			id="purpose-section"
			className="mb-10 flex flex-col items-center gap-8 p-5 px-8 lg:px-32 xl:items-start"
		>
			<Reveal>
				<h2 className="text-center font-roboto text-3xl font-semibold text-custom-gray-06 md:text-5xl xl:text-start">
					Nossa Missão
				</h2>
			</Reveal>
			<Reveal delay={0.2}>
				<p className="max-w-[1000px] text-center text-lg text-custom-black md:text-2xl xl:text-start">
					Nossa missão é desvendar o Fenômeno Imprinting, compreendendo seus impactos
					no desenvolvimento humano, mapeando dados e impulsionando tecnologias para
					tratar transtornos mentais. Empoderamos indivíduos na Era Web3, oferecendo
					soluções inovadoras para cuidados com a saúde mental e democratizando o
					acesso à informação. Além disso, geramos impacto social positivo,
					promovendo um futuro mais saudável, reduzindo o estigma em torno da saúde
					mental e promovendo a inclusão social.
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
