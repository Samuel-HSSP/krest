'use client'
import { motion } from 'framer-motion'


const solutions = [
{
name: 'Krest Launch',
timeframe: '4 weeks',
bullets: ['Executive Summary', '5-year Financial Model', 'Investor Pitch Deck', 'Fundraising Memo', '60-min Rehearsal']
},
{
name: 'Krest Executive',
timeframe: '2 weeks',
bullets: ['CV & Cover Letter', 'SOP / Personal Statement', '2 Mock Interviews', 'Interview Prep Kit']
},
{
name: 'Krest Narrative',
timeframe: 'Monthly Retainer',
bullets: ['2 Long-form Pieces', 'LinkedIn Repackaging', 'Editorial Calendar', 'Analytics Report']
}
]


export default function SignatureSolutions() {
return (
<div className='px-5'>
<div className="text-center mb-8">
<h2 className="text-3xl font-extrabold">Productized Expertise</h2>
<p className="mt-2 text-slate-600">Signature offerings with clear deliverables, partner oversight, and fixed timelines.</p>
</div>


<div className="grid md:grid-cols-3 gap-6">
{solutions.map((s) => (
    <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="k-card">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{s.name}</h3>
            <div className="text-sm text-slate-500">{s.timeframe}</div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
            ))}
        </ul>
        <div className="mt-6 flex gap-3">
            <a className="inline-flex items-center rounded-md px-4 py-2 border" href="#contact">Learn More</a>
            <a className="inline-flex items-center rounded-md bg-black text-white px-4 py-2" href="#contact">Start Project</a>
        </div>
    </motion.div>
))}
</div>
</div>
)
}