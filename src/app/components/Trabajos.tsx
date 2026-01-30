import { useState } from "react";
import { FolderOpen, FileText, Download, Calendar } from "lucide-react";
pdfActividad2
import pdfActividad2 from "./trabajos/182883-Act02.pdf";


// Definición de la estructura de un trabajo
type Trabajo = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  tipo: string;
  // La ruta del archivo en tu carpeta public (ej: "/documentos/tarea1.pdf")
  // Si lo dejas vacío o undefined, el botón de descarga no aparecerá.
  archivo?: string; 
};

// =====================================================================
// ÁREA DE EDICIÓN: Aquí agregas tus trabajos manualmente
// =====================================================================
const trabajosPorParcial = {
  primero: [
    {
      id: "1-1",
      titulo: "Introducción a la Seguridad Informática",
      descripcion: "Resumen del capítulo 1 y mapa conceptual de conceptos.",
      fecha: "2026-02-15",
      tipo: "Documento PDF",
      // IMPORTANTE: Esto busca en la carpeta 'public/documentos'
      archivo: "/documentos/intro_seguridad.pdf" 
    },
    {
      id: "1-2",
      titulo: "Investigación de Vulnerabilidades",
      descripcion: "Ensayo sobre OWASP Top 10.",
      fecha: "2026-02-28",
      tipo: "Presentación",
      archivo: pdfActividad2
    }
    
  ],
  segundo: [
   
  ],
  tercero: [
    // Aún no hay trabajos, la lista está vacía
  ]
};
// =====================================================================

export function Trabajos() {
  const [parcialActivo, setParcialActivo] = useState<"primero" | "segundo" | "tercero">("primero");

  const parciales = [
    { id: "primero" as const, label: "1er Parcial", icon: "1" },
    { id: "segundo" as const, label: "2do Parcial", icon: "2" },
    { id: "tercero" as const, label: "3er Parcial", icon: "3" }
  ];

  // Obtenemos la lista actual según el tab seleccionado
  const listaActual = trabajosPorParcial[parcialActivo];

  return (
    <section id="trabajos" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FolderOpen className="w-12 h-12 text-cyan-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trabajos y Recursos
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Repositorio de documentos y evidencias de aprendizaje. 
            Descarga los archivos correspondientes a cada parcial.
          </p>
        </div>

        {/* Pestañas de selección de parcial */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {parciales.map((parcial) => (
            <button
              key={parcial.id}
              onClick={() => setParcialActivo(parcial.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                parcialActivo === parcial.id
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                parcialActivo === parcial.id ? "bg-white text-cyan-500" : "bg-slate-600 text-slate-300"
              }`}>
                {parcial.icon}
              </div>
              {parcial.label}
            </button>
          ))}
        </div>

        {/* Grid de Trabajos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {listaActual.map((trabajo) => (
            <div
              key={trabajo.id}
              className="bg-slate-900 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <div className="flex items-start gap-4">
                {/* Icono decorativo */}
                <div className="bg-cyan-500/10 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                
                {/* Contenido de la tarjeta */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {trabajo.titulo}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm">
                    {trabajo.descripcion}
                  </p>
                  
                  {/* Metadata (Fecha y Tipo) */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(trabajo.fecha).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}</span>
                    </div>
                    <span className="px-2 py-1 bg-slate-800 rounded text-cyan-400 text-xs border border-slate-700">
                      {trabajo.tipo}
                    </span>
                  </div>

                  {/* Botón de Descarga */}
                  {trabajo.archivo ? (
                    <a
                      href={trabajo.archivo}
                      // El atributo download fuerza la descarga en vez de abrirlo
                      download 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold text-sm shadow-md shadow-cyan-500/20"
                    >
                      <Download className="w-4 h-4" />
                      Descargar Archivo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-500 rounded-lg text-sm cursor-not-allowed border border-slate-700">
                      <Download className="w-4 h-4" />
                      No disponible
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje de Lista Vacía */}
        {listaActual.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-slate-700 rounded-xl bg-slate-800/30">
            <FolderOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">
              No hay archivos cargados para este parcial todavía.
            </p>
          </div>
        )}
        
      </div>
    </section>
  );
}