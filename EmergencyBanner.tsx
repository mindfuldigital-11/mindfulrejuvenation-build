
import { AlertTriangle, Phone } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-medium">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Emergency Mental Health Support - 24/7 Hotline:</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a href="tel:+917306150312" className="flex items-center gap-1 underline hover:text-red-200 transition-colors">
              <Phone className="h-3 w-3" />
              +91-7306150312
            </a>
            <span className="hidden sm:inline">/</span>
            <a href="tel:+919037899299" className="flex items-center gap-1 underline hover:text-red-200 transition-colors">
              <Phone className="h-3 w-3" />
              +91-9037899299
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
