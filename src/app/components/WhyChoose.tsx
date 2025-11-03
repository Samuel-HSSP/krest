// 'use client'
// import { Check } from 'lucide-react';


// const reasons = [
// { title: 'Partner-Led Approach', text: 'Senior consultants lead every project from discovery to delivery.' },
// { title: 'Structured Frameworks', text: 'Proven methodologies that deliver clear outcomes.' },
// { title: 'Strategy Meets Craft', text: 'Financial clarity and creative excellence under one roof.' },
// { title: 'Global Standard, Local Insight', text: 'Serving clients across Africa and beyond.' }
// ]


// export default function WhyChoose() {
// return (
// <div className="grid md:grid-cols-2 gap-6 items-start px-5">
// <div>
// <h2 className="text-2xl font-bold">Why Leaders Choose Krest</h2>
// <p className="mt-4 text-slate-600">We don’t just deliver documents. We help you build the narrative and strategy that gets results.</p>


// <div className="mt-6 space-y-3">
// {reasons.map(r => (
// <div key={r.title} className="flex items-start gap-3">
// <div className="p-2 rounded-full bg-krest-50">
// <Check size={16} />
// </div>
// <div>
// <div className="font-semibold">{r.title}</div>
// <div className="text-sm text-slate-600">{r.text}</div>
// </div>
// </div>
// ))}
// </div>
// </div>


// <div className="k-card mt-5">
// <h3 className="text-lg font-semibold">Our Process</h3>
// <ol className="mt-4 text-sm space-y-3 text-slate-700">
// <li><strong>Discovery</strong> — 30-min partner call + brief workshop.</li>
// <li><strong>Scope & Proposal</strong> — fixed deliverables and timeline.</li>
// <li><strong>Execution</strong> — weekly check-ins and drafts.</li>
// <li><strong>Partner Review</strong> — final sign-off and delivery.</li>
// <li><strong>Follow-up</strong> — 30-day check-in and success review.</li>
// </ol>
// <div className="mt-6">
// <a className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-white" href="#contact">Book Discovery Workshop</a>
// </div>
// </div>
// </div>
// )
// }

'use client'
import { Check } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const reasons = [
  {
    title: 'Partner-Led Approach',
    text: 'Senior consultants lead every project from discovery to delivery.',
  },
  {
    title: 'Structured Frameworks',
    text: 'Proven methodologies that deliver clear outcomes.',
  },
  {
    title: 'Strategy Meets Craft',
    text: 'Financial clarity and creative excellence under one roof.',
  },
  {
    title: 'Global Standard, Local Insight',
    text: 'Serving clients across Africa and beyond.',
  },
]

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function WhyChoose() {
  return (
    <div className="relative py-24 bg-[#010814] text-white overflow-hidden">
      {/* Soft background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,136,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,102,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start px-6">
        {/* Left section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeIn}
            custom={0}
            className="text-4xl font-extrabold mb-4 tracking-tight"
          >
            Why Leaders <span className="text-[#00FF88]">Choose Krest</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            custom={1}
            className="text-gray-400 max-w-md"
          >
            We don’t just deliver documents. We help you build the narrative and
            strategy that gets results.
          </motion.p>

          <div className="mt-8 space-y-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                variants={fadeIn}
                custom={i + 2}
                className="flex items-start gap-4"
              >
                <div className="p-2 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/40 text-[#00FF88]">
                  <Check size={18} />
                </div>
                <div>
                  <div className="font-semibold text-base">{r.title}</div>
                  <div className="text-sm text-gray-400 mt-1">{r.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right section */}
        <motion.div
          variants={fadeIn}
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl bg-[#0a1a2f]/60 backdrop-blur-md p-8 border border-[#00FF88]/10 shadow-[0_0_25px_rgba(0,255,136,0.05)] hover:border-[#00FF88]/30 transition-all duration-700"
        >
          <h3 className="text-xl font-semibold mb-4">Our Process</h3>
          <ol className="text-sm space-y-4 text-gray-300 list-decimal list-inside">
            <li>
              <strong className="text-white">Discovery</strong> — 30-min partner
              call + brief workshop.
            </li>
            <li>
              <strong className="text-white">Scope & Proposal</strong> — fixed
              deliverables and timeline.
            </li>
            <li>
              <strong className="text-white">Execution</strong> — weekly
              check-ins and drafts.
            </li>
            <li>
              <strong className="text-white">Partner Review</strong> — final
              sign-off and delivery.
            </li>
            <li>
              <strong className="text-white">Follow-up</strong> — 30-day
              check-in and success review.
            </li>
          </ol>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#00FF88] text-black font-medium px-5 py-2 hover:bg-[#00e676] transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >
              Book Discovery Workshop
            </a>
          </div>

          {/* Glow accent */}
          <div className="absolute -bottom-2 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00FF88]/40 to-transparent rounded-full blur-[2px]" />
        </motion.div>
      </div>
    </div>
  )
}
