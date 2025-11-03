// import Hero from '@/app/components/Hero'
// import Pillars from '@/app/components/Pillars'
// import SignatureSolutions from '@/app/components/SignatureSolutions'
// import WhyChoose from '@/app/components/WhyChoose'
// import Partners from '@/app/components/Partners'
// import Footer from '@/app/components/Footer'
// import Navbar from './components/Navbar'


// export default function Home() {
// return (
// <main className='flex flex-col items-center'>
//   <Navbar />


//   <Hero />

//   <section id="services" className="container py-14">
//     <Pillars />
//   </section>


//   <section id="solutions" className="bg-gray-50 py-14">
//     <div className="container">
//       <SignatureSolutions />
//     </div>
//   </section>


//   <section className="container py-14">
//     <WhyChoose />
//   </section>


//   <section className="container py-14">
//     <Partners />
//   </section>


//   <Footer />
// </main>
// )
// };


'use client'

import Hero from '@/app/components/Hero'
import Pillars from '@/app/components/Pillars'
import SignatureSolutions from '@/app/components/SignatureSolutions'
import WhyChoose from '@/app/components/WhyChoose'
import Partners from '@/app/components/Partners'
import Footer from '@/app/components/Footer'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#010814] text-white overflow-hidden">
      <Navbar />

      {/* Hero section */}
      <section className="w-full relative">
        <Hero />
        {/* background gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,136,0.05),transparent_60%)] pointer-events-none" />
      </section>

      {/* Pillars */}
      <section id="services" className="relative py-24 w-full max-w-6xl mx-auto px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,102,255,0.05),transparent_60%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <Pillars />
        </motion.div>
      </section>

      {/* Signature Solutions */}
      <section id="solutions" className="relative py-24 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#010814] via-[#04122A] to-[#010814]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto px-6"
        >
          <SignatureSolutions />
        </motion.div>
      </section>

      {/* Why Choose Section */}
      <section id="why" className="w-full">
        <WhyChoose />
      </section>

      {/* Partners */}
      <section id="team" className="relative py-24 w-full max-w-6xl mx-auto px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,136,0.05),transparent_60%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <Partners />
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
