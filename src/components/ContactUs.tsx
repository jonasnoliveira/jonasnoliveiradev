'use client';

import {useForm} from 'react-hook-form';
import {FaEnvelope, FaUser, FaEdit, FaPhone} from 'react-icons/fa';

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs = () => {
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // Montar a mensagem para o WhatsApp
    const message = `Nome: ${data.name}\nNúmero: ${data.phoneNumber}\nE-mail: ${data.email}\nAssunto: ${data.subject}\nMensagem: ${data.message}`;
    
    // Codificar a mensagem para ser usada em uma URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp (incluindo o código do país)
    const whatsappNumber = '5535999746431'; // Inclui o código do Brasil 55
    
    // URL do WhatsApp com mensagem pré-preenchida
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Redirecionar o usuário para o WhatsApp
    window.open(whatsappURL, '_blank');
  };
  
  return (
    <section className="bg-base-100 py-10" id={"contactUs"}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Fale Conosco</h2>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 p-8 rounded-lg shadow-md max-w-lg w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Nome
              </label>
              <div className="flex items-center border rounded gap-2">
                <FaUser className="text-gray-500 ml-2"/>
                <input
                  id="name"
                  type="text"
                  {...register('name', {required: 'Nome é obrigatório'})}
                  className="flex-1 p-2 border-0 rounded-r"
                  placeholder="Seu nome"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">
                Número
              </label>
              <div className="flex items-center border rounded gap-2">
                <FaPhone className="text-gray-500 ml-2"/>
                <input
                  id="phoneNumber"
                  type="text"
                  {...register('phoneNumber', {required: 'Número é obrigatório'})}
                  className="flex-1 p-2 border-0 rounded-r"
                  placeholder="Seu número"
                />
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                E-mail
              </label>
              <div className="flex items-center border rounded gap-2">
                <FaEnvelope className="text-gray-500 ml-2"/>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'E-mail é obrigatório',
                    pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido'}
                  })}
                  className="flex-1 p-2 border-0 rounded-r"
                  placeholder="Seu e-mail"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="subject">
                Assunto
              </label>
              <div className="flex items-center border rounded gap-2">
                <FaEdit className="text-gray-500 ml-2"/>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', {required: 'Assunto é obrigatório'})}
                  className="flex-1 p-2 border-0 rounded-r"
                  placeholder="Assunto"
                />
              </div>
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                {...register('message', {required: 'Mensagem é obrigatória'})}
                className="w-full p-2 border rounded"
                placeholder="Sua mensagem"
                rows={4}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            
            <button type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 disabled:opacity-50">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
