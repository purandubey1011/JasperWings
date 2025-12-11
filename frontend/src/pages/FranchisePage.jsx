import React from 'react';
import HeroSection from '../components/franchise/HeroSection';
import WhyItWorks from '../components/franchise/WhyItWorks';
import WhatYouGet from '../components/franchise/Get';
import InquiryForm from '../components/franchise/InquiryForm';
import FAQSection from '../components/franchise/FAQSection';
import Navbar from '../components/common/Navbar';
import Footer from '../components/Home/Footer';
import BookTableSection from '../components/Home/BookTableSection';
import { Book } from 'lucide-react';


const FranchisePage = () => {
  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      <Navbar bg={"trasparent"} />
      <HeroSection/>
      <WhyItWorks/>
      <WhatYouGet/>
      <InquiryForm/>
      <FAQSection/>
      <BookTableSection />
      <Footer/>
      <div className="w-full h-10 bg-black"></div>
    </div>
  );
};

export default FranchisePage;
