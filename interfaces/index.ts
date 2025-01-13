export interface PropertyProps {
  name: string;
  rating: number;
  address: { city: string; country: string };
  description: string;
  category: string[];
  price: number;
  images: string[];
  reviews: { name: string; avatar: string; rating: number; comment: string }[];
}

