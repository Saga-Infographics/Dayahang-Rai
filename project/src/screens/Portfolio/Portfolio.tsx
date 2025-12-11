import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const categories = ["All", "Film","Direction", "Theatre"];

const portfolioItems = [
  // Films
  { year: "2006", title: "Anagarik", role: "Lead", description: "An early notable film in Dayahang Rai's career, establishing him as a serious actor in Nepali cinema.", image: "/images/anagarik.jpg", category: "Film" },
  { year: "2009", title: "Dasdhunga", role: "Lead", description: "A significant drama that showcased Dayahang's range and commitment to meaningful cinema.", image: "/images/dasdhunga.jpg", category: "Film" },
  { year: "2012", title: "Loot", role: "Lead", description: "A critically acclaimed thriller that became one of Dayahang's most celebrated performances, marking a turning point in his career.", image: "/images/loot.jpg", category: "Film" },
  { year: "2013", title: "Saanghuro", role: "Nare", description: "A critically acclaimed drama where Dayahang delivered a memorable supporting performance.", image: "/images/saanghuro.jpg", category: "Film" },
  { year: "2013", title: "Kabaddi", role: "Lead", description: "The first film in the massively successful Kabaddi franchise, establishing Dayahang as a leading contemporary actor in Nepal.", image: "/images/kabaddi.jpg", category: "Film" },
  { year: "2014", title: "Talakjung vs Tulke", role: "Lead", description: "Award-winning film showcasing Dayahang's versatility during backdrop of Civil War.", image: "/images/talakjung.jpg", category: "Film" },
  { year: "2015", title: "Kabaddi Kabaddi", role: "Chhantyal", description: "Sequel to the popular Kabaddi film, Dayahang reprises his role as Chhantyal, strengthening his reputation as a leading comedic actor in Nepal.", image: "/images/kabaddi-kabaddi.jpg", category: "Film" },
  { year: "2015", title: "Woda Number 6", role: "Lead", description: "A political satire featuring Dayahang Rai, showcasing his unique blend of humor and social commentary.", image: "/images/woda-number6.jpg", category: "Film" },
  { year: "2016", title: "Seto Surya", role: "Lead", description: "An acclaimed film that served as Nepal's official submission to the Academy Awards, earning international recognition for Dayahang's powerful performance.", image: "/images/white-sun.jpg", category: "Film" },
  { year: "2016", title: "Chhakka Panja", role: "Lead", description: "Nepal's biggest comedy franchise where Dayahang's performance contributed to its massive popularity and critical acclaim.", image: "/images/chhakka-panja.jpg", category: "Film" },
  { year: "2016", title: "Purano Dunga", role: "Bideshi", description: "A drama reflecting rural cultural nuances and Dayahang's diverse acting abilities.", image: "/images/purano-dunga.jpg", category: "Film" },
  { year: "2016", title: "Bijuli Machine", role: "Ram Dai", description: "A unique story where Dayahang plays Ram Dai, helping elevate this experimental narrative to mainstream recognition.", image: "/images/bijuli-machine.jpg", category: "Film" },
  { year: "2017", title: "Ghampani", role: "Nima", description: "A social drama where Dayahang's Nima adds humor and realism to address themes of love, caste, and tradition.", image: "/images/ghampani.jpg", category: "Film" },
  { year: "2017", title: "A Mero Hajur 2", role: "Shree Dharmendra", description: "A family drama featuring Dayahang's comic performance as Shree Dharmendra.", image: "/images/a-mero-hajur2.jpg", category: "Film" },
  { year: "2018", title: "Mr. Jholay", role: "Guna Prasad", description: "Comedy entertainer with Dayahang delivering a hilarious and memorable role as Guna Prasad.", image: "/images/mr-jholay.jpg", category: "Film" },
  { year: "2018", title: "Panche Baja", role: "Sahile", description: "Rural drama featuring Dayahang as Sahile, blending comedy and authenticity.", image: "/images/panche-baja.jpg", category: "Film" },
  { year: "2018", title: "Kohalpur Express", role: "Sher Bahadur", description: "An adventure-comedy where Dayahang portrays Sher Bahadur, combining humor with regional storytelling.", image: "/images/kohalpur.jpg", category: "Film" },
  { year: "2018", title: "Damaruko Dandibiyo", role: "Mukhiya", description: "A cultural sports drama where Dayahang plays Mukhiya, contributing significantly to the ensemble cast.", image: "/images/damaruko.jpg", category: "Film" },
  { year: "2018", title: "Chhakka Panja 3", role: "Lead", description: "Dayahang reprises his role in this successful comedy, solidifying his iconic status in Nepali cinema.", image: "/images/chhakka-panja3.jpg", category: "Film" },
  { year: "2019", title: "Saili", role: "Supporting", description: "A critically acclaimed drama featuring Dayahang in a supporting role, highlighting his range as an actor.", image: "/images/saili.jpg", category: "Film" },
  { year: "2019", title: "Bir Bikram 2", role: "Bagh Bahadur", description: "Action-packed sequel where Dayahang shines as Bagh Bahadur, delivering both comedy and memorable scenes.", image: "/images/bir-bikram2.jpg", category: "Film" },
  { year: "2019", title: "Kabaddi 3", role: "Chhantyal", description: "The third installment of the Kabaddi franchise, continuing Dayahang's iconic role.", image: "/images/kabaddi3.jpg", category: "Film" },
  { year: "2020", title: "Senti Virus", role: "Supporting", description: "A popular comedy where Dayahang adds comedic charm, engaging audiences nationwide.", image: "/images/senti-virus.jpg", category: "Film" },
  { year: "2022", title: "Mantra", role: "Supporting", description: "A Nepali feature film with Dayahang delivering a compelling supporting performance.", image: "/images/mantra.jpg", category: "Film" },
  { year: "2023", title: "Chhakka Panja 4", role: "Lead", description: "Part of Nepal's blockbuster comedy franchise, Dayahang's role remains iconic and widely appreciated.", image: "/images/chhakka-panja4.jpg", category: "Film" },
  { year: "2023", title: "Kabaddi 4: The Final Match", role: "Chhantyal", description: "The final installment of the Kabaddi franchise, a performance widely appreciated and celebrated.", image: "/images/kabaddi4.jpg", category: "Film" },

  // Theatre
  { year: "2007", title: "Actors' Studio", role: "Member", description: "Joined Actors' Studio in 2007, a key platform for theater artists in Nepal.", image: "/images/actors-studio.jpg", category: "Theatre" },
  { year: "2008", title: "Mandala Theatre", role: "Co-founder", description: "Co-founded Mandala Theatre, Nepal with Rajan Khatiwada and Dhiren Raja (Limbu), a significant contribution to Nepali theater.", image: "/images/mandala-theatre.jpg", category: "Theatre" },
  { year: "2014", title: "Talakjung vs Tulke", role: "Theatre", description: "Original theatrical play that later became an acclaimed film.", image: "/images/talakjung-theatre.jpg", category: "Theatre" },
];

