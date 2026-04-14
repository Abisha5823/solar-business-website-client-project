import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import WhatsAppBubble from "./WhatsAppBubble.jsx";

export default function SiteLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}

