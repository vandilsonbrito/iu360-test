import { useState } from "react";
import useMedia from "use-media";
import { Menu, X } from 'lucide-react';


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMedia({maxWidth: '767px'});

    return (
        <header className="w-full bg-blue-700 fixed top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/">
            <img src="/images/logo.png" alt="Logo Pesquisa Ativa Negócios" width={150} height={50} />
            </a>
            {
                !isMobile && (
                    <nav>
                        <ul className="flex space-x-8 xl:space-x-16">
                            <li>
                            <a href="#sobre" className="p-2 rounded-lg text-white hover:text-black hover:bg-white transition-colors duration-300 ease-linear">
                                Sobre
                            </a>
                            </li>
                            <li>
                            <a href="#beneficios" className="p-2 rounded-lg text-white hover:text-black hover:bg-white transition-colors duration-300 ease-linear">
                                Benefícios
                            </a>
                            </li>
                            <li>
                            <a href="#solucoes" className="p-2 rounded-lg text-white hover:text-black hover:bg-white transition-colors duration-300 ease-linear">
                                Soluções
                            </a>
                            </li>
                            <li>
                            <a href="#contato" className="p-2 rounded-lg text-white hover:text-black hover:bg-white transition-colors duration-300 ease-linear">
                                Contato
                            </a>
                            </li>
                        </ul>
                    </nav>
                )
            }

            {isMobile && (
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-20 p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
                {isOpen ? (
                <X size={28} className="text-white" />
                ) : (
                <Menu size={28} className="text-white" />
                )}
            </button>
            )}
        </div>


        {isMobile && (
            <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                isOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
            />
        )}


        <div
            className={`fixed top-0 right-0 h-full w-72 bg-blue-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-10 ${
            isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
            <a
                href="/auth/login"
                className="w-full"
                onClick={() => setIsOpen(false)}
            >
                <button className="w-full px-6 py-3 text-[1.05rem] rounded-full transition-all duration-300 hover:bg-buttonBgColor/90 hover:shadow-lg text-white">
                Sobre
                </button>
            </a>
            <a
                href="/auth/register"
                className="w-full"
                onClick={() => setIsOpen(false)}
            >
                <button className="w-full px-6 py-3 text-[1.05rem] bg-buttonBgColor rounded-full transition-all duration-300 hover:bg-buttonBgColor/90 hover:shadow-lg text-white">
                Benefícios
                </button>
            </a>
            <a
                href="/auth/register"
                className="w-full"
                onClick={() => setIsOpen(false)}
            >
                <button className="w-full px-6 py-3 text-[1.05rem] bg-buttonBgColor rounded-full transition-all duration-300 hover:bg-buttonBgColor/90 hover:shadow-lg text-white">
                Soluções
                </button>
            </a>
            <a
                href="/auth/register"
                className="w-full"
                onClick={() => setIsOpen(false)}
            >
                <button className="w-full px-6 py-3 text-[1.05rem] bg-buttonBgColor rounded-full transition-all duration-300 hover:bg-buttonBgColor/90 hover:shadow-lg text-white">
                Contato
                </button>
            </a>
            
            </div>
        </div>
        </header>
    )
}

