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
    <><header className={`w-full sticky top-0 z-40 transition-all duration-500 ease-in-out ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-[#e0d7c7]'
        : 'bg-white/85 backdrop-blur-sm shadow-sm border-b border-[#e7dece]'}`}>
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#1A1A1A] via-[#2B2B2B] to-[#C9A86A] text-white rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-500 ease-in-out">
            <img className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500 ease-in-out" alt="Gem" src="/gem.svg" />
          </div>
          <div>
            <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#1A1A1A] text-xl tracking-tight leading-5 group-hover:text-[#C4633E] transition-colors">
              Dayahang Rai
            </h1>
            <p className="text-xs text-[#6F6F6F] font-medium tracking-wide">Actor • Theatre Practitioner</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`[font-family:'Open_Sans',Helvetica] text-sm tracking-[0] leading-[22px] whitespace-nowrap px-4 py-2.5 rounded-lg transition-all duration-500 ease-in-out relative overflow-hidden group ${item.label === activePage
                      ? "font-semibold text-white bg-[#C4633E] shadow-md"
                      : "font-medium text-[#1A1A1A] hover:text-[#C9A86A] hover:bg-gradient-to-r hover:from-[#f6f1e7] hover:to-white"}`}
                >
                  {item.label === activePage && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#C4633E] to-[#a55230] -z-10"></span>
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 pl-4 border-l border-[#e0d7c7]">
            {socialMediaIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className="group"
              >
                <div className="w-10 h-10 rounded-lg p-0 bg-gradient-to-br from-white to-[#f6f1e7] border border-[#e7dece] hover:border-[#C9A86A] hover:shadow-md transition-all duration-500 ease-in-out flex items-center justify-center group-hover:scale-110">
                  <img className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" alt={icon.alt} src={icon.src} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Toggle navigation"
            className="w-11 h-11 rounded-lg flex items-center justify-center border-2 border-[#e0d7c7] hover:border-[#C9A86A] hover:bg-[#f6f1e7] transition-all duration-500 ease-in-out active:scale-95"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
        <aside className={`fixed top-20 right-4 z-50 w-[340px] bg-gradient-to-b from-white to-[#f6f1e7] rounded-2xl shadow-2xl border border-[#e0d7c7] transform transition-all duration-500 ease-out ${openMobile ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`} role="dialog" aria-modal="true">
          <div className="relative">
            <button
              onClick={() => setOpenMobile(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 w-9 h-9 rounded-lg flex items-center justify-center border-2 border-[#e0d7c7] bg-white hover:border-[#C9A86A] hover:bg-[#f6f1e7] transition-all duration-500 ease-in-out active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="px-6 pt-6 pb-4 border-b border-[#e0d7c7]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A1A1A] via-[#2B2B2B] to-[#C9A86A] text-white rounded-xl flex items-center justify-center shadow-lg">
                  <img className="w-6 h-6" alt="Gem" src="/gem.svg" />
                </div>
                <div>
                  <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#1A1A1A] text-lg">Dayahang Rai</h2>
                  <p className="text-xs text-[#6F6F6F] font-medium">Actor • Theatre</p>
                </div>
              </div>
            </div>

            <div className="px-4 py-4">
              <nav>
                <ul className="flex flex-col gap-1">
                  {navigationItems.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        onClick={() => setOpenMobile(false)}
                        className={`block px-4 py-3 rounded-lg text-base [font-family:'Open_Sans',Helvetica] font-medium transition-all duration-500 ease-in-out ${item.label === activePage
                          ? 'text-white bg-gradient-to-r from-[#C4633E] to-[#a55230] shadow-md'
                          : 'text-[#1A1A1A] hover:text-[#C9A86A] hover:bg-white hover:shadow-sm'}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="px-6 py-4 border-t border-[#e0d7c7] bg-white/60 rounded-b-2xl">
              <p className="text-xs text-[#6F6F6F] font-medium mb-3">Connect with Buddhi</p>
              <div className="flex items-center gap-3">
                {socialMediaIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.url}
                    aria-label={icon.alt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white border border-[#e0d7c7] hover:border-[#C9A86A] hover:shadow-md flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-110"
                  >
                    <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
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
