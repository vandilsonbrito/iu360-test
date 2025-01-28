import IsForYou from "./IsForYou"
import ProfitAndSaveMoney from "./ProfitAndSaveMoney"
import ReasonsToKnowBetter from "./ReasonsToKnowBetter"

export default function InfoSection() {
  return (
    <section className="w-full md:pb-20 mx-auto">
        <IsForYou />
        <ProfitAndSaveMoney />
        <ReasonsToKnowBetter /> 
    </section>
  )
}

