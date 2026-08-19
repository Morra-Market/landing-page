import Image from "next/image";
import { MorraIcon } from "@/components/morra-icons";

const whatsappUrl =
  "https://wa.me/2347017174639?text=Hi%2C%20I%27d%20like%20to%20see%20what%27s%20available%20on%20Morra.";

const frictionPoints = [
  {
    icon: "route" as const,
    title: "Traffic and heat",
    copy: "Hours in go-slow and blazing sun, just to reach the market gate.",
  },
  {
    icon: "message" as const,
    title: "Touts and haggling",
    copy: "The pulling, the pressure, the price that changes with your face.",
  },
  {
    icon: "clock" as const,
    title: "A whole day gone",
    copy: "Time that should be for work or family, gone moving through crowds.",
  },
  {
    icon: "wallet" as const,
    title: "Cash in the crowd",
    copy: "Carrying cash through a packed market is asking for more wahala.",
  },
];

const steps = [
  ["01", "Browse or send your list", "See what is available, or tell us what you want from Balogun — one item or a wholesale quantity."],
  ["02", "Confirm the details", "We confirm availability, the item price, the 5% service and packaging fee, the ₦500 validation fee, and your pickup or delivery option."],
  ["03", "We source and check it", "Morra buys from Balogun and checks the order at the CMS hub. If it sells out, we send a live photo of the closest alternative."],
  ["04", "Pick up or get it delivered", "Collect for free at CMS or use our delivery partner during the same 4:00–6:00 PM market-day window."],
];

const categories = [
  ["fabric", "Fabric by the yard", "The pieces that make the outfit."],
  ["perfume", "Sealed skincare and cosmetics", "Everyday care, checked before handoff."],
  ["perfume", "Perfumes", "Scent without the market run."],
  ["spark", "Jewelry and accessories", "Small details, easy to collect."],
] as const;

const faqs = [
  ["Is this a delivery app?", "No — free pickup at our CMS hub is the default. Delivery is available through our partner for a fee based on your area, capped at a few orders a day."],
  ["What can I order?", "Fabric by the yard, sealed cosmetics and skincare, perfumes, and jewelry and accessories. That is the pilot lineup — kept tight so we can vouch for everything on it."],
  ["Can you source something specific?", "Yes. Send us what you want to buy at Balogun, whether it is one item or a wholesale quantity, within the pilot categories."],
  ["What if the item I want is not available?", "If it sells out before our runner arrives, we send a live photo of the closest alternative on WhatsApp. Your call whether you want it, with no charge if you pass. Items outside our four categories are not part of the pilot sourcing promise yet, but tell us what you need — it helps us decide what to add next."],
  ["How do I pay?", "Your choice — transfer or card before you arrive, or at our CMS counter when you collect. A ₦500 order-validation fee is paid upfront to confirm the order before we send a runner. It is refunded if we cannot source your item and non-refundable if you cancel."],
  ["When will my order be ready?", "Every order goes into the next operating day — Tuesday, Thursday, or Saturday. Order on Wednesday, for example, and it will be ready for Thursday's window."],
  ["When can I pick up or receive delivery?", "Tuesdays, Thursdays, and Saturdays from 4:00–6:00 PM. Pickup is at our CMS hub on Lagos Island; partner delivery runs during the same window and costs extra."],
  ["What if I cannot make my pickup time?", "Let us know before your slot if you can. If we do not hear from you, we will call to confirm whether you still want the item — then it is either delivery to you, with the delivery fee applying, or a small holding fee for each extra day at the hub."],
  ["What if the item is not right?", "We check it against your order at our CMS hub before you get it. Wrong or damaged items get exchanged, not passed on to you."],
  ["How does pricing work?", "We get the real Balogun price with no separate line for that. On top of your item total, we add a 5% service and packaging fee for handling, quality-checking, and packaging. There is also a one-time ₦500 order-validation fee upfront. Any partner delivery fee is separate and shown before full payment."],
];

