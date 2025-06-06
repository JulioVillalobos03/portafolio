import { useEffect, useState } from "react";

type Props = {
  images: string[];
  interval?: number;
};

export default function ImageCarousel({ images, interval = 3000 }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full min-h-[320px] max-h-[640px]">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
        style={{ maxHeight: "100%", minHeight: "320px", objectFit: "cover" }}
      />

      {/* Indicadores solo si hay más de una imagen */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
