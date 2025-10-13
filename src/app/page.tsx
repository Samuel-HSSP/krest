import Hero from '@/app/components/Hero'
import Pillars from '@/app/components/Pillars'
import SignatureSolutions from '@/app/components/SignatureSolutions'
import WhyChoose from '@/app/components/WhyChoose'
import Partners from '@/app/components/Partners'
import Footer from '@/app/components/Footer'
import Navbar from './components/Navbar'


export default function Home() {
return (
<main className='flex flex-col items-center'>
  {/* <header className="container pt-8">
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-krest-500 to-krest-700 flex items-center justify-center text-white font-semibold">K</div>
        <div className="font-semibold">Krest Consulting</div>
      </div>
      <div className="flex items-center gap-4">
        <a className="text-sm hover:underline" href="#services">Services</a>
        <a className="text-sm hover:underline" href="#solutions">Solutions</a>
        <a className="text-sm hover:underline" href="#team">Team</a>
        <a className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium" href="#contact">Contact</a>
      </div>
    </nav>
  </header> */}
  <Navbar />


  <Hero />

  <section id="services" className="container py-14">
    <Pillars />
  </section>


  <section id="solutions" className="bg-gray-50 py-14">
    <div className="container">
      <SignatureSolutions />
    </div>
  </section>


  <section className="container py-14">
    <WhyChoose />
  </section>


  <section className="container py-14">
    <Partners />
  </section>


  <Footer />
</main>
)
};