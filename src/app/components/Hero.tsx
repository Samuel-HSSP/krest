// 'use client'
// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { ArrowRight } from 'lucide-react'


// const container = {
// hidden: { opacity: 0, y: 20 },
// show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
// }
// const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }


// export default function Hero() {
// return (
// <section className="hero-grad py-20 px-5">
// <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
// <motion.div initial="hidden" animate="show" variants={container}>
// <motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold leading-tight">
// Strategy. Narrative. Execution.
// </motion.h1>
// <motion.p variants={item} className="mt-6 text-lg max-w-xl">
// We partner with founders, executives, and organizations to turn ideas into investor-ready plans, compelling narratives, and premium brands that scale.
// </motion.p>


// <motion.div variants={item} className="mt-8 flex gap-3">
// <Link href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 font-medium shadow">Book a Discovery</Link>
// <a href="#services" className="inline-flex items-center gap-2 px-4 py-3 rounded-md border">Our Services <ArrowRight size={16} /></a>
// </motion.div>


// <motion.div variants={item} className="mt-8 text-sm text-slate-600">
// <strong>Partner-led consulting</strong> for leaders who want clarity, structure, and results.
// </motion.div>
// </motion.div>


// <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="k-card">
// <h3 className="text-lg font-semibold">Featured: Krest Launch</h3>
// <p className="mt-2 text-sm text-slate-600">Investor-ready business plan, financial model, and pitch deck — delivered in 4 weeks.</p>


// <div className="mt-4 grid grid-cols-2 gap-3">
// <div className="p-3 bg-gray-50 rounded">
// <div className="text-xs uppercase text-slate-500">Time</div>
// <div className="font-semibold">4 weeks</div>
// </div>
// <div className="p-3 bg-gray-50 rounded">
// <div className="text-xs uppercase text-slate-500">Outcome</div>
// <div className="font-semibold">Investor-ready kit</div>
// </div>
// </div>


// <div className="mt-5 flex gap-3">
// <a className="inline-flex items-center rounded-md px-4 py-2 border" href="#solutions">See Details</a>
// <a className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-white" href="#contact">Start a Project</a>
// </div>
// </motion.div>
// </div>
// </section>
// )
// };

'use client'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// const container = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { staggerChildren: 0.08, duration: 0.8, ease: 'easeOut' },
//   },
// }
// const item = {
//   hidden: { opacity: 0, y: 15 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
// }

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // ✅ must be an array (no strings)
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-6 bg-gradient-to-br from-[#0a0a0a] via-[#101820] to-[#0b0e10] text-white">
      {/* Subtle glowing overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,198,0.1),transparent_60%)]" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-[#00ffc6] to-white bg-clip-text text-transparent"
          >
            Strategy. Narrative. Execution.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg max-w-xl text-gray-300 leading-relaxed"
          >
            We partner with founders, executives, and organizations to turn ideas into investor-ready plans, compelling narratives, and premium brands that scale.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#00ffc6] text-black font-semibold px-6 py-3 shadow-[0_0_20px_rgba(0,255,198,0.3)] hover:shadow-[0_0_40px_rgba(0,255,198,0.6)] transition-all duration-300"
            >
              Book a Discovery
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-600 hover:border-[#00ffc6] hover:text-[#00ffc6] transition-all"
            >
              Our Services <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 text-sm text-gray-500 font-medium"
          >
            <strong className="text-[#00ffc6]">Partner-led consulting</strong> for leaders who want clarity, structure, and results.
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-[#00ffc6]/50 transition-all shadow-[0_0_30px_rgba(0,255,198,0.1)]"
        >
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white/90">
              Featured: Krest Launch
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Investor-ready business plan, financial model, and pitch deck — delivered in 4 weeks.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs uppercase text-gray-400">Time</div>
                <div className="font-semibold text-white">4 weeks</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs uppercase text-gray-400">Outcome</div>
                <div className="font-semibold text-white">Investor-ready kit</div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                className="inline-flex items-center rounded-full px-5 py-2 border border-gray-700 hover:border-[#00ffc6] hover:text-[#00ffc6] transition-all"
                href="#solutions"
              >
                See Details
              </a>
              <a
                className="inline-flex items-center rounded-full px-5 py-2 bg-[#00ffc6] text-black font-medium shadow-[0_0_20px_rgba(0,255,198,0.3)] hover:shadow-[0_0_40px_rgba(0,255,198,0.6)] transition-all"
                href="#contact"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#00ffc6]/20 blur-3xl"
      />
    </section>
  )
}
