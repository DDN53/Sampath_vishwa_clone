import React from 'react'
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Image from 'next/image';

export default function Footer() {
  return (
    <>  
      <div className="md:w-full bg-black p-6 flex flex-col md:flex-row md:justify-between md:h-96 md:px-20">
        <div> 
          <div className="flex flex-col md:items-start md:w-100 bg-black md:justify-start md:p-4 justify-center items-center">
            <h1 className="text-white font-bold">
              Sampath Bank PLC
            </h1>
            <p className="mt-2 text-white text-left w-80">
              Sampath Vishwa is a unique internet banking facility offered by 
              Sampath Bank, providing you with a seamless and 
              comprehensive online banking experience.
              Unlike traditional internet banking, Sampath Vishwa delivers a fully
              integrated process that conveniently fits into your busy lifestyle.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/Sampathbankplc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 transition-transform duration-300 hover:scale-110"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://x.com/SampathBankPLC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white transition-transform duration-300 hover:scale-110"
              >
                <FaXTwitter className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/user/SampathBankPLC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 transition-transform duration-300 hover:scale-110"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
            <div className="md:mt-5 hidden md:block ">
              <a
                href="https://www.sampath.lk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <div className="flex flex-col md:flex-row bg-black w-full">
            <div className="flex flex-col md:items-start md:w-48 bg-black md:h-64 justify-start md:p-4 w-80">
              <h1 className="text-white font-bold -mt-2.5">
                Links
              </h1>
              <div className="flex flex-col gap-4 mt-3">
                <a
                  href="https://www.sampath.lk/api/uploads/English_a8049a67e5_44ce79e38c_7f0e02ac75.jpg"
                  className="text-white underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Important Notice
                </a>
                <a href="https://www.sampath.lk/rates-and-charges?activeTab=interest-rates-local" className="text-white underline" target="_blank" rel="noopener noreferrer">Interest Rate</a>
                <a href="https://www.sampath.lk/rates-and-charges?activeTab=exchange-rates" className="text-white underline" target="_blank" rel="noopener noreferrer">Exchange Rate</a>
                <a href="https://www.sampath.lk/sampath-cards/credit-card-offer?firstTab=hotels" className="text-white underline" target="_blank" rel="noopener noreferrer">Promotions</a>
                <a href="https://www.sampathvishwa.com/downloads/svr_service_charges.pdf" className="text-white underline" target="_blank" rel="noopener noreferrer">Service Charges</a>
                <a href="https://www.sampath.lk/api/uploads/Sampath_Bank_Accessibility_Policy_EST_3_3368267a24_f750045709_7095d6521a.pdf" className="text-white underline" target="_blank" rel="noopener noreferrer">Accessibility Policy</a>
              </div>
            </div>
            <div className="flex flex-col items-start w-20 md:w-48 bg-black h-64 justify-start p-4">
              <h1 className="text-white font-bold -mt-2.5">
                Downloads
              </h1>
              <div className="flex flex-col gap-4 mt-3">
                <a
                  href="https://apps.apple.com/ly/app/sampath-vishwa-retail/id6478132816"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/appstore.jpeg" alt="App Store" width={100} height={100} />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=lk.sampath.sampathvishwa&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/playstore.jpeg" alt="Google Play" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start w-20 md:w-48 bg-black h-64 justify-start md:p-4">
              <h1 className="text-white font-bold -mt-2.5">
                Location
              </h1>
              <div className="flex flex-col gap-2 mt-3">
                <span className="text-white">Sampth Bank PLC,</span>
                <span className="text-white"> No 110, Sir James Peiris Mawatha,</span>
                <span className="text-white"> Colombo 02, Sri Lanka</span>
                <span className="text-white"> Main Hotline 1332/<br />+94 2 222222</span>
                <span className="text-white">Email:info@.sampath.lk</span>
              </div>
            </div>
          </div>
          <div className="items-center j  flex md:hidden ">
              <a
                href="https://www.sampath.lk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                Privacy Policy
              </a>
            </div>
          <div className="bg-black mt-9 text-center py-3">
            <h3 className="text-white">Sampath Vishwa Retail V4.0.0   © 2026  Sampath Bank PLC | All rights reserved. </h3>
          </div>
        </div>
      </div>
    </>
  )
}