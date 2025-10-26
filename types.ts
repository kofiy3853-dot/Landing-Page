
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
}
