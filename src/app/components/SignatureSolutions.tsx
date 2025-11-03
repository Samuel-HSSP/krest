// 'use client'
// import { motion } from 'framer-motion'


// const solutions = [
// {
// name: 'Krest Launch',
// timeframe: '4 weeks',
// bullets: ['Executive Summary', '5-year Financial Model', 'Investor Pitch Deck', 'Fundraising Memo', '60-min Rehearsal']
// },
// {
// name: 'Krest Executive',
// timeframe: '2 weeks',
// bullets: ['CV & Cover Letter', 'SOP / Personal Statement', '2 Mock Interviews', 'Interview Prep Kit']
// },
// {
// name: 'Krest Narrative',
// timeframe: 'Monthly Retainer',
// bullets: ['2 Long-form Pieces', 'LinkedIn Repackaging', 'Editorial Calendar', 'Analytics Report']
// }
// ]


// export default function SignatureSolutions() {
// return (
// <div className='px-5'>
// <div className="text-center mb-8">
// <h2 className="text-3xl font-extrabold">Productized Expertise</h2>
// <p className="mt-2 text-slate-600">Signature offerings with clear deliverables, partner oversight, and fixed timelines.</p>
// </div>


// <div className="grid md:grid-cols-3 gap-6">
// {solutions.map((s) => (
//     <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="k-card">
//         <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold">{s.name}</h3>
//             <div className="text-sm text-slate-500">{s.timeframe}</div>
//         </div>
//         <ul className="mt-4 space-y-2 text-sm text-slate-700">
//             {s.bullets.map((b) => (
//                 <li key={b}>• {b}</li>
//             ))}
//         </ul>
//         <div className="mt-6 flex gap-3">
//             <a className="inline-flex items-center rounded-md px-4 py-2 border" href="#contact">Learn More</a>
//             <a className="inline-flex items-center rounded-md bg-black text-white px-4 py-2" href="#contact">Start Project</a>
//         </div>
//     </motion.div>
// ))}
// </div>
// </div>
// )
// }


'use client'
import { motion, Variants } from 'framer-motion'

const solutions = [
  {
    name: 'Krest Launch',
    timeframe: '4 weeks',
    bullets: [
      'Executive Summary',
      '5-year Financial Model',
      'Investor Pitch Deck',
      'Fundraising Memo',
      '60-min Rehearsal',
    ],
  },
  {
    name: 'Krest Executive',
    timeframe: '2 weeks',
    bullets: [
      'CV & Cover Letter',
      'SOP / Personal Statement',
      '2 Mock Interviews',
      'Interview Prep Kit',
    ],
  },
  {
    name: 'Krest Narrative',
    timeframe: 'Monthly Retainer',
    bullets: [
      '2 Long-form Pieces',
      'LinkedIn Repackaging',
      'Editorial Calendar',
      'Analytics Report',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function SignatureSolutions() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-[#010814] via-[#021326] to-[#031b30] text-white overflow-hidden">
      {/* Background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(0,255,136,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,rgba(0,102,255,0.1),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
        >
          Productized <span className="text-[#00FF88]">Expertise</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-400 mb-14"
        >
          Signature offerings with clear deliverables, partner oversight, and
          fixed timelines.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {solutions.map((s, i) => (
            <motion.div
              key={s.name}
              variants={card}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
                transition: { type: 'spring', stiffness: 250 },
              }}
              className="relative rounded-2xl p-8 bg-[#0a1a2f]/60 backdrop-blur-md border border-[#00FF88]/10 hover:border-[#00FF88]/30 shadow-[0_0_25px_rgba(0,255,136,0.05)] transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <span className="text-sm text-gray-400">{s.timeframe}</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 before:content-['▹'] before:text-[#00FF88]"
                  >
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-3">
                <a
                  className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 border border-[#00FF88]/30 hover:border-[#00FF88]/60 transition-all text-sm"
                  href="#contact"
                >
                  Learn More
                </a>
                <a
                  className="inline-flex justify-center items-center w-full rounded-md bg-[#00FF88] text-black font-medium px-4 py-2 hover:bg-[#00e676] transition-all text-sm shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                  href="#contact"
                >
                  Start Project
                </a>
              </div>

              {/* Glow line */}
              <div className="absolute -bottom-2 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#00FF88]/40 to-transparent rounded-full blur-[2px]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
