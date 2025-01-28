const solutions = [
    { title: "Pesquisa de Aceitação", description: "Avalie o potencial de sucesso de novos produtos ou serviços." },
    { title: "Pesquisa de Público Alvo", description: "Identifique e compreenda melhor seu público-alvo ideal." },
    { title: "Pesquisa de Marketing", description: "Otimize suas estratégias de marketing com dados precisos." },
    { title: "Análise de Fornecedores", description: "Mapeamento de qualidade dos fornecedores, trazendo para o seu negócio o melhor para tomadas de decisão." },
    { title: "Inteligência de mercado", description: "Estudo com levantamento de novas tendencias de mercado, obtendo ideias para que o seu negócio seja mais competitivo." }
  ]
  
  export default function SolutionsSection() {
    return (
      <section id="/solucoes" className="w-full p-5 md:p-20 bg-blue-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Nossas Soluções</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="w-full max-w-sm flex flex-col  bg-gradient-to-r from-gray-100 to-blue-50 text-black p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="mb-6">{solution.description}</p>
                <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 hover:font-bold hover:shadow-xl duration-300 transition-colors ">
                  Falar com Consultor
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  