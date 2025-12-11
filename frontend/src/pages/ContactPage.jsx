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
    <div className="bg-neutral-950 font-sans selection:bg-amber-400 selection:text-black">
      <Navbar />
      {/* MAIN HERO — set overall hero wrapper to 90vh */}
      <main className="bg-black flex justify-center items-start pt-30 pb-10">
        <div className="w-full max-w-[95vw] px-4">
          {/* Outer container that visually matches the screenshot.
              It is exactly 90vh tall (using min-h so it can grow in very small screens) */}
          <div
            className="relative mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
            style={{ minHeight: "90vh" }}
          >
            {/* Background image for the rounded container */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/contacthero.jpg')",
                filter: "saturate(0.95) contrast(0.95)",
              }}
              aria-hidden="true"
            />

            {/* dark overlay for readable white text */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content (left + right) */}
            <div className="relative z-10 h-full w-full p-6 md:p-10 lg:p-14">
              <div className="flex flex-col lg:flex-row h-full gap-8">
                {/* LEFT COLUMN — content block */}
                <div className="flex-1 flex flex-col justify-start md:justify-center text-white pr-0 lg:pr-8">
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wide mb-3"
                    style={{
                      fontFamily: '"Impact","Oswald",sans-serif',
                      filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.6))",
                      lineHeight: 1,
                    }}
                  >
                    LET&apos;S TALK FLAVOUR
                  </h1>

                  <p className="text-gray-300 text-sm md:text-base font-light tracking-wide max-w-xl">
                    Reach out for orders, catering, feedback, or collabs — we&apos;re
                    listening.
                  </p>

                  <hr className="border-white/10 my-6 w-full max-w-xl" />

                  {/* Visit / Address */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-2 border border-white/20 rounded-full shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Visit or Reach Out to Us</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        123 Queen Street West
                        <br />
                        Toronto, Canada
                      </p>
                    </div>
                  </div>

                  <hr className="border-white/10 my-4 w-full max-w-xl" />

                  {/* Open Hours */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-2 border border-white/20 rounded-full shrink-0">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Open Hours</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-gray-300 text-sm">
                        <p>
                          <span className="font-medium text-white">Mon–Thu:</span> 11 AM – 10 PM
                        </p>
                        <p>
                          <span className="font-medium text-white">Fri–Sat:</span> 11 AM – 12 AM
                        </p>
                        <p>
                          <span className="font-medium text-white">Sun:</span> 12 PM – 9 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="border-white/10 my-4 w-full max-w-xl" />

                  {/* Contact details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
                    <div className="flex items-start gap-4">
                      <div className="p-2 border border-white/20 rounded-full shrink-0">
                        <Phone size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Contact Details</h3>
                        <p className="text-gray-300 text-sm mt-1">Booking inquiries: </p>
                        <a className="text-white underline text-sm mt-1 inline-block hover:text-amber-400" href="tel:+14165550192">
                          +1 (416) 555-0192
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 border border-white/20 rounded-full shrink-0">
                        <Mail size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Email Us</h3>
                        <a className="text-white underline text-sm mt-1 inline-block break-all hover:text-amber-400" href="mailto:contact@jasperwings.ca">
                          contact@jasperwings.ca
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="border-white/10 my-6 w-full max-w-xl" />

                  {/* Social icons */}
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 mr-2">Follow Us :</span>
                    <SocialIcon Icon={Facebook} />
                    <SocialIcon Icon={Instagram} />
                    <SocialIcon Icon={Twitter} />
                    <SocialIcon Icon={Linkedin} />
                  </div>
                </div>

                {/* RIGHT COLUMN — Map card */}
                <div className="w-full md:w-[360px] lg:w-[420px] flex-shrink-0 flex items-center justify-center">
                  <div className="rounded-[1.5rem] overflow-hidden p-3 bg-white/5 backdrop-blur-sm border border-white/20 shadow-lg w-full">
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src="/assets/map.png"
                        alt="map"
                        className="w-full h-full object-cover"
                      />
                      {/* decorative pin centered */}
                      <MapPin
                        size={44}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 drop-shadow-lg"
                      />
                    </div>

                    {/* small address summary under the map (optional) */}
                    <div className="mt-4 px-2">
                      <h4 className="text-white font-bold">Our Location</h4>
                      <p className="text-gray-300 text-sm">123 Queen Street West, Toronto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </main>

        <BookTableSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
