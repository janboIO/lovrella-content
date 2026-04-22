import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Valentine's Day Gifts Beyond Flowers and Chocolate",
  description:
    "Find personalized Valentine's Day gifts that go beyond the generic — custom necklaces, mugs and apparel made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Valentine's Day Gifts Beyond Flowers and Chocolate",
    description:
      "Find personalized Valentine's Day gifts that go beyond the generic — custom necklaces, mugs and apparel made to order and shipped to your door.",
    url: "https://lovrella.com/valentines-day-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "How far in advance should I order for Valentine's Day?",
    a: "Order at least 10 days before February 14 for standard shipping. Rush options are available at checkout if you're cutting it close.",
  },
  {
    q: "Can I engrave a date instead of a name?",
    a: "Absolutely. Dates, initials, coordinates, and short phrases all work well on our necklaces and mugs. You'll enter the text at checkout.",
  },
  {
    q: "What if I want to give a gift to my boyfriend or husband?",
    a: "Our mugs and apparel are great for him too. Our necklace collection is designed for her, but check our full collection for more options.",
  },
  {
    q: "Do you ship in discreet packaging for surprises?",
    a: "Yes. All orders ship in plain outer packaging — no branding on the outside. The gift-boxed product is inside.",
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
          Personalized Valentine&apos;s Day Gifts Beyond Flowers and Chocolate
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Flowers die in a week. Chocolate lasts a few days. A personalized Valentine&apos;s Day gift — one with her name, your date, or a message only the two of you would understand — lasts years and says something flowers never could.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every Valentine&apos;s gift is made to order in the US. Whether you&apos;ve been together two months or twenty years, there&apos;s something here that will feel real, not like something grabbed off a shelf at the last minute.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here are our two most-gifted Valentine&apos;s Day picks, plus answers to the questions we get most in February.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top Personalized Valentine&apos;s Day Gifts
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
                    A delicate chain engraved with her name, your initials together, or a date that belongs to just the two of you. Comes gift-boxed and ready to give. This is the gift she puts on Valentine&apos;s Day and wears every day after.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, initials, or a date</li>
                    <li>&#10003; Script or block letter styles</li>
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
                    Personalized Couples Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A 15 oz ceramic mug with your names, a love note, or a quote that means something to you both. Every morning coffee becomes a small reminder of what you have. Dishwasher-safe, microwave-safe, and far more meaningful than a box of chocolates.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom names, message, or design</li>
                    <li>&#10003; 10+ Valentine&apos;s design templates</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Valentine&apos;s Day Mugs &rarr;
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
            Make This Valentine&apos;s Day Personal
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full Valentine&apos;s Day collection — necklaces, mugs and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/valentines-day-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Valentine&apos;s Day Gifts at Lovrella
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
