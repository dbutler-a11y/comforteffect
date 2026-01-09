"use client";

import { useState, FormEvent } from "react";
import { Alert } from "./Alert";

interface EmailCaptureFormProps {
  source: string;
  title?: string;
  description?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
  variant?: "default" | "inline" | "compact";
}

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export function EmailCaptureForm({
  source,
  title,
  description,
  buttonText = "Get Free Access",
  successMessage = "Check your inbox! Your free guide is on the way.",
  className = "",
  variant = "default",
}: EmailCaptureFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim()) {
      setFormState({
        status: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState({
        status: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setFormState({ status: "loading", message: "" });

    try {
      const response = await fetch("/api/capture-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), source }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setFormState({
        status: "success",
        message: successMessage,
      });
      setName("");
      setEmail("");
    } catch (error) {
      setFormState({
        status: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  };

  const resetForm = () => {
    setFormState({ status: "idle", message: "" });
  };

  // Inline variant - single row with all fields
  if (variant === "inline") {
    return (
      <div className={className}>
        {formState.status === "success" ? (
          <Alert
            type="success"
            message={formState.message}
            title="You're in!"
            onClose={resetForm}
          />
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={formState.status === "loading"}
              className="flex-1 px-4 py-3 bg-white border border-zinc-200 rounded-full text-sm
                focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent
                disabled:opacity-50 disabled:cursor-not-allowed
                placeholder:text-zinc-400"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={formState.status === "loading"}
              className="flex-1 px-4 py-3 bg-white border border-zinc-200 rounded-full text-sm
                focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent
                disabled:opacity-50 disabled:cursor-not-allowed
                placeholder:text-zinc-400"
            />
            <button
              type="submit"
              disabled={formState.status === "loading"}
              className="btn-primary px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap
                disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {formState.status === "loading" ? (
                <>
                  <LoadingSpinner />
                  Sending...
                </>
              ) : (
                buttonText
              )}
            </button>
          </form>
        )}
        {formState.status === "error" && (
          <Alert
            type="error"
            message={formState.message}
            onClose={resetForm}
            className="mt-3"
          />
        )}
      </div>
    );
  }

  // Compact variant - stacked but minimal
  if (variant === "compact") {
    return (
      <div className={className}>
        {formState.status === "success" ? (
          <Alert
            type="success"
            message={formState.message}
            title="You're in!"
            onClose={resetForm}
          />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={formState.status === "loading"}
              className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm
                focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent
                disabled:opacity-50 disabled:cursor-not-allowed
                placeholder:text-zinc-400"
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={formState.status === "loading"}
              className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm
                focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent
                disabled:opacity-50 disabled:cursor-not-allowed
                placeholder:text-zinc-400"
            />
            <button
              type="submit"
              disabled={formState.status === "loading"}
              className="btn-primary w-full px-6 py-3 rounded-xl text-sm font-medium
                disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {formState.status === "loading" ? (
                <>
                  <LoadingSpinner />
                  Sending...
                </>
              ) : (
                buttonText
              )}
            </button>
          </form>
        )}
        {formState.status === "error" && (
          <Alert
            type="error"
            message={formState.message}
            onClose={resetForm}
            className="mt-3"
          />
        )}
      </div>
    );
  }

  // Default variant - card style with title and description
  return (
    <div className={`card-elevated rounded-2xl p-6 md:p-8 ${className}`}>
      {title && (
        <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-sm text-zinc-500 mb-6 leading-relaxed">{description}</p>
      )}

      {formState.status === "success" ? (
        <Alert
          type="success"
          message={formState.message}
          title="You're in!"
          onClose={resetForm}
        />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor={`name-${source}`} className="block text-sm font-medium text-zinc-700 mb-1.5">
              First Name
            </label>
            <input
              id={`name-${source}`}
              type="text"
              placeholder="Enter your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={formState.status === "loading"}
              className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm
                focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent
                disabled:opacity-50 disabled:cursor-not-allowed
                placeholder:text-zinc-400
                transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor={`email-${source}`} className="block text-sm font-medium text-zinc-700 mb-1.5">
              Email Address
            </label>
            <input
              id={`email-${source}`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={formState.status === "loading"}
              className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm
                focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent
                disabled:opacity-50 disabled:cursor-not-allowed
                placeholder:text-zinc-400
                transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={formState.status === "loading"}
            className="btn-primary w-full px-6 py-3.5 rounded-xl text-sm font-medium
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center justify-center gap-2"
          >
            {formState.status === "loading" ? (
              <>
                <LoadingSpinner />
                Sending...
              </>
            ) : (
              buttonText
            )}
          </button>

          {formState.status === "error" && (
            <Alert
              type="error"
              message={formState.message}
              onClose={resetForm}
              className="mt-2"
            />
          )}

          <p className="text-xs text-zinc-400 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default EmailCaptureForm;
