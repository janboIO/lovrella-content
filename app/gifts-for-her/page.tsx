import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Gifts for Her — Something She Will Actually Keep",
  description: "Find personalized gifts for her that go beyond the generic — custom necklaces, mugs and apparel made to order with her name on it.",
  openGraph: {
    title: "Personalized Gifts for Her — Something She Will Actually Keep",
    description: "Find personalized gifts for her that go beyond the generic — custom necklaces, mugs and apparel made to order with her name on it.",
    url: "https://lovrella.com/gifts-for-her/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "What is the most popular personalized gift for women?", a: "The custom name necklace is our top seller for women across all occasions — birthdays, anniversaries, holidays, and just-because gifts alike." },
  { q: "What if I do not know her style?", a: "Our necklaces come in sterling silver, gold-filled, and rose gold. Sterling silver is the safest choice for most styles — it is versatile and goes with everything." },
  { q: "Can I include a personal message with the order?", a: "Yes. Add a note at checkout and we will include it with the gift at no extra charge." },
  { q: "How quickly can I get a gift for her?", a: "Most orders ship within 2-4 business days. Choose expedited shipping at checkout if you need it sooner." }
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
          Personalized Gifts for Her — Something She Will Actually Keep
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Generic gifts get forgotten. A personalized gift — one with her name on it, made for her specifically — gets kept. Worn. Displayed. Talked about. That is the difference between shopping for someone and giving to someone.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every gift for her is made to order in the US. Whether it is a birthday, an anniversary, a holiday, or a just-because moment, you will find something here that feels genuinely personal — not like something grabbed off a shelf at the last minute.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two most-loved gifts for her, plus the most common questions we get from people shopping for women.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Most Loved Personalized Gifts for Her</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain with her name or initials in your choice of gold, silver, or rose gold. Comes gift-boxed and ready to give. This is the gift she opens, puts on immediately, and wears for years. We hear from customers every week that this is exactly what happened.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, initials, or a date</li>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Mug for Her</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug printed with her name, a message, or an inside joke only she would get. Every morning coffee becomes a small reminder that someone thought about her specifically. Dishwasher-safe, microwave-safe, and far more personal than flowers.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name, message, or design</li>
                    <li>&#10003; 10+ design styles to choose from</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Mugs for Her &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Find the Perfect Gift for Her</h2>
          <p className="text-gray-700 mb-6">Browse our full collection of personalized gifts for her — necklaces, mugs and more, all made to order.</p>
          <a href="https://lovrella.com/collections/gifts-for-her" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Gifts for Her at Lovrella
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
