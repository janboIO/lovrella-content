import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "app");

// Unique content per occasion slug
const occasions = [
  {
    slug: "mothers-day-gifts",
    h1: "Personalized Mother's Day Gifts She Will Cherish for Years",
    metaTitle: "Personalized Mother's Day Gifts She Will Cherish for Years",
    metaDesc:
      "Give mom a personalized gift she'll actually keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
    intro: [
      "Flowers fade. Chocolates disappear. A personalized gift stays — on her dresser, in her kitchen, or around her neck — and reminds her every single day that someone took the time to think about her, specifically.",
      "At Lovrella, every Mother's Day gift is made to order in the US. Whether she's a new mom, a grandma celebrating her first Mother's Day in that role, or simply the woman who does everything for everyone, there's something here that will feel genuinely personal.",
      "Below are our two most-gifted picks for Mother's Day, plus the questions we hear most this time of year.",
    ],
    h2Products: "Best Personalized Mother's Day Gifts",
    product1: {
      emoji: "📿",
      name: "Custom Name Necklace",
      desc:
        "A delicate chain engraved with her name, the names of her kids, or a date that matters. Comes gift-boxed and ready to give. This is the one she puts on Mother's Day morning and doesn't take off.",
      bullets: [
        "Sterling silver or 18k gold-filled chain",
        "Engrave her name, kids' names, or a date",
        "Add a birthstone for each child",
        "Gift-wrapped and ready to present",
      ],
      cta: "Shop Name Necklaces",
      href: "https://lovrella.com/collections/necklaces",
    },
    product2: {
      emoji: "☕",
      name: "Personalized Mother's Day Mug",
      desc:
        "A 15 oz ceramic mug with her name, a heartfelt message, or a funny mom quote she'll actually appreciate. Every morning coffee becomes a reminder. Dishwasher-safe, microwave-safe, and built to outlast every generic mug she owns.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Custom name, message, or design",
        "10+ Mother's Day design templates",
        "Ships in a protective gift box",
      ],
      cta: "Shop Mother's Day Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    faqs: [
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
      },
    ],
    ctaHeading: "Ready to Make Her Day?",
    ctaBody:
      "Browse our full Mother's Day collection — necklaces, mugs, apparel and more, all personalized to order.",
    ctaLabel: "Shop Mother's Day Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/mothers-day-gifts",
  },
  {
    slug: "fathers-day-gifts",
    h1: "Personalized Father's Day Gifts He Will Actually Use",
    metaTitle: "Personalized Father's Day Gifts He Will Actually Use",
    metaDesc:
      "Skip the tie. Find personalized Father's Day gifts dad will actually use — custom mugs, apparel and more made to order and shipped to your door.",
    intro: [
      "Dad says he doesn't need anything. He's wrong. What he needs is a gift that shows you see him as more than just the guy who fixes things and pays for stuff — something with his name on it, made for him, from you.",
      "Lovrella's Father's Day gifts are made to order in the US, shipped directly to your door, and designed to get daily use. No more gifts that sit in a box. These get used.",
      "Here are our two top picks for Father's Day, plus answers to the questions we get every year.",
    ],
    h2Products: "Best Personalized Father's Day Gifts",
    product1: {
      emoji: "☕",
      name: "Personalized Father's Day Mug",
      desc:
        "A large 15 oz ceramic mug with his name, a dad joke, or a message from the kids. Every morning he reaches for a coffee, he'll reach for this one. Dishwasher-safe, microwave-safe, and far better than a generic 'World's Best Dad' mug.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Custom name, message, or dad joke",
        "10+ Father's Day design templates",
        "Ships in a protective gift box",
      ],
      cta: "Shop Father's Day Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    product2: {
      emoji: "👕",
      name: "Custom Dad Apparel",
      desc:
        "A high-quality tee or hoodie printed with his name, role (Dad, Grandpa, Pop), and a design he'll actually wear in public. Soft, durable, and made to order — not the scratchy novelty shirt that ends up in the donation pile.",
      bullets: [
        "Premium cotton-blend tee or hoodie",
        "Custom name and role",
        "Multiple color and style options",
        "True-to-size fit, wash-and-wear durable",
      ],
      cta: "Shop Custom Apparel",
      href: "https://lovrella.com/collections/apparel",
    },
    faqs: [
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
      },
    ],
    ctaHeading: "Find the Gift He'll Actually Keep",
    ctaBody:
      "Browse our full Father's Day collection — mugs, apparel and more, all personalized to order.",
    ctaLabel: "Shop Father's Day Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/fathers-day-gifts",
  },
  {
    slug: "valentines-day-gifts",
    h1: "Personalized Valentine's Day Gifts Beyond Flowers and Chocolate",
    metaTitle: "Personalized Valentine's Day Gifts Beyond Flowers and Chocolate",
    metaDesc:
      "Find personalized Valentine's Day gifts that go beyond the generic — custom necklaces, mugs and apparel made to order and shipped to your door.",
    intro: [
      "Flowers die in a week. Chocolate lasts a few days. A personalized Valentine's Day gift — one with her name, your date, or a message only the two of you would understand — lasts years and says something flowers never could.",
      "At Lovrella, every Valentine's gift is made to order in the US. Whether you've been together two months or twenty years, there's something here that will feel real, not like something grabbed off a shelf at the last minute.",
      "Here are our two most-gifted Valentine's Day picks, plus answers to the questions we get most in February.",
    ],
    h2Products: "Top Personalized Valentine's Day Gifts",
    product1: {
      emoji: "📿",
      name: "Custom Name Necklace",
      desc:
        "A delicate chain engraved with her name, your initials together, or a date that belongs to just the two of you. Comes gift-boxed and ready to give. This is the gift she puts on Valentine's Day and wears every day after.",
      bullets: [
        "Sterling silver or 18k gold-filled chain",
        "Engrave her name, initials, or a date",
        "Script or block letter styles",
        "Gift-wrapped and ready to present",
      ],
      cta: "Shop Custom Necklaces",
      href: "https://lovrella.com/collections/necklaces",
    },
    product2: {
      emoji: "☕",
      name: "Personalized Couples Mug",
      desc:
        "A 15 oz ceramic mug with your names, a love note, or a quote that means something to you both. Every morning coffee becomes a small reminder of what you have. Dishwasher-safe, microwave-safe, and far more meaningful than a box of chocolates.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Custom names, message, or design",
        "10+ Valentine's design templates",
        "Ships in a protective gift box",
      ],
      cta: "Shop Valentine's Day Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    faqs: [
      {
        q: "How far in advance should I order for Valentine's Day?",
        a: "Order at least 10 days before February 14 for standard shipping. Rush options are available at checkout if you're cutting it close.",
      },
      {
        q: "Can I engrave a date instead of a name?",
        a: "Absolutely. Dates, initials, coordinates, and short phrases all work well on our necklaces and mugs. You'll enter the text at checkout.",
      },
      {
        q: "What if I want to give a gift to my boyfriend or husband?",
        a: "Our mugs and apparel are great for him too. Our necklace collection is designed for her, but check our full collection for more options.",
      },
      {
        q: "Do you ship in discreet packaging for surprises?",
        a: "Yes. All orders ship in plain outer packaging — no branding on the outside. The gift-boxed product is inside.",
      },
    ],
    ctaHeading: "Make This Valentine's Day Personal",
    ctaBody:
      "Browse our full Valentine's Day collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop Valentine's Day Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/valentines-day-gifts",
  },
  {
    slug: "personalized-christmas-gifts",
    h1: "Personalized Christmas Gifts Nobody Else Will Have Under the Tree",
    metaTitle: "Personalized Christmas Gifts Nobody Else Will Have Under the Tree",
    metaDesc:
      "Find personalized Christmas gifts that stand out — custom necklaces, mugs and apparel made to order and shipped to your door.",
    intro: [
      "Every Christmas tree has gift cards and Amazon boxes under it. Not yours. A personalized gift — one with their name on it, made specifically for them — is the one they talk about at dinner, the one that gets saved.",
      "At Lovrella, every Christmas gift is made to order in the US and ships directly to your door. Necklaces, mugs, and apparel personalized with names, dates, and messages that mean something to the person receiving them.",
      "Here are our top picks for Christmas, plus answers to the shipping and customization questions we get most in December.",
    ],
    h2Products: "Top Personalized Christmas Gift Ideas",
    product1: {
      emoji: "📿",
      name: "Custom Name Necklace",
      desc:
        "A delicate chain with her name or initials in gold, silver, or rose gold. Comes gift-boxed and ready to place under the tree. This is the gift she opens and puts on immediately — we hear that from customers every January.",
      bullets: [
        "Sterling silver or 18k gold-filled chain",
        "Engrave name, initials, or a short word",
        "Add a birthstone charm",
        "Gift-wrapped and ready to present",
      ],
      cta: "Shop Custom Necklaces",
      href: "https://lovrella.com/collections/necklaces",
    },
    product2: {
      emoji: "☕",
      name: "Personalized Christmas Mug",
      desc:
        "A 15 oz ceramic mug with their name and a Christmas design, message, or inside joke. Every cup of hot cocoa or morning coffee from December onward carries their name on it. Dishwasher-safe, microwave-safe, and actually useful.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Custom name, message, or holiday design",
        "Christmas-themed and year-round styles",
        "Ships in a protective gift box",
      ],
      cta: "Shop Christmas Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    faqs: [
      {
        q: "What's the last day I can order for Christmas delivery?",
        a: "Check our site for current cutoff dates — they vary by shipping method. Order early in December for the best selection and guaranteed delivery.",
      },
      {
        q: "Can I order multiple personalized gifts in one order?",
        a: "Yes. Add multiple items to your cart, each with different personalization. We process each item individually so everything is correct.",
      },
      {
        q: "What if I don't know their exact size for apparel?",
        a: "Our size charts are on each product page. When in doubt, go one size up — and we offer exchanges if it doesn't fit.",
      },
      {
        q: "Do you offer gift wrapping?",
        a: "Necklaces come gift-boxed. Mugs ship in protective boxes. Select gift wrapping at checkout for an extra layer of presentation.",
      },
    ],
    ctaHeading: "Make Christmas Personal This Year",
    ctaBody:
      "Browse our full Christmas gift collection — necklaces, mugs, apparel and more, all personalized to order.",
    ctaLabel: "Shop Personalized Christmas Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/personalized-christmas-gifts",
  },
  {
    slug: "personalized-birthday-gifts",
    h1: "Personalized Birthday Gifts That Show You Actually Thought About It",
    metaTitle: "Personalized Birthday Gifts That Show You Actually Thought About It",
    metaDesc:
      "Personalized birthday gifts made to order — custom necklaces, mugs and apparel with their name on it, shipped to your door.",
    intro: [
      "Anyone can buy a gift card. A personalized birthday gift — one with their name, a message that means something, or a design made for them specifically — tells a different story.",
      "At Lovrella, every birthday gift is made to order in the US. Whether you're celebrating a milestone like a 30th or 50th birthday, or just want to give something better than flowers and a card, you'll find it here.",
      "Below are our two most-gifted personalized birthday picks, plus the most common questions we get from birthday shoppers.",
    ],
    h2Products: "Best Personalized Birthday Gift Ideas",
    product1: {
      emoji: "📿",
      name: "Custom Name Necklace",
      desc:
        "A delicate chain engraved with her name, initials, or a date in your choice of gold, silver, or rose gold. Comes gift-boxed and ready to give. This is the birthday gift that gets worn every day, not stored in a drawer.",
      bullets: [
        "Sterling silver or 18k gold-filled chain",
        "Engrave her name, initials, or a date",
        "Add a birthstone for a personal touch",
        "Gift-wrapped, ready to present",
      ],
      cta: "Shop Name Necklaces",
      href: "https://lovrella.com/collections/necklaces",
    },
    product2: {
      emoji: "☕",
      name: "Personalized Birthday Mug",
      desc:
        "A 15 oz ceramic mug printed with their name, a birthday message, or a milestone number. Every morning coffee becomes a reminder of the day you made special. Dishwasher-safe, microwave-safe, and far more useful than another candle.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Custom name, age, or message",
        "Birthday-themed and everyday styles",
        "Ships in a protective gift box",
      ],
      cta: "Shop Birthday Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    faqs: [
      {
        q: "How quickly can I get a personalized birthday gift?",
        a: "Most orders ship within 2–4 business days. Choose expedited shipping at checkout if the birthday is coming up fast.",
      },
      {
        q: "Can I include a birthday message with the order?",
        a: "Yes — add your message at checkout and we'll include it with the gift. No charge for the note.",
      },
      {
        q: "What milestone birthday gifts do you have?",
        a: "Our mugs and necklaces can be customized for any milestone — 30th, 40th, 50th, 60th and beyond. Enter the age or year at checkout.",
      },
      {
        q: "Do you ship directly to the birthday person?",
        a: "Absolutely. Enter their address as the shipping address and we'll send it straight to them, gift-boxed and ready.",
      },
    ],
    ctaHeading: "Give a Birthday Gift Worth Keeping",
    ctaBody:
      "Browse our full birthday collection — necklaces, mugs, apparel and more, all personalized to order.",
    ctaLabel: "Shop Personalized Birthday Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/birthday-gifts",
  },
  {
    slug: "personalized-wedding-gifts",
    h1: "Personalized Wedding Gifts for the Couple Who Has Everything",
    metaTitle: "Personalized Wedding Gifts for the Couple Who Has Everything",
    metaDesc:
      "Give a wedding gift they'll keep forever — custom necklaces, mugs and keepsakes personalized with their names and date, made to order.",
    intro: [
      "Most wedding registries are full. The couple already picked out the towels, the stand mixer, and the serving dishes. A personalized gift — one with their names and wedding date on it — is the one that stands apart from everything else on the table.",
      "At Lovrella, every wedding gift is made to order in the US. Whether you're a guest looking for something off-registry, or part of the wedding party choosing a gift for the couple, you'll find something that feels personal and lasting.",
      "Here are our two best-selling personalized wedding gift options, plus answers to the most common questions.",
    ],
    h2Products: "Top Personalized Wedding Gift Ideas",
    product1: {
      emoji: "📿",
      name: "Custom Wedding Necklace",
      desc:
        "A delicate chain engraved with her new name, the wedding date, or a short word that means something to the couple. A beautiful gift for the bride from bridesmaids, close friends, or family — and one she'll wear long after the wedding day.",
      bullets: [
        "Sterling silver or 18k gold-filled chain",
        "Engrave her name, the date, or a word",
        "Script or block letter styles available",
        "Gift-wrapped and ready to give",
      ],
      cta: "Shop Wedding Necklaces",
      href: "https://lovrella.com/collections/necklaces",
    },
    product2: {
      emoji: "☕",
      name: "Personalized Couple's Mug Set",
      desc:
        "A pair of 15 oz ceramic mugs printed with the couple's names and wedding date. Practical, personal, and the kind of gift that gets used every single morning. Dishwasher-safe, microwave-safe, and a much more thoughtful choice than another picture frame.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Names and wedding date printed on each mug",
        "Multiple design styles available",
        "Ships in protective gift boxes",
      ],
      cta: "Shop Wedding Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    faqs: [
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
      },
    ],
    ctaHeading: "Give a Wedding Gift They Will Keep",
    ctaBody:
      "Browse our full wedding gift collection — necklaces, mugs and keepsakes, all personalized to order.",
    ctaLabel: "Shop Personalized Wedding Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/personalized-wedding-gifts",
  },
  {
    slug: "personalized-anniversary-gifts",
    h1: "Personalized Anniversary Gifts as Unique as Your Story",
    metaTitle: "Personalized Anniversary Gifts as Unique as Your Story",
    metaDesc:
      "Find personalized anniversary gifts that celebrate your relationship — custom necklaces engraved with your date, mugs with your names, made to order.",
    intro: [
      "Every anniversary is a milestone. Whether it's your first or your twenty-fifth, the best gift is one that reflects how far you've come — not something pulled off a generic gift shelf.",
      "At Lovrella, every anniversary gift is made to order with your names, your date, or a message that belongs to your relationship. Made in the US, shipped to your door, and designed to last as long as the years you're celebrating.",
      "Below are our two best-selling anniversary gift picks, plus the most common questions from anniversary shoppers.",
    ],
    h2Products: "Top Personalized Anniversary Gift Ideas",
    product1: {
      emoji: "📿",
      name: "Anniversary Engraved Necklace",
      desc:
        "A delicate chain engraved with her name, your anniversary date, or a word that captures what your relationship means. This is the gift she wears every day as a quiet reminder of what you have together. Comes gift-boxed and ready to give.",
      bullets: [
        "Sterling silver or 18k gold-filled chain",
        "Engrave her name, your date, or coordinates",
        "Script or block letter styles",
        "Gift-wrapped, ready to present",
      ],
      cta: "Shop Anniversary Necklaces",
      href: "https://lovrella.com/collections/necklaces",
    },
    product2: {
      emoji: "☕",
      name: "Personalized Anniversary Mug",
      desc:
        "A 15 oz ceramic mug printed with your names, anniversary date, and a design that tells your story. Every morning coffee becomes a small celebration of the years you've built together. Dishwasher-safe, microwave-safe, and far more personal than flowers.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Names and anniversary date",
        "Multiple romantic design styles",
        "Ships in a protective gift box",
      ],
      cta: "Shop Anniversary Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    faqs: [
      {
        q: "Can I engrave our exact anniversary date?",
        a: "Yes. Enter the date in any format you prefer at checkout — month/day/year, roman numerals, or written out. We'll print it exactly as you enter it.",
      },
      {
        q: "What are traditional anniversary gifts by year?",
        a: "Our necklaces and mugs work beautifully for any year. For a 1st anniversary (paper), a printed mug fits the tradition. For 5th (wood) or 10th (tin/aluminum), our engraved metals are a modern interpretation.",
      },
      {
        q: "Can I include a personal message with the order?",
        a: "Yes. Add a note at checkout and we'll include it with the gift at no extra charge.",
      },
      {
        q: "How quickly can you ship an anniversary gift?",
        a: "Most orders ship within 2–4 business days. Choose expedited shipping at checkout if your anniversary is coming up quickly.",
      },
    ],
    ctaHeading: "Celebrate Every Year Together",
    ctaBody:
      "Browse our full anniversary collection — necklaces, mugs and more, all personalized with your names and date.",
    ctaLabel: "Shop Personalized Anniversary Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/personalized-anniversary-gifts",
  },
  {
    slug: "personalized-graduation-gifts",
    h1: "Personalized Graduation Gifts That Mark the Milestone",
    metaTitle: "Personalized Graduation Gifts That Mark the Milestone",
    metaDesc:
      "Celebrate the graduate with a personalized gift they'll keep — custom necklaces, mugs and apparel made to order and shipped to your door.",
    intro: [
      "Graduation isn't just the end of school — it's the beginning of everything that comes next. A personalized gift marks that transition in a way a gift card or a check never could.",
      "At Lovrella, every graduation gift is made to order in the US with the graduate's name, graduation year, or a message that honors the years of work it took to get here. Whether it's high school, college, or an advanced degree, there's something here that will last.",
      "Here are our two most popular graduation gift picks, plus answers to the questions we hear most during graduation season.",
    ],
    h2Products: "Best Personalized Graduation Gift Ideas",
    product1: {
      emoji: "📿",
      name: "Graduation Necklace",
      desc:
        "A delicate chain engraved with her name and graduation year — the perfect keepsake to carry her achievement into the next chapter. Comes gift-boxed and ready to give at the party or ceremony.",
      bullets: [
        "Sterling silver or 18k gold-filled chain",
        "Engrave name, graduation year, or a word",
        "Add a birthstone charm",
        "Gift-wrapped and ready to present",
      ],
      cta: "Shop Graduation Necklaces",
      href: "https://lovrella.com/collections/necklaces",
    },
    product2: {
      emoji: "☕",
      name: "Personalized Graduation Mug",
      desc:
        "A 15 oz ceramic mug printed with the graduate's name, degree, or a message that celebrates what they've achieved. Every morning coffee in their new life starts with a reminder of how far they've come. Dishwasher-safe and built to last.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Custom name, graduation year, or message",
        "High school and college design styles",
        "Ships in a protective gift box",
      ],
      cta: "Shop Graduation Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    faqs: [
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
      },
    ],
    ctaHeading: "Honor the Graduate with Something Lasting",
    ctaBody:
      "Browse our full graduation collection — necklaces, mugs, apparel and more, all personalized to order.",
    ctaLabel: "Shop Personalized Graduation Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/personalized-graduation-gifts",
  },
  {
    slug: "personalized-new-baby-gifts",
    h1: "Personalized New Baby Gifts Mom Will Actually Treasure",
    metaTitle: "Personalized New Baby Gifts Mom Will Actually Treasure",
    metaDesc:
      "Celebrate the new arrival with a personalized gift mom will keep — custom necklaces with the baby's name, new mom mugs and more, made to order.",
    intro: [
      "New babies bring an avalanche of onesies, blankets, and generic gear. Stand out with a gift made for the mom — something with the baby's name on it, personal to this specific new family, at this specific moment.",
      "At Lovrella, our new baby gifts are made to order in the US and designed to give the new mom something she'll keep long after the baby gear is outgrown. A necklace with her child's name. A mug that greets her every exhausted morning with something that makes her smile.",
      "Here are our two most-gifted new baby picks, plus the most common questions from baby shower shoppers.",
    ],
    h2Products: "Best Personalized New Baby Gift Ideas",
    product1: {
      emoji: "📿",
      name: "Mom Necklace with Baby's Name",
      desc:
        "A delicate chain engraved with the baby's name — a keepsake for the new mom that she'll wear for years. This is the gift that makes her tear up a little, in a good way. Comes gift-boxed and ready to give at the baby shower or hospital visit.",
      bullets: [
        "Sterling silver or 18k gold-filled chain",
        "Engraved with the baby's name",
        "Add a birthstone in the baby's birth month",
        "Gift-wrapped and ready to present",
      ],
      cta: "Shop Mom Necklaces",
      href: "https://lovrella.com/collections/necklaces",
    },
    product2: {
      emoji: "☕",
      name: "New Mom Personalized Mug",
      desc:
        "A 15 oz ceramic mug with the baby's name, the mom's name, or a message that captures the exhausted, joyful chaos of early parenthood. Every 5 AM feeding starts with this mug. Dishwasher-safe, microwave-safe, and exactly what she needs.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Baby's name, mom's name, or a custom message",
        "New mom design styles and funny options",
        "Ships in a protective gift box",
      ],
      cta: "Shop New Mom Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    faqs: [
      {
        q: "What if I don't know the baby's name yet?",
        a: "If the name isn't chosen yet, consider gifting our necklace with a gift note explaining the personalization — we can process it once the name is confirmed. Or choose a mug with 'New Mom' messaging that doesn't require a name.",
      },
      {
        q: "Can I ship directly to the hospital or home?",
        a: "We ship to any US address. Enter the delivery address at checkout. Hospital deliveries work if you have the full address including room number.",
      },
      {
        q: "Is the necklace safe to wear while nursing?",
        a: "Our necklaces are lightweight and the chains are smooth, so they're comfortable to wear. Sterling silver and gold-filled are non-reactive materials.",
      },
      {
        q: "Can this be a baby shower gift even before the birth?",
        a: "Yes. If the name is known, we can personalize immediately. If not, gift a gift card or choose one of our non-name designs and personalize after the birth.",
      },
    ],
    ctaHeading: "Welcome the New Arrival with Something Personal",
    ctaBody:
      "Browse our full new baby collection — necklaces, mugs and more, all personalized to order.",
    ctaLabel: "Shop New Baby Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/personalized-new-baby-gifts",
  },
  {
    slug: "personalized-retirement-gifts",
    h1: "Personalized Retirement Gifts That Honor a Career",
    metaTitle: "Personalized Retirement Gifts That Honor a Career",
    metaDesc:
      "Celebrate retirement with a personalized gift worth keeping — custom mugs, apparel and more engraved with their name and years of service, made to order.",
    intro: [
      "Decades of work deserve more than a card and a handshake. A personalized retirement gift — one with their name on it, that marks the transition from career to the next chapter — is the one they'll remember.",
      "At Lovrella, every retirement gift is made to order in the US. Whether it's a colleague retiring after 30 years, a parent finally stepping away from the office, or a teacher finishing their last school year, there's something here that honors the journey.",
      "Here are our two most-gifted retirement picks, plus the most common questions from retirement gift shoppers.",
    ],
    h2Products: "Best Personalized Retirement Gift Ideas",
    product1: {
      emoji: "☕",
      name: "Personalized Retirement Mug",
      desc:
        "A 15 oz ceramic mug with their name, years of service, and a message that celebrates the career they've had. Every morning of their retirement starts with this. Dishwasher-safe, microwave-safe, and far more personal than a generic plaque.",
      bullets: [
        "15 oz ceramic, dishwasher & microwave safe",
        "Name, years of service, and custom message",
        "Funny and heartfelt retirement designs",
        "Ships in a protective gift box",
      ],
      cta: "Shop Retirement Mugs",
      href: "https://lovrella.com/collections/mugs",
    },
    product2: {
      emoji: "👕",
      name: "Custom Retirement Apparel",
      desc:
        "A high-quality tee or hoodie printed with their name and a retirement message they'll actually want to wear. Whether it's 'Retired — Under New Management' or something more sincere, we can print it. Soft, durable, and made for the life they've earned.",
      bullets: [
        "Premium cotton-blend tee or hoodie",
        "Custom name and retirement message",
        "Multiple color and style options",
        "True-to-size fit, wash-and-wear durable",
      ],
      cta: "Shop Retirement Apparel",
      href: "https://lovrella.com/collections/apparel",
    },
    faqs: [
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
      },
    ],
    ctaHeading: "Celebrate the Career They've Built",
    ctaBody:
      "Browse our full retirement collection — mugs, apparel and more, all personalized to order.",
    ctaLabel: "Shop Personalized Retirement Gifts at Lovrella",
    ctaHref: "https://lovrella.com/collections/personalized-retirement-gifts",
  },
];

