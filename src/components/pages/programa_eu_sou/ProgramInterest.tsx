import Reveal from "../../animations/Reveal";
import ContactForm from "../../ContactForm";

export default function ProgramInterest() {
	return (
		<section className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-custom-gray-10 px-8 py-16 text-white lg:px-32 xl:items-start">
			<h2 className="mb-16 font-poppins text-3xl font-semibold uppercase text-custom-blue-light">
				<Reveal>Quero participar!</Reveal>
			</h2>
			<Reveal delay={0.4}>
				<div className="flex w-full justify-between gap-4 max-lg:flex-col max-lg:items-center max-lg:gap-12">
					<div className="text-2xl text-custom-pastel-blue max-lg:text-center max-sm:text-lg lg:max-w-[40%]">
						<Reveal delay={0.6}>
							Para participar ou tirar suas dúvidas sobre o programa, basta preencher o
							formulário a seguir, que entraremos em contato o quanto antes!
						</Reveal>
					</div>
					<ContactForm />
				</div>
			</Reveal>
		</section>
	);
}
