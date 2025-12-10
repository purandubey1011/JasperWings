import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Home/Footer";
import BookTableSection from "../components/Home/BookTableSection";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const ContactPage = () => {
  // Helper component for social icons to keep code clean
  function SocialIcon({ Icon }) {
    return (
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
      >
        <Icon size={18} />
      </a>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="bg-[#080808] py-16">
        <div className="relative min-h-screen w-full bg-neutral-900 font-sans text-white overflow-hidden flex flex-col md:flex-row p-4 md:p-8 lg:p-12">
          {/* INNER ROUNDED HERO CONTAINER */}
          <div className="relative z-10 w-full max-w-7xl rounded-[2rem] bg-[url('/assets/contacthero.jpg')] bg-cover bg-center bg-no-repeat border border-white/10 shadow-2xl p-8 md:p-12 lg:mt-12">
            {/* FLEX LAYOUT — LEFT + RIGHT */}
            <div className="flex flex-col md:flex-row gap-12">
              {/* LEFT COLUMN */}
              <div className="flex-1 space-y-6">
                {/* Header */}
                <h1
                  className="text-5xl md:text-6xl font-black uppercase tracking-wide text-transparent bg-clip-text bg-white"
                  style={{
                    fontFamily: '"Impact","Oswald",sans-serif',
                    filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))",
                  }}
                >
                  Let’s Talk Flavour
                </h1>

                <p className="text-gray-300 text-sm md:text-base font-light tracking-wide">
                  Reach out for orders, catering, feedback, or collabs — we're
                  listening.
                </p>

                <hr className="border-white/20" />

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-white/30 rounded-full">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Visit Us</h3>
                    <p className="text-gray-300 text-sm">
                      123 Queen Street West
                      <br />
                      Toronto, Canada
                    </p>
                  </div>
                </div>

                <hr className="border-white/20" />

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-white/30 rounded-full">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Open Hours</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-sm">
                      <p>
                        <span className="font-medium text-white">Mon–Thu:</span>{" "}
                        11 AM – 10 PM
                      </p>
                      <p>
                        <span className="font-medium text-white">Fri–Sat:</span>{" "}
                        11 AM – 12 AM
                      </p>
                      <p>
                        <span className="font-medium text-white">Sun:</span> 12
                        PM – 9 PM
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-white/20" />

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 border border-white/30 rounded-full">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Booking Inquiries</h3>
                      <p className="text-white underline cursor-pointer hover:text-orange-400 text-sm mt-1">
                        +1 (416) 555-0192
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 border border-white/30 rounded-full">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Email Us</h3>
                      <p className="text-white underline cursor-pointer hover:text-orange-400 text-sm mt-1 break-all">
                        contact@jasperwings.ca
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-white/20" />

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <SocialIcon Icon={Facebook} />
                  <SocialIcon Icon={Instagram} />
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Linkedin} />
                </div>
              </div>

              {/* RIGHT COLUMN — MAP CARD */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className=" lg:mt-20 p-3 rounded-[2rem] w-[250px] sm:w-[300px] lg:w-[350px]">
                  <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gray-200">
                    <img
                      src="/assets/map.png"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <MapPin
                      size={48}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 drop-shadow-lg fill-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BookTableSection />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
