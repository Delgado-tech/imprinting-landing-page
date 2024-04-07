import { twMerge } from "tailwind-merge";

interface Props {
	className?: string;
}

export default function LeftLineDot({ className }: Props) {
	return (
		<span
			className={twMerge(
				"absolute top-[calc(50%-8px)] z-20 size-4 -translate-x-[26px] rounded-full bg-custom-blue-02 max-md:hidden lg:size-5 lg:-translate-x-[118px]",
				className,
			)}
		/>
	);
}
