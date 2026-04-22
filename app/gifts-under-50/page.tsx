import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Gifts Under $50 That Look Like You Spent More",
  description: "Find personalized gifts under $50 that feel premium — custom necklaces, mugs and apparel made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Gifts Under $50 That Look Like You Spent More",
    description: "Find personalized gifts under $50 that feel premium — custom necklaces, mugs and apparel made to order and shipped to your door.",
    url: "https://lovrella.com/gifts-under-50/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Are all necklaces and mugs under $50?", a: "Most of our necklaces and mugs are priced between $25 and $45. Multi-name styles and add-ons may bring the total slightly higher. Prices are shown on each product page." },
  { q: "Does a lower price mean lower quality?", a: "Not at Lovrella. We use sterling silver and gold-filled chains for necklaces and high-quality ceramic for mugs. The personalization is what makes these gifts special — not a premium markup." },
  { q: "Can I get free shipping on gifts under $50?", a: "Standard shipping is free on orders over $35. Most mug and necklace orders qualify automatically." },
  { q: "What is the best personalized gift under $25?", a: "Our personalized mugs start under $25 and are available with same-day design processing. A personal mug at that price point is hard to beat." }
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
          Personalized Gifts Under $50 That Look Like You Spent More
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">A great gift does not require a large budget — it requires thought. A personalized gift under $50 with her name on it, made specifically for her, will mean more than a $200 item pulled off a generic wish list.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, most of our personalized necklaces and mugs fall well under $50 and ship made to order from the US. Every piece is designed to look and feel premium — because personalization is the detail that makes the difference, not the price tag.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two best-value personalized picks, plus the questions we get most from budget-conscious shoppers.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Gifts Under $50</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain with her name or initials — one of our most popular gifts and priced well under $50. Comes gift-boxed and ready to give. Gold, silver, or rose gold. The kind of gift that feels expensive and personal without breaking the budget.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Her name or initials engraved</li>
                    <li>&#10003; Gold, silver, or rose gold finish</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and a message — under $35 and the kind of gift she uses every single morning. Dishwasher-safe, microwave-safe, and more personal than anything you could find at that price point in a store.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name and message or design</li>
                    <li>&#10003; 10+ design styles available</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Personalized Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Find a Great Gift Without the Big Spend</h2>
          <p className="text-gray-700 mb-6">Browse our full collection of personalized gifts — necklaces, mugs and more, most under $50 and all made to order.</p>
          <a href="https://lovrella.com/collections/gifts-under-50" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Personalized Gifts at Lovrella
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
