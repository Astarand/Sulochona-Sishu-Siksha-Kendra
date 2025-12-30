import Link from "next/link"
import { FileText, Video, BookMarked } from "lucide-react"

const resources = [
  {
    icon: FileText,
    title: "Teacher Toolkit (PDF)",
    description: "Comprehensive guide for preschool educators",
  },
  {
    icon: BookMarked,
    title: "NEP 2020 Summary for Preschools",
    description: "Understanding National Education Policy",
  },
  {
    icon: Video,
    title: "Upcoming Webinars",
    description: "Live training sessions and workshops",
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Resources</h2>
        <p className="text-lg text-foreground/70 mb-12">
          Downloadable guides, recorded webinars and NEP-aligned briefs. (Admin-managed resource library)
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <Link
                key={index}
                href="#"
                className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-primary transition group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition">{resource.title}</h3>
                <p className="text-sm text-foreground/60">{resource.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
