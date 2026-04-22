import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Gifts for Your Best Friend That Say Everything",
  description: "Find personalized gifts for your best friend she will keep forever — custom necklaces, mugs and more made to order with her name on it.",
  openGraph: {
    title: "Personalized Gifts for Your Best Friend That Say Everything",
    description: "Find personalized gifts for your best friend she will keep forever — custom necklaces, mugs and more made to order with her name on it.",
    url: "https://lovrella.com/gifts-for-best-friend/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "What is the most popular best friend gift from Lovrella?", a: "The custom name necklace and the personalized mug are both top choices. The necklace is the more emotional gift — the mug is the more practical one. Many people order both." },
  { q: "Can I put an inside joke on the mug?", a: "Absolutely. Enter any text you want at checkout. The more personal, the better — that is exactly the point." },
  { q: "Can I order matching necklaces for both of us?", a: "Yes. Add two necklaces to your cart with different personalization — each with your own name or a matching word." },
  { q: "How quickly can I get a best friend gift?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if the occasion is soon." }
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
          Personalized Gifts for Your Best Friend That Say Everything
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Your best friend deserves better than a generic gift card or a candle she will burn in a week. She deserves something made for her — with her name on it, or an inside joke, or a message that only she would understand.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every best friend gift is made to order in the US. Whether it is her birthday, a just-because moment, or a celebration of how long you have known each other, there is a personalized option here that will make her feel genuinely seen.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two most-gifted picks for best friends, plus the questions we hear most from people shopping for their people.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Gifts for a Best Friend</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain with her name or initials in gold, silver, or rose gold — the gift she puts on and keeps on. Comes gift-boxed and ready to give. This is the one she shows everyone and says &apos;my best friend got this for me.&apos;</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Her name or initials engraved</li>
                    <li>&#10003; Add her birthstone charm</li>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Best Friend Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name, an inside joke, or a message that captures your friendship. Every morning she drinks her coffee and thinks of you. Dishwasher-safe, microwave-safe, and the kind of gift that makes her smile every single day.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Her name, a nickname, or a shared joke</li>
                    <li>&#10003; Fun and sentimental design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Best Friend Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Give Your Best Friend Something Personal</h2>
          <p className="text-gray-700 mb-6">Browse our full best friend gift collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/gifts-for-best-friend" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Best Friend Gifts at Lovrella
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
