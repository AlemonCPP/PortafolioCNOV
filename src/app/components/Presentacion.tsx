import { BookOpen, Target, Award } from "lucide-react";

export function Presentacion() {
  return (
    <section id="presentacion" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Presentación del Portafolio
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Bienvenido a mi portafolio digital de <strong>CNO V – Seguridad Informática</strong>. 
              Este espacio ha sido diseñado para documentar y presentar mi proceso de aprendizaje, 
              proyectos y logros académicos a lo largo del semestre.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-slate-50 hover:bg-cyan-50 transition-colors">
              <Target className="w-12 h-12 text-cyan-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Propósito</h3>
              <p className="text-sm text-slate-600">
                Compilar y exhibir evidencias de mi desarrollo profesional en el área de 
                seguridad informática, demostrando competencias adquiridas.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-slate-50 hover:bg-cyan-50 transition-colors">
              <BookOpen className="w-12 h-12 text-cyan-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Enfoque del Curso</h3>
              <p className="text-sm text-slate-600">
                Profundización en seguridad informática, pruebas de penetración, análisis de 
                vulnerabilidades y mejores prácticas de ciberseguridad.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-slate-50 hover:bg-cyan-50 transition-colors">
              <Award className="w-12 h-12 text-cyan-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Importancia</h3>
              <p className="text-sm text-slate-600">
                Este portafolio constituye una evidencia tangible de mi proceso de aprendizaje, 
                reflejando mi evolución y compromiso académico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
