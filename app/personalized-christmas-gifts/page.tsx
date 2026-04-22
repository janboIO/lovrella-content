import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Christmas Gifts Nobody Else Will Have Under the Tree",
  description:
    "Find personalized Christmas gifts that stand out — custom necklaces, mugs and apparel made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Christmas Gifts Nobody Else Will Have Under the Tree",
    description:
      "Find personalized Christmas gifts that stand out — custom necklaces, mugs and apparel made to order and shipped to your door.",
    url: "https://lovrella.com/personalized-christmas-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "What's the last day I can order for Christmas delivery?",
    a: "Check our site for current cutoff dates — they vary by shipping method. Order early in December for the best selection and guaranteed delivery.",
  },
  {
    q: "Can I order multiple personalized gifts in one order?",
    a: "Yes. Add multiple items to your cart, each with different personalization. We process each item individually so everything is correct.",
  },
  {
    q: "What if I don't know their exact size for apparel?",
    a: "Our size charts are on each product page. When in doubt, go one size up — and we offer exchanges if it doesn't fit.",
  },
  {
    q: "Do you offer gift wrapping?",
    a: "Necklaces come gift-boxed. Mugs ship in protective boxes. Select gift wrapping at checkout for an extra layer of presentation.",
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
          Personalized Christmas Gifts Nobody Else Will Have Under the Tree
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Every Christmas tree has gift cards and Amazon boxes under it. Not yours. A personalized gift — one with their name on it, made specifically for them — is the one they talk about at dinner, the one that gets saved.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every Christmas gift is made to order in the US and ships directly to your door. Necklaces, mugs, and apparel personalized with names, dates, and messages that mean something to the person receiving them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here are our top picks for Christmas, plus answers to the shipping and customization questions we get most in December.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top Personalized Christmas Gift Ideas
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Custom Name Necklace
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A delicate chain with her name or initials in gold, silver, or rose gold. Comes gift-boxed and ready to place under the tree. This is the gift she opens and puts on immediately — we hear that from customers every January.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave name, initials, or a short word</li>
                    <li>&#10003; Add a birthstone charm</li>
                    <li>&#10003; Gift-wrapped and ready to present</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/necklaces"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Custom Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Christmas Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A 15 oz ceramic mug with their name and a Christmas design, message, or inside joke. Every cup of hot cocoa or morning coffee from December onward carries their name on it. Dishwasher-safe, microwave-safe, and actually useful.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name, message, or holiday design</li>
                    <li>&#10003; Christmas-themed and year-round styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Christmas Mugs &rarr;
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
            Make Christmas Personal This Year
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full Christmas gift collection — necklaces, mugs, apparel and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/personalized-christmas-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Personalized Christmas Gifts at Lovrella
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
