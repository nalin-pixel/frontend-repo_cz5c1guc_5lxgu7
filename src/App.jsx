import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-blue-950 text-white selection:bg-white/20 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Process />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-white/80">
          <div>
            <div className="text-white font-bold text-lg">Indigo Exports</div>
            <p className="mt-2 text-sm">Premium Indian groundnuts, spices, pulses, and cold‑pressed oils. Ethical sourcing, global shipping.</p>
          </div>
          <div>
            <div className="font-semibold text-white">Quick Links</div>
            <div className="mt-2 grid gap-1 text-sm">
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#process" className="hover:text-white">Process</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white">Contact</div>
            <div className="mt-2 text-sm">
              <div>Email: hello@indigoexports.in</div>
              <div>Phone: +91‑90000‑00000</div>
              <div>India • Worldwide Shipping</div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-white/60 pb-6">© {new Date().getFullYear()} Indigo Exports. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
