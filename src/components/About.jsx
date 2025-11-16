import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-bold">About Indigo Exports</h2>
          <p className="text-white/80 mt-4">We are an India‑based export house focused on home‑grown agricultural products. Our network spans farmer groups, primary processing units, QA labs, and logistics partners to ensure dependable deliveries.</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {["FSSAI & APEDA Registered","End‑to‑end Traceability","Flexible MOQ & Private Label","Robust QA & Documentation"].map((x,i)=>(
              <motion.div key={x} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05*i }} className="p-4 rounded-xl bg-white/10 border border-white/10">
                {x}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-80 rounded-2xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop" alt="Factory" className="absolute inset-0 w-full h-full object-cover opacity-80"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
