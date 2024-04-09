import { twMerge } from "tailwind-merge";

interface Props {
	title?: string;
	className?: string;
	content?: string;
	icon?: React.ReactNode;
}

export default function SimpleCard({ title, content, icon, className }: Props) {
	return (
		<div
			className={twMerge(
				"bg-custom-pastel-blue rounded-lg p-8 max-sm:p-6 max-xs:text-center",
				className,
			)}
		>
			<div className="mb-2 flex flex-wrap items-center gap-2 text-2xl font-medium max-sm:text-xl max-xs:justify-center">
				{icon}
				<h3>{title}</h3>
			</div>
			<p className="pb-16 text-lg max-sm:text-base">{content}</p>
		</div>
	);
}
