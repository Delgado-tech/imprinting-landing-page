import React from "react";
import { twMerge } from "tailwind-merge";
import Reveal from "./animations/Reveal";

interface Props {
	items: string[];
	icon: React.ReactNode;
	className?: string;
}

export default function ListItems({ items, icon, className }: Props) {
	return (
		<ul className="flex flex-col gap-4">
			{items.map((item, index) => (
				<Reveal key={index} delay={0.2 * index}>
					<li
						className={twMerge(
							"flex items-start gap-2 text-left text-xl text-custom-blue-02 max-sm:gap-4 max-sm:text-base",
							className,
						)}
					>
						<span className="icon translate-y-[4px] max-sm:max-w-6 max-xs:max-w-4">
							{icon}
						</span>
						<span>{item}</span>
					</li>
				</Reveal>
			))}
		</ul>
	);
}
