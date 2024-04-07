import { Dot } from "lucide-react";
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
							"Fisiologia",
							"Neurociência",
							"Psicologia",
							"Nutrição",
							"Exercícios",
							"Espiritualidade",
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
							"Realidade virtual",
							"Blockchain",
							"Design thinking",
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
						Nesse módulo os participantes irão aprender vários conceitos ligados ao
						desenvolvimento humano e como ele pode ser alcançado através da aréa da
						sáude e da tecnologia. A seguir os principais tópicos abordados:
					</p>
					<ListItems
						items={[
							"Objetivos de desenvolvimento sustentável (ODS)",
							"Equidade",
							"Inclusão",
							"Sustentabilidade",
						]}
						icon={<Dot />}
						className="text-slate-200 max-sm:text-base"
					/>
				</div>
			),
		},
	];

	const level2Content: IAccordionListItem[] = [
		{
			className: "rounded-lg bg-custom-gray-09",
			title: "Preparação",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Orientação individualizada sobre o medicamento escolhido, seus efeitos e
					como se preparar para a próxima etapa
				</p>
			),
		},
		{
			className: "rounded-lg bg-custom-gray-09",
			title: "Experiência",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Orientação individualizada sobre o medicamento escolhido, seus efeitos e
					como se preparar para a próxima etapa
				</p>
			),
		},
		{
			className: "rounded-lg bg-custom-gray-09",
			title: "Integração",
			content: (
				<p className="mb-6 text-custom-gray-01">
					Orientação individualizada sobre o medicamento escolhido, seus efeitos e
					como se preparar para a próxima etapa
				</p>
			),
		},
	];

	return (
		<div className="w-full">
			<h2 className="relative mb-16 font-poppins text-3xl font-semibold">
				<Decoration.LeftLineDot className="bg-custom-blue-light" />
				Fases do Programa
			</h2>
			<div className="grid grid-cols-2 items-center gap-8 max-xl:grid-cols-1">
				<div>
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
							<p>Abordagem holística do panorama geral do programa</p>
							<AccordionGroup persistOpenedAccordion accordionList={level1Content} />
						</div>
					</div>
				</div>

				<div>
					<div className="rounded-lg bg-custom-gray-10 p-8 text-xl text-custom-pastel-blue-02 max-sm:p-6 max-sm:text-base max-xs:text-center">
						<div className="mb-8 flex items-center justify-between gap-8 max-sm:flex-col max-sm:items-start">
							<div>
								<span className="font-poppins text-lg text-custom-gray-04">Fase 2</span>
								<h2 className="-translate-x-1 -translate-y-1 font-poppins text-3xl font-semibold">
									Jornada
								</h2>
							</div>
							<div>
								<span className="rounded-xl bg-custom-gray-07 px-8 py-2 font-poppins font-medium uppercase text-white max-xs:px-3">
									6 meses
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<p>Terapia com acompanhamento profissional</p>
							<AccordionGroup persistOpenedAccordion accordionList={level2Content} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
