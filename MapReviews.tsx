import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Types for Google Places reviews and place details
interface GReview {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url?: string;
  relative_time_description?: string;
}

interface PlaceInfo {
  name: string;
  formatted_address: string;
  rating?: number;
  user_ratings_total?: number;
  international_phone_number?: string;
  url?: string;
  reviews?: GReview[];
}

const PLACE_ID = "ChIJj94C3MUNCDsRMF5K3F-Zzcc"; // Mindful Rejuvenation Hospital
const PHONE_NUMBER = "+91-7306150312"; // Updated per request
const GOOGLE_MAPS_API_KEY = "AIzaSyBFBOiPVAMM5ug-La9JXvTosFwuIPFywuo"; // Public key must be referrer-restricted
const GMB_CID = "https://share.google/apNnYpZaEO2K1EsMf"; // GBP CID link

const MapReviews: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [place, setPlace] = useState<PlaceInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadScript = () => {
    return new Promise<void>((resolve, reject) => {
      if ((window as any).google?.maps?.places) {
        resolve();
        return;
      }
      const existing = document.getElementById("google-maps-script") as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () => reject(new Error("Failed to load Google Maps")));
        return;
      }
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.async = true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Google Maps"));
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    console.log("🗺️ MapReviews component mounting...");
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled) return;
        const g = (window as any).google;
        if (!mapContainerRef.current) return;

        // Initialize map with a default center, will be updated when place loads
        mapRef.current = new g.maps.Map(mapContainerRef.current, {
          center: { lat: 10.0176, lng: 76.2953 }, // Default Kochi center, will be updated
          zoom: 15,
        });

        // Places details
        const service = new g.maps.places.PlacesService(mapRef.current);
        service.getDetails(
          {
            placeId: PLACE_ID,
            fields: [
              "name",
              "geometry",
              "rating",
              "user_ratings_total",
              "reviews",
              "formatted_address",
              "international_phone_number",
              "url",
            ],
          },
          (pl, status) => {
            if (status === g.maps.places.PlacesServiceStatus.OK && pl) {
              // Use the actual coordinates from Google Places API
              const location = pl.geometry!.location!;
              console.log("✅ Correct coordinates:", location.lat(), location.lng());
              
              mapRef.current?.setCenter(location);
              new g.maps.Marker({ map: mapRef.current!, position: location });
              setPlace({
                name: pl.name!,
                formatted_address: pl.formatted_address!,
                rating: pl.rating,
                user_ratings_total: pl.user_ratings_total,
                international_phone_number: pl.international_phone_number,
                url: pl.url,
                reviews: (pl.reviews as unknown as GReview[]) || [],
              });
            } else {
              setError("Unable to load place details.");
            }
          }
        );
      })
      .catch(() => setError("Map failed to load. Please try again later."));

    return () => {
      cancelled = true;
    };
  }, []);

  const phoneHref = `tel:${place?.international_phone_number || PHONE_NUMBER}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Mindful Rejuvenation Hospital",
    url: "https://www.mindfulrejuvenation.in/",
    telephone: PHONE_NUMBER,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kurishupally Junction, Chittoor Rd, Vaduthala",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682023",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 10.0176, longitude: 76.2953 }, // Updated to correct area
    openingHours: ["Mo-Su24hrs"],
    sameAs: [GMB_CID],
  } as const;

  return (
    <section className="py-16 px-4 bg-sand-50">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-forest-700 font-montserrat">Find Mindful Rejuvenation Hospital in Vaduthala, Kochi</h2>
          <p className="text-gray-600 mt-2">Interactive map, reviews, and directions</p>
        </div>
        <div
          className="h-[400px] w-full rounded-xl overflow-hidden shadow-md"
          ref={mapContainerRef}
          aria-label="Google map showing Mindful Rejuvenation Hospital location"
        />

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">{error}</p>
            <p className="text-sm text-yellow-700 mt-2">Note: Google Maps API key needs domain authorization. Using fallback options below.</p>
          </div>
        )}

        {/* Always show basic info and buttons, even if map fails */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-forest-700 font-montserrat">
            {place?.name || "Mindful Rejuvenation Hospital"}
          </h2>
          <p className="text-gray-600 mt-2">
            {place?.formatted_address || "Kurishupally Junction, Chittoor Rd, Vaduthala, Kochi, Kerala 682023"}
          </p>
          {place?.rating && (
            <p className="text-gray-700 mt-2">
              Rating: {place.rating} ({place.user_ratings_total} reviews)
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild className="bg-forest-600 text-white hover:bg-forest-700">
              <a href={phoneHref}>Call Now</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-forest-600 text-forest-700 hover:bg-forest-50"
            >
            <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Mindful+Rejuvenation+Hospital,+Kurishupally+Junction,+Chittoor+Rd,+Vaduthala,+Kochi,+Kerala+682023"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600"
            >
              <a href={GMB_CID} target="_blank" rel="noopener noreferrer">
                ⭐ Review us on Google
              </a>
            </Button>
          </div>
        </div>

        {place?.reviews && place.reviews.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-forest-700 mb-4">What people say</h3>
            <div className="space-y-4">
              {place.reviews.slice(0, 5).map((r, idx) => (
                <article key={idx} className="border border-sand-200 rounded-md p-4">
                  <div className="flex items-center justify-between">
                    <strong className="text-forest-700 blur-md select-none" aria-label="Anonymous reviewer">{r.author_name}</strong><span className="sr-only">Anonymous</span>
                    <span className="text-sage-700">{r.rating}★</span>
                  </div>
                  <p className="text-gray-700 mt-2">{r.text}</p>
                  {r.relative_time_description && (
                    <p className="text-xs text-gray-500 mt-1">{r.relative_time_description}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* LocalBusiness Schema for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default MapReviews;
