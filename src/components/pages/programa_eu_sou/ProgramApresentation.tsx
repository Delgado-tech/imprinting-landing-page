import Approach from "./Approach";
import Benefits from "./Benefits";
import Levels from "./Levels";

export default function ProgramApresentation() {
	return (
		<section className="relative flex w-full flex-col items-center gap-32 overflow-hidden bg-custom-gray-08 px-8 pb-64 pt-32 text-white lg:px-32 xl:items-start">
			{/* Nossa abordagem */}
			<Approach />

			{/* Fases do programa */}
			<Levels />

			{/* Benefícios */}
			<Benefits />
		</section>
	);
}
