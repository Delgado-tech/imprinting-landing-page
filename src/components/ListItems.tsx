import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
	items: string[];
	icon: React.ReactNode;
	className?: string;
}

export default function ListItems({ items, icon, className }: Props) {
	return (
		<ul className="flex flex-col gap-4">
			{items.map((item, index) => (
				<li
					key={index}
					className={twMerge(
						"flex items-start gap-2 text-left text-xl text-custom-blue-02 max-sm:text-lg",
						className,
					)}
				>
					<span className="translate-y-[4px] max-sm:max-w-6 max-xs:max-w-4">
						{icon}
					</span>
					<span>{item}</span>
				</li>
			))}
		</ul>
	);
}
