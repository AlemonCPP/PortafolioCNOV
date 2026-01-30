import { Code2, Globe, GitBranch, Wrench } from "lucide-react";

export function InfoTecnica() {
  return (
    <section id="info-tecnica" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Información Técnica
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-cyan-600" />
              <h3 className="text-xl font-bold text-slate-900">Lenguajes & Tecnologías</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Frontend:</strong> React 18, TypeScript, Tailwind CSS v4</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Build Tool:</strong> Vite 6.x</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Iconografía:</strong> Lucide React</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Diseño:</strong> Responsive Design, Mobile-First</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-cyan-600" />
              <h3 className="text-xl font-bold text-slate-900">Plataforma de Publicación</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Hosting:</strong> Figma Make Platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Despliegue:</strong> Automatizado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Acceso:</strong> Web Application (SPA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Compatibilidad:</strong> Cross-browser</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-8 h-8 text-cyan-600" />
              <h3 className="text-xl font-bold text-slate-900">Control de Versiones</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Sistema:</strong> Git</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Repositorio:</strong> GitHub / GitLab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Workflow:</strong> Feature Branches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Commits:</strong> Conventional Commits</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-cyan-600" />
              <h3 className="text-xl font-bold text-slate-900">Herramientas de Desarrollo</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>IDE:</strong> Visual Studio Code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Package Manager:</strong> pnpm / npm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Linting:</strong> ESLint, Prettier</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 mt-1">•</span>
                <span><strong>Testing:</strong> Vitest (opcional)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg shadow-lg p-6 text-white text-center">
          <p className="text-lg">
            <strong>Última actualización:</strong> Enero 29, 2026
          </p>
          <p className="text-sm mt-2 text-cyan-100">
            Este portafolio se actualiza continuamente con nuevos proyectos y aprendizajes
          </p>
        </div>
      </div>
    </section>
  );
}
