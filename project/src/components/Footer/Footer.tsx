import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

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
    <footer className="w-full bg-[#1A1A1A] text-[#F3EFE8] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C9A86A] rounded-md flex items-center justify-center shadow-md">
                <img className="w-5 h-5" alt="Gem" src="/gem.svg" />
              </div>
              <h3 className="[font-family:'DM_Serif_Display',Helvetica] font-bold text-[#F3EFE8] text-xl">
                Dayahang Rai
              </h3>
            </div>
            <p className="text-sm text-[#cfc7bc] max-w-md">
              Theatre director, playwright and performer. Creating culturally rooted productions that engage communities and spark social conversations.
            </p>

            <div className="flex items-center gap-3 mt-3">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.url ?? '#'}
                  aria-label={icon.alt}
                  className="group"
                  target={icon.url && icon.url !== '#' ? '_blank' : undefined}
                  rel={icon.url && icon.url !== '#' ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-9 h-9 rounded-full border-2 border-white/40 bg-white/5 flex items-center justify-center group-hover:border-[#BFA372] hover:shadow-lg transition-all duration-250">
                    <img className="w-5 h-5 invert group-hover:brightness-75" src={icon.src} alt={icon.alt} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="[font-family:'Manrope',Helvetica] font-semibold text-[#F3EFE8] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#cfc7bc]">
              {sectionLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-[#C9A86A] transition underline-offset-2 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="[font-family:'Manrope',Helvetica] font-semibold text-[#F3EFE8] mb-4">Stay in touch</h4>
            <p className="text-sm text-[#cfc7bc] mb-3">Subscribe for occasional news about productions and events.</p>
            <form className="flex gap-2">
              <input aria-label="Email" type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-md text-[#1A1A1A]" />
              <Button type="submit" className="px-6 py-2.5 bg-white text-[#111111] hover:border-b-2 hover:border-[#BFA372] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-250 ease-out font-semibold">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8 border-white/15" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#F3EFE8]">
          <div>© {new Date().getFullYear()} Dayahang Rai. All rights reserved.</div>
          <div className="hover:text-[#C9A86A] transition-colors">Developed by Saga Infographics</div>
        </div>
      </div>
    </footer>
  );
};
