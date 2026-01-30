import { Shield, Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Información del portafolio */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h3 className="font-bold text-lg">Portafolio Digital</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Documentación académica del curso CNO V – Seguridad Informática. 
              Universidad Politecnica de San Luis Potosi, Semestre 2026-1.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#presentacion" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Presentación
                </a>
              </li>
              <li>
                <a href="#perfil" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Perfil del Estudiante
                </a>
              </li>
              <li>
                <a href="#info-tecnica" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Información Técnica
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h3 className="font-bold text-lg mb-4">Conéctate</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/AlemonCPP?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emiliano-lopez-90b34b374/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="emilianolopez681@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              emilianolopez681@gmail.com
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Emiliano Lopez Aleman. Todos los derechos reservados.
            </p>
           
          </div>
          <div className="text-center mt-4 text-xs text-slate-500">
            <p>
              Este portafolio es un proyecto académico creado con fines educativos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
