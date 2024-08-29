import Head from "next/head";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Jonas Oliveira - Desenvolvedor FullStack</title>
        <meta name="description" content="Portfólio de Jonas Oliveira" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;