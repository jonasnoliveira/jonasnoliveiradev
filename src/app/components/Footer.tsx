import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-300 p-6 text-center" id="footer">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">© 2024 Jonas Oliveira. Todos os direitos reservados.</p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/jonas-n-oliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jonasnoliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:jonasnoliveira@example.com"
            className="mx-2 hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
