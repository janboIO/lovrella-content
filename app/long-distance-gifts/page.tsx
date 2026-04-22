import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Long Distance Gifts That Close the Gap",
  description: "Send a personalized long distance gift to someone you miss — custom necklaces, mugs and more shipped directly to their door anywhere in the US.",
  openGraph: {
    title: "Personalized Long Distance Gifts That Close the Gap",
    description: "Send a personalized long distance gift to someone you miss — custom necklaces, mugs and more shipped directly to their door anywhere in the US.",
    url: "https://lovrella.com/long-distance-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Do you ship to all US states?", a: "Yes. We ship to all 50 states with standard and expedited options. Enter their address at checkout and we will handle the rest." },
  { q: "Can I add a personal note to the gift?", a: "Yes. Add your message at checkout and we will include a printed note with the order — no extra charge." },
  { q: "Will the packaging look like a gift when it arrives?", a: "Necklaces come gift-boxed. Mugs ship in protective boxes. All orders arrive in discreet outer packaging. Select gift wrapping at checkout for an added presentation layer." },
  { q: "How quickly can a long distance gift arrive?", a: "Standard shipping takes 5-7 business days after production (2-4 days). Choose expedited shipping at checkout to reduce transit time to 2-3 days." }
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
          Personalized Long Distance Gifts That Close the Gap
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Distance does not change how much someone means to you — but it does make the gift matter more. A personalized gift shipped directly to someone you cannot be with in person says something a text message or video call cannot.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every long distance gift is made to order in the US and ships directly to any address in all 50 states. Whether it is a best friend across the country, a partner in another city, or a parent you cannot visit, there is something here that will arrive feeling personal and close.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two most-gifted long distance picks, plus the questions we get most from people shipping gifts across the country.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Long Distance Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain with her name in gold, silver, or rose gold — shipped directly to her door, gift-boxed and ready. This is the gift she opens and puts on immediately, a daily reminder that someone far away is thinking about her.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Her name or initials engraved</li>
                    <li>&#10003; Ships directly to their address</li>
                    <li>&#10003; Gift-wrapped, arrives ready to open</li>
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Long Distance Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and a message that says I am thinking of you — shipped directly to her, ready to open. Every morning she makes her coffee, you are there with her in a small way. Dishwasher-safe, microwave-safe, and meaningful.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Her name and your personal message</li>
                    <li>&#10003; Shipped directly to their address</li>
                    <li>&#10003; Ships in a protective gift box, arrives gift-ready</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Long Distance Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Send Something Personal Across the Distance</h2>
          <p className="text-gray-700 mb-6">Browse our full collection — necklaces, mugs and more, all personalized and shipped directly to their door.</p>
          <a href="https://lovrella.com/collections/long-distance-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Long Distance Gifts at Lovrella
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
