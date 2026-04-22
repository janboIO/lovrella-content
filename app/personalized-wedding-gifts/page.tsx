import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Wedding Gifts for the Couple Who Has Everything",
  description:
    "Give a wedding gift they'll keep forever — custom necklaces, mugs and keepsakes personalized with their names and date, made to order.",
  openGraph: {
    title: "Personalized Wedding Gifts for the Couple Who Has Everything",
    description:
      "Give a wedding gift they'll keep forever — custom necklaces, mugs and keepsakes personalized with their names and date, made to order.",
    url: "https://lovrella.com/personalized-wedding-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "How far in advance should I order a wedding gift?",
    a: "Order at least 2–3 weeks before the wedding to ensure the gift arrives in time. Most items ship within 2–4 business days.",
  },
  {
    q: "Can I personalize with the couple's new shared last name?",
    a: "Yes. Enter the name as you'd like it to appear at checkout. If they haven't changed their name yet, you can use their first names or initials instead.",
  },
  {
    q: "Do you have gifts for the bridal party too?",
    a: "Yes — our necklaces are popular bridesmaid gifts. Order multiple with different names and add a group discount code at checkout.",
  },
  {
    q: "Can I ship directly to the couple?",
    a: "Absolutely. Enter their address at checkout and add a gift note. We'll send everything gift-wrapped and ready for them.",
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
          Personalized Wedding Gifts for the Couple Who Has Everything
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Most wedding registries are full. The couple already picked out the towels, the stand mixer, and the serving dishes. A personalized gift — one with their names and wedding date on it — is the one that stands apart from everything else on the table.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every wedding gift is made to order in the US. Whether you&apos;re a guest looking for something off-registry, or part of the wedding party choosing a gift for the couple, you&apos;ll find something that feels personal and lasting.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here are our two best-selling personalized wedding gift options, plus answers to the most common questions.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top Personalized Wedding Gift Ideas
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Custom Wedding Necklace
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A delicate chain engraved with her new name, the wedding date, or a short word that means something to the couple. A beautiful gift for the bride from bridesmaids, close friends, or family — and one she&apos;ll wear long after the wedding day.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave her name, the date, or a word</li>
                    <li>&#10003; Script or block letter styles available</li>
                    <li>&#10003; Gift-wrapped and ready to give</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/necklaces"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Wedding Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Couple&apos;s Mug Set
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A pair of 15 oz ceramic mugs printed with the couple&apos;s names and wedding date. Practical, personal, and the kind of gift that gets used every single morning. Dishwasher-safe, microwave-safe, and a much more thoughtful choice than another picture frame.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Names and wedding date printed on each mug</li>
                    <li>&#10003; Multiple design styles available</li>
                    <li>&#10003; Ships in protective gift boxes</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Wedding Mugs &rarr;
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
            Give a Wedding Gift They Will Keep
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full wedding gift collection — necklaces, mugs and keepsakes, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/personalized-wedding-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Personalized Wedding Gifts at Lovrella
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
