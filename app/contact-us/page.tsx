"use client"
import { useEffect, useState } from "react";
import Contact from "../ui/Contact";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import WhatsappChat from "../ui/WhatsappChat";

function ContactUs() {
  return (
    <main className="w-scrren  relative h-screen overflow-x-hidden">
      <div className=" flex flex-col ">
        <NavBar />
        <div className="flex flex-col gap-y-6 pt-4 font-semibold">
          <div className="-mt-6">
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
      <WhatsappChat />
    </main>
  );
}
export default ContactUs;
