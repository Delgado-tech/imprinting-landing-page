import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import coin from "../../../assets/coin.png";
import ilustrationWoman from "../../../assets/medicine-cuate.png";
import Decoration from "../../decorations";
import ListItems from "../../ListItems";
import CardImg from "./CardImg";

export default function Benefits() {
	return (
		<div className="w-full">
			<h2 className="relative mb-16 font-poppins text-3xl font-semibold">
				<Decoration.LeftLineDot className="bg-custom-blue-light" />
				Benefícios
			</h2>
			<div className="flex flex-col gap-16">
				<CardImg
					imgSrc={coin}
					content={
						<>
							Cada participante recebe{" "}
							<span className="text-custom-beige-02">Imprinting Coins</span> como
							reconhecimento por suas contribuições valiosas. Essa criptomoeda tem
							várias utilidades, desde a aquisição de kits de tecnologia até a
							cobertura total do programa!
							<br />
							<br />
							<Link
								to={"/imprinting-coin"}
								className="text-custom-beige-02 transition-all hover:text-custom-beige-01 hover:underline hover:underline-offset-2"
							>
								saiba mais
							</Link>
						</>
					}
				/>
				<CardImg
					reverse
					imgSrc={ilustrationWoman}
					content={
						<>
							Os participantes terão acesso ao hospital digital{" "}
							<span className="text-violet-400">Neuro Maps</span> que oferece
							acolhimento humanizado em saúde e bem-estar por meio de soluções de
							tecnologias inovadoras.
							<br />
							<br />
							<Link
								to={"/neuro-maps"}
								className="text-violet-400 transition-all hover:text-violet-200 hover:underline hover:underline-offset-2"
							>
								saiba mais
							</Link>
						</>
					}
				/>
				<div className="mt-4">
					<p className="mb-8 text-xl max-md:text-base">
						Além disso ao se tornarem membros da Associação, os participantes do
						programa assumem um papel ativo na construção de um futuro mais saudável e
						próspero para todos, contribuindo para:
					</p>
					<ListItems
						className="text-custom-pastel-pink [&>.icon]:text-custom-pink"
						items={[
							"Produção de mapas de evidências clínicas",
							"Impulsionar atividades de pesquisa e desenvolvimento",
							"Networking e colaboração entre profissionais e participantes",
						]}
						icon={<BadgeCheck />}
					/>
				</div>
			</div>
		</div>
	);
}
