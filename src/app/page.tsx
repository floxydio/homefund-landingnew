import Feature from "@/Components/FeatureSection/Feature";
import Header from "@/Components/HeaderSection/Header.section";
import Footer from "@/Components/FooterSection/FooterSection";
import Simulasi from "@/Components/SimulasiSection/Simulasi.section";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


export default function Home() {
  return (
    <div className="">
      <Header />
      <Feature />
      <Footer />
      <TawkMessengerReact />
    </div>
  )
}