# ✈️ VoyageVault

### From Plans to Memories.

VoyageVault is a collaborative travel companion designed to bring **trip planning**, **shared expenses**, and **travel memories** into one place.

---

## 🌍 What is VoyageVault?

Planning a trip often means switching between multiple applications for budgets, itineraries, checklists, shared expenses, and photos.

VoyageVault aims to bring these experiences together into a single collaborative travel application for families, friends, and travel groups.

---

## ✨ Core Features

### 🗺️ Trip Planning

- Create and manage trips
- Plan budgets
- Build itineraries
- Maintain checklists and packing lists
- Add collaborative notes
- Manage trip members

### 💰 Expense Splitting

- Add and edit shared expenses
- Support equal, exact, and percentage-based splits
- Track balances
- See who owes whom
- Record settlements
- Maintain transaction and settlement history

> VoyageVault V1 records settlements inside the app. It does not move real money between users.

### 📸 Shared Memories

- Create trip albums
- Add and manage photos
- Collaborate with trip members
- Associate memories with trips
- Integrate with Google Photos where supported

### 👥 Collaboration

- Invite family and friends
- Collaborate on trip planning
- Share expenses
- Share travel memories

### 👤 Profile

- Manage account information
- Manage preferences
- Manage connected services
- Manage authentication providers and integrations

---

## 🧭 Application Navigation

VoyageVault uses five primary navigation sections:

| Section    | Purpose                                           |
| ---------- | ------------------------------------------------- |
| 🏠 Home    | Trip overview, quick actions, and recent activity |
| 🧳 Trips   | Create and manage trips                           |
| 📸 Gallery | Shared trip memories                              |
| 💰 Split   | Expenses, balances, and settlements               |
| 👤 Profile | Account and application settings                  |

Trip-specific functionality lives inside each trip instead of becoming separate global navigation tabs.

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
- `react-native-safe-area-context` — device-safe layouts for iOS and Android
- Centralized design tokens for colors, typography, spacing, radius, shadows, and themes
- Separate style files for screens and components

### Backend & Services — Initial

- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Cloud Messaging

> Firebase will be introduced feature-by-feature. Screens should not depend directly on Firebase. Services will sit between application features and infrastructure so a future Node.js / Express migration remains manageable.

### Future Backend

The initial Firebase implementation is being structured with future migration in mind.

A dedicated backend using **Node.js + Express.js** may be introduced gradually as the project grows.

---

## 🎨 Design System

VoyageVault follows the Figma design blueprint and the design handoff PDF stored inside the repository.

### Project Documentation

