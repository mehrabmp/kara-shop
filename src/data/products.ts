import { Prisma } from '@prisma/client';

export const products: Prisma.ProductCreateInput[] = [
  {
    title: 'Black shirt with white border',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 35.0,
    rate: 4.2,
    published: true,
    type: 'MEN',
    size: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    color: ['BLACK'],
    collection: {
      connect: {
        id: 2,
      },
    },
    subCollection: {
      connect: {
        id: 24,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-1.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EACQQAAICAQIHAAMAAAAAAAAAAAECAwQRAAUGBxMUITFRQXGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ACuPuae9bTxxarbVPCu37VJ05a7Qhu5IUGTLexjJAxj1+dbVTkS5UhtV3DQzosiH6pGR/DqPm5Y8Kz7j39qnPPaMxnZ2sMA7Fy3kDAPk4/QA09o7FBRpQVK1q4sNeNYo16o8KowB6+DQf//Z',
          },
          {
            imageURL: '/assets/products/product-2.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwX/xAAjEAABAgUEAwEAAAAAAAAAAAABAgMABAURIQYHEjETQVFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8Aobj61YG5tHpy5flLUWbbU64lwhZccKRcDqyRjOe+oZVGxI+Qa6226kqxrNiqNTSpEvFsTCGWhd08iFK5XwSmwvb1CY2fG2lCMJSAkfghC4//2Q==',
          },
          {
            imageURL: '/assets/products/product-3.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASEAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQUGB//EACIQAAIBAwQCAwAAAAAAAAAAAAECBAAGEQMFITESEyJhkf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/ADdUmPAuuLJZVd19eo7BsFAp5HHPVU63Ds7KGG5RsEZGXwfyiG2M7utybnnsQD4vgZ+lFK0laoRfkeqUv//Z',
          },
          {
            imageURL: '/assets/products/product-4.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAjEAACAQIGAgMAAAAAAAAAAAABAgMEEQAFBhIhMQdBYXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALzylWakpKrIX05TCWOOrEtQ1gxPIRUtfoh2J+sXLXDEDoHBUk0kueNEdgjgaADg3O4OTzf4X16P4tgP/9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Funnel collar puffer jacket',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 87.95,
    rate: 4.5,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['GREEN', 'PINK'],
    collection: {
      connect: {
        id: 2,
      },
    },
    subCollection: {
      connect: {
        id: 24,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-5.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBv/EACEQAQABAwIHAAAAAAAAAAAAAAERAAIDEjEEEyEyUWGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN1l4vl59IDZb3+flVnUk2pZhxzOi1d5aIstACYPdB//2Q==',
          },
          {
            imageURL: '/assets/products/product-6.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASEAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQG/8QAHBAAAgMAAwEAAAAAAAAAAAAAAQIAAxETIZEi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A2ljjmU94h92PogSWKpuqcj6XM9yNplSP/9k=',
          },
          {
            imageURL: '/assets/products/product-7.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAACAf/xAAgEAACAQQCAwEAAAAAAAAAAAABAgMEBRESAAcGITFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAbEQACAgMBAAAAAAAAAAAAAAABAwACERITIv/aAAwDAQACEQMRAD8Ac9rutp8Gram9yV0xjvFbDFKJXDIC5zhAANB9P565WNA3tRsp9gj4R+8G3Tvds/bPY9D4BePGYYKCZGqp2WrfZzHGcKNQpAJGSMnPzi8WslRQiHVVGAAcADj52V5sMSCWho2Bn//Z',
          },
          {
            imageURL: '/assets/products/product-8.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwMI/8QAJRAAAgEDAwMFAQAAAAAAAAAAAQIDBAURABIhBgcTIjEyYXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABcRAAMBAAAAAAAAAAAAAAAAAAERIQD/2gAMAwEAAhEDEQA/AN29yO5NHYeoLTb1r3hFFUQ1s/jkZBPGdy7WfIQJjeW3ZHpPAO06R4qymmiSVKiPa6hhlxnB/ui7qvpewXilhrrvaqeqktymeElcMCrCQjP2UUH8HHGqQyPWQx1cbeJJ1Eix/LYGGQM8Zxn3wNCAowG6Zv/Z',
          },
          {
            imageURL: '/assets/products/product-9.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQIEBv/EAB8QAQACAgAHAAAAAAAAAAAAAAEAAwIREiEiUVKRof/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAMAwEAAhEDEQA/AN5nelnTrgx2J3lBpBHkxCmvx+wleIaHL3Cx/9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Boy’s Jeans Simple',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 42.5,
    rate: 3.9,
    published: true,
    type: 'MEN',
    size: ['S', 'M', 'L'],
    collection: {
      connect: {
        id: 2,
      },
    },
    subCollection: {
      connect: {
        id: 19,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-10.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAJBAAAQIFAgcAAAAAAAAAAAAAAQQFAAIDEjEGERMUITNBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/ALjWb4+odeNSNuWCk3zBMVNKyU38SsZMkbjG0aAcmDVzC2rl3OKk96gCiBPeR2qhqSdB6mJP3zCUND//2Q==',
          },
          {
            imageURL: '/assets/products/product-11.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQf/xAAkEAABAwMBCQAAAAAAAAAAAAABAgMEAAURBhIUISIxQWGBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCn6uuBgzLK0ENr3mYENhWclzHKBjwVfKfKRk46UTd4TcufbZCyQqC6X2x2KjhPH0TSW2aQ/9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Brown and White Striped T-shirt',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 50.95,
    rate: 4.1,
    published: true,
    type: 'MEN',
    size: ['L', 'XL', 'XXL'],
    collection: {
      connect: {
        id: 2,
      },
    },
    subCollection: {
      connect: {
        id: 17,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-12.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAHxAAAgEFAAMBAAAAAAAAAAAAAREEAAIDBRIhQWGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANDstxnhzxHxxRf1zwSV0z5X5VkFhkr4fVBl6nHNlYZN+S+27CkAAii6YqLcf//Z',
          },
          {
            imageURL: '/assets/products/product-13.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQG/8QAIRAAAQQBAwUAAAAAAAAAAAAAAQACAwQRBRITITFBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A189h7NRrQho45GvLj9HZP09ILEDXXa8xJJj3Bo8AkYyqMIP/2Q==',
          },
          {
            imageURL: '/assets/products/product-14.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABgcICf/EACYQAAIBAwMEAQUAAAAAAAAAAAECAwQFEQAGCAcSITEUIzJBYZP/xAAVAQEBAAAAAAAAAAAAAAAAAAADBf/EABsRAAEFAQEAAAAAAAAAAAAAAAEAAgNRYRIT/9oADAMBAAIRAxEAPwC2+QO6tobV2Vb23JPcGlqLjHLRRUkrRtNLB9QhmDLhcfv2QcHGlJJzxtwkYP0uYNk5xdRjP89G3L0UsPH2/wB7qaRKiWzyUtXTlgO5HM6RntYg9pKuRkfjxrM+bqXDHM8bWAsVYgt8oeTn39mh4eXksxUYTB4gS2byl//Z',
          },
          {
            imageURL: '/assets/products/product-15.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA8KCw0LCQ8NDA0REA8SFyYYFxUVFy4hIxsmNzA5ODYwNTQ8RFZJPEBSQTQ1S2ZMUllcYWJhOkhqcmlecVZfYV3/2wBDARARERcUFywYGCxdPjU+XV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV3/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgP/xAAfEAACAgIBBQAAAAAAAAAAAAABAwIRAAQGEiEiUZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwBtsbyUOWqbFxMj3EpUQPf3L2MG8p2Ir5DqpKxIMjDqN1fkRi4miRgbj//Z',
          },
        ],
      },
    },
  },
  {
    title: 'Black Shoes Fashionable',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 74.3,
    rate: 3.8,
    published: true,
    type: 'MEN',
    size: ['L', 'XL', 'XXL'],
    collection: {
      connect: {
        id: 1,
      },
    },
    subCollection: {
      connect: {
        id: 5,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-16.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAwICQoJBwwKCgoNDQwOEh4TEhAQEiQaGxUeKyYtLComKSkvNUQ6LzJAMykpO1E8QEZJTE1MLjlUWlNKWURLTEn/2wBDAQ0NDRIQEiMTEyNJMSkxSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUn/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwb/xAAjEAACAQIEBwAAAAAAAAAAAAABAgMABAUSMUEGESEiI2Fx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKS846wmyx+XCZ47hHifLJMQMi+9eZGm1UyeSNXTuVgCCNxRyW8Ejq8kETuvVWZASPhpaD//2Q==',
          },
          {
            imageURL: '/assets/products/product-17.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgwKCA0MCwwPDg0QFCIWFBISFCkdHxgiMSszMjArLy42PE1CNjlJOi4vQ1xESVBSV1dXNEFfZl5UZU1VV1P/2wBDAQ4PDxQSFCcWFidTNy83U1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1P/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EACEQAAEEAgICAwAAAAAAAAAAAAECAwQFABESMRMhUWGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANBd3tlXy1LartV0dQDzzx4qd+mxv9PwcpQ7CXJhsPmvcSXW0r4762N6wgqIig8H0Kkh57zKEhXMBXQ0D6AAx/A//9k=',
          },
          {
            imageURL: '/assets/products/product-18.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASEAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAIxAAAQIFAwUAAAAAAAAAAAAAAQIDAAQFETESEyEGIkFxof/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvqzZmeuKayoXaDWpSVYVbUcewPkamAOnZRU3UGCHtrYSVoUlPcCTzzfBAItbzCJzEH//2Q==',
          },
        ],
      },
    },
  },
];
