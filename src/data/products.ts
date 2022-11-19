import { Prisma } from '@prisma/client';

export const products: Prisma.ProductCreateManyInput[] = [
  {
    title: 'Black shirt with white border',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!

  Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.
  
  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
  
  Hit your next boxing workout with a combination it’s never seen before in the Combat Drop Arm Tank, including a freedom-instilling regular fit and dropped armhole to allow you to throw jabs and hooks at the punching bag with ease. A lightweight material keeps you fighting fit, and fresh.
  
  Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.`,
    collectionId: 2,
    subCollectionId: 24,
    price: 35.0,
    rate: 4.2,
    published: true,
    type: 'MEN',
    images: [
      '/assets/products/product-1.jpg',
      '/assets/products/product-2.jpg',
      '/assets/products/product-3.jpg',
      '/assets/products/product-4.jpg',
    ],
  },
];
