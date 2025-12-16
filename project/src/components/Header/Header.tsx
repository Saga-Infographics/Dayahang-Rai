import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  activePage: string;
}

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Biography", path: "/biography" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const socialMediaIcons = [
  { alt: "Facebook", src: "/facebook.svg", url: "#" },
  { alt: "Instagram", src: "/instagram.svg", url: "#" },
  { alt: "YouTube", src: "/youtube-1.svg", url: "#" },
];

export const Header = ({ activePage }: HeaderProps): JSX.Element => {
  const [openMobile, setOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMobile]);

  return (
    <><header className={`w-full sticky top-0 z-40 transition-all duration-300 ${scrolled
      ? 'bg-white/20 backdrop-blur-xl border-b border-white/30'
      : 'bg-white/10 backdrop-blur-xl border-b border-white/20'}`}>
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1A1A1A] via-[#2B2B2B] to-[#8B2E34] text-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-500 ease-in-out">
            <img className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-500 ease-in-out" alt="Dayahang Rai brand logo - gem icon" src="/gem.svg" />
          </div>
          <div className="hidden sm:block">
            <h1 className="[font-family:'DM_Serif_Display',Helvetica] font-bold text-[#1A1A1A] text-lg sm:text-xl tracking-tight leading-5">
              Dayahang Rai
            </h1>
            <p className="text-xs text-[#6F6F6F] [font-family:'Manrope',Helvetica] font-medium tracking-wide">Actor • Theatre Practitioner</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end">
          <ul className="flex items-center gap-1 lg:gap-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`[font-family:'Manrope',Helvetica] text-xs lg:text-sm tracking-[0.12em] leading-[22px] whitespace-nowrap px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl transition-all duration-250 ease-in-out relative overflow-hidden group ${item.label === activePage
                      ? "font-semibold text-[#111111] bg-white/60"
                      : "font-medium text-[#1A1A1A] hover:text-[#111111]"}`}
                >
                  <span className="relative z-10 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#8B2E34] after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 lg:gap-2 pl-3 lg:pl-4 border-l border-[#e0d7c7]">
            {socialMediaIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className="group hidden sm:block"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-[#111111]/60 bg-white/60 flex items-center justify-center hover:border-[#8B2E34] transition-all duration-250 ease-in-out">
                  <img className="w-4 h-4 lg:w-5 lg:h-5" src={icon.src} alt={icon.alt} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={openMobile}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border-2 border-white/40 bg-white/40 hover:border-[#8B2E34] hover:bg-white/50 transition-all duration-250 ease-in-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2E34] focus-visible:ring-offset-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={openMobile ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
            </svg>
          </button>
      </div>
    </nav><div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-gradient-to-b from-black/35 to-black/55 backdrop-blur-sm transition-all duration-500 ease-in-out ${openMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setOpenMobile(false)}
          aria-hidden="true" />

        {/* Enhanced mobile menu */}
        <aside className={`fixed top-16 sm:top-20 right-3 sm:right-4 z-50 w-[90vw] max-w-[340px] bg-white rounded-2xl shadow-2xl transform transition-all duration-250 ease-out ${openMobile ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="relative">
            <button
              onClick={() => setOpenMobile(false)}
              aria-label="Close navigation menu"
              className="absolute right-3 sm:right-4 top-3 sm:top-4 w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border-2 border-white/40 bg-white/60 hover:border-[#8B2E34] transition-all duration-250 ease-in-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2E34] focus-visible:ring-offset-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-[#e0d7c7]">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1A1A1A] via-[#2B2B2B] to-[#8B2E34] text-white rounded-xl flex items-center justify-center shadow-sm">
                  <img className="w-5 h-5 sm:w-6 sm:h-6" alt="Dayahang Rai brand logo" src="/gem.svg" />
                </div>
                <div>
                  <h2 className="[font-family:'DM_Serif_Display',Helvetica] font-bold text-[#1A1A1A] text-base sm:text-lg tracking-[0.12em]">Dayahang Rai</h2>
                  <p className="text-xs text-[#6F6F6F] font-medium">Actor • Theatre</p>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-6 py-3 sm:py-4">
              <nav>
                <ul className="flex flex-col gap-0.5 sm:gap-1">
                  {navigationItems.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        onClick={() => setOpenMobile(false)}
                        className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base [font-family:'Manrope',Helvetica] font-medium tracking-[0.12em] transition-all duration-250 ease-in-out ${item.label === activePage
                          ? 'text-[#EDEDED] bg-[#111111] font-semibold'
                          : 'text-[#1A1A1A] hover:text-[#EDEDED] hover:bg-[#111111]/80'}`}
                      >
                        <span className="relative">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-[#e0d7c7] bg-[#F3EFE8] rounded-b-2xl">
              <p className="text-xs text-[#6F6F6F] font-medium mb-2 sm:mb-3 tracking-[0.12em]">Connect with Dayahang</p>
              <div className="flex items-center gap-2 sm:gap-3">
                {socialMediaIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.url}
                    aria-label={icon.alt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border-2 border-[#111111]/40 bg-white hover:border-[#BFA372] hover:bg-[#111111] transition-all duration-250">
                      <img className="w-4 h-4 sm:w-5 sm:h-5 group-hover:invert" src={icon.src} alt={icon.alt} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </header>
    </>
  );
};
