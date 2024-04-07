import { useState } from "react";
import Accordion from "../Accordion";

export interface IAccordionListItem {
	title?: React.ReactNode;
	content?: React.ReactNode;
	className?: string;
}

interface Props {
	accordionList: IAccordionListItem[];
	persistOpenedAccordion?: boolean;
	defaultOpenedAccordion?: number;
}

export default function AccordionGroup({
	accordionList,
	defaultOpenedAccordion,
	persistOpenedAccordion = false,
}: Props) {
	const [openId, setOpenId] = useState<number>(defaultOpenedAccordion ?? 0);

	return (
		<>
			{accordionList.map((acc, index) => (
				<Accordion
					key={index}
					id={index}
					defaultOpen={openId === index}
					noClose={persistOpenedAccordion}
					onToggle={(isOpen) => {
						if (isOpen) setOpenId(index);
					}}
					title={acc.title}
					content={acc.content}
					className={acc.className}
				/>
			))}
		</>
	);
}
