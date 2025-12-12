import React from "react";

const GallerySection = () => {
  // image sources (kept same as your original)
  const images = {
    steakPlate:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    qrCode:
      "https://images.unsplash.com/photo-1706759755851-6163305080f0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grill:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coffee:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  };

  const row1 = [
    { id: 1, src: images.steakPlate, alt: "Steak on wooden board" },
    { id: 2, src: images.qrCode, alt: "Scanning QR menu" },
    { id: 3, src: images.grill, alt: "Steaks on grill" },
    { id: 4, src: images.qrCode, alt: "Scanning QR menu" },
    { id: 5, src: images.coffee, alt: "Pouring coffee" },
  ];

  const row2 = [
    { id: 6, src: images.grill, alt: "Steaks on grill" },
    { id: 7, src: images.steakPlate, alt: "Steak on wooden board" },
    { id: 8, src: images.coffee, alt: "Pouring coffee" },
    { id: 9, src: images.steakPlate, alt: "Steak on wooden board" },
    { id: 10, src: images.grill, alt: "Steaks on grill" },
  ];

  return (
    <div className="w-full bg-gray-200 py-4 overflow-hidden px-4 sm:px-12">
      <div className="flex flex-col gap-4">
        {/* ROW 1 */}
        <div
          className="
            /* desktop: usual wide row (keeps previous behaviour) */
            w-[180%] ml-[-40%] sm:w-[150%] sm:ml-[-25%] md:w-[125%] md:ml-[-12.5%]
            flex gap-4

            /* MOBILE: use vw/vh units so visible parts match screenshot exactly */
            max-sm:w-[220vw] max-sm:-ml-[60vw] max-sm:gap-3
            max-sm:overflow-visible
          "
        >
          {row1.map((img, index) => (
            <div
              key={`r1-${index}`}
              className="
                flex-none relative group overflow-hidden bg-white rounded-md
                /* make each tile width responsive with vw */
                w-[20%] sm:w-[20%] md:flex-1

                /* MOBILE: width relative to viewport so cropping is predictable */
                max-sm:w-[42vw] max-sm:h-[28vh] max-sm:rounded-sm
              "
              style={{ minWidth: "0" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="
                  w-full object-cover 
h-[260px] md:h-[300px] transform transition-transform duration-500 group-hover:scale-110 block

                  /* MOBILE: ensure image fills designated vh height */
                  max-sm:w-[100%] max-sm:h-[28vh] max-sm:object-cover
                "
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* ROW 2 */}
        <div
          className="
            w-[180%] ml-[-40%] sm:w-[150%] sm:ml-[-25%] md:w-[125%] md:ml-[-6.5%]
            flex gap-4

            /* MOBILE specific */
            max-sm:w-[220vw] max-sm:-ml-[30vw] max-sm:gap-3
            max-sm:overflow-visible
          "
        >
          {row2.map((img, index) => (
            <div
              key={`r2-${index}`}
              className="
                flex-none relative group overflow-hidden bg-white rounded-md
                w-[20%] sm:w-[20%] md:flex-1

                /* MOBILE sizing */
                max-sm:w-[42vw] max-sm:h-[28vh] max-sm:rounded-sm
              "
            >
              <img
                src={img.src}
                alt={img.alt}
                className="
                  w-full object-cover 
h-[260px] md:h-[300px]  transform transition-transform duration-500 group-hover:scale-110 block
                  max-sm:w-[100%] max-sm:h-[28vh] max-sm:object-cover
                "
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
