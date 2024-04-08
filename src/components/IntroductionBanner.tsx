import { twMerge } from "tailwind-merge";
import Decoration from "./decorations";

interface Props {
	imgSrc?: string;
	title?: string;
	subTitle?: string;
	content?: string;
	className?: string;
	lightText?: boolean;
}

export default function IntroductionBanner({
	title,
	subTitle,
	content,
	imgSrc,
	lightText = false,
	className,
}: Props) {
	return (
		<section
			data-light={lightText}
			className={twMerge(
				"group relative bg-gradient-to-r from-custom-blue-light to-white pt-40",
				className,
			)}
		>
			<Decoration.ArrowDots className="absolute right-5 size-8 -rotate-90 max-md:top-52 max-sm:top-40 max-sm:size-4" />
			<div className="flex flex-col gap-16 pb-32 pt-24 md:pb-32 xl:flex-row xl:pt-16">
				<article className="flex flex-col items-center gap-8 px-8 lg:px-32 xl:items-start">
					<div className="prop-title-section flex items-center gap-2 max-sm:flex-col">
						{imgSrc && (
							<figure>
								<img
									src={imgSrc}
									className="no-select prop-img left-0 max-h-[200px] w-full max-w-[200px]"
								/>
							</figure>
						)}
						<div className="group" data-has-img={imgSrc !== undefined}>
							<h2 className="prop-subtitle font-poppins text-2xl font-medium text-custom-gray-03 group-data-[light=true]:text-custom-gray-01 max-xl:text-xl max-xl:group-data-[has-img=false]:text-center max-sm:text-lg">
								{subTitle}
							</h2>
							<h2 className="prop-title font-poppins text-6xl font-semibold text-custom-gray-06 group-data-[light=true]:text-white max-xl:text-5xl max-xl:group-data-[has-img=false]:text-center max-sm:text-3xl sm:gap-2 xl:gap-4">
								{title}
							</h2>
						</div>
					</div>
					<p className="prop-content max-w-[800px] text-center text-lg text-custom-gray-05 group-data-[light=true]:text-zinc-300 md:text-2xl xl:text-start">
						{content}
					</p>
				</article>
			</div>
		</section>
	);
}
