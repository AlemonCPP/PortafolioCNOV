import { GraduationCap, Shield, Search, Code } from "lucide-react";

export function Perfil() {
  return (
    <section id="perfil" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Perfil del Estudiante
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 bg-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-lg">
              ELA
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Emiliano Lopez Aleman</h3>
              <p className="text-cyan-300 mb-4">Estudiante de Ingeniería en Tecnologias de la Informacion</p>
              <p className="text-slate-300 leading-relaxed">
                Soy un estudiante apasionado por la tecnología y la seguridad digital. Actualmente cursando 
                la asignatura CNO V – Seguridad Informática, con especial interés en el análisis 
                de vulnerabilidades y pruebas de penetración ética. Mi objetivo es contribuir al 
                desarrollo de sistemas más seguros y resilientes.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-cyan-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Seguridad Informática</h4>
                <p className="text-sm text-slate-600">
                  Análisis de amenazas, protección de infraestructuras, criptografía y 
                  gestión de riesgos de seguridad.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <Code className="w-8 h-8 text-cyan-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Ciberseguridad</h4>
                <p className="text-sm text-slate-600">
                  Ethical hacking, pentesting, análisis forense digital y respuesta a 
                  incidentes de seguridad.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <Search className="w-8 h-8 text-cyan-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Investigación</h4>
                <p className="text-sm text-slate-600">
                  Estudio de nuevas vulnerabilidades, investigación de exploits y desarrollo 
                  de contramedidas de seguridad.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-cyan-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Desarrollo Profesional</h4>
                <p className="text-sm text-slate-600">
                  Cisco: Introduction to IoT, IT Essentials <br></br>
Certiport: Microsoft Office Specialist (Excel, Word, PowerPoint)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
