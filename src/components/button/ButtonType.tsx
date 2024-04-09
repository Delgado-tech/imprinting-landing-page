import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function ButtonType({
	className,
	content,
	children,
	disabled = false,
	type,
}: ComponentProps<"button">) {
	return (
		<button
			type={type}
			disabled={disabled}
			data-disabled={disabled}
			className={twMerge(
				"select-none rounded-full bg-custom-blue-02 px-8 py-2 font-poppins text-base text-white transition-all disabled:bg-custom-magenta data-[disabled=false]:hover:scale-105 data-[disabled=false]:hover:bg-custom-blue-01 data-[disabled=false]:hover:shadow-md max-xs:text-sm md:px-12 md:text-xl",
				className,
			)}
		>
			{content}
			{children}
		</button>
	);
}
