import React from 'react'
import { FaPaw, FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    name: "John",
    title: "Business Man",
    rating: 5,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    name: "John",
    title: "Business Man",
    rating: 5,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    name: "John",
    title: "Business Man",
    rating: 5,
  },
];

const TestimonialCard = ({ text, name, title, rating }) => {
  return (
    <div className="bg-[#111111] p-8 pb-35 rounded-3xl text-center flex flex-col items-center">
      <FaQuoteLeft className="text-orange-500 text-4xl mb-6" />
      <p className="text-gray-400 mb-8 leading-relaxed">{text}</p>
      
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-orange-500 text-lg" />
        ))}
      </div>
      
      <h4 className="text-white font-bold text-lg">{name}</h4>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-center items-start opacity-10 pointer-events-none">
        {/* Replace with your actual image path */}
        <img src="/path/to/your/bear-bg.png" alt="Bear Background" className="w-auto h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-orange-500 font-bold mb-4">
            <FaPaw className="text-xl" />
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide" style={{ fontFamily: 'Impact, sans-serif' }}>
            WHAT CUSTOMER SAYS?
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          <span className="w-4 h-4 bg-orange-500 rounded-full cursor-pointer"></span>
          <span className="w-4 h-4 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition"></span>
          <span className="w-4 h-4 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600 transition"></span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection