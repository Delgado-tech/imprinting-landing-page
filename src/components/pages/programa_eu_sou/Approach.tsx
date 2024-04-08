import { BookCheck, School, ShieldCheck, Telescope } from "lucide-react";
import SimpleCard from "../../SimpleCard";
import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";

export default function Approach() {
	return (
		<div className="w-full">
			<h2 className="relative mb-16 font-poppins text-3xl font-semibold">
				<Decoration.LeftLineDot className="bg-custom-blue-light" />
				<Reveal>Nossa abordagem</Reveal>
			</h2>
			<div className="relative grid grid-cols-12 gap-4 text-custom-gray-08 [&>:nth-child(n)]:z-10 [&>:nth-child(n)]:max-sm:col-span-full">
				<span className="absolute -bottom-16 -left-16 rotate-90 max-lg:-bottom-12">
					<Decoration.Dots className="z-0 size-[150%] max-lg:size-[100%]" />
				</span>
				<span className="absolute -right-16 -top-24 rotate-90 max-lg:-top-12">
					<Decoration.Dots className="z-0 size-[150%] max-lg:size-[100%]" />
				</span>
				<Reveal className="col-span-7 max-md:col-span-6">
					<SimpleCard
						title="Pesquisa"
						content="Realizamos pesquisas rigorosas para garantir a segurança e a eficácia do
							tratamento"
						icon={<BookCheck />}
						className="h-full"
					/>
				</Reveal>
				<Reveal delay={0.4} className="col-span-5 max-md:col-span-6">
					<SimpleCard
						title="Educação"
						content="Fornecemos informações precisas sobre o funcionamento do tratamento, bem como os benefícios e riscos envolvidos"
						icon={<School />}
						className="h-full bg-custom-pastel-green"
					/>
				</Reveal>
				<Reveal
					delay={0.6}
					className="col-span-3 max-xl:col-span-4 max-md:col-span-6"
				>
					<SimpleCard
						title="Acolhimento"
						content="Criamos um ambiente seguro e acolhedor com nossos profissionais"
						icon={<ShieldCheck />}
						className="h-full bg-custom-pastel-pink"
					/>
				</Reveal>
				<Reveal
					delay={0.8}
					className="col-span-9 max-xl:col-span-8 max-md:col-span-6"
				>
					<SimpleCard
						title="Monitoramento"
						content="Fazemos um monitoramento totalmente individual para garantir o melhor resultado possível ao participante"
						icon={<Telescope />}
						className="h-full bg-custom-pastel-orange"
					/>
				</Reveal>
			</div>
		</div>
	);
}
