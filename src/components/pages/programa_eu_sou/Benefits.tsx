import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import coin from "../../../assets/coin.png";
import ilustrationWoman from "../../../assets/medicine-cuate.png";
import Reveal from "../../animations/Reveal";
import Decoration from "../../decorations";
import ListItems from "../../ListItems";
import SectionImg from "../../SectionImg";

export default function Benefits() {
	return (
		<div className="w-full">
			<h2 className="relative mb-16 font-poppins text-3xl font-semibold">
				<Decoration.LeftLineDot className="bg-custom-blue-light" />
				<Reveal>Benefícios</Reveal>
			</h2>
			<div className="flex flex-col gap-16">
				<Reveal delay={0.2}>
					<SectionImg
						container
						leakingFigure
						imgSrc={coin}
						content={
							<>
								Cada participante recebe{" "}
								<span className="text-custom-beige-02">Imprinting Coins</span> como
								reconhecimento por suas contribuições valiosas, através de uma estrutura
								gamificada, é uma criptomoeda multifuncional, por permitir a aquisição
								de kits de tecnologia e até a cobertura total do programa. Essa
								iniciativa promove a integração na comunidade Imprinting, incentivando a
								troca de experiências e o compartilhamento de conhecimentos para um
								impacto positivo contínuo.
								<br />
								<br />
								<Link
									to={"/imprinting-coin"}
									onClick={() => {
										setTimeout(() => {
											window.scroll({
												top: 0,
												left: 0,
												behavior: "instant",
											});
										}, 600);
									}}
									className="text-custom-beige-02 transition-all hover:text-custom-beige-01 hover:underline hover:underline-offset-2"
								>
									saiba mais
								</Link>
							</>
						}
					/>
				</Reveal>
				<Reveal delay={0.4}>
					<SectionImg
						container
						leakingFigure
						reverse
						imgSrc={ilustrationWoman}
						content={
							<>
								Os participantes terão acesso ao hospital digital{" "}
								<span className="text-violet-400">NeuroMaps</span> que oferece
								acolhimento humanizado em saúde e bem-estar por meio de soluções de
								tecnologias inovadoras da era web3.
								<br />
								<br />
								<Link
									to={"/neuro-maps"}
									onClick={() => {
										setTimeout(() => {
											window.scroll({
												top: 0,
												left: 0,
												behavior: "instant",
											});
										}, 600);
									}}
									className="text-violet-400 transition-all hover:text-violet-200 hover:underline hover:underline-offset-2"
								>
									saiba mais
								</Link>
							</>
						}
					/>
				</Reveal>
				<div className="mt-4">
					<Reveal delay={0.6}>
						<p className="mb-8 text-xl max-md:text-base">
							Além disso Os participantes terão acesso a plataforma de ensino a
							distância da universidade social{" "}
							<span className="text-emerald-400">Imprinting Corp</span> que oferece
							cursos em metodologia de neuro-aprendizagem, bem como a programas de
							imersão voluntária.
							<br />
							<br />
							Ao se tornarem membros da Associação, os participantes do programa
							assumem um papel ativo na construção de um futuro mais saudável e
							próspero para todos, contribuindo para:
						</p>
					</Reveal>
					<Reveal delay={0.8}>
						<ListItems
							className="text-custom-pastel-pink [&>.icon]:text-custom-pink"
							items={[
								"Contribuir com a produção de mapas de evidências clínicas",
								"Apoiar a atividades de pesquisa e desenvolvimento na rede Ethereum2",
								"Networking em rede global de cooperação social",
							]}
							icon={<BadgeCheck />}
						/>
					</Reveal>
				</div>
			</div>
		</div>
	);
}
