import { Triangle } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
	id: number;
	title?: React.ReactNode;
	content?: React.ReactNode;
	defaultOpen?: boolean;
	noClose?: boolean;
	onToggle?: (isOpen: boolean) => void;
	className?: string;
}

export default function Accordion({
	id,
	title,
	content,
	defaultOpen = false,
	noClose = false,
	onToggle = () => {},
	className,
}: Props) {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		setOpen(defaultOpen);
	}, [defaultOpen]);

	useEffect(() => {
		onToggle(open);
	}, [open]);

	return (
		<div
			id={`acc-${id}`}
			data-open={open}
			className={twMerge("group/accordion", className)}
		>
			<div
				className="flex w-full cursor-pointer select-none items-center gap-2 p-4"
				onClick={() => {
					if (noClose && open) return;
					else setOpen((prev) => !prev);
				}}
			>
				<Triangle className="rotate-90 scale-75 transition-transform group-data-[open=true]/accordion:rotate-180 max-xs:hidden" />
				<h3 className="text-balance text-left text-2xl font-medium max-sm:text-lg max-xs:text-base">
					{title}
				</h3>
			</div>
			<div className="mt-4 p-4 pt-0 group-data-[open=false]/accordion:hidden">
				{content}
			</div>
		</div>
	);
}
