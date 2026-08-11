# ✈️ VoyageVault

### From Plans to Memories.

VoyageVault is a collaborative travel companion designed to bring trip planning, shared expenses, and travel memories into one place.

---

## 🌍 What is VoyageVault?

Planning a trip often means switching between multiple applications for budgets, itineraries, checklists, shared expenses, and photos.

VoyageVault aims to bring these experiences together into a single collaborative travel application.

---

## ✨ Core Features

### 🗺️ Trip Planning

- Create and manage trips
- Plan budgets
- Build itineraries
- Maintain checklists
- Add collaborative notes
- Manage trip members

### 💰 Expense Splitting

- Add transactions
- Track shared expenses
- Calculate balances
- See who owes whom
- Record settlements

### 📸 Shared Memories

- Create trip albums
- Add and manage photos
- Collaborate with trip members
- Integrate with Google Photos where supported

### 👥 Collaboration

- Invite family and friends
- Collaborate on trip planning
- Share expenses and memories

### 👤 Profile

- Manage account information
- Manage preferences
- Manage connected services

---

## 🧭 Application Navigation

VoyageVault uses five primary navigation sections:

| Section    | Purpose                          |
| ---------- | -------------------------------- |
| 🏠 Home    | Trip overview and activity       |
| 🧳 Trips   | Create and manage trips          |
| 📸 Gallery | Shared trip memories             |
| 💰 Split   | Expenses and settlements         |
| 👤 Profile | Account and application settings |

Trip-specific functionality is organized within individual trips rather than becoming separate global navigation items.

```text
Trip
├── Overview
├── Planner
│   ├── Budget
│   ├── Itinerary
│   ├── Checklist
│   └── Notes
├── Members
├── Expenses
└── Gallery
```

---

## 🏗️ Technology Stack

### Mobile

- React Native
- Expo SDK 54
- TypeScript
- Expo Router
- React Native StyleSheet
- Lucide React Native

### Forms & Validation

- React Hook Form
- Zod
- `@hookform/resolvers`

### Design & UI

- Outfit — display and heading typography
- Inter — body typography
- `expo-linear-gradient` — VoyageVault primary gradient
- `expo-font` — font loading
- `expo-splash-screen` — startup splash control
- Centralized design tokens for colors, typography, spacing, radius, shadows, and themes
- Separate style files for screens and components

### Backend & Services — Initial

- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Cloud Messaging

> Firebase will be introduced feature-by-feature. Screens will not depend directly on Firebase; services will sit between application features and infrastructure so a future Node.js / Express migration is easier to manage.

### Future Backend

The initial Firebase implementation is being structured with future migration in mind.

A dedicated backend using Node.js and Express.js may be introduced gradually as the project grows.

---

## 🎨 Design System

The VoyageVault UI is based on the project Figma blueprint:

https://www.figma.com/design/PPmAgavcomwTKhx3aMnnZn/Untitled

The Figma file is treated as the visual blueprint for the application. Product requirements and implementation constraints can refine individual flows while preserving the established VoyageVault visual language.

### Current Visual Foundation

```text
Primary Gradient
Indigo → Violet → Pink

Dark Navy
#0D1117

Charcoal
#1C2333

Off-White
#F8F9FA

Semantic Colors
Success → #10B981
Warning → #F59E0B
Error   → #EF4444

Typography
Outfit → Display / Headings
Inter  → Body
```

The project uses centralized theme tokens instead of repeating raw design values across individual screens.

---

## 🚧 Development Progress

### Sprint 0 — Discovery & Foundation ✅

Sprint 0 focused on deciding what VoyageVault should be before implementation began.

**What was done:** product scope, primary features, five-tab navigation, Firebase-first architecture, future backend migration strategy, brand identity, design system direction, reusable component planning, screen inventory, and the Figma UI blueprint.

**Why:** establishing the product and architecture first reduces unnecessary rewrites once feature development begins.

### Sprint 1 — Technical Foundation & Project Setup 🚧

#### 1.1 Project Initialization ✅

**What:** initialized the application with React Native, Expo, TypeScript, and Expo Router; removed the generated Expo demo routes/components; retained a clean file-based router foundation.

**Why:** this gives VoyageVault a lightweight native foundation without carrying demo code into the real application.

The current development project uses Expo SDK 54 so the app can be tested on a physical iPhone through Expo Go during development.

#### 1.2 Design Foundation ✅

The Figma design system has been translated into reusable code tokens.

```text
src/theme/
├── colors.ts
├── typography.ts
├── spacing.ts
├── radius.ts
├── shadows.ts
├── theme.ts
└── index.ts
```

**Colors:** centralized brand, semantic, light-theme, dark-theme, and gradient values so screens do not contain repeated hard-coded colors.

