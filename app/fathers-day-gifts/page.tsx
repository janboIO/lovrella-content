import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Father's Day Gifts He Will Actually Use",
  description:
    "Skip the tie. Find personalized Father's Day gifts dad will actually use — custom mugs, apparel and more made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Father's Day Gifts He Will Actually Use",
    description:
      "Skip the tie. Find personalized Father's Day gifts dad will actually use — custom mugs, apparel and more made to order and shipped to your door.",
    url: "https://lovrella.com/fathers-day-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "How far in advance should I order for Father's Day?",
    a: "Order at least 2 weeks before Father's Day for standard shipping. Most personalized items ship within 2–4 business days.",
  },
  {
    q: "What sizes are available for apparel?",
    a: "We carry sizes S through 4XL for most apparel styles. Size charts are shown on each product page.",
  },
  {
    q: "Can I put multiple kids' names on the mug or shirt?",
    a: "Yes — at checkout you can enter all names and we'll include them in the design. Great for a gift from all the kids.",
  },
  {
    q: "Do you ship to a different address if it's a surprise?",
    a: "Yes. Enter dad's address as the shipping address and add a gift note at checkout. We'll make sure it arrives looking like a gift.",
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
          Personalized Father&apos;s Day Gifts He Will Actually Use
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Dad says he doesn&apos;t need anything. He&apos;s wrong. What he needs is a gift that shows you see him as more than just the guy who fixes things and pays for stuff — something with his name on it, made for him, from you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lovrella&apos;s Father&apos;s Day gifts are made to order in the US, shipped directly to your door, and designed to get daily use. No more gifts that sit in a box. These get used.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here are our two top picks for Father&apos;s Day, plus answers to the questions we get every year.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Best Personalized Father&apos;s Day Gifts
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Father&apos;s Day Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A large 15 oz ceramic mug with his name, a dad joke, or a message from the kids. Every morning he reaches for a coffee, he&apos;ll reach for this one. Dishwasher-safe, microwave-safe, and far better than a generic &apos;World&apos;s Best Dad&apos; mug.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name, message, or dad joke</li>
                    <li>&#10003; 10+ Father&apos;s Day design templates</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Father&apos;s Day Mugs &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">👕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Custom Dad Apparel
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A high-quality tee or hoodie printed with his name, role (Dad, Grandpa, Pop), and a design he&apos;ll actually wear in public. Soft, durable, and made to order — not the scratchy novelty shirt that ends up in the donation pile.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Premium cotton-blend tee or hoodie</li>
                    <li>&#10003; Custom name and role</li>
                    <li>&#10003; Multiple color and style options</li>
                    <li>&#10003; True-to-size fit, wash-and-wear durable</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/apparel"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Custom Apparel &rarr;
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
            Find the Gift He&apos;ll Actually Keep
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full Father&apos;s Day collection — mugs, apparel and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/fathers-day-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Father&apos;s Day Gifts at Lovrella
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
