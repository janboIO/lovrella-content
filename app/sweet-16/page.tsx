import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Sweet 16 Gifts She Will Actually Want",
  description: "Find personalized Sweet 16 gifts she will love — custom name necklaces, mugs and apparel made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Sweet 16 Gifts She Will Actually Want",
    description: "Find personalized Sweet 16 gifts she will love — custom name necklaces, mugs and apparel made to order and shipped to your door.",
    url: "https://lovrella.com/sweet-16/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "What is the most popular Sweet 16 gift from Lovrella?", a: "The custom name necklace is our most gifted Sweet 16 item — it is personal, wearable, and comes in the gold and rose gold styles that are most popular with teens right now." },
  { q: "Can I add her birthstone to the necklace?", a: "Yes. Birthstone charms are available as add-ons at checkout. Select her birth month and we will attach the corresponding stone." },
  { q: "How quickly can I get it?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if the party is coming up soon." },
  { q: "Is the necklace appropriate for daily wear?", a: "Yes. Sterling silver and gold-filled chains are durable enough for daily wear. We recommend removing jewelry before swimming or showering to extend its life." }
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
          Personalized Sweet 16 Gifts She Will Actually Want
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Turning 16 is a big deal — and a personalized gift that actually reflects who she is will mean more than anything from a generic wish list. Something with her name on it. Something made for her.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every Sweet 16 gift is made to order in the US. Whether you are a parent, a relative, or a best friend shopping for the birthday girl, there is something here that will feel special and personal.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two most popular Sweet 16 picks, plus the questions we get most from Sweet 16 shoppers.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Personalized Sweet 16 Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain with her name or initials in gold, silver, or rose gold — the gift she puts on her birthday morning and wears every day after. Comes gift-boxed and ready to present at the party or at home. This is the one she shows all her friends.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Her name or initials engraved</li>
                    <li>&#10003; Add her birthstone charm</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Sweet 16 Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Sweet 16 Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and a Sweet 16 design or inside message. Every morning she reaches for this one. Dishwasher-safe, microwave-safe, and designed to outlast every generic mug in the house.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Her name and Sweet 16 design or message</li>
                    <li>&#10003; Fun teen-friendly design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Sweet 16 Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Make Her Sweet 16 Unforgettable</h2>
          <p className="text-gray-700 mb-6">Browse our full Sweet 16 gift collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/sweet-16-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Sweet 16 Gifts at Lovrella
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
