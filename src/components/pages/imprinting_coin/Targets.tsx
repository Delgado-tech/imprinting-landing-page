import { BadgeCheck, GoalIcon } from "lucide-react";
import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";
import ListItems from "../../ListItems";

export default function Targets() {
	return (
		<section className="flex flex-col gap-32 px-8 py-16 lg:px-32">
			<div className="flex flex-col gap-8">
				<h2 className="relative font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
					<Decoration.LeftLineDot />
					<Reveal delay={1.2}>Objetivos</Reveal>
				</h2>
				<Reveal delay={1.4}>
					<p className="text-xl max-sm:text-base">
						Esta criptomoeda pioneira tem como objetivo democratizar o acesso a
						serviços de qualidade, transformando o cenário da saúde mental. Sob a
						liderança visionária de{" "}
						<i className="text-custom-blue-02">
							Jônatas Alexsandro da Rosa Rodrigues
						</i>
						, a Imprinting promete oferecer uma nova abordagem para a saúde através da
						tecnologia blockchain, visando criar um futuro mais inclusivo e acessível
						para todos. <br />
						<br />
						Nossos principais alvos com a criptomoeda:
					</p>
				</Reveal>
				<Reveal delay={0.6}>
					<ListItems
						items={[
							"Democratizar o acesso a serviços de qualidade por transformar o cenário da saúde mental por meio da cooperação internacional descentralizada",
							"Criar um futuro mais inclusivo e acessível através da abordagem IMP para a saúde mental por meio da tecnologia blockchain",
							"Financiar a pesquisa e o desenvolvimento pelo IPO Humano que visa captar R$110 milhões de reais em 36 meses para pesquisa, desenvolvimento e integração de 1 milhão de pesquisadores multidisciplinares, 10 milhões de profissionais de saúde e 100 milhões de pacientes voluntários.",
							"Lançar a Agência Imprinting Corp que fornecerá soluções e tecnologias Ethereum2 para democratizar o acesso a serviços de saúde mental de alta qualidade.",
						]}
						icon={<GoalIcon />}
					/>
				</Reveal>
			</div>

			<div className="flex flex-col gap-8">
				<h2 className="relative font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl">
					<Decoration.LeftLineDot />
					<Reveal delay={0.2}>Um projeto audacioso com uma equipe apaixonada</Reveal>
				</h2>
				<Reveal delay={0.4}>
					<p className="text-xl max-sm:text-base">
						Almejamos a criação de um repositório nacional de dados em saúde mental e
						bem-estar social e faremos isso atráves de uma equipe altamente
						qualificada e comprometida em fazer a diferença no mundo.
						<br />
						<br />
						Acreditamos que por meio do IPO Humano do Instituto Imprinting e a
						distribuição do IMP estaremos aptos a:
					</p>
				</Reveal>
				<ListItems
					className="mt-4"
					items={[
						"Democratizar o acesso à saúde mental de qualidade",
						"Garantir bem-estar social para todos os indivíduos",
						"Promover a sustentabilidade ambiental",
						"Gerar um impacto social positivo e duradouro",
					]}
					icon={<BadgeCheck />}
				/>
			</div>
		</section>
	);
}
