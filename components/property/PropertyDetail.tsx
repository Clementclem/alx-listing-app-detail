import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-1 text-gray-600">
          <span>{property.rating} ★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4">
        {property.images.map((src, index) => (
          <img key={index} src={src} alt={`Property ${index}`} className="rounded-lg w-full object-cover" />
        ))}
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-md">{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;

