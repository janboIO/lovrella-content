import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Gifts for Your Sister She Will Keep Forever",
  description: "Find personalized gifts for your sister that show you know her — custom necklaces, mugs and more made to order with her name on it.",
  openGraph: {
    title: "Personalized Gifts for Your Sister She Will Keep Forever",
    description: "Find personalized gifts for your sister that show you know her — custom necklaces, mugs and more made to order with her name on it.",
    url: "https://lovrella.com/gifts-for-sister/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Can I order matching gifts for multiple sisters?", a: "Yes. Add multiple items to your cart with different names — one for each sister. We process each one separately to make sure every name is correct." },
  { q: "What is the most popular sister gift?", a: "The custom name necklace is the top choice. It is personal, wearable, and the kind of gift sisters talk about for years." },
  { q: "Can I send it directly to her if we live in different states?", a: "Absolutely. Enter her address as the shipping address and add a note — we ship to all 50 states." },
  { q: "How quickly can I get a sister gift?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if you need it sooner." }
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
          Personalized Gifts for Your Sister She Will Keep Forever
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">You know your sister better than almost anyone — which means you can do better than a generic gift. A personalized gift with her name on it, made specifically for her, is the kind of thing she keeps on her dresser or wears every day.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every gift for a sister is made to order in the US. Whether it is her birthday, a holiday, a milestone, or just because you want to show up for her, there is something here that will feel genuinely personal.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two most-gifted sister picks, plus the questions we hear most from siblings shopping for each other.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Gifts for a Sister</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain with her name or initials in gold, silver, or rose gold. The gift she wears every day and always knows came from you. Comes gift-boxed and ready to give. This is the one that makes sisters tear up a little — in a good way.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Her name, initials, or a word engraved</li>
                    <li>&#10003; Add her birthstone charm</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Sister Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Sister Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name, a shared memory, or a joke only you two would get. Every morning she thinks of you. Dishwasher-safe, microwave-safe, and designed to last as long as your relationship.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Her name, a nickname, or a shared message</li>
                    <li>&#10003; Sister-themed and personal design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Sister Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Give Your Sister Something She Will Actually Keep</h2>
          <p className="text-gray-700 mb-6">Browse our full sister gift collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/gifts-for-sister" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Sister Gifts at Lovrella
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
