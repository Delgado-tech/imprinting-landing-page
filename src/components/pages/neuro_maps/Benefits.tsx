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
							"Possibilidade de receber atendimento médico de qualidade sem precisar sair de casa.",
					},
					{
						className: "rounded-lg bg-custom-gray-09",
						title: "Conveniência",
						content:
							"Agendamento de consultas, realização de exames e recebimento de resultados online.",
					},
					{
						className: "rounded-lg bg-custom-gray-09",
						title: "Personalização",
						content: "Planos de tratamento totalmente personalizados.",
					},
					{
						className: "rounded-lg bg-custom-gray-09",
						title: "Preço acessível",
						content:
							"Custos de tratamento mais baixos do que os serviços de saúde tradicionais.",
					},
				]}
			/>
		</div>
	);
}
