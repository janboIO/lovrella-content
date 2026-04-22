import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "app");

function esc(str) {
  return str.replace(/'/g, "&apos;");
}

const occasions = [
  {
    slug: "thanksgiving",
    metaTitle: "Personalized Thanksgiving Gifts That Go Beyond the Dinner Table",
    metaDesc: "Find personalized Thanksgiving gifts they will actually keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
    h1: "Personalized Thanksgiving Gifts That Go Beyond the Dinner Table",
    intro: [
      "Thanksgiving is about gratitude — and nothing shows gratitude better than a gift made specifically for the person you are giving it to. Not a candle. Not a wine bottle. Something with their name on it.",
      "At Lovrella, every Thanksgiving gift is made to order in the US. Whether you are hosting, attending, or sending something to someone you cannot be with this year, there is a personalized option here that will be remembered long after the leftovers are gone.",
      "Here are our two top picks for Thanksgiving gifting, plus the questions we get most this time of year.",
    ],
    h2Products: "Top Personalized Thanksgiving Gift Ideas",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain engraved with her name, initials, or a word that captures what she means to you. Comes gift-boxed and ready to present at the table or mail across the country. A Thanksgiving gift she will still be wearing in January.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave name, initials, or a short word", "Script or block letter styles", "Gift-wrapped, ready to present"],
      cta: "Shop Custom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Thanksgiving Mug",
      desc: "A 15 oz ceramic mug with her name and a warm Thanksgiving design or message. Every morning through the holiday season she reaches for this one first. Dishwasher-safe, microwave-safe, and far more thoughtful than a bottle of wine.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Custom name and holiday message", "Thanksgiving and harvest design styles", "Ships in a protective gift box"],
      cta: "Shop Thanksgiving Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "How quickly can I get a Thanksgiving gift?", a: "Most orders ship within 2-4 business days. Order at least 10 days before Thanksgiving to ensure standard shipping arrives in time." },
      { q: "Can I send it directly to someone in another state?", a: "Yes. We ship to all 50 states. Enter their address at checkout and add a personal note — we will include it with the gift." },
      { q: "What if I want to give a gift to multiple family members?", a: "Add multiple items to your cart, each with different personalization. We process each separately to make sure every name is correct." },
      { q: "Do you offer gift wrapping?", a: "Necklaces come gift-boxed. Mugs ship in protective boxes. Select gift wrapping at checkout for an added presentation layer." },
    ],
    ctaHeading: "Give Thanks with Something Personal",
    ctaBody: "Browse our full Thanksgiving collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Thanksgiving Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/thanksgiving-gifts",
  },
  {
    slug: "easter",
    metaTitle: "Personalized Easter Gifts Beyond Candy and Plastic Eggs",
    metaDesc: "Find personalized Easter gifts for the whole family — custom necklaces, mugs and keepsakes made to order and shipped to your door.",
    h1: "Personalized Easter Gifts Beyond Candy and Plastic Eggs",
    intro: [
      "Easter baskets are great at age seven. By the time you are buying for a mom, a grandmother, or a grown sister, they deserve something better than cellophane grass and chocolate. A personalized gift that lasts.",
      "At Lovrella, every Easter gift is made to order in the US. Whether you are celebrating the holiday with family, sending something to someone far away, or looking for a gift that marks the season with meaning, you will find it here.",
      "Here are our top picks for Easter gifting, plus answers to the questions we hear most in the spring.",
    ],
    h2Products: "Best Personalized Easter Gift Ideas",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain with her name or initials in gold, silver, or rose gold. Comes gift-boxed and ready to give — a grown-up Easter gift that she will wear year-round, not just for the holiday.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave her name or initials", "Add a birthstone charm", "Gift-wrapped and ready to present"],
      cta: "Shop Custom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Easter Mug",
      desc: "A 15 oz ceramic mug with her name and a spring design or cheerful message. Every morning of the Easter season starts with something made specifically for her. Dishwasher-safe, microwave-safe, and genuinely useful.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Custom name and spring message", "Easter and year-round design styles", "Ships in a protective gift box"],
      cta: "Shop Easter Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "How far in advance should I order for Easter?", a: "Order at least 10 days before Easter for standard shipping. Most orders ship within 2-4 business days." },
      { q: "Is there something appropriate for a child?", a: "Our mugs make a wonderful gift for older kids and teens. For younger children, check our full collection for smaller keepsake options." },
      { q: "Can I send it directly to a family member in another city?", a: "Absolutely. Enter their address at checkout and add a gift note — we ship to all 50 states." },
      { q: "Do the mugs come gift-wrapped?", a: "Mugs ship in protective boxes. Select gift wrapping at checkout for an extra presentation touch." },
    ],
    ctaHeading: "Make Easter Memorable This Year",
    ctaBody: "Browse our full Easter collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Easter Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/easter-gifts",
  },
  {
    slug: "new-years",
    metaTitle: "Personalized New Year's Gifts to Start the Year Right",
    metaDesc: "Celebrate the new year with a personalized gift they will keep — custom necklaces, mugs and more made to order and shipped to your door.",
    h1: "Personalized New Year's Gifts to Start the Year Right",
    intro: [
      "A new year is a moment to celebrate the people who made the last one worth it. A personalized gift — with their name, a word that captures who they are, or the year ahead — is a much better way to do that than a bottle of champagne.",
      "At Lovrella, every New Year gift is made to order in the US. Whether you are celebrating with someone in person or sending something to a friend across the country, there is something here that will feel genuinely personal.",
      "Here are our two top picks for New Year gifting, plus the questions we hear most at the end of December.",
    ],
    h2Products: "Top Personalized New Year Gift Ideas",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain engraved with her name, a word for the year ahead, or the year itself. Comes gift-boxed and ready to give on New Year's Eve or January 1st. A gift that carries the intention of a fresh start.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave her name, a word, or the new year", "Script or block letter styles", "Gift-wrapped, ready to present"],
      cta: "Shop Custom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized New Year Mug",
      desc: "A 15 oz ceramic mug with her name and a message for the year ahead. Every morning of the new year starts with this. Dishwasher-safe, microwave-safe, and a daily reminder that someone celebrated the start of the year with her in mind.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Custom name and new year message", "Multiple design styles available", "Ships in a protective gift box"],
      cta: "Shop New Year Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Can I order for delivery before New Year's Eve?", a: "Yes. Most orders ship within 2-4 business days. Order by December 26 for standard shipping to arrive by December 31 in most locations." },
      { q: "Can I engrave the new year on the necklace?", a: "Yes. Enter any text at checkout — the year, a word, or a short phrase. We will engrave it exactly as written." },
      { q: "Is this a good gift for a friend or just a partner?", a: "A New Year gift works beautifully for anyone — a best friend, a sister, a colleague, or a partner. The personalization makes it work for any relationship." },
      { q: "Do you ship on December 31?", a: "We process orders on business days. Orders placed December 30-31 ship the next business day in the new year." },
    ],
    ctaHeading: "Start the New Year with Something Personal",
    ctaBody: "Browse our full New Year collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop New Year Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/new-years-gifts",
  },
  {
    slug: "baby-shower",
    metaTitle: "Personalized Baby Shower Gifts Everyone Will Remember",
    metaDesc: "Stand out at the baby shower with a personalized gift mom will actually keep — custom necklaces, mugs and keepsakes made to order.",
    h1: "Personalized Baby Shower Gifts Everyone Will Remember",
    intro: [
      "Baby showers produce a mountain of onesies, blankets, and bottle sets. A personalized gift — made for the mom, with the baby's name on it — is the one that stands out. The one she saves.",
      "At Lovrella, every baby shower gift is made to order in the US. Whether you know the name already or are working with initials, there is a beautifully personal option here that will mean more than anything off a registry.",
      "Here are our two most-gifted baby shower picks, plus answers to the questions we get most from shower guests.",
    ],
    h2Products: "Best Personalized Baby Shower Gift Ideas",
    product1: { emoji: "📿", name: "Mom Necklace with Baby's Name",
      desc: "A delicate chain engraved with the baby's name — a keepsake for the new mom that she will wear for years. This is the gift that makes the whole room go quiet for a moment. Comes gift-boxed and ready to present at the shower.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engraved with the baby's name", "Add the birth month birthstone", "Gift-wrapped and ready to present"],
      cta: "Shop Mom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "New Mom Personalized Mug",
      desc: "A 15 oz ceramic mug with the baby's name, the mom's name, or a message that captures the beautiful chaos of new parenthood. Every early morning feeding starts with this. Dishwasher-safe and exactly what she needs.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Baby's name, mom's name, or custom message", "Funny and heartfelt new mom designs", "Ships in a protective gift box"],
      cta: "Shop New Mom Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "What if the baby's name has not been decided yet?", a: "You can use initials, or order a mug with a non-name design like 'New Mom' and personalize with the name after the birth. We are happy to help." },
      { q: "Can I bring this to the shower or should I ship it?", a: "Both work. We can ship directly to the mom-to-be if you enter her address at checkout, or ship to you in time for the party." },
      { q: "How far in advance should I order?", a: "Order at least 10 days before the shower for standard shipping. Most items ship within 2-4 business days." },
      { q: "Is this appropriate as a group gift from multiple guests?", a: "Absolutely. A personalized necklace or mug makes a beautiful group gift — just select one item and split the cost among the group." },
    ],
    ctaHeading: "Give a Baby Shower Gift She Will Keep",
    ctaBody: "Browse our full baby shower collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Baby Shower Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/baby-shower-gifts",
  },
  {
    slug: "engagement",
    metaTitle: "Personalized Engagement Gifts for the Newly Engaged Couple",
    metaDesc: "Celebrate their engagement with a personalized gift they will keep — custom necklaces, mugs and keepsakes engraved with their names and date.",
    h1: "Personalized Engagement Gifts for the Newly Engaged Couple",
    intro: [
      "An engagement is one of life's biggest moments — and it deserves a gift that feels as significant as the occasion. Not another bottle of champagne. Something with their names on it, their date, something that marks what just happened.",
      "At Lovrella, every engagement gift is made to order in the US. Whether you are a friend, a family member, or part of the soon-to-be wedding party, there is something here that will feel genuinely personal and lasting.",
      "Here are our two top picks for engagement gifting, plus the questions we hear most from people shopping for newly engaged couples.",
    ],
    h2Products: "Top Personalized Engagement Gift Ideas",
    product1: { emoji: "📿", name: "Custom Engagement Necklace",
      desc: "A delicate chain engraved with her new title (Bride), their names together, or the engagement date. A beautiful gift for the bride-to-be from her closest friends or family — and one she will wear through the whole engagement and beyond.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave names, date, or 'Bride'", "Script or block letter styles", "Gift-wrapped, ready to present"],
      cta: "Shop Engagement Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Couple's Mug Set",
      desc: "A pair of 15 oz ceramic mugs printed with their names and engagement date — a practical, personal gift they will use every single morning of their engagement and marriage. Dishwasher-safe, microwave-safe, and more meaningful than flowers.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Both names and engagement date", "Multiple design styles available", "Ships in protective gift boxes"],
      cta: "Shop Couple's Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Should I engrave the engagement date or the wedding date?", a: "The engagement date is the more meaningful choice for an engagement gift. If the wedding date is not yet set, the engagement date is always the right call." },
      { q: "Is this appropriate for a bride-to-be only, or the couple?", a: "Our necklaces are perfect for the bride-to-be from her bridesmaids or family. The mug set works beautifully as a couples gift from guests." },
      { q: "How quickly can you ship?", a: "Most orders ship within 2-4 business days. Choose expedited shipping at checkout for faster delivery." },
      { q: "Can I ship directly to them?", a: "Yes. Enter their address at checkout and add a personal congratulations note — we will include it with the gift." },
    ],
    ctaHeading: "Celebrate Their Engagement with Something Lasting",
    ctaBody: "Browse our full engagement gift collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Engagement Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/engagement-gifts",
  },
  {
    slug: "bridal-shower",
    metaTitle: "Personalized Bridal Shower Gifts She Will Love Before the Big Day",
    metaDesc: "Find personalized bridal shower gifts that stand out — custom necklaces engraved with her name, mugs for the bride-to-be, made to order.",
    h1: "Personalized Bridal Shower Gifts She Will Love Before the Big Day",
    intro: [
      "Bridal showers have a lot of kitchen gadgets and monogrammed towels. Stand out with something she will actually wear or use every day — a gift made for her, with her name on it, that she will keep long after the wedding.",
      "At Lovrella, every bridal shower gift is made to order in the US. Whether you are the maid of honor, a bridesmaid, or a close friend looking for the perfect pre-wedding gift, you will find something here that feels genuinely personal.",
      "Here are our two most-gifted bridal shower picks, plus the questions we hear most from the wedding party.",
    ],
    h2Products: "Best Personalized Bridal Shower Gift Ideas",
    product1: { emoji: "📿", name: "Bride Necklace",
      desc: "A delicate chain engraved with her name, 'Bride', or the wedding date — a beautiful keepsake to wear through the engagement and on the wedding day itself. Comes gift-boxed and ready to present at the shower. This is the one she puts on and does not take off.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave her name, 'Bride', or the date", "Script or block letter styles", "Gift-wrapped and ready to present"],
      cta: "Shop Bride Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Bride Personalized Mug",
      desc: "A 15 oz ceramic mug with her name and 'Bride' — perfect for the morning coffee routine during the chaos of wedding planning. Dishwasher-safe, microwave-safe, and the kind of mug that actually gets used every single day.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Custom name and 'Bride' or wedding date", "Bridal design styles available", "Ships in a protective gift box"],
      cta: "Shop Bride Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Should I use her current name or her new name?", a: "Use whichever she prefers. Most brides like their current name on pre-wedding gifts. When in doubt, use her first name only — it works either way." },
      { q: "Can I order bridesmaid gifts in bulk?", a: "Yes. Add multiple items to your cart with different names. We offer group discounts — contact us before ordering for a code." },
      { q: "How far in advance should I order?", a: "Order at least 10 days before the bridal shower. Most items ship within 2-4 business days." },
      { q: "Can I ship to the venue or to her home?", a: "We ship to any US address. Enter the delivery address at checkout and add your personal note." },
    ],
    ctaHeading: "Give the Bride a Gift She Will Remember",
    ctaBody: "Browse our full bridal shower gift collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Bridal Shower Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/bridal-shower-gifts",
  },
  {
    slug: "baptism",
    metaTitle: "Personalized Baptism Gifts to Mark a Lifetime Milestone",
    metaDesc: "Find personalized baptism gifts they will keep forever — custom necklaces, mugs and keepsakes engraved with the child's name and baptism date.",
    h1: "Personalized Baptism Gifts to Mark a Lifetime Milestone",
    intro: [
      "A baptism is one of the most significant moments in a family's life — a milestone that deserves to be marked with something lasting. Not a stuffed animal that gets outgrown, but a keepsake with the child's name and date that will be saved for decades.",
      "At Lovrella, every baptism gift is made to order in the US. Whether you are a godparent, a family member, or a close friend, there is something here that honors the occasion with the care it deserves.",
      "Here are our top baptism gift picks, plus the questions we hear most from godparents and family members.",
    ],
    h2Products: "Top Personalized Baptism Gift Ideas",
    product1: { emoji: "📿", name: "Baptism Keepsake Necklace",
      desc: "A delicate chain engraved with the child's name and baptism date — a keepsake gift for the mother or for the child to receive when they are older. Comes gift-boxed and ready to present on the day of the baptism.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave child's name and baptism date", "Add a cross charm or birthstone", "Gift-wrapped, ready to present"],
      cta: "Shop Baptism Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Baptism Mug",
      desc: "A 15 oz ceramic mug for the parents, engraved with the child's name, baptism date, and a meaningful message. A practical keepsake that the family will use and remember. Dishwasher-safe and built to last as long as the memory.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Child's name, date, and message", "Elegant baptism design styles", "Ships in a protective gift box"],
      cta: "Shop Baptism Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Should I address the gift to the child or the parents?", a: "A necklace engraved for the child can be kept until they are old enough to wear it. A mug is typically for the parents. Both are meaningful — it depends on your preference." },
      { q: "Can I add a cross or religious symbol?", a: "Yes. We offer cross charm additions for our necklaces and cross design elements for mugs. Select these options at checkout." },
      { q: "How quickly can I get a baptism gift?", a: "Most orders ship within 2-4 business days. Order at least 10 days before the baptism for standard shipping." },
      { q: "Can you ship directly to the family?", a: "Absolutely. Enter their address at checkout and include a congratulations note — we will add it to the gift." },
    ],
    ctaHeading: "Honor the Baptism with Something Lasting",
    ctaBody: "Browse our full baptism gift collection — necklaces, mugs and keepsakes, all personalized to order.",
    ctaLabel: "Shop Baptism Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/baptism-gifts",
  },
  {
    slug: "confirmation",
    metaTitle: "Personalized Confirmation Gifts That Honor the Occasion",
    metaDesc: "Find personalized confirmation gifts worth keeping — custom necklaces and mugs engraved with their name and confirmation date, made to order.",
    h1: "Personalized Confirmation Gifts That Honor the Occasion",
    intro: [
      "Confirmation is a milestone that marks years of faith and preparation. It deserves a gift that reflects the significance of the moment — something with their name and date on it that they will keep, not something generic off a shelf.",
      "At Lovrella, every confirmation gift is made to order in the US. Whether you are a godparent, family member, or close friend, there is a personalized option here that honors the occasion with the meaning it deserves.",
      "Here are our two top picks for confirmation gifts, plus the most common questions we get from confirmation shoppers.",
    ],
    h2Products: "Best Personalized Confirmation Gift Ideas",
    product1: { emoji: "📿", name: "Confirmation Keepsake Necklace",
      desc: "A delicate chain engraved with their name, confirmation date, or a word of faith that means something to them. A beautiful keepsake they will wear for years and associate with this milestone. Comes gift-boxed and ready to present on the day.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave name, date, or a meaningful word", "Add a cross or birthstone charm", "Gift-wrapped, ready to present"],
      cta: "Shop Confirmation Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Confirmation Mug",
      desc: "A 15 oz ceramic mug with their name, confirmation date, and an elegant design that marks the occasion. A practical keepsake that starts every morning with a reminder of a significant day. Dishwasher-safe and made to last.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Name, date, and confirmation message", "Elegant faith-inspired design styles", "Ships in a protective gift box"],
      cta: "Shop Confirmation Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Is this appropriate for both Catholic and Protestant confirmation?", a: "Yes. Our personalization is non-denominational — you choose the text. Enter whatever is meaningful for the specific tradition you are celebrating." },
      { q: "Can I add a cross symbol to the necklace?", a: "Yes. Cross charms are available as add-ons at checkout for our necklace collection." },
      { q: "How quickly can I get a confirmation gift?", a: "Most orders ship within 2-4 business days. Order at least 10 days before the confirmation date for standard shipping." },
      { q: "Is the necklace appropriate for a teenage girl?", a: "Yes. Our necklaces are designed for all ages. The delicate chain and simple engraving style are popular with teens and adults alike." },
    ],
    ctaHeading: "Celebrate This Milestone with Something Personal",
    ctaBody: "Browse our full confirmation gift collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Confirmation Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/confirmation-gifts",
  },
  {
    slug: "sweet-16",
    metaTitle: "Personalized Sweet 16 Gifts She Will Actually Want",
    metaDesc: "Find personalized Sweet 16 gifts she will love — custom name necklaces, mugs and apparel made to order and shipped to your door.",
    h1: "Personalized Sweet 16 Gifts She Will Actually Want",
    intro: [
      "Turning 16 is a big deal — and a personalized gift that actually reflects who she is will mean more than anything from a generic wish list. Something with her name on it. Something made for her.",
      "At Lovrella, every Sweet 16 gift is made to order in the US. Whether you are a parent, a relative, or a best friend shopping for the birthday girl, there is something here that will feel special and personal.",
      "Here are our two most popular Sweet 16 picks, plus the questions we get most from Sweet 16 shoppers.",
    ],
    h2Products: "Top Personalized Sweet 16 Gift Ideas",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain with her name or initials in gold, silver, or rose gold — the gift she puts on her birthday morning and wears every day after. Comes gift-boxed and ready to present at the party or at home. This is the one she shows all her friends.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Her name or initials engraved", "Add her birthstone charm", "Gift-wrapped, ready to present"],
      cta: "Shop Sweet 16 Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Sweet 16 Mug",
      desc: "A 15 oz ceramic mug with her name and a Sweet 16 design or inside message. Every morning she reaches for this one. Dishwasher-safe, microwave-safe, and designed to outlast every generic mug in the house.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Her name and Sweet 16 design or message", "Fun teen-friendly design styles", "Ships in a protective gift box"],
      cta: "Shop Sweet 16 Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "What is the most popular Sweet 16 gift from Lovrella?", a: "The custom name necklace is our most gifted Sweet 16 item — it is personal, wearable, and comes in the gold and rose gold styles that are most popular with teens right now." },
      { q: "Can I add her birthstone to the necklace?", a: "Yes. Birthstone charms are available as add-ons at checkout. Select her birth month and we will attach the corresponding stone." },
      { q: "How quickly can I get it?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if the party is coming up soon." },
      { q: "Is the necklace appropriate for daily wear?", a: "Yes. Sterling silver and gold-filled chains are durable enough for daily wear. We recommend removing jewelry before swimming or showering to extend its life." },
    ],
    ctaHeading: "Make Her Sweet 16 Unforgettable",
    ctaBody: "Browse our full Sweet 16 gift collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Sweet 16 Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/sweet-16-gifts",
  },
  {
    slug: "gifts-for-her",
    metaTitle: "Personalized Gifts for Her — Something She Will Actually Keep",
    metaDesc: "Find personalized gifts for her that go beyond the generic — custom necklaces, mugs and apparel made to order with her name on it.",
    h1: "Personalized Gifts for Her — Something She Will Actually Keep",
    intro: [
      "Generic gifts get forgotten. A personalized gift — one with her name on it, made for her specifically — gets kept. Worn. Displayed. Talked about. That is the difference between shopping for someone and giving to someone.",
      "At Lovrella, every gift for her is made to order in the US. Whether it is a birthday, an anniversary, a holiday, or a just-because moment, you will find something here that feels genuinely personal — not like something grabbed off a shelf at the last minute.",
      "Here are our two most-loved gifts for her, plus the most common questions we get from people shopping for women.",
    ],
    h2Products: "Most Loved Personalized Gifts for Her",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain with her name or initials in your choice of gold, silver, or rose gold. Comes gift-boxed and ready to give. This is the gift she opens, puts on immediately, and wears for years. We hear from customers every week that this is exactly what happened.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave her name, initials, or a date", "Add a birthstone charm", "Gift-wrapped and ready to present"],
      cta: "Shop Custom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Mug for Her",
      desc: "A 15 oz ceramic mug printed with her name, a message, or an inside joke only she would get. Every morning coffee becomes a small reminder that someone thought about her specifically. Dishwasher-safe, microwave-safe, and far more personal than flowers.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Custom name, message, or design", "10+ design styles to choose from", "Ships in a protective gift box"],
      cta: "Shop Mugs for Her", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "What is the most popular personalized gift for women?", a: "The custom name necklace is our top seller for women across all occasions — birthdays, anniversaries, holidays, and just-because gifts alike." },
      { q: "What if I do not know her style?", a: "Our necklaces come in sterling silver, gold-filled, and rose gold. Sterling silver is the safest choice for most styles — it is versatile and goes with everything." },
      { q: "Can I include a personal message with the order?", a: "Yes. Add a note at checkout and we will include it with the gift at no extra charge." },
      { q: "How quickly can I get a gift for her?", a: "Most orders ship within 2-4 business days. Choose expedited shipping at checkout if you need it sooner." },
    ],
    ctaHeading: "Find the Perfect Gift for Her",
    ctaBody: "Browse our full collection of personalized gifts for her — necklaces, mugs and more, all made to order.",
    ctaLabel: "Shop Gifts for Her at Lovrella",
    ctaHref: "https://lovrella.com/collections/gifts-for-her",
  },
  {
    slug: "gifts-for-him",
    metaTitle: "Personalized Gifts for Him That He Will Actually Use",
    metaDesc: "Find personalized gifts for him that skip the generic — custom mugs, apparel and more made to order with his name on it, shipped to your door.",
    h1: "Personalized Gifts for Him That He Will Actually Use",
    intro: [
      "Men are notoriously hard to shop for. He says he does not need anything. He is wrong. What he needs is something with his name on it — something made for him, chosen for him, that he will actually reach for every day.",
      "At Lovrella, every gift for him is made to order in the US. Whether it is a birthday, Father's Day, an anniversary, or a just-because gift, you will find something here that feels personal and genuinely useful — not another gadget he will never touch.",
      "Here are our two top personalized picks for him, plus the questions we get most from people shopping for the men in their lives.",
    ],
    h2Products: "Best Personalized Gifts for Him",
    product1: { emoji: "☕", name: "Personalized Mug for Him",
      desc: "A 15 oz ceramic mug with his name, a message, or a joke that lands. Every morning he reaches for a coffee, he reaches for this. Dishwasher-safe, microwave-safe, and far more thoughtful than another generic gift card.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "His name, a message, or a custom design", "Bold and minimal design styles for men", "Ships in a protective gift box"],
      cta: "Shop Mugs for Him", href: "https://lovrella.com/collections/mugs" },
    product2: { emoji: "👕", name: "Custom Apparel for Him",
      desc: "A high-quality tee or hoodie printed with his name, role, or a message he will actually wear in public. Soft, durable, and made to order — not the scratchy novelty shirt that lives in the donation pile after one wear.",
      bullets: ["Premium cotton-blend tee or hoodie", "His name, role, or custom message", "Multiple colors and styles available", "True-to-size fit, wash-and-wear durable"],
      cta: "Shop Custom Apparel", href: "https://lovrella.com/collections/apparel" },
    faqs: [
      { q: "What is the most popular personalized gift for men?", a: "The personalized mug is our top seller for men — practical, used daily, and personal enough to feel like a real gift rather than a placeholder." },
      { q: "What sizes are available for apparel?", a: "We carry sizes S through 4XL for most styles. Size charts are available on each product page to help you choose." },
      { q: "Can I include a message from multiple people?", a: "Yes. Add a gift note at checkout listing everyone who contributed — we will include it with the order." },
      { q: "How quickly can I get a personalized gift for him?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if you need it sooner." },
    ],
    ctaHeading: "Find a Gift He Will Actually Keep",
    ctaBody: "Browse our full collection of personalized gifts for him — mugs, apparel and more, all made to order.",
    ctaLabel: "Shop Gifts for Him at Lovrella",
    ctaHref: "https://lovrella.com/collections/gifts-for-him",
  },
  {
    slug: "gifts-for-couples",
    metaTitle: "Personalized Gifts for Couples Who Have Everything",
    metaDesc: "Find personalized gifts for couples that stand out — custom mug sets, necklaces and keepsakes with their names and date, made to order.",
    h1: "Personalized Gifts for Couples Who Have Everything",
    intro: [
      "Couples are the hardest people to shop for. They have a home full of stuff. What they do not have is something made specifically for the two of them — with their names together, their date on it, made for their relationship.",
      "At Lovrella, every couples gift is made to order in the US. Whether it is a wedding, anniversary, Valentine's Day, or a just-because occasion, there is something here that will feel genuinely personal rather than generic.",
      "Here are our two top picks for couples gifts, plus the most common questions we get from people shopping for pairs.",
    ],
    h2Products: "Best Personalized Couples Gift Ideas",
    product1: { emoji: "☕", name: "Personalized Couples Mug Set",
      desc: "A pair of 15 oz ceramic mugs with their names and a date or design that tells their story. Every morning coffee they share starts with these. Dishwasher-safe, microwave-safe, and the kind of gift that gets used every single day.",
      bullets: ["Two 15 oz ceramic mugs, dishwasher & microwave safe", "Both names and a date or shared message", "Multiple romantic design styles", "Ships in protective gift boxes"],
      cta: "Shop Couples Mug Sets", href: "https://lovrella.com/collections/mugs" },
    product2: { emoji: "📿", name: "Custom Necklace for Her",
      desc: "A delicate chain engraved with her name, their shared date, or a word that belongs to just the two of them. A beautiful complement to the couples mug set, or a standalone gift for the woman in the relationship. Comes gift-boxed.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Engrave her name, their date, or a word", "Script or block letter styles", "Gift-wrapped, ready to present"],
      cta: "Shop Custom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    faqs: [
      { q: "Can I include both their names on a single item?", a: "Yes. Our mug designs support both names together. For necklaces, many couples order one for her with both names or their shared date engraved." },
      { q: "What date should I use — anniversary, wedding, or birthday?", a: "Use whatever date is most significant to the couple. For a wedding gift, the wedding date. For an anniversary, the anniversary date. For a new couple, the date they met." },
      { q: "Is the mug set available as a gift set?", a: "Yes. Both mugs ship together and can be wrapped as a set. Select gift wrapping at checkout." },
      { q: "How quickly can I get a couples gift?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if the occasion is coming up soon." },
    ],
    ctaHeading: "Give a Couples Gift They Will Both Love",
    ctaBody: "Browse our full couples gift collection — mug sets, necklaces and more, all personalized to order.",
    ctaLabel: "Shop Couples Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/gifts-for-couples",
  },
  {
    slug: "gifts-for-best-friend",
    metaTitle: "Personalized Gifts for Your Best Friend That Say Everything",
    metaDesc: "Find personalized gifts for your best friend she will keep forever — custom necklaces, mugs and more made to order with her name on it.",
    h1: "Personalized Gifts for Your Best Friend That Say Everything",
    intro: [
      "Your best friend deserves better than a generic gift card or a candle she will burn in a week. She deserves something made for her — with her name on it, or an inside joke, or a message that only she would understand.",
      "At Lovrella, every best friend gift is made to order in the US. Whether it is her birthday, a just-because moment, or a celebration of how long you have known each other, there is a personalized option here that will make her feel genuinely seen.",
      "Here are our two most-gifted picks for best friends, plus the questions we hear most from people shopping for their people.",
    ],
    h2Products: "Best Personalized Gifts for a Best Friend",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain with her name or initials in gold, silver, or rose gold — the gift she puts on and keeps on. Comes gift-boxed and ready to give. This is the one she shows everyone and says 'my best friend got this for me.'",
      bullets: ["Sterling silver or 18k gold-filled chain", "Her name or initials engraved", "Add her birthstone charm", "Gift-wrapped, ready to present"],
      cta: "Shop Custom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Best Friend Mug",
      desc: "A 15 oz ceramic mug with her name, an inside joke, or a message that captures your friendship. Every morning she drinks her coffee and thinks of you. Dishwasher-safe, microwave-safe, and the kind of gift that makes her smile every single day.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Her name, a nickname, or a shared joke", "Fun and sentimental design styles", "Ships in a protective gift box"],
      cta: "Shop Best Friend Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "What is the most popular best friend gift from Lovrella?", a: "The custom name necklace and the personalized mug are both top choices. The necklace is the more emotional gift — the mug is the more practical one. Many people order both." },
      { q: "Can I put an inside joke on the mug?", a: "Absolutely. Enter any text you want at checkout. The more personal, the better — that is exactly the point." },
      { q: "Can I order matching necklaces for both of us?", a: "Yes. Add two necklaces to your cart with different personalization — each with your own name or a matching word." },
      { q: "How quickly can I get a best friend gift?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if the occasion is soon." },
    ],
    ctaHeading: "Give Your Best Friend Something Personal",
    ctaBody: "Browse our full best friend gift collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Best Friend Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/gifts-for-best-friend",
  },
  {
    slug: "gifts-for-sister",
    metaTitle: "Personalized Gifts for Your Sister She Will Keep Forever",
    metaDesc: "Find personalized gifts for your sister that show you know her — custom necklaces, mugs and more made to order with her name on it.",
    h1: "Personalized Gifts for Your Sister She Will Keep Forever",
    intro: [
      "You know your sister better than almost anyone — which means you can do better than a generic gift. A personalized gift with her name on it, made specifically for her, is the kind of thing she keeps on her dresser or wears every day.",
      "At Lovrella, every gift for a sister is made to order in the US. Whether it is her birthday, a holiday, a milestone, or just because you want to show up for her, there is something here that will feel genuinely personal.",
      "Here are our two most-gifted sister picks, plus the questions we hear most from siblings shopping for each other.",
    ],
    h2Products: "Best Personalized Gifts for a Sister",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain with her name or initials in gold, silver, or rose gold. The gift she wears every day and always knows came from you. Comes gift-boxed and ready to give. This is the one that makes sisters tear up a little — in a good way.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Her name, initials, or a word engraved", "Add her birthstone charm", "Gift-wrapped, ready to present"],
      cta: "Shop Sister Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Sister Mug",
      desc: "A 15 oz ceramic mug with her name, a shared memory, or a joke only you two would get. Every morning she thinks of you. Dishwasher-safe, microwave-safe, and designed to last as long as your relationship.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Her name, a nickname, or a shared message", "Sister-themed and personal design styles", "Ships in a protective gift box"],
      cta: "Shop Sister Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Can I order matching gifts for multiple sisters?", a: "Yes. Add multiple items to your cart with different names — one for each sister. We process each one separately to make sure every name is correct." },
      { q: "What is the most popular sister gift?", a: "The custom name necklace is the top choice. It is personal, wearable, and the kind of gift sisters talk about for years." },
      { q: "Can I send it directly to her if we live in different states?", a: "Absolutely. Enter her address as the shipping address and add a note — we ship to all 50 states." },
      { q: "How quickly can I get a sister gift?", a: "Most orders ship within 2-4 business days. Choose expedited shipping if you need it sooner." },
    ],
    ctaHeading: "Give Your Sister Something She Will Actually Keep",
    ctaBody: "Browse our full sister gift collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Sister Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/gifts-for-sister",
  },
  {
    slug: "gifts-for-grandma",
    metaTitle: "Personalized Gifts for Grandma That Come From the Heart",
    metaDesc: "Find personalized gifts for grandma she will treasure — custom necklaces with grandkids' names, personalized mugs and more, made to order.",
    h1: "Personalized Gifts for Grandma That Come From the Heart",
    intro: [
      "Grandma does not need more stuff. What she wants is something that reminds her of the people she loves — the grandkids' names, a family date, a message from the whole family. Something she can display on her mantel or wear every day.",
      "At Lovrella, every grandma gift is made to order in the US. Whether it is Mother's Day, her birthday, Christmas, or just a way to say we love you, there is a personalized option here that will mean more than anything from a store shelf.",
      "Here are our two most-loved picks for grandma, plus the questions we hear most from grandkids and parents shopping for her.",
    ],
    h2Products: "Most Loved Personalized Gifts for Grandma",
    product1: { emoji: "📿", name: "Grandma Necklace with Grandkids' Names",
      desc: "A delicate chain engraved with each grandchild's name — the gift she puts on and never takes off. Available in single-name and multi-name styles so every grandchild can be included. Comes gift-boxed and ready to give.",
      bullets: ["Sterling silver or 18k gold-filled chain", "All grandkids' names engraved", "Add each grandchild's birthstone", "Gift-wrapped, ready to present"],
      cta: "Shop Grandma Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Grandma Mug",
      desc: "A 15 oz ceramic mug with her name, the grandkids' names, or a warm message that captures what she means to the family. Every morning she drinks her tea or coffee with all of you with her. Dishwasher-safe and built to last.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Her name and grandkids' names or message", "Grandma-themed design styles", "Ships in a protective gift box"],
      cta: "Shop Grandma Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Can I include all the grandkids' names on one necklace?", a: "Yes. We offer multi-name necklaces that can include several names. Enter each grandchild's name at checkout and we will engrave them all." },
      { q: "Can I add each grandchild's birthstone to the necklace?", a: "Yes. Birthstone charms are available as add-ons. Select the birth month for each grandchild at checkout." },
      { q: "Is this a good group gift from all the grandkids?", a: "Perfect. The grandma necklace with all the grandkids' names is one of our most popular group gifts — split the cost and sign the card together." },
      { q: "How quickly can I get a grandma gift?", a: "Most orders ship within 2-4 business days. Choose expedited shipping for upcoming holidays or birthdays." },
    ],
    ctaHeading: "Give Grandma a Gift She Will Treasure",
    ctaBody: "Browse our full grandma gift collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Grandma Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/gifts-for-grandma",
  },
  {
    slug: "gifts-for-teacher",
    metaTitle: "Personalized Teacher Gifts Worth More Than an Apple",
    metaDesc: "Find personalized teacher gifts she will actually keep — custom mugs, necklaces and more made to order with her name on it.",
    h1: "Personalized Teacher Gifts Worth More Than an Apple",
    intro: [
      "Teachers get a lot of candles, lotions, and generic 'World's Best Teacher' mugs. A personalized gift — one with her name on it, made specifically for her — is the one that actually gets remembered. That gets kept.",
      "At Lovrella, every teacher gift is made to order in the US. Whether it is the end of the school year, Teacher Appreciation Week, a holiday, or a retirement, there is something here that feels genuinely personal.",
      "Here are our two top picks for teacher gifts, plus the questions we hear most from parents and students shopping for their teachers.",
    ],
    h2Products: "Best Personalized Teacher Gift Ideas",
    product1: { emoji: "☕", name: "Personalized Teacher Mug",
      desc: "A 15 oz ceramic mug with her name and a message that goes beyond the generic. Every morning she fills it with coffee and feels genuinely appreciated by the person who gave it. Dishwasher-safe, microwave-safe, and actually used — not displayed ironically.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Her name and a personal teacher message", "Elegant and fun teacher design styles", "Ships in a protective gift box"],
      cta: "Shop Teacher Mugs", href: "https://lovrella.com/collections/mugs" },
    product2: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain engraved with her name — a gift she will wear outside the classroom and think about every time she does. A step above the standard teacher gift and something she will genuinely treasure. Comes gift-boxed.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Her name or initials engraved", "Script or block letter styles", "Gift-wrapped, ready to present"],
      cta: "Shop Teacher Necklaces", href: "https://lovrella.com/collections/necklaces" },
    faqs: [
      { q: "Is it appropriate to include the class name on the mug?", a: "Yes. Many families include the grade, class name, or school year alongside the teacher's name. Enter whatever text you want at checkout." },
      { q: "Can parents pool together for a group teacher gift?", a: "Absolutely. Our necklaces and mugs are popular group gifts from the whole class. Split the cost and include a note from everyone." },
      { q: "What is the most appropriate teacher gift for end of year?", a: "The personalized mug is the safest and most appreciated end-of-year teacher gift. It is practical, personal, and something she will use every day." },
      { q: "How quickly can I get a teacher gift?", a: "Most orders ship within 2-4 business days. Order early in Teacher Appreciation Week or before the last day of school to ensure timely delivery." },
    ],
    ctaHeading: "Appreciate Your Teacher with Something Personal",
    ctaBody: "Browse our full teacher gift collection — mugs, necklaces and more, all personalized to order.",
    ctaLabel: "Shop Teacher Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/gifts-for-teacher",
  },
  {
    slug: "gifts-under-50",
    metaTitle: "Personalized Gifts Under $50 That Look Like You Spent More",
    metaDesc: "Find personalized gifts under $50 that feel premium — custom necklaces, mugs and apparel made to order and shipped to your door.",
    h1: "Personalized Gifts Under $50 That Look Like You Spent More",
    intro: [
      "A great gift does not require a large budget — it requires thought. A personalized gift under $50 with her name on it, made specifically for her, will mean more than a $200 item pulled off a generic wish list.",
      "At Lovrella, most of our personalized necklaces and mugs fall well under $50 and ship made to order from the US. Every piece is designed to look and feel premium — because personalization is the detail that makes the difference, not the price tag.",
      "Here are our two best-value personalized picks, plus the questions we get most from budget-conscious shoppers.",
    ],
    h2Products: "Best Personalized Gifts Under $50",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain with her name or initials — one of our most popular gifts and priced well under $50. Comes gift-boxed and ready to give. Gold, silver, or rose gold. The kind of gift that feels expensive and personal without breaking the budget.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Her name or initials engraved", "Gold, silver, or rose gold finish", "Gift-wrapped, ready to present"],
      cta: "Shop Custom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Mug",
      desc: "A 15 oz ceramic mug with her name and a message — under $35 and the kind of gift she uses every single morning. Dishwasher-safe, microwave-safe, and more personal than anything you could find at that price point in a store.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Custom name and message or design", "10+ design styles available", "Ships in a protective gift box"],
      cta: "Shop Personalized Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Are all necklaces and mugs under $50?", a: "Most of our necklaces and mugs are priced between $25 and $45. Multi-name styles and add-ons may bring the total slightly higher. Prices are shown on each product page." },
      { q: "Does a lower price mean lower quality?", a: "Not at Lovrella. We use sterling silver and gold-filled chains for necklaces and high-quality ceramic for mugs. The personalization is what makes these gifts special — not a premium markup." },
      { q: "Can I get free shipping on gifts under $50?", a: "Standard shipping is free on orders over $35. Most mug and necklace orders qualify automatically." },
      { q: "What is the best personalized gift under $25?", a: "Our personalized mugs start under $25 and are available with same-day design processing. A personal mug at that price point is hard to beat." },
    ],
    ctaHeading: "Find a Great Gift Without the Big Spend",
    ctaBody: "Browse our full collection of personalized gifts — necklaces, mugs and more, most under $50 and all made to order.",
    ctaLabel: "Shop Personalized Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/gifts-under-50",
  },
  {
    slug: "last-minute-gifts",
    metaTitle: "Last-Minute Personalized Gifts That Do Not Look Last Minute",
    metaDesc: "Need a gift fast? Personalized last-minute gifts from Lovrella ship in 1-2 days — custom necklaces, mugs and more made to order.",
    h1: "Last-Minute Personalized Gifts That Do Not Look Last Minute",
    intro: [
      "The occasion snuck up on you. It happens. The good news: you can still give a personalized gift — one with her name on it, made specifically for her — and have it arrive in time. No one will know you ordered it yesterday.",
      "At Lovrella, most orders ship within 1-2 business days with our rush production option. Select expedited shipping at checkout and we will prioritize your order so you have it when you need it.",
      "Here are our two fastest and most popular last-minute personalized picks, plus the questions we get most from people who are cutting it close.",
    ],
    h2Products: "Best Last-Minute Personalized Gift Ideas",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "Our most popular gift — a delicate chain with her name or initials in gold, silver, or rose gold. Comes gift-boxed and ready to give. Select rush production and expedited shipping at checkout and this can be at your door within 2-3 days.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Her name or initials engraved", "Rush production available at checkout", "Gift-wrapped, ready to present"],
      cta: "Shop Name Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Mug",
      desc: "A 15 oz ceramic mug with her name and a message — processed and shipped fast. Select expedited shipping and rush production and this arrives looking like you planned it weeks ago. Dishwasher-safe, microwave-safe, and ready to give.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Custom name and message or design", "Rush production option at checkout", "Ships in a protective gift box"],
      cta: "Shop Personalized Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "What is the fastest I can get a personalized gift?", a: "With rush production and expedited shipping, most orders can arrive within 2-3 business days. Select these options at checkout and we will prioritize your order." },
      { q: "Is rush production available for all items?", a: "Rush production is available for most necklaces and mugs. Some designs may have slightly longer processing times — the product page will show the estimated ship date for your selection." },
      { q: "Can I ship directly to someone else for a surprise delivery?", a: "Yes. Enter their address as the shipping address at checkout. We ship to all 50 states with expedited options available." },
      { q: "What if I miss the delivery window?", a: "If the gift does not arrive in time, many customers choose to present a printed order confirmation as a placeholder — it shows the personalized design so the recipient can see what is coming." },
    ],
    ctaHeading: "Order Now — Still Time to Get It There",
    ctaBody: "Browse our full collection with rush production and expedited shipping options — personalized gifts that arrive on time.",
    ctaLabel: "Shop Last-Minute Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/last-minute-gifts",
  },
  {
    slug: "long-distance-gifts",
    metaTitle: "Personalized Long Distance Gifts That Close the Gap",
    metaDesc: "Send a personalized long distance gift to someone you miss — custom necklaces, mugs and more shipped directly to their door anywhere in the US.",
    h1: "Personalized Long Distance Gifts That Close the Gap",
    intro: [
      "Distance does not change how much someone means to you — but it does make the gift matter more. A personalized gift shipped directly to someone you cannot be with in person says something a text message or video call cannot.",
      "At Lovrella, every long distance gift is made to order in the US and ships directly to any address in all 50 states. Whether it is a best friend across the country, a partner in another city, or a parent you cannot visit, there is something here that will arrive feeling personal and close.",
      "Here are our two most-gifted long distance picks, plus the questions we get most from people shipping gifts across the country.",
    ],
    h2Products: "Best Personalized Long Distance Gift Ideas",
    product1: { emoji: "📿", name: "Custom Name Necklace",
      desc: "A delicate chain with her name in gold, silver, or rose gold — shipped directly to her door, gift-boxed and ready. This is the gift she opens and puts on immediately, a daily reminder that someone far away is thinking about her.",
      bullets: ["Sterling silver or 18k gold-filled chain", "Her name or initials engraved", "Ships directly to their address", "Gift-wrapped, arrives ready to open"],
      cta: "Shop Custom Necklaces", href: "https://lovrella.com/collections/necklaces" },
    product2: { emoji: "☕", name: "Personalized Long Distance Mug",
      desc: "A 15 oz ceramic mug with her name and a message that says I am thinking of you — shipped directly to her, ready to open. Every morning she makes her coffee, you are there with her in a small way. Dishwasher-safe, microwave-safe, and meaningful.",
      bullets: ["15 oz ceramic, dishwasher & microwave safe", "Her name and your personal message", "Shipped directly to their address", "Ships in a protective gift box, arrives gift-ready"],
      cta: "Shop Long Distance Mugs", href: "https://lovrella.com/collections/mugs" },
    faqs: [
      { q: "Do you ship to all US states?", a: "Yes. We ship to all 50 states with standard and expedited options. Enter their address at checkout and we will handle the rest." },
      { q: "Can I add a personal note to the gift?", a: "Yes. Add your message at checkout and we will include a printed note with the order — no extra charge." },
      { q: "Will the packaging look like a gift when it arrives?", a: "Necklaces come gift-boxed. Mugs ship in protective boxes. All orders arrive in discreet outer packaging. Select gift wrapping at checkout for an added presentation layer." },
      { q: "How quickly can a long distance gift arrive?", a: "Standard shipping takes 5-7 business days after production (2-4 days). Choose expedited shipping at checkout to reduce transit time to 2-3 days." },
    ],
    ctaHeading: "Send Something Personal Across the Distance",
    ctaBody: "Browse our full collection — necklaces, mugs and more, all personalized and shipped directly to their door.",
    ctaLabel: "Shop Long Distance Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/long-distance-gifts",
  },
];

