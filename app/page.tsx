"use client"

import { Mail, Phone, MapPin, X, Instagram, Linkedin, Globe, MessageCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function DigitalCard() {
  const [showDetails, setShowDetails] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const specialties = ["School Bags", "Sports Bags", "Ladies' Bags", "Tote Bags", "Custom & Promotional Bags"]

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/boscobags.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bosco-bags",
      color: "hover:text-blue-600",
    },
    {
      icon: Globe,
      label: "Website",
      url: "https://bosco-bags.vercel.app/",
      color: "hover:text-primary",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/919846127455",
      color: "hover:text-green-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800">
        {/* Animated gradient defs */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0033CC" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00CCFF" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00CCFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0033CC" stopOpacity="0.03" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Animated geometric shapes */}
        <circle cx="100" cy="100" r="150" fill="url(#grad1)" className="animate-pulse" />
        <circle
          cx="1100"
          cy="700"
          r="200"
          fill="url(#grad2)"
          style={{ animationDelay: "1s" }}
          className="animate-pulse"
        />

        {/* Animated lines */}
        <path
          d="M 0 400 Q 300 300 600 400 T 1200 400"
          stroke="#0033CC"
          strokeWidth="2"
          fill="none"
          opacity="0.15"
          className="animate-draw"
        />
        <path
          d="M 0 200 Q 300 100 600 200 T 1200 200"
          stroke="#00CCFF"
          strokeWidth="1.5"
          fill="none"
          opacity="0.1"
          className="animate-draw-reverse"
        />

        {/* Animated dots */}
        <circle cx="200" cy="150" r="3" fill="#0033CC" opacity="0.6" className="animate-float" />
        <circle
          cx="1000"
          cy="650"
          r="3"
          fill="#00CCFF"
          opacity="0.6"
          style={{ animationDelay: "0.5s" }}
          className="animate-float"
        />
        <circle
          cx="600"
          cy="400"
          r="2"
          fill="#0033CC"
          opacity="0.4"
          style={{ animationDelay: "1s" }}
          className="animate-float"
        />
      </svg>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <h1
              className="text-5xl md:text-6xl font-black text-white mb-2 animate-fade-in-up"
              style={{ animationDelay: "0s" }}
            >
              BOSCO
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-400 mx-auto animate-expand" />
          </div>
          <p
            className="text-blue-200 text-sm md:text-base font-medium animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Premium Quality Bags Since 1995
          </p>
        </div>

        <div
          className="relative w-full h-auto cursor-pointer perspective"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative w-full transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front of card - Applied glassmorphic effect */}
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              {/* Logo Section */}
              <div className="flex justify-center mb-8">
                <div className="relative w-28 h-28 md:w-32 md:h-32">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-700 rounded-full shadow-2xl animate-float" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center bg-white">
                      <Image
                        src="/logo.png"
                        alt="Bosco Bags Logo"
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </div>


                </div>
              </div>

              {/* Company Name */}
              {/* <h2
                className="text-4xl md:text-5xl font-black text-center text-white mb-1 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                BOSCO
              </h2>
              <p
                className="text-center text-blue-100 text-sm mb-8 font-semibold animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Premium Bag Manufacturing
              </p> */}

              {/* Contact Information */}
              <div className="space-y-3 mb-8">
                {/* Email */}
                <a
                  href="mailto:info@boscobags.in"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:shadow-lg hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Mail className="w-5 h-5 text-blue-300 group-hover:text-white group-hover:scale-110 transition-all flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-blue-200 font-medium">Email</p>
                    <p className="text-sm font-bold text-white truncate">info@boscobags.in</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919745561967"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:shadow-lg hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Phone className="w-5 h-5 text-blue-300 group-hover:text-white group-hover:scale-110 transition-all flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-blue-200 font-medium">Phone</p>
                    <p className="text-sm font-bold text-white">+91 9846127455</p>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://www.google.com/maps/place/R4R5%2BCRJ,+Pallipuram,+Parudur,+Kerala+679305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:shadow-lg hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <MapPin className="w-5 h-5 text-blue-300 group-hover:text-white group-hover:scale-110 transition-all flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-blue-200 font-medium">Location</p>
                    <p className="text-sm font-bold text-white">Parudur, Kerala</p>
                  </div>
                </a>
              </div>

              <div className="mb-8 pb-8 border-b border-white/20">
                <p className="text-xs text-blue-200 font-semibold mb-4 text-center">CONNECT WITH US</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-white/10 backdrop-blur-md text-blue-300 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 hover:shadow-lg hover:border-white/40 ${social.color} animate-fade-in-up`}
                        style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                        title={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowDetails(true)
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-700 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up relative overflow-hidden group"
                style={{ animationDelay: "1.1s" }}
              >
                <span className="relative z-10">View Details</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Footer Info */}
              <p
                className="text-center text-xs text-blue-200 mt-6 font-medium animate-fade-in-up"
                style={{ animationDelay: "1.2s" }}
              >
                Est. 1995 • 30+ Years of Excellence
              </p>
            </div>

            {/* Back of card - Applied glassmorphic effect */}
            <div
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-700/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-black text-white mb-4">About Bosco</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  With over 30 years of experience, we've grown from humble beginnings into a trusted name in designing
                  and producing high-quality bags for every need.
                </p>
                <h4 className="text-lg font-bold text-white mb-3">Our Specialties</h4>
                <ul className="space-y-2">
                  {specialties.map((specialty, index) => (
                    <li key={index} className="flex items-center gap-2 text-blue-100 text-sm">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-center text-blue-200 text-xs font-medium">Click to flip back</p>
            </div>
          </div>
        </div>

        <p className="text-center text-blue-300 text-xs mt-6 animate-pulse">
          Click card to flip • Tap "View Details" for more
        </p>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-slide-in-up">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary/30 to-blue-700/30 backdrop-blur-md text-white p-6 md:p-8 flex items-center justify-between rounded-t-3xl border-b border-white/20">
              <h2 className="text-2xl md:text-3xl font-black">About Bosco Bags</h2>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* About Section */}
              <div className="animate-slide-in-up">
                <h3 className="text-2xl font-black text-blue-300 mb-4">Our Story</h3>
                <p className="text-blue-100 leading-relaxed text-base">
                  With over 30 years of experience, we've grown from humble beginnings into a trusted name in designing
                  and producing high-quality bags for every need. Our commitment to excellence and innovation has made
                  us a preferred choice for customers worldwide.
                </p>
              </div>

              {/* Specialties Section */}
              <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-2xl font-black text-blue-300 mb-4">Our Specialties</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="font-semibold text-white">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Section */}
              <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-black text-blue-300 mb-4">Our Location</h3>
                <div className="rounded-2xl overflow-hidden shadow-lg h-80 border-2 border-white/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.610535745067!2d76.10694007480588!3d10.841087489311606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c7dc1552c4bd%3A0x515d9430eb89d20f!2sR4R5%2BCRJ%2C%20Pallipuram%2C%20Parudur%2C%20Kerala%20679305!5e0!3m2!1sen!2sin!4v1761541135148!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-sm text-blue-200 mt-4 font-medium">Pallipuram, Parudur, Kerala 679305, India</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
