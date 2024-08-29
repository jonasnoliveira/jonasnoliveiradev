import {FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4 mb-6">
        <a className="link link-hover" href={"#about"}>Sobre</a>
        <a className="link link-hover" href={"#technologies"}>Tecnologias</a>
        <a className="link link-hover" href={"#projects"}>Projetos</a>
        <a className="link link-hover" href={"#contactUs"}>Fale Conosco</a>
      </nav>
      <nav className="mb-6">
        <div className="grid grid-flow-col gap-4">
          <a href="tel:+5535999746431" className="text-lg hover:underline">
            <FaPhone className="text-2xl mr-4 text-primary"/>
          </a>
          <a href="mailto:jonasnoliveirabr@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-2xl mr-4 text-primary"/>
          </a>
          <a href="https://www.linkedin.com/in/jonas-n-oliveira" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl mr-4 text-primary"/>
          </a>
          <a href="https://github.com/jonasnoliveira" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl mr-4 text-primary"/>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Todos os direitos reservados por Jonas Oliveira</p>
      </aside>
    </footer>
  );
};

export default Footer;
