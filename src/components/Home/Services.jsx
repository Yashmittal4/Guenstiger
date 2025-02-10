import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, ArrowRight, BarChart2, Network, ShoppingBag, Shield } from "lucide-react"

const services = [
    {
      title: "Comparison Shopping",
      description: "Network of high-growth comparison shopping sites across Germany and Hungary",
      icon: <BarChart2 className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Shopping Network",
      description: "Partner network of well-known websites and portals with integrated product data",
      icon: <Network className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Shopping Advertising",
      description: "Certified marketing experts managing 5,000+ merchants on Google Ads and Bing",
      icon: <ShoppingBag className="w-12 h-12" />,
      color: "from-orange-500 to-red-500",
    },
  ]

function Services() {
  return (
    <>
    <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive e-commerce solutions for your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white rounded-lg shadow-xl p-8 h-full">
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-full inline-block mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="flex items-center text-gray-900 font-medium group-hover:text-red-500 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Services
