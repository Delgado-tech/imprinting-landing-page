import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"a"> {
	link?: string;
}

export default function TextLink({
	link = "#",
	content = "text",
	className,
}: Props) {
	return (
		<Link
			to={link}
			onClick={() => {
				window.scroll({
					top: 0,
					left: 0,
				});
			}}
			className="transition-all hover:scale-[105%]"
		>
			<span
				className={twMerge(
					"cursor-pointer select-none font-normal text-custom-blue-02 underline underline-offset-4 transition-all hover:text-custom-blue-01",
					className,
				)}
			>
				{content}
			</span>
		</Link>
	);
}
