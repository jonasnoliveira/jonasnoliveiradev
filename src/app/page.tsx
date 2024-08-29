import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Technologies from "@/components/Technologies";
import ContactUs from "@/components/ContactUs";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Jonas Oliveira - Desenvolvedor FullStack</title>
        <meta name="description" content="Portfólio de Jonas Oliveira"/>
      </Head>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Technologies/>
        <FloatingWhatsAppButton />
        <ContactUs/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;