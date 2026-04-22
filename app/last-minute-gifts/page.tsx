import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Last-Minute Personalized Gifts That Do Not Look Last Minute",
  description: "Need a gift fast? Personalized last-minute gifts from Lovrella ship in 1-2 days — custom necklaces, mugs and more made to order.",
  openGraph: {
    title: "Last-Minute Personalized Gifts That Do Not Look Last Minute",
    description: "Need a gift fast? Personalized last-minute gifts from Lovrella ship in 1-2 days — custom necklaces, mugs and more made to order.",
    url: "https://lovrella.com/last-minute-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "What is the fastest I can get a personalized gift?", a: "With rush production and expedited shipping, most orders can arrive within 2-3 business days. Select these options at checkout and we will prioritize your order." },
  { q: "Is rush production available for all items?", a: "Rush production is available for most necklaces and mugs. Some designs may have slightly longer processing times — the product page will show the estimated ship date for your selection." },
  { q: "Can I ship directly to someone else for a surprise delivery?", a: "Yes. Enter their address as the shipping address at checkout. We ship to all 50 states with expedited options available." },
  { q: "What if I miss the delivery window?", a: "If the gift does not arrive in time, many customers choose to present a printed order confirmation as a placeholder — it shows the personalized design so the recipient can see what is coming." }
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
          Last-Minute Personalized Gifts That Do Not Look Last Minute
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">The occasion snuck up on you. It happens. The good news: you can still give a personalized gift — one with her name on it, made specifically for her — and have it arrive in time. No one will know you ordered it yesterday.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, most orders ship within 1-2 business days with our rush production option. Select expedited shipping at checkout and we will prioritize your order so you have it when you need it.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two fastest and most popular last-minute personalized picks, plus the questions we get most from people who are cutting it close.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Last-Minute Personalized Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">Our most popular gift — a delicate chain with her name or initials in gold, silver, or rose gold. Comes gift-boxed and ready to give. Select rush production and expedited shipping at checkout and this can be at your door within 2-3 days.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Her name or initials engraved</li>
                    <li>&#10003; Rush production available at checkout</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Name Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and a message — processed and shipped fast. Select expedited shipping and rush production and this arrives looking like you planned it weeks ago. Dishwasher-safe, microwave-safe, and ready to give.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name and message or design</li>
                    <li>&#10003; Rush production option at checkout</li>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Order Now — Still Time to Get It There</h2>
          <p className="text-gray-700 mb-6">Browse our full collection with rush production and expedited shipping options — personalized gifts that arrive on time.</p>
          <a href="https://lovrella.com/collections/last-minute-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Last-Minute Gifts at Lovrella
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
