import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const categories = ["All", "Film", "Direction", "Theatre"];

const portfolioItems = [
  // Films
  { year: "2013", title: "Saanghuro", role: "Nare", description: "Critically acclaimed drama where Dayahang delivered a memorable supporting performance.", image: "/images/saanghuro.jpg", category: "Film" },
  { year: "2013", title: "Kabaddi", role: "Lead", description: "The first film in the massively successful Kabaddi franchise, establishing Dayahang as a leading contemporary actor in Nepal.", image: "/images/kabaddi.jpg", category: "Film" },
  { year: "2014", title: "Talakjung vs Tulke", role: "Lead", description: \"Award-winning film showcasing Dayahang's versatility during backdrop of Civil War.\", image: "/images/talakjung.jpg", category: "Film" },
  { year: "2014", title: "Shaabhala", role: "Ram (short film)", description: "A 2014 short film where Buddhi Tamang’s performance as Ram stands out for its subtle comedic flair and emotional depth.", image: "/images/shaabhala.jpg", category: "Film" },
  { year: "2015", title: "Woda Number 6", role: "Budhhi", description: "A political satire featuring Buddhi Tamang as Budhhi, showcasing his unique blend of humor and social commentary. This role remains one of the most searched in Nepali cinema.", image: "/images/woda-number6.jpg", category: "Film" },
  { year: "2015", title: "Kabaddi Kabaddi", role: "Chhantyal", description: "Sequel to the popular Kabaddi film, Buddhi Tamang reprises his role as Chhantyal, strengthening his reputation as a leading comedic actor in Nepal.", image: "/images/kabaddi-kabaddi.jpg", category: "Film" },
  { year: "2016", title: "Chhakka Panja", role: "Budhhi", description: "Nepal's biggest comedy franchise. Buddhi Tamang’s portrayal of Budhhi contributed to its massive popularity and high online search interest.", image: "/images/chhakka-panja.jpg", category: "Film" },
  { year: "2016", title: "Purano Dunga", role: "Bideshi", description: "Buddhi Tamang adds depth to this 2016 Nepali drama as Bideshi, reflecting rural cultural nuances and audience engagement.", image: "/images/purano-dunga.jpg", category: "Film" },
  { year: "2016", title: "Bijuli Machine", role: "Ram Dai", description: "A unique story where Buddhi Tamang plays Ram Dai. His performance helped elevate this experimental narrative to mainstream recognition.", image: "/images/bijuli-machine.jpg", category: "Film" },
  { year: "2017", title: "Ghampani", role: "Nima", description: "A social drama where Buddhi Tamang’s Nima adds humor and realism to address themes of love, caste, and tradition.", image: "/images/ghampani.jpg", category: "Film" },
  { year: "2017", title: "A Mero Hajur 2", role: "Shree Dharmendra", description: "A family drama featuring Buddhi Tamang’s comic performance as Shree Dharmendra, making the film highly searched by audiences.", image: "/images/a-mero-hajur2.jpg", category: "Film" },
  { year: "2018", title: "Mr. Jholay", role: "Guna Prasad", description: "Comedy entertainer with Buddhi Tamang delivering a hilarious and memorable role as Guna Prasad.", image: "/images/mr-jholay.jpg", category: "Film" },
  { year: "2018", title: "Panche Baja", role: "Sahile", description: "Rural drama featuring Buddhi Tamang as Sahile, blending comedy and authenticity to engage audiences.", image: "/images/panche-baja.jpg", category: "Film" },
  { year: "2018", title: "Kohalpur Express", role: "Sher Bahadur", description: "Buddhi Tamang portrays Sher Bahadur in this adventure-comedy, combining humor with regional storytelling.", image: "/images/kohalpur.jpg", category: "Film" },
  { year: "2018", title: "Damaruko Dandibiyo", role: "Mukhiya", description: "A cultural sports drama, where Buddhi Tamang plays Mukhiya, contributing significantly to the ensemble cast’s performance.", image: "/images/damaruko.jpg", category: "Film" },
  { year: "2018", title: "Chhakka Panja 3", role: "Budhhi", description: "Buddhi Tamang reprises Budhhi in this successful comedy, solidifying his iconic status in Nepali cinema.", image: "/images/chhakka-panja3.jpg", category: "Film" },
  { year: "2019", title: "Saili", role: "(supporting)", description: "Critically acclaimed drama featuring Buddhi Tamang in a supporting role, highlighting his range as an actor.", image: "/images/saili.jpg", category: "Film" },
  { year: "2019", title: "Bir Bikram 2", role: "Bagh Bahadur", description: "Action-packed sequel where Buddhi Tamang shines as Bagh Bahadur, delivering both comedy and memorable scenes.", image: "/images/bir-bikram2.jpg", category: "Film" },
  { year: "2020", title: "Senti Virus", role: "Dhrubaram's neighbour", description: "Buddhi Tamang adds comedic charm in this popular 2020 comedy, engaging audiences nationwide.", image: "/images/senti-virus.jpg", category: "Film" },
  { year: "2022", title: "Mantra", role: "(supporting)", description: "Nepali feature film with Buddhi Tamang delivering a compelling supporting performance.", image: "/images/mantra.jpg", category: "Film" },
  { year: "2023", title: "Chhakka Panja 4", role: "Budhhi", description: "Part of Nepal’s blockbuster comedy franchise, Buddhi Tamang’s Budhhi role remains highly searched.", image: "/images/chhakka-panja4.jpg", category: "Film" },
  { year: "2023", title: "Kabaddi 4: The Final Match", role: "Chhantyal", description: "Buddhi Tamang in the finale of the Kabaddi franchise, a performance widely appreciated and searched online.", image: "/images/kabaddi4.jpg", category: "Film" },

  // Theatre
  { year: "2007", title: "Actors' Studio", role: "Member", description: "Joined Actors' Studio in 2007, platform for theater artists in Nepal.", image: "/images/actors-studio.jpg", category: "Theatre" },
  { year: "2008", title: "Mandala Theatre", role: "Co-founder", description: "Co-founded Mandala Theatre, Nepal with Rajan Khatiwada and Dhiren Raja (Limbu).", image: "/images/mandala-theatre.jpg", category: "Theatre" },
  { year: "2014", title: "Talakjung vs Tulke", role: "Theatre", description: "Original theatrical play that later became acclaimed film.", image: "/images/talakjung-theatre.jpg", category: "Theatre" },
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
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-semibold transition ${
                  activeCategory === cat ? "bg-[#7B1E2C] text-white shadow-lg" : "bg-white text-gray-800 border border-gray-300 hover:bg-[#fde2e4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredItems.map((item, idx) => (
              <article key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img src={item.image} alt={`${item.title} — ${item.role}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <span className="bg-[#fde2e4] text-[#7B1E2C] px-2 py-1 rounded-full text-xs font-medium">{item.category}</span>
                  <h3 className="text-2xl font-semibold text-[#7B1E2C] mt-2">{item.title}</h3>
                  <p className="text-gray-700 font-medium mt-1">{item.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  <span className="text-gray-400 text-xs mt-1 block">{item.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
