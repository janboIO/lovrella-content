import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personalized Gifts for Grandma That Come From the Heart",
  description: "Find personalized gifts for grandma she will treasure — custom necklaces with grandkids' names, personalized mugs and more, made to order.",
  openGraph: {
    title: "Personalized Gifts for Grandma That Come From the Heart",
    description: "Find personalized gifts for grandma she will treasure — custom necklaces with grandkids' names, personalized mugs and more, made to order.",
    url: "https://lovrella.com/gifts-for-grandma/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
  { q: "Can I include all the grandkids' names on one necklace?", a: "Yes. We offer multi-name necklaces that can include several names. Enter each grandchild's name at checkout and we will engrave them all." },
  { q: "Can I add each grandchild's birthstone to the necklace?", a: "Yes. Birthstone charms are available as add-ons. Select the birth month for each grandchild at checkout." },
  { q: "Is this a good group gift from all the grandkids?", a: "Perfect. The grandma necklace with all the grandkids' names is one of our most popular group gifts — split the cost and sign the card together." },
  { q: "How quickly can I get a grandma gift?", a: "Most orders ship within 2-4 business days. Choose expedited shipping for upcoming holidays or birthdays." }
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
          Personalized Gifts for Grandma That Come From the Heart
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">Grandma does not need more stuff. What she wants is something that reminds her of the people she loves — the grandkids&apos; names, a family date, a message from the whole family. Something she can display on her mantel or wear every day.</p>
          <p className="text-gray-700 leading-relaxed mb-4">At Lovrella, every grandma gift is made to order in the US. Whether it is Mother&apos;s Day, her birthday, Christmas, or just a way to say we love you, there is a personalized option here that will mean more than anything from a store shelf.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Here are our two most-loved picks for grandma, plus the questions we hear most from grandkids and parents shopping for her.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Most Loved Personalized Gifts for Grandma</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">📿</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Grandma Necklace with Grandkids&apos; Names</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A delicate chain engraved with each grandchild&apos;s name — the gift she puts on and never takes off. Available in single-name and multi-name styles so every grandchild can be included. Comes gift-boxed and ready to give.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; Sterling silver or 18k gold-filled chain</li>
                    <li>&#10003; All grandkids&apos; names engraved</li>
                    <li>&#10003; Add each grandchild&apos;s birthstone</li>
                    <li>&#10003; Gift-wrapped, ready to present</li>
                  </ul>
                  <a href="https://lovrella.com/collections/necklaces" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Grandma Necklaces &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">☕</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Grandma Mug</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">A 15 oz ceramic mug with her name, the grandkids&apos; names, or a warm message that captures what she means to the family. Every morning she drinks her tea or coffee with all of you with her. Dishwasher-safe and built to last.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&#10003; 15 oz ceramic, dishwasher &amp; microwave safe</li>
                    <li>&#10003; Her name and grandkids&apos; names or message</li>
                    <li>&#10003; Grandma-themed design styles</li>
                    <li>&#10003; Ships in a protective gift box</li>
                  </ul>
                  <a href="https://lovrella.com/collections/mugs" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    Shop Grandma Mugs &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Give Grandma a Gift She Will Treasure</h2>
          <p className="text-gray-700 mb-6">Browse our full grandma gift collection — necklaces, mugs and more, all personalized to order.</p>
          <a href="https://lovrella.com/collections/gifts-for-grandma" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            Shop Grandma Gifts at Lovrella
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