**Typography:** added Outfit for headings/display text and Inter for body text to match the Figma visual hierarchy.

**Spacing:** introduced the Figma spacing scale (`4, 8, 12, 16, 20, 24, 32`) for consistent layout rhythm.

**Radius:** introduced reusable radius tokens (`4, 8, 12, 16, 20`) plus a fully-rounded utility value.

**Shadows:** created shared elevation presets for cards, floating surfaces, and overlays.

**Theme composition:** combined all design tokens into `lightTheme` and `darkTheme`, giving components one consistent theme API.

```ts
theme.colors;
theme.spacing;
theme.radius;
theme.shadows;
theme.typography;
```

**Why:** screens and components should consume a design system rather than define their own visual rules. This also prepares the application for Light, Dark, and System appearance modes.

#### 1.3 Reusable UI Foundation ✅

The first shared components have been implemented from patterns used repeatedly in the Figma designs.

```text
src/components/
├── Button/
├── Input/
├── DividerWithText/
└── SocialAuthButton/
```

**Button:** reusable primary gradient and secondary button foundation with sizing, loading, disabled, icon, and full-width support.

**Input:** reusable labeled input with focus/error states, icons, secure-entry support, and password visibility controls.

**DividerWithText:** reusable divider for patterns such as `or continue with`.

**SocialAuthButton:** reusable social authentication button designed to accept official provider assets. Official Google and Apple branding assets are kept separate from the Lucide application icon system.

**Why:** building these primitives once prevents Login, Register, Forgot Password, Trips, Gallery, and other screens from duplicating the same UI logic and styling.

#### 1.4 Login Screen ✅

The first production authentication screen has been implemented from the Figma design.

**Completed:**

- Expo Router Login route
- Figma-aligned Login UI
- Reusable Email and Password inputs
- Password visibility toggle
- Forgot Password action
- Google and Apple social-auth UI
- Sign Up navigation
- Real-device spacing and keyboard refinement
- React Hook Form integration
- Zod validation
- Loading/submission state

The Login form currently validates input locally. Actual account verification will be connected through Firebase Authentication later.

#### 1.5 App Launch & Splash Foundation ✅

The application startup foundation has been prepared around the VoyageVault native splash and font initialization.

**Completed / established:**

- VoyageVault splash branding asset
- Expo splash configuration
- Splash held while Outfit and Inter fonts initialize
- Fade behavior configured
- Startup structure prepared for later Firebase session restoration

Firebase session restoration is intentionally deferred until authentication infrastructure is connected so the app does not maintain a fake authentication-loading state.

#### 1.6 Authentication UI 🚧

##### 1.6.1 Create Account ✅

The Create Account screen has been implemented using the same reusable UI foundation as Login.

**Completed:**

- Full Name field
- Email field
- Password field
- Confirm Password field
- Password visibility controls
- Dynamic password-strength indicator
- Google and Apple social-auth UI
- Login ↔ Register navigation
- React Hook Form integration
- Zod validation
- Valid-form submission flow prepared for Firebase integration

##### Validation Rules

Registration validation is intentionally handled in the schema rather than directly inside the UI.

```text
Full Name
├── Required
├── Minimum 2 characters
├── Maximum 60 characters
└── Numbers are not allowed

Email
├── Required
└── Must be a valid email address

Password
├── Required
├── 8–64 characters
├── At least 1 uppercase letter
├── At least 1 lowercase letter
├── At least 1 number
├── At least 1 special character
└── Spaces are not allowed

Confirm Password
└── Must match Password
```

Password strength is separate from password validity and provides visual guidance while typing.

```text
Weak    → Error / Red
Fair    → Warning / Orange
Good    → Success / Green
Strong  → Success / Green
```

The bar count and label distinguish Good from Strong while both reuse the VoyageVault Success color.

##### 1.6.2 Forgot Password ✅

The Forgot Password screen has been implemented from the Figma design.

**Completed:**

- Expo Router `forgot-password` route
- Back navigation
- Email Address field
- Email validation through React Hook Form + Zod
- Send Reset Link submission state
- Back to Login action
- Login → Forgot Password navigation
- Mobile keyboard behavior consistent with the other authentication screens

For now a valid submission is handled locally. Firebase will later replace the temporary submission handler and send the actual password reset email.

##### 1.6.3 Verify Your Email ⏭️ Next

The next authentication screen will implement the Figma Verify Your Email flow with:

- Open Email App
- Resend Email
- Back to Login

After that:

```text
1.6.4 Reset Password
1.6.5 Onboarding
      ├── Plan the Journey
      ├── Split the Expenses
      └── Keep the Memories
1.6.6 Full authentication UI/navigation test
```

