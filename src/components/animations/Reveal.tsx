import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
	duration?: number;
	delay?: number;
	className?: string;
	children?: React.ReactNode;
}

export default function Reveal({
	children,
	duration = 0.6,
	delay = 0.25,
	className,
}: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const mainControls = useAnimation();
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			className={className}
			variants={{
				hidden: { opacity: 0, y: 75 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			animate={mainControls}
			transition={{ duration, delay }}
		>
			{children}
		</motion.div>
	);
}
