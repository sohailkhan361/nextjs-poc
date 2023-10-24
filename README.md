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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Steps:
1. Create account on <Clerk.com> > Copy the API keys
2. Search documentation of Clerk with NextJS, free for upto 5000 users
3. npm install @clerk/nextjs
4. create .env.local file > Paste the API keys 
5. Add the ClerkProvider wrapper to layout section
6. Create middleware.ts file and add the code from docs
7. Add Sign-in code 
8. Update the font by importing from google and replace 'inter'
9. Install <DaisyUI> > https://daisyui.com/docs/install/ > npm i -D daisyui@latest
10. Update plugins in tailwind.config.ts file using doc plugins: [require("daisyui")],
11. For custom size use text-[12px] in tailwind
12. Next is <HyGraph CMS setup> for graphQL content management platform
13. <HyGraph> Community Free Forever:
    - Fully Hosted and GraphQL native Headless CMS
    - Robust GraphQL Content APIs for read and write access
    - Built in Digital Asset Management with Assets Transformation API
    - Work together with up to 3 users and 2 locales per project
    - Automate custom logic with granular webhooks
    - Up to 1 million monthly API calls and 100GB monthly asset traffic (hard limit)
    Sign-up for free
14. Upon sign-in, Add new project >  Schema > Add new model
15. Update schema and add content > Publish entries
16. Using the API playground, create the query to select/unselect the field required.
17. Install <GraphQL Request> dependency from https://www.npmjs.com/package/graphql-request
18. > npm add graphql-request graphql
19. Add index.ts file in services folder and add the query using 'ql' imported from graphQL.
20. Note: Make sure the 'request' is coming from graphQl request
21. To provide url to the request
    Go to Project Settings in HyGraph > Environment > paste in the url
    Use the function as needed.
    Note: Initialize the defaults in HyGraph > Settings > API access to fix the error in API call to give permissions.
22. For error encountered while rendering images:
    Add in next.config.js: nextConfig = {
        images: {
            domains: ['media.graphassets.com']
        }
    }
23. Add react icons dependency for icons > npm install react-icons --save
24. 
