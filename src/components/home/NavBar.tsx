import { Link } from "react-router-dom";

interface INavItems {
	content: string;
	link: string;
}

export default function NavBar() {
	const navItems: INavItems[] = [
		{
			content: "Home",
			link: "",
		},
		{
			content: "Neuro Maps",
			link: "",
		},
		{
			content: "Programa Eu Sou",
			link: "",
		},
		{
			content: "Contato",
			link: "",
		},
	];

	return (
		<nav>
			<ul className="flex items-center gap-8 max-sm:flex-col max-sm:pt-10 max-sm:group-data-[open-hamburger=false]:hidden">
				{navItems.map((item, index) => (
					<li key={index} className="group/item relative">
						<Link
							to={item.link}
							className="font-poppins text-lg uppercase text-custom-gray-06 transition-all hover:text-custom-gray-02 xl:text-xl"
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
