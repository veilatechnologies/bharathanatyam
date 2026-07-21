export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  size: "square" | "wide" | "tall" | "large";
  colors?: string;
}

export const makeupImages: GalleryItem[] = [
  { id: 1, src: "/assets/makeup and hairstyle/mh1.jpeg", category: "Makeup & Hairstyle", size: "large" },
  { id: 2, src: "/assets/makeup and hairstyle/mh2.jpeg", category: "Makeup & Hairstyle", size: "tall" },
  { id: 3, src: "/assets/makeup and hairstyle/mh3.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 4, src: "/assets/makeup and hairstyle/mh4.jpeg", category: "Makeup & Hairstyle", size: "wide" },
  { id: 5, src: "/assets/makeup and hairstyle/mh5.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 6, src: "/assets/makeup and hairstyle/mh6.jpeg", category: "Makeup & Hairstyle", size: "tall" },
  { id: 7, src: "/assets/makeup and hairstyle/mh7.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 8, src: "/assets/makeup and hairstyle/mh8.jpeg", category: "Makeup & Hairstyle", size: "large" },
  { id: 9, src: "/assets/makeup and hairstyle/mh9.jpeg", category: "Makeup & Hairstyle", size: "wide" },
  { id: 10, src: "/assets/makeup and hairstyle/mh10.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 11, src: "/assets/makeup and hairstyle/mh11.jpeg", category: "Makeup & Hairstyle", size: "tall" },
  { id: 12, src: "/assets/makeup and hairstyle/mh12.jpeg", category: "Makeup & Hairstyle", size: "large" },
  { id: 13, src: "/assets/makeup and hairstyle/mh13.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 14, src: "/assets/makeup and hairstyle/mh14.jpeg", category: "Makeup & Hairstyle", size: "wide" },
  { id: 15, src: "/assets/makeup and hairstyle/mh15.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 16, src: "/assets/makeup and hairstyle/mh16.jpeg", category: "Makeup & Hairstyle", size: "tall" },
  { id: 17, src: "/assets/makeup and hairstyle/mh17.jpeg", category: "Makeup & Hairstyle", size: "large" },
  { id: 18, src: "/assets/makeup and hairstyle/mh18.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 19, src: "/assets/makeup and hairstyle/mh19.jpeg", category: "Makeup & Hairstyle", size: "wide" },
  { id: 20, src: "/assets/makeup and hairstyle/mh20.jpeg", category: "Makeup & Hairstyle", size: "tall" },
  { id: 21, src: "/assets/makeup and hairstyle/mh21.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 22, src: "/assets/makeup and hairstyle/mh22.jpeg", category: "Makeup & Hairstyle", size: "large" },
  { id: 23, src: "/assets/makeup and hairstyle/mh23.jpeg", category: "Makeup & Hairstyle", size: "wide" },
  { id: 24, src: "/assets/makeup and hairstyle/mh24.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 25, src: "/assets/makeup and hairstyle/mh25.jpeg", category: "Makeup & Hairstyle", size: "tall" },
  { id: 26, src: "/assets/makeup and hairstyle/mh26.jpeg", category: "Makeup & Hairstyle", size: "large" },
  { id: 27, src: "/assets/makeup and hairstyle/mh27.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 28, src: "/assets/makeup and hairstyle/mh28.jpeg", category: "Makeup & Hairstyle", size: "wide" },
  { id: 29, src: "/assets/makeup and hairstyle/mh29.jpeg", category: "Makeup & Hairstyle", size: "tall" },
  { id: 30, src: "/assets/makeup and hairstyle/mh30.jpeg", category: "Makeup & Hairstyle", size: "square" },
  { id: 31, src: "/assets/makeup and hairstyle/mh31.jpeg", category: "Makeup & Hairstyle", size: "large" },
  { id: 32, src: "/assets/makeup and hairstyle/mh32.jpeg", category: "Makeup & Hairstyle", size: "square" },
];

export const beautyCategories = [
  {
    id: "professional-makeup-and-hairdo",
    title: "Professional Makeup & Hairdo",
    subtitle: "Beauty Parlour Services",
    cover: makeupImages[0]?.src,
    images: makeupImages
  },
  {
    id: "customer-photos",
    title: "Customer Photos",
    subtitle: "Happy Clients",
    cover: "/assets/placeholder.jpg",
    images: []
  },
  {
    id: "customer-reviews",
    title: "Customer Reviews",
    subtitle: "What Our Clients Say",
    cover: "/assets/placeholder.jpg",
    images: []
  }
];
