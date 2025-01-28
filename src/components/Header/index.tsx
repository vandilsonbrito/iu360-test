import { useState } from "react";
import useMedia from "use-media";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import MenuMobile from "../MenuMobile";


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMedia({maxWidth: '767px'});
    const headerHeight = 100;

    return (
        <header className="w-full bg-blue-700 fixed top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link 
                to="/" 
                href="/"
                smooth={true}
                duration={1000}
                >
                <img src="/images/logo.png" alt="Logo Pesquisa Ativa Negócios" width={150} height={50} />
            </Link>
            {
                !isMobile && (
                    <nav>
                        <ul className="flex space-x-8 xl:space-x-16">
                            <li>
                                <Link 
                                    to="/sobre" 
                                    href="#sobre"
                                    smooth={true} 
                                    duration={1000}
                                    offset={-headerHeight}
                                    className="p-2 rounded-lg text-white hover:text-black hover:bg-white transition-colors duration-300 ease-linear">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/beneficios" 
                                    href="#beneficios" 
                                    smooth={true} 
                                    duration={1000}
                                    offset={-headerHeight}
                                    className="p-2 rounded-lg text-white hover:text-black hover:bg-white transition-colors duration-300 ease-linear">
                                    Benefícios
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/solucoes"
                                    href="#solucoes" 
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                    className="p-2 rounded-lg text-white hover:text-black hover:bg-white transition-colors duration-300 ease-linear">
                                    Soluções
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#contato" 
                                    to="/contato" 
                                    smooth={true}
                                    duration={1000}
                                    offset={-headerHeight}
                                    className="p-2 rounded-lg text-white hover:text-black hover:bg-white transition-colors duration-300 ease-linear">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )
            }

            {isMobile && (
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-50 p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
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
                    isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            />
        )}

        <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} headerHeight={headerHeight} />
        
        </header>
    )
}

