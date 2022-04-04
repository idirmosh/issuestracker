# IssueTracker Monorepo

This is a side project i built, it is basiclly, both front-end and back-end are in the same dir all made possible with [Turborepo ](https://github.com/vercel/turborepo),

## Install and Run in development.

1. Clone this repository locally `$ git clone https://github.com/idirmosh/issuestracker.git`
2. Install the dependencies. Inside the root `$ yarn install`
3. Change **DATABASE_URL** inside `.env`
4. Run prisma generate inside **apps/api** `$ yarn run postinstall`
5. Start all applications. `$ yarn run dev`

## Project flow

Basicly you create an account, you login with that account and create projects, projects are public which means every project is staticly generated and has a public URL which can be accessed publicly, other user can report issues on a spesific project and contribute either by comments or voting if they have the same issue.

## Project structure

We have 2 important folders inside the root directory:

- **apps:** contains all apps,
  - **api:** graphql api built with nextjs api routes and prisma.
  - **web:** web app built with nextjs tailwindcss.
- **packages:** contains shared packages and libs etc...
  - **config:** contains shared configs.
  - **tsconfig:** contains shared typescript configs.
  - **scripts:** contains a script to generate rsa key pairs.
  - **ui:** shared ui library.