- 🎨 [Open the VoyageVault UI Design PDF](./docs/design/VoyageVault-UI-Design.pdf)
- 🧪 [Open the Authentication & Onboarding Test Cases](./docs/testing/Authentication-Onboarding-Test-Cases.md)
- 🔗 [Open the live Figma design](https://www.figma.com/design/PPmAgavcomwTKhx3aMnnZn/Untitled)

> These are relative Markdown links. On GitHub, clicking them opens the file inside the repository as long as the file path and capitalization match exactly.

The Figma file is treated as the visual blueprint for the application. Product requirements and implementation constraints may refine individual flows while preserving the established VoyageVault visual language.

### Current Visual Foundation

```text
Primary Gradient
Indigo → Violet → Pink

Indigo  #5546F5
Violet  #8B3FEF
Pink    #C13CDE

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
Info    → #2387F5

Typography
Outfit → Display / Headings
Inter  → Body

Spacing
4 / 8 / 12 / 16 / 20 / 24 / 32

Radius
4 / 8 / 12 / 16 / 20
```

The project uses centralized theme tokens instead of repeating raw design values across individual screens.

---

## 🚧 Development Progress

### Sprint 0 — Discovery & Foundation ✅

Sprint 0 focused on deciding what VoyageVault should be before implementation began.

**Completed:**

- Product scope
- Core feature pillars
- Five-tab navigation model
- Firebase-first architecture
- Future Node.js / Express migration direction
- Brand identity
- Design-system direction
- Reusable component planning
- Screen inventory
- Figma UI blueprint

---

### Sprint 1 — Technical Foundation & Project Setup 🚧

#### 1.1 Project Initialization ✅

- React Native + Expo project initialized
- TypeScript enabled
- Expo Router configured
- Generated Expo demo screens/components removed
- Clean project foundation established
- Expo SDK 54 selected for physical-device Expo Go testing

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

**Implemented:**

- Centralized brand colors
- Primary gradient tokens
- Semantic colors
- Light-theme foundation
- Dark-theme foundation
- Outfit + Inter typography
- Spacing scale
- Radius scale
- Shared shadow/elevation presets
- Theme composition through `lightTheme` and `darkTheme`

```ts
theme.colors;
theme.spacing;
theme.radius;
theme.shadows;
theme.typography;
```

A custom `ThemeProvider` and `useAppTheme()` hook will later provide Light / Dark / System switching without rewriting individual screen styles.

#### 1.3 Reusable UI Foundation ✅

```text
src/components/
├── Button/
├── Input/
├── DividerWithText/
└── SocialAuthButton/
```

**Button**

- Primary gradient variant
- Secondary outline variant
- Loading state
- Disabled state
- Optional icons
- Full-width support

**Input**

- Label
- Left/right icons
- Focus state
- Error state
- Secure-text support
- Password visibility controls
- Correct vertical text alignment on iOS/Android

**DividerWithText**

- Shared `or continue with` UI pattern

**SocialAuthButton**

- Generic reusable social-auth button
- Official Google and Apple assets stored separately from Lucide UI icons

#### 1.4 Login Screen ✅

The Login screen has been implemented from the Figma design.

**Completed:**

- Expo Router Login route
- Figma-aligned Login UI
- Email and password fields
- Password visibility toggle
- Forgot Password navigation
- Google and Apple social-auth UI
- Create Account navigation
- React Hook Form integration
- Zod validation
- Submission/loading foundation
- Real-device keyboard refinement
- iOS interactive keyboard dismissal
- Consistent mobile spacing

> Login currently performs local form validation only. Firebase Authentication will provide real credential verification later.

#### 1.5 App Launch & Splash Foundation ✅

**Completed / established:**

- VoyageVault splash branding asset
- Expo native splash configuration
- Outfit and Inter font initialization
- Splash retained while fonts initialize
- Fade behavior configured
- Startup structure prepared for Firebase session restoration

Firebase session restoration is intentionally deferred until authentication infrastructure is connected.

---

## 🔐 1.6 Authentication UI ✅

All planned authentication UI screens are now implemented. The current task is manual UI/navigation testing before Firebase integration.

### 1.6.1 Create Account ✅

**Implemented:**

- Full Name
- Email Address
- Password
- Confirm Password
- Password visibility controls
- Dynamic password-strength indicator
- Google / Apple social-auth UI
- Login ↔ Register navigation
- React Hook Form
- Zod validation
- Valid submission navigation to Verify Email

#### Registration Validation Rules

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

Password strength is intentionally separate from password validity.

```text
Weak    → Error / Red
Fair    → Warning / Orange
Good    → Success / Green
Strong  → Success / Green
```

The shared password schema is reused by both **Create Account** and **Reset Password**.

### 1.6.2 Forgot Password ✅

**Implemented:**

- Forgot Password route
- Top back navigation
- Email field
- React Hook Form + Zod validation
- Send Reset Link submission foundation
- Back to Login action
- Login → Forgot Password navigation
- Keyboard behavior consistent with other auth screens

> A valid submission is currently local/placeholder behavior. Firebase will later send the actual reset email.

### 1.6.3 Verify Your Email ✅

**Implemented:**

- Verify Email route
- Dynamic email passed from registration
- Email displayed on the verification screen
- Open Email App action placeholder
- Resend Email action placeholder
- Top back navigation
- Bottom Back to Login navigation
- Consistent authentication-screen styling

Current navigation behavior:

```text
Create Account
    ↓ valid form
Verify Your Email
    ↓
Back to Login
```

Future Firebase behavior will send a real verification email and refresh the current Firebase user after verification.

### 1.6.4 Reset Password ✅

**Implemented:**

- Reset Password route/UI
- New Password field
- Confirm Password field
- Password visibility controls
- Shared password validation schema
- Dynamic password-strength indicator
- Password-match validation
- Valid submission placeholder
- Back-to-Login test navigation

> The final production flow will not navigate directly from Forgot Password to Reset Password. Firebase will send a secure password-reset link/action code, and the Reset Password screen will validate that action code before accepting a new password.

### 1.6.5 Onboarding ✅

VoyageVault onboarding consists of three Figma-defined slides:

```text
Plan the Journey
      ↓
Split the Expenses
      ↓
Keep the Memories
```

**Implemented:**

- Reusable data-driven onboarding screen
- Three onboarding illustration assets
- Horizontal `FlatList` carousel
- Native paging behavior
- Swipe forward and backward
- `Next` button advances the same carousel programmatically
- Active pagination indicator follows the visible slide
- `Skip` shown only on the first two slides
- `Get Started` shown on the final slide
- Smooth `Next ↔ Get Started` transition
- Swipe-back correctly restores `Next`
- Final slide cannot scroll beyond the carousel
- First slide cannot scroll before the carousel
- Temporary completion destination used until Home exists

Current onboarding interaction:

```text
Plan the Journey
├── Swipe forward → Split the Expenses
├── Next          → Split the Expenses
└── Skip          → Temporary completion destination

Split the Expenses
├── Swipe back    → Plan the Journey
├── Swipe forward → Keep the Memories
├── Next          → Keep the Memories
└── Skip          → Temporary completion destination

Keep the Memories
├── Swipe back    → Split the Expenses
├── Button        → Get Started
└── Skip          → Hidden
```

### Safe-Area Architecture Direction 🧭

During onboarding testing, we identified that controls such as `Skip` can sit too close to the iPhone status-bar / Dynamic Island area when spacing is handled only inside individual screens.

The selected architecture is to use `react-native-safe-area-context` as a cross-platform foundation, with `SafeAreaProvider` at the root and safe-area handling applied through Expo Router layouts / route groups where appropriate instead of repeating arbitrary `paddingTop` fixes in every screen.

**Goals:**

- Protect content from iPhone Dynamic Island / notch / status bar
- Protect content from Android status bars and display cutouts
- Protect bottom actions from iOS home indicator / Android gesture navigation
- Avoid device-specific hardcoded spacing
- Avoid importing safe-area logic into every page when a route-group layout can own it
- Preserve flexibility for future edge-to-edge screens such as maps and image viewers

Implementation and device-level validation will be confirmed during the current QA pass before the pattern is rolled out across all routes.

---

## 🧪 Authentication & Onboarding Manual QA

Before Firebase integration, the current milestone includes a complete manual pass covering UI, routing, validation, interaction, and real-device layout behavior.

📄 **Detailed checklist:** [Authentication & Onboarding Test Cases](./docs/testing/Authentication-Onboarding-Test-Cases.md)

The README keeps only the high-level coverage below; the linked document contains the individual test-case IDs, actions, expected results, and execution-status fields.

### Login — Test Coverage

- Screen loads correctly
- Empty form validation
- Invalid email validation
- Required password validation
- Password visibility toggle
- Forgot Password navigation
- Create Account navigation
- Keyboard behavior
- Safe-area / status-bar spacing

### Create Account — Test Coverage

- Empty form validation
- Full-name rules
- Email validation
- Complete password policy
- No-space password validation
- Password-strength changes
- Confirm-password matching
- Password visibility toggles
- Valid form → Verify Email
- Login navigation

### Verify Email — Test Coverage

- Registration email displayed correctly
- Back navigation
- Back to Login navigation
- Resend placeholder does not crash
- Open Email App placeholder does not crash
- Safe-area / layout validation

### Forgot Password — Test Coverage

- Required email validation
- Invalid email validation
- Valid local submission
- Back navigation
- Login navigation
- Keyboard and layout behavior

### Reset Password — Test Coverage

- Required-field validation
- Shared password policy
- Password strength
- Confirm-password mismatch
- Password visibility controls
- Valid local submission
- Back navigation

### Onboarding — Test Coverage

- Plan → Split → Memories navigation
- Swipe forward
- Swipe backward
- Next button navigation
- Pagination synchronization
- Skip availability only on slides 1–2
- Get Started only on slide 3
- Smooth `Next ↔ Get Started` transition
- First/last carousel boundaries
- Rapid swipe synchronization
- Illustration sizing
- Safe-area spacing

### Cross-Screen / Cross-Device Checks

```text
✓ No blank routes
✓ No broken navigation
✓ No clipped validation messages
✓ No major keyboard jumps
✓ Consistent typography and gradient usage
✓ Consistent spacing and radii
✓ Safe-area behavior on iOS
✓ Safe-area behavior on Android
✓ Onboarding pagination/button state remains synchronized
```

> Manual QA is still part of the current development cycle. A case should only be treated as fully signed off after it passes on the intended test devices.

---

## 🧪 Current Form Architecture

Authentication forms follow this responsibility split:

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
→ Introduced during Firebase integration

Firebase Authentication
→ Real account and session operations
```

This keeps form validation, presentation, application state, and backend concerns separate.

---

## 🔐 Authentication State Direction

The intended authentication architecture is:

```text
UI Screen
   ↓
Feature logic / Redux
   ↓
authService
   ↓
Firebase Authentication
```

Redux Toolkit will later hold global application/authentication state, while Firebase Authentication remains the source of truth for the authenticated session.

React Hook Form will continue to own temporary form values such as email and password.

### Intended Startup State Machine

```text
App Start
   ↓
Restore Firebase Session
   ↓
User exists?
├── No  → Login
└── Yes
      ↓
   Email verified?
   ├── No  → Verify Email
   └── Yes
          ↓
      Onboarding complete?
      ├── No  → Onboarding
      └── Yes → Home
```

The app will derive routing from account state instead of remembering the user's last screen.

---

## 📁 Architecture Direction

Expo Router owns route composition while feature implementation lives under `src`.

```text
VoyageVault/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── (auth)/
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   ├── forgot-password.tsx
│   │   ├── verify-email.tsx
│   │   └── reset-password.tsx
│   └── onboarding.tsx / (onboarding)/
│
├── assets/
│   ├── branding/
│   │   ├── voyagevault-logo.png
│   │   └── voyagevault-splash.png
│   ├── icons/
│   │   └── social/
│   │       ├── google.png
│   │       └── apple.png
│   └── onboarding/
│       ├── plan-journey.png
│       ├── split-expenses.png
│       └── keep-memories.png
│
├── docs/
│   ├── design/
│   │   └── VoyageVault-UI-Design.pdf
│   └── testing/
│       └── Authentication-Onboarding-Test-Cases.md
│
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── DividerWithText/
│   │   └── SocialAuthButton/
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── schemas/
│   │   │   │   ├── login.schema.ts
│   │   │   │   ├── register.schema.ts
│   │   │   │   ├── forgotPassword.schema.ts
│   │   │   │   ├── password.schema.ts
│   │   │   │   └── resetPassword.schema.ts
│   │   │   ├── screens/
│   │   │   │   ├── LoginScreen/
│   │   │   │   ├── RegisterScreen/
│   │   │   │   ├── ForgotPasswordScreen/
│   │   │   │   ├── VerifyEmailScreen/
│   │   │   │   └── ResetPasswordScreen/
│   │   │   └── utils/
│   │   │       └── passwordStrength.ts
│   │   │
│   │   └── onboarding/
│   │       ├── data/
│   │       │   └── onboardingSlides.ts
│   │       └── screens/
│   │           └── OnboardingScreen/
│   │
│   ├── services/            # Firebase / external integrations
│   ├── shared/              # Shared hooks, types and utilities
│   ├── store/               # Redux composition when required
│   └── theme/               # VoyageVault design system
│
└── README.md
```

> The exact Expo Router grouping may continue to evolve while preserving the public route paths.

### Styling Convention

Component and screen styles are intentionally kept separate from JSX.

```text
ComponentName/
├── ComponentName.tsx
├── ComponentName.styles.ts
├── ComponentName.types.ts
└── index.ts
```

Theme-aware styles follow:

```ts
createStyles(theme);
```

---

## 🔗 Useful Repository Links

Relative Markdown links can point directly to files or folders inside the repository.

- 📄 [VoyageVault UI Design PDF](./docs/design/VoyageVault-UI-Design.pdf)
- 🧪 [Authentication & Onboarding Test Cases](./docs/testing/Authentication-Onboarding-Test-Cases.md)
- 🎨 [Theme System](./src/theme/)
- 🔐 [Authentication Feature](./src/features/auth/)
- 🧭 [Onboarding Feature](./src/features/onboarding/)
- 🧩 [Reusable Components](./src/components/)
- 🛣️ [Expo Router Routes](./app/)

Example syntax:

```md
[Open the design PDF](./docs/design/VoyageVault-UI-Design.pdf)
[Open the test cases](./docs/testing/Authentication-Onboarding-Test-Cases.md)
[Open the authentication feature](./src/features/auth/)
[Open OnboardingScreen](./src/features/onboarding/screens/OnboardingScreen/OnboardingScreen.tsx)
```

GitHub resolves these relative links from the README location. File and folder names should match exactly, including capitalization.

---

## 🎯 Current Milestone

```text
Authentication UI
├── Login                         ✅
├── Create Account                ✅
├── Forgot Password               ✅
├── Verify Your Email             ✅
├── Reset Password                ✅
├── Onboarding                    ✅
│   ├── Plan the Journey          ✅
│   ├── Split the Expenses        ✅
│   └── Keep the Memories         ✅
├── Google Sign-In                UI prepared
├── Apple Sign-In                 UI prepared
└── Full UI/navigation QA         🧪 In Progress
```

### Next Larger Milestone

```text
Finish authentication UI QA
        ↓
Firebase Authentication setup
        ↓
authService abstraction
        ↓
Email registration + verification
        ↓
Login + forgot/reset password
        ↓
Google + Apple authentication
        ↓
Redux authentication state
        ↓
Session restoration
        ↓
Auth-aware routing
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
├── Create Account                ✅
├── Forgot Password               ✅
├── Verify Your Email             ✅
├── Reset Password                ✅
├── Onboarding                    ✅
└── Full UI/navigation test       🧪

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
└── Firebase error mapping

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

Dependencies and folders are introduced only when required by the feature currently being built.

---

## 📌 Project Status

**Current phase:** Authentication UI/navigation QA.

**Completed recently:** Login, Create Account, Forgot Password, Verify Email, Reset Password, shared password validation, password-strength feedback, onboarding carousel/swipe behavior, onboarding button transition, splash/startup foundation, and safe-area architecture direction.

**Current testing:** Auth validation, route transitions, keyboard behavior, onboarding swipe synchronization, safe-area behavior, and iOS/Android layout checks. Detailed cases are tracked in [`docs/testing/Authentication-Onboarding-Test-Cases.md`](./docs/testing/Authentication-Onboarding-Test-Cases.md).

**Next:** Firebase Authentication setup and `authService` implementation.
