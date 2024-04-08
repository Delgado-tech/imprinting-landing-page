import ilustration from "../../../assets/holding-phone.png";
import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";

export default function MoreThanACoin() {
	return (
		<section className="relative flex flex-col gap-32 px-8 max-lg:pt-16 lg:px-32 lg:py-16">
			<div className="flex flex-col gap-8 ">
				<h2 className="relative font-poppins text-3xl font-semibold text-custom-blue-02 max-sm:text-xl lg:max-w-[70%]">
					<Decoration.LeftLineDot />
					<Reveal>Imprinting Coin - Mais do que uma criptomoeda</Reveal>
				</h2>
				<Reveal delay={0.4}>
					<p className="text-xl max-sm:text-base lg:max-w-[70%]">
						Veículo de transformação social: Construindo um mundo mais justo e
						equitativo para todos.
						<br />
						<br />
						Segurança, transparência e confiabilidade: Tokenizada na blockchain
						Ethereum.
						<br />
						<br />
						Empoderamento e transformação digital e social: Abrindo caminho para um
						futuro promissor.
					</p>
				</Reveal>
				<figure className="max-lg:self-center">
					<img
						src={ilustration}
						className="no-select -z-10 w-[600px] lg:absolute lg:-right-32 lg:bottom-0 lg:-rotate-[25deg]"
					/>
				</figure>
			</div>
		</section>
	);
}
