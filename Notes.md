### Next.js App Router

In Next 13, there's a new router that's been introduced. It's called the Next router.

In short, we put our pages under the `app` directory and the router will take care of the rest. For example, if we create a folder called `app/about` and put an `page.js` file in it, then we can access the page at `/about`.

> 💡 App Router takes priority over the old Pages Router

### Shadcn component

Shadcn is a component library for React, built by Shadcn. It consists of a set of high-quality React components out of the box.

- First we need to install the library:

```bash
npx shadcn-ui@latest
## configure in the terminal
✔ Would you like to use TypeScript (recommended)? … no / ✔️yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Where is your global CSS file? … src/app/global.css ## Delete our global.css file and Shadcn will generate a new one at this location
✔ Would you like to use CSS variables for colors? … no / ✔️yes
✔ Where is your tailwind.config.js located? … tailwind.config.js
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? … no / ✔️yes
✔ Write configuration to components.json. Proceed? … yes
```

- When we install Shadcn, it will create a `components.json` file in the root of our project. This file contains the configuration for Shadcn to work properly. We can also add our own custom components to this file.

- When we need a component, we should run npx again

```bash
## The button component would be added in our component folder, and we can use it elsewhere by importing it
npx shadcn-ui@latest add button
```

### planetscale.com and prisma

We can use Prisma to help the next auth connect to a database.
First run `npm install prisma --save-dev`
And then `npm i @prisma/client`
Finally, run `npx prisma init` to initialize Prisma. And there will be a `prisma` folder created in our project with the schema.prisma file in it, which contains all the tables in our mySQL database.

[Nextauth for prisma](https://next-auth.js.org/v3/adapters/prisma)

When we change the schema.prisma file, we need to run `npx prisma db push` to update the database.

### Next-auth

First, install next-auth and its dependencies:

```bash
npm install next-auth @next-auth/prisma-adapter
```

Then, we add `auth.ts` to our `lib` folder. This file contains the configuration for next-auth.

Last, create a file called `[...nextauth].js` in the `pages/api/auth` directory. Thanks to next app router, all the routes under `pages/api` will be handled by this file.

### Shortcuts

`tsrafce` to create a react functional component in typescript
