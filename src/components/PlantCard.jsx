export function PlantCard({ planta }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={planta.imagen}
        alt={planta.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
          {planta.categoria}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-1">
          {planta.nombre}
        </h3>
        <p className="text-gray-600 text-sm mt-2">{planta.descripcion}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            ${planta.precio.toLocaleString("es-CL")}
          </span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
}
