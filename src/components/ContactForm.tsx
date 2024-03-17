import React from "react";
import { RegexTemplate } from "../utils/regex";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import TextareaField from "./TextareaField";
import ButtonType from "./button/ButtonType";

export default function ContactForm() {
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		for (const [key, value] of formData) {
			console.log(`${key}: ${value}`);
		}
	};

	return (
		<form
			onSubmit={onSubmit}
			className="flex w-full max-w-[600px] flex-col gap-8 rounded-3xl bg-custom-gray-10 px-8 py-11 max-sm:px-3"
		>
			<h1 className="mx-3 font-poppins text-5xl text-white max-xl:text-3xl max-sm:text-2xl">
				Contato
			</h1>

			<SelectInput
				id={"sender"}
				label={"Interessado"}
				labelColor={"bg-custom-gray-10"}
				options={["Paciente", "Médico", "Investidor", "Pesquisador"]}
			/>

			<div className="flex flex-col gap-8">
				<InputField
					id={"name"}
					label={"Nome"}
					labelColor={"bg-custom-gray-10"}
					required
				/>
				<InputField
					id={"email"}
					label={"E-mail"}
					type={"email"}
					labelColor={"bg-custom-gray-10"}
					required
				/>
				<InputField
					id={"cel"}
					label={"Celular"}
					labelColor={"bg-custom-gray-10"}
					regexFC={RegexTemplate.Cel}
					required
				/>
				<TextareaField
					id={"message"}
					label={"Mensagem"}
					labelColor={"bg-custom-gray-10"}
					maxLength={256}
					required
				/>
			</div>

			<div className="flex justify-center">
				<ButtonType
					content={"Enviar"}
					type={"submit"}
					className="bg-custom-pink text-white"
				/>
			</div>
		</form>
	);
}
