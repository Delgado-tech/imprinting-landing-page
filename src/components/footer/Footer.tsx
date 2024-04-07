import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

interface ISocialMedia {
	name: string;
	icon: React.ReactNode;
	link: string;
}

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const whatsappRedirectMessage =
		"Olá! Eu vim através de seu site, e eu gostaria de tirar algumas dúvidas com vocês.";

	const socialMediaIconStyle =
		"size-10 cursor-pointer transition-all hover:scale-105 hover:text-custom-pink max-md:size-8";

	const socialMedia: ISocialMedia[] = [
		{
			name: "Instagram",
			icon: <FaInstagram className={socialMediaIconStyle} />,
			link: "https://www.instagram.com/imprinting_dao/",
		},
		{
			name: "LinkedIn",
			icon: <FaLinkedin className={socialMediaIconStyle} />,
			link: "https://www.linkedin.com/company/imprintingdao/",
		},
		{
			name: "Youtube",
			icon: <FaYoutube className={socialMediaIconStyle} />,
			link: "https://www.youtube.com/@ImprintingDeepTech",
		},
	];

	return (
		<section className="bg-custom-black-02 p-8 font-poppins text-xl text-custom-gray-03 max-sm:text-sm">
			<footer className="flex items-center justify-between gap-16 max-md:flex-col max-sm:items-start">
				<div className="flex flex-col items-start gap-4 max-md:items-center max-sm:items-start">
					<span className="flex items-center gap-2">
						<span className="text-lg text-custom-gray-07 max-sm:text-sm">
							Copyright © {currentYear} Imprinting
						</span>
					</span>

					<span className="flex items-center gap-2 max-sm:flex-col max-sm:items-start">
						Telefone:{" "}
						<a
							href={`https://api.whatsapp.com/send/?phone=5551985466852&text=${whatsappRedirectMessage}&type=phone_number&app_absent=0`}
							target="_blank"
							className="group/phone"
						>
							<span className="rounded-lg bg-custom-gray-09 p-1 text-lg font-medium text-custom-gray-02 max-sm:text-sm">
								+55
							</span>{" "}
							<span className="text-custom-gray-01 underline-offset-2 transition-all group-hover/phone:text-white group-hover/phone:underline">
								(51) 98546-6852
							</span>
						</a>
					</span>
					<span className="flex flex-wrap gap-2 max-sm:flex-col max-sm:items-start">
						Email:{" "}
						<a
							href="mailto:contact@institutoimprinting.com.br"
							target="_blank"
							className="break-all text-custom-gray-01 underline-offset-2 transition-all hover:text-white hover:underline"
						>
							contact@institutoimprinting.com.br
						</a>
					</span>
					<a href="https://storyset.com/work" target="_blank" className="text-sm">
						Work illustrations by Storyset
					</a>
				</div>

				<div className="flex flex-col gap-2">
					<span>Redes Sociais:</span>
					<div className="flex gap-4 max-md:justify-center">
						{socialMedia.map((item, index) => (
							<a key={index} href={item.link} target="_blank">
								<figure title={item.name}>{item.icon}</figure>
							</a>
						))}
					</div>
				</div>
			</footer>
		</section>
	);
}
