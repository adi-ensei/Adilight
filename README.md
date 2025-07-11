🌟 Adilight
Tagline: Don’t miss anything — a clean, media-sharing app for discovering and saving highlights.

🚀 Overview
Adilight is an Expo-based mobile app that lets users browse, post, comment, and bookmark images. Key differentiators:

Modern UI/UX with seamless navigation and media display.

Full backend with Convex, using Clerk for secure authentication.

Lightweight, responsive, image-first feature set.

🧩 Tech Stack
Frontend: Expo (React Native)

Authentication: Clerk

Backend & Data: Convex

Design: Tailwind-styled or custom CSS-in-JS 



📸 Screenshots & Feature Tour
1. Splash / Login Screen

"Continue with Google" powered by Clerk for OAuth—clean, simple onboarding.

2. Bookmarks Tab

Displays saved posts in a grid. Pull-to-refresh and quick-profile navigation included.

3. New Post Screen

Tap + → select an image → add caption → upload. Integrates image picker and uploads to Convex.

4. User Profile (other user)

Shows post count, follower/following stats, grid of their posts, and a "Follow" button.

5. Comments Section

Real-time chat-like comment feed with input bar. Syncs instant UI updates via Convex subscriptions.

6. My Profile (current user)

Shows own avatar, post stats, editable profile (name/bio/photo) inline at bottom.

✅ Key Features
Feature	Description
Auth	Full Auth/Onboarding via Clerk (Google sign-in)
Backend	Everything powered by Convex: real-time storage, queries, and subscriptions
Post Management	Create, view, delete own posts; like/comment on others
Bookmarks	Save favorite posts in a personal collection
Profiles	View user profiles with follow/unfollow
Realtime Comments	Live updates without manual refresh
Image Handling	Local image picker + upload support, preview before posting

🧪 Backend & Authentication Details
Clerk handles all user sign-in, sessions, and secure token management.

Convex provides realtime database and serverless functions:

Collections: users, posts, comments, bookmarks, follows

Queries: feed, bookmarks feed, profile posts, comment threads

Mutation functions: addPost, addComment, toggleBookmark, followUser

Real-time updates via subscriptions

📁 Code Highlights
Screens/*: Organized screens: Home, Bookmarks, NewPost, Profile, Comments

Components/… Reusable parts: PostCard, CommentInput, ProfileHeader

convex/functions/ — server-side logic for business rules

convex/queries/ — client queries and subscriptions

AuthContext.tsx connects Clerk sessions with Convex user identity
