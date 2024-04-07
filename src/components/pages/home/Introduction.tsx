import brain from "../../../assets/brain.png";
import introduction_wave from "../../../assets/waves/introduction_wave.png";
import ButtonCta from "../../button/ButtonCta";
import Decoration from "../../decorations";

export default function Introduction() {
	return (
		<section className="relative z-10 h-max bg-gradient-to-bl from-custom-blue-02 to-custom-magenta-02 to-40% pt-40 xl:to-70%">
			<Decoration.ArrowDots className="absolute right-5 -rotate-90 max-md:top-52 max-sm:top-40 max-sm:size-6" />
			<div className="relative flex flex-col gap-16 pb-32 pt-28 md:pb-16 xl:flex-row xl:pt-16">
				<article className="flex flex-col items-center gap-8 px-8 lg:px-32 xl:items-start">
					<h1 className="max-w-[400px] text-center font-roboto text-3xl font-semibold text-white max-xs:text-2xl md:max-w-[700px] md:text-5xl xl:text-start">
						Revolucionando a Pesquisa Científica e Desenvolvimento Humano
					</h1>
					<p className="max-w-[700px] text-balance text-center text-lg text-zinc-50 md:text-2xl xl:text-start">
						Somos uma DAO (Decentralized Autonomous Organization) dedicada à inovação
						em neurobiologia, promovendo avanços em neuropsicofarmacologia e
						neuroaprendizagem por meio de colaboração descentralizada e governança
						autônoma.
					</p>
					<ButtonCta
						className="mt-14 border border-white bg-transparent hover:border-transparent"
						content="saiba mais"
					/>
				</article>
				<figure className="flex justify-center xl:justify-end">
					<img
						src={brain}
						className="no-select right-0 hidden size-full max-w-[350px] lg:size-[500px] lg:max-w-none xl:absolute xl:flex xl:translate-x-0"
					/>
				</figure>
			</div>
			<figure>
				<img
					src={introduction_wave}
					className="no-select absolute -bottom-[1px] -z-10 max-h-[250px] w-full md:relative"
				/>
			</figure>
		</section>
	);
}