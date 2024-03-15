import React, { useState } from 'react'
import ButtonType from '../button/ButtonType';

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
        <section className='bg-custom-black h-full'>
            <div className='max-xl:flex-wrap  flex gap-20 px-32 relative z-20 -top-[96px] items-center justify-center max-sm:px-20' >

                <form onSubmit={setDados} className='flex flex-col gap-8 bg-custom-gray-10 px-8 py-11 rounded-3xl max-sm:px-3'>

                    <h1 className='text-[48px] text-white font-poppins max-sm:text-[40px] max-sm: mx-3'>Contato</h1>

                    <div className="flex justify-between w-screen max-w-[600px] text-custom-gray-02 min-w-96 max-xl:max-w-xl max-md:max-w-lg max-sm:max-w-[320px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-6 ">
                        <div>
                            <input type="radio" name='option' className='peer hidden' id='paciente' value="Paciente" defaultChecked onChange={(e) => { setRadio(e.target.value) }} />
                            <label htmlFor="paciente" className='flex items-center justify-center font-semibold font-poppins cursor-pointer border-2 border-custom-gray-02 select-none rounded-xl w-[120px] h-[60px] peer-checked:text-custom-black peer-checked:bg-custom-gray-02 max-xl:max-w-28 max-md:max-w-24 max-sm:max-w-[300px]'>
                                Paciente
                            </label>
                        </div>
                        <div>
                            <input type="radio" name='option' className='peer hidden' id='medico' value="Médico" onChange={(e) => { setRadio(e.target.value) }} />
                            <label htmlFor="medico" className='flex items-center justify-center font-semibold font-poppins cursor-pointer border-2 border-custom-gray-02 select-none rounded-xl w-[120px] h-[60px] peer-checked:text-custom-black peer-checked:bg-custom-gray-02 max-xl:max-w-30 max-md:max-w-24 max-sm:max-w-[300px]'>
                                Médico
                            </label>
                        </div>
                        <div>
                            <input type="radio" name='option' className='peer hidden' id='investidor' value="Investidor" onChange={(e) => { setRadio(e.target.value) }} />
                            <label htmlFor="investidor" className='flex items-center justify-center font-semibold font-poppins cursor-pointer border-2 border-custom-gray-02 select-none rounded-xl w-[120px] h-[60px] peer-checked:text-custom-black peer-checked:bg-custom-gray-02 max-xl:max-w-28 max-md:max-w-28 max-sm:max-w-[300px]'>
                                Investidor
                            </label>
                        </div>
                        <div>
                            <input type="radio" name='option' className='peer hidden' id='pesquisador' value="Pesquisador" onChange={(e) => { setRadio(e.target.value) }} />
                            <label htmlFor="pesquisador" className='flex items-center justify-center font-semibold font-poppins cursor-pointer border-2 border-custom-gray-02 select-none rounded-xl w-[150px] h-[60px] peer-checked:text-custom-black peer-checked:bg-custom-gray-02 max-xl:max-w-36 max-md:max-w-30 max-sm:max-w-[300px]'>
                                Pesquisador
                            </label>
                        </div>
                    </div>

                    <div className='flex flex-col item gap-8 max-w-[600px max-sm: mx-3'>
                        <div>
                            <input className='w-full rounded-[20px] bg-transparent border-2 border-custom-gray-02 p-4 font-poppins text-custom-gray-02' type="text" name="name" placeholder="Nome" autoComplete='given-name' required onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div>
                            <input className='w-full rounded-[20px] bg-transparent border-2 border-custom-gray-02 p-4 font-poppins text-custom-gray-02' type="email" name="name" placeholder="email" autoComplete='email' required onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div>
                            <input className='w-full rounded-[20px] bg-transparent border-2 border-custom-gray-02 p-4 font-poppins text-custom-gray-02' type="tel" name="name" placeholder="Telefone" autoComplete='tel-national' required onChange={(e) => { setTelefone(e.target.value) }} />
                        </div>
                        <div>
                            <textarea className='w-full h-[240px] rounded-[20px] bg-transparent border-2 border-custom-gray-02 p-4 font-poppins text-custom-gray-02' name="mensagem" placeholder="Mensagem" onChange={(e) => { setMensagem(e.target.value) }}></textarea>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <ButtonType content='Enviar' type='submit' className='text-white bg-custom-pink' />
                    </div>

                </form>

                <div className='max-w-[500px] max-sm:max-w-[300px]'>
                    <h2 className='text-custom-gray-01 text-[32px] text-center font-semibold max-sm:text-[28px]'>Venha fazer parte dessa comunidade global.</h2>
                    <p className='text-custom-gray-06 text-[24px] text-center mt-8 max-sm:text-[22px]'>Para realizar pesquisas de ponta, nos juntamos a instituições de saúde, ensino e laboratórios de pesquisa em nível internacional, fique por dentro de tudo que está acontecendo!</p>
                </div>
            </div>
        </section>
    )
}