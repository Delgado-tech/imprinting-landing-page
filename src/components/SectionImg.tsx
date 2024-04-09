import { twMerge } from "tailwind-merge";

interface Props {
	imgSrc?: string;
	content?: React.ReactNode;
	reverse?: boolean;
	imgWrapBottom?: boolean;
	className?: string;
	container?: boolean;
	leakingFigure?: boolean;
}

export default function SectionImg({
	imgSrc,
	content,
	reverse = false,
	className,
	container = false,
	imgWrapBottom = false,
	leakingFigure = false,
}: Props) {
	return (
		<div
			data-reverse={reverse}
			data-img-wrap-bottom={imgWrapBottom}
			data-container={container}
			className={twMerge(
				"group/cardimg relative flex items-center gap-8 rounded-lg bg-custom-gray-09 data-[container=false]:bg-transparent data-[container=true]:p-8 data-[container=true]:shadow-md max-lg:flex-col-reverse max-lg:data-[img-wrap-bottom=true]:flex-col md:justify-between",
				className,
			)}
		>
			<article className="prop-content text-lg max-lg:text-center max-sm:text-base lg:max-w-[70%] lg:group-data-[reverse=true]/cardimg:ml-[30%] lg:group-data-[reverse=true]/cardimg:text-end">
				{content}
			</article>
			{imgSrc && (
				<figure
					data-leaking={leakingFigure}
					className="
						prop-figure -right-16
						top-[calc(50%-128px)]
						flex
						items-center
						data-[leaking=true]:absolute
						group-data-[reverse=true]/cardimg:-left-24 
						max-lg:-right-0
						max-lg:top-[calc(50%-96px)] 
						max-lg:size-48  
						data-[leaking=true]:max-lg:relative 
						max-lg:group-data-[reverse=true]/cardimg:-left-0
						max-sm:size-[clamp(64px,100%,192px)] 
						data-[leaking=true]:lg:size-64"
				>
					<img className="lg:data-[leaking=true]:translate-x-5" src={imgSrc} />
				</figure>
			)}
		</div>
	);
}
