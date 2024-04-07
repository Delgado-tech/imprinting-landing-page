import { twMerge } from "tailwind-merge";

interface Props {
	imgSrc?: string;
	content?: React.ReactNode;
	reverse?: boolean;
	className?: string;
}

export default function CardImg({
	imgSrc,
	content,
	reverse = false,
	className,
}: Props) {
	return (
		<div
			data-reverse={reverse}
			className={twMerge(
				"group/cardimg relative flex flex-col-reverse gap-8 rounded-lg bg-custom-gray-09 p-8 shadow-md max-md:items-center",
				className,
			)}
		>
			<article className="text-lg max-md:text-center max-sm:text-base md:max-w-[70%] md:group-data-[reverse=true]/cardimg:ml-[30%] md:group-data-[reverse=true]/cardimg:text-end">
				{content}
			</article>
			<figure
				className="absolute 
				-right-16 top-[calc(50%-128px)] 
				size-64 
				group-data-[reverse=true]/cardimg:-left-24 
				max-lg:-right-2 
				max-lg:top-[calc(50%-96px)] max-lg:size-48 
				max-lg:group-data-[reverse=true]/cardimg:-left-12 
				max-md:relative
				max-md:-right-0 
				max-md:group-data-[reverse=true]/cardimg:-left-0 
				max-sm:size-[clamp(64px,100%,192px)]"
			>
				<img className="md:translate-x-5" src={imgSrc} />
			</figure>
		</div>
	);
}
