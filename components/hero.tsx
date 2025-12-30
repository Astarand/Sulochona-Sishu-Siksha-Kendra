import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary via-emerald-600 to-green-700 text-white py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Building a Strong Community for Preschool Educators
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
              Empowering Early Childhood Care & Education (ECCE) professionals through training, collaboration, and
              secure digital outreach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#community"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition text-center"
              >
                Join the Community
              </Link>
              <Link
                href="/volunteering"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition text-center"
              >
                Volunteering
              </Link>
              <Link
                href="#resources"
                className="px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition text-center border border-white/30"
              >
                Explore Resources
              </Link>
            </div>
          </div>

          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/indian-preschool-children-learning-playing-classro.jpg"
              alt="Indian preschool children engaged in learning activities"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
