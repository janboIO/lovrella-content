import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Baptism Gifts to Mark a Lifetime Milestone",
  description: "Find personalized baptism gifts they will keep forever — custom necklaces, mugs and keepsakes engraved with the child's name and baptism date.",
  openGraph: {
    title: "Personalized Baptism Gifts to Mark a Lifetime Milestone",
    description: "Find personalized baptism gifts they will keep forever — custom necklaces, mugs and keepsakes engraved with the child's name and baptism date.",
    url: "https://lovrella.com/baptism/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Should I address the gift to the child or the parents?", a: "A necklace engraved for the child can be kept until they are old enough to wear it. A mug is typically for the parents. Both are meaningful — it depends on your preference." },
  { q: "Can I add a cross or religious symbol?", a: "Yes. We offer cross charm additions for our necklaces and cross design elements for mugs. Select these options at checkout." },
  { q: "How quickly can I get a baptism gift?", a: "Most orders ship within 2-4 business days. Order at least 10 days before the baptism for standard shipping." },
  { q: "Can you ship directly to the family?", a: "Absolutely. Enter their address at checkout and include a congratulations note — we will add it to the gift." }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-6 py-4">
        <a href="https://lovrella.com" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-rose-600 transition-colors">
          Lovrella
        </a>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
          Personalized Baptism Gifts to Mark a Lifetime Milestone
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">A baptism is one of the most significant moments in a family&apos;s life — a milestone that deserves to be marked with something lasting. Not a stuffed animal that gets outgrown, but a keepsake with the child&apos;s name and date that will be saved for decades.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every baptism gift is made to order in the US. Whether you are a godparent, a family member, or a close friend, there is something here that honors the occasion with the care it deserves.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our top baptism gift picks, plus the questions we hear most from godparents and family members.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Personalized Baptism Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Baptism Keepsake Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with the child&apos;s name and baptism date — a keepsake gift for the mother or for the child to receive when they are older. Comes gift-boxed and ready to present on the day of the baptism.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave child&apos;s name and baptism date</li>
                    <li>&#10003; Add a cross charm or birthstone</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Baptism Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Baptism Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug for the parents, engraved with the child&apos;s name, baptism date, and a meaningful message. A practical keepsake that the family will use and remember. Dishwasher-safe and built to last as long as the memory.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Child&apos;s name, date, and message</li>
                    <li>&#10003; Elegant baptism design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Baptism Mugs &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-700 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-rose-50 border border-rose-100 p-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Honor the Baptism with Something Lasting</h2>
          <p className="text-gray-700 mb-6">Browse our full baptism gift collection — necklaces, mugs and keepsakes, all personalized to order.</p>
          <a href="https://lovrella.com/collections/baptism-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Baptism Gifts at Lovrella
          </a>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-500">
          Written by <span className="font-medium text-gray-700">Jan Tore Boe</span>, founder of{" "}
          <a href="https://lovrella.com" className="text-rose-600 hover:underline">Lovrella</a>.
        </div>
      </main>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://lovrella.com" className="text-rose-600 hover:underline">Lovrella</a>
          {" "}&mdash; Personalized gifts made with care.
        </p>
      </footer>
    </div>
  );
}
