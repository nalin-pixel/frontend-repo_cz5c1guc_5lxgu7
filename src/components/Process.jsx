import { motion } from 'framer-motion'
import { Sprout, Factory, Truck, Ship } from 'lucide-react'

const steps = [
  { icon: Sprout, title: 'Sourcing', text: 'Direct partnerships with farmer groups and FPOs across India.' },
  { icon: Factory, title: 'Processing', text: 'Cleaning, grading, roasting, and packaging at certified units.' },
  { icon: Truck, title: 'Logistics', text: 'Efficient inland movement, customs, and port handling.' },
  { icon: Ship, title: 'Global Shipping', text: 'End‑to‑end export management to 70+ ports worldwide.' },
]

export default function Process(){
  return (
    <section id="process" className="relative py-20 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold">Our Process</motion.h2>
        <p className="text-white/70 mt-2 max-w-2xl">Transparent, traceable, and quality‑first — from farm to ship.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05*i }} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="p-2 rounded-lg bg-white/10 w-fit border border-white/10">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="mt-4 text-xl font-semibold">{s.title}</div>
              <div className="mt-2 text-white/70 text-sm">{s.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
