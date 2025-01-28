export default function ReasonsToKnowBetter() {
  return (
    <div className="container w-full mx-auto my-10 px-5 md:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">
            5 razões para você conhecer melhor o Pesquisa Ativa!
        </h2>
        <div className="w-full flex flex-col xl:px-72 justify-center gap-5">
        {[
            { title: "Explore oportunidades de mercado inexploradas" },
            { title: "Tome decisões baseadas em dados concretos" },
            { title: "Desenvolva produtos alinhados às necessidades do mercado" },
            { title: "Otimize seus investimentos em marketing" },
            { title: "Supere a concorrência com estratégias fundamentadas" },
        ].map((item, index) => (
            <div key={index} className="w-[300px] bg-white p-6 border rounded-lg shadow-md flex flex-col text-left">
            <h3 className="text-xl font-semibold">
                <span className="text-blue-600 mr-2">0{index + 1}</span>
                {item.title}
            </h3>
            </div>
        ))}
        </div>
    </div>
  )
}




