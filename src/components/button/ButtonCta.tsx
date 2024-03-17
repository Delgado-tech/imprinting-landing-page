import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"button"> {
	link?: string;
}

export default function ButtonCta({
	link = "#",
	className,
	content = "button",
}: Props) {
	return (
		<Link to={link}>
			<button
				className={twMerge(
					"select-none rounded-full bg-custom-blue-02 px-8 py-2 font-poppins text-base text-white transition-all hover:scale-105 hover:bg-custom-blue-01 hover:shadow-md max-xs:text-sm md:px-12 md:text-xl",
					className,
				)}
			>
				{content}
			</button>
		</Link>
	);
}
