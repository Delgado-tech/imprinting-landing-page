import brain from "../../assets/cerebro.png";
import introduction_wave from "../../assets/waves/introduction_wave.png";
import ButtonCta from "../button/ButtonCta";

export default function Introduction() {
	return (
		<section className="relative z-10 h-max bg-gradient-to-bl from-custom-blue-02 via-custom-magenta to-custom-beige-02 to-40% pt-32 xl:to-60%">
			<div className="relative flex flex-col gap-16 pb-32 pt-16 md:pb-16 xl:flex-row">
				<article className="flex flex-col items-center gap-8 px-8 lg:px-32 xl:items-start">
					<h1 className="max-w-[400px] text-center font-roboto text-3xl font-semibold text-custom-gray-06 md:max-w-[700px] md:text-5xl xl:text-start">
						Revolucionando a Pesquisa Científica e Desenvolvimento Humano
					</h1>
					<p className="max-w-[700px] text-center text-lg text-custom-gray-04 md:text-2xl xl:text-start">
						Somos uma startup de DeepTech empenhada em impulsionar a inovação e
						promover grandes avanços em neurobiologia por meio de pesquisas em
						Neuropsicofarmacologia e Nuroaprendizagem. 
					</p>
					<ButtonCta className="mt-14" content="saiba mais" />
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
