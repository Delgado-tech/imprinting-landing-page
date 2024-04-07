import { twMerge } from "tailwind-merge";

interface Props {
	className?: string;
}

export default function LeftLine({ className }: Props) {
	return (
		<span
			className={twMerge(
				"absolute z-10 h-full bg-gradient-to-b from-custom-blue-light to-custom-blue-02 max-md:hidden md:left-3 md:w-1 lg:left-4 lg:w-2",
				className,
			)}
		/>
	);
}
