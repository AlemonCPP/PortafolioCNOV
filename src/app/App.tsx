import { Header } from "@/app/components/Header";
import { Presentacion } from "@/app/components/Presentacion";
import { Perfil } from "@/app/components/Perfil";
import { InfoTecnica } from "@/app/components/InfoTecnica";
import { Trabajos } from "@/app/components/Trabajos";
import { ContactoForm } from "@/app/components/ContactoForm";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Presentacion />
        <Perfil />
        <InfoTecnica />
        <Trabajos />
        <ContactoForm />
      </main>
      <Footer />
    </div>
  );
}