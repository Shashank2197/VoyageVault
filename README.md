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
- Expo
- TypeScript
- Expo Router
- React Native StyleSheet
- Lucide React Native

### Design & UI

- Outfit — display and heading typography
- Inter — body typography
- `expo-linear-gradient` — VoyageVault primary gradient
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

## 📁 Architecture Direction

Expo Router is responsible for application routing, while feature implementation will live under `src`.

```text
VoyageVault/
├── app/                    # Expo Router routes
├── assets/
│   └── icons/
│       └── social/
├── src/
│   ├── components/         # Shared reusable UI
│   ├── features/           # Product feature modules
│   ├── services/           # Firebase / integrations
│   ├── shared/             # Shared hooks, types and utilities
│   ├── store/              # Global state composition when required
│   └── theme/              # VoyageVault design system
└── README.md
```

The project follows a feature-first approach: folders, libraries, state, and services are added when a feature actually needs them rather than generating the entire architecture upfront.

---

## 🎯 Current Milestone

The technical and reusable UI foundation is now ready for real screen implementation.

The next development milestone is the **Authentication module**, beginning with the Login screen from the Figma blueprint.

```text
Authentication
├── Login
├── Register
├── Forgot Password
├── Reset Password
├── Verify Email
├── Google Sign-In
└── Apple Sign-In
```

Authentication UI will be implemented first, followed by the required navigation and Firebase authentication integration.

---

## 🗺️ Roadmap

```text
Sprint 0  Discovery & Foundation                    ✅
Sprint 1  Technical Foundation & Project Setup      🚧
Sprint 2  Authentication
Sprint 3  Application Shell & Home
Sprint 4  Trips
Sprint 5  Trip Planner
Sprint 6  Expense Splitting
Sprint 7  Gallery & Photos
Sprint 8  Profile & Supporting Features
Sprint 9  Integration & Polish
Sprint 10 Testing & Release
```

The roadmap is intentionally flexible and may evolve as features are implemented and validated.

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

**Current phase:** Technical foundation complete enough to begin production screen development.

**Next:** Authentication → Login Screen.
