'use client'
import { Briefcase, PieChart, Feather, Layers } from 'lucide-react'
import { motion } from 'framer-motion'


const pillars = [
{
title: 'Career & Executive Advancement',
desc: 'CVs, SOPs, essays and interview coaching to help you secure roles, scholarships, and board seats.',
icon: Briefcase
},
{
title: 'Strategy & Finance',
desc: 'Investor-ready business plans, feasibility studies, and robust financial modeling.',
icon: PieChart
},
{
title: 'Narrative & Thought Leadership',
desc: 'Ghostwriting, editorial strategy and content that builds trust and authority.',
icon: Feather
},
{
title: 'Brand & Experience Studio',
desc: 'Visual identity, pitch decks and branded assets for premium positioning.',
icon: Layers
}
]


export default function Pillars() {
return (
<div className="grid md:grid-cols-2 gap-6 px-5">
{pillars.map((p, i) => (
<motion.div key={p.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="k-card">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-krest-50">
<p.icon size={20} />
</div>
<div>
<h4 className="text-lg font-semibold">{p.title}</h4>
<p className="mt-2 text-sm text-slate-600">{p.desc}</p>
</div>
</div>
</motion.div>
))}
</div>
)
};