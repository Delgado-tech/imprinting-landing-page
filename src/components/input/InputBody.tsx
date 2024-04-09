import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"input"> {
	id: string;
	invalid?: boolean;
}

export default function InputBody({
	id,
	name = id,
	invalid = false,
	type,
	placeholder = "",
	value,
	disabled,
	onChange,
	onKeyDown,
	onFocus,
	onBlur,
	onClick,
	className,
	minLength,
	readOnly,
	required,
}: Props) {
	return (
		<input
			id={id}
			name={name}
			type={type}
			value={value}
			placeholder={placeholder}
			minLength={minLength}
			onChange={onChange}
			onKeyDown={onKeyDown}
			onFocus={onFocus}
			onBlur={onBlur}
			onClick={onClick}
			data-invalid={invalid}
			spellCheck={false}
			autoComplete={"off"}
			disabled={disabled}
			readOnly={readOnly}
			className={twMerge(
				`w-full rounded-lg border border-zinc-400 bg-transparent px-4 py-3 text-lg text-zinc-600 outline-none 
				transition-colors placeholder:font-medium placeholder:text-zinc-500 focus:border-custom-blue-01
				disabled:bg-custom-gray-08 disabled:text-zinc-500 data-[invalid=true]:border-red-400
				data-[invalid=true]:focus:border-red-500 max-sm:text-base`,
				className,
			)}
			required={required}
		/>
	);
}
