import { motion } from "framer-motion";
import Logo from "../../Logo";

export default function BrandingCoverTransition() {
	return (
		<>
			<motion.div
				className="t-0 fixed z-[990] flex h-screen w-full origin-left items-center justify-center bg-slate-100"
				initial={{ left: "-100%" }}
				animate={{ left: "-100%" }}
				exit={{ left: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			>
				<Logo
					color="white"
					className="opacit-40 size-64 transition-all max-sm:size-32"
				/>
			</motion.div>
			<motion.div
				className="t-0 fixed z-[990] flex h-screen w-full origin-right items-center justify-center bg-slate-100"
				initial={{ left: 0 }}
				animate={{ left: "100%" }}
				exit={{ left: "100%" }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.601 }}
			>
				<Logo
					color="white"
					className="opacit-40 size-64 transition-all max-sm:size-32"
				/>
			</motion.div>
		</>
	);
}
