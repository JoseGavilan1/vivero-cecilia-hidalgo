import { categorias } from "./data";
import { CategorySection } from "./components/CategorySection";
import { Location } from "./components/Location";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Contact } from "./components/Contact";
import { Reveal } from "./components/Reveal";

function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-800">
      <Reveal>
        {/* Header Premium */}
        <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1500"
              className="w-full h-full object-cover opacity-40"
              alt="Fondo vivero"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F9F7F2]"></div>
          </div>

          <div className="relative z-10 text-center px-4">
            <span className="uppercase tracking-[0.3em] text-sm text-green-800 font-semibold mb-2 block">
              Curacaví, Chile
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-4">
              Vivero Cecilia
            </h1>
            <div className="h-1 w-24 bg-green-700 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-stone-600 italic">
              "Donde la naturaleza se siente en casa"
            </p>
          </div>
        </header>
      </Reveal>

      <Reveal>
        {/* Catálogo por Categorías */}
        <main className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-center text-4xl font-serif mb-20">
            Nuestro Catálogo
          </h2>
          {categorias.map((cat) => (
            <CategorySection key={cat.id} categoria={cat} />
          ))}
        </main>
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal>
        {/* Ubicación */}
        <div className="bg-stone-100 py-10">
          <Location />
        </div>
      </Reveal>

      {/* Footer elegante */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 text-center">
        <h3 className="text-white text-2xl font-serif mb-4">
          Vivero Cecilia Hidalgo
        </h3>
        <p className="mb-8">
          Callejon la capilla, Sector Miraflores, Curacaví.
        </p>

        <p className="text-xs border-t border-stone-800 pt-8">
          &copy; 2026 Diseñado por Gavilán Dev — Hecho con amor para mamá 🌱
        </p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;
