# 🧪 VoyageVault — Authentication & Onboarding Test Cases

**Module:** Authentication UI + Onboarding  
**Test Type:** Manual UI / Navigation / Validation QA  
**Backend State:** Firebase Authentication not connected yet  
**Purpose:** Validate the current frontend behavior before Firebase integration.

---

## 1. Scope

This checklist covers the authentication and onboarding UI currently implemented in VoyageVault:

```text
Login
├── Create Account
│   └── Verify Email
├── Forgot Password
│   └── Reset Password UI
└── Onboarding
    ├── Plan the Journey
    ├── Split the Expenses
    └── Keep the Memories
```

The current test pass focuses on:

- UI rendering
- React Hook Form + Zod validation
- Screen-to-screen routing
- Password visibility controls
- Password-strength behavior
- Keyboard behavior
- Onboarding swipe/paging behavior
- Pagination synchronization
- `Next` / `Get Started` transition behavior
- Safe-area and device-layout behavior
- iOS / Android consistency where devices are available

> Real credential verification, real verification emails, real reset emails, Google Sign-In, Apple Sign-In, Firebase session restoration, and persisted onboarding completion are intentionally outside this test pass.

---

## 2. Execution Status

Use the **Status** column while testing:

- `Not Run` — not tested yet
- `Pass` — behavior matches the expected result
- `Fail` — behavior does not match the expected result
- `Blocked` — cannot currently execute the test

Add a short note for any failure so the issue can be reproduced later.

---

# 3. Login

| ID | Action / Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| L01 | Open the Login screen | VoyageVault logo, title, email, password, Forgot Password, Login button, social buttons, and Sign Up action render correctly | Not Run | |
| L02 | Tap **Log In** with both fields empty | Required validation appears for email and password; user remains on Login | Not Run | |
| L03 | Enter an invalid email such as `abc` | Email validation error appears | Not Run | |
| L04 | Enter a valid email and leave password empty | Password-required validation appears | Not Run | |
| L05 | Tap the password eye icon | Password toggles between hidden and visible | Not Run | |
| L06 | Tap **Forgot Password?** | Navigates to Forgot Password | Not Run | |
| L07 | Tap **Sign Up / Create Account** | Navigates to Create Account | Not Run | |
| L08 | Open the keyboard and move between inputs | Screen remains usable without major layout jumps; keyboard dismissal behaves correctly | Not Run | |
| L09 | Inspect top and bottom spacing | Content does not overlap status bar, notch / Dynamic Island, or bottom system gesture area | Not Run | |

---

# 4. Create Account

| ID | Action / Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| R01 | Open Create Account | Full Name, Email, Password, Confirm Password, strength indicator, Create Account button, social buttons, and Login action render correctly | Not Run | |
| R02 | Submit with all fields empty | Required validation errors appear | Not Run | |
| R03 | Enter a one-character full name | Full-name minimum-length error appears | Not Run | |
| R04 | Enter a name containing numbers, e.g. `Shashank123` | `Full name cannot contain numbers` appears | Not Run | |
| R05 | Enter a valid name such as `Shashank Acharya` | Full-name error clears | Not Run | |
| R06 | Enter an invalid email | Email validation error appears | Not Run | |
| R07 | Enter a password shorter than 8 characters | Password length error appears | Not Run | |
| R08 | Enter a password without an uppercase letter | Uppercase requirement error appears | Not Run | |
| R09 | Enter a password without a lowercase letter | Lowercase requirement error appears | Not Run | |
| R10 | Enter a password without a number | Number requirement error appears | Not Run | |
| R11 | Enter a password without a special character | Special-character requirement error appears | Not Run | |
| R12 | Enter a password containing spaces | `Password cannot contain spaces` appears | Not Run | |
| R13 | Type increasingly stronger passwords | Strength indicator progresses through Weak / Fair / Good / Strong as expected | Not Run | |
| R14 | Enter a Confirm Password value that does not match Password | `Passwords do not match` appears | Not Run | |
| R15 | Toggle both password eye icons | Each field independently toggles hidden / visible text | Not Run | |
| R16 | Submit a completely valid registration form | Navigates to Verify Email | Not Run | |
| R17 | Arrive on Verify Email after valid registration | Verify Email displays the same email entered during registration | Not Run | |
| R18 | Tap **Log In** from the registration footer | Navigates to Login | Not Run | |

---

# 5. Verify Email

