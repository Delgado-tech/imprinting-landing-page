import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface Props extends ComponentProps<"div"> {
	icon?: React.ReactElement;
}

export default function Card({
	className,
	icon,
	title,
	content,
	children,
}: Props) {
	return (
		<div
			className={twMerge(
				"flex flex-col items-center gap-4 rounded-t-lg rounded-br-[30px] border-2 border-custom-blue-02 px-8 py-8",
				className,
			)}
		>
			{children ? (
				<>{children}</>
			) : (
				<>
					<figure className="text-custom-blue-02">{icon}</figure>
					<span className="text-center font-poppins text-2xl font-medium text-custom-blue-02 max-md:text-lg">
						{title}
					</span>
					<span className="text-center text-2xl max-md:text-base">{content}</span>
				</>
			)}
		</div>
	);
}
