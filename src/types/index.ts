export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  specs: string;
}

export interface Service {
  id: string;
  name: string;
  imageUrl: string;
  contact: string;
  link: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  published: boolean;
  type: 'about' | 'blog';
}

export interface SiteData {
  products: Product[];
  services: Service[];
  articles: Article[];
}