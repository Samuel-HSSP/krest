// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const navItems = [
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Why Krest", href: "#why" },
//   { label: "Team", href: "#team" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 w-full bg-[#001F3F]/90 backdrop-blur-lg z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <span className="text-2xl font-bold text-white tracking-wide">Krest</span>

//         <div className="hidden md:flex space-x-6 items-center">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="hover:text-[#00FF88] transition-colors text-white"
//             >
//               {item.label}
//             </a>
//           ))}
//           <Button className="bg-[#00FF88] text-black hover:bg-[#00cc6d]">
//             Book a Call
//           </Button>
//         </div>

//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {open ? <X className="text-white" /> : <Menu className="text-white" />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden flex flex-col bg-[#001F3F] px-4 pb-4 space-y-3">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="hover:text-[#00FF88] text-white"
//               onClick={() => setOpen(false)}
//             >
//               {item.label}
//             </a>
//           ))}
//           <Button className="bg-[#00FF88] text-black hover:bg-[#00cc6d] w-full">
//             Book a Call
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// }


"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Krest", href: "#why" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10 shadow-[0_0_40px_rgba(0,255,136,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Brand */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-[#00FF88] via-[#00ccff] to-white bg-clip-text text-transparent cursor-pointer"
        >
          Krest
        </motion.span>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="relative text-gray-300 hover:text-[#00FF88] transition-all font-medium tracking-wide group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#00FF88] to-[#00ccff] transition-all group-hover:w-full"></span>
            </motion.a>
          ))}

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-gradient-to-r from-[#00FF88] to-[#00ccff] text-black font-semibold hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all">
              Book a Call
            </Button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:scale-110 transition-transform"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-black/80 to-[#001a2b]/90 backdrop-blur-xl border-t border-white/10 px-5 pb-5 space-y-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ x: 5, color: "#00FF88" }}
                transition={{ duration: 0.2 }}
                className="block text-gray-300 text-lg font-medium tracking-wide"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}

            <Button className="w-full bg-gradient-to-r from-[#00FF88] to-[#00ccff] text-black font-semibold hover:shadow-[0_0_25px_rgba(0,255,136,0.4)]">
              Book a Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
