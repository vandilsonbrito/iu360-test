import { TrendingUp, Target, ChartBar, Trophy, BrainCircuit, Wallet } from "lucide-react"
export default function ProfitAndSaveMoney() {
  return (
    <div className="w-full container mx-auto" id="/beneficios">
        <div className=" mx-auto" >
            <div className="w-full flex flex-col lg:flex-row" >
                <div className="w-full lg:w-1/2 bg-blue-700 p-8 flex flex-col  justify-center items-center">
                    <h2 className="text-3xl font-bold mb-20 text-center text-white">
                        Como faturar mais com o Pesquisa Ativa?
                    </h2>
                    <div className="grid items-center gap-12">
                        {[
                        {
                            icon: ChartBar,
                            title: "Desenvolvimento de produtos lucrativos",
                            description:
                            "Identifique oportunidades de mercado e crie produtos que atendam às necessidades reais dos clientes.",
                        },
                        {
                            icon: Trophy,
                            title: "Superação da concorrência",
                            description:
                            "Obtenha insights estratégicos para se destacar no mercado e superar seus concorrentes.",
                        },
                        {
                            icon: BrainCircuit,
                            title: "Tomada de decisões inteligentes",
                            description: "Use dados concretos para tomar decisões mais assertivas e reduzir riscos.",
                        },
                        ].map((item, index) => (
                        <div key={index} className="flex items-start">
                            <item.icon className="w-8 h-8 text-white mr-4 flex-shrink-0" />
                            <div>
                            <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-200">{item.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="w-full max-h-[500px] lg:w-1/2 bg-gray-300 flex items-center justify-center">
                    <img
                        src="/images/analytics.png"
                        alt="Gráfico de crescimento"
                        className="max-w-full h-auto max-h-[500px] md:hidden lg:block"
                    />
                </div>
            </div>
            </div>
        <div className=" mx-auto ">
            <div className="w-full flex flex-col lg:flex-row-reverse pb-10" >
                <div className="w-full lg:w-1/2 bg-blue-700 p-8 flex flex-col  justify-center items-center">
                <h2 className="text-3xl font-bold mb-20 text-white">Como economizar com o Pesquisa Ativa?</h2>
                <div className="space-y-6">
                    {[
                    {
                        icon: Wallet,
                        title: "Evite investimentos desnecessários",
                        description:
                        "Identifique quais produtos ou serviços têm real potencial de mercado antes de investir.",
                    },
                    {
                        icon: Target,
                        title: "Otimize seu marketing",
                        description:
                        "Direcione seus esforços de marketing para o público certo, aumentando o retorno sobre o investimento.",
                    },
                    {
                        icon: TrendingUp,
                        title: "Reduza custos operacionais",
                        description: "Descubra ineficiências em seus processos e otimize suas operações com base em dados.",
                    },
                    ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <item.icon className="w-8 h-8 text-white mr-4 flex-shrink-0" />
                        <div>
                        <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-200">{item.description}</p>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                <div className="hidden w-full max-h-[500px] lg:w-1/2 bg-gray-300  lg:flex items-center justify-center">
                    <img
                        src="/images/analytics.png"
                        alt="Gráfico de crescimento"
                        className="max-w-full h-auto max-h-[500px]"
                    />
                </div>
            </div>
            </div>
        </div>
  )
}
