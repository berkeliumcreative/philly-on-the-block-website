// @ts-nocheck
"use client";

import { Righteous, Poppins } from "next/font/google";
import content from "../data/content.json";

const display = Righteous({ subsets: ["latin"], weight: ["400"] });
const body = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

// Claymorphism — soft 3D rounded surfaces with natural green + floral pink + cheesesteak warm tones
const CLAY_BG = "#FFEFE6";
const CLAY_BG_DEEP = "#FFD9C0";
const SAGE = "#9DC88D";
const SAGE_DEEP = "#5F8B4F";
const PINK = "#FF8FA8";
const PINK_DEEP = "#E0466B";
const SUN = "#FFD23F";
const INK = "#3D2818";
const TEXT_SOFT = "#7A5A48";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: CLAY_BG, color: INK, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes bounceIn { from { opacity: 0; transform: scale(0.8) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .bounce-in { animation: bounceIn 0.85s cubic-bezier(.34,1.56,.64,1) forwards; }
        .bounce-in-d1 { animation: bounceIn 0.85s 0.15s cubic-bezier(.34,1.56,.64,1) both; }
        .bounce-in-d2 { animation: bounceIn 0.85s 0.3s cubic-bezier(.34,1.56,.64,1) both; }
        .float { animation: float 4s ease-in-out infinite; }
        .clay {
          box-shadow: 16px 16px 32px ${INK}1A, -8px -8px 20px #ffffff;
          transition: transform 350ms cubic-bezier(.34,1.56,.64,1), box-shadow 350ms;
        }
        .clay:hover { transform: translateY(-6px); box-shadow: 20px 20px 40px ${INK}2A, -10px -10px 24px #ffffff; }
        .clay-sm {
          box-shadow: 8px 8px 18px ${INK}14, -4px -4px 10px #ffffff;
          transition: transform 250ms cubic-bezier(.34,1.56,.64,1);
        }
        .clay-sm:hover { transform: scale(1.04); }
        .clay-inset {
          box-shadow: inset 6px 6px 14px ${INK}18, inset -4px -4px 10px #ffffff;
        }
        .clay-btn {
          box-shadow: 8px 8px 20px ${INK}22, inset 0 -3px 0 ${INK}11, inset 0 2px 0 #ffffff77;
          transition: all 200ms;
        }
        .clay-btn:active { transform: translate(2px,2px); box-shadow: 4px 4px 12px ${INK}22; }
      `}</style>

      <nav className="sticky top-0 z-50" style={{ backgroundColor: CLAY_BG + "DD", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <span className={display.className} style={{ fontSize: "1.6rem", color: PINK_DEEP, letterSpacing: "0.04em" }}>
            PHILLY ON <span style={{ color: SAGE_DEEP }}>THE BLOCK</span>
          </span>
          <a href={phoneTel} className="clay-btn px-6 py-3 text-sm font-bold tracking-wider" style={{ backgroundColor: PINK_DEEP, color: "#fff", borderRadius: "999px" }}>ORDER ☎</a>
        </div>
      </nav>

      {/* HERO — soft floaty portfolio-grid feel */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        <div className="absolute top-10 -left-20 w-80 h-80 rounded-full opacity-50" style={{ backgroundColor: SUN, filter: "blur(60px)" }} />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full opacity-50" style={{ backgroundColor: PINK, filter: "blur(60px)" }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 bounce-in">
            <div className="clay-sm inline-block px-5 py-2 mb-7" style={{ backgroundColor: SUN, borderRadius: "999px" }}>
              <span className={display.className} style={{ fontSize: "0.85rem", color: INK, letterSpacing: "0.06em" }}>★ 4.8 · 59 RAVES · BURBANK</span>
            </div>
            <h1 className={display.className} style={{ fontSize: "clamp(3rem, 9vw, 7rem)", color: INK, lineHeight: 0.9, letterSpacing: "0.01em" }}>
              CHEESE.<br /><span style={{ color: PINK_DEEP }}>STEAKS.</span><br /><span style={{ color: SAGE_DEEP }}>DONE RIGHT.</span>
            </h1>
            <p className="mt-8 text-xl max-w-md bounce-in-d1" style={{ color: TEXT_SOFT, lineHeight: 1.5, fontWeight: 500 }}>{content.hero.subheading}</p>
            <div className="mt-9 flex flex-wrap gap-4 bounce-in-d2">
              <a href={content.hero.ctaLink} className={display.className + " clay-btn px-9 py-5 text-base tracking-wider"} style={{ backgroundColor: PINK_DEEP, color: "#fff", borderRadius: "999px", letterSpacing: "0.06em" }}>{content.hero.ctaText}</a>
              <a href="#menu" className={display.className + " clay-btn px-9 py-5 text-base tracking-wider"} style={{ backgroundColor: CLAY_BG, color: INK, borderRadius: "999px", letterSpacing: "0.06em" }}>SEE THE MENU</a>
            </div>
          </div>
          <div className="md:col-span-5 bounce-in-d1 float">
            <div className="clay overflow-hidden aspect-square bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")`, borderRadius: "48px" }} />
            <div className="clay-sm mt-5 px-5 py-4 flex items-center gap-3" style={{ backgroundColor: SUN, borderRadius: "20px" }}>
              <span className={display.className} style={{ fontSize: "1.8rem", color: INK }}>$13</span>
              <div>
                <p className={display.className} style={{ fontSize: "0.95rem", color: INK, letterSpacing: "0.04em" }}>THE CLASSIC</p>
                <p className="text-xs font-semibold" style={{ color: TEXT_SOFT }}>Amoroso roll · ribeye · provolone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY — clay pill stat band */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { n: "100%", l: "Real Ribeye", c: PINK },
            { n: "Amoroso", l: "Style Rolls", c: SAGE },
            { n: "Tue-Sun", l: "6 Days Open", c: SUN },
            { n: "South", l: "Philly Native", c: PINK_DEEP },
          ].map((s, i) => (
            <div key={i} className="clay-sm p-7 text-center" style={{ backgroundColor: s.c, borderRadius: "32px" }}>
              <p className={display.className} style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: INK, letterSpacing: "0.02em", lineHeight: 1 }}>{s.n}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest" style={{ color: INK }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU — portfolio grid claymorphic cards */}
      <section id="menu" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className={display.className} style={{ fontSize: "1rem", color: PINK_DEEP, letterSpacing: "0.3em" }}>★ THE MENU ★</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK, lineHeight: 0.95, letterSpacing: "0.01em", marginTop: "1rem" }}>EVERYTHING'S<br />WORTH ORDERING.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((s, i) => {
            const color = [PINK, SAGE, SUN, PINK_DEEP, SAGE_DEEP, CLAY_BG_DEEP][i % 6];
            return (
              <div key={i} className="clay p-8" style={{ backgroundColor: color, borderRadius: "36px" }}>
                <div className="flex items-baseline justify-between mb-5">
                  <span className={display.className} style={{ fontSize: "0.85rem", color: INK, letterSpacing: "0.15em", opacity: 0.7 }}>0{i + 1}.</span>
                  {s.price && <span className={display.className} style={{ fontSize: "1.5rem", color: INK, letterSpacing: "0.01em" }}>{s.price}</span>}
                </div>
                <h3 className={display.className} style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)", color: INK, lineHeight: 1.05, letterSpacing: "0.01em" }}>{s.title.toUpperCase()}</h3>
                <p className="mt-4 text-sm leading-relaxed font-medium" style={{ color: INK, opacity: 0.85 }}>{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28" style={{ backgroundColor: CLAY_BG_DEEP }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className={display.className} style={{ fontSize: "1rem", color: PINK_DEEP, letterSpacing: "0.3em" }}>★ WHAT THEY SAY ★</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: INK, lineHeight: 0.95, letterSpacing: "0.01em", marginTop: "1rem" }}>59 PEOPLE<br />CAN'T BE WRONG.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {content.reviews.map((r, i) => (
              <div key={i} className="clay p-8" style={{ backgroundColor: CLAY_BG, borderRadius: "32px" }}>
                <div className="flex gap-1 mb-4 text-lg" style={{ color: PINK_DEEP }}>{Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}</div>
                <p className="text-base leading-relaxed font-medium" style={{ color: INK }}>&ldquo;{r.text}&rdquo;</p>
                <p className={display.className + " mt-6 text-base"} style={{ color: SAGE_DEEP, letterSpacing: "0.05em" }}>— {r.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="clay grid md:grid-cols-12 gap-10 p-8 md:p-12" style={{ backgroundColor: CLAY_BG, borderRadius: "48px" }}>
          <div className="md:col-span-5">
            <p className={display.className} style={{ fontSize: "1rem", color: PINK_DEEP, letterSpacing: "0.3em" }}>★ FIND US ★</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: INK, lineHeight: 0.95, letterSpacing: "0.01em", marginTop: "1rem" }}>2600 W<br />VICTORY BLVD.</h2>
            <p className="mt-6 text-base font-medium" style={{ color: TEXT_SOFT }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-4 transition-opacity hover:opacity-70"} style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: PINK_DEEP, letterSpacing: "0.01em", lineHeight: 1 }}>{content.contact.phone}</a>
            <div className="clay-inset mt-8 p-5" style={{ backgroundColor: CLAY_BG, borderRadius: "24px" }}>
              {Object.entries(content.contact.hours).map(([day, time]) => (
                <div key={day} className="flex justify-between py-2.5 text-sm border-b" style={{ borderColor: `${INK}10` }}>
                  <span className={display.className} style={{ color: INK, letterSpacing: "0.06em", fontSize: "0.85rem" }}>{day.toUpperCase()}</span>
                  <span className="font-bold" style={{ color: time === "Closed" ? `${TEXT_SOFT}AA` : SAGE_DEEP }}>{String(time)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 clay-inset overflow-hidden" style={{ borderRadius: "32px", minHeight: "520px", backgroundColor: CLAY_BG }}>
            <iframe title="Philly On The Block" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "520px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="clay p-12 md:p-20 text-center" style={{ backgroundColor: PINK_DEEP, borderRadius: "48px", color: "#fff" }}>
          <h3 className={display.className} style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "0.01em" }}>HUNGRY?<br /><span style={{ color: SUN }}>WE GOT YOU.</span></h3>
          <a href={phoneTel} className={display.className + " clay-btn inline-block mt-10 px-12 py-5 text-2xl"} style={{ backgroundColor: SUN, color: INK, borderRadius: "999px", letterSpacing: "0.02em" }}>{content.contact.phone}</a>
        </div>
      </section>

      <footer className="py-12" style={{ backgroundColor: CLAY_BG }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p className={display.className} style={{ fontSize: "1.4rem", color: PINK_DEEP, letterSpacing: "0.04em" }}>PHILLY ON <span style={{ color: SAGE_DEEP }}>THE BLOCK</span></p>
          <p style={{ color: TEXT_SOFT }}>{content.contact.address}</p>
          <p className={display.className} style={{ fontSize: "0.75rem", color: TEXT_SOFT, letterSpacing: "0.2em" }}>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
