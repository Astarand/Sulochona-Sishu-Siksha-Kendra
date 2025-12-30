import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <Link href="mailto:info@sskindia.co.in" className="text-primary hover:underline">
              info@sskindia.co.in
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Phone</h3>
            <Link href="tel:+918697731088" className="text-primary hover:underline">
              +91 8697731088
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Address</h3>
            <p className="text-foreground/70">
              14/1A, Jahura Bazar Lane,
              <br />
              Kasba, Bosepukur,
              <br />
              Kolkata - 700042
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
