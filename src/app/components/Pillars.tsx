// 'use client'
// import { Briefcase, PieChart, Feather, Layers } from 'lucide-react'
// import { motion } from 'framer-motion'


// const pillars = [
// {
// title: 'Career & Executive Advancement',
// desc: 'CVs, SOPs, essays and interview coaching to help you secure roles, scholarships, and board seats.',
// icon: Briefcase
// },
// {
// title: 'Strategy & Finance',
// desc: 'Investor-ready business plans, feasibility studies, and robust financial modeling.',
// icon: PieChart
// },
// {
// title: 'Narrative & Thought Leadership',
// desc: 'Ghostwriting, editorial strategy and content that builds trust and authority.',
// icon: Feather
// },
// {
// title: 'Brand & Experience Studio',
// desc: 'Visual identity, pitch decks and branded assets for premium positioning.',
// icon: Layers
// }
// ]


// export default function Pillars() {
// return (
// <div className="grid md:grid-cols-2 gap-6 px-5">
// {pillars.map((p, i) => (
// <motion.div key={p.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="k-card">
// <div className="flex items-start gap-4">
// <div className="p-3 rounded-lg bg-krest-50">
// <p.icon size={20} />
// </div>
// <div>
// <h4 className="text-lg font-semibold">{p.title}</h4>
// <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
// </div>
// </div>
// </motion.div>
// ))}
// </div>
// )
// };

'use client'
import { Briefcase, PieChart, Feather, Layers } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const pillars = [
  {
    title: 'Career & Executive Advancement',
    desc: 'CVs, SOPs, essays and interview coaching to help you secure roles, scholarships, and board seats.',
    icon: Briefcase,
  },
  {
    title: 'Strategy & Finance',
    desc: 'Investor-ready business plans, feasibility studies, and robust financial modeling.',
    icon: PieChart,
  },
  {
    title: 'Narrative & Thought Leadership',
    desc: 'Ghostwriting, editorial strategy and content that builds trust and authority.',
    icon: Feather,
  },
  {
    title: 'Brand & Experience Studio',
    desc: 'Visual identity, pitch decks and branded assets for premium positioning.',
    icon: Layers,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Pillars() {
  return (
    <div className="relative py-16 bg-gradient-to-b from-[#010814] via-[#021326] to-[#031b30] text-white overflow-hidden">
      {/* Subtle background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,102,255,0.1),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-5xl font-bold mb-12 tracking-tight"
        >
          The <span className="text-[#00FF88]">Four Pillars</span> of Krest
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={item}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="relative p-6 rounded-2xl bg-[#0a1a2f]/60 backdrop-blur-md border border-[#00FF88]/10 hover:border-[#00FF88]/40 shadow-[0_0_25px_rgba(0,255,136,0.05)] transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#00FF88]/10 text-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                  <p.icon size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-1">
                    {p.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Soft glow under card */}
              <div className="absolute -bottom-2 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#00FF88]/40 to-transparent rounded-full blur-[2px]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
