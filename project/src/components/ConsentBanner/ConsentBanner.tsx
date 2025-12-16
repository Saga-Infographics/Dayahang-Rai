import { useEffect, useState } from 'react';
import gtag from '../../lib/gtag';

export const ConsentBanner = (): JSX.Element | null => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('ga_consent');
      if (consent !== 'granted') setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem('ga_consent', 'granted');
    } catch (e) {
      // ignore
    }

    // update Google consent mode and send a page_view
    try {
      gtag('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted' });
      gtag('event', 'page_view', {
        page_path: window.location.pathname + window.location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    } catch (e) {
      // ignore
    }

    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem('ga_consent', 'denied');
    } catch (e) {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 z-50">
      <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm border border-slate-200 rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-3" role="dialog" aria-labelledby="consent-title" aria-modal="true">
        <div id="consent-title" className="flex-1 text-sm text-slate-800">
          This site uses Google Analytics to improve the site. By accepting you allow analytics and advertising cookies. You can change this later.
        </div>
        <div className="flex gap-2">
          <button
            onClick={decline}
            aria-label="Decline analytics and advertising cookies"
            className="px-3 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA372] focus-visible:ring-offset-2 transition-all"
          >
            Decline
          </button>
          <button
            onClick={accept}
            aria-label="Accept analytics and advertising cookies"
            className="px-3 py-2 rounded-md bg-[#18386e] text-white text-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA372] focus-visible:ring-offset-2 transition-all\"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
