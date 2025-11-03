// export default function Footer() {
// return (
// <footer id="contact" className="border-t mt-12 py-12">
// <div className="container grid md:grid-cols-2 gap-6 items-start">
// <div>
// <h4 className="text-lg font-semibold">Krest Consulting</h4>
// <p className="mt-2 text-sm text-slate-600">Partner-led strategy and craft for leaders who scale.</p>
// </div>
// <div>
// <h5 className="font-semibold">Get in touch</h5>
// <p className="mt-2 text-sm text-slate-600">Email: <a href="mailto:hello@krest.consulting" className="underline">hello@krest.consulting</a></p>
// <p className="mt-2 text-sm text-slate-600">Based in Africa • Serving clients globally</p>
// <div className="mt-4">
// <a href="#" className="text-sm underline">Privacy</a>
// </div>
// </div>
// </div>


// <div className="container text-center mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Krest Consulting. Strategy. Narrative. Execution.</div>
// </footer>
// )
// }



'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-[#010814] text-white py-20 mt-24 overflow-hidden">
      {/* Soft gradient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,136,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,102,255,0.08),transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-start"
      >
        {/* Left side */}
        <div>
          <h4 className="text-2xl font-bold tracking-tight">Krest Consulting</h4>
          <p className="mt-3 text-gray-400 max-w-sm">
            Partner-led strategy and craft for leaders who scale.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-[#00FF88] text-black font-medium px-5 py-2 hover:bg-[#00e676] transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Right side */}
        <div>
          <h5 className="font-semibold text-lg mb-3">Get in touch</h5>
          <p className="text-gray-400 text-sm">
            Email:{' '}
            <a
              href="mailto:hello@krest.consulting"
              className="text-[#00FF88] hover:underline"
            >
              hello@krest.consulting
            </a>
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Based in Africa • Serving clients globally
          </p>

          <div className="mt-5">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-[#00FF88] transition-all underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </motion.div>

      {/* Divider glow */}
      <div className="relative mt-16 max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#00FF88]/30 to-transparent rounded-full" />

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="relative text-center mt-10 text-xs text-gray-500"
      >
        © {new Date().getFullYear()} Krest Consulting — Strategy. Narrative. Execution.
      </motion.div>
    </footer>
  )
}
