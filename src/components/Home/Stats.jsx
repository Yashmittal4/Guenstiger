import React from 'react'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Menu, X, ChevronRight, ArrowRight, BarChart2, Network, ShoppingBag, Shield } from "lucide-react"
import s1 from "../../assets/images/a3.jpg"

function Stats() {
    const [statsRef, statsInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      })
  return (
    <>
     <div ref={statsRef} className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-white mb-2">
                  {statsInView && <CountUp end={10} duration={2.5} />}+
                </div>
                <p className="text-gray-400">Years in E-commerce</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-white mb-2">
                  {statsInView && <CountUp end={5000} duration={2.5} />}+
                </div>
                <p className="text-gray-400">Merchants Worldwide</p>
              </div>
              <div className="space-y-6">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-red-500">
                        Customer Satisfaction
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-white">
                        {statsInView && <CountUp end={95} duration={2.5} />}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={statsInView ? { width: "95%" } : { width: 0 }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    />
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-500">
                        Market Coverage
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-white">
                        {statsInView && <CountUp end={85} duration={2.5} />}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={statsInView ? { width: "85%" } : { width: 0 }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={s1}
                alt="Stats"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Stats
