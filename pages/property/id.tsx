import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Property Details */}
      <div className="lg:col-span-2">
        <PropertyDetail property={property} />
      </div>

      {/* Booking Section */}
      <div className="lg:col-span-1">
        <BookingSection price={property.price} />
      </div>

      {/* Reviews */}
      <div className="lg:col-span-3">
        <ReviewSection reviews={property.reviews} />
      </div>
    </div>
  );
}

