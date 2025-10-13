export default function Footer() {
return (
<footer id="contact" className="border-t mt-12 py-12">
<div className="container grid md:grid-cols-2 gap-6 items-start">
<div>
<h4 className="text-lg font-semibold">Krest Consulting</h4>
<p className="mt-2 text-sm text-slate-600">Partner-led strategy and craft for leaders who scale.</p>
</div>
<div>
<h5 className="font-semibold">Get in touch</h5>
<p className="mt-2 text-sm text-slate-600">Email: <a href="mailto:hello@krest.consulting" className="underline">hello@krest.consulting</a></p>
<p className="mt-2 text-sm text-slate-600">Based in Africa • Serving clients globally</p>
<div className="mt-4">
<a href="#" className="text-sm underline">Privacy</a>
</div>
</div>
</div>


<div className="container text-center mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Krest Consulting. Strategy. Narrative. Execution.</div>
</footer>
)
}