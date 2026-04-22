import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Confirmation Gifts That Honor the Occasion",
  description: "Find personalized confirmation gifts worth keeping — custom necklaces and mugs engraved with their name and confirmation date, made to order.",
  openGraph: {
    title: "Personalized Confirmation Gifts That Honor the Occasion",
    description: "Find personalized confirmation gifts worth keeping — custom necklaces and mugs engraved with their name and confirmation date, made to order.",
    url: "https://lovrella.com/confirmation/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Is this appropriate for both Catholic and Protestant confirmation?", a: "Yes. Our personalization is non-denominational — you choose the text. Enter whatever is meaningful for the specific tradition you are celebrating." },
  { q: "Can I add a cross symbol to the necklace?", a: "Yes. Cross charms are available as add-ons at checkout for our necklace collection." },
  { q: "How quickly can I get a confirmation gift?", a: "Most orders ship within 2-4 business days. Order at least 10 days before the confirmation date for standard shipping." },
  { q: "Is the necklace appropriate for a teenage girl?", a: "Yes. Our necklaces are designed for all ages. The delicate chain and simple engraving style are popular with teens and adults alike." }
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
          Personalized Confirmation Gifts That Honor the Occasion
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Confirmation is a milestone that marks years of faith and preparation. It deserves a gift that reflects the significance of the moment — something with their name and date on it that they will keep, not something generic off a shelf.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every confirmation gift is made to order in the US. Whether you are a godparent, family member, or close friend, there is a personalized option here that honors the occasion with the meaning it deserves.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two top picks for confirmation gifts, plus the most common questions we get from confirmation shoppers.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Confirmation Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirmation Keepsake Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with their name, confirmation date, or a word of faith that means something to them. A beautiful keepsake they will wear for years and associate with this milestone. Comes gift-boxed and ready to present on the day.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave name, date, or a meaningful word</li>
                    <li>&#10003; Add a cross or birthstone charm</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Confirmation Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Confirmation Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with their name, confirmation date, and an elegant design that marks the occasion. A practical keepsake that starts every morning with a reminder of a significant day. Dishwasher-safe and made to last.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Name, date, and confirmation message</li>
                    <li>&#10003; Elegant faith-inspired design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Confirmation Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Celebrate This Milestone with Something Personal</h2>
          <p className="text-gray-700 mb-6">Browse our full confirmation gift collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/confirmation-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Confirmation Gifts at Lovrella
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
