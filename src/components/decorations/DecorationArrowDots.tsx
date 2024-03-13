import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"svg"> {}

export default function DecorationArrowDots({
	color = "#394476",
	className,
}: Props) {
	return (
		<svg
			width="42"
			height="42"
			viewBox="0 0 42 42"
			fill="none"
			className={twMerge("opacity-20", className)}
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="37"
				cy="37"
				r="5"
				transform="rotate(90 37 37)"
				fill={color}
				fillOpacity="1"
			/>
			<circle
				cx="21"
				cy="37"
				r="5"
				transform="rotate(90 21 37)"
				fill={color}
				fillOpacity="1"
			/>
			<circle
				cx="21"
				cy="21"
				r="5"
				transform="rotate(90 21 21)"
				fill={color}
				fillOpacity="1"
			/>
			<circle
				cx="5"
				cy="37"
				r="5"
				transform="rotate(90 5 37)"
				fill={color}
				fillOpacity="1"
			/>
			<circle
				cx="37"
				cy="21"
				r="5"
				transform="rotate(90 37 21)"
				fill={color}
				fillOpacity="1"
			/>
			<circle
				cx="37"
				cy="5"
				r="5"
				transform="rotate(90 37 5)"
				fill={color}
				fillOpacity="1"
			/>
		</svg>
	);
}
