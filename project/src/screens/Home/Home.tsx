import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import HeroImage from "../../components/ui/HeroImage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { useEffect } from "react";

export const Home = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#F3EFE8] to-white w-full relative overflow-x-hidden">
      <SEO
        title="Dayahang Rai — Nepali Actor, Comedian & Theatre Practitioner"
        description="Discover the journey of Dayahang Rai, a versatile Nepali actor and theatre practitioner known for his impactful characters, comedic style, and cultural storytelling in film, theatre, and television."
        path="/dayahang-rai"
        image="/images/dayahang-rai-portrait-og.svg"
      />

      <Header activePage="Home" />

      {/* Hero */}
      <section className="relative w-full min-h-[600px] md:min-h-[680px] bg-gradient-to-br from-[#F3EFE8] to-white overflow-visible isolate">
        <div className="absolute inset-0 pointer-events-none -z-20">
          <div className="hidden md:block absolute -right-40 top-6 w-[560px] h-[560px] bg-gradient-to-tr from-[#f3efe8] to-[#fdfbf7] rounded-full opacity-50 transform rotate-12 filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="max-w-xl">
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-extrabold text-[#2B2B2B] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-3 sm:mb-4">
                Dayahang Rai
              </h1>

              <p className="text-[#1A1A1A] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6">
                Award-Winning Nepali Actor & Theatre Practitioner — bringing authentic stories to life.
              </p>

              <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                I'm Dayahang Rai, born on April 13, 1980, in Khawa, Bhojpur District, Eastern Nepal. My artistic journey began in Kathmandu's vibrant theatre movement, where I discovered my passion for authentic storytelling and meaningful performances.
              </p>

              <p className="text-[#4A4A4A] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Over two decades, I've worked across traditional theatre, Nepali cinema, and television. My breakthrough came with the film Loot (2012), followed by critically acclaimed works like White Sun (submitted to 2018 Oscars) and the Kabaddi series. I'm the recipient of three National Awards and co-founder of Mandala Theatre, Nepal.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="shadow-2xl">
                  <Link to="/media">
                    <span className="relative z-10 flex items-center gap-3 px-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <path d="M5 3v18l15-9L5 3z" fill="rgba(255,255,255,0.95)" />
                      </svg>
                      <span>Watch Reel</span>
                    </span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">
                    <span className="relative z-10">Explore Portfolio</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    <span className="relative z-10">Book for Projects</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* FIX: WRAPPED ROTATED IMAGE TO PREVENT OVERFLOW */}
            <div className="w-full flex justify-center md:justify-end mt-6 md:mt-0 overflow-hidden">
              <div className="w-full max-w-[340px] sm:max-w-[400px] md:w-[460px] lg:w-[520px] overflow-hidden rounded-lg shadow-2xl">
                <HeroImage
                  src="/images/pkdai2.jpg"
                  alt="Portrait of Dayahang Rai"
                  caption="Dayahang Rai"
                  rotate={4}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#2B2B2B] text-white flex items-center justify-center shadow-inner mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M5 7h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="8" cy="17" r="1.6" fill="currentColor" />
                  <circle cx="16" cy="17" r="1.6" fill="currentColor" />
                </svg>
              </div>

              <p className="text-sm text-[#6F6F6F]">Years</p>
              <p className="text-3xl font-bold text-[#2B2B2B]">15+</p>

              <p className="text-sm text-[#4A4A4A] mt-3 leading-relaxed">
                Extensive experience in theatre, film, and contemporary drama across two decades.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C9A86A] to-[#b58f50] text-white flex items-center justify-center shadow-inner mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M7 11h.01M12 11h.01M17 11h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <p className="text-sm text-[#6F6F6F]">Stage & Screen</p>
              <p className="text-3xl font-bold text-[#2B2B2B]">50+</p>

              <p className="text-sm text-[#4A4A4A] mt-3 leading-relaxed">
                Over 50 films, theatre productions, and television appearances spanning multiple genres.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C4633E] to-[#a55230] text-white flex items-center justify-center shadow-inner mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 17h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <p className="text-sm text-[#6F6F6F]">Community</p>
              <p className="text-2xl font-bold text-[#2B2B2B]">Awards</p>

              <p className="text-sm text-[#4A4A4A] mt-3 leading-relaxed">
                Recipient of three National Awards and multiple recognitions for excellence in acting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">
              Selected Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of film and theatre projects that highlight range, comedic timing, and emotional depth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Loot",
                tag: "Film",
                description:
                  "The turning point in Dayahang's career. His iconic character Gofle earned critical acclaim, and he co-wrote the dialogues. Won Popular Award.",
                image: "/images/loot.jpg"
              },
              {
                title: "White Sun (Seto Surya)",
                tag: "Film",
                description:
                  "Critically acclaimed drama about Nepal's Civil War. Selected as Nepal's submission to 2018 Oscars for Best Foreign Language Film.",
                image: "/images/white-sun.jpg"
              },
              {
                title: "Kabaddi Series",
                tag: "Film Series",
                description:
                  "Massively successful franchise where Dayahang established himself as a leading actor, winning National Awards for best acting.",
                image: "/images/kabaddi.jpg"
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-muted/10">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/portfolio">See Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="w-full py-10 sm:py-12 md:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-2xl sm:text-3xl md:text-4xl mb-2">
              Dayahang Rai — Actor, Theatre Practitioner & Mentor
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Known for blending traditional Nepali theatre with modern storytelling...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card A */}
            <div className="bg-[#F3EFE8] rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 min-h-[160px] lg:aspect-square">
              <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                <div className="flex-none w-10 sm:w-12 h-10 sm:h-12 rounded-md bg-[#1A1A1A] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a4 4 0 100 8 4 4 0 000-8zM6 20a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Actor & Practitioner</div>
                  <div className="font-semibold text-lg text-[#2B2B2B] mt-1">
                    Traditional & Contemporary Storytelling
                  </div>
                  <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
                    Combining classical Nepali theatre roots with modern performance techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* Card B */}
            <div className="bg-[#F3EFE8] rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 min-h-[160px] lg:aspect-square">
              <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                <div className="flex-none w-10 sm:w-12 h-10 sm:h-12 rounded-md bg-gradient-to-br from-[#C9A86A] to-[#b58f50] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Versatile Performer</div>
                  <div className="font-semibold text-lg text-[#2B2B2B] mt-1">
                    Theatre, Film & Television
                  </div>
                  <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
                    Known for impactful character roles in Nepali films and the popular sitcom
                    <em> Meri Bassai</em>.
                  </p>
                </div>
              </div>
            </div>

            {/* Card C */}
            <div className="bg-[#F3EFE8] rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 min-h-[160px] lg:aspect-square">
              <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                <div className="flex-none w-10 sm:w-12 h-10 sm:h-12 rounded-md bg-[#C4633E] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l2.9 6.2L21 9l-5 3.8L17 21l-5-3.2L7 21l1-8.2L3 9l6.1-.8L12 2z"
                      stroke="currentColor"
                      strokeWidth="0.9"
                    />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Cultural Impact</div>
                  <div className="font-semibold text-lg text-[#2B2B2B] mt-1">
                    Memorable Characters & Expressions
                  </div>
                  <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
                    Loved for his signature “Hait” expression and iconic comedic moments in Nepali
                    pop culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Card D */}
            <div className="bg-[#F3EFE8] rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 min-h-[160px] lg:aspect-square">
              <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                <div className="flex-none w-10 sm:w-12 h-10 sm:h-12 rounded-md bg-[#1A1A1A] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4v8M8 12h8M4 20h16" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Mentoring & Community</div>
                  <div className="font-semibold text-lg text-[#2B2B2B] mt-1">
                    Creative Development & Youth Programs
                  </div>
                  <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
                    Dedicated to training young artists through workshops, community theatre, and
                    storytelling initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <a href="/biography">Read Full Biography</a>
            </Button>
            <Button asChild variant="outline" className="ml-4">
              <a href="/contact">Contact</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
