// React import not required with the new JSX transform
import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

// Featured showreel and performance clips
const featuredVideos = [
  {
    title: "Dayahang Rai – Acting Showreel",
    type: "Showreel",
    year: "2024",
    description: "A compilation of Dayahang Rai's most memorable performances across film and theatre, showcasing versatility and range as an actor.",
    thumbnail: "/images/showreel-thumb.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example",
  },
  {
    title: "Kabaddi Series – Behind the Scenes",
    type: "Behind the Scenes",
    year: "2015-2023",
    description: "Go behind the scenes of the iconic Kabaddi franchise, the massive hit that established Dayahang Rai as a leading actor in Nepali cinema.",
    thumbnail: "/images/kabaddi-bts.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example",
  },
  {
    title: "Mandala Theatre – Behind the Scenes",
    type: "Theatre",
    year: "2024-2025",
    description: "Exclusive look at the creative process behind Mandala Theatre productions co-founded and directed by Dayahang Rai.",
    thumbnail: "/images/mandala-rehearsal.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example",
  },
];

// Theatre and film stills

// Featured Iconic Films
const featuredFilms = [
  {
    title: "Loot (2012)",
    role: "Gofle",
    description: "The turning point in Dayahang Rai's career. His iconic character Gofle earned critical acclaim and a Popular Award. He also co-wrote the dialogues for this massive hit that established him as a significant actor.",
    image: "/images/loot.jpg",
    year: "2012",
  },
  {
    title: "Kabaddi (2013)",
    role: "Lead",
    description: "Dayahang Rai gained recognition with Kabaddi (2013), the first film in the beloved Kabaddi franchise in Nepali cinema. His powerful performance established him as a leading contemporary actor.",
    image: "/images/kabaddi.jpg",
    year: "2013",
  },
  {
    title: "White Sun - Seto Surya (2016)",
    role: "Lead",
    description: "Critically acclaimed drama about Nepal's Civil War. White Sun was selected as Nepal's submission to the 2018 Oscars for Best Foreign Language Film, showcasing Dayahang's versatility.",
    image: "/images/white-sun.jpg",
    year: "2016",
  },
  {
    title: "Kabaddi Kabaddi (2015)",
    role: "Lead",
    description: "Sequel to the popular Kabaddi film. Dayahang won his third National Award for Best Actor for this role, solidifying his position as a leading actor in Nepali cinema.",
    image: "/images/kabaddi-kabaddi.jpg",
    year: "2015",
  },
  {
    title: "Kabaddi Kabaddi Kabaddi (2019)",
    role: "Lead",
    description: "The third installment in the successful Kabaddi franchise, showcasing Dayahang's enduring popularity and impact on the Nepali film industry through his compelling performances.",
    image: "/images/kabaddi3.jpg",
    year: "2019",
  },
];

// Press and interview clips
const pressMedia = [
  {
    title: "Interview: From Theatre to Nepali Cinema",
    type: "Interview",
    outlet: "The Kathmandu Post",
    description: "Dayahang Rai discusses his transition from theatre to becoming one of Nepal's most acclaimed actors.",
    date: "2023",
  },
  {
    title: "White Sun: An Oscar Submission",
    type: "Feature",
    outlet: "Republica",
    description: "How Dayahang Rai's powerful performance in White Sun led to Nepal's 2018 Oscar submission.",
    date: "2022",
  },
  {
    title: "Mandala Theatre: Co-founder's Vision",
    type: "Interview",
    outlet: "The Himalayan Times",
    description: "Dayahang Rai discusses his work as co-founder of Mandala Theatre and vision for contemporary Nepali theatre.",
    date: "2024",
  },
];

