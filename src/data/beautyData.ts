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

export const mehndiDesignsImages: GalleryItem[] = [
  { id: 1, src: '/assets/mehendhi/m1.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 2, src: '/assets/mehendhi/m2.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 3, src: '/assets/mehendhi/m3.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 4, src: '/assets/mehendhi/m4.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 5, src: '/assets/mehendhi/m5.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 6, src: '/assets/mehendhi/m6.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 7, src: '/assets/mehendhi/m7.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 8, src: '/assets/mehendhi/m8.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 9, src: '/assets/mehendhi/m9.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 10, src: '/assets/mehendhi/m10.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 11, src: '/assets/mehendhi/m11.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 12, src: '/assets/mehendhi/m12.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 13, src: '/assets/mehendhi/m13.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 14, src: '/assets/mehendhi/m14.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 15, src: '/assets/mehendhi/m15.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 16, src: '/assets/mehendhi/m16.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 17, src: '/assets/mehendhi/m17.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 18, src: '/assets/mehendhi/m18.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 19, src: '/assets/mehendhi/m19.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 20, src: '/assets/mehendhi/m20.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 21, src: '/assets/mehendhi/m21.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 22, src: '/assets/mehendhi/m22.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 23, src: '/assets/mehendhi/m23.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 24, src: '/assets/mehendhi/m24.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 25, src: '/assets/mehendhi/m25.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 26, src: '/assets/mehendhi/m26.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 27, src: '/assets/mehendhi/m27.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 28, src: '/assets/mehendhi/m28.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 29, src: '/assets/mehendhi/m29.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 30, src: '/assets/mehendhi/m30.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 31, src: '/assets/mehendhi/m31.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 32, src: '/assets/mehendhi/m32.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 33, src: '/assets/mehendhi/m33.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 34, src: '/assets/mehendhi/m34.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 35, src: '/assets/mehendhi/m35.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 36, src: '/assets/mehendhi/m36.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 37, src: '/assets/mehendhi/m37.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 38, src: '/assets/mehendhi/m38.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 39, src: '/assets/mehendhi/m39.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 40, src: '/assets/mehendhi/m40.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 41, src: '/assets/mehendhi/m41.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 42, src: '/assets/mehendhi/m42.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 43, src: '/assets/mehendhi/m43.jpeg', category: 'Mehndi Designs', size: 'tall' },
  { id: 44, src: '/assets/mehendhi/m44.jpeg', category: 'Mehndi Designs', size: 'tall' },
];

export const sareePrePleatingImages: GalleryItem[] = [
  { id: 1, src: '/assets/saree_prepleading/sp1.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 2, src: '/assets/saree_prepleading/sp2.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 3, src: '/assets/saree_prepleading/sp3.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 4, src: '/assets/saree_prepleading/sp4.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 5, src: '/assets/saree_prepleading/sp5.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 6, src: '/assets/saree_prepleading/sp6.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 7, src: '/assets/saree_prepleading/sp7.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 8, src: '/assets/saree_prepleading/sp8.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 9, src: '/assets/saree_prepleading/sp9.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 10, src: '/assets/saree_prepleading/sp10.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 11, src: '/assets/saree_prepleading/sp11.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 12, src: '/assets/saree_prepleading/sp12.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 13, src: '/assets/saree_prepleading/sp13.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 14, src: '/assets/saree_prepleading/sp14.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 15, src: '/assets/saree_prepleading/sp15.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 16, src: '/assets/saree_prepleading/sp16.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 17, src: '/assets/saree_prepleading/sp17.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 18, src: '/assets/saree_prepleading/sp18.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 19, src: '/assets/saree_prepleading/sp19.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 20, src: '/assets/saree_prepleading/sp20.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 21, src: '/assets/saree_prepleading/sp21.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 22, src: '/assets/saree_prepleading/sp22.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 23, src: '/assets/saree_prepleading/sp23.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 24, src: '/assets/saree_prepleading/sp24.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
  { id: 25, src: '/assets/saree_prepleading/sp25.jpeg', category: 'Saree Pre-Pleating', size: 'tall' },
];

export const makeupReviewImages: GalleryItem[] = [
  { id: 1, src: "/assets/makeupreview/mrev1.jpeg", category: "Customer Reviews", size: "tall" },
  { id: 2, src: "/assets/makeupreview/mrev2.jpeg", category: "Customer Reviews", size: "tall" },
];

export const beautyCategories = [
  {
    id: "saree-pre-pleating",
    title: "Saree Pre-Pleating",
    subtitle: "Perfect Draping",
    cover: sareePrePleatingImages[0]?.src,
    images: sareePrePleatingImages
  },
  {
    id: "mehndi-designs",
    title: "Mehndi Designs",
    subtitle: "Beautiful Henna Art",
    cover: mehndiDesignsImages[0]?.src,
    images: mehndiDesignsImages
  },
  {
    id: "professional-makeup-and-hairdo",
    title: "Professional Makeup & Hairdo",
    subtitle: "Beauty Parlour Services",
    cover: makeupImages[0]?.src,
    images: makeupImages
  },

  {
    id: "customer-reviews",
    title: "Customer Reviews",
    subtitle: "What Our Clients Say",
    cover: makeupReviewImages[0]?.src,
    images: makeupReviewImages
  }
];
