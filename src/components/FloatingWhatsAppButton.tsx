import {FaWhatsapp} from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5535999746431"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={24}/>
    </a>
  );
};

export default FloatingWhatsAppButton;
