import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Gifts for Him That He Will Actually Use",
  description: "Find personalized gifts for him that skip the generic — custom mugs, apparel and more made to order with his name on it, shipped to your door.",
  openGraph: {
    title: "Personalized Gifts for Him That He Will Actually Use",
    description: "Find personalized gifts for him that skip the generic — custom mugs, apparel and more made to order with his name on it, shipped to your door.",
    url: "https://lovrella.com/gifts-for-him/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "What is the most popular personalized gift for men?", a: "The personalized mug is our top seller for men — practical, used daily, and personal enough to feel like a real gift rather than a placeholder." },
  { q: "What sizes are available for apparel?", a: "We carry sizes S through 4XL for most styles. Size charts are available on each product page to help you choose." },
  { q: "Can I include a message from multiple people?", a: "Yes. Add a gift note at checkout listing everyone who contributed — we will include it with the order." },
  { q: "How quickly can I get a personalized gift for him?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if you need it sooner." }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-6 py-4">
        <a href="https://lovrella.com" className="text-xl font-semibold tracking-tight text-gray-900 hover:text-rose-600 transition-colors">
          Lovrella
        </a>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
          Personalized Gifts for Him That He Will Actually Use
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Men are notoriously hard to shop for. He says he does not need anything. He is wrong. What he needs is something with his name on it — something made for him, chosen for him, that he will actually reach for every day.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every gift for him is made to order in the US. Whether it is a birthday, Father&apos;s Day, an anniversary, or a just-because gift, you will find something here that feels personal and genuinely useful — not another gadget he will never touch.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two top personalized picks for him, plus the questions we get most from people shopping for the men in their lives.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Gifts for Him</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Mug for Him</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with his name, a message, or a joke that lands. Every morning he reaches for a coffee, he reaches for this. Dishwasher-safe, microwave-safe, and far more thoughtful than another generic gift card.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; His name, a message, or a custom design</li>
                    <li>&#10003; Bold and minimal design styles for men</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Mugs for Him &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">👕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Apparel for Him</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A high-quality tee or hoodie printed with his name, role, or a message he will actually wear in public. Soft, durable, and made to order — not the scratchy novelty shirt that lives in the donation pile after one wear.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Premium cotton-blend tee or hoodie</li>
                    <li>&#10003; His name, role, or custom message</li>
                    <li>&#10003; Multiple colors and styles available</li>
                    <li>&#10003; True-to-size fit, wash-and-wear durable</li>
                  </ul>
                  <a href="https://lovrella.com/collections/apparel" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Custom Apparel &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Find a Gift He Will Actually Keep</h2>
          <p className="text-gray-700 mb-6">Browse our full collection of personalized gifts for him — mugs, apparel and more, all made to order.</p>
          <a href="https://lovrella.com/collections/gifts-for-him" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Gifts for Him at Lovrella
          </a>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-500">
          Written by <span className="font-medium text-gray-700">Jan Tore Boe</span>, founder of{" "}
          <a href="https://lovrella.com" className="text-rose-600 hover:underline">Lovrella</a>.
        </div>
      </main>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://lovrella.com" className="text-rose-600 hover:underline">Lovrella</a>
          {" "}&mdash; Personalized gifts made with care.
        </p>
      </footer>
    </div>
  );
}
