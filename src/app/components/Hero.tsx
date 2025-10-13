'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'


const container = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
}
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }


export default function Hero() {
return (
<section className="hero-grad py-20 px-5">
<div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<motion.div initial="hidden" animate="show" variants={container}>
<motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold leading-tight">
Strategy. Narrative. Execution.
</motion.h1>
<motion.p variants={item} className="mt-6 text-lg max-w-xl">
We partner with founders, executives, and organizations to turn ideas into investor-ready plans, compelling narratives, and premium brands that scale.
</motion.p>


<motion.div variants={item} className="mt-8 flex gap-3">
<Link href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 font-medium shadow">Book a Discovery</Link>
<a href="#services" className="inline-flex items-center gap-2 px-4 py-3 rounded-md border">Our Services <ArrowRight size={16} /></a>
</motion.div>


<motion.div variants={item} className="mt-8 text-sm text-slate-600">
<strong>Partner-led consulting</strong> for leaders who want clarity, structure, and results.
</motion.div>
</motion.div>


<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="k-card">
<h3 className="text-lg font-semibold">Featured: Krest Launch</h3>
<p className="mt-2 text-sm text-slate-600">Investor-ready business plan, financial model, and pitch deck — delivered in 4 weeks.</p>


<div className="mt-4 grid grid-cols-2 gap-3">
<div className="p-3 bg-gray-50 rounded">
<div className="text-xs uppercase text-slate-500">Time</div>
<div className="font-semibold">4 weeks</div>
</div>
<div className="p-3 bg-gray-50 rounded">
<div className="text-xs uppercase text-slate-500">Outcome</div>
<div className="font-semibold">Investor-ready kit</div>
</div>
</div>


<div className="mt-5 flex gap-3">
<a className="inline-flex items-center rounded-md px-4 py-2 border" href="#solutions">See Details</a>
<a className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-white" href="#contact">Start a Project</a>
</div>
</motion.div>
</div>
</section>
)
};