import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";
import AccordionGroup from "../AccordionGroup";

export default function Benefits() {
	return (
		<div className="flex w-full flex-col gap-8">
			<h2 className="relative mb-8 font-poppins text-3xl font-semibold">
				<Decoration.LeftLineDot className="bg-custom-blue-light" />
				<Reveal>Benefícios ao Paciente</Reveal>
			</h2>
			<AccordionGroup
				accordionList={[
					{
						className: "rounded-lg bg-custom-gray-09",
						title: "Acessibilidade",
						content:
							"O NeuroMaps facilita o acesso a cuidados de saúde mental para pessoas em qualquer lugar do mundo.",
					},
					{
						className: "rounded-lg bg-custom-gray-09",
						title: "Eficiência",
						content:
							" A plataforma otimiza o tempo dos pacientes e profissionais, reduzindo custos e otimizando o processo de tratamento.",
					},
					{
						className: "rounded-lg bg-custom-gray-09",
						title: "Qualidade",
						content:
							"A equipe do NeuroMaps é composta por profissionais altamente qualificados e experientes em saúde mental.",
					},
					{
						className: "rounded-lg bg-custom-gray-09",
						title: "Segurança",
						content:
							"A tecnologia blockchain garante a segurança e confidencialidade dos dados dos pacientes.",
					},
				]}
			/>
		</div>
	);
}
