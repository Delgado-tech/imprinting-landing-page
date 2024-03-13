import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"svg"> {
	strokeWidth: number;
}

export default function DecorationWaves({
	strokeWidth = 16,
	color = "#394476",
	className,
}: Props) {
	return (
		<svg
			width="221"
			height="221"
			viewBox="0 0 221 221"
			fill="none"
			className={twMerge("opacity-20", className)}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.4167 55.25C23.9417 59.8541 29.4667 64.4583 41.4375 64.4583C64.4583 64.4583 64.4583 46.0416 87.4792 46.0416C111.421 46.0416 109.579 64.4583 133.521 64.4583C156.542 64.4583 156.542 46.0416 179.563 46.0416C191.533 46.0416 197.058 50.6458 202.583 55.25"
				stroke={color}
				stroke-opacity="1"
				stroke-width={strokeWidth}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M18.4167 110.5C23.9417 115.104 29.4667 119.708 41.4375 119.708C64.4583 119.708 64.4583 101.292 87.4792 101.292C111.421 101.292 109.579 119.708 133.521 119.708C156.542 119.708 156.542 101.292 179.563 101.292C191.533 101.292 197.058 105.896 202.583 110.5"
				stroke={color}
				stroke-opacity="1"
				stroke-width={strokeWidth}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M18.4167 165.75C23.9417 170.354 29.4667 174.958 41.4375 174.958C64.4583 174.958 64.4583 156.542 87.4792 156.542C111.421 156.542 109.579 174.958 133.521 174.958C156.542 174.958 156.542 156.542 179.563 156.542C191.533 156.542 197.058 161.146 202.583 165.75"
				stroke={color}
				stroke-opacity="1"
				stroke-width={strokeWidth}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
