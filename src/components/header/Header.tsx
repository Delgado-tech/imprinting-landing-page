import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import NavBar from "./NavBar";

export default function Header() {
	const [showNavItems, setShowNavItems] = useState<boolean>(false);

	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth >= 640) {
				setShowNavItems(false);
			}
		};

		window.addEventListener("resize", resizeHandler);
	}, []);

	return (
		<section
			id={"top"}
			data-open-hamburger={showNavItems}
			className="group fixed top-0 z-[999] w-full bg-white bg-opacity-[90%] backdrop-blur-md transition-all data-[open-hamburger=true]:h-full data-[open-hamburger=true]:bg-opacity-95 max-sm:h-32"
		>
			<header className="flex flex-wrap items-center justify-between gap-6 px-4 py-12 max-sm:flex-col sm:px-6 lg:px-32">
				<div className="flex select-none flex-wrap items-center justify-between gap-x-8 gap-y-2 max-sm:w-full max-xs:justify-center">
					<a
						href={"/#top"}
						className="flex cursor-pointer items-center gap-2"
						onClick={() => setShowNavItems(false)}
					>
						<Logo color="#393D4F" className="no-select size-10 max-xs:size-8" />
						<span className="font-poppins text-2xl font-medium uppercase text-custom-gray-06 max-xs:text-xl">
							Imprinting
						</span>
					</a>
					<figure
						className="size-8 cursor-pointer select-none text-white transition-none hover:text-zinc-300 max-xs:size-6 sm:hidden"
						onClick={() => setShowNavItems((prev) => (prev = !prev))}
					>
						<AlignJustify className="text-custom-gray-06 group-data-[open-hamburger=true]:hidden" />
						<X className="text-custom-gray-06 group-data-[open-hamburger=false]:hidden" />
					</figure>
				</div>

				<NavBar closeNavBarHandler={() => setShowNavItems(false)} />
			</header>
		</section>
	);
}
