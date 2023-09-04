<div align="center">
  <a href="https://courserai.echoasync.com"> 
  <img src="https://i.imgur.com/jvQMhoE.gif">
  </a>
  <h3>Courserai</h3>
  <p>A web-app with which users can generate their own courses based on simple topics and keywords using the power of AI</p>
</div>

### Tech Stack

#### Frontend

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![nextjs](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn](https://img.shields.io/badge/SHADCN/UI-000000?style=for-the-badge&logo=shadertoy&logoColor=white)

#### User authentication and database

![Google OAuth](https://img.shields.io/badge/Google%20OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-1B222D?style=for-the-badge&logo=prisma&logoColor=white)
![PlanetScale](https://img.shields.io/badge/PlanetScale-1B222D?style=for-the-badge&logo=planetscale&logoColor=white)

#### Web APIs

![Youtube API](https://img.shields.io/badge/Youtube%20API-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![OpenAI API](https://img.shields.io/badge/OpenAI%20API-12A382?style=for-the-badge&logo=openai&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![unsplash](https://img.shields.io/badge/Unsplash-000000?style=for-the-badge&logo=unsplash&logoColor=white)

#### Deployment

![DigitalOcean](https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white)
![Github Actions](https://img.shields.io/badge/Github%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

### Run Locally

1. Clone the repo

   ```bash
   git clone https://github.com/EchooWww/courserai
   ```

2. Go to the project directory

   ```bash
   cd courserai
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Create an `.env` file in the root directory and add your API keys

   ```bash
   DATABASE_URL=
   NEXTAUTH_SECRET=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   OPENAI_API_KEY=
   UNSPLASH_API_KEY=
   YOUTUBE_API_KEY=
   STRIPE_API_KEY=
   NEXTAUTH_URL=
   STRIPE_WEBHOOK_SECRET=
   ```

5. Run the development server

   ```bash
   npm run dev
   ```

### Folder Structure

```bash
├── README.md
├── components.json
├── docker-compose.yml ## docker-compose file for prisma
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── prisma ## prisma schema for database setup
│   └── schema.prisma
├── src
│   ├── app ## Routes for the whole app with App Router
│   │   ├── api ## api routes to handle backend requests
│   │   │   ├── auth ## route for user authentication
│   │   │   │   └── [...nextauth]
│   │   │   │       └── route.ts
│   │   │   ├── chapter ## route for chapter creation backend
│   │   │   │   └── getInfo
│   │   │   │       └── route.ts
│   │   │   ├── course ## route for course creation backend
│   │   │   │   └── createChapters
│   │   │   │       └── route.ts
│   │   │   ├── stripe ## route for stripe subscription backend
│   │   │   │   └── route.ts
│   │   │   └── webhook
│   │   │       └── route.ts
│   │   ├── course ## course page
│   │   │   └── [...slug]
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   ├── create ## course creation page
│   │   │   ├── [courseId]
│   │   │   │   ├── loading.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── gallery ## gallery page
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── settings
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── components ## reusable components
│   │   ├── ChapterCard.tsx
│   │   ├── ConfirmChapters.tsx
│   │   ├── CourseSideBar.tsx
│   │   ├── CreateCourseForm.tsx
│   │   ├── GalleryCourseCard.tsx
│   │   ├── MainVideoSummary.tsx
│   │   ├── Navbar.tsx
│   │   ├── Providers.tsx
│   │   ├── QuizCards.tsx
│   │   ├── SignInButton.tsx
│   │   ├── SubscriptionAction.tsx
│   │   ├── SubscriptionButton.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── UserAccountNav.tsx
│   │   ├── UserAvatar.tsx
│   │   └── ui ## ui components from shadcn
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── separator.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── use-toast.ts
│   ├── lib ## reusable functions
│   │   ├── auth.ts ## authentication functions
│   │   ├── db.ts ## database functions
│   │   ├── gpt.ts ## openai prompt functions
│   │   ├── stripe.ts ## stripe functions
│   │   ├── subscription.ts ## subscription functions
│   │   ├── unsplash.ts ## unsplash functions
│   │   ├── utils.ts
│   │   └── youtube.ts ## youtube functions
│   └── validators
│       └── course.ts ## course validation functions to be used in the create course form
├── tailwind.config.js
├── tailwind.config.ts ## tailwindcss config file
└── tsconfig.json
```

### References

[Eloitt Chong](https://www.youtube.com/watch?v=EGW2HS2tqAQ) | [Shadcn](https://ui.shadcn.com/) | [NextAuth.js](https://next-auth.js.org/) | [OpenAI](https://openai.com/) | [Stripe](https://stripe.com/) | [Unsplash](https://unsplash.com/) | [Youtube](https://developers.google.com/youtube/v3) | [Prisma](https://www.prisma.io/) | [PlanetScale](https://planetscale.com/) | [DigitalOcean](https://www.digitalocean.com/) | [Github Actions](https://docs.github.com/en/actions)
