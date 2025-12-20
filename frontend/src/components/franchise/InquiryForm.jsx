import React, { useState } from "react";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InquiryForm = () => {
  // ---------------- STATE ----------------
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    location: "",
    investmentBudget: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  // ---------------- HANDLERS ----------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic frontend validation
    if (!formData.consent) {
      toast.error("Please agree to be contacted");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://jasperwings.onrender.com/api/v1/franchise-inquiry", // ✅ CORRECT
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Inquiry submitted successfully!");

      // reset form
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+1",
        phone: "",
        location: "",
        investmentBudget: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- ANIMATIONS ----------------
  const titleReveal = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const formStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const inputSlide = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <section className="relative bg-[#0C0C0C] py-14 px-4 md:px-20 overflow-hidden w-full">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleReveal}
            className="text-center mb-12 uppercase font-extrabold"
          >
            <h2 className="text-4xl md:text-5xl text-[#d96828] mb-1">
              Franchise
            </h2>
            <h2 className="text-4xl md:text-5xl text-white">Inquiry Form</h2>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            variants={formStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
          >
            {/* Full Name */}
            <motion.div variants={inputSlide}>
              <label className="text-sm text-gray-300">Full Name *</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={inputSlide}>
              <label className="text-sm text-gray-300">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white"
                required
              />
            </motion.div>

            {/* Phone Number */}
            <motion.div variants={inputSlide}>
              <label className="text-sm text-gray-300">Phone Number *</label>
              <div className="flex gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="
                    w-24 bg-transparent 
                    border border-gray-600 
                    rounded-lg px-3 py-3 
                    text-white 
                    focus:border-[#d96828] 
                    focus:outline-none
                  "
                >
                  <option value="+1" className="bg-black text-white">
                    +1
                  </option>
                  <option value="+91" className="bg-black text-white">
                    +91
                  </option>
                  <option value="+44" className="bg-black text-white">
                    +44
                  </option>
                </select>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#d96828] focus:outline-none"
                  required
                />
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={inputSlide}>
              <label className="text-sm text-gray-300">
                Location Interested In *
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white"
                required
              />
            </motion.div>

            {/* Investment */}
            <motion.div variants={inputSlide}>
              <label className="text-sm text-gray-300">
                Investment Budget *
              </label>
              <select
                name="investmentBudget"
                value={formData.investmentBudget}
                onChange={handleChange}
                className="
                    w-full bg-transparent 
                    border border-gray-600 
                    rounded-lg px-4 py-3 
                    text-white 
                    focus:border-[#d96828] 
                    focus:outline-none
                  "
                required
              >
                <option value="" className="bg-black text-gray-400">
                  Select budget
                </option>
                <option value="less-than-400k" className="bg-black text-white">
                  Less than $400,000
                </option>
                <option value="more-than-400k" className="bg-black text-white">
                  More than $400,000
                </option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div variants={inputSlide}>
              <label className="text-sm text-gray-300">Message *</label>
              <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white"
                required
              />
            </motion.div>

            {/* Consent */}
            <motion.div
              variants={inputSlide}
              className="md:col-span-2 flex justify-center"
            >
              <label className="flex items-center gap-3 text-gray-300">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                I agree to be contacted
              </label>
            </motion.div>

            {/* Submit */}
            <motion.div
              variants={inputSlide}
              className="md:col-span-2 flex justify-center"
            >
              <motion.button
                type="submit"
                disabled={loading}
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#d96828] text-black font-bold text-lg rounded-full px-12 py-3"
              >
                {loading ? "SUBMITTING..." : "SUBMIT"}
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default InquiryForm;
