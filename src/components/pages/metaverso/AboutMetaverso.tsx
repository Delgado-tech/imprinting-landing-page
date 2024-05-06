import { BadgeCheck, GoalIcon } from "lucide-react";
import ilustration from "../../../assets/bars.png";
import ListItems from "../../ListItems";
import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";
import AccordionGroup from "../AccordionGroup";

export default function AboutMetaverso() {
	return (
		<section className="flex flex-col gap-32 px-8 py-16 lg:px-32">
			<div className="flex flex-col gap-8">
				<h2 className="relative font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
					<Decoration.LeftLineDot />
					<Reveal delay={1.2}>Imagine um mundo virtual onde você pode:</Reveal>
				</h2>
				<Reveal delay={0.6}>
					<ListItems
						items={[
							"Receber acompanhamento terapêutico individualizado e em grupo.",
							"Participar de workshops, palestras e grupos de apoio.",
							"Interagir com outras pessoas que estão passando por desafios semelhantes.",
							"Aprender sobre saúde mental e desenvolver ferramentas para lidar com suas emoções.",
						]}
						icon={<BadgeCheck />}
					/>
				</Reveal>
			</div>

			<div className="flex items-center justify-between gap-32 max-md:flex-col">
				<div className="flex flex-col gap-8">
					<h2 className="relative font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
						<Decoration.LeftLineDot />
						<Reveal delay={0.2}>Nossa Missão</Reveal>
					</h2>
					<ListItems
						className="mt-4"
						items={[
							"Criar um ambiente seguro e acolhedor para pessoas que buscam apoio e ajuda.",
							"Oferecer ferramentas e recursos para promover a recuperação e o bem-estar.",
							"Combater o estigma em torno da saúde mental e promover a inclusão social.",
						]}
						icon={<GoalIcon />}
					/>
				</div>
				<figure className="max-lg:self-center">
					<img src={ilustration} className="no-select" />
				</figure>
			</div>

			<div className="flex flex-col gap-8">
				<h2 className="relative font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
					<Decoration.LeftLineDot />
					<Reveal delay={1.2}>
						A Comunidade Terapêutica no Metaverso é ideal para quem?
					</Reveal>
				</h2>
				<Reveal delay={0.6}>
					<ListItems
						items={[
							"Pessoas que estão passando por dificuldades emocionais ou psicológicas.",
							"Pessoas que buscam um ambiente seguro e acolhedor para se conectar com outras pessoas.",
							"Pessoas que desejam aprender mais sobre saúde mental e desenvolver ferramentas para lidar com suas emoções.",
						]}
						icon={<BadgeCheck />}
					/>
				</Reveal>
			</div>

			<div className="flex w-full flex-col gap-8 text-custom-gray-07">
				<h2 className="relative mb-8 font-poppins text-3xl font-semibold text-custom-blue-02">
					<Decoration.LeftLineDot />
					<Reveal>Por que entrar nessa comunidade?</Reveal>
				</h2>
				<AccordionGroup
					accordionList={[
						{
							className: "rounded-lg bg-custom-gray-01",
							title: "Acessibilidade",
							content:
								"A plataforma online permite que pessoas de qualquer lugar do mundo participem.",
						},
						{
							className: "rounded-lg bg-custom-gray-01",
							title: "Flexibilidade",
							content:
								"Você pode acessar os serviços da comunidade no seu tempo e no seu ritmo.",
						},
						{
							className: "rounded-lg bg-custom-gray-01",
							title: "Anonimato",
							content:
								"Se você se sentir mais confortável, pode participar anonimamente.",
						},
						{
							className: "rounded-lg bg-custom-gray-01",
							title: "Tecnologia inovadora",
							content:
								"Usamos recursos imersivos do metaverso para criar uma experiência terapêutica única.",
						},
					]}
				/>
			</div>
		</section>
	);
}
