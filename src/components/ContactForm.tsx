import emailjs from "@emailjs/browser";
import dFormat from "dateformat";
import { Loader2Icon, MailCheckIcon } from "lucide-react";
import React, { useState } from "react";
import { RegexTemplate } from "../utils/regex";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import TextareaField from "./TextareaField";
import ButtonType from "./button/ButtonType";
import "../controllers/LocalStorageController"
import LocalStorageControllers from "../controllers/LocalStorageController";

export default function ContactForm() {
	const [isSended, setIsSended] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (LocalStorageControllers.checkTime()) {
			if (isLoading) return;


			setIsLoading(true);
			const send_datetime = dFormat(new Date(), "dd/mm/yyyy HH:MM:ss");

			const form = event.target as HTMLFormElement;
			const formData = new FormData(form);
			const formDataEntries = Object.fromEntries(formData);
			const data = { ...formDataEntries, send_datetime };

			emailjs
				.send(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					data,
					{
						publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
					},
				)
				.then(() => {
					setIsLoading(false);
					setIsSended(true);
				})
				.catch(() => {
					alert(
						"Houve um problema ao tentar enviar o formulário, tente novamente mais tarde!",
					);
				});
		} else {
			alert(`Ainda não é possível enviar um novo e-mail, tempo restante: ${LocalStorageControllers.time()} minutos`);
		}
	};

	return (
		<form
			onSubmit={onSubmit}
			className="flex w-full max-w-[600px] flex-col gap-8 rounded-3xl bg-custom-gray-09 px-8 py-11 max-sm:px-3"
		>
			<h1 className="mx-3 font-poppins text-5xl text-white max-xl:text-3xl max-sm:text-2xl">
				Contato
			</h1>

			<SelectInput
				id={"interested_type"}
				label={"Interessado"}
				labelColor={"bg-custom-gray-08"}
				disabled={isSended}
				options={["Paciente", "Médico", "Investidor", "Pesquisador"]}
			/>

			<div className="flex flex-col gap-8">
				<InputField
					id={"name"}
					label={"Nome"}
					labelColor={"bg-custom-gray-08"}
					disabled={isSended}
					required
				/>
				<InputField
					id={"email"}
					label={"E-mail"}
					type={"email"}
					labelColor={"bg-custom-gray-08"}
					disabled={isSended}
					required
				/>
				<InputField
					id={"cel"}
					label={"Celular"}
					labelColor={"bg-custom-gray-08"}
					regexFC={RegexTemplate.Cel}
					disabled={isSended}
					required
				/>
				<TextareaField
					id={"message"}
					label={"Mensagem"}
					labelColor={"bg-custom-gray-08"}
					maxLength={256}
					disabled={isSended}
					required
				/>
			</div>

			<div className="flex justify-center">
				{!isSended ? (
					<ButtonType
						type={"submit"}
						disabled={isLoading}
						className="bg-custom-pink text-white"
					>
						{isLoading ? <Loader2Icon className="animate-spin" /> : "Enviar"}
					</ButtonType>
				) : (
					<p className="flex items-center gap-2 text-2xl text-emerald-500">
						<MailCheckIcon className="translate-y-[2px]" />
						Dados enviados com sucesso!
					</p>
				)}
			</div>
		</form>
	);
}