---

## 🧪 Current Form Architecture

Authentication forms currently follow this responsibility split:

```text
React Hook Form
→ Form values, submission state, Controllers

Zod
→ Input and cross-field validation

Reusable Input / Button components
→ Presentation and interaction

Screen
→ Navigation and submit orchestration

authService
→ Added during Firebase integration

Firebase Authentication
→ Real account/session operations
```

This keeps validation and backend concerns outside reusable visual components.

---

## 📁 Architecture Direction

Expo Router is responsible for application routing, while feature implementation lives under `src`.

```text
VoyageVault/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── (auth)/
│       ├── login.tsx
│       ├── register.tsx
│       └── forgot-password.tsx
│
├── assets/
│   ├── branding/
│   │   ├── voyagevault-logo.png
│   │   └── voyagevault-splash.png
│   └── icons/
│       └── social/
│           ├── google.png
│           └── apple.png
│
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── DividerWithText/
│   │   └── SocialAuthButton/
│   │
│   ├── features/
│   │   └── auth/
│   │       ├── schemas/
│   │       │   ├── login.schema.ts
│   │       │   ├── register.schema.ts
│   │       │   └── forgotPassword.schema.ts
│   │       ├── screens/
│   │       │   ├── LoginScreen/
│   │       │   ├── RegisterScreen/
│   │       │   └── ForgotPasswordScreen/
│   │       └── utils/
│   │           └── passwordStrength.ts
│   │
│   ├── services/            # Firebase / integrations
│   ├── shared/              # Shared hooks, types and utilities
│   ├── store/               # Global state composition when required
│   └── theme/               # VoyageVault design system
│
└── README.md
```

The project follows a feature-first approach: folders, libraries, state, and services are added when a feature actually needs them rather than generating the entire architecture upfront.

### Styling Convention

Component and screen styles are intentionally kept separate from JSX.

```text
ComponentName/
├── ComponentName.tsx
├── ComponentName.styles.ts
├── ComponentName.types.ts
└── index.ts
```

Theme-aware styles follow the pattern:

```ts
createStyles(theme);
```

A custom `ThemeProvider` and `useAppTheme()` hook will later provide the active Light / Dark / System theme without changing individual component style files.

---

## 🎯 Current Milestone

VoyageVault has moved from technical foundation work into the Authentication module.

```text
Authentication
├── Login                         ✅
├── Create Account               ✅
├── Forgot Password              ✅
├── Verify Your Email            ⏭️ Next
├── Reset Password
├── Onboarding
│   ├── Plan the Journey
│   ├── Split the Expenses
│   └── Keep the Memories
├── Google Sign-In               UI prepared
└── Apple Sign-In                UI prepared
```

Authentication UI and navigation are being completed before Firebase integration.

The next larger milestone after the remaining authentication screens is:

```text
Firebase Authentication
↓
Redux authentication state
↓
Session restoration and route protection
↓
Application Shell & Home
```

---

## 🗺️ Roadmap

```text
Sprint 0  Discovery & Foundation                    ✅
Sprint 1  Technical Foundation & Project Setup      🚧
Sprint 2  Authentication                            🚧
Sprint 3  Application Shell & Home
Sprint 4  Trips
Sprint 5  Trip Planner
Sprint 6  Expense Splitting
Sprint 7  Gallery & Photos
Sprint 8  Profile & Supporting Features
Sprint 9  Integration & Polish
Sprint 10 Testing & Release
```

### Authentication Roadmap

```text
Authentication UI
├── Login                         ✅
├── Create Account               ✅
├── Forgot Password              ✅
├── Verify Your Email            ⏭️
├── Reset Password
├── Onboarding
└── Full UI/navigation test

Firebase Authentication
├── Firebase project/config
├── authService abstraction
├── Email registration
├── Email verification
├── Email/password login
├── Forgot/reset password
├── Logout
├── Google authentication
├── Apple authentication
└── Firebase error handling

Global Authentication
├── Redux auth state
├── Current user
├── Session restoration
├── Onboarding completion state
└── Auth-aware routing
```

---

## 🧠 Project Philosophy

VoyageVault is being developed incrementally.

Each module follows the same general process:

```text
Requirement
↓
Figma reference
↓
UX / implementation decision
↓
Required structure and dependencies
↓
Reusable components
↓
Screen implementation
↓
State / service integration
↓
Testing
↓
Commit
```

Dependencies and folders are introduced only when they are required by the feature currently being built.

---

## 📌 Project Status

**Current phase:** Authentication UI and navigation.

**Completed recently:** Login, Create Account, registration/password validation, password-strength feedback, Forgot Password, and splash/startup foundation.

**Next:** Authentication → Verify Your Email.
