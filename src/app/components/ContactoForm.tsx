import { useState, useRef } from "react"; // Importamos useRef
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser'; // Importamos la librería

export function ContactoForm() {
  const form = useRef<HTMLFormElement>(null); // Referencia al formulario
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // Estado para manejar errores

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!form.current) return;

    // ENVÍO REAL CON EMAILJS
    emailjs.sendForm(
      'service_7ajb2tg',    // Pega tu Service ID aquí
      'template_z44dtjb',   // Pega tu Template ID aquí
      form.current,
      'mKEhli2BPAcx8MsP0'     // Pega tu Public Key aquí
    )
    .then((result) => {
        // Éxito
        setIsLoading(false);
        setIsSubmitted(true);

        // Resetear formulario después de 5 segundos
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
        }, 5000);
    }, (error) => {
        // Error
        setIsLoading(false);
        setError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        console.log(error.text);
    });
  };

  return (
    <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Formulario de Contacto
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          <p className="mt-4 text-slate-600">
            ¿Tienes alguna pregunta o comentario? ¡Envíame un mensaje!
          </p>
        </div>

        {!isSubmitted ? (
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg shadow-xl p-8 border border-slate-200">
            {/* Agregamos la referencia ref={form} al formulario */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <User className="w-4 h-4 text-cyan-600" />
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre" // IMPORTANTE: Este name debe coincidir con tu template de EmailJS
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Mail className="w-4 h-4 text-cyan-600" />
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <MessageSquare className="w-4 h-4 text-cyan-600" />
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <MessageSquare className="w-4 h-4 text-cyan-600" />
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-xl p-8 border-2 border-green-200 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-900 mb-3">
              ¡Mensaje enviado con éxito!
            </h3>
            <div className="bg-white rounded-lg p-6 mt-6 shadow-inner">
              <p className="text-slate-700 mb-4">
                <strong>Respuesta automática:</strong>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Hola <strong>{formData.nombre}</strong>, gracias por contactarme. 
                He recibido tu mensaje sobre "<em>{formData.asunto}</em>" y te responderé 
                a la brevedad en la dirección <strong>{formData.email}</strong>.
              </p>
              <p className="text-sm text-slate-500 mt-4">
                Tiempo estimado de respuesta: 24-48 horas
              </p>
            </div>
            <p className="text-sm text-slate-600 mt-4">
              Este mensaje se cerrará automáticamente en unos segundos...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}