import ButtonCta from "../../button/ButtonCta";
import Decoration from "../../decorations";

export default function CallToProgram() {
	return (
		<div className="flex w-full flex-col gap-8">
			<h2 className="relative mb-8 font-poppins text-3xl font-semibold">
				<Decoration.LeftLineDot className="bg-custom-blue-light" />
				Programa Eu Sou
			</h2>
			<p className="mb-4 text-2xl max-sm:text-lg">
				O Hospital Digital Neuro Maps se configura como um pilar fundamental do
				programa Eu Sou, para ter acesso o quanto antes a plataforma conheça o nosso
				programa!
			</p>
			<ButtonCta content="CONHECER AGORA" />
		</div>
	);
}