| ID | Action / Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| V01 | Arrive from Create Account | `Verify Your Email` screen renders and displays the registration email | Not Run | |
| V02 | Inspect the top back control | Back control is correctly positioned below the safe area / status bar | Not Run | |
| V03 | Tap the top back control | Navigates to Login | Not Run | |
| V04 | Tap **Back to Login** | Navigates to Login | Not Run | |
| V05 | Tap **Resend Email** | Current placeholder action runs without crashing | Not Run | |
| V06 | Tap **Open Email App** | Current placeholder action runs without crashing | Not Run | |
| V07 | Inspect the complete layout | Icon, text, actions, and footer are visible without clipping or overlap | Not Run | |

> A real verification email is not expected during this phase. Firebase will replace the placeholder actions later.

---

# 6. Forgot Password

| ID | Action / Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| F01 | Navigate from Login to Forgot Password | Forgot Password screen renders correctly | Not Run | |
| F02 | Tap **Send Reset Link** with email empty | Email-required validation appears | Not Run | |
| F03 | Enter an invalid email | Invalid-email validation appears | Not Run | |
| F04 | Enter a valid email | Validation clears | Not Run | |
| F05 | Submit a valid email | Current local placeholder submit executes without crashing | Not Run | |
| F06 | Tap the top back control | Navigates to Login | Not Run | |
| F07 | Tap **Back to Login** if shown | Navigates to Login | Not Run | |
| F08 | Inspect safe-area / keyboard behavior | Back control and content do not overlap system UI; keyboard behavior remains stable | Not Run | |

> A real reset email is not expected during this phase.

---

# 7. Reset Password UI

Because Firebase reset links are not connected yet, this screen can be reached through the temporary test route / redirect used during development.

| ID | Action / Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| RP01 | Open Reset Password | New Password, Confirm Password, strength indicator, and Reset Password button render correctly | Not Run | |
| RP02 | Submit with fields empty | Required validation errors appear | Not Run | |
| RP03 | Test invalid password combinations | Same shared password policy used by Create Account is enforced | Not Run | |
| RP04 | Type increasingly stronger passwords | Strength indicator updates correctly | Not Run | |
| RP05 | Enter mismatching confirmation | `Passwords do not match` appears | Not Run | |
| RP06 | Toggle password visibility controls | Both fields independently toggle hidden / visible text | Not Run | |
| RP07 | Submit valid matching passwords | Current placeholder submit executes without crashing | Not Run | |
| RP08 | Tap the top back control | Current test flow returns to Login | Not Run | |
| RP09 | Compare password behavior with Create Account | Validation rules and strength behavior are consistent between both screens | Not Run | |

> Production reset behavior will later validate the secure Firebase password-reset action code before accepting a new password.

---

# 8. Onboarding — Plan the Journey

| ID | Action / Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| O01 | Open onboarding | Plan the Journey illustration, title, description, pagination, Skip, and Next render correctly | Not Run | |
| O02 | Inspect pagination | First indicator is active | Not Run | |
| O03 | Inspect Skip | Skip is visible | Not Run | |
| O04 | Attempt to swipe backward from the first slide | Carousel cannot move before the first slide | Not Run | |
| O05 | Swipe forward | Smoothly moves to Split the Expenses | Not Run | |
| O06 | Tap **Next** | Smoothly moves to Split the Expenses using the same carousel | Not Run | |
| O07 | Tap **Skip** | Current temporary completion behavior runs and navigates to the temporary destination | Not Run | |
| O08 | Inspect top-right Skip position | Skip does not overlap the iOS / Android status-bar area | Not Run | |

---

# 9. Onboarding — Split the Expenses

| ID | Action / Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| O09 | Arrive on Split the Expenses | Correct illustration, title, and description render | Not Run | |
| O10 | Inspect pagination | Second indicator is active | Not Run | |
| O11 | Inspect primary button | Button title is `Next` | Not Run | |
| O12 | Inspect Skip | Skip remains visible | Not Run | |
| O13 | Swipe backward | Returns smoothly to Plan the Journey | Not Run | |
| O14 | Swipe forward | Moves smoothly to Keep the Memories | Not Run | |
| O15 | Tap **Next** | Moves to Keep the Memories | Not Run | |
| O16 | Tap **Skip** | Current temporary completion behavior runs without crashing | Not Run | |

---

# 10. Onboarding — Keep the Memories

