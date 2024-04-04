import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"textarea"> {
	id: string;
	invalid?: boolean;
	maxLenghtCounter?: "none" | "remainder" | "comparative";
}

export default function InputTextareaBody({
	id,
	name = id,
	invalid = false,
	placeholder = "",
	value,
	onChange,
	rows = 4,
	onKeyDown,
	onFocus,
	onBlur,
	className,
	minLength,
	maxLength,
	maxLenghtCounter = "comparative",
	disabled = false,
	required,
}: Props) {
	let maxLenghtCounterText: string | undefined;

	if (maxLength) {
		if (maxLenghtCounter === "comparative") {
			maxLenghtCounterText = `${String(value).length}/${maxLength}`;
		} else if (maxLenghtCounter === "remainder") {
			maxLenghtCounterText = `${maxLength - String(value).length}`;
		}
	}

	return (
		<div
			data-disabled={disabled}
			className="data-disabled rounded-lg border border-zinc-400 pt-1 data-[disabled=true]:bg-custom-gray-08 group-data-[focus=true]/textarea:border-custom-blue-01"
		>
			<textarea
				id={id}
				name={name}
				rows={rows}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder={placeholder}
				minLength={minLength}
				maxLength={maxLength}
				data-invalid={invalid}
				disabled={disabled}
				spellCheck={false}
				className={twMerge(
					`w-full resize-none rounded-lg bg-transparent px-4 py-2 text-lg text-zinc-600 outline-none
                    transition-colors placeholder:text-lg placeholder:font-medium placeholder:text-zinc-500
                    disabled:text-zinc-500 data-[invalid=true]:border-red-400 data-[invalid=true]:focus:border-red-500`,
					className,
				)}
				required={required}
			/>
			{maxLenghtCounterText && (
				<span className="block px-4 pb-2 text-end text-zinc-500">
					{maxLenghtCounterText}
				</span>
			)}
		</div>
	);
}
