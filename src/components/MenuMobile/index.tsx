import { Link } from "react-scroll";

interface MenuMobileProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    headerHeight: number
}
export default function MenuMobile({ isOpen, setIsOpen, headerHeight }: MenuMobileProps) {
  return (
    <div
            className={`fixed top-0 right-0 h-full w-72 bg-blue-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
            <Link
                to="/sobre"
                href="#sobre"
                smooth={true}
                duration={1000}
                offset={-headerHeight}
                className="w-full"
                onClick={() => setIsOpen(false)}
            >
                <button className="w-full px-6 py-3 text-[1.05rem] rounded-full transition-all duration-300 hover:bg-buttonBgColor/90 hover:shadow-lg text-white">
                Sobre
                </button>
            </Link>
            <Link
                to="/beneficios"
                href="#beneficios"
                smooth={true}
                duration={1000}
                offset={-headerHeight}
                className="w-full"
                onClick={() => setIsOpen(false)}
            >
                <button className="w-full px-6 py-3 text-[1.05rem] bg-buttonBgColor rounded-full transition-all duration-300 hover:bg-buttonBgColor/90 hover:shadow-lg text-white">
                Benefícios
                </button>
            </Link>
            <Link
                to="/solucoes"
                href="#solucoes"
                smooth={true}
                duration={1000}
                offset={-headerHeight}
                className="w-full"
                onClick={() => setIsOpen(false)}
            >
                <button className="w-full px-6 py-3 text-[1.05rem] bg-buttonBgColor rounded-full transition-all duration-300 hover:bg-buttonBgColor/90 hover:shadow-lg text-white">
                Soluções
                </button>
            </Link>
            <Link
                to="/contato"
                href="#contato"
                smooth={true}
                duration={1000}
                offset={-headerHeight}
                className="w-full"
                onClick={() => setIsOpen(false)}
            >
                <button className="w-full px-6 py-3 text-[1.05rem] bg-buttonBgColor rounded-full transition-all duration-300 hover:bg-buttonBgColor/90 hover:shadow-lg text-white">
                Contato
                </button>
            </Link>
            
            </div>
        </div>
  )
}
