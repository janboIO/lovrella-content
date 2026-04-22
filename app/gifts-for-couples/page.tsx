import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Gifts for Couples Who Have Everything",
  description: "Find personalized gifts for couples that stand out — custom mug sets, necklaces and keepsakes with their names and date, made to order.",
  openGraph: {
    title: "Personalized Gifts for Couples Who Have Everything",
    description: "Find personalized gifts for couples that stand out — custom mug sets, necklaces and keepsakes with their names and date, made to order.",
    url: "https://lovrella.com/gifts-for-couples/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Can I include both their names on a single item?", a: "Yes. Our mug designs support both names together. For necklaces, many couples order one for her with both names or their shared date engraved." },
  { q: "What date should I use — anniversary, wedding, or birthday?", a: "Use whatever date is most significant to the couple. For a wedding gift, the wedding date. For an anniversary, the anniversary date. For a new couple, the date they met." },
  { q: "Is the mug set available as a gift set?", a: "Yes. Both mugs ship together and can be wrapped as a set. Select gift wrapping at checkout." },
  { q: "How quickly can I get a couples gift?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if the occasion is coming up soon." }
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
          Personalized Gifts for Couples Who Have Everything
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Couples are the hardest people to shop for. They have a home full of stuff. What they do not have is something made specifically for the two of them — with their names together, their date on it, made for their relationship.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every couples gift is made to order in the US. Whether it is a wedding, anniversary, Valentine&apos;s Day, or a just-because occasion, there is something here that will feel genuinely personal rather than generic.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two top picks for couples gifts, plus the most common questions we get from people shopping for pairs.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Couples Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Couples Mug Set</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A pair of 15 oz ceramic mugs with their names and a date or design that tells their story. Every morning coffee they share starts with these. Dishwasher-safe, microwave-safe, and the kind of gift that gets used every single day.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Two 15 oz ceramic mugs, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Both names and a date or shared message</li>
                    <li>&#10003; Multiple romantic design styles</li>
                    <li>&#10003; Ships in protective gift boxes</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Couples Mug Sets &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Necklace for Her</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with her name, their shared date, or a word that belongs to just the two of them. A beautiful complement to the couples mug set, or a standalone gift for the woman in the relationship. Comes gift-boxed.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, their date, or a word</li>
                    <li>&#10003; Script or block letter styles</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Custom Necklaces &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Give a Couples Gift They Will Both Love</h2>
          <p className="text-gray-700 mb-6">Browse our full couples gift collection — mug sets, necklaces and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/gifts-for-couples" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Couples Gifts at Lovrella
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
