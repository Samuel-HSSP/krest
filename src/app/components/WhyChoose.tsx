'use client'
import { Check } from 'lucide-react';


const reasons = [
{ title: 'Partner-Led Approach', text: 'Senior consultants lead every project from discovery to delivery.' },
{ title: 'Structured Frameworks', text: 'Proven methodologies that deliver clear outcomes.' },
{ title: 'Strategy Meets Craft', text: 'Financial clarity and creative excellence under one roof.' },
{ title: 'Global Standard, Local Insight', text: 'Serving clients across Africa and beyond.' }
]


export default function WhyChoose() {
return (
<div className="grid md:grid-cols-2 gap-6 items-start px-5">
<div>
<h2 className="text-2xl font-bold">Why Leaders Choose Krest</h2>
<p className="mt-4 text-slate-600">We don’t just deliver documents. We help you build the narrative and strategy that gets results.</p>


<div className="mt-6 space-y-3">
{reasons.map(r => (
<div key={r.title} className="flex items-start gap-3">
<div className="p-2 rounded-full bg-krest-50">
<Check size={16} />
</div>
<div>
<div className="font-semibold">{r.title}</div>
<div className="text-sm text-slate-600">{r.text}</div>
</div>
</div>
))}
</div>
</div>


<div className="k-card mt-5">
<h3 className="text-lg font-semibold">Our Process</h3>
<ol className="mt-4 text-sm space-y-3 text-slate-700">
<li><strong>Discovery</strong> — 30-min partner call + brief workshop.</li>
<li><strong>Scope & Proposal</strong> — fixed deliverables and timeline.</li>
<li><strong>Execution</strong> — weekly check-ins and drafts.</li>
<li><strong>Partner Review</strong> — final sign-off and delivery.</li>
<li><strong>Follow-up</strong> — 30-day check-in and success review.</li>
</ol>
<div className="mt-6">
<a className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-white" href="#contact">Book Discovery Workshop</a>
</div>
</div>
</div>
)
}