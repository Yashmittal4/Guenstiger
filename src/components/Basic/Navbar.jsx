import React from 'react'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, ArrowRight, BarChart2, Network, ShoppingBag } from "lucide-react"
import a1 from "../../assets/images/logo.png"
import {Link} from 'react-router-dom'

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    {
      name: "Services",
      href: "#services",
      dropdownItems: ["Comparison Shopping", "Shopping Network", "Shopping Advertising"],
    },
    {
      name: "Company",
      href: "#company",
      dropdownItems: ["Executive Leadership", "Life at Guenstiger", "Careers"],
    },
  ]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState("")
    const [hoveredService, setHoveredService] = useState(null)
    const [expandedMobileLinks, setExpandedMobileLinks] = useState({})
    const [scrollProgress, setScrollProgress] = useState(0)
    useEffect(() => {
        
    
        const handleScroll = () => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight
          const currentScroll = window.scrollY
          setScrollProgress((currentScroll / totalScroll) * 100)
        }
    
        window.addEventListener("scroll", handleScroll)
    
        return () => {
        }
      }, [])
    
      const toggleMobileSubMenu = (linkName) => {
        setExpandedMobileLinks((prev) => ({
          ...prev,
          [linkName]: !prev[linkName],
        }))
      }


      const TextAnimation = ({ children }) => {
        return (
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {children}
          </motion.span>
        )
      }
  return (
    <>
    <div
        className="fixed top-0 left-0 h-1 bg-red-500 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      
      <nav className="fixed w-full z-40 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white">
                  <img src={a1} alt="" className="w-32" />
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <Link
                      to={link.href}
                      className={`text-gray-300 hover:text-white px-3 py-2 text-sm font-medium ${
                        activeLink === link.name ? "text-white" : ""
                      }`}
                      onClick={() => setActiveLink(link.name)}
                    >
                      {link.name}
                    </Link>
                    {link.dropdownItems && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                          {link.dropdownItems.map((item) => (
                            <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </button>
                <Link to="/login">
                <button className="border border-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:border-gray-400">
                  Login
                </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                      onClick={() => toggleMobileSubMenu(link.name)}
                    >
                      {link.name}
                      {link.dropdownItems && (
                        <ChevronRight
                          className={`w-5 h-5 transition-transform ${
                            expandedMobileLinks[link.name] ? "transform rotate-90" : ""
                          }`}
                        />
                      )}
                    </button>
                    {link.dropdownItems && expandedMobileLinks[link.name] && (
                      <div className="pl-4 space-y-1">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
    </>
  )
}

export default Navbar
