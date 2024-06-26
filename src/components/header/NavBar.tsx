import { Link } from "react-router-dom";

interface INavItems {
	content: string;
	link: string;
}

interface Props {
	closeNavBarHandler?: () => void;
}

export default function NavBar({ closeNavBarHandler = () => {} }: Props) {
	const navItems: INavItems[] = [
		{
			content: "Home",
			link: "/",
		},
		{
			content: "Programa Eu Sou",
			link: "/eu-sou",
		},
		{
			content: "Imprinting Coin",
			link: "/imprinting-coin",
		},
		{
			content: "NeuroMaps",
			link: "/neuro-maps",
		},
		{
			content: "Comunidade Meta",
			link: "/metaverso",
		},
	];

	return (
		<nav>
			<ul className="flex items-center gap-8 max-lg:flex-col max-lg:group-data-[open-hamburger=false]:hidden max-sm:pt-10">
				{navItems.map((item, index) => (
					<li key={index} className="group/item relative text-center">
						<Link
							to={item.link}
							onClick={() => {
								setTimeout(() => {
									window.scroll({
										top: 0,
										left: 0,
										behavior: "instant",
									});
								}, 600);
								closeNavBarHandler();
							}}
							className="font-poppins text-base uppercase text-custom-gray-06 transition-all hover:text-custom-gray-02 max-lg:text-lg xl:text-xl"
						>
							{item.content}
						</Link>
						<span className="absolute bottom-0 left-0 hidden h-[1px] w-full bg-custom-gray-01 group-hover/item:block group-hover/item:animate-linearShow" />
					</li>
				))}
			</ul>
		</nav>
	);
}
