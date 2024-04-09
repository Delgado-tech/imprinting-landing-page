"use client";

import { ComponentProps, useState } from "react";
import { RegexFunctionType } from "../utils/regex";
import Input from "./input";

interface Props extends ComponentProps<"textarea"> {
	id: string;
	name?: string;
	label?: string;
	labelColor?: string;
	defaultValue?: string;
	regexFC?: RegexFunctionType;
	invalid?: boolean;
}

export default function TextareaField({
	id,
	name = id,
	label = id,
	labelColor,
	defaultValue = "",
	regexFC = (value: string) => value,
	minLength,
	maxLength,
	rows,
	placeholder,
	invalid = false,
	disabled = false,
	required = false,
}: Props) {
	const [input, setInput] = useState<string>(defaultValue);
	const [focus, setFocus] = useState<boolean>(false);

	return (
		<section data-focus={focus} className="group/textarea">
			<Input.Root>
				{!placeholder && (
					<Input.LabelToTop
						ltToggle={input.length > 0}
						label={label}
						isFocus={focus}
						htmlFor={id}
						invalid={invalid}
						labelColor={labelColor}
					/>
				)}

				<Input.TextareaBody
					id={id}
					name={name}
					className="dark-overflow-auto text-white"
					placeholder={placeholder}
					onChange={(e) => setInput(regexFC(e.target.value))}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					value={input}
					rows={rows}
					minLength={minLength}
					maxLength={maxLength}
					invalid={invalid}
					disabled={disabled}
					required={required}
				/>
			</Input.Root>
		</section>
	);
}
