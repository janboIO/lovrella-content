import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Retirement Gifts That Honor a Career",
  description:
    "Celebrate retirement with a personalized gift worth keeping — custom mugs, apparel and more engraved with their name and years of service, made to order.",
  openGraph: {
    title: "Personalized Retirement Gifts That Honor a Career",
    description:
      "Celebrate retirement with a personalized gift worth keeping — custom mugs, apparel and more engraved with their name and years of service, made to order.",
    url: "https://lovrella.com/personalized-retirement-gifts/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  {
    q: "Can I include their years of service on the mug?",
    a: "Yes. Enter whatever text you want at checkout — years of service, job title, department, or a personal message. We'll print it exactly as entered.",
  },
  {
    q: "Do you have group retirement gift options?",
    a: "For office groups, we recommend a large mug and apparel combination. You can order multiple items with different messages from colleagues at checkout.",
  },
  {
    q: "What if I want something funny for a coworker?",
    a: "Our mug and apparel designs include funny retirement options. Select the 'funny' design category at checkout to see all the options.",
  },
  {
    q: "How quickly can I get a retirement gift?",
    a: "Most orders ship within 2–4 business days. Choose expedited shipping if the retirement party is coming up soon.",
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
          Personalized Retirement Gifts That Honor a Career
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Decades of work deserve more than a card and a handshake. A personalized retirement gift — one with their name on it, that marks the transition from career to the next chapter — is the one they&apos;ll remember.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Lovrella, every retirement gift is made to order in the US. Whether it&apos;s a colleague retiring after 30 years, a parent finally stepping away from the office, or a teacher finishing their last school year, there&apos;s something here that honors the journey.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here are our two most-gifted retirement picks, plus the most common questions from retirement gift shoppers.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Best Personalized Retirement Gift Ideas
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Retirement Mug
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A 15 oz ceramic mug with their name, years of service, and a message that celebrates the career they&apos;ve had. Every morning of their retirement starts with this. Dishwasher-safe, microwave-safe, and far more personal than a generic plaque.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Name, years of service, and custom message</li>
                    <li>&#10003; Funny and heartfelt retirement designs</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/mugs"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Retirement Mugs &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">👕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Custom Retirement Apparel
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A high-quality tee or hoodie printed with their name and a retirement message they&apos;ll actually want to wear. Whether it&apos;s &apos;Retired — Under New Management&apos; or something more sincere, we can print it. Soft, durable, and made for the life they&apos;ve earned.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Premium cotton-blend tee or hoodie</li>
                    <li>&#10003; Custom name and retirement message</li>
                    <li>&#10003; Multiple color and style options</li>
                    <li>&#10003; True-to-size fit, wash-and-wear durable</li>
                  </ul>
                  <a
                    href="https://lovrella.com/collections/apparel"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    Shop Retirement Apparel &rarr;
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
            Celebrate the Career They&apos;ve Built
          </h2>
          <p className="text-gray-700 mb-6">
            Browse our full retirement collection — mugs, apparel and more, all personalized to order.
          </p>
          <a
            href="https://lovrella.com/collections/personalized-retirement-gifts"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            Shop Personalized Retirement Gifts at Lovrella
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
