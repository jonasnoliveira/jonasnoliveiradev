import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-base-200 py-10">
      <div className="container max-w-6xl px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-8">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <FaEnvelope className="text-2xl mr-4 text-primary" />
            <a href="mailto:jonasnoliveirabr@gmail.com" className="text-lg hover:underline">
              jonasnoliveirabr@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-2xl mr-4 text-primary" />
            <a href="tel:+5535999746431" className="text-lg hover:underline">
              35 99974-6431
            </a>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="text-2xl mr-4 text-primary" />
            <a
              href="https://www.linkedin.com/in/jonas-n-oliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center">
            <FaGithub className="text-2xl mr-4 text-primary" />
            <a
              href="https://github.com/jonasnoliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
