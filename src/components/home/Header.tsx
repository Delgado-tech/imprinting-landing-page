import { AlignJustify } from "lucide-react";
import { useState } from "react";
import Logo from "../Logo";
import NavBar from "./NavBar";

export default function Header() {
	const [showNavItems, SetShowNavItems] = useState<boolean>(false);

	return (
		<section
			data-open-hamburger={showNavItems}
			className="group fixed top-0 z-[999] w-full bg-custom-gray-06 bg-opacity-[98%] transition-all data-[open-hamburger=true]:h-full data-[open-hamburger=true]:bg-opacity-95 max-sm:h-32"
		>
			<header className="flex flex-wrap items-center justify-between gap-6 gap-x-12 gap-y-6 px-4 py-12 max-sm:flex-col sm:px-6 lg:px-32">
				<div className="max-xs:justify-center flex select-none flex-wrap items-center justify-between gap-x-8 gap-y-2 max-sm:w-full">
					<a href={"#top"} className="flex cursor-pointer items-center">
						<Logo color="white" className="max-xs:size-8 size-10" />
						<span className="max-xs:text-xl font-poppins text-2xl font-medium uppercase text-white">
							Imprinting
						</span>
					</a>
					<AlignJustify
						className="max-xs:size-6 size-8 cursor-pointer select-none text-white transition-none hover:text-zinc-300 sm:hidden"
						onClick={() => SetShowNavItems((prev) => (prev = !prev))}
					/>
				</div>

				<NavBar />
			</header>
		</section>
	);
}
