import Reveal from "../../animations/Reveal";
import ContactForm from "../../ContactForm";

export default function FormSection() {
	return (
		<section className="max-xl: h-full bg-custom-black py-64">
			<Reveal>
				<div className="relative z-20 flex items-center justify-center gap-20 px-32 max-xl:flex-col-reverse max-sm:px-6 max-xs:px-2 xl:-top-[96px]">
					<ContactForm />
					<Reveal delay={0.25}>
						<div className="flex flex-col gap-8 text-center text-2xl text-custom-gray-04 max-sm:text-xl xl:max-w-[400px]">
							<h2 className="text-3xl font-semibold text-custom-gray-01 max-sm:text-2xl">
								Venha fazer parte dessa comunidade global!
							</h2>
							<p>
								Para mais informações ou para estabelecer uma parceria conosco, entre em
								contato preenchendo o formulário abaixo
							</p>
							<p>
								Estamos ansiosos para colaborar com pacientes em busca de cuidados
								avançados, médicos interessados em colaborar conosco, investidores que
								desejam apoiar nossa missão e pesquisadores interessados em nossos
								estudos. Aguardamos o seu contato!
							</p>
						</div>
					</Reveal>
				</div>
			</Reveal>
		</section>
	);
}
