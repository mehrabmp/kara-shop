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
    color: ['BLUE'],
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
    color: ['RED'],
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
    color: ['BLACK'],
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
  {
    title: 'Brown Cowboy Boots',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 95.5,
    rate: 4.7,
    published: true,
    type: 'MEN',
    size: ['L', 'XL', 'XXL'],
    color: ['ORANGE'],
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
            imageURL: '/assets/products/product-19.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAwICQoJBwwKCgoNDQwOEh4TEhAQEiQaGxUeKyYtLComKSkvNUQ6LzJAMykpO1E8QEZJTE1MLjlUWlNKWURLTEn/2wBDAQ0NDRIQEiMTEyNJMSkxSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUn/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQIH/8QAIxAAAgIBAwMFAAAAAAAAAAAAAQIDEQQAEkEFBjETFDJRcf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8A0abJx4K9aeKK/G9wt8c6tJEdFdHVlYWGBsEaH6h2xhdSyPcTSz7xe633WDwL+I/NKRYsEMSRRxKqIoVR9AeNFMf/2Q==',
          },
          {
            imageURL: '/assets/products/product-20.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHCAkIBgoJCAkMCwoMDxoRDw4ODx8WGBMaJSEnJiQhJCMpLjsyKSw4LCMkM0Y0OD0/QkNCKDFITUhATTtBQj//2wBDAQsMDA8NDx4RER4/KiQqPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz//wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQH/8QAIRAAAgIBBAIDAAAAAAAAAAAAAQMCBAAFERIhBjETI2H/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAFBERL/2gAMAwEAAhEDEQA/ANAd5JQhKz8XN8apIfJe317e9we+sTTaW9C3LDDBkRKJ4H0exkDvH6zdUjqNZjalodzkkgcx+jbFsK2ifMP/2Q==',
          },
          {
            imageURL: '/assets/products/product-21.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgME/8QAIxAAAgEEAQMFAAAAAAAAAAAAAQIDAAQFEQYSMUEHFCEigf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEBAQEAAAAAAAAAAAAAAAABADER/9oADAMBAAIRAxEAPwB7ms/JbTRXnuJEw8MihpLKI3Elw+t9Gl30qPO6gPU3DkbFpmSD2Ix0lYeUSypzfGcfxcr4xcypku7q2JEhVCfqvhSdfLd6eh2CgBj+ndAc2VHL/9k=',
          },
          {
            imageURL: '/assets/products/product-22.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAb/xAAfEAACAgICAwEAAAAAAAAAAAABAwIEACERMQUiQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AtX2Eq8hWVOYDnAhceT7DuX58GLwliuGW67jLaTrXfJxW8D//2Q==',
          },
        ],
      },
    },
  },
  {
    title: 'Cotton T-shirt',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 9.9,
    rate: 2.9,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L'],
    color: ['ORANGE'],
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
            imageURL: '/assets/products/product-23.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAALAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwYH/8QAIBAAAQMEAwEBAAAAAAAAAAAAAwECEQAEBTESIkETUf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAMf/aAAwDAQACEQMRAD8A03M5DJ22bbbguBtGTh828JSFWO3u/wAqlTXbfsaoiWVqYqGKAbytiHq2VSNUtGZRVdS7mgA5v//Z',
          },
          {
            imageURL: '/assets/products/product-24.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgYH/8QAHxAAAgEEAwEBAAAAAAAAAAAAAQIDAAQRIQUSQROB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/ANK5u75GHnkt4b4okvTooGlBONj3dVA0AG2fSNZoG3hd/o8MbOMYYqCR+06CDCey1jAqoyf/2Q==',
          },
        ],
      },
    },
  },
  {
    title: 'Denim shirt',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 15,
    rate: 3.5,
    published: true,
    type: 'MEN',
    size: ['L', 'XL', 'XXL', 'XXXL'],
    color: ['GRAY'],
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
            imageURL: '/assets/products/product-25.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASEAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQG/8QAGhAAAwEBAQEAAAAAAAAAAAAAAQIRAwAxUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDY7bNnoVAWCe9RBwE+KaOHa0Tw/DeS8H//2Q==',
          },
          {
            imageURL: '/assets/products/product-26.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHCAkIBgoJCAkMCwoMDxoRDw4ODx8WGBMaJSEnJiQhJCMpLjsyKSw4LCMkM0Y0OD0/QkNCKDFITUhATTtBQj//2wBDAQsMDA8NDx4RER4/KiQqPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz//wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAIhAAAQQBAwUBAAAAAAAAAAAAAQIDBBEABRMhBhIVMlGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANGnTI8TWoSX5DDK5ILTSV+zvNlI/axTjJ/qDa8poJcYbcUqbthSxZQO0qsfDaE47ZwL/9k=',
          },
          {
            imageURL: '/assets/products/product-27.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAACAf/xAAjEAACAQMDBQEBAAAAAAAAAAABAwIEBREGByEAEhMiMQhx/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABsRAAIBBQAAAAAAAAAAAAAAAAECAAMhQZHw/9oADAMBAAIRAxEAPwBeU+p3WbcSsuqZQZO5INRUrp1kMqp0rfEyHAxPtWxYiPuY8fc9XEcgEYIPI56HX6U3X1btrvrozb7SsbYqF9hbrq24OpPJUKW6/JpG08PYRAktuO/Hd6/whhsJiyUYnABIA6OmpUX453FqsGNuGNT/2Q==',
          },
          {
            imageURL: '/assets/products/product-28.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA8KCw0LCQ8NDA0REA8SFyYYFxUVFy4hIxsmNzA5ODYwNTQ8RFZJPEBSQTQ1S2ZMUllcYWJhOkhqcmlecVZfYV3/2wBDARARERcUFywYGCxdPjU+XV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV3/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQG/8QAIRAAAQQCAAcAAAAAAAAAAAAAAQACAxEEEgUhMVFhcbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1+RMY+JYkJjcWyh9SN6MIF0fY+K2kSzZzHbEa2a78qTryg//2Q==',
          },
        ],
      },
    },
  },
  {
    title: 'Girl’s Plaid shirt',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 25,
    rate: 3.8,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['BLUE'],
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
            imageURL: '/assets/products/product-29.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASEAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQG/8QAHRAAAgMAAgMAAAAAAAAAAAAAAQIAAxEEEiFBYf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANjfyWr5CoAOvjd+ynI2YAaqtySyAk+4tgX/2Q==',
          },
          {
            imageURL: '/assets/products/product-30.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgT/xAAiEAABAgUEAwAAAAAAAAAAAAABAAIDBBESIQUGEzEjYdH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQEBAQEBAAAAAAAAAAAAAAARAAECA//aAAwDAQACEQMRAD8AXFzDNiLnAs79qpAixWBqUzE3U6UL/BzubZQdAH5VKqrT0wKONW//2Q==',
          },
          {
            imageURL: '/assets/products/product-31.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAb/xAAgEAACAgIBBQEAAAAAAAAAAAABAgMRAAQSISIxMkFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8ArNncTWmDzzrDrr2tyHsT46/MbjLDYLPowyyq7hm4kHixtSbu6/cVVY0f/9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Girls’ gathered-sleeve top',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 18,
    rate: 4.1,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['PINK'],
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
            imageURL: '/assets/products/product-32.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQAG/8QAGBABAQEBAQAAAAAAAAAAAAAAAQACEVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A2+lNAHSeS+1B/9k=',
          },
          {
            imageURL: '/assets/products/product-33.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAYHCP/EACIQAAICAQMEAwAAAAAAAAAAAAECAwUEABEhBgcTMjFBYf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAaEQADAAMBAAAAAAAAAAAAAAABAgMAEXHR/9oADAMBAAIRAxEAPwDUPd+67idC9x6HqygxMu0r7C/qqqXBxs2QrFHK+UMiSWABtldfAoIHJUE+g1c4Mq9eGN5qBYpGUFo2ylJQ7cg8fWhjiV1mcZrDAjnIzl8bN7RyIxZXB+eGTfb90xaLKLKWIY6PPMXaysqgqNgZ/9k=',
          },
          {
            imageURL: '/assets/products/product-34.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAhEAACAQMEAwEAAAAAAAAAAAABAwIABAUREiFhIjEycf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/EABgRAQEBAQEAAAAAAAAAAAAAAAEAMQIR/9oADAMBAAIRAxEAPwCnyi7xjLc2tyUKgwFm36lz6/Ou6RJ5oNlynMvmXWmet8fBS5KYVyMjru8pEHSn9ai10eBf/9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Girls’ mixed-stripe shirt',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 35,
    rate: 3.9,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['BLUE'],
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
            imageURL: '/assets/products/product-35.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAQj/xAAjEAABAwMEAgMAAAAAAAAAAAABAgMEBREhAAYHEggTMTOB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCl+avIHmDZnNjewtsxqezGkKhIpsOS0ytVR9hsVdyboDi+zYyLdQcXvqqWbONIcdJYWpIUppQuWyRlJIwSPjGg0mlSyJ0qmRHpLP1vOMpUtFsiyiLj806pewgBkIYs/9k=',
          },
          {
            imageURL: '/assets/products/product-36.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAjEAACAQIGAgMAAAAAAAAAAAABAgMEEQAFBgcSIQgxExUy/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAgAR/9oADAMBAAIRAxEAPwCld7PIbdvQ+9KaF05SUKUs0lDHl9DNDC8mYCRgGfmTdA7ckFyLcQer3xVcVpIkkkb4HZQWicXaMkdqSOiR66w+oymqYV1VllJNUx/iaSFWdberMRcYYpdFABzEOLv/2Q==',
          },
        ],
      },
    },
  },
  {
    title: 'Girls’ slide sneakers',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 22,
    rate: 4.2,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['BLUE'],
    collection: {
      connect: {
        id: 1,
      },
    },
    subCollection: {
      connect: {
        id: 2,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-37.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAALAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQMAAgQFEUGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANoydmxGwXi11me+tyAXrXUrp30k278EoRED/9k=',
          },
          {
            imageURL: '/assets/products/product-38.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHRAAAQQDAQEAAAAAAAAAAAAAAQACAwQRIUEFUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDZrluzF7dCtEwmvMHmVwAwMDWe8592qSIg/9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Girls’ slide sneakers in emojis',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 27,
    rate: 4.1,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['YELLOW'],
    collection: {
      connect: {
        id: 1,
      },
    },
    subCollection: {
      connect: {
        id: 2,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-39.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQH/8QAIBAAAgICAAcAAAAAAAAAAAAAAhEAAQQSAwUhIzFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARFB/9oADAMBAAIRAxEAPwDai5tijmni9yz4YbkVBdjXVJ/X6l0OgN6i/LUUIvS//9k=',
          },
          {
            imageURL: '/assets/products/product-40.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAAMAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwUH/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQIDAAQREgUxISJhof/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARQf/aAAwDAQACEQMRAD8A2G85g23Jm1ZoVXZB7bbYPf7gD7Vehe0tpJhK8EbSDBDFcnx1TVIPZcv/2Q==',
          },
        ],
      },
    },
  },
  {
    title: 'Girls’ star-print jeans',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 34,
    rate: 4.6,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['BLUE'],
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
            imageURL: '/assets/products/product-41.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAALAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAYH/8QAIRAAAQQBAwUAAAAAAAAAAAAABAECAxEABQYSEyFBUXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/ANL3EeePvHSh4Dnwiv6aSwpVSK57k9X4rK3DzaYCSQ0sgWOQiKuEjk7t4rySvireIxKIRBFv/9k=',
          },
          {
            imageURL: '/assets/products/product-42.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAALAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAYH/8QAHhAAAQQCAwEAAAAAAAAAAAAAAQIDBBEABQYSIXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/ANL5DsdjG5rq4seS8iG8Gw62iutlahZv32qytw72sgyZCJciK25IZro4oep6kkV8JJxGJRIgi3//2Q==',
          },
        ],
      },
    },
  },
  {
    title: 'Gray jacket',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 67,
    rate: 4.1,
    published: true,
    type: 'MEN',
    size: ['L', 'XL', 'XXL'],
    color: ['GRAY'],
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
            imageURL: '/assets/products/product-43.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAf/xAAfEAABBAEFAQAAAAAAAAAAAAACAAEDEQQFEhMhMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALFl6gUOcMQgHGFcrkz29+bfieiz6fjzyHJIxuZ12xu1V5SU3So//9k=',
          },
          {
            imageURL: '/assets/products/product-44.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAACAf/xAAiEAACAQMEAgMAAAAAAAAAAAABAwIEBREABgcSEyEIYbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAHREBAAEEAwEAAAAAAAAAAAAAAREAAgMhEpGxwf/aAAwDAQACEQMRAD8Ab+/Ubfq9+Wm+3SgU6exUtuSmlPeUXsXkRiQe8cQxLAiRLIBJxjVForraa2jRWoq4+OoVFsMgg9ZAEfujdynzHS2n5FUvDc9oLqF7jZa1VVwNX1JD1GPtfjPbrGAAzL79aTCJwWha1oXGEYARHXOAB60eO2OSm1+BT52SwGQOtq+1/9k=',
          },
          {
            imageURL: '/assets/products/product-45.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgf/xAAiEAABAwMDBQAAAAAAAAAAAAABAgMEABESBSExBlFhcaH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKjqLrkhvCU2DgbqaCiLHIWG3Pu9IgkKAUrZR3I80GnzpUfrpAacSGTJhsqbKeQ629kb97tp+01Czaiv/9k=',
          },
          {
            imageURL: '/assets/products/product-46.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAb/xAAeEAACAgICAwAAAAAAAAAAAAACAwABBBESIUGh0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC3e9QZWOszGjK9gN33fiKhWY4MyVuK75L1r39iIH//2Q==',
          },
        ],
      },
    },
  },
  {
    title: 'Green shirt',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 22,
    rate: 4.4,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['GREEN'],
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
            imageURL: '/assets/products/product-47.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAAMAAoDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwj/xAAjEAABAwMEAgMAAAAAAAAAAAABAgMRBAUhAAYHEhMxIkFR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgME/8QAGhEAAwEBAQEAAAAAAAAAAAAAAAECEQMSIf/aAAwDAQACEQMRAD8AaeTOf7lsrlFmw0zNEqz0ngFYXEErV5IK8g46pIiPuZnWTp3c35HM6tKGHyHZA7JOQf0a0gDu+cD7G3Vd6y83S1vPV9avu8tNW6gKVETAVAwB61F8Yp60JU0ILCjTMtsNk+NpIQmcmAIGT79aqnnwJ//Z',
          },
          {
            imageURL: '/assets/products/product-48.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwj/xAAiEAACAgICAgIDAAAAAAAAAAABAgMEBREGEgAIEyEHIkL/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EACERAAEDAwQDAAAAAAAAAAAAAAECAxEABBIFITFBExRR/9oADAMBAAIRAxEAPwB3Ps3b4X7o8h4TkcTiKvGstbTF5K2JHe3G9erF8Nptt1SIGTq2l1rsf4PliM6KxVlIIOiNeSP+XeC8YpeydXlmOwlCLLS0q2UtWnhLvOGWetNDrsFCyoV7khj+g69Ts+MlbFZOavFLXzPwROiskQhLdFI+l2X2dD62fIj+pepcG2aSVqjI7xEkjvncU5u2L6PKs4jgdzAHyv/Z',
          },
          {
            imageURL: '/assets/products/product-49.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EACAQAAICAQMFAAAAAAAAAAAAAAECAAMRBAUhBhIxcbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A12rttXqPbwEY0tTapYE4DcH4JU7hFraw2qpc+aw2B74hcwP/2Q==',
          },
          {
            imageURL: '/assets/products/product-50.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwYI/8QAJBAAAgIBAwQCAwAAAAAAAAAAAQIDBBEFEiEABgcIIjEyQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABwRAQABBAMAAAAAAAAAAAAAAAEDAAIREiGRsf/aAAwDAQACEQMRAD8Adfb/ANgO/tL8rdneLPGdSNrVaxUuz25FlEEV6wzRV45pUYBFCurENnJdTgkDrYqXq6oq2mKzAASCMZQN+9uecZ+s9H/cWgU01ttSjSNH1KeOSyghXbK8EeIWfP5Fdq4PB+I/gxUG9uOTAnPPUcDJdLJscCB1nxKaTXS0K//Z',
          },
        ],
      },
    },
  },
  {
    title: 'Green striped jackets',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 42,
    rate: 4.7,
    published: true,
    type: 'MEN',
    size: ['S', 'M', 'L'],
    color: ['BLUE'],
    collection: {
      connect: {
        id: 2,
      },
    },
    subCollection: {
      connect: {
        id: 20,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-51.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAIRAAAgEEAgIDAAAAAAAAAAAAAQIDAAQREgUGMVETIWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECERL/2gAMAwEAAhEDEQA/ANF7H3Wbiudeygt4ZIINPlZidsn7YDH5Vmg3QOmCrDIPsUNedV4W9unuLiyDSyNs5DsNj7IzS8SLDEkUQ0RFCqo8ADwKVOcWAlUm+j//2Q==',
          },
          {
            imageURL: '/assets/products/product-52.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwb/xAAkEAACAAUEAQUAAAAAAAAAAAABAgADERIxBAUhUTIGEyIjYf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAZEQACAwEAAAAAAAAAAAAAAAACAwAxQTL/2gAMAwEAAhEDEQA/AECduuyr6lO5X6j3Jf0mYDVWoCtoFfE1JI7Wv7FfaOoBdGzFFkKxCtOQPz5BjgdDjAzxXEPV1nwGF4hDWK62EtpM6yf/2Q==',
          },
          {
            imageURL: '/assets/products/product-53.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQf/xAAkEAABAwMBCQAAAAAAAAAAAAABAgMEAAURBhIUISIxQWGBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCn6uuBgzLK0ENr3mYENhWclzHKBjwVfKfKRk46UTd4TcufbZCyQqC6X2x2KjhPH0TSW2aQ/9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Gril’s Fashion coats',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 65,
    rate: 4.1,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L'],
    color: ['BLUE'],
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
            imageURL: '/assets/products/product-54.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIxAAAgAFBAIDAAAAAAAAAAAAAQIAAwQFMQYHESESEyJBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8At7gbu1em9eJaaSnp5tvpDLWtZgSzFuCwB5+PipB++8xriH2IryuHRgCrA9EHBg1etv8ATF6u6XO42xZtUrByVmMquwwWUHhj+kjvBhKiiWipLARFACqvQAGABFH/2Q==',
          },
          {
            imageURL: '/assets/products/product-55.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgf/xAAmEAACAgECAwkAAAAAAAAAAAABAgMEBQARBgchEzEyQmJykaLR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAC/9oADAMBAAIRAxEAPwB7xdnK2Num009ns8Mkc9xIfCqSNsNx5iQD0/dKKzJarxWK7rJDMgkRwejKRuD8agXMPKTk8wY9+kuSpVz7FD7D6DS7hXJWl4YxKiVthShHf6BoOZXUtA3/2Q==',
          },
        ],
      },
    },
  },
  {
    title: 'Gril’s Short T-shirt',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 39,
    rate: 4.0,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L'],
    color: ['BLUE', 'PINK', 'YELLOW'],
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
            imageURL: '/assets/products/product-56.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAfEAABBQADAAMAAAAAAAAAAAABAgMEBREABiESE2H/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAQf/aAAwDAQACEQMRAD8AvO398saHuESkjVLMlMoMlC1PlKl/NRSc8wYRnvLw+Ejh82jqp1gzPmV0Z+Wxn1PONgrRh0Yfw+8Q5SmQX//Z',
          },
          {
            imageURL: '/assets/products/product-57.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwb/xAAiEAABAwMEAwEAAAAAAAAAAAABAgMEABESBQcTIQYiMfH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABwRAAAGAwAAAAAAAAAAAAAAAAABAhESIVFhkf/aAAwDAQACEQMRAD8AonfNUxNyFw5EhXAuYmJiVHFtvApHXztwg0lEAGxoC1ZSWd6vRtOJ1JJxIuLm37TvyGgkQJs2LWqVtrg//9k=',
          },
          {
            imageURL: '/assets/products/product-58.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAYH/8QAHxAAAQQCAgMAAAAAAAAAAAAAAwECBBEABRKBBiFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQEBAAMBAQAAAAAAAAAAAAABAgADETFh/9oADAMBAAIRAxEAPwDWN35BK124DCFDGVpeHFVeqK61rrvKD7hpGvhyZA5B4wyGHXB7k9tpbTE4JKF65bZWupkg4nv3P//Z',
          },
          {
            imageURL: '/assets/products/product-59.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQH/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxEEMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAhH/2gAMAwEAAhEDEQA/ANwu5DV2hAgO57KIHqR2DMoJHRjkZEXrN//Z',
          },
        ],
      },
    },
  },
  {
    title: 'Guide Pack Cap',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 20,
    rate: 3.9,
    published: true,
    type: 'MEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['GRAY'],
    collection: {
      connect: {
        id: 3,
      },
    },
    subCollection: {
      connect: {
        id: 37,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-60.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIABAMiBRExMoH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1/k79ytnRKlHJnU+zBCfkppsisdSR2QfIiIh/9k=',
          },
          {
            imageURL: '/assets/products/product-61.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIBAAAQMEAgMAAAAAAAAAAAAAAQACAwQFBhEiQVFxgf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDRr5kV2oshZQUloq54XDYmjgLo/rvfhVjOTGuPEkbIPSbRIf/Z',
          },
        ],
      },
    },
  },
  {
    title: 'High sport shoes',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 135,
    rate: 4.3,
    published: true,
    type: 'MEN',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['GRAY'],
    collection: {
      connect: {
        id: 1,
      },
    },
    subCollection: {
      connect: {
        id: 2,
      },
    },
    images: {
      createMany: {
        data: [
          {
            imageURL: '/assets/products/product-62.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA8KCw0LCQ8NDA0REA8SFyYYFxUVFy4hIxsmNzA5ODYwNTQ8RFZJPEBSQTQ1S2ZMUllcYWJhOkhqcmlecVZfYV3/2wBDARARERcUFywYGCxdPjU+XV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV3/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgUG/8QAHhAAAgEEAwEAAAAAAAAAAAAAAQIAAwQhMQURIhT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1VfnbO35L4axdHx7K+cjvcpbGISilgxUEjRI1FA//9k=',
          },
          {
            imageURL: '/assets/products/product-63.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsHCAoIBwsKCQoMDAsNEBsSEA8PECEYGRQbJyMpKScjJiUsMT81LC47LyUmNko3O0FDRkdGKjRNUkxEUj9FRkP/2wBDAQwMDBAOECASEiBDLSYtQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwUG/8QAIhAAAwABAgYDAAAAAAAAAAAAAQIDBAARBQYSISIxYZGS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANhbmloZWTJ+H3ouNktKrR8ik9t1cj5+tXpXlaSVnWbI6hlIYdwfWjlg48s2uZOfTeyhaMCfID120omgGwRfyNB//9k=',
          },
          {
            imageURL: '/assets/products/product-64.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcI/8QAIxAAAgICAQQCAwAAAAAAAAAAAQIDBAYRBQAHCBITITFBQv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AHs67x+Xi5Ic4mpXMUxnmeUglgrSMIFsQV0IESKw+YxgN7Ow9Q517EjS9GTd+vMa3NJaoZpzZqzMZICmPQuvxk7XTCPRGtff762b3A8dcY7mZouX5Nz3MPFHBHA3HxTBY2Rf5DEEoD9lgutk73v76qFKpU42nBx1CrDBWqxLDDEkYCxxqAFUDX4AAHRI/9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Horizontal Striped T-shirt',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 30,
    rate: 4.1,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L'],
    color: ['GRAY'],
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
            imageURL: '/assets/products/product-65.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcI/8QAIhAAAQQABwADAAAAAAAAAAAAAgEDBAUABgcIERIhEzFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDXesG5W8003Cab6KV+T4FjFz0rPz2D0l0HYveSTRdAEVE+BHt6v77wnuL7g+Zl6hsbitzDPpoUi0pkfSumOsiT0RHhQXUbNfR7iiIXH2iYQxA//9k=',
          },
          {
            imageURL: '/assets/products/product-66.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAwICQoJBwwKCgoNDQwOEh4TEhAQEiQaGxUeKyYtLComKSkvNUQ6LzJAMykpO1E8QEZJTE1MLjlUWlNKWURLTEn/2wBDAQ0NDRIQEiMTEyNJMSkxSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUn/wAARCAANAAoDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgX/xAAhEAABBAEDBQAAAAAAAAAAAAABAgMEEQAFEiEGImGBwf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oADAMBAAIRAxEAPwBxM1NmPrUSIqY22twcsqNFd2BQrk+8qYR3ZJwhmqITI6+grWO5nalJB8X9OMN2JMiOl//Z',
          },
          {
            imageURL: '/assets/products/product-67.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQf/xAAiEAABAgUEAwAAAAAAAAAAAAABAhEAAwQFIRITMUEGIlH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oADAMBAAIRAxEAPwCuV9bPk+QWimQkGRUbwmHUQxCHTjvjviF4BuYa/Wua51I3AA+MsDj77Q1qMTC//9k=',
          },
        ],
      },
    },
  },
  {
    title: 'Jacket Collar',
    description: `Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5.`,
    price: 45,
    rate: 4.2,
    published: true,
    type: 'WOMEN',
    size: ['S', 'M', 'L', 'XL'],
    color: ['RED', 'PINK', 'GRAY'],
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
            imageURL: '/assets/products/product-68.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgFBgcGBQgHBgcJCAgJDBMMDAsLDBgREg4THBgdHRsYGxofIywlHyEqIRobJjQnKi4vMTIxHiU2OjYwOiwwMTD/2wBDAQgJCQwKDBcMDBcwIBsgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgf/xAAkEAACAAYCAAcAAAAAAAAAAAABAgADBAURIQYSBxMUIkFRYv/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAHREAAgIBBQAAAAAAAAAAAAAAAQIAEQMEITFhwf/aAAwDAQACEQMRAD8ATc18Tq+w8ze2UtJTTaGkKLPLg937AE4OdYz9GKiFLDK7B2DBm6cAsl1mXObVyFepuT+Z6goC8j2quEOPznfyTCdWKgAaA0ICg2blupfAyIMK0QN++Pbn/9k=',
          },
          {
            imageURL: '/assets/products/product-69.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACQcI/8QAJhAAAgICAQIFBQAAAAAAAAAAAQIDBAURBgAHCBITISIUIzFBkf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAIhEAAQIFBAMAAAAAAAAAAAAAAQIRAAMEMUEFBhJxocHw/9oADAMBAAIRAxEAPwCrdrfEOnO/FZfq87ioYy3hrOZxEUcbFkghoI30wjY7JZ2kttIAdOwi0B5NHaNe9UtV4rUE6tFMiyI2j7qRsH+dGxhcbRxvcbg3eLkUIy+c5Jm6S5lIkjpwW3tSxwswRFPk+N0bA35vSBbbMW6SP1DD9lNhY/iADoaHt+P10dp6zMCyC45Ht8+oodwmkMyUaVBQ6EuMC9vvLx//2Q==',
          },
          {
            imageURL: '/assets/products/product-70.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQG/8QAIBAAAQQBBAMAAAAAAAAAAAAAAQACAxEhBBMxQRVxkf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/ANfKJvJabbcBCGP3Qe+Kx77VWEDg462Ih1NEbrFc5FZ+pkW1/9k=',
          },
          {
            imageURL: '/assets/products/product-71.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA8KCw0LCQ8NDA0REA8SFyYYFxUVFy4hIxsmNzA5ODYwNTQ8RFZJPEBSQTQ1S2ZMUllcYWJhOkhqcmlecVZfYV3/2wBDARARERcUFywYGCxdPjU+XV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV3/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQG/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxFBQlH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANtffZXeiqFKdtlOQtSjFiRpbnyMHBCv/9k=',
          },
          {
            imageURL: '/assets/products/product-72.jpg',
            imageBlur:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQG/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIAAxExBBIhUZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3V99ichVRVKDw3yVYhvQr9ydnR9RcwP/2Q==',
          },
        ],
      },
    },
  },
];
