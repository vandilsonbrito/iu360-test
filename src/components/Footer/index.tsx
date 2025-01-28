
export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 xl:px-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Pesquisa Ativa Negócios</h3>
            <p className="lg:pr-10">Transformando dados em insights para o sucesso do seu negócio.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacidade" className="hover:text-gray-300">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="hover:text-gray-300">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-gray-300">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p>contato@pesquisaativa.com</p>
            <p>(11) 1234-5678</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Pesquisa Ativa Negócios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

