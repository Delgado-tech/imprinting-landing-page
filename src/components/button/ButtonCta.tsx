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
					"bg-custom-blue-02 text-white px-12 py-2 text-xl rounded-full hover:bg-custom-blue-01 transition-all font-poppins hover:scale-105 hover:shadow-md select-none",
					className,
				)}
			>
				{content}
			</button>
		</Link>
	);
}
