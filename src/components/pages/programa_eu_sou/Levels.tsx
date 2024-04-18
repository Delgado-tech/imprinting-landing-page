import { Dot } from "lucide-react";
import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";
import ListItems from "../../ListItems";
import AccordionGroup, { IAccordionListItem } from "../AccordionGroup";

export default function Levels() {
	const level1Content: IAccordionListItem[] = [
		{
			className: "rounded-lg bg-slate-600",
			title: "Saúde e bem-estar",
			content: (
				<div>
					<p className="mb-6">
						Nesse módulo o participante apreenderá diversos conceitos para ser
						introduzido ao mundo do programa como:
					</p>
					<ListItems
						items={[
							"Espiritualidade",
							"Exercícios",
							"Fisiologia",
							"Filosofia",
							"Neurociência",
							"Nutrição",
							"Psicologia",
						]}
						icon={<Dot />}
						className="text-slate-200 max-sm:text-base"
					/>
				</div>
			),
		},
		{
			className: "rounded-lg bg-slate-600",
			title: "Tecnologia e inovação",
			content: (
				<div>
					<p className="mb-6">
						Nesse módulo os participantes irão conhecer os principais conceitos
						ligados as tecnologias do momento e como elas podem ser aplicadas no
						âmbito da saúde. A seguir os principais conceitos que serão abordados:
					</p>
					<ListItems
						items={[
							"Inteligência artificial",
							"Metaverso (Realidade virtual)",
							"Blockchain",
							"Ethereum2",
						]}
						icon={<Dot />}
						className="text-slate-200 max-sm:text-base"
					/>
				</div>
			),
		},
		{
			className: "rounded-lg bg-slate-600",
			title: "Desenvolvimento humano",
			content: (
				<div>
					<p className="mb-6">
						Conceitos e práticas gerais para o desenvolvimento humano integral.
					</p>
				</div>
			),
		},
	];

	const level2Content: IAccordionListItem[] = [
		{
			className: "rounded-lg bg-custom-gray-08",
			title: "Preparação",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Orientação individualizada sobre o medicamento escolhido (plantas
					medicinais, substâncias psicoativas ou fungos alucinógenos), seus efeitos e
					como se preparar para a imersão.
				</p>
			),
		},
		{
			className: "rounded-lg bg-custom-gray-08",
			title: "Experiência",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Aplicação terapêutica em imersão profunda, com monitoramento digital ou
					presencial, individual e em grupos.
				</p>
			),
		},
		{
			className: "rounded-lg bg-custom-gray-08",
			title: "Integração",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Aprofundamento do autoconhecimento e integração dos aprendizados na vida
					cotidiana.
				</p>
			),
		},
	];

	const level3Content: IAccordionListItem[] = [
		{
			className: "rounded-lg bg-slate-900",
			title: "Contribuição para a ciência",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Compartilhamento de dados e experiências para o avanço da pesquisa sobre o
					Fenômeno Imprinting e suas aplicações.
				</p>
			),
		},
		{
			className: "rounded-lg bg-slate-900",
			title: "Colaboração global",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Integração à rede global de pesquisa e desenvolvimento da Imprinting DAO.
				</p>
			),
		},
		{
			className: "rounded-lg bg-slate-900",
			title: "Impacto social",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Participação ativa na construção de um futuro mais saudável e próspero para
					todos.
				</p>
			),
		},
	];

	const level4Content: IAccordionListItem[] = [
		{
			className: "rounded-lg bg-custom-gray-09",
			title: "Suporte Holístico",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Acesso a ferramentas e recursos para o desenvolvimento contínuo e a busca
					pelo bem-estar integral.
				</p>
			),
		},
		{
			className: "rounded-lg bg-custom-gray-09",
			title: "Comunidade Imprinting",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Integração à comunidade Imprinting, com oportunidades de troca de
					experiências, aprendizado mútuo e colaboração.
				</p>
			),
		},
		{
			className: "rounded-lg bg-custom-gray-09",
			title: "Impacto Compartilhado",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Compartilhamento de conhecimentos e aprendizados para o impacto positivo na
					comunidade.
				</p>
			),
		},
	];

	return (
		<div className="w-full">
			<h2 className="relative mb-16 font-poppins text-3xl font-semibold">
				<Decoration.LeftLineDot className="bg-custom-blue-light" />
				<Reveal>Fases do Programa</Reveal>
			</h2>
			<div className="grid grid-cols-2 items-end gap-8 max-xl:grid-cols-1">
				<Reveal>
					<div className="rounded-lg bg-slate-500 p-8 text-xl max-sm:p-6 max-sm:text-base max-xs:text-center">
						<div className="mb-8 flex items-center justify-between gap-8 max-sm:flex-col max-sm:items-start">
							<div>
								<span className="font-poppins text-lg text-slate-200">Fase 1</span>
								<h2 className="-translate-y-1 font-poppins text-3xl font-semibold">
									Imersão
								</h2>
							</div>
							<div>
								<span className="rounded-xl bg-slate-700 px-8 py-2 font-poppins font-medium uppercase max-xs:px-3">
									2 meses
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<p>Visão geral do programa e seus fundamentos em saúde e bem-estar</p>
							<AccordionGroup persistOpenedAccordion accordionList={level1Content} />
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="rounded-lg bg-custom-gray-07 p-8 text-xl text-custom-pastel-blue-02 max-sm:p-6 max-sm:text-base max-xs:text-center">
						<div className="mb-8 flex items-center justify-between gap-8 max-sm:flex-col max-sm:items-start">
							<div>
								<span className="font-poppins text-lg text-custom-gray-04">Fase 2</span>
								<h2 className="-translate-x-1 -translate-y-1 font-poppins text-3xl font-semibold">
									Jornada
								</h2>
							</div>
							<div>
								<span className="rounded-xl bg-custom-gray-08 px-8 py-2 font-poppins font-medium uppercase text-white max-xs:px-3">
									12 meses
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<p>Terapia epigenética com acompanhamento profissional</p>
							<AccordionGroup persistOpenedAccordion accordionList={level2Content} />
						</div>
					</div>
				</Reveal>
			</div>
			<div className="mt-12 grid grid-cols-2 items-start gap-8 max-xl:grid-cols-1">
				<Reveal>
					<div className="rounded-lg bg-slate-800 p-8 text-xl max-sm:p-6 max-sm:text-base max-xs:text-center">
						<div className="mb-8 flex items-center justify-between gap-8 max-sm:flex-col max-sm:items-start">
							<div>
								<span className="font-poppins text-lg text-slate-200">Fase 3</span>
								<h2 className="-translate-y-1 font-poppins text-3xl font-semibold">
									Pesquisa e Desenvolvimento
								</h2>
							</div>
							<div>
								<span className="rounded-xl bg-slate-900 px-8 py-2 font-poppins font-medium uppercase max-xs:px-3">
									12 meses
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<p>
								Essa fase do programa foca em pesquisa, compartilhamento de dados e
								colaboração global
							</p>
							<AccordionGroup persistOpenedAccordion accordionList={level3Content} />
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="rounded-lg bg-custom-gray-10 p-8 text-xl text-custom-pastel-blue-02 max-sm:p-6 max-sm:text-base max-xs:text-center">
						<div className="mb-8 flex items-center justify-between gap-8 max-sm:flex-col max-sm:items-start">
							<div>
								<span className="font-poppins text-lg text-custom-gray-04">Fase 4</span>
								<h2 className="-translate-x-1 -translate-y-1 font-poppins text-3xl font-semibold">
									Evolução Continua
								</h2>
							</div>
							<div>
								<span className="rounded-xl bg-custom-gray-07 px-8 py-2 font-poppins font-medium uppercase text-white max-xs:px-3">
									Indeterminada
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<p>
								Essa fase do programa se trata de evolução contínua, enfocando
								aprendizagem ao longo da vida, comunidade de apoio e transformação
								pessoal e social.
							</p>
							<AccordionGroup persistOpenedAccordion accordionList={level4Content} />
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	);
}
