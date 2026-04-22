import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Birthday Gifts That Show You Actually Thought About It",
  description:
    "Personalized birthday gifts made to order — custom necklaces, mugs and apparel with their name on it, shipped to your door.",
  openGraph: {
    title: "Personalized Birthday Gifts That Show You Actually Thought About It",
    description:
      "Personalized birthday gifts made to order — custom necklaces, mugs and apparel with their name on it, shipped to your door.",
    url: "https://lovrella.com/personalized-birthday-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "How quickly can I get a personalized birthday gift?",
    a: "Most orders ship within 2–4 business days. Choose expedited shipping at checkout if the birthday is coming up fast.",
  },
  {
    q: "Can I include a birthday message with the order?",
    a: "Yes — add your message at checkout and we'll include it with the gift. No charge for the note.",
  },
  {
    q: "What milestone birthday gifts do you have?",
    a: "Our mugs and necklaces can be customized for any milestone — 30th, 40th, 50th, 60th and beyond. Enter the age or year at checkout.",
  },
  {
    q: "Do you ship directly to the birthday person?",
    a: "Absolutely. Enter their address as the shipping address and we'll send it straight to them, gift-boxed and ready.",
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
          Personalized Birthday Gifts That Show You Actually Thought About It
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Anyone can buy a gift card. A personalized birthday gift — one with their name, a message that means something, or a design made for them specifically — tells a different story.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every birthday gift is made to order in the US. Whether you&apos;re celebrating a milestone like a 30th or 50th birthday, or just want to give something better than flowers and a card, you&apos;ll find it here.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Below are our two most-gifted personalized birthday picks, plus the most common questions we get from birthday shoppers.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Best Personalized Birthday Gift Ideas
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
                    A delicate chain engraved with her name, initials, or a date in your choice of gold, silver, or rose gold. Comes gift-boxed and ready to give. This is the birthday gift that gets worn every day, not stored in a drawer.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, initials, or a date</li>
                    <li>&#10003; Add a birthstone for a personal touch</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/necklaces"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Name Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Birthday Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A 15 oz ceramic mug printed with their name, a birthday message, or a milestone number. Every morning coffee becomes a reminder of the day you made special. Dishwasher-safe, microwave-safe, and far more useful than another candle.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name, age, or message</li>
                    <li>&#10003; Birthday-themed and everyday styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Birthday Mugs &rarr;
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
            Give a Birthday Gift Worth Keeping
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full birthday collection — necklaces, mugs, apparel and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/birthday-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Personalized Birthday Gifts at Lovrella
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
