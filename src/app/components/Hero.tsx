const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center" id="hero">
      <h1 className="text-5xl font-bold">Olá, eu sou Jonas Oliveira</h1>
      <p className="mt-4 text-xl">Desenvolvedor FullStack apaixonado por tecnologia e inovação.</p>
      <a href={"#about"} className="mt-8 btn btn-primary">Ver mais sobre mim</a>
    </section>
  );
};

export default Hero;