function WhatsAppLink({
  children,
  className,
  compact = false,
}: {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MorraIcon name="whatsapp" size={compact ? 17 : 21} />
      <span>{children}</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-[100dvh] overflow-x-clip bg-morra-paper pb-24 text-morra-ink lg:pb-8">
      <header className="hero-pattern relative isolate min-h-[100dvh] overflow-hidden bg-morra-navy text-white">
        <div className="site-shell relative z-10 flex min-h-[100dvh] flex-col py-6 sm:py-8 lg:py-10">
          <nav className="flex items-center justify-between gap-5" aria-label="Primary navigation">
            <a href="#top" className="group flex items-center gap-3" aria-label="Morra home">
              <Image
                src="/brand/morra.jpeg"
                alt="Morra logo"
                width={52}
                height={52}
                priority
                className="h-11 w-11 rounded-xl object-cover transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-12 sm:w-12"
              />
              <span className="font-display text-xl font-bold tracking-[-0.03em]">Morra</span>
            </a>
            <WhatsAppLink
              compact
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/16 active:translate-y-px sm:px-5"
            >
              Chat
            </WhatsAppLink>
          </nav>

          <div id="top" className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:py-20">
            <div className="max-w-2xl">
              <div className="rise-in inline-flex items-center gap-2 rounded-full border border-morra-orange/40 bg-morra-orange/15 px-3.5 py-2 text-xs font-semibold tracking-[0.02em] text-orange-100 sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-morra-orange-soft" />
                Balogun, sourced and checked — ready on market days
              </div>
              <h1 className="rise-in rise-in-delay-1 mt-7 max-w-3xl font-display text-[clamp(3.4rem,8vw,6.4rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-balance">
                Balogun market.
                <span className="mt-2 block text-morra-orange-soft">From your phone.</span>
              </h1>
              <p className="rise-in rise-in-delay-2 mt-7 max-w-xl text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.55] text-white/75 text-pretty">
                Fabric, skincare, perfumes, and accessories — sourced straight from Balogun, quality-checked, and ready for free pickup at CMS or same-day delivery through our partner.
              </p>
              <p className="rise-in rise-in-delay-2 mt-4 max-w-xl text-sm font-medium leading-6 text-white/55">
                Market days are Tuesday, Thursday, and Saturday. Delivery costs extra and the fee is shown before full payment.
              </p>
              <div className="rise-in rise-in-delay-3 mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <WhatsAppLink className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-morra-orange px-6 py-4 font-display text-lg font-bold text-white shadow-[0_18px_35px_-14px_rgba(245,129,31,0.75)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff8f2e] hover:shadow-[0_24px_42px_-14px_rgba(245,129,31,0.72)] active:translate-y-px">
                  Chat on WhatsApp
                </WhatsAppLink>
                <a href="#how" className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-medium text-white/75 transition hover:border-morra-orange-soft hover:text-white">
                  See how Morra works
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:justify-self-end">
              <div className="absolute -inset-5 rounded-[2.5rem] border border-white/10 bg-white/[0.03] blur-[1px]" />
              <div className="gentle-float relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-[#f7f0e4] p-3 shadow-[0_35px_90px_-40px_rgba(0,0,0,0.8)] sm:p-5">
                <div className="relative overflow-hidden rounded-[1.65rem] bg-white">
                  <Image
                    src="/brand/morra-white.jpeg"
                    alt="Morra flame and market-path logo"
                    width={1024}
                    height={1024}
                    className="h-auto w-full"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 rounded-2xl border border-morra-navy/10 bg-white/90 p-4 shadow-[0_15px_35px_-20px_rgba(22,37,92,0.5)] backdrop-blur sm:bottom-5 sm:left-5 sm:right-5">
                    <div>
                      <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-morra-orange">Morra pilot</p>
                      <p className="mt-1 font-display text-xl font-bold leading-none text-morra-navy sm:text-2xl">Source local. Collect easy.</p>
                    </div>
                    <MorraIcon name="arrow-up-right" className="shrink-0 text-morra-navy" size={22} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-4 text-morra-navy sm:px-2 sm:pb-0">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-morra-navy/45">Market days</p>
                    <p className="mt-1 font-display text-lg font-bold">Tue · Thu · Sat</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-morra-navy/45">Pickup / delivery</p>
                    <p className="mt-1 font-display text-lg font-bold">4–6 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center justify-between border-t border-white/10 pt-5 text-xs font-medium uppercase tracking-[0.16em] text-white/45 sm:flex">
            <span>Morra Market Services Limited</span>
            <span>Lagos Island · Balogun / CMS</span>
          </div>
        </div>
      </header>

      <section id="why" className="site-shell py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-morra-orange">The market, without the wahala</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.055em] text-morra-navy text-balance">Balogun has the goods and the prices. Getting there is the wahala.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-morra-muted">Morra keeps the local market connection and removes the part of the trip that costs you a whole day.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {frictionPoints.map((point, index) => (
              <article key={point.title} className={`group rounded-[1.65rem] border border-morra-navy/10 bg-white p-6 shadow-[0_18px_45px_-32px_rgba(22,37,92,0.5)] transition duration-300 hover:-translate-y-1 hover:border-morra-orange/35 hover:shadow-[0_25px_55px_-30px_rgba(245,129,31,0.35)] ${index % 2 === 1 ? "sm:translate-y-8" : ""}`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-morra-sand text-morra-navy transition-colors group-hover:bg-morra-orange group-hover:text-white">
                  <MorraIcon name={point.icon} size={23} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.03em] text-morra-navy">{point.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-6 text-morra-muted">{point.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="bg-morra-navy py-24 text-white sm:py-32 lg:py-40">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-morra-orange-soft">How Morra works</p>
            <h2 className="mt-4 max-w-md font-display text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[0.96] tracking-[-0.06em] text-balance">Four steps. No stress. No new app.</h2>
            <p className="mt-6 max-w-sm text-base leading-7 text-white/65">The whole experience starts in a WhatsApp chat and ends at a pickup point that fits your normal route.</p>
          </div>
          <div className="border-t border-white/15">
            {steps.map(([number, title, copy]) => (
              <article key={number} className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[72px_1fr] sm:gap-7 sm:py-8">
                <span className="font-display text-4xl font-extrabold leading-none tracking-[-0.06em] text-morra-orange-soft">{number}</span>
                <div>
                  <h3 className="font-display text-[1.35rem] font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-2 max-w-xl leading-6 text-white/65">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="paper-pattern bg-morra-sand py-24 sm:py-32 lg:py-40">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-morra-orange">What you can get right now</p>
            <h2 className="mt-4 max-w-md font-display text-[clamp(2.3rem,5vw,4.1rem)] font-bold leading-[0.98] tracking-[-0.055em] text-morra-navy text-balance">Four categories we can vouch for — plus your list.</h2>
            <p className="mt-6 max-w-sm leading-7 text-morra-muted">Starting with what we can source, check, and hand over with confidence.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {categories.map(([icon, title, copy], index) => (
              <article key={title} className={`group border-t border-morra-navy/20 py-7 ${index === 1 ? "sm:mt-12" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-morra-navy shadow-[0_13px_25px_-20px_rgba(22,37,92,0.7)] transition duration-300 group-hover:bg-morra-orange group-hover:text-white">
                    <MorraIcon name={icon} size={24} />
                  </div>
                  <span className="font-display text-xs font-bold tracking-[0.18em] text-morra-navy/35">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.03em] text-morra-navy">{title}</h3>
                <p className="mt-2 max-w-xs leading-6 text-morra-muted">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-3 flex gap-5 rounded-[1.65rem] border border-morra-navy/10 bg-white p-6 shadow-[0_18px_45px_-32px_rgba(22,37,92,0.5)] lg:col-span-2 lg:items-center lg:justify-between lg:gap-10 lg:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-morra-orange text-white">
              <MorraIcon name="message" size={24} />
            </div>
            <div className="flex-1">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-morra-orange">Have a market list?</p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-[-0.03em] text-morra-navy">Send it over — one item or wholesale quantity.</h3>
              <p className="mt-2 max-w-3xl leading-6 text-morra-muted">Within the pilot categories, tell us what you want and we will check Balogun for you. Outside those categories, tell us anyway — it helps us know what to add next.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 font-display text-sm font-bold text-morra-navy transition hover:text-morra-orange">
              Send a request
              <MorraIcon name="arrow-up-right" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-morra-deep py-24 text-white sm:py-32 lg:py-40">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-morra-orange-soft">Why trust Morra</p>
            <h2 className="mt-4 max-w-md font-display text-[clamp(2.3rem,5vw,4.2rem)] font-bold leading-[0.97] tracking-[-0.055em] text-balance">New to this. Real about it.</h2>
            <p className="mt-6 max-w-sm leading-7 text-white/60">The pilot is small on purpose. The promises should be easy to understand and possible to keep.</p>
          </div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {[
              "We check every item against what you ordered before you get it.",
              "Choose transfer or card before arriving, or pay at the CMS counter when you collect.",
              "The Balogun price, 5% service and packaging fee, and ₦500 validation fee stay clear and separate.",
            ].map((promise) => (
              <div key={promise} className="flex gap-5 py-7 text-[1.08rem] leading-7 text-white/80 sm:py-8 sm:text-xl sm:leading-8">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-morra-orange text-white"><MorraIcon name="check" size={16} strokeWidth={2.2} /></span>
                <p className="m-0">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell py-24 text-center sm:py-32 lg:py-40">
        <p className="font-display text-[clamp(4.8rem,15vw,10rem)] font-extrabold leading-none tracking-[-0.09em] text-morra-navy">Mo ra<span className="text-morra-orange">.</span></p>
        <p className="mx-auto mt-7 max-w-2xl text-[clamp(1.15rem,2.4vw,1.45rem)] leading-[1.55] text-morra-muted text-pretty">Yoruba for <em>“I bought.”</em> Morra is a nod to the everyday language of the market itself — that quiet win of walking away with exactly what you came for, at the right price.</p>
      </section>

      <section id="pickup" className="site-shell pb-24 sm:pb-32 lg:pb-40">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-morra-navy p-8 text-white sm:p-10">
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-morra-orange/20 blur-2xl" />
            <div className="relative">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-morra-orange-soft">Where and when</p>
              <h2 className="mt-4 max-w-md font-display text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.055em]">Pickup or delivery, on the next market day.</h2>
              <p className="mt-5 max-w-md leading-7 text-white/70">Every order goes into the next Tuesday, Thursday, or Saturday window. Collect for free at our CMS hub, or choose partner delivery to your area.</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Free pickup</p>
                  <p className="mt-2 font-display text-xl font-bold">CMS · 4:00–6:00 PM</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Partner delivery</p>
                  <p className="mt-2 font-display text-xl font-bold">Same window · fee applies</p>
                </div>
              </div>
              <p className="mt-6 max-w-md text-sm leading-6 text-white/55">Delivery is capped at a few orders per day. The area-based delivery fee is shown before you make full payment.</p>
            </div>
          </div>

          <div id="questions" className="rounded-[2rem] border border-morra-navy/10 bg-white p-6 sm:p-9">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-morra-orange">Questions</p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.1rem,4vw,3.4rem)] font-bold leading-[0.98] tracking-[-0.055em] text-morra-navy">No long talk. Just straight answers.</h2>
            <div className="mt-8 divide-y divide-morra-navy/10 border-y border-morra-navy/10">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0} className="group py-5">
                  <summary className="flex list-none items-center justify-between gap-5 font-display text-lg font-semibold tracking-[-0.025em] text-morra-navy [&::-webkit-details-marker]:hidden">
                    {question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-morra-navy/15 text-morra-navy transition duration-300 group-open:rotate-45 group-open:bg-morra-orange group-open:text-white">
                      <MorraIcon name="x" size={16} />
                    </span>
                  </summary>
                  <p className="max-w-2xl pr-8 pt-4 leading-7 text-morra-muted">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hero-pattern relative overflow-hidden bg-morra-navy py-24 text-center text-white sm:py-32 lg:py-40">
        <div className="site-shell relative">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-morra-orange-soft">Start with what you need</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(2.8rem,7vw,5.3rem)] font-extrabold leading-[0.95] tracking-[-0.065em] text-balance">Oya, let&apos;s start.</h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-7 text-white/70">Open the catalog or send your list, then pick up for free at CMS or choose partner delivery. One WhatsApp chat, sha — that&apos;s it.</p>
          <WhatsAppLink className="mx-auto mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-morra-orange px-7 py-4 font-display text-lg font-bold text-white shadow-[0_18px_35px_-14px_rgba(245,129,31,0.75)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff8f2e] active:translate-y-px">
            Chat on WhatsApp
          </WhatsAppLink>
        </div>
      </section>

      <footer className="bg-morra-deep py-12 text-white/65 sm:py-16">
        <div className="site-shell">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <Image src="/brand/morra.jpeg" alt="Morra logo" width={44} height={44} className="h-11 w-11 rounded-xl object-cover" />
                <span className="font-display text-xl font-bold text-white">Morra</span>
              </div>
              <p className="mt-4 text-sm leading-6">Morra Market Services Limited · CMS pickup hub, Lagos Island.</p>
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-white">Reach us</p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-morra-orange-soft">WhatsApp</a>
                <a href="https://www.instagram.com/morra.market" target="_blank" rel="noopener noreferrer" className="transition hover:text-morra-orange-soft">Instagram</a>
                <a href="https://www.facebook.com/share/19BbitYAcF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="transition hover:text-morra-orange-soft">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Morra. Piloting in Balogun and CMS.</span>
            <span>Orders happen inside WhatsApp; this page collects no personal data.</span>
          </div>
        </div>
      </footer>

      <WhatsAppLink compact className="fixed inset-x-4 bottom-4 z-20 mx-auto inline-flex max-w-sm items-center justify-center gap-2 rounded-full bg-morra-orange px-5 py-3.5 font-display text-base font-bold text-white shadow-[0_15px_35px_-12px_rgba(245,129,31,0.78)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff8f2e] active:translate-y-px sm:inset-x-auto sm:right-5 sm:mx-0 sm:max-w-none sm:px-6">
        Chat on WhatsApp
      </WhatsAppLink>
    </main>
  );
}
