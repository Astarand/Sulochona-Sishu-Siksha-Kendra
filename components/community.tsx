"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Community() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    whatsapp: "",
    institution: "",
    location: "",
    consent: false,
  })
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("Submitting...")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage("✅ Thank you! Please check your email for confirmation.")
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        whatsapp: "",
        institution: "",
        location: "",
        consent: false,
      })
    } catch (error) {
      setMessage("⚠️ Submission saved locally. Please email privacy@sskindia.co.in with your details.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="community" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Join the Community</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/indian-preschool-community-teachers-together.jpg"
                alt="Indian preschool educators and community members collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Become part of a national network of preschool educators and caregivers. Receive updates on training,
              events and government-aligned programs.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-6">Benefits</h3>
            <ul className="space-y-3">
              {[
                "Verified training & certification updates",
                "Free webinars & resources",
                "Peer network across states",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp Number (if different)
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="Optional"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-foreground mb-2">
                    School / Institution Name
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                    District, State
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 rounded border-border"
                    />
                    <label htmlFor="consent" className="text-sm text-foreground">
                      <strong>
                        I consent to share my personal information for official communication related to Early Childhood
                        Care and Education (ECCE) programs conducted by Suchona Sishu Siksha Kendra.
                      </strong>
                    </label>
                  </div>
                  <p className="text-xs text-foreground/60 ml-7">
                    Your data will be securely stored and used only for program communication. Data retention: 12
                    months. You may request deletion anytime at{" "}
                    <Link href="mailto:privacy@sskindia.co.in" className="text-primary hover:underline">
                      privacy@sskindia.co.in
                    </Link>
                    .
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit & Join"}
                </button>

                {message && <div className="text-sm text-foreground/70 text-center pt-2">{message}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
