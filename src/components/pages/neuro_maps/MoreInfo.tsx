import CallToProgram from "../../CallToProgram";
import Benefits from "./Benefits";

export default function MoreInfo() {
	return (
		<section className="relative mt-32 flex w-full flex-col items-center gap-32 overflow-hidden bg-custom-gray-08 px-8 pb-64 pt-32 text-white lg:px-32 xl:items-start">
			<Benefits />
			<CallToProgram
				content="O Hospital Digital NeuroMaps se configura como um pilar fundamental do
				programa Eu Sou, para ter acesso o quanto antes a plataforma conheça o nosso
				programa!"
			/>
		</section>
	);
}
