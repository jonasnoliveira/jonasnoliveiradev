'use client';

import { useForm } from 'react-hook-form';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaUser, FaPhone, FaEdit, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs = () => {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const text = `*Nome:* ${data.name}%0A*Telefone:* ${data.phone}%0A*Email:* ${data.email}%0A*Assunto:* ${data.subject}%0A*Mensagem:* ${data.message}`;
    const whatsappUrl = `https://wa.me/5535999052204?text=${text}`;
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <section id="contactUs" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent inline-block">
            {t.contact.title}
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary">{t.contact.title}</h3>

              <div className="space-y-6">
                <a href="https://wa.me/5535999052204" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <span>+55 (35) 99905-2204</span>
                </a>

                <a href="mailto:jonas.oliveira.dev@gmail.com" className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <span>jonas.oliveira.dev@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 text-lg group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <span>{t.contact.locationValue}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">{t.contact.form.name}</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content/40" />
                    <input
                      type="text"
                      placeholder={t.contact.form.namePlaceholder}
                      className={`input input-bordered w-full pl-10 bg-base-100/50 focus:bg-base-100 focus:border-primary transition-all ${errors.name ? 'input-error' : ''}`}
                      {...register("name", { required: t.contact.errors.nameRequired })}
                    />
                  </div>
                  {errors.name && <span className="text-error text-sm mt-1">{errors.name.message}</span>}
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold">{t.contact.form.phone}</span>
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content/40" />
                    <input
                      type="tel"
                      placeholder={t.contact.form.phonePlaceholder}
                      className={`input input-bordered w-full pl-10 bg-base-100/50 focus:bg-base-100 focus:border-primary transition-all ${errors.phone ? 'input-error' : ''}`}
                      {...register("phone", { required: t.contact.errors.phoneRequired })}
                    />
                  </div>
                  {errors.phone && <span className="text-error text-sm mt-1">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">{t.contact.form.email}</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content/40" />
                  <input
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    className={`input input-bordered w-full pl-10 bg-base-100/50 focus:bg-base-100 focus:border-primary transition-all ${errors.email ? 'input-error' : ''}`}
                    {...register("email", {
                      required: t.contact.errors.emailRequired,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t.contact.errors.emailInvalid
                      }
                    })}
                  />
                </div>
                {errors.email && <span className="text-error text-sm mt-1">{errors.email.message}</span>}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">{t.contact.form.subject}</span>
                </label>
                <div className="relative">
                  <FaEdit className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content/40" />
                  <input
                    type="text"
                    placeholder={t.contact.form.subjectPlaceholder}
                    className={`input input-bordered w-full pl-10 bg-base-100/50 focus:bg-base-100 focus:border-primary transition-all ${errors.subject ? 'input-error' : ''}`}
                    {...register("subject", { required: t.contact.errors.subjectRequired })}
                  />
                </div>
                {errors.subject && <span className="text-error text-sm mt-1">{errors.subject.message}</span>}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">{t.contact.form.message}</span>
                </label>
                <textarea
                  placeholder={t.contact.form.messagePlaceholder}
                  className={`textarea textarea-bordered h-32 w-full bg-base-100/50 focus:bg-base-100 focus:border-primary transition-all ${errors.message ? 'textarea-error' : ''}`}
                  {...register("message", { required: t.contact.errors.messageRequired })}
                ></textarea>
                {errors.message && <span className="text-error text-sm mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full rounded-full text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all font-bold group"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <>
                    {t.contact.form.send} <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}

              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
