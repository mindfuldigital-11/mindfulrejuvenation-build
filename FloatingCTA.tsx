import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, getBestWhatsAppLink } from "@/lib/whatsapp";

const FloatingCTA = () => {

  const WhatsAppIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#fff"
      aria-hidden="true"
      className="!h-6 !w-6 sm:!h-7 sm:!w-7"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
    </svg>
  );

  return (
    <div className="fixed z-50 flex gap-2 sm:flex-col sm:gap-3 sm:bottom-6 sm:right-6 floating-cta" style={{ bottom: "calc(env(safe-area-inset-bottom) + 12px)", right: "calc(env(safe-area-inset-right) + 12px)" }}>
      <Button 
        size="icon"
        asChild
        className="cta-btn bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full sm:w-auto sm:h-auto sm:px-6 sm:py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Emergency Call - Mental Health Support Kerala"
        aria-label="Call emergency helpline"
      >
        <a href="tel:+917306150312" className="flex items-center justify-center leading-none">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            aria-hidden="true"
            className="!h-6 !w-6 sm:!h-7 sm:!w-7"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 3.18 2 2 0 0 1 5 1h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.54 2.63a2 2 0 0 1-.45 2.11L9 8a16 16 0 0 0 6 6l.54-1.09a2 2 0 0 1 2.11-.45c.85.24 1.73.42 2.63.54A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="ml-2 hidden sm:inline font-semibold">Call Now</span>
        </a>
      </Button>
      <Button 
        size="icon"
        asChild
        className="cta-btn bg-[#25D366] hover:bg-[#20BD5A] text-white w-14 h-14 rounded-full sm:w-auto sm:h-auto sm:px-6 sm:py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="WhatsApp Consultation - Mental Health Support Kerala"
        aria-label="Contact via WhatsApp"
      >
        <a
          href={buildWhatsAppUrl("I would like to enquire about your mental health services")}
          onClick={(e) => {
            e.preventDefault();
            const url = getBestWhatsAppLink("I would like to enquire about your mental health services");
            console.info("[WhatsApp] navigating to", url);
            window.location.href = url;
          }}
          className="flex items-center justify-center leading-none"
        >
          <WhatsAppIcon />
          <span className="ml-2 hidden sm:inline font-semibold">WhatsApp</span>
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
