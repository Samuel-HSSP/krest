export default function Partners() {
return (
<div id="team">
<h3 className="text-2xl font-semibold">Meet the Partners</h3>
<p className="mt-2 text-sm text-slate-600">Led by strategists, backed by specialists.</p>


<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="k-card">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-krest-500 text-white flex items-center justify-center">A</div>
<div>
<div className="font-semibold">Kayode — Partner, Strategy & Finance</div>
<div className="text-sm text-slate-600">10+ years advising startups & NGOs across Africa.</div>
</div>
</div>
</div>


<div className="k-card">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-krest-500 text-white flex items-center justify-center">B</div>
<div>
<div className="font-semibold">Kolawole Samuel Adebayo — Partner, Narrative & Brand</div>
<div className="text-sm text-slate-600">Ghostwriter and brand strategist for executives and creators.</div>
</div>
</div>
</div>


<div className="k-card">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-krest-500 text-white flex items-center justify-center">C</div>
<div>
<div className="font-semibold">Creative Lead</div>
<div className="text-sm text-slate-600">Design systems, visual identity and pitch deck mastery.</div>
</div>
</div>
</div>
</div>


</div>
)
}