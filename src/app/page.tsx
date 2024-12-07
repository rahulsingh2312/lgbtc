"use client"

import Image from 'next/image';
import { MdContentCopy } from 'react-icons/md';
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
export default function Page() {



  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const address = '56SDQBD*********PX1PUMP';



  const copyAddress = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use clipboard API if available
      navigator.clipboard.writeText(address)
        .then(() => {
          setIsCopied(true);
          toast({
            variant: 'destructive',
            title: 'Address copied to clipboard! 🐱',
            className: 'bg-white text-black border-black border-2 border-b-4 border-solid text-3xl toast-top-center',
          });
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    } else {
      // Fallback for mobile devices that do not support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.style.position = 'fixed';  // Avoid scrolling to bottom
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');  // Fallback for older browsers
        setIsCopied(true);
        toast({
          variant: 'destructive',
          title: 'Address copied to clipboard! 🐱',
          className: 'bg-white text-black border-black border-2 border-b-4 md:w-[40%] w-[90%] border-solid text-3xl toast-top-center',
        });
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };
  

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-600 to-pink-500">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Comic Sans MS', textShadow: '2px 2px 4px #000000' }}>
            LGBTC - Where 'L' stands for 'Laissez-faire', not love. 🤑
          </h1>
          <p className="text-2xl text-white mb-8" style={{ fontFamily: 'Papyrus', fontSize: '24px', lineHeight: '1.5' }}>
            Join LGBTC: Because who needs diversity when you can have digital dominance? 💸
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition" style={{ fontFamily: 'Impact', fontSize: '18px' }}>
            Burn Your Rainbow Flag and Join the Movement! 🔥
          </button>
        </div>
      </div>
       {/* Address & Button Section */}
       <div className='pt-8 flex justify-center items-center'>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="w-full max-w-[345px] h-[60px] rounded-xl shadow border border-black bg-yellow-200 flex items-center justify-between px-4 py-2">
            <h1 className="text-black text-[20px] sm:text-[23px] font-normal">
              {address}
            </h1>
            <button
              onClick={copyAddress}
              className="text-black text-xl font-normal justify-center items-center px-4 py-2 transition-all duration-200"
            >
              {isCopied ? <FaCheckCircle className="text-green-900 text-2xl" /> : <MdContentCopy className="text-black text-2xl" />}
            </button>
          </div>

          <button className="w-[165px] h-[60px] rounded-xl shadow border border-black bg-[#f47372] hover:bg-[#dc4d4d] transition-all duration-300">
            <div className="text-black text-lg sm:text-[22px] font-normal">
              Invest in LGBTC and Get Ready to Rake in the Dough! 🤑
            </div>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white bg-opacity-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white p-6" style={{ fontFamily: 'Courier New', fontSize: '18px' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ textDecoration: 'underline' }}>
                We Don't Care About Your Pronouns, Only Your Profit Margins 💸
              </h3>
              <p>Our community is all about making that dough, not about being woke. 😴</p>
            </div>
            <div className="text-center text-white p-6" style={{ fontFamily: 'Arial Black', fontSize: '20px' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ textTransform: 'uppercase' }}>
                We're Not About Progress, Only Profit 📈
              </h3>
              <p>Our mission is to make you rich, not to make the world a better place. 🤑</p>
            </div>
            <div className="text-center text-white p-6" style={{ fontFamily: 'Verdana', fontSize: '19px' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontStyle: 'italic' }}>
                Join the Movement and Get Ready to Get Rich! 💸
              </h3>
              <p>Don't miss out on this opportunity to join the most controversial memecoin in the game! 🚀</p>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Event Section */}
      <div className="bg-white bg-opacity-10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Comic Sans MS', textShadow: '2px 2px 4px #000000' }}>
              Launch Event: Burn Your Rainbow Flag and Join the Movement! 🔥
            </h1>
            <p className="text-2xl text-white mb-8" style={{ fontFamily: 'Papyrus', fontSize: '24px', lineHeight: '1.5' }}>
              Join us for the most epic launch event in memecoin history! 🎉
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition" style={{ fontFamily: 'Impact', fontSize: '18px' }}>
              RSVP Now and Get Ready to Burn Your Rainbow Flag! 🔥
            </button>
          </div>
        </div>
      </div>

    
    </main>
  )
}
