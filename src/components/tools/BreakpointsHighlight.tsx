export default function BreakpointsHighlight() {
	return (
		<span
			className="max-xsbefore:content-['xs'] fixed left-10 top-40 z-[9999] flex items-center justify-center rounded-md px-8
			py-4 text-xl font-medium max-2xl:bg-blue-400
			max-2xl:before:content-['2xl'] max-xl:bg-yellow-500 
			max-xl:before:content-['xl'] max-lg:bg-orange-400 
			max-lg:before:content-['lg'] max-md:bg-red-500 
			max-md:before:content-['md'] max-sm:bg-violet-900
			max-sm:text-white max-sm:before:content-['sm'] 
			max-xs:bg-black max-xs:before:content-['xs']
			2xl:bg-green-500 2xl:before:content-['+2xl']"
		/>
	);
}