// Escape apostrophes for JSX text content
function esc(str) {
  return str.replace(/'/g, "&apos;");
}

function generatePage(o) {
  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${o.metaTitle}",
  description:
    "${o.metaDesc}",
  openGraph: {
    title: "${o.metaTitle}",
    description:
      "${o.metaDesc}",
    url: "https://lovrella.com/${o.slug}/",
    siteName: "Lovrella",
    type: "article",
  },
};

const faqs = [
${o.faqs.map((f) => `  {
    q: "${f.q.replace(/"/g, '\\"')}",
    a: "${f.a.replace(/"/g, '\\"')}",
  }`).join(",\n")}
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
          ${esc(o.h1)}
        </h1>

        <section className="prose prose-gray max-w-none mb-12">
${o.intro.map((p) => `          <p className="text-gray-700 leading-relaxed mb-4">
            ${esc(p)}
          </p>`).join("\n")}
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            ${esc(o.h2Products)}
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">${o.product1.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ${esc(o.product1.name)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ${esc(o.product1.desc)}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
${o.product1.bullets.map((b) => `                    <li>&#10003; ${esc(b).replace(/&/g, "&amp;").replace(/&amp;apos;/g, "&apos;")}</li>`).join("\n")}
                  </ul>
                  <a
                    href="${o.product1.href}"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    ${esc(o.product1.cta)} &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">${o.product2.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ${esc(o.product2.name)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ${esc(o.product2.desc)}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
${o.product2.bullets.map((b) => `                    <li>&#10003; ${esc(b).replace(/&/g, "&amp;").replace(/&amp;apos;/g, "&apos;")}</li>`).join("\n")}
                  </ul>
                  <a
                    href="${o.product2.href}"
                    className="mt-5 inline-block rounded-full bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700 transition-colors"
                  >
                    ${esc(o.product2.cta)} &rarr;
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
            ${esc(o.ctaHeading)}
          </h2>
          <p className="text-gray-700 mb-6">
            ${esc(o.ctaBody)}
          </p>
          <a
            href="${o.ctaHref}"
            className="inline-block rounded-full bg-rose-600 px-8 py-3 text-base font-semibold text-white hover:bg-rose-700 transition-colors"
          >
            ${esc(o.ctaLabel)}
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
`;
}

let created = 0;
for (const o of occasions) {
  const dir = path.join(appDir, o.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), generatePage(o), "utf8");
  console.log(`✓ Created app/${o.slug}/page.tsx`);
  created++;
}

console.log(`\nDone — ${created} pages created.`);
