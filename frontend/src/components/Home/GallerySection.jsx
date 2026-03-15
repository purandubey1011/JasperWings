import React from "react";

const GallerySection = () => {
  const images = {
    wings:
      "https://ik.imagekit.io/jasperwings/jasper%20website%20images/1lb%20(1flavour)skip.jpg?updatedAt=1773393911524",
    tenders:
      "https://ik.imagekit.io/jasperwings/drive%20photos/a0b678b3-345e-437d-b2c2-fe745c4e1239.jpg",
    burger:
      "https://ik.imagekit.io/jasperwings/drive%20photos/crispy%20chicken%20burger.jpg",
    slider:
      "https://ik.imagekit.io/jasperwings/drive%20photos/chicken%20slider%20(1).jpg",
    wrap:
      "https://ik.imagekit.io/jasperwings/drive%20photos/crispy%20chicken%20wrap.jpg",
    fries:
      "https://ik.imagekit.io/jasperwings/drive%20photos/fries/loaded%20fries.jpg?updatedAt=1773490682637",
    combo:
      "https://ik.imagekit.io/jasperwings/drive%20photos/combo/Combo_1%20Loaded%20wing%20combo(1).jpg",
    dessert:
      "https://ik.imagekit.io/jasperwings/drive%20photos/dessert/80b6ac1d-4dc9-4550-8726-5c1ef3c53442.jpg",
    drink:
      "https://ik.imagekit.io/jasperwings/drive%20photos/drinks/red%20buu.png",
    onionRings:
      "https://ik.imagekit.io/jasperwings/drive%20photos/fries/onion%20rings%20(1).jpg?updatedAt=1773554826670",
  };

  const row1 = [
    { id: 1, src: images.wings, alt: "Jasper wings" },
    { id: 2, src: images.tenders, alt: "Jasper tenders" },
    { id: 3, src: images.burger, alt: "Crispy chicken burger" },
    { id: 4, src: images.slider, alt: "Chicken slider" },
    { id: 5, src: images.wrap, alt: "Chicken wrap" },
  ];

  const row2 = [
    { id: 6, src: images.fries, alt: "Loaded fries" },
    { id: 7, src: images.combo, alt: "Jasper combo" },
    { id: 8, src: images.dessert, alt: "Cheesecake roll" },
    { id: 9, src: images.drink, alt: "Red Bull drink" },
    { id: 10, src: images.onionRings, alt: "Onion rings" },
  ];

  const GalleryRow = ({ items, direction = "left" }) => (
    <div className="overflow-hidden">
      <div
        className={`gallery-track ${
          direction === "left" ? "gallery-track-left" : "gallery-track-right"
        }`}
      >
        {[0, 1].map((copyIndex) => (
          <div
            key={copyIndex}
            className="gallery-group"
            aria-hidden={copyIndex === 1 ? "true" : undefined}
          >
            {items.map((img, index) => (
              <div
                key={`${copyIndex}-${img.id}-${index}`}
                className="gallery-card group relative overflow-hidden rounded-md bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-gray-200 py-4">
      <div className="flex flex-col gap-4">
        <GalleryRow items={row1} direction="left" />
        <GalleryRow items={row2} direction="right" />
      </div>

      <style>{`
        .gallery-track {
          display: flex;
          width: max-content;
        }

        .gallery-group {
          display: flex;
          gap: 1rem;
          flex-shrink: 0;
        }

        .gallery-card {
          width: 42vw;
          height: 28vh;
          flex-shrink: 0;
        }

        .gallery-track-left {
          animation: gallery-left 32s linear infinite;
        }

        .gallery-track-right {
          animation: gallery-right 32s linear infinite;
        }

        @keyframes gallery-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes gallery-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @media (min-width: 640px) {
          .gallery-card {
            width: 32vw;
            height: 260px;
          }
        }

        @media (min-width: 1024px) {
          .gallery-card {
            width: 24vw;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default GallerySection;
