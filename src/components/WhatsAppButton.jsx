export function WhatsAppButton() {
  const telefono = "56947018834";
  const mensaje =
    "Hola Cecilia, vi tu página del vivero y me gustaría consultar por unas plantas.";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
    >
      {}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.96L0 16l4.104-1.076a7.863 7.863 0 0 0 3.89 1.018h.003c4.367 0 7.926-3.558 7.93-7.93a7.897 7.897 0 0 0-2.326-5.688zM7.994 14.52b 7.863 7.863 0 0 1-3.305-.733l-.237-.141-2.456.644.655-2.396-.155-.247a6.6 6.6 0 0 1-1.012-3.49c.002-3.633 2.956-6.587 6.59-6.587a6.59 6.59 0 0 1 6.586 6.591c-.001 3.633-2.956 6.588-6.59 6.588z" />
      </svg>
    </a>
  );
}
