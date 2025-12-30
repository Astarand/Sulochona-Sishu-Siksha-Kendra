import { Users, BookOpen, Briefcase } from "lucide-react"

const focusAreas = [
  {
    icon: Users,
    title: "Community Building",
    description: "Connect with educators and caregivers across districts for peer learning and local events.",
  },
  {
    icon: BookOpen,
    title: "Capacity Development",
    description: "Access NEP-aligned training info, webinars and certified skill programs with MEPSC.",
  },
  {
    icon: Briefcase,
    title: "Career Progression",
    description:
      "We offer entrepreneurship guidance and job opportunities, empowering early educators to build sustainable professional growth.",
  },
]

export default function FocusAreas() {
  return (
    <section id="focus" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Focus Areas</h2>
          <p className="text-lg text-foreground/70">Dedicated to supporting ECCE professionals</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
