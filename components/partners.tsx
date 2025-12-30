import Image from "next/image"

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Partners & Recognition</h2>
        <p className="text-lg text-foreground/70 mb-12">
          Suchona Sishu Siksha Kendra, as the Community Outreach Partner of Management & Entrepreneurship and
          Professional Skills Council (MEPSC), collaborates with NGOs and corporate CSR initiatives to deliver
          nationally recognized training, certification, and capacity-building programs. Together, we strengthen
          educator skills, expand community learning opportunities, and create sustainable career pathways in Early
          Childhood Care and Education.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Partner_Logo-ZAiHMy45Yzhl66PbNxiWWSBUlEdRrZ.jpg"
            alt="Partner Organizations - NCVET, MEPSC, Skill India, Government of India Ministry of Skill Development"
            width={1200}
            height={300}
            className="w-full h-auto max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}