| ID | Action / Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| O17 | Arrive on Keep the Memories | Correct illustration, title, and description render | Not Run | |
| O18 | Inspect pagination | Third indicator is active | Not Run | |
| O19 | Inspect Skip | Skip is hidden | Not Run | |
| O20 | Observe primary button | Button changes from `Next` to `Get Started` | Not Run | |
| O21 | Observe the button title transition | `Next → Get Started` transition is smooth with no obvious cut, flicker, or abrupt replacement | Not Run | |
| O22 | Swipe backward to Split | Button smoothly changes `Get Started → Next` | Not Run | |
| O23 | Attempt to swipe beyond the final slide | Carousel cannot move beyond the final slide | Not Run | |
| O24 | Tap **Get Started** | Current temporary completion behavior runs and navigates to the temporary destination | Not Run | |

---

# 11. Cross-Screen / Cross-Device Checks

| ID | Scenario | Expected Result | Status | Notes |
| --- | --- | --- | --- | --- |
| C01 | Test on iPhone | No important controls overlap Dynamic Island / notch / status bar / home indicator | Not Run | |
| C02 | Test on Android | No important controls overlap Android status bar, camera cutout, or gesture/navigation area | Not Run | |
| C03 | Navigate through all implemented routes | No blank screen or Expo Router route error occurs | Not Run | |
| C04 | Test back actions | Back controls consistently lead to the intended screen | Not Run | |
| C05 | Compare visual system across screens | Typography, spacing, radius, colors, and VoyageVault gradient remain consistent | Not Run | |
| C06 | Trigger multiple validation errors | Error messages remain readable and do not cause severe clipping/layout breakage | Not Run | |
| C07 | Test keyboard-heavy form interaction | Inputs/buttons remain reachable without major jumps or unusable layouts | Not Run | |
| C08 | Rapidly tap interactive buttons | UI does not crash or enter an obviously broken state | Not Run | |
| C09 | Rapidly swipe onboarding back and forth | Active pagination, Skip visibility, and Next/Get Started state remain synchronized with the visible slide | Not Run | |
| C10 | Inspect onboarding illustrations | Images are not stretched; important artwork is not incorrectly clipped | Not Run | |

---

# 12. Recommended Rapid-Swipe Stress Test

Perform this interaction quickly:

```text
Plan the Journey
      ↓ swipe forward
Split the Expenses
      ↓ immediately swipe forward
Keep the Memories
      ↓ immediately swipe back
Split the Expenses
      ↓ immediately swipe forward
Keep the Memories
```

At every stop verify that all of the following match the visible slide:

```text
Pagination indicator
Skip visibility
Next / Get Started title
Button transition state
Slide content
```

The carousel state should never become visibly desynchronized.

---

# 13. Current Expected Placeholder Behavior

Until Firebase Authentication is connected, these actions are intentionally placeholders:

| Action | Current Expected Behavior |
| --- | --- |
| Login with valid-shaped credentials | Local form handling only; no real Firebase credential check |
| Create Account | Valid form navigates to Verify Email; no real Firebase account creation yet |
| Resend Verification Email | Placeholder action / console behavior |
| Open Email App | Placeholder action / console behavior |
| Send Reset Link | Placeholder action / console behavior |
| Reset Password | Local validation / placeholder submit |
| Onboarding completion | Temporary route destination until authenticated Home exists |
| Google Sign-In | UI only |
| Apple Sign-In | UI only |

A placeholder action should be marked **Pass** when it executes without crashing and follows the currently intended temporary navigation behavior.

---

# 14. Sign-Off Criteria for This UI Milestone

The Authentication UI + Onboarding milestone can be considered ready for Firebase integration when:

- All critical validation cases pass
- All route transitions behave correctly
- Password policies match across Create Account and Reset Password
- Onboarding swiping works both directions
- Pagination and button state remain synchronized
- `Next ↔ Get Started` transition remains visually smooth
- No important content overlaps device safe areas
- Forms remain usable with the keyboard open
- No critical clipping or layout breakage is seen on intended test devices
- Known placeholder actions execute without crashing

Once this checklist is signed off, development can proceed to:

```text
Firebase Authentication setup
        ↓
authService abstraction
        ↓
Email registration / verification
        ↓
Login + forgot/reset password
        ↓
Google + Apple authentication
        ↓
Redux authentication state
        ↓
Session restoration + auth-aware routing
```
