
# KARA Shop

Full-stack e-commerce built with [T3 Stack](https://create.t3.gg/)

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

```bash
# Database URL for prisma
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

# URL of the website
NEXTAUTH_URL='http://localhost:3000'

# Used to hash tokens, sign/encrypt cookies and ...
# You can quickly create a good value with this command
# openssl rand -base64 32
NEXTAUTH_SECRET=VJmi1XgBd48qWC2xn/kNRc15OIY+P4a1uXgV42uaHuw=

# GitHub oAuth
GITHUB_ID=YOUR_GITHUB_CLIENT_ID
GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET

# Google oAuth
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

# Twitter oAuth
TWITTER_CLIENT_ID=YOUR_TWITTER_CLIENT_ID
TWITTER_CLIENT_SECRET=YOUR_TWITTER_CLIENT_SECRET
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/mehrabmp/kara-shop.git
```

Go to the project directory

```bash
  cd kara-shop
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

