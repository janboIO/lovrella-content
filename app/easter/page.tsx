import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Easter Gifts Beyond Candy and Plastic Eggs",
  description: "Find personalized Easter gifts for the whole family — custom necklaces, mugs and keepsakes made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Easter Gifts Beyond Candy and Plastic Eggs",
    description: "Find personalized Easter gifts for the whole family — custom necklaces, mugs and keepsakes made to order and shipped to your door.",
    url: "https://lovrella.com/easter/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "How far in advance should I order for Easter?", a: "Order at least 10 days before Easter for standard shipping. Most orders ship within 2-4 business days." },
  { q: "Is there something appropriate for a child?", a: "Our mugs make a wonderful gift for older kids and teens. For younger children, check our full collection for smaller keepsake options." },
  { q: "Can I send it directly to a family member in another city?", a: "Absolutely. Enter their address at checkout and add a gift note — we ship to all 50 states." },
  { q: "Do the mugs come gift-wrapped?", a: "Mugs ship in protective boxes. Select gift wrapping at checkout for an extra presentation touch." }
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
          Personalized Easter Gifts Beyond Candy and Plastic Eggs
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Easter baskets are great at age seven. By the time you are buying for a mom, a grandmother, or a grown sister, they deserve something better than cellophane grass and chocolate. A personalized gift that lasts.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every Easter gift is made to order in the US. Whether you are celebrating the holiday with family, sending something to someone far away, or looking for a gift that marks the season with meaning, you will find it here.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our top picks for Easter gifting, plus answers to the questions we hear most in the spring.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Easter Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain with her name or initials in gold, silver, or rose gold. Comes gift-boxed and ready to give — a grown-up Easter gift that she will wear year-round, not just for the holiday.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name or initials</li>
                    <li>&#10003; Add a birthstone charm</li>
                    <li>&#10003; Gift-wrapped and ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Custom Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Easter Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and a spring design or cheerful message. Every morning of the Easter season starts with something made specifically for her. Dishwasher-safe, microwave-safe, and genuinely useful.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name and spring message</li>
                    <li>&#10003; Easter and year-round design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Easter Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Make Easter Memorable This Year</h2>
          <p className="text-gray-700 mb-6">Browse our full Easter collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/easter-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Easter Gifts at Lovrella
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
