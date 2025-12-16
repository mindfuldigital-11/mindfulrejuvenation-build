
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Car } from "lucide-react";
import CTAButtons from "@/components/shared/CTAButtons";

const LocationMap = () => {
  const facilityDetails = [
    {
      title: "Angamaly Facility",
      address: "Karukutty Angamaly, Kerala",
      phone: "+91-7306150312",
      timings: "24/7 Emergency Services Available",
      features: ["Inpatient Care", "Outpatient Services", "Emergency Psychiatry", "Telepsychiatry"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.435327786231!2d76.3806292750342!3d10.226430289890828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0801a2f4087abb%3A0x6a49af56d0f421e9!2sMindful%20Rejuvenation-%20De%20addiction%20Centre%20In%20Kochi%20Ernakulam%20Mental%20Hospital%20Psychiatric%20Ernakulam!5e0!3m2!1sen!2sin!4v1751356436608!5m2!1sen!2sin"
    },
    {
      title: "Kochi Facility",
      address: "Near Lourde Hospital, Vaduthala, Kochi, Kerala",
      phone: "+91-9037899299",
      timings: "24/7 Emergency Services Available",
      features: ["Inpatient Care", "Outpatient Services", "Dementia Care", "Emergency Mental Health", "Recovery/Rehab Facility"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.991104960799!2d76.27355727458698!3d10.017592090088687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dc5dc02de8f%3A0xc7cd995fdc4a5e30!2sMindful%20Rejuvenation%20Hospital-%20Psychiatry%2C%20Rehabilitation%20and%20Dementia%20care%20Deaddiction%20Kochi%20Psychiatry%20Hospital!5e0!3m2!1sen!2sin!4v1751356579104!5m2!1sen!2sin"
    },
    {
      title: "Kochi Out Patient Facility - Kaloor",
      address: "Kaloor, Kochi, Kerala",
      phone: "+91-9037899299, +91-8129199902",
      timings: "Mon-Sat: 9:00 AM - 6:00 PM",
      features: ["Couple Therapy", "Family Therapy", "CBT", "Counselling", "Psychotherapy"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2021033322167!2d76.29569227458674!3d10.00015809010523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d576c3a921d%3A0x20a9a1ca6b63af41!2sMindful%20Life%20%2F%20Psychiatric%20Hospital%20Ernakulam%20Family%20Counselling%20Centre%20Kochi!5e0!3m2!1sen!2sin!4v1751357673696!5m2!1sen!2sin"
    },
    {
      title: "Child Development Centre, Kochi - Kaloor Facility",
      address: "Kaloor, Kochi, Kerala",
      phone: "+91-8129199903",
      timings: "Mon-Sat: 9:00 AM - 6:00 PM",
      features: ["Autism", "ADHD", "Speech Issues", "Child Counselling", "Occupational Therapy", "Speech Therapy"],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.202021104813!2d76.29569637458667!3d10.000164890105276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8a3b9cf6ef%3A0xe3fdb0c8af6e40d2!2sMindful%20Kids%20%7C%20Centre%20For%20Child%20Development%20Ernakulam%20Speech%20Therapy%20Psychiatrist%20Kochi!5e0!3m2!1sen!2sin!4v1751356709748!5m2!1sen!2sin"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-sage-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-600 mb-4 font-montserrat">
            Our Locations & Facilities
          </h2>
          <p className="text-lg lg:text-xl text-gray-600">ഞങ്ങളുടെ സ്ഥലങ്ങളും സൗകര്യങ്ങളും</p>
        </div>

        {/* Facility Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {facilityDetails.map((facility, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="bg-gradient-to-r from-forest-600 to-sage-600 text-white">
                <CardTitle className="text-lg lg:text-2xl flex items-center gap-3">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6" />
                  <span className="break-words">{facility.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 lg:p-8">
                {/* Embedded Map - Hidden for Angamaly facility */}
                {index !== 0 && (
                  <div className="mb-6">
                    <iframe 
                      src={facility.mapEmbed}
                      width="100%" 
                      height="250" 
                      style={{border:0}} 
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg w-full"
                    ></iframe>
                  </div>
                )}

                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm lg:text-base">Address:</p>
                      <p className="text-gray-600 text-sm lg:text-base break-words">{facility.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 lg:gap-4">
                    <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm lg:text-base">Phone:</p>
                      <p className="text-gray-600 text-sm lg:text-base break-all">{facility.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 lg:gap-4">
                    <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm lg:text-base">Timings:</p>
                      <p className="text-gray-600 text-sm lg:text-base">{facility.timings}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 lg:gap-4">
                    <Car className="h-4 w-4 lg:h-5 lg:w-5 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm lg:text-base">Services Available:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {facility.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-sage-100 text-sage-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 lg:mt-8">
                  <CTAButtons 
                    variant="horizontal" 
                    size="sm" 
                    callNumber={facility.phone.split(',')[0]}
                    whatsappNumber={facility.phone.split(',')[0]}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
