export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  image: string;
  priceRange: string;
  waitTime: string;
  description: string;
  menu: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface Review {
  id: string;
  restaurantId: string;
  username: string;
  rating: number;
  comment: string;
  date: string;
}
