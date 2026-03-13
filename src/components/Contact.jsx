export function Contact() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="contacto">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Lado Izquierdo: Información de Contacto */}
        <div className="bg-green-800 p-12 text-white">
          <h2 className="text-4xl font-serif font-bold mb-6">Contáctanos</h2>
          <p className="text-green-100 mb-10">
            ¿Tienes dudas sobre el cuidado de tus plantas o buscas una especie en especial? 
            Escríbenos y Cecilia te ayudará personalmente.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-700 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span>+56 9 1234 5678</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-700 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span>hola@viverocecilia.cl</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-700 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span>Curacaví, Sector Los Naranjos</span>
            </div>
          </div>

          <div className="mt-12 flex space-x-4">
             {/* Iconos de Redes Sociales Simbolizados */}
             <div className="w-10 h-10 border border-green-600 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">f</div>
             <div className="w-10 h-10 border border-green-600 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">ig</div>
          </div>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className="p-12">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Nombre Completo</label>
              <input 
                type="text" 
                className="w-full p-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-green-600 outline-none transition-all"
                placeholder="Ej: José Gavilán"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Correo Electrónico</label>
              <input 
                type="email" 
                className="w-full p-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-green-600 outline-none transition-all"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">¿En qué podemos ayudarte?</label>
              <textarea 
                rows="4"
                className="w-full p-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-green-600 outline-none transition-all"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-colors shadow-lg">
              Enviar Mensaje
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}