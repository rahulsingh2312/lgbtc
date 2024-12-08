"use client"

import Image from 'next/image';
import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { FaTwitter, FaCheckCircle } from 'react-icons/fa';
import { FaTiktok , FaTelegram } from "react-icons/fa";

import { useToast } from "@/hooks/use-toast";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Page() {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const address = '596rPE115EbDJY6rk3oCFViXF4VSEmyHymmVveGDpump';

  // Images for carousel (replace with your actual images)
  const carouselImages = [
    '/0.png',
    '/3.png',
    '/4.png',
    // '/1.jpeg',
    // '/5.jpeg',
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText(address)
      .then(() => {
        setIsCopied(true);
        toast({
          title: 'Address copied to clipboard! 🐱',
          className: 'bg-white text-black border-black border-2 border-b-4',
        });
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const socialLinks = {
    telegram: 'https://t.me/lgbtc_portal',
    twitter: 'https://x.com/lgbtcOnSol',
    tiktok: 'https://x.com/lgbtcOnSol',
  };

  return (

<div className="relative barrio-regular min-h-screen overflow-hidden">
  {/* Video Background */}
  <video 
    autoPlay 
    muted 
    loop 
    playsInline 
    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
  >
    <source src="/hi.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    {/* Navbar */}
      <nav className="fixed top-10 md:left-20 left-10 right-10 rounded-full md:right-20 z-50 backdrop-blur-md bg-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.jpeg" 
              alt="LGBTC Logo" 
              width={50} 
              height={50} 
              className="rounded-full hover:blur-none transition-all"
            />
          </div>
          <div className="flex space-x-4">
          <a 
              href={socialLinks.telegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 transition-colors"
            >

              <FaTelegram className="text-2xl" />
            </a>
            <a 
              href={socialLinks.telegram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400  hover:text-purple-200 cursor-not-allowed transition-colors"
            >

              <FaTiktok className="text-2xl" />
            </a>
            <a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 transition-colors"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content with Top Padding */}
      <main className="pt-24 mt-16 container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 
            drop-shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            LGBTC: Digital Dominance Awaits
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 
            max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Where &apos;L&apos; stands for &apos;Laissez-faire&apos;, not love. Join the memecoin 
            revolution that puts profit before politics.
          </p>
          <a href="https://pump.fun/coin/596rPE115EbDJY6rk3oCFViXF4VSEmyHymmVveGDpump" target="_blank" rel="noopener noreferrer">
          <button className="bg-white  text-purple-600 px-6 md:px-8 py-2 md:py-3 
            rounded-full font-bold hover:bg-purple-100 transition-colors">
              <div className='flex gap-3'>
          <div>Join the Movement </div>  <img width={20} src='https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75' alt="pill" />
          
          </div> </button>
          </a>
        </section>

        {/* Address & Invest Section */}
        <section className="flex flex-col md:flex-row justify-center items-center 
          space-y-6 md:space-y-0 md:space-x-6 mb-16">
          <div className="w-full max-w-md h-16 rounded-xl 
            bg-yellow-200 flex items-center justify-between px-4 
            shadow-lg border border-black">
            <span className="text-black text-xs md:text-sm truncate">
              {address}
            </span>
            <button 
              onClick={copyAddress}
              className=" text-black hover:text-green-700 transition-colors"
            >
              {isCopied ? (
                <FaCheckCircle className="text-green-900 text-2xl" />
              ) : (
                <MdContentCopy className="text-black text-2xl" />
              )}
            </button>
          </div>
          <button className="w-full max-w-md h-16 rounded-xl 
            bg-[#f47372] hover:bg-[#dc4d4d] 
            text-black text-base md:text-lg 
            transition-colors shadow-lg border border-black">
            Invest in LGBTC - Rake in the Dough! 🤑
          </button>
        </section>

        {/* Image Carousel */}
        <section className="mb-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="max-w-4xl mx-auto"
          >
            {carouselImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full aspect-video relative">
                  <Image 
                    src={img} 
                    alt={`Carousel image ${index + 1}`} 
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Features Grid */}
        <section className="bg-white bg-opacity-10 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Profit Over Politics",
                description: "We are not about being woke, we are about making bank. 💸",
                icon: "📈"
              },
              {
                title: "Community-Driven",
                description: "Join a movement that values financial freedom. 🚀",
                icon: "🤝"
              },
              {
                title: "No Boundaries",
                description: "Disrupting the market, one memecoin at a time. 💥",
                icon: "🌐"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center text-white p-6 
                bg-purple-700/30 rounded-lg hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 font-sans">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 py-8 text-center text-white">
        <p>&copy; 2024 LGBTC. All rights to profit reserved.</p>
      </footer>
    </div>
  );
}