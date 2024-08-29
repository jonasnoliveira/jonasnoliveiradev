import Head from "next/head";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import Technologies from "@/app/components/Technologies";
import ContactUs from "@/app/components/ContactUs";

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
        <Projects/>
        <Contact/>
        <ContactUs/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;