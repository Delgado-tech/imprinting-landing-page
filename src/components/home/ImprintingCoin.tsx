import coin from "../../assets/coin_ball.png";
import coin_top from "../../assets/waves/coin_top_wave.png";
import coin_bottom from "../../assets/waves/coin_bottom_wave.png";
import ButtonCta from "../button/ButtonCta";

export default function ImprintingCoin() {
	return (
		<section className="bg-custom-gray-09 z-10 mt-36 relative pt-36 pb-80">
			<figure>
				<img
					src={coin_top}
					className="no-select absolute -top-[77px] left-0 -z-10 max-h-[80px] "
				/>
			</figure>
			<div className="flex gap-12 justify-center items-center px-[10px] max-lg:flex-wrap-reverse">
				<article className="flex flex-col items-center justify-center gap-8 px-8 lg:px-32 xl:items-center">
					<h1 className="text-center font-poppins mb-8 text-6xl font-semibold  text-custom-beige-03 max-xl:text-5xl max-sm:text-4xl xl:text-center">
						Impriting Coin
					</h1>
					<p className="text-center text-2xl text-white md-xl:text-xl">
						Nossa criptomoeda inovadora, viabiliza o acesso a tratamentos de saúde e a
						experiências exclusivas na plataforma.
					</p>
					<p className="text-center text-2xl text-white md-xl:text-xl">
						Shows, congressos, feiras, eventos, imersões, conferências, intercâmbios
						culturais, sociais, científicos e voluntários ao seu alcance
					</p>
					<ButtonCta
						className="mt-12 bg-custom-beige-03 text-black hover:text-white"
						content="veja mais"
					/>
				</article>
				<figure>
					<img
						src={coin}
						className="max-w-[400px] max-xl:max-w-[350px] max-lg:max-w-[300px] max-md:max-w-[250px] m-auto"
					/>
				</figure>
			</div>
			<figure>
				<img
					src={coin_bottom}
					className="no-select absolute -bottom-[94px] right-0 -z-10 max-h-[97px]"
				/>
			</figure>
		</section>
	);
}
