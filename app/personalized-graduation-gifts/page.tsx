import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Graduation Gifts That Mark the Milestone",
  description:
    "Celebrate the graduate with a personalized gift they'll keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
  openGraph: {
    title: "Personalized Graduation Gifts That Mark the Milestone",
    description:
      "Celebrate the graduate with a personalized gift they'll keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
    url: "https://lovrella.com/personalized-graduation-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "How quickly can I get a graduation gift?",
    a: "Most orders ship within 2–4 business days. Order early during graduation season (April–June) as volume increases significantly.",
  },
  {
    q: "Can I include their school name or degree on the mug?",
    a: "Yes. Enter any text you want at checkout — school name, degree, graduation year, or a personal message all work well.",
  },
  {
    q: "Is there a gift for a male graduate?",
    a: "Our mugs and apparel work for any graduate. Our necklace collection is designed for her — check our full catalog for additional options for him.",
  },
  {
    q: "Can you ship directly to the graduate at a different address?",
    a: "Absolutely. Enter their address at checkout and we'll send it directly, gift-boxed and with your personal note.",
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
          Personalized Graduation Gifts That Mark the Milestone
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Graduation isn&apos;t just the end of school — it&apos;s the beginning of everything that comes next. A personalized gift marks that transition in a way a gift card or a check never could.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every graduation gift is made to order in the US with the graduate&apos;s name, graduation year, or a message that honors the years of work it took to get here. Whether it&apos;s high school, college, or an advanced degree, there&apos;s something here that will last.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here are our two most popular graduation gift picks, plus answers to the questions we hear most during graduation season.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Best Personalized Graduation Gift Ideas
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Graduation Necklace
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A delicate chain engraved with her name and graduation year — the perfect keepsake to carry her achievement into the next chapter. Comes gift-boxed and ready to give at the party or ceremony.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Engrave name, graduation year, or a word</li>
                    <li>&#10003; Add a birthstone charm</li>
                    <li>&#10003; Gift-wrapped and ready to present</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/necklaces"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Graduation Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Graduation Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A 15 oz ceramic mug printed with the graduate&apos;s name, degree, or a message that celebrates what they&apos;ve achieved. Every morning coffee in their new life starts with a reminder of how far they&apos;ve come. Dishwasher-safe and built to last.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Custom name, graduation year, or message</li>
                    <li>&#10003; High school and college design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Graduation Mugs &rarr;
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
            Honor the Graduate with Something Lasting
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full graduation collection — necklaces, mugs, apparel and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/personalized-graduation-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Personalized Graduation Gifts at Lovrella
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
