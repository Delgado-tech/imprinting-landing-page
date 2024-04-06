import sprout from "../../../assets/sprout.png";
import ButtonCta from "../../button/ButtonCta";
import Decoration from "../../decorations";

export default function ProgramIAM() {
	return (
		<section className="relative mt-80 grid grid-cols-1 gap-8 px-8 lg:px-32 lg:pb-10 xl:grid-cols-[300px_auto]">
			<figure className="relative flex items-center max-xl:justify-center">
				<Decoration.Dots className="absolute left-[calc(50%-120px)] top-10 -z-10 scale-100" />
				<img
					src={sprout}
					className="max-h-[400px] w-full max-w-[400px] xl:absolute xl:-translate-x-9 xl:scale-150"
				/>
			</figure>
			<div>
				{/* Título */}
				<div className="flex justify-center">
					<div className="relative mb-12 flex w-fit flex-col items-center">
						<h2 className="font-poppins text-2xl font-medium text-custom-gray-03 max-xl:text-xl max-sm:text-lg">
							programa
						</h2>
						<h2 className="flex flex-col items-center font-poppins text-6xl font-semibold text-custom-blue-02 max-xl:text-5xl max-sm:text-3xl sm:flex-row sm:items-end sm:gap-2 xl:gap-4">
							<span>Eu Sou</span>
						</h2>
					</div>
				</div>
				{/* Texto */}
				<article>
					<p className="mb-20 text-3xl text-custom-gray-09 max-xl:text-2xl max-sm:text-center max-sm:text-lg">
						Desperte seu potencial com um programa inovador, inspirado nos ODS
						(Objetivos de Desenvolvimento Sustentável) da ONU. Descubra ferramentas
						para crescimento pessoal e contribua para um futuro sustentável.
						Transforme-se agora e junte-se à transformação!
					</p>
					<span className="block text-center">
						<ButtonCta content="conhecer" />
					</span>
				</article>
			</div>
			<Decoration.ArrowDots className="absolute -bottom-24 right-4 scale-75 lg:right-10 lg:scale-100" />
		</section>
	);
}
