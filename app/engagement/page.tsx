import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Engagement Gifts for the Newly Engaged Couple",
  description: "Celebrate their engagement with a personalized gift they will keep — custom necklaces, mugs and keepsakes engraved with their names and date.",
  openGraph: {
    title: "Personalized Engagement Gifts for the Newly Engaged Couple",
    description: "Celebrate their engagement with a personalized gift they will keep — custom necklaces, mugs and keepsakes engraved with their names and date.",
    url: "https://lovrella.com/engagement/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Should I engrave the engagement date or the wedding date?", a: "The engagement date is the more meaningful choice for an engagement gift. If the wedding date is not yet set, the engagement date is always the right call." },
  { q: "Is this appropriate for a bride-to-be only, or the couple?", a: "Our necklaces are perfect for the bride-to-be from her bridesmaids or family. The mug set works beautifully as a couples gift from guests." },
  { q: "How quickly can you ship?", a: "Most orders ship within 2-4 business days. Choose expedited shipping at checkout for faster delivery." },
  { q: "Can I ship directly to them?", a: "Yes. Enter their address at checkout and add a personal congratulations note — we will include it with the gift." }
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
          Personalized Engagement Gifts for the Newly Engaged Couple
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">An engagement is one of life&apos;s biggest moments — and it deserves a gift that feels as significant as the occasion. Not another bottle of champagne. Something with their names on it, their date, something that marks what just happened.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every engagement gift is made to order in the US. Whether you are a friend, a family member, or part of the soon-to-be wedding party, there is something here that will feel genuinely personal and lasting.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two top picks for engagement gifting, plus the questions we hear most from people shopping for newly engaged couples.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Personalized Engagement Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Engagement Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with her new title (Bride), their names together, or the engagement date. A beautiful gift for the bride-to-be from her closest friends or family — and one she will wear through the whole engagement and beyond.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave names, date, or &apos;Bride&apos;</li>
                    <li>&#10003; Script or block letter styles</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Engagement Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Couple&apos;s Mug Set</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A pair of 15 oz ceramic mugs printed with their names and engagement date — a practical, personal gift they will use every single morning of their engagement and marriage. Dishwasher-safe, microwave-safe, and more meaningful than flowers.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Both names and engagement date</li>
                    <li>&#10003; Multiple design styles available</li>
                    <li>&#10003; Ships in protective gift boxes</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Couple&apos;s Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Celebrate Their Engagement with Something Lasting</h2>
          <p className="text-gray-700 mb-6">Browse our full engagement gift collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/engagement-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Engagement Gifts at Lovrella
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
