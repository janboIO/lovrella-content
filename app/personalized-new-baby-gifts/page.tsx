import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized New Baby Gifts Mom Will Actually Treasure",
  description:
    "Celebrate the new arrival with a personalized gift mom will keep — custom necklaces with the baby's name, new mom mugs and more, made to order.",
  openGraph: {
    title: "Personalized New Baby Gifts Mom Will Actually Treasure",
    description:
      "Celebrate the new arrival with a personalized gift mom will keep — custom necklaces with the baby's name, new mom mugs and more, made to order.",
    url: "https://lovrella.com/personalized-new-baby-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "What if I don't know the baby's name yet?",
    a: "If the name isn't chosen yet, consider gifting our necklace with a gift note explaining the personalization — we can process it once the name is confirmed. Or choose a mug with 'New Mom' messaging that doesn't require a name.",
  },
  {
    q: "Can I ship directly to the hospital or home?",
    a: "We ship to any US address. Enter the delivery address at checkout. Hospital deliveries work if you have the full address including room number.",
  },
  {
    q: "Is the necklace safe to wear while nursing?",
    a: "Our necklaces are lightweight and the chains are smooth, so they're comfortable to wear. Sterling silver and gold-filled are non-reactive materials.",
  },
  {
    q: "Can this be a baby shower gift even before the birth?",
    a: "Yes. If the name is known, we can personalize immediately. If not, gift a gift card or choose one of our non-name designs and personalize after the birth.",
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-6 py-4">
        <a
          href="https://lovrella.com"
          className="text-xl font-semibold tracking-tight text-gray-900 hover:text-rose-600 transition-colors"
        >
          Lovrella
        </a>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
          Personalized New Baby Gifts Mom Will Actually Treasure
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            New babies bring an avalanche of onesies, blankets, and generic gear. Stand out with a gift made for the mom — something with the baby&apos;s name on it, personal to this specific new family, at this specific moment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, our new baby gifts are made to order in the US and designed to give the new mom something she&apos;ll keep long after the baby gear is outgrown. A necklace with her child&apos;s name. A mug that greets her every exhausted morning with something that makes her smile.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here are our two most-gifted new baby picks, plus the most common questions from baby shower shoppers.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Best Personalized New Baby Gift Ideas
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mom Necklace with Baby&apos;s Name
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A delicate chain engraved with the baby&apos;s name — a keepsake for the new mom that she&apos;ll wear for years. This is the gift that makes her tear up a little, in a good way. Comes gift-boxed and ready to give at the baby shower or hospital visit.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engraved with the baby&apos;s name</li>
                    <li>&#10003; Add a birthstone in the baby&apos;s birth month</li>
                    <li>&#10003; Gift-wrapped and ready to present</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/necklaces"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Mom Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    New Mom Personalized Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A 15 oz ceramic mug with the baby&apos;s name, the mom&apos;s name, or a message that captures the exhausted, joyful chaos of early parenthood. Every 5 AM feeding starts with this mug. Dishwasher-safe, microwave-safe, and exactly what she needs.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Baby&apos;s name, mom&apos;s name, or a custom message</li>
                    <li>&#10003; New mom design styles and funny options</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop New Mom Mugs &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Welcome the New Arrival with Something Personal
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full new baby collection — necklaces, mugs and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/personalized-new-baby-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop New Baby Gifts at Lovrella
          </a>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-500">
          Written by{" "}
          <span className="font-medium text-gray-700">Jan Tore Boe</span>,
          founder of{" "}
          <a href="https://lovrella.com" className="text-rose-600 hover:underline">
            Lovrella
          </a>
          .
        </div>
      </main>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://lovrella.com" className="text-rose-600 hover:underline">
            Lovrella
          </a>{" "}
          &mdash; Personalized gifts made with care.
        </p>
      </footer>
    </div>
  );
}
