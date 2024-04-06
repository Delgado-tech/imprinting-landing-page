import sprout from "../../../assets/sprout.png";
import Decoration from "../../decorations";

export default function IntroductionBanner() {
	return (
		<section className="from-custom-blue-light relative bg-gradient-to-r to-white pt-40">
			<Decoration.ArrowDots className="absolute right-5 size-8 -rotate-90 max-md:top-52 max-sm:top-40 max-sm:size-4" />
			<div className="flex flex-col gap-16 pb-32 pt-24 md:pb-32 xl:flex-row xl:pt-16">
				<article className="flex flex-col items-center gap-8 px-8 lg:px-32 xl:items-start">
					<div className="flex items-center gap-2 max-sm:flex-col sm:-translate-x-10">
						<figure>
							<img
								src={sprout}
								className="left-0 max-h-[200px] w-full max-w-[200px]"
							/>
						</figure>
						<div>
							<h2 className="font-poppins text-2xl font-medium text-custom-gray-03 max-xl:text-xl max-sm:text-lg">
								programa
							</h2>
							<h2 className="flex flex-col items-center font-poppins text-6xl font-semibold text-custom-gray-06 max-xl:text-5xl max-sm:text-3xl sm:flex-row sm:items-end sm:gap-2 xl:gap-4">
								<span>Eu Sou</span>
							</h2>
						</div>
					</div>
					<p className="max-w-[800px] text-center text-lg text-custom-gray-05 md:text-2xl xl:text-start">
						Seja muito bem-vindo ao Programa “Eu Sou” uma jornada transformadora em
						direção ao bem-estar e ao desenvolvimento pessoal.
					</p>
				</article>
			</div>
		</section>
	);
}