export const Portfolio = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": portfolioItems.map(item => ({
      "@type": "CreativeWork",
      name: item.title,
      description: item.description,
      image: item.image ? `https://yourdomain.com${item.image}` : undefined,
      datePublished: item.year,
      creator: { "@type": "Person", name: "Dayahang Rai" },
    })),
  };

  return (
    <div className="bg-gradient-to-b from-[#fff5f2] to-white text-gray-900">
      <SEO
        title="Dayahang Rai — Portfolio, Films & Theatre"
        description="Explore Dayahang Rai's complete portfolio of award-winning films, theatre performances, and acclaimed works. Discover iconic roles in Loot, White Sun, Kabaddi series and more."
        path="/portfolio"
        image="/images/dayahang-rai-hero.jpg"
        structuredData={structuredData}
      />

      <Header activePage="Portfolio" />

      <section className="bg-white py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7B1E2C] mb-3 sm:mb-4">Dayahang Rai Portfolio</h1>
            <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
              Explore the complete works of Dayahang Rai — award-winning actor, director, and playwright known for transformative performances in Nepali cinema and theatre.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/images/dayahang-rai-hero.jpg" alt="Dayahang Rai" className="rounded-xl shadow-lg w-full max-w-sm object-cover" />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#7B1E2C] text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden bg-gray-200 h-64 sm:h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#7B1E2C] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#7B1E2C] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold mb-2 sm:mb-3">{item.role}</p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
