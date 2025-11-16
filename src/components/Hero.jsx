import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
      {/* Decorative gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            Trusted Indian Agro Exports
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Premium Home‑Grown Products from India
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 text-lg text-white/80 max-w-xl">
            From groundnuts and spices to pulses and cold‑pressed oils — ethically sourced, quality checked, and shipped worldwide with care.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="px-6 py-3 rounded-lg bg-white text-blue-900 font-semibold shadow hover:shadow-lg transition">Explore Products</a>
            <a href="#contact" className="px-6 py-3 rounded-lg bg-blue-500/30 border border-white/30 backdrop-blur font-semibold hover:bg-blue-500/40 transition">Request a Quote</a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ['70+','Global Ports'],
              ['120K','MT Shipped'],
              ['99.9%','On‑time']
            ].map(([k,v],i)=>(
              <motion.div key={k} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1*i }} className="p-4 rounded-xl bg-white/10 border border-white/10">
                <div className="text-2xl font-bold">{k}</div>
                <div className="text-white/70 text-sm">{v}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <div className="absolute inset-0 opacity-50">
              <Spline scene="https://prod.spline.design/5Br4vQxq4V2BbiIe/scene.splinecode" />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
          </motion.div>
        </div>
      </div>

      {/* Floating badges */}
      <AnimatePresence>
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.6, type: 'spring' }} className="hidden md:flex items-center gap-3 absolute left-8 top-28 bg-white/10 border border-white/20 backdrop-blur px-3 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
          FSSAI Certified Facilities
        </motion.div>
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.7, type: 'spring' }} className="hidden md:block absolute right-8 top-40 bg-white/10 border border-white/20 backdrop-blur px-3 py-2 rounded-full">
          Non‑GMO • 100% Traceable
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
