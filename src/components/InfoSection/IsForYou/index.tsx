import { Scale, Search, TrendingUp, Target } from "lucide-react"
export default function IsForYou() {
  return (
    <div className="w-full p-5 pb-0 md:p-10 mx-auto px-4 " id="/sobre">
        <h2 className="text-3xl font-bold mb-12 text-center">O Pesquisa Ativa é para você que...</h2>
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 mb-20">
            {[
            {
                icon: Scale,
                title: "Sente insegurança na tomada de decisões",
                description: "Nossos insights baseados em dados ajudam você a tomar decisões mais assertivas.",
            },
            {
                icon: Search,
                title: "Precisa identificar oportunidades de mercado",
                description: "Descubra nichos inexplorados e tendências emergentes no seu setor.",
            },
            {
                icon: TrendingUp,
                title: "Busca crescimento sustentável",
                description: "Desenvolva estratégias de longo prazo baseadas em dados concretos.",
            },
            {
                icon: Target,
                title: "Quer entender melhor seu público-alvo",
                description: "Obtenha insights profundos sobre as necessidades e desejos dos seus clientes.",
            },
            ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <item.icon className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
