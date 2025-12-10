import React from 'react';
import HeroSection from '../components/Franchise/HeroSection';
import WhyItWorks from '../components/Franchise/WhyItWorks';
import WhatYouGet from '../components/Franchise/Get';
import InquiryForm from '../components/Franchise/InquiryForm';
import FAQSection from '../components/Franchise/FAQSection';
import Navbar from '../components/common/Navbar';
import Footer from '../components/Home/Footer';
import BookTableSection from '../components/Home/BookTableSection';
import { Book } from 'lucide-react';


const FranchisePage = () => {
  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      <Navbar/>
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
