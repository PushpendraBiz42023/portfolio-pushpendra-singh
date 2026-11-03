import type { ContactFormErrors, ContactFormValues } from "@/types";

export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 3000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the form (instant feedback) and the API route (source of truth). */
export function validateContact(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > CONTACT_LIMITS.name) errors.name = `Name must be ${CONTACT_LIMITS.name} characters or fewer.`;

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > CONTACT_LIMITS.email || !EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address.";

  if (!subject) errors.subject = "Please enter a subject.";
  else if (subject.length > CONTACT_LIMITS.subject) errors.subject = `Subject must be ${CONTACT_LIMITS.subject} characters or fewer.`;

  if (!message) errors.message = "Please enter a message.";
  else if (message.length < 10) errors.message = "Your message should be at least 10 characters.";
  else if (message.length > CONTACT_LIMITS.message) errors.message = `Message must be ${CONTACT_LIMITS.message} characters or fewer.`;

  return errors;
}
