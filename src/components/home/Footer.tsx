import Logo from "../Logo";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (

        <footer className="bg-custom-black px-32 pb-8 -mt-1 flex flex-col gap-8 max-sm:px-10 max-lg:items-center min-[1550px]:items-center">

            <span className="flex items-center justify-start gap-4 max-md:justify-center">
                <Logo color="white" className="size-14 max-sm:size-12" />
                <p className="font-poppins text-2xl text-white max-sm:text-lg">© 2023 Imprinting</p>
            </span>

            <p className="font-poppins text-2xl text-white max-sm:text-lg">Telefone: +55 (51) 985466852</p>
            <p className="font-poppins text-2xl text-white max-sm:text-lg">contact@institutoimprinting.com.br</p>

            <div className="flex gap-6 max-md:justify-center">
                <FaInstagram className="size-14 text-white max-md:size-10" />
                <FaLinkedin className="size-14 text-white max-md:size-10" />
                <FaYoutube className="size-14 text-white max-md:size-10" />
            </div>

        </footer>
    )
}
