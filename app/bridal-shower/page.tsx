import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Bridal Shower Gifts She Will Love Before the Big Day",
  description: "Find personalized bridal shower gifts that stand out — custom necklaces engraved with her name, mugs for the bride-to-be, made to order.",
  openGraph: {
    title: "Personalized Bridal Shower Gifts She Will Love Before the Big Day",
    description: "Find personalized bridal shower gifts that stand out — custom necklaces engraved with her name, mugs for the bride-to-be, made to order.",
    url: "https://lovrella.com/bridal-shower/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Should I use her current name or her new name?", a: "Use whichever she prefers. Most brides like their current name on pre-wedding gifts. When in doubt, use her first name only — it works either way." },
  { q: "Can I order bridesmaid gifts in bulk?", a: "Yes. Add multiple items to your cart with different names. We offer group discounts — contact us before ordering for a code." },
  { q: "How far in advance should I order?", a: "Order at least 10 days before the bridal shower. Most items ship within 2-4 business days." },
  { q: "Can I ship to the venue or to her home?", a: "We ship to any US address. Enter the delivery address at checkout and add your personal note." }
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
          Personalized Bridal Shower Gifts She Will Love Before the Big Day
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Bridal showers have a lot of kitchen gadgets and monogrammed towels. Stand out with something she will actually wear or use every day — a gift made for her, with her name on it, that she will keep long after the wedding.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every bridal shower gift is made to order in the US. Whether you are the maid of honor, a bridesmaid, or a close friend looking for the perfect pre-wedding gift, you will find something here that feels genuinely personal.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two most-gifted bridal shower picks, plus the questions we hear most from the wedding party.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Bridal Shower Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bride Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with her name, &apos;Bride&apos;, or the wedding date — a beautiful keepsake to wear through the engagement and on the wedding day itself. Comes gift-boxed and ready to present at the shower. This is the one she puts on and does not take off.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, &apos;Bride&apos;, or the date</li>
                    <li>&#10003; Script or block letter styles</li>
                    <li>&#10003; Gift-wrapped and ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Bride Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bride Personalized Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and &apos;Bride&apos; — perfect for the morning coffee routine during the chaos of wedding planning. Dishwasher-safe, microwave-safe, and the kind of mug that actually gets used every single day.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name and &apos;Bride&apos; or wedding date</li>
                    <li>&#10003; Bridal design styles available</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Bride Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Give the Bride a Gift She Will Remember</h2>
          <p className="text-gray-700 mb-6">Browse our full bridal shower gift collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/bridal-shower-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Bridal Shower Gifts at Lovrella
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
