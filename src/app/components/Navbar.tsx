"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Krest", href: "#why" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-[#001F3F]/90 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-white tracking-wide">Krest</span>

        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#00FF88] transition-colors text-white"
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-[#00FF88] text-black hover:bg-[#00cc6d]">
            Book a Call
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col bg-[#001F3F] px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#00FF88] text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-[#00FF88] text-black hover:bg-[#00cc6d] w-full">
            Book a Call
          </Button>
        </div>
      )}
    </nav>
  );
}
