import ContactSection from "./components/ContactSection"
import DataSecuritySection from "./components/DataSecuritySection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import InfoSection from "./components/InfoSection"
import SolutionsSection from "./components/SolutionSection"

function App() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <InfoSection />
      <SolutionsSection />
      <DataSecuritySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
export default App
