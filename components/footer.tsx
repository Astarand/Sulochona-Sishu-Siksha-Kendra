import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Suchona Sishu Siksha Kendra</h3>
            <p className="text-sm opacity-90">
              © 2025 Suchona Sishu Siksha Kendra. DPDPA 2023 compliant. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 justify-end">
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy & Data Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
