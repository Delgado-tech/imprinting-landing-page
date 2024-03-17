import React, { useState } from "react";
import { RegexTemplate } from "../../utils/regex";
import InputField from "../InputField";
import SelectInput from "../SelectInput";
import TextareaField from "../TextareaField";
import ButtonType from "../button/ButtonType";

export default function FormContact() {
	const [radio, setRadio] = useState("");
	const [nome, setName] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [mensagem, setMensagem] = useState("");

	const setDados = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(radio);
		console.log(nome);
		console.log(email);
		console.log(telefone);
		console.log(mensagem);
	};

	return (
		<section className="max-xl: h-full bg-custom-black py-64">
			<div className="relative z-20 flex items-center justify-center gap-20 px-32 max-xl:flex-col-reverse max-sm:px-6 max-xs:px-2 xl:-top-[96px]">
				<form
					onSubmit={setDados}
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
						<InputField id={"name"} label={"Nome"} labelColor={"bg-custom-gray-10"} />
						<InputField
							id={"email"}
							label={"E-mail"}
							type={"email"}
							labelColor={"bg-custom-gray-10"}
						/>
						<InputField
							id={"phone"}
							label={"Celular"}
							labelColor={"bg-custom-gray-10"}
							regexFC={RegexTemplate.Cel}
						/>
						<TextareaField
							id={"message"}
							label={"Mensagem"}
							labelColor={"bg-custom-gray-10"}
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

				<div className="flex flex-col gap-8 text-center text-2xl text-custom-gray-04 max-sm:text-xl xl:max-w-[400px]">
					<h2 className="text-3xl font-semibold text-custom-gray-01 max-sm:text-2xl">
						Venha fazer parte dessa comunidade global!
					</h2>
					<p>
						Para mais informações ou para estabelecer uma parceria conosco, entre em
						contato preenchendo o formulário abaixo
					</p>
					<p>
						Estamos ansiosos para colaborar com pacientes em busca de cuidados
						avançados, médicos interessados em colaborar conosco, investidores que
						desejam apoiar nossa missão e pesquisadores interessados em nossos
						estudos. Aguardamos o seu contato!
					</p>
				</div>
			</div>
		</section>
	);
}
