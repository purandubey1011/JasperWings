import React from 'react';

const GallerySection = () => {
  // URLs that match the visual content of the provided image
  const images = {
    steakPlate: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    qrCode: "https://images.unsplash.com/photo-1706759755851-6163305080f0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    grill: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coffee: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  };

  // Exact sequence based on the analysis of the provided image:
  // Row 1: [Steak] [QR] [Grill] [QR] [Coffee]
  // Row 2: [Grill] [Steak] [Coffee] [Steak] [Grill]
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
    <div className="w-full bg-gray-200 py-4 overflow-hidden px-12">
      <div className="flex flex-col gap-4">
        
        {/* Row 1 */}
        {/* Logic: To replicate the 'cut-off' look where the center 3 are visible 
            and the outer 2 are partial, we make the row wider than the screen (e.g., 125%)
            and pull it left by half the excess width (-12.5%).
        */}
        <div className="w-[180%] ml-[-40%] sm:w-[150%] sm:ml-[-25%] md:w-[125%] md:ml-[-12.5%] flex gap-4">
          {row1.map((img, index) => (
            <div key={`r1-${index}`} className="flex-1 aspect-square relative group overflow-hidden bg-white">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="w-[180%] ml-[-40%] sm:w-[150%] sm:ml-[-25%] md:w-[125%] md:ml-[-6.5%] flex gap-4">
          {row2.map((img, index) => (
            <div key={`r2-${index}`} className="flex-1 aspect-square relative group overflow-hidden bg-white">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
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