import logo from '../../assets/logo.svg'

export default function NavBar(){
    return(
        <section className='bg-gradient-to-bl from-custom-blue-02 via-custom-magenta to-custom-beige-02 to-75% top-0 z-[20] mx-auto '>
            <nav className="bg-custom-gray-09 bg-opacity-45 p-8 max-w7x1 mx-auto px-4 sm:px-6 lg:px-8 flex justify-around flex-wrap">
                <div className='flex mt-3'>
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2 white" />
                    <span className="text-white text-lg font-semibold">Imprinting</span>
                </div>

                <div className='flex mt-3' >
                    <a href="#" className="text-white text-lg hover:text-gray-300 mx-3">
                        Home
                    </a>
                    <a href="#" className="text-white text-lg hover:text-gray-300 mx-3">
                        Mentores
                    </a>
                    <a href="#" className="text-white text-lg hover:text-gray-300 mx-3">
                        Sobre
                    </a>
                    <a href="#" className="text-white text-lg hover:text-gray-300 mx-3">
                        Contato
                    </a>
                </div>
                
            </nav>
        </section>
    )
}