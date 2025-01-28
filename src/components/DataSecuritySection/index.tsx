import { ShieldCheck } from "lucide-react"

export default function DataSecuritySection() {
  return (
    <section className="w-full py-20 bg-gradient-to-l from-gray-100 to-blue-100">
      <div className="container mx-auto px-4 text-center">
        <ShieldCheck className="mx-auto mb-6 text-black" size={48} />
        <h2 className="text-3xl font-bold mb-6 text-black">Segurança de Dados</h2>
        <p className="text-xl mb-4 text-black">Estamos em total conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
        <p className="text-black">
          Suas informações estão seguras conosco. Possuímos certificações de segurança que garantem a proteção e
          integridade dos seus dados.
        </p>
      </div>
    </section>
  )
}