function generatePage(o) {
  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${o.metaTitle}",
  description: "${o.metaDesc}",
  openGraph: {
    title: "${o.metaTitle}",
    description: "${o.metaDesc}",
    url: "https://lovrella.com/${o.slug}/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
${o.faqs.map((f) => `  { q: "${f.q.replace(/"/g, '\\"')}", a: "${f.a.replace(/"/g, '\\"')}" }`).join(",\n")}
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
          ${esc(o.h1)}
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
${o.intro.map((p) => `          <p className="text-gray-700 leading-relaxed mb-4">${esc(p)}</p>`).join("\n")}
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">${esc(o.h2Products)}</h2>
          <div className="space-y-8">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">${o.product1.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">${esc(o.product1.name)}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">${esc(o.product1.desc)}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
${o.product1.bullets.map((b) => `                    <li>&#10003; ${esc(b).replace(/&/g, "&amp;").replace(/&amp;apos;/g, "&apos;")}</li>`).join("\n")}
                  </ul>
                  <a href="${o.product1.href}" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    ${esc(o.product1.cta)} &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">${o.product2.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">${esc(o.product2.name)}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">${esc(o.product2.desc)}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
${o.product2.bullets.map((b) => `                    <li>&#10003; ${esc(b).replace(/&/g, "&amp;").replace(/&amp;apos;/g, "&apos;")}</li>`).join("\n")}
                  </ul>
                  <a href="${o.product2.href}" className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors">
                    ${esc(o.product2.cta)} &rarr;
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">${esc(o.ctaHeading)}</h2>
          <p className="text-gray-700 mb-6">${esc(o.ctaBody)}</p>
          <a href="${o.ctaHref}" className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors">
            ${esc(o.ctaLabel)}
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
`;
}

let created = 0;
for (const o of occasions) {
  fs.mkdirSync(path.join(appDir, o.slug), { recursive: true });
  fs.writeFileSync(path.join(appDir, o.slug, "page.tsx"), generatePage(o), "utf8");
  console.log(`✓  app/${o.slug}/page.tsx`);
  created++;
}
console.log(`\nDone — ${created} pages created.`);
