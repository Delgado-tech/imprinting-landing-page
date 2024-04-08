import Benefits from "./Benefits";
import CallToProgram from "./CallToProgram";

export default function MoreInfo() {
	return (
		<section className="relative mt-32 flex w-full flex-col items-center gap-32 overflow-hidden bg-custom-gray-08 px-8 pb-64 pt-32 text-white lg:px-32 xl:items-start">
			<Benefits />
			<CallToProgram />
		</section>
	);
}
