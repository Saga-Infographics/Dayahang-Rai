import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const socialIcons = [
  { src: "/container-3.svg", alt: "Facebook", url: "#" },
  { src: "/container.svg", alt: "Instagram", url: "#" },
  // YouTube (placeholder)
  { src: "/container-2.svg", alt: "YouTube", url: "#" },
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
              <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#F3EFE8] text-xl">
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
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/16 transition shadow-sm"
                  target={icon.url && icon.url !== '#' ? '_blank' : undefined}
                  rel={icon.url && icon.url !== '#' ? 'noopener noreferrer' : undefined}
                >
                  {/* SVG icons are dark; apply filter to make them visible on dark background */}
                  <img className="w-5 h-5 filter invert brightness-150" alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#F3EFE8] mb-4">Quick Links</h4>
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
            <h4 className="font-semibold text-[#F3EFE8] mb-4">Stay in touch</h4>
            <p className="text-sm text-[#cfc7bc] mb-3">Subscribe for occasional news about productions and events.</p>
            <form className="flex gap-2">
              <input aria-label="Email" type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-md text-[#1A1A1A]" />
              <Button type="submit" className="px-4 py-2 bg-[#C4633E] hover:bg-[#b45735]">Subscribe</Button>
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
