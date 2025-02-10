
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Services from "./Services"
import Stats from "./Stats"
import a1 from "../../assets/images/a4.jpg"
import a2 from "../../assets/images/a5.jpg"
import a3 from "../../assets/images/a7.jpg"

const heroSlides = [
  {
    title: "Revolutionizing E-commerce",
    content: "Optimizing revenue and traffic across every digital channel.",
    image: a1,
  },
  {
    title: "Smart Growth Solutions",
    content: "10+ years of e-commerce excellence ",
    image: a2,
  },
  {
    title: "Global Reach",
    content: "Operating across 22 countries with 200M+ SKUs",
    image: a3,
  },
]

const LifecycleProgress = () => {
  const stages = [
    { number: "01", title: "Vibrant Work Culture", color: "blue" },
    { number: "02", title: "Celebrating Excellence", color: "blue" },
    { number: "03", title: "Work Life Balance", color: "purple" },
    { number: "04", title: "Accelerated Growth", color: "orange" },
    { number: "05", title: "Fairness Leadership", color: "orange" },
  ]

  return (
    <div className="relative py-20">
      <svg className="absolute w-full h-full top-0 left-0 -z-10" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <path
          d="M0,150 C300,50 600,250 1200,150"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          className="path-animation"
        />
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </svg>

      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-center w-full md:w-48 mb-8 md:mb-0"
          >
            <div
              className={`text-5xl font-bold bg-gradient-to-r from-${stage.color}-500 to-${stage.color}-400 bg-clip-text text-transparent`}
            >
              {stage.number}
            </div>
            <div className="mt-2 font-semibold">{stage.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const TextAnimation = ({ children }) => {
  return (
    <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.span>
  )
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [expandedMobileLinks, setExpandedMobileLinks] = useState({}) // Added state for mobile menu

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const toggleMobileSubMenu = (linkName) => {
    setExpandedMobileLinks((prev) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          {heroSlides.map(
            (slide, index) =>
              index === activeSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-[#000000a1]  bg-opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4 md:px-8">
                      <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-5xl font-bold mb-4"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-xl text-[#ffffffc9] mb-8"
                      >
                        {slide.content}
                      </motion.p>
                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* Stats */}
      <Stats />

      {/* Services */}
      <Services />

      {/* Lifecycle Progress */}
      <LifecycleProgress />

      {/* About  */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">Transforming E-commerce</h2>
              <p className="text-gray-400 mb-8">
                With over a decade of experience in e-commerce, we've helped thousands of merchants optimize their
                digital presence and maximize revenue across multiple channels and devices. Our innovative solutions and
                dedicated team of experts ensure your success in the ever-evolving digital marketplace.
              </p>
              <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-md text-white font-medium inline-flex items-center group">
                Discover More
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={a1}
                alt="About Us"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-20 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
