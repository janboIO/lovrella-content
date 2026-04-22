import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Birthday Gifts She Will Actually Keep",
  description:
    "Find the perfect personalized birthday gift — custom necklaces, mugs and apparel made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Birthday Gifts She Will Actually Keep",
    description:
      "Find the perfect personalized birthday gift — custom necklaces, mugs and apparel made to order and shipped to your door.",
    url: "https://lovrella.com/birthday-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "How long does personalization take?",
    a: "Most personalized orders ship within 2–4 business days. Rush options are available at checkout if you need it sooner.",
  },
  {
    q: "Can I preview the design before it ships?",
    a: "Yes — every order includes a digital proof. You'll receive an email preview within 24 hours and we won't print until you approve.",
  },
  {
    q: "What if the birthday girl doesn't like it?",
    a: "We offer hassle-free returns within 30 days. Personalized items can be reprinted with corrections at no extra cost if we made an error.",
  },
  {
    q: "Do you ship across the US?",
    a: "Yes, we ship to all 50 states. Standard shipping is free on orders over $35.",
  },
];

export default function BirthdayGiftsPage() {
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
        {/* H1 */}
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
          Personalized Birthday Gifts She Will Actually Keep
        </h1>

        {/* Intro */}
        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Most birthday gifts end up in a drawer. A personalized gift — one
            with her name, a date that matters, or a message only you would
            know — stays on the shelf, the desk, or around her neck for years.
            That&apos;s the difference between something bought and something given.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every piece is made to order in the US and ships
            directly to your door. Whether she&apos;s turning 30, 40, or celebrating
            a milestone birthday, you&apos;ll find something here that feels like it
            was made just for her — because it was.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Below are two of our best-selling birthday gift picks, plus answers
            to the questions we hear most. If you&apos;re in a hurry, the shop link
            at the bottom goes straight to our full birthday collection.
          </p>
        </section>

        {/* Product Highlights */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top Personalized Birthday Picks
          </h2>

          <div className="space-y-8">
            {/* Necklace */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">
                  📿
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Custom Name Necklace
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A delicate chain with her name or initials in your choice of
                    gold, silver, or rose gold. Comes gift-boxed and ready to
                    give. This is the gift that goes on immediately and rarely
                    comes off — we hear that from customers all the time.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Sterling silver or 18k gold-filled chain</li>
                    <li>✓ Script or block letter styles</li>
                    <li>✓ Add a birthstone charm</li>
                    <li>✓ Gift-wrapped, ready to present</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/necklaces"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Custom Necklaces →
                  </a>
                </div>
              </div>
            </div>

            {/* Mug */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">
                  ☕
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Birthday Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A large 15 oz ceramic mug printed with her name, a birthday
                    message, or an inside joke that will make her laugh every
                    morning. Dishwasher-safe, microwave-safe, and designed to
                    outlast every generic mug in her cabinet.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>✓ Custom name, message, or design</li>
                    <li>✓ 10+ design templates to choose from</li>
                    <li>✓ Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Birthday Mugs →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="rounded-2xl bg-rose-50 border border-rose-100 p-10 text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Find the Perfect Gift?
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full birthday gift collection — necklaces, mugs,
            apparel, and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/birthday-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Birthday Gifts at Lovrella
          </a>
        </section>

        {/* Author Byline */}
        <div className="border-t border-gray-100 pt-8 text-sm text-gray-500">
          Written by{" "}
          <span className="font-medium text-gray-700">Jan Tore Boe</span>,
          founder of{" "}
          <a
            href="https://lovrella.com"
            className="text-rose-600 hover:underline"
          >
            Lovrella
          </a>
          .
        </div>
      </main>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://lovrella.com"
            className="text-rose-600 hover:underline"
          >
            Lovrella
          </a>{" "}
          &mdash; Personalized gifts made with care.
        </p>
      </footer>
    </div>
  );
}
