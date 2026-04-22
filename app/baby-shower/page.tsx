import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Baby Shower Gifts Everyone Will Remember",
  description: "Stand out at the baby shower with a personalized gift mom will actually keep — custom necklaces, mugs and keepsakes made to order.",
  openGraph: {
    title: "Personalized Baby Shower Gifts Everyone Will Remember",
    description: "Stand out at the baby shower with a personalized gift mom will actually keep — custom necklaces, mugs and keepsakes made to order.",
    url: "https://lovrella.com/baby-shower/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "What if the baby's name has not been decided yet?", a: "You can use initials, or order a mug with a non-name design like 'New Mom' and personalize with the name after the birth. We are happy to help." },
  { q: "Can I bring this to the shower or should I ship it?", a: "Both work. We can ship directly to the mom-to-be if you enter her address at checkout, or ship to you in time for the party." },
  { q: "How far in advance should I order?", a: "Order at least 10 days before the shower for standard shipping. Most items ship within 2-4 business days." },
  { q: "Is this appropriate as a group gift from multiple guests?", a: "Absolutely. A personalized necklace or mug makes a beautiful group gift — just select one item and split the cost among the group." }
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
          Personalized Baby Shower Gifts Everyone Will Remember
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Baby showers produce a mountain of onesies, blankets, and bottle sets. A personalized gift — made for the mom, with the baby&apos;s name on it — is the one that stands out. The one she saves.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every baby shower gift is made to order in the US. Whether you know the name already or are working with initials, there is a beautifully personal option here that will mean more than anything off a registry.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two most-gifted baby shower picks, plus answers to the questions we get most from shower guests.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Baby Shower Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mom Necklace with Baby&apos;s Name</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with the baby&apos;s name — a keepsake for the new mom that she will wear for years. This is the gift that makes the whole room go quiet for a moment. Comes gift-boxed and ready to present at the shower.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engraved with the baby&apos;s name</li>
                    <li>&#10003; Add the birth month birthstone</li>
                    <li>&#10003; Gift-wrapped and ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Mom Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">New Mom Personalized Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with the baby&apos;s name, the mom&apos;s name, or a message that captures the beautiful chaos of new parenthood. Every early morning feeding starts with this. Dishwasher-safe and exactly what she needs.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Baby&apos;s name, mom&apos;s name, or custom message</li>
                    <li>&#10003; Funny and heartfelt new mom designs</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop New Mom Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Give a Baby Shower Gift She Will Keep</h2>
          <p className="text-gray-700 mb-6">Browse our full baby shower collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/baby-shower-gifts" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Baby Shower Gifts at Lovrella
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
