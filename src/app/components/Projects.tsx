import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-base-200 flex flex-col justify-center text-center">
      <h2 className="text-3xl font-bold">Projetos</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure><Image src="/link-para-sua-imagem" width={250} height={250} alt="Projeto 1" /></figure>
          <div className="card-body">
            <h3 className="card-title">Projeto 1</h3>
            <p>Descrição breve do projeto.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
