"use client";

import { useRef, useState } from "react";
import { CONTACT_LIMITS, validateContact } from "@/lib/contact-validation";
import type { ContactFormErrors, ContactFormValues } from "@/types";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
// Web3Forms access keys are designed to be public; they only route mail to your inbox.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const EMPTY: ContactFormValues = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const honeypot = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof ContactFormValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const focusFirstError = (found: ContactFormErrors) => {
    const first = (["name", "email", "subject", "message"] as const).find((field) => found[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      setFeedback("Please correct the highlighted fields.");
      focusFirstError(found);
      return;
    }

    if (!ACCESS_KEY) {
      setStatus("error");
      setFeedback("The contact form is not configured yet. Please email me directly instead.");
      return;
    }

    setStatus("submitting");
    setFeedback("Sending…");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: "Portfolio Contact Form",
          name: values.name.trim(),
          email: values.email.trim(),
          subject: `Portfolio contact: ${values.subject.trim()}`,
          message: values.message.trim(),
          botcheck: honeypot.current?.value ?? "",
        }),
      });
      const data: { success?: boolean; message?: string } = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setValues(EMPTY);
        setStatus("success");
        setFeedback("Message sent successfully! I'll get back to you soon.");
        return;
      }
      setStatus("error");
      setFeedback(data.message ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };

  const field = (name: keyof ContactFormValues) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: update(name),
    maxLength: CONTACT_LIMITS[name],
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    disabled: status === "submitting",
  });

  const error = (name: keyof ContactFormValues) =>
    errors[name] ? (
      <p className="field-error" id={`contact-${name}-error`}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="contact-name">Name</label>
          <input type="text" autoComplete="name" required className="form-control" {...field("name")} />
          {error("name")}
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="contact-email">Email</label>
          <input type="email" autoComplete="email" required className="form-control" {...field("email")} />
          {error("email")}
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="contact-subject">Subject</label>
          <input type="text" required className="form-control" {...field("subject")} />
          {error("subject")}
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="contact-message">Your message</label>
          <textarea rows={6} required className="form-control" {...field("message")} />
          {error("message")}
        </div>

        {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="contact-botcheck">Leave this field empty</label>
          <input id="contact-botcheck" ref={honeypot} type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-contact-bg" disabled={status === "submitting"} aria-busy={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Message"}
          </button>
          <div className={`form-status form-status--${status}`} role={status === "error" ? "alert" : "status"} aria-live="polite">
            {feedback}
          </div>
        </div>
      </div>
    </form>
  );
}
