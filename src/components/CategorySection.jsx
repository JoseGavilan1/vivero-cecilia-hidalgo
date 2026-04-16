export function CategorySection({ categoria }) {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b border-stone-200 pb-4">
        <div>
          <h3 className="text-3xl font-bold text-stone-800">
            {categoria.titulo}
          </h3>
          <p className="text-stone-500 mt-2 max-w-xl">
            {categoria.descripcion}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="text-sm uppercase tracking-widest text-stone-400">
            Precios desde
          </span>
          <p className="text-2xl font-bold text-green-700">
            ${categoria.precioDesde.toLocaleString("es-CL")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoria.imagenes.map((img, index) => (
          <div
            key={index}
            className="group relative h-64 overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={img}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 hover:rotate-2"
              alt="Vista de planta"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
