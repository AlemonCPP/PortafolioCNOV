import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo y datos del estudiante */}
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-cyan-400" />
            <div>
              <h1 className="font-bold text-lg sm:text-xl">
               Emiliano Lopez Aleman <span className="text-cyan-400">(@AlemonCPP)</span>
              </h1>
              <p className="text-sm text-slate-300">CNO V – Seguridad Informática</p>
              <p className="text-xs text-slate-400">Universidad Politecnica de San Luis Potosi | Semestre 2026-1</p>
            </div>
          </div>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navegación desktop */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              <li>
                <button
                  onClick={() => scrollToSection("presentacion")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Presentación
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("perfil")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Perfil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("info-tecnica")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Info Técnica
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("trabajos")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Trabajos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Navegación móvil */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-slate-700 pt-4">
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => scrollToSection("presentacion")}
                  className="block w-full text-left py-2 px-4 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Presentación
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("perfil")}
                  className="block w-full text-left py-2 px-4 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Perfil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("info-tecnica")}
                  className="block w-full text-left py-2 px-4 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Info Técnica
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("trabajos")}
                  className="block w-full text-left py-2 px-4 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Trabajos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block w-full text-left py-2 px-4 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}