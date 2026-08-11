export type PasswordStrength = "weak" | "fair" | "good" | "strong";

export interface PasswordStrengthResult {
  strength: PasswordStrength;
  score: number;
  label: string;
}

export function getPasswordStrength(password: string): PasswordStrengthResult {
  if (!password) {
    return {
      strength: "weak",
      score: 0,
      label: "",
    };
  }

  const hasUppercase = /[A-Z]/.test(password);

  const hasLowercase = /[a-z]/.test(password);

  const hasNumber = /[0-9]/.test(password);

  const hasSpecialCharacter = /[^A-Za-z0-9\s]/.test(password);

  const hasNoSpaces = /^\S*$/.test(password);

  const meetsCharacterRequirements =
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialCharacter &&
    hasNoSpaces;

  let score = 0;

  if (password.length >= 8) {
    score += 1;
  }

  if (meetsCharacterRequirements) {
    score += 1;
  }

  if (password.length >= 12 && meetsCharacterRequirements) {
    score += 1;
  }

  if (password.length >= 16 && meetsCharacterRequirements) {
    score += 1;
  }

  if (score <= 1) {
    return {
      strength: "weak",
      score: 1,
      label: "Weak password strength",
    };
  }

  if (score === 2) {
    return {
      strength: "fair",
      score: 2,
      label: "Fair password strength",
    };
  }

  if (score === 3) {
    return {
      strength: "good",
      score: 3,
      label: "Good password strength",
    };
  }

  return {
    strength: "strong",
    score: 4,
    label: "Strong password strength",
  };
}
