// @ts-nocheck
"use client";

import { Anton, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Anton({ subsets: ["latin"], weight: ["400"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const RED = "#E63946";
const RED_DEEP = "#9B1F2A";
const YELLOW = "#F4C430";
const CREAM = "#FFF8E7";
const TEXT = "#1A1A1A";
const TEXT_MUTED = "#5C5C5C";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: CREAM, color: TEXT, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(-1deg); } 50% { transform: rotate(1deg); } }
        .fade-up { animation: fadeUp 0.7s ease-out forwards; }
        .fade-up-d1 { animation: fadeUp 0.7s 0.15s ease-out both; }
        .fade-up-d2 { animation: fadeUp 0.7s 0.3s ease-out both; }
        .wiggle { animation: wiggle 0.5s ease-in-out; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: RED, borderBottom: `4px solid ${YELLOW}` }}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.6rem", color: CREAM, letterSpacing: "0.04em" }}>
            PHILLY <span style={{ color: YELLOW }}>ON THE BLOCK</span>
          </span>
          <a href={phoneTel} className={display.className + " px-5 py-2 text-base transition-transform hover:scale-105"} style={{ backgroundColor: YELLOW, color: TEXT, borderRadius: "4px", letterSpacing: "0.04em" }}>
            CALL US
          </a>
        </div>
      </nav>

      <section className="relative pt-24 pb-12 md:pt-32 overflow-hidden" style={{ backgroundColor: RED }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("${content.hero.image}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top, transparent 0%, ${RED} 75%)` }} />
        <div className="relative max-w-6xl mx-auto px-6 z-10 text-center fade-up">
          <div className="inline-block px-5 py-2 mb-6 transform rotate-[-2deg]" style={{ backgroundColor: YELLOW, color: TEXT }}>
            <span className={display.className} style={{ fontSize: "1rem", letterSpacing: "0.05em" }}>⭐ 4.8 / 5 • 59 RAVE REVIEWS</span>
          </div>
          <h1 className={display.className} style={{ fontSize: "clamp(3rem, 11vw, 8rem)", color: CREAM, lineHeight: 0.9, letterSpacing: "0.01em", textTransform: "uppercase" }}>
            Cheesesteaks<br />
            <span style={{ color: YELLOW, fontStyle: "italic" }}>Done the Philly way.</span>
          </h1>
          <p className="text-xl md:text-2xl mt-8 max-w-2xl mx-auto fade-up-d1" style={{ color: "rgba(255,248,231,0.95)", lineHeight: 1.5 }}>{content.hero.subheading}</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center fade-up-d2">
            <a href={content.hero.ctaLink} className={display.className + " px-9 py-4 text-lg transition-transform hover:scale-105 shadow-2xl"} style={{ backgroundColor: YELLOW, color: TEXT, borderRadius: "6px", letterSpacing: "0.04em" }}>{content.hero.ctaText}</a>
            <a href="#menu" className={display.className + " px-9 py-4 text-lg transition-all hover:bg-white/10"} style={{ border: `3px solid ${CREAM}`, color: CREAM, borderRadius: "6px", letterSpacing: "0.04em" }}>SEE THE MENU</a>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: YELLOW, color: TEXT }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-around gap-6 text-center md:text-left">
          {[
            { num: "100%", label: "Real Ribeye" },
            { num: "Amoroso", label: "Style Rolls" },
            { num: "6 Days", label: "Open Tue–Sun" },
            { num: "$13", label: "The Classic" },
          ].map((s, i) => (
            <div key={i}>
              <p className={display.className} style={{ fontSize: "2.5rem", lineHeight: 1, color: RED_DEEP, letterSpacing: "0.01em" }}>{s.num}</p>
              <p className="text-sm font-bold uppercase mt-1 tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
        <p className={display.className} style={{ fontSize: "1.25rem", color: RED, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>The Story</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: TEXT, lineHeight: 1.0, letterSpacing: "0.01em" }}>{content.about.heading.toUpperCase()}</h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="menu" className="py-20 md:py-28" style={{ backgroundColor: TEXT, color: CREAM }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className={display.className} style={{ fontSize: "1.25rem", color: YELLOW, letterSpacing: "0.1em" }}>THE MENU</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: CREAM, lineHeight: 1.0, marginTop: "0.5rem", letterSpacing: "0.01em" }}>EVERYTHING'S WORTH ORDERING.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.services.map((s, i) => (
              <div key={i} className="p-7 transition-transform hover:scale-[1.03]" style={{ backgroundColor: CREAM, color: TEXT, border: `4px solid ${YELLOW}`, borderRadius: "6px" }}>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3 className={display.className} style={{ fontSize: "1.65rem", color: RED, letterSpacing: "0.01em" }}>{s.title.toUpperCase()}</h3>
                  {s.price && <span className={display.className} style={{ fontSize: "1.4rem", color: TEXT }}>{s.price}</span>}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className={display.className} style={{ fontSize: "1.25rem", color: RED, letterSpacing: "0.1em" }}>THE BLOCK SAYS</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)", color: TEXT, lineHeight: 1.0, marginTop: "0.5rem", letterSpacing: "0.01em" }}>59 PEOPLE CAN'T BE WRONG.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <div key={i} className="p-7" style={{ backgroundColor: "white", border: `3px solid ${RED}`, borderRadius: "6px" }}>
              <div className="flex gap-1 mb-3 text-lg" style={{ color: YELLOW, WebkitTextStroke: `0.5px ${RED}` }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-base leading-relaxed font-medium" style={{ color: TEXT }}>"{r.text}"</p>
              <p className={display.className + " mt-5 text-base"} style={{ color: RED, letterSpacing: "0.04em" }}>— {r.name.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" className="py-20 md:py-28" style={{ backgroundColor: RED, color: CREAM, borderTop: `6px solid ${YELLOW}`, borderBottom: `6px solid ${YELLOW}` }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className={display.className} style={{ fontSize: "1.25rem", color: YELLOW, letterSpacing: "0.1em" }}>FIND US</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: CREAM, lineHeight: 1.0, marginTop: "0.5rem", letterSpacing: "0.01em" }}>2600 W VICTORY BLVD.</h2>
            <p className="mt-6 text-lg" style={{ color: "rgba(255,248,231,0.9)" }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-3 text-4xl transition-opacity hover:opacity-80"} style={{ color: YELLOW }}>{content.contact.phone}</a>
            <table className="mt-10 w-full text-base">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `1px solid rgba(255,248,231,0.25)` }}>
                    <td className={display.className + " py-3.5"} style={{ color: CREAM, letterSpacing: "0.02em" }}>{day.toUpperCase()}</td>
                    <td className="py-3.5 text-right font-bold" style={{ color: YELLOW }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-hidden shadow-2xl" style={{ minHeight: "440px", border: `4px solid ${YELLOW}`, borderRadius: "6px" }}>
            <iframe title="Philly On The Block Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "440px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <h3 className={display.className} style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: TEXT, lineHeight: 1.0, letterSpacing: "0.01em" }}>HUNGRY?<br /><span style={{ color: RED }}>WE GOT YOU.</span></h3>
        <a href={phoneTel} className={display.className + " inline-block mt-10 px-12 py-5 text-2xl transition-transform hover:scale-105 shadow-2xl"} style={{ backgroundColor: YELLOW, color: TEXT, borderRadius: "6px", letterSpacing: "0.02em" }}>{content.contact.phone}</a>
      </section>

      <footer style={{ backgroundColor: TEXT, color: CREAM, borderTop: `6px solid ${RED}` }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm">
          <div>
            <p className={display.className} style={{ fontSize: "1.6rem", color: CREAM, letterSpacing: "0.04em" }}>PHILLY <span style={{ color: YELLOW }}>ON THE BLOCK</span></p>
            <p className="mt-2" style={{ color: "rgba(255,248,231,0.7)" }}>{content.contact.address}</p>
            <p className="mt-1"><a href={phoneTel} style={{ color: YELLOW }} className="hover:underline">{content.contact.phone}</a></p>
          </div>
          <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,248,231,0.6)" }}>© {new Date().getFullYear()} Philly On The Block</div>
        </div>
      </footer>
    </main>
  );
}