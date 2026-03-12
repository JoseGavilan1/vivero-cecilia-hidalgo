export function Location() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo: Texto */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Ven a visitarnos 🌱</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Estamos ubicados en el corazón de **Curacaví**. 
            Contamos con una gran variedad de plantas ornamentales, frutales y suculentas. 
            ¡Te esperamos para asesorarte en tu jardín!
          </p>
          <div className="mt-6 space-y-2">
            <p className="flex items-center text-gray-700">
              <span className="font-bold mr-2">📍 Dirección:</span> Sector Los Naranjos, Parcela 14
            </p>
            <p className="flex items-center text-gray-700">
              <span className="font-bold mr-2">⏰ Horario:</span> Lun - Sáb: 10:00 a 19:00 hrs
            </p>
          </div>
        </div>

        {/* Lado Derecho: Mapa (Iframe de Google Maps) */}
        <div className="h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13320.123456789!2d-71.13!3d-33.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI0JzAwLjAiUyA3McKwMDcnNDguMCJX!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}