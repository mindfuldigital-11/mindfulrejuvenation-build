import React, { useEffect, useRef } from "react";

interface MiniMapWidgetProps {
  title?: string;
  showTitle?: boolean;
}

const MiniMapWidget: React.FC<MiniMapWidgetProps> = ({ 
  title = "Visit our Vaduthala, Kochi center for personalized care", 
  showTitle = true 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMiniMap = () => {
      console.log("🗺️ Initializing mini map...");
      
      if (!mapRef.current) {
        console.error("❌ Map container not found");
        return;
      }

      try {
        // Use the exact same Place ID approach as the Contact page to get correct coordinates
        const map = new (window as any).google.maps.Map(mapRef.current, {
          zoom: 15,
          center: { lat: 10.0176, lng: 76.2953 } // Default center, will be updated
        });
        
        // Get exact location using Place ID (same as Contact page)
        const service = new (window as any).google.maps.places.PlacesService(map);
        service.getDetails({
          placeId: "ChIJj94C3MUNCDsRMF5K3F-Zzcc", // Same Place ID as Contact page
          fields: ["geometry"]
        }, (place: any, status: any) => {
          if (status === (window as any).google.maps.places.PlacesServiceStatus.OK && place) {
            const location = place.geometry.location;
            console.log("✅ Mini map using exact coordinates:", location.lat(), location.lng());
            map.setCenter(location);
            new (window as any).google.maps.Marker({ 
              map, 
              position: location,
              title: "Mindful Rejuvenation Hospital"
            });
          } else {
            // Fallback to default marker if Places API fails
            console.log("⚠️ Places API failed, using fallback coordinates");
            new (window as any).google.maps.Marker({ 
              map, 
              position: { lat: 10.0176, lng: 76.2953 },
              title: "Mindful Rejuvenation Hospital - General Area"
            });
          }
        });
        
        console.log("✅ Mini map initialized successfully");
      } catch (error) {
        console.error("❌ Error initializing mini map:", error);
      }
    };

    // Check if Google Maps is already loaded
    if ((window as any).google?.maps) {
      console.log("🗺️ Google Maps already loaded, initializing...");
      initMiniMap();
      return;
    }

    // Load Google Maps script if not already loaded
    console.log("📡 Loading Google Maps script...");
    const existingScript = document.getElementById("google-maps-mini-script");
    
    if (existingScript) {
      console.log("📡 Script already exists, waiting for load...");
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-mini-script";
    script.async = true;
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFBOiPVAMM5ug-La9JXvTosFwuIPFywuo&libraries=places";
    
    script.onload = () => {
      console.log("✅ Google Maps script loaded");
      // Wait a bit for the component to fully mount
      setTimeout(initMiniMap, 100);
    };
    
    script.onerror = () => {
      console.error("❌ Failed to load Google Maps script");
    };
    
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-8 px-4 bg-sand-50">
      <div className="container mx-auto max-w-4xl">
        {showTitle && (
          <h3 className="text-xl font-semibold text-forest-700 mb-4 font-montserrat text-center">
            {title}
          </h3>
        )}
        <div
          ref={mapRef}
          className="h-[250px] w-full rounded-xl overflow-hidden shadow-md mb-4"
          aria-label="Mini map showing Mindful Rejuvenation Hospital location"
        />
        <div className="text-center space-y-3">
          <div className="space-x-3">
            <a
              href="tel:+91-7306150312"
              className="inline-block bg-forest-600 text-white px-4 py-2 rounded-lg hover:bg-forest-700 transition-colors text-sm font-medium"
            >
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Mindful+Rejuvenation+Hospital,+Kurishupally+Junction,+Chittoor+Rd,+Vaduthala,+Kochi,+Kerala+682023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors text-sm font-medium"
            >
              Get Directions
            </a>
          </div>
          <div>
            <a
              href="https://share.google/apNnYpZaEO2K1EsMf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all text-sm font-medium shadow-md"
            >
              ⭐ Review us on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniMapWidget;