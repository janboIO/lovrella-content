import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Mother's Day Gifts She Will Cherish for Years",
  description:
    "Give mom a personalized gift she'll actually keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Mother's Day Gifts She Will Cherish for Years",
    description:
      "Give mom a personalized gift she'll actually keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
    url: "https://lovrella.com/mothers-day-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "How far in advance should I order for Mother's Day?",
    a: "We recommend ordering at least 2 weeks before Mother's Day to ensure standard shipping arrives in time. Most orders ship within 2–4 business days.",
  },
  {
    q: "Can I include a gift message?",
    a: "Yes — add a personal note at checkout and we'll include it with the order. No extra charge.",
  },
  {
    q: "What if I want both her name and her kids' names on the necklace?",
    a: "You can choose from single-name, multi-name, and bar necklace styles at checkout. Select the number of names and we'll engrave each one.",
  },
  {
    q: "Do you ship directly to mom if I'm ordering as a surprise?",
    a: "Absolutely. Just enter her address as the shipping address at checkout and leave a gift message — we'll handle the rest.",
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
          Personalized Mother&apos;s Day Gifts She Will Cherish for Years
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Flowers fade. Chocolates disappear. A personalized gift stays — on her dresser, in her kitchen, or around her neck — and reminds her every single day that someone took the time to think about her, specifically.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every Mother&apos;s Day gift is made to order in the US. Whether she&apos;s a new mom, a grandma celebrating her first Mother&apos;s Day in that role, or simply the woman who does everything for everyone, there&apos;s something here that will feel genuinely personal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Below are our two most-gifted picks for Mother&apos;s Day, plus the questions we hear most this time of year.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Best Personalized Mother&apos;s Day Gifts
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
                    A delicate chain engraved with her name, the names of her kids, or a date that matters. Comes gift-boxed and ready to give. This is the one she puts on Mother&apos;s Day morning and doesn&apos;t take off.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, kids&apos; names, or a date</li>
                    <li>&#10003; Add a birthstone for each child</li>
                    <li>&#10003; Gift-wrapped and ready to present</li>
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
                    Personalized Mother&apos;s Day Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A 15 oz ceramic mug with her name, a heartfelt message, or a funny mom quote she&apos;ll actually appreciate. Every morning coffee becomes a reminder. Dishwasher-safe, microwave-safe, and built to outlast every generic mug she owns.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name, message, or design</li>
                    <li>&#10003; 10+ Mother&apos;s Day design templates</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Mother&apos;s Day Mugs &rarr;
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
            Ready to Make Her Day?
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full Mother&apos;s Day collection — necklaces, mugs, apparel and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/mothers-day-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Mother&apos;s Day Gifts at Lovrella
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
