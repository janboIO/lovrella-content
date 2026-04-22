import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Thanksgiving Gifts That Go Beyond the Dinner Table",
  description: "Find personalized Thanksgiving gifts they will actually keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Thanksgiving Gifts That Go Beyond the Dinner Table",
    description: "Find personalized Thanksgiving gifts they will actually keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
    url: "https://lovrella.com/thanksgiving/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "How quickly can I get a Thanksgiving gift?", a: "Most orders ship within 2-4 business days. Order at least 10 days before Thanksgiving to ensure standard shipping arrives in time." },
  { q: "Can I send it directly to someone in another state?", a: "Yes. We ship to all 50 states. Enter their address at checkout and add a personal note — we will include it with the gift." },
  { q: "What if I want to give a gift to multiple family members?", a: "Add multiple items to your cart, each with different personalization. We process each separately to make sure every name is correct." },
  { q: "Do you offer gift wrapping?", a: "Necklaces come gift-boxed. Mugs ship in protective boxes. Select gift wrapping at checkout for an added presentation layer." }
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
          Personalized Thanksgiving Gifts That Go Beyond the Dinner Table
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Thanksgiving is about gratitude — and nothing shows gratitude better than a gift made specifically for the person you are giving it to. Not a candle. Not a wine bottle. Something with their name on it.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every Thanksgiving gift is made to order in the US. Whether you are hosting, attending, or sending something to someone you cannot be with this year, there is a personalized option here that will be remembered long after the leftovers are gone.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two top picks for Thanksgiving gifting, plus the questions we get most this time of year.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Personalized Thanksgiving Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with her name, initials, or a word that captures what she means to you. Comes gift-boxed and ready to present at the table or mail across the country. A Thanksgiving gift she will still be wearing in January.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave name, initials, or a short word</li>
                    <li>&#10003; Script or block letter styles</li>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Thanksgiving Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and a warm Thanksgiving design or message. Every morning through the holiday season she reaches for this one first. Dishwasher-safe, microwave-safe, and far more thoughtful than a bottle of wine.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name and holiday message</li>
                    <li>&#10003; Thanksgiving and harvest design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Thanksgiving Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Give Thanks with Something Personal</h2>
          <p className="text-gray-700 mb-6">Browse our full Thanksgiving collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/thanksgiving-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Thanksgiving Gifts at Lovrella
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