export const Media = (): JSX.Element => {
  const [selectedCategory] = useState<string>("All");
  

  return (
    <div className="bg-gradient-to-b from-[#F3EFE8] to-white w-full relative">
      <SEO
        title="Media Gallery — Dayahang Rai"
        description="Explore photos, videos, and press coverage of Dayahang Rai's work across film, television, and theatre. From iconic film moments to behind-the-scenes theatre productions."
        path="/media"
      />

      <Header activePage="Media" />

      {/* Hero Section */}
      <section className="relative w-full py-10 sm:py-12 md:py-16 bg-gradient-to-br from-[#F3EFE8] to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <h1 className="[font-family:'DM_Serif_Display',Helvetica] font-bold text-[#2B2B2B] text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight mb-3 sm:mb-4">
            Media Gallery
          </h1>
          <p className="[font-family:'Manrope',Helvetica] font-normal text-[#4A4A4A] text-lg md:text-xl tracking-[0] leading-7 max-w-3xl">
            A visual journey through Dayahang Rai's career — from iconic film moments to powerful theatre productions, behind-the-scenes glimpses, and press features.
          </p>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="relative w-full py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="[font-family:'DM_Serif_Display',Helvetica] font-semibold text-[#2B2B2B] text-2xl sm:text-3xl md:text-4xl">
              Featured Videos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video, index) => (
              <div
                key={index}
                className="group block border border-solid border-[#e0d7c7] rounded-xl overflow-hidden hover:shadow-2xl hover:border-[#C9A86A]/40 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-700 relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e: any) => {
                      e.currentTarget.src = "/images/video-placeholder.jpg";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#111111] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-250 shadow-2xl hover:shadow-[0_0_30px_#BFA372] hover:shadow-2xl">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7L8 5z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#111111] bg-[#111111]/5 px-2 py-1 rounded">
                      {video.type}
                    </span>
                    <span className="text-xs text-[#6F6F6F]">{video.year}</span>
                  </div>

                  <h3 className="[font-family:'DM_Serif_Display',Helvetica] font-semibold text-[#2B2B2B] text-lg mb-2 group-hover:text-[#BFA372] transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Iconic Films Section */}
      <section className="relative w-full py-10 sm:py-12 md:py-16 bg-gradient-to-br from-[#F3EFE8] to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="[font-family:'DM_Serif_Display',Helvetica] font-bold text-[#2B2B2B] text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              Iconic Film Performances
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-3xl mx-auto">
              Celebrating the blockbuster franchises that made Dayahang Rai one of Nepal's most popular actors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredFilms.map((film, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-[#e0d7c7] hover:shadow-2xl hover:border-[#C9A86A]/40 transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 aspect-[3/4] md:aspect-auto bg-slate-200 overflow-hidden">
                    <img
                      src={film.image}
                      alt={film.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e: any) => {
                        e.currentTarget.src = "/images/placeholder.jpg";
                      }}
                    />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-[#C9A86A] bg-[#C9A86A]/15 px-3 py-1 rounded-full">
                          {film.year}
                        </span>
                          <span className="text-sm text-[#6F6F6F] italic">Role: {film.role}</span>
                      </div>
                      
                      <h3 className="[font-family:'DM_Serif_Display',Helvetica] font-bold text-[#2B2B2B] text-xl md:text-2xl mb-3 group-hover:text-[#BFA372] transition-colors">
                        {film.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
                        {film.description}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-[#BFA372]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                        </svg>
                        <span className="text-sm font-medium">Blockbuster Hit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Interviews Section */}
      <section className="relative w-full py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="[font-family:'DM_Serif_Display',Helvetica] font-semibold text-[#2B2B2B] text-3xl md:text-4xl mb-8">
            Press & Interviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressMedia.map((item, index) => (
              <div
                key={index}
                className="border border-[#e0d7c7] rounded-xl p-6 hover:shadow-lg hover:border-[#C9A86A]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-[#C4633E] bg-[#C4633E]/10 px-2 py-1 rounded">
                    {item.type}
                  </span>
                  <span className="text-xs text-[#6F6F6F]">{item.date}</span>
                </div>
                
                <h3 className="[font-family:'DM_Serif_Display',Helvetica] font-semibold text-[#2B2B2B] text-lg mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#4A4A4A] mb-3 leading-relaxed">
                  {item.description}
                </p>
                
                <p className="text-xs text-[#6F6F6F] italic">
                  Published by {item.outlet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full py-12 bg-gradient-to-br from-[#F3EFE8] to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h3 className="[font-family:'DM_Serif_Display',Helvetica] font-semibold text-[#2B2B2B] text-2xl md:text-3xl mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-[#4A4A4A] text-base md:text-lg mb-6 max-w-2xl mx-auto">
            For collaboration inquiries, casting opportunities, or media requests, feel free to get in touch.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#111111] hover:bg-[#1A1A1A] text-[#EDEDED] font-medium px-8 py-4 rounded-2xl transition-all duration-250 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};
