// React import not required with the new JSX transform
import { Button } from "../../components/ui/button";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const socialMediaButtons = [
  {
    icon: "/facebook.svg",
    alt: "Facebook",
    url: "https://www.facebook.com/BuddhiTamangOfficial",
  },
  {
    icon: "/instagram.svg",
    alt: "Instagram",
    url: "https://www.instagram.com/buddhitamang.official/",
  },
  {
    icon: "/youtube-1.svg",
    alt: "YouTube",
    url: "https://www.youtube.com/@BuddhiTamang",
  },
  {
    icon: "/tiktok.svg",
    alt: "TikTok",
    url: "https://www.tiktok.com/@buddhitamang",
  },
];

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-[#F3EFE8] to-white w-full relative min-h-screen">
      <SEO
        title="Contact Dayahang Rai — Booking, Social & Fan Connect"
        description="Get in touch with Dayahang Rai for film, theatre, and media bookings. Follow him on social media and discover his official contact information."
        path="/contact"
      />
      <Header activePage="Contact" />

      <section className="w-full py-10 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="[font-family:'DM_Serif_Display',Helvetica] font-bold text-[#2B2B2B] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[70px] mb-3 sm:mb-4">
              Connect with Dayahang Rai
            </h1>
            <p className="[font-family:'Manrope',Helvetica] text-lg md:text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-8">
              Official contact page for Dayahang Rai — award-winning Nepali actor, theatre performer, and cultural icon. Reach out for professional bookings, fan messages, and media collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Left: Booking Form / Contact Info */}
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-2xl transition-shadow duration-250 order-2 lg:order-1">
              <ContactInfoSection />
            </div>

            {/* Right: Contact Details */}
            <aside className="bg-[#F3EFE8] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-250 flex flex-col gap-6 sm:gap-8 lg:gap-10 order-1 lg:order-2">
              <div>
                <h2 className="[font-family:'DM_Serif_Display',Helvetica] font-semibold text-[#2B2B2B] text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6">
                  Direct Contact
                </h2>
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <img className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 mt-0.5" src="/mail.svg" alt="Email icon" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-[#4A4A4A] font-semibold">Email</div>
                        <div className="text-sm sm:text-base lg:text-lg text-[#2B2B2B] font-bold break-all">booking@buddhitamang.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <img className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 mt-0.5" src="/phone.svg" alt="Phone icon" />
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-[#4A4A4A] font-semibold">Phone</div>
                        <div className="text-sm sm:text-base lg:text-lg text-[#2B2B2B] font-bold break-all">+977 986-0765125</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#2B2B2B] text-3xl mb-4">
                  Follow Dayahang Rai
                </h2>
                <p className="text-[#4A4A4A] text-sm mb-4">
                  Stay updated with Dayahang Rai's latest projects, behind-the-scenes videos, and exclusive content on social media.
                </p>
                <div className="flex gap-4">
                  {socialMediaButtons.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.alt}
                      className="group"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-14 h-14 rounded-2xl border-2 border-[#111111] bg-white text-[#111111] hover:border-[#BFA372] transition-all duration-250 flex items-center justify-center shadow-lg hover:shadow-2xl hover:-translate-y-1"
                      >
                        <img src={social.icon} alt={social.alt} className="w-6 h-6 gold-hover" />
                      </Button>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#2B2B2B] text-3xl mb-4">
                  Location
                </h2>
                <div className="flex items-start gap-4">
                  <img className="w-7 h-7 mt-1" src="/home-2-1.svg" alt="Location icon" />
                  <div className="text-[#4A4A4A] text-sm">
                  <div className="mb-2">
                    <span className="font-semibold text-[#2B2B2B]">Permanent Address:</span> Khawa, Bhojpur District, Nepal
                  </div>
                  <div>
                    <span className="font-semibold text-[#2B2B2B]">Current Residence:</span> Kathmandu, Nepal
                  </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button asChild>
                    <a href="/media" aria-label="View Dayahang Rai's media gallery - photos, videos and behind-the-scenes content" className="px-8 py-3 bg-[#111111] text-[#EDEDED] font-semibold rounded-2xl hover:bg-[#0E0E0E] transition-all duration-250 shadow-lg hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA372] focus-visible:ring-offset-2">
                    Explore Media Gallery
                  </a>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
