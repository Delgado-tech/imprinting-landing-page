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
			link: import.meta.env.VITE_SOCIAL_INSTAGRAM_LINK,
		},
		{
			name: "LinkedIn",
			icon: <FaLinkedin className={socialMediaIconStyle} />,
			link: import.meta.env.VITE_SOCIAL_LINKEDIN_LINK,
		},
		{
			name: "Youtube",
			icon: <FaYoutube className={socialMediaIconStyle} />,
			link: import.meta.env.VITE_SOCIAL_YOUTUBE_LINK,
		},
	];

	return (
		<section className="bg-custom-black-02 p-8 font-poppins text-xl text-custom-gray-03 max-sm:text-sm">
			<footer className="flex items-center justify-between gap-16 max-md:flex-col max-sm:items-start">
				<div className="flex flex-col items-start gap-4 max-md:items-center max-sm:items-start">
					<span className="flex items-center gap-2">
						<span className="text-lg text-custom-gray-07 max-sm:text-sm">
							Copyright © 2023-{currentYear} Imprinting
						</span>
					</span>

					<span className="flex items-center gap-2 max-sm:flex-col max-sm:items-start">
						Telefone:{" "}
						<a
							href={`https://api.whatsapp.com/send/?phone=${
								import.meta.env.VITE_NUMERO_TELEFONE_PAIS +
								import.meta.env.VITE_NUMERO_TELEFONE_DDD +
								import.meta.env.VITE_NUMERO_TELEFONE
							}&text=${whatsappRedirectMessage}&type=phone_number&app_absent=0`}
							target="_blank"
							className="group/phone"
						>
							<span className="rounded-lg bg-custom-gray-09 p-1 text-lg font-medium text-custom-gray-02 max-sm:text-sm">
								+{import.meta.env.VITE_NUMERO_TELEFONE_PAIS}
							</span>{" "}
							<span className="text-custom-gray-01 underline-offset-2 transition-all group-hover/phone:text-white group-hover/phone:underline">
								({import.meta.env.VITE_NUMERO_TELEFONE_DDD}){" "}
								{import.meta.env.VITE_NUMERO_TELEFONE.substring(0, 5)}-
								{import.meta.env.VITE_NUMERO_TELEFONE.substring(5)}
							</span>
						</a>
					</span>
					<span className="flex flex-wrap gap-2 max-sm:flex-col max-sm:items-start">
						Email:{" "}
						<a
							href={`mailto:${import.meta.env.VITE_EMAIL}`}
							target="_blank"
							className="break-all text-custom-gray-01 underline-offset-2 transition-all hover:text-white hover:underline"
						>
							{import.meta.env.VITE_EMAIL}
						</a>
					</span>
					{/* Link Obrigatório para utilização de ilustrações gratuitamente */}
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
