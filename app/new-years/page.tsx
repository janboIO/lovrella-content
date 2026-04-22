import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized New Year's Gifts to Start the Year Right",
  description: "Celebrate the new year with a personalized gift they will keep — custom necklaces, mugs and more made to order and shipped to your door.",
  openGraph: {
    title: "Personalized New Year's Gifts to Start the Year Right",
    description: "Celebrate the new year with a personalized gift they will keep — custom necklaces, mugs and more made to order and shipped to your door.",
    url: "https://lovrella.com/new-years/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Can I order for delivery before New Year's Eve?", a: "Yes. Most orders ship within 2-4 business days. Order by December 26 for standard shipping to arrive by December 31 in most locations." },
  { q: "Can I engrave the new year on the necklace?", a: "Yes. Enter any text at checkout — the year, a word, or a short phrase. We will engrave it exactly as written." },
  { q: "Is this a good gift for a friend or just a partner?", a: "A New Year gift works beautifully for anyone — a best friend, a sister, a colleague, or a partner. The personalization makes it work for any relationship." },
  { q: "Do you ship on December 31?", a: "We process orders on business days. Orders placed December 30-31 ship the next business day in the new year." }
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
          Personalized New Year&apos;s Gifts to Start the Year Right
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">A new year is a moment to celebrate the people who made the last one worth it. A personalized gift — with their name, a word that captures who they are, or the year ahead — is a much better way to do that than a bottle of champagne.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every New Year gift is made to order in the US. Whether you are celebrating with someone in person or sending something to a friend across the country, there is something here that will feel genuinely personal.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two top picks for New Year gifting, plus the questions we hear most at the end of December.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Personalized New Year Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with her name, a word for the year ahead, or the year itself. Comes gift-boxed and ready to give on New Year&apos;s Eve or January 1st. A gift that carries the intention of a fresh start.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, a word, or the new year</li>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized New Year Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and a message for the year ahead. Every morning of the new year starts with this. Dishwasher-safe, microwave-safe, and a daily reminder that someone celebrated the start of the year with her in mind.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name and new year message</li>
                    <li>&#10003; Multiple design styles available</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop New Year Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start the New Year with Something Personal</h2>
          <p className="text-gray-700 mb-6">Browse our full New Year collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/new-years-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop New Year Gifts at Lovrella
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
