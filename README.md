# 🤖️ Courserai

### Introduction

Courserai is a web application that allows users to generate their own customized course based on the topic and units they provide. For each course, the application will generate a list of videos, summary, and quizzes that are relevant to the topic and units provided by the user.

### Tech Stack

The application is built using Next.js 13, React 18 for the frontend and backend, Google OAuth for user authentication, Prisma for data modeling and database access, and planet-scale database FaunaDB for data storage. For the UI, the application uses Tailwind CSS and Chadcn UI.

For course generation, the app uses OpenAI's GPT-3.5-turbo model to generate Youtube search queries based on user input, and then use the Youtube API to fetch the videos. The app also uses youtube-transcript-api to fetch the transcript of each video, and then use OpenAI's GPT-3.5-turbo model to generate a summary and quiz questions based on the transcript.

For hosting, the app is serverlessly deployed with DigitalOcean, with Github Actions for CI/CD.
