import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function ButtonType({
	className,
	content = "button",
    type
}: ComponentProps<"button">) {
	return (
			<button
            type={type}
				className={twMerge(
					"select-none rounded-full bg-custom-blue-02 px-12 py-2 font-poppins text-base text-white transition-all hover:scale-105 hover:bg-custom-blue-01 hover:shadow-md md:text-xl",
					className,
				)}
			>
				{content}
			</button>
	);
}