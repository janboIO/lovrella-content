import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Teacher Gifts Worth More Than an Apple",
  description: "Find personalized teacher gifts she will actually keep — custom mugs, necklaces and more made to order with her name on it.",
  openGraph: {
    title: "Personalized Teacher Gifts Worth More Than an Apple",
    description: "Find personalized teacher gifts she will actually keep — custom mugs, necklaces and more made to order with her name on it.",
    url: "https://lovrella.com/gifts-for-teacher/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Is it appropriate to include the class name on the mug?", a: "Yes. Many families include the grade, class name, or school year alongside the teacher's name. Enter whatever text you want at checkout." },
  { q: "Can parents pool together for a group teacher gift?", a: "Absolutely. Our necklaces and mugs are popular group gifts from the whole class. Split the cost and include a note from everyone." },
  { q: "What is the most appropriate teacher gift for end of year?", a: "The personalized mug is the safest and most appreciated end-of-year teacher gift. It is practical, personal, and something she will use every day." },
  { q: "How quickly can I get a teacher gift?", a: "Most orders ship within 2-4 business days. Order early in Teacher Appreciation Week or before the last day of school to ensure timely delivery." }
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
          Personalized Teacher Gifts Worth More Than an Apple
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Teachers get a lot of candles, lotions, and generic &apos;World&apos;s Best Teacher&apos; mugs. A personalized gift — one with her name on it, made specifically for her — is the one that actually gets remembered. That gets kept.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every teacher gift is made to order in the US. Whether it is the end of the school year, Teacher Appreciation Week, a holiday, or a retirement, there is something here that feels genuinely personal.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two top picks for teacher gifts, plus the questions we hear most from parents and students shopping for their teachers.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Personalized Teacher Gift Ideas</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Teacher Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name and a message that goes beyond the generic. Every morning she fills it with coffee and feels genuinely appreciated by the person who gave it. Dishwasher-safe, microwave-safe, and actually used — not displayed ironically.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Her name and a personal teacher message</li>
                    <li>&#10003; Elegant and fun teacher design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Teacher Mugs &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Name Necklace</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with her name — a gift she will wear outside the classroom and think about every time she does. A step above the standard teacher gift and something she will genuinely treasure. Comes gift-boxed.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; Her name or initials engraved</li>
                    <li>&#10003; Script or block letter styles</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Teacher Necklaces &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Appreciate Your Teacher with Something Personal</h2>
          <p className="text-gray-700 mb-6">Browse our full teacher gift collection — mugs, necklaces and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/gifts-for-teacher" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Teacher Gifts at Lovrella
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
