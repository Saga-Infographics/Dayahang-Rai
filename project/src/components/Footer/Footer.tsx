import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ColoredIcon from "../ui/ColoredIcon";

const socialIcons = [
  { alt: "Facebook", url: "#", src: "/facebook.svg" },
  { alt: "Instagram", url: "#", src: "/instagram.svg" },
  { alt: "YouTube", url: "#", src: "/youtube-1.svg" },
];

const sectionLinks = [
  { label: "Home", path: "/" },
  { label: "Biography", path: "/biography" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#111111] text-[#F3EFE8] pt-12 sm:pt-14 pb-8 sm:pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#BFA372] rounded-md flex items-center justify-center">
                <img className="w-5 h-5" alt="Dayahang Rai brand logo - gem icon" src="/gem.svg" />
              </div>
              <h3 className="[font-family:'DM_Serif_Display',Helvetica] font-bold text-[#F3EFE8] text-xl tracking-[0.08em]">
                Dayahang Rai
              </h3>
            </div>
            <p className="text-sm text-[#cfc7bc] max-w-md leading-relaxed">
              Theatre director, playwright and performer. Creating culturally rooted productions that engage communities and spark social conversations.
            </p>

            <div className="flex items-center gap-4 mt-3">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.url ?? '#'}
                  aria-label={icon.alt}
                  className="group"
                  target={icon.url && icon.url !== '#' ? '_blank' : undefined}
                  rel={icon.url && icon.url !== '#' ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-9 h-9 rounded-full border border-white/25 bg-white/5 flex items-center justify-center transition-all duration-200 group-hover:border-[#BFA372] group-hover:bg-white/8 group-hover:scale-[1.02]">
                    <ColoredIcon src={icon.src} alt={icon.alt} size={20} colorClass="bg-[#BFA372]" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="[font-family:'Manrope',Helvetica] font-semibold text-[#F3EFE8] mb-4 tracking-[0.08em]">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-[#cfc7bc]">
              {sectionLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="transition-colors text-[#cfc7bc] hover:text-[#F3EFE8] relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-full after:scale-x-0 after:bg-[#BFA372] after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="[font-family:'Manrope',Helvetica] font-semibold text-[#F3EFE8] mb-4 tracking-[0.08em]">Stay in touch</h4>
            <p className="text-sm text-[#cfc7bc] mb-4 leading-relaxed">Subscribe for occasional news about productions and events.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input aria-label="Email address for newsletter subscription" type="email" placeholder="Your email" className="flex-1 px-3.5 py-2.5 rounded-md text-[#111111] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA372] focus-visible:ring-offset-2" />
              <Button type="submit" aria-label="Subscribe to Dayahang Rai newsletter for updates on productions and events" className="w-full sm:w-auto px-6 py-2.5 bg-white text-[#111111] rounded-2xl transition-all duration-200 ease-out font-semibold hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA372] focus-visible:ring-offset-2">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8 border-white/15" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#F3EFE8] text-center sm:text-left">
          <div className="text-[#E8E4DC]">© {new Date().getFullYear()} Dayahang Rai. All rights reserved.</div>
          <div className="text-[#cfc7bc] transition-colors hover:text-[#F3EFE8]">Developed by Saga Infographics</div>
        </div>
      </div>
    </footer>
  );
};
