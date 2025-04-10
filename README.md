BEHRMART BYT2.0
Just a simple exercise to test external public/private APIs.

by Bernardo Felipe Martinez Meave
https://github.com/behrmart

Application is built on Next.js/React (Using the App Router). Uses one propietary API
running on my own server to get the Linux Fortunes. This FortuneServer API is running
using Docker and and Mongo DB (Cloud Mongo DB Atlas).
The Docker container runs a Node.js Server to query a Mongo Atlas DB using Mongoose.

Docker container for MongoDB running on Ubuntu Linux.
sudo docker run -d --name mongolin -p27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
sudo docker start mongolin

FortuneVaquitaServer
https://github.com/behrmart/FortuneVaquitaServer

Docker container Links to MongoDB Atlas

Also uses public RESTful APIs:
https://pokeapi.co
https://api.thecatapi.com
https://api.openweathermap.org

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
