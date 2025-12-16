// React import not required with the new JSX transform
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const filmography = [
  { year: "2006", title: "Anagarik", role: "Lead", description: "Dayahang Rai's feature film debut directed by Ram Babu Gurung, winning two awards at the Nepal International Indigenous Film Festival." },
  { year: "2009", title: "Dasdhunga", role: "Supporting", description: "Dayahang received his first National Award for Best Supporting Actor for this film starring Saugat Malla and Anup Baral." },
  { year: "2012", title: "Loot", role: "Gofle", description: "The turning point in Dayahang's career. His iconic character earned critical acclaim and a Popular Award, with him co-writing the dialogues." },
  { year: "2013", title: "Kabaddi", role: "Lead", description: "The first film in the massively successful Kabaddi franchise, establishing Dayahang as a leading contemporary actor." },
  { year: "2016", title: "White Sun (Seto Surya)", role: "Lead", description: "Critically acclaimed film about Nepal's Civil War, selected as Nepal's submission to the 2018 Oscars for Best Foreign Language Film." },
];

const affiliations = [
  { organisation: "Mandala Theatre, Nepal", role: "Co-founder and affiliated performer" },
  { organisation: "Actors' Studio", role: "Member since 2007, platform for theater artists" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dayahang Rai",
  "birthDate": "1980-04-13",
  "birthPlace": "Khawa, Bhojpur District, Nepal",
  "image": "https://yourdomain.com/images/dayahang-rai-portrait-og.svg",
  "url": "https://yourdomain.com/dayahang-rai/biography",
  "sameAs": [
    "https://www.imdb.com/name/nm4741033"
  ],
  "jobTitle": "Actor, Director, Playwright",
  "worksFor": { "@type": "Organization", "name": "Mandala Theatre" },
  "description": "Dayahang Rai is one of Nepal's most popular actors, known for his roles in Loot, White Sun, Kabaddi series, and contributions to Nepali theatre and film."
};

export const Biography = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Dayahang Rai — Biography & Award-Winning Films"
        description="Discover Dayahang Rai's biography, award-winning films including Loot and White Sun, theatre background, and professional affiliations. Explore one of Nepal's most versatile contemporary actors."
        path="/dayahang-rai/biography"
        image="/images/dayahang-rai-portrait-og.svg"
        structuredData={structuredData}
      />
      <Header activePage="Biography" />

      <section className="w-full bg-gradient-to-b from-[#F3EFE8] to-white py-10 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-24">
            {/* Portrait */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/dayahang-rai-portrait.jpg"
                alt="Professional portrait of Dayahang Rai, award-winning Nepali actor, director, playwright and National Award recipient"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Biography Text */}
            <div>
              <h1 className="text-[#2B2B2B] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">Dayahang Rai</h1>
              <p className="text-[#4A4A4A] text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-relaxed">
                Dayahang Rai is a renowned Nepali actor, director, and playwright born on April 13, 1980, in Khawa, Bhojpur District. He is one of the most popular contemporary actors in Nepal with over 50 films to his credit and a significant presence in theatre.
              </p>
              <p className="text-[#4A4A4A] text-lg md:text-xl mb-4 leading-relaxed">
                He rose to prominence through theatrical performances and television series like Yuwa and Dalan, but achieved widespread recognition with his roles in <strong>Loot</strong> (2012), <strong>Kabaddi</strong> series, and <strong>White Sun</strong>, which was submitted to the 2018 Oscars.
              </p>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-relaxed">
                A recipient of three National Awards for acting, Dayahang continues to deliver versatile and impactful performances that combine traditional Nepali storytelling with contemporary acting techniques. He is also co-founder of Mandala Theatre, Nepal.
              </p>
            </div>
          </div>

          {/* Affiliations */}
          <div className="mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-[#2B2B2B] text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-12">Professional Roles & Affiliations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {affiliations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-2xl mb-3">{item.organisation}</h3>
                  <p className="text-gray-700">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filmography */}
          <div>
            <h2 className="text-[#2B2B2B] text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-12">Top Blockbuster Films</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {filmography.map((film, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#C9A86A] hover:scale-105 transform transition-transform duration-300"
                >
                  <h3 className="text-xl font-bold text-[#2B2B2B] mb-1">{film.title} ({film.year})</h3>
                  <p className="text-sm text-[#6F6F6F] mb-2"><strong>Role:</strong> {film.role}</p>
                  <p className="text-[#4A4A4A]">{film.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center">
            <a
              href="/media"
              aria-label="Explore Dayahang Rai's media gallery - photos, videos, and press coverage"
              className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#111111] text-[#EDEDED] font-semibold rounded-2xl hover:bg-[#0E0E0E] hover:shadow-2xl transition-all duration-250 shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA372] focus-visible:ring-offset-2 text-center"
            >
              Explore Media Gallery
            </a>
            <a
              href="/contact"
              aria-label="Contact Dayahang Rai for bookings and professional inquiries"
              className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#111111] text-[#111111] font-semibold rounded-2xl hover:border-[#BFA372] hover:shadow-2xl transition-all duration-250 shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA372] focus-visible:ring-offset-2 text-center"
            >
              Contact Dayahang Rai
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
