import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Anniversary Gifts as Unique as Your Story",
  description:
    "Find personalized anniversary gifts that celebrate your relationship — custom necklaces engraved with your date, mugs with your names, made to order.",
  openGraph: {
    title: "Personalized Anniversary Gifts as Unique as Your Story",
    description:
      "Find personalized anniversary gifts that celebrate your relationship — custom necklaces engraved with your date, mugs with your names, made to order.",
    url: "https://lovrella.com/personalized-anniversary-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "Can I engrave our exact anniversary date?",
    a: "Yes. Enter the date in any format you prefer at checkout — month/day/year, roman numerals, or written out. We'll print it exactly as you enter it.",
  },
  {
    q: "What are traditional anniversary gifts by year?",
    a: "Our necklaces and mugs work beautifully for any year. For a 1st anniversary (paper), a printed mug fits the tradition. For 5th (wood) or 10th (tin/aluminum), our engraved metals are a modern interpretation.",
  },
  {
    q: "Can I include a personal message with the order?",
    a: "Yes. Add a note at checkout and we'll include it with the gift at no extra charge.",
  },
  {
    q: "How quickly can you ship an anniversary gift?",
    a: "Most orders ship within 2–4 business days. Choose expedited shipping at checkout if your anniversary is coming up quickly.",
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
          Personalized Anniversary Gifts as Unique as Your Story
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Every anniversary is a milestone. Whether it&apos;s your first or your twenty-fifth, the best gift is one that reflects how far you&apos;ve come — not something pulled off a generic gift shelf.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every anniversary gift is made to order with your names, your date, or a message that belongs to your relationship. Made in the US, shipped to your door, and designed to last as long as the years you&apos;re celebrating.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Below are our two best-selling anniversary gift picks, plus the most common questions from anniversary shoppers.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top Personalized Anniversary Gift Ideas
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Anniversary Engraved Necklace
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A delicate chain engraved with her name, your anniversary date, or a word that captures what your relationship means. This is the gift she wears every day as a quiet reminder of what you have together. Comes gift-boxed and ready to give.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, your date, or coordinates</li>
                    <li>&#10003; Script or block letter styles</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/necklaces"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Anniversary Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Anniversary Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A 15 oz ceramic mug printed with your names, anniversary date, and a design that tells your story. Every morning coffee becomes a small celebration of the years you&apos;ve built together. Dishwasher-safe, microwave-safe, and far more personal than flowers.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Names and anniversary date</li>
                    <li>&#10003; Multiple romantic design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Anniversary Mugs &rarr;
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
            Celebrate Every Year Together
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full anniversary collection — necklaces, mugs and more, all personalized with your names and date.
          </p>
          <a
            href="https://lovrella.com/collections/personalized-anniversary-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Personalized Anniversary Gifts at Lovrella
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
