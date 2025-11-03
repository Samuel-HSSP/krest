// export default function Partners() {
// return (
// <div id="team" className="px-5">
// <h3 className="text-2xl font-semibold">Meet the Partners</h3>
// <p className="mt-2 text-sm text-slate-600">Led by strategists, backed by specialists.</p>


// <div className="mt-6 grid md:grid-cols-3 gap-6">
// <div className="k-card">
// <div className="flex items-center gap-4">
// <div className="w-14 h-14 rounded-full bg-krest-500 text-white flex items-center justify-center">A</div>
// <div>
// <div className="font-semibold">Kayode — Partner, Strategy & Finance</div>
// <div className="text-sm text-slate-600">10+ years advising startups & NGOs across Africa.</div>
// </div>
// </div>
// </div>


// <div className="k-card">
// <div className="flex items-center gap-4">
// <div className="w-14 h-14 rounded-full bg-krest-500 text-white flex items-center justify-center">B</div>
// <div>
// <div className="font-semibold">Kolawole Samuel Adebayo — Partner, Narrative & Brand</div>
// <div className="text-sm text-slate-600">Ghostwriter and brand strategist for executives and creators.</div>
// </div>
// </div>
// </div>


// <div className="k-card">
// <div className="flex items-center gap-4">
// <div className="w-14 h-14 rounded-full bg-krest-500 text-white flex items-center justify-center">C</div>
// <div>
// <div className="font-semibold">Creative Lead</div>
// <div className="text-sm text-slate-600">Design systems, visual identity and pitch deck mastery.</div>
// </div>
// </div>
// </div>
// </div>


// </div>
// )
// }


'use client'
import { motion, Variants } from 'framer-motion'

const partners = [
  {
    name: 'Kayode',
    title: 'Partner, Strategy & Finance',
    desc: '10+ years advising startups & NGOs across Africa.',
  },
  {
    name: 'Kolawole Samuel Adebayo',
    title: 'Partner, Narrative & Brand',
    desc: 'Ghostwriter and brand strategist for executives and creators.',
  },
  {
    name: 'Creative Lead',
    title: 'Design & Visual Identity',
    desc: 'Design systems, visual identity and pitch deck mastery.',
  },
]

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function Partners() {
  return (
    <section className="relative py-24 bg-[#010814] text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,136,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,102,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeIn}
            custom={0}
            className="text-4xl font-extrabold mb-3 tracking-tight"
          >
            Meet the <span className="text-[#00FF88]">Partners</span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            custom={1}
            className="text-gray-400 max-w-xl"
          >
            Led by strategists, backed by specialists.
          </motion.p>
        </motion.div>

        {/* Partner Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeIn}
              custom={i + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl bg-[#0a1a2f]/60 backdrop-blur-md border border-[#00FF88]/10 shadow-[0_0_25px_rgba(0,255,136,0.05)] hover:border-[#00FF88]/30 transition-all duration-700 p-6 group"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-[#00FF88]/20 border border-[#00FF88]/40 flex items-center justify-center text-[#00FF88] font-bold text-lg">
                {p.name[0]}
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-white">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-400">{p.title}</p>
                <p className="mt-3 text-sm text-gray-400">{p.desc}</p>
              </div>

              {/* Soft glow underline */}
              <div className="absolute -bottom-2 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#00FF88]/40 to-transparent rounded-full blur-[2px] group-hover:opacity-100 opacity-0 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
