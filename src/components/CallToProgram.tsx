import ButtonCta from "./button/ButtonCta";
import Decoration from "./decorations";

interface Props {
	content: string;
}

export default function CallToProgram({ content }: Props) {
	return (
		<div className="flex w-full flex-col gap-8">
			<h2 className="relative mb-8 font-poppins text-3xl font-semibold">
				<Decoration.LeftLineDot className="bg-custom-blue-light" />
				Programa Eu Sou
			</h2>
			<p className="mb-4 text-2xl max-sm:text-lg">{content}</p>
			<ButtonCta content="CONHECER AGORA" link="/eu-sou" />
		</div>
	);
}
