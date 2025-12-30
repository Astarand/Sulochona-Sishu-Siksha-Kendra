import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/indian-preschool-classroom-with-children-learning-.jpg"
              alt="Indian preschool classroom with children"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Who We Are</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Suchona Sishu Siksha Kendra is a Section 8 (Not-for-Profit) Company founded by retired policy makers,
              corporate leaders, and senior academicians with a shared mission to strengthen India's Early Childhood
              Care and Education (ECCE) ecosystem.
            </p>

            <p className="text-base text-foreground/80 mb-4 leading-relaxed">
              We operate as a Community Aggregator, bringing together preschools, caregivers, facilitators, NGOs, and
              Corporate CSR initiatives into one collaborative network. Our role is to bridge early learning communities
              with national standards and educational reforms, ensuring alignment with NEP 2020 and recognized national
              skill development frameworks.
            </p>

            <p className="text-base text-foreground/80 mb-4 leading-relaxed">
              In addition, we provide Career Progression Guidance for educators and early childhood professionals —
              offering pathways for internships, volunteering, entrepreneurship support, and job opportunities in India
              and abroad.
            </p>

            <p className="text-base font-semibold text-primary mb-6">
              Through this integrated approach, we enable capacity building, shared learning, and sustainable
              livelihoods, fostering long-term growth and quality in early childhood education across communities.
            </p>

            <div className="space-y-3">
              <p className="text-foreground/80">
                <Link href="#community" className="text-primary font-semibold hover:underline">
                  Join our outreach
                </Link>{" "}
                or{" "}
                <Link href="#contact" className="text-primary font-semibold hover:underline">
                  contact us
                </Link>{" "}
                for partnerships and training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
