This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Folder Structure

```
.
├── public/ # Static assets (images, fonts, etc.)
│ └── ...
├── src/
│ ├── app/ # === App Router Root ===
│ │ ├── (main)/ # Route Group: Public-facing pages
│ │ │ ├── books/
│ │ │ │ ├── [bookId]/ # Dynamic: /books/some-book-id
│ │ │ │ │ └── page.tsx # Book Details page
│ │ │ │ └── page.tsx # Books List page (Search/Filter)
│ │ │ ├── authors/
│ │ │ │ ├── [authorId]/ # Dynamic: /authors/some-author-id
│ │ │ │ │ └── page.tsx # Author Details page
│ │ │ │ └── page.tsx # Authors List page
│ │ │ ├── adaptations/ # /adaptations (Movies/Series)
│ │ │ │ └── page.tsx
│ │ │ ├── quotes/ # /quotes
│ │ │ │ └── page.tsx
│ │ │ ├── forums/
│ │ │ │ ├── [topicId]/ # Dynamic: /forums/some-topic-id
│ │ │ │ │ └── page.tsx # Specific Forum Topic page
│ │ │ │ └── page.tsx # Forum List page
│ │ │ ├── layout.tsx # Shared layout for public pages (e.g., main header/footer)
│ │ │ └── page.tsx # Home page (/)
│ │ │
│ │ ├── (auth)/ # Route Group: Authentication pages
│ │ │ ├── login/ # /login
│ │ │ │ └── page.tsx
│ │ │ ├── signup/ # /signup
│ │ │ │ └── page.tsx
│ │ │ └── layout.tsx # Optional: Minimal layout for auth forms
│ │ │
│ │ ├── (dashboard)/ # Route Group: User Dashboard (protected)
│ │ │ ├── dashboard/ # Base path /dashboard
│ │ │ │ ├── profile/ # /dashboard/profile
│ │ │ │ │ └── page.tsx
│ │ │ │ ├── tracking/ # /dashboard/tracking
│ │ │ │ │ └── page.tsx
│ │ │ │ ├── discussions/ # /dashboard/discussions
│ │ │ │ │ └── page.tsx
│ │ │ │ ├── upgrade/ # /dashboard/upgrade
│ │ │ │ │ └── page.tsx
│ │ │ │ └── page.tsx # Optional: Main dashboard overview page (/dashboard)
│ │ │ └── layout.tsx # Specific layout for dashboard (e.g., sidebar nav, user menu)
│ │ │
│ │ ├── api/ # === API Routes (Serverless Functions) ===
│ │ │ ├── auth/ # Auth-related endpoints (e.g., custom token handling if needed)
│ │ │ │ └── ...
│ │ │ ├── books/ # API for book data, reviews, etc.
│ │ │ │ └── route.ts
│ │ │ ├── users/ # API for user profiles, tracking data
│ │ │ │ └── route.ts
│ │ │ ├── forums/ # API for forum posts, comments
│ │ │ │ └── route.ts
│ │ │ └── ... # Other specific API routes
│ │ │
│ │ ├── layout.tsx # === Root Layout (Mandatory) === (contains <html>, <body>)
│ │ ├── globals.css # Global styles
│ │ ├── loading.tsx # Optional: Global loading state UI
│ │ ├── error.tsx # Optional: Global error boundary UI
│ │ └── not-found.tsx # Optional: Global 404 page UI
│ │
│ ├── components/ # === Reusable React Components ===
│ │ ├── ui/ # Shadcn UI components (installed here), other base UI elements (Button, Input, Card etc.)
│ │ │ ├── button.tsx
│ │ │ ├── card.tsx
│ │ │ └── ... # Populated by `npx shadcn-ui add ...`
│ │ ├── features/ # Components specific to app features (composed from ui/)
│ │ │ ├── book/ # Components related to books (BookCard, BookSearch, ReviewList)
│ │ │ ├── user/ # Components related to users (UserProfileForm, FavoriteBooksList)
│ │ │ ├── forum/ # Components related to forums (TopicList, PostEditor)
│ │ │ ├── auth/ # Components for login/signup forms
│ │ │ └── tracking/ # Components for book tracking (ProgressTracker, Wishlist)
│ │ ├── layout/ # Layout-specific components (MainHeader, DashboardSidebar, Footer)
│ │ └── common/ # Highly shared components not fitting elsewhere (e.g., LoadingSpinner, ErrorMessage)
│ │
│ ├── lib/ # === Utilities, Helpers, SDKs ===
│ │ ├── firebase.ts # Firebase SDK initialization and config export
│ │ ├── utils.ts # General utility functions (formatting, validation etc.) - DRY
│ │ ├── constants.ts # Application-wide constants (enums, keys) - DRY
│ │ ├── actions.ts # Optional: Server Actions (if used for mutations/forms)
│ │ └── hooks.ts # General purpose non-React hooks (if any)
│ │
│ ├── hooks/ # === Custom React Hooks === (Encapsulate stateful/side-effect logic - SRP, DRY)
│ │ ├── useAuth.ts # Hook for Firebase authentication state and actions
│ │ ├── useBookData.ts # Hook for fetching/managing book data
│ │ ├── useUserData.ts # Hook for fetching/managing user profile/tracking data
│ │ └── ... # Other feature-specific hooks
│ │
│ ├── context/ # === React Context === (For global/shared state if needed)
│ │ ├── AuthProvider.tsx # Context provider wrapping app or relevant parts for auth state
│ │ └── ... # Other contexts (e.g., ThemeContext)
│ │
│ ├── types/ # === TypeScript Definitions === (Modularity, Interfaces - ISP)
│ │ ├── index.ts # Barrel file to export all types
│ │ ├── common.ts # Common types used across domains
│ │ ├── book.ts # Interfaces for Book, Review, etc.
│ │ ├── user.ts # Interfaces for User, Profile, Tracking data, etc.
│ │ ├── author.ts # Interfaces for Author
│ │ ├── forum.ts # Interfaces for Forum, Topic, Post, Comment
│ │ └── firebase.ts # Types related to Firebase interactions if specific needed
│ │
│ └── middleware.ts # === Next.js Middleware === (e.g., Authentication checks for /dashboard)
│
├── .env.local # Local Environment Variables (Firebase keys, API secrets)
├── .eslintrc.json # ESLint config
├── .gitignore # Git ignore config
├── next.config.mjs # Next.js config
├── package.json # Dependencies & Scripts
├── postcss.config.mjs # PostCSS config (for Tailwind)
└── tsconfig.json # TypeScript config
```
