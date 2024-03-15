import coin from "../../assets/coin.png";
import wave from "../../assets/waves/coin_wave.png";
import ButtonCta from "../button/ButtonCta";
import Decoration from "../decorations";

export default function ImprintingCoin() {
	return (
		<section className="relative mt-36">
			<figure>
				<img src={wave} className="max-h-[150px] w-full" />
			</figure>
			<div className="relative z-10 overflow-hidden bg-custom-gray-09 px-8 pb-80 pt-36 lg:px-32">
				<div className="flex flex-col-reverse gap-x-16 gap-y-8 lg:grid lg:grid-cols-[auto_1fr]">
					<article className="flex flex-col items-center justify-center gap-8 xl:items-center xl:pr-32">
						<h2 className="max-w-[1200px] pb-8 text-center font-poppins text-6xl font-semibold text-custom-beige-03 max-xl:text-5xl max-sm:text-3xl">
							Impriting Coin
						</h2>
						<p className="max-w-[1200px] text-center text-3xl text-white max-xl:text-2xl max-sm:text-center max-sm:text-lg">
							Nossa criptomoeda inovadora, viabiliza o acesso a tratamentos de saúde e
							a experiências exclusivas na plataforma.
						</p>
						<p className="max-w-[1200px] text-center text-3xl text-white max-xl:text-2xl max-sm:text-center max-sm:text-lg">
							Shows, congressos, feiras, eventos, imersões, conferências, intercâmbios
							culturais, sociais, científicos e voluntários ao seu alcance
						</p>
						<ButtonCta
							className="mt-12 max-w-[1200px] bg-custom-beige-03 text-black hover:text-white"
							content="veja mais"
						/>
					</article>
					<div className="flex w-full justify-center">
						<figure className="relative z-50 flex w-fit items-center lg:w-[250px]">
							<Decoration.Dots className="z-1 absolute right-0 top-[40%] rotate-90 scale-125 xs:top-1/2 md:scale-[200%] xl:top-[68%] xl:scale-[250%]" />
							<img
								src={coin}
								className="no-select z-10 w-full max-w-[250px] scale-75 lg:max-w-[400px] xl:absolute xl:scale-150"
							/>
						</figure>
					</div>
				</div>
			</div>
			<figure>
				<img src={wave} className="absolute z-20 max-h-[150px] w-full rotate-180" />
			</figure>
		</section>
	);
}
