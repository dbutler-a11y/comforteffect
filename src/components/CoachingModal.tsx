"use client";

import { useState, useEffect, useCallback } from "react";

interface CoachingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  goals: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  goals?: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function CoachingModal({ isOpen, onClose }: CoachingModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    goals: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", goals: "" });
      setErrors({});
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.goals.trim()) {
      newErrors.goals = "Please tell us about your goals";
    } else if (formData.goals.trim().length < 20) {
      newErrors.goals = "Please provide more detail (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-4 h-4 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">
          {submitStatus === "success" ? (
            /* Success state */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
                Application Received!
              </h3>
              <p className="text-zinc-500 mb-6">
                Thank you for your interest in 1:1 Transformation Coaching. We&apos;ll
                review your application and reach out within 24-48 hours.
              </p>
              <button
                onClick={onClose}
                className="btn-primary px-8 py-3 rounded-full text-sm font-medium"
              >
                Close
              </button>
            </div>
          ) : (
            /* Form state */
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="badge mb-4 mx-auto">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Limited Availability
                </div>
                <h2
                  id="modal-title"
                  className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-3"
                >
                  1:1 Transformation Coaching
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto">
                  Work directly with our expert coaches in an intensive 4-week sprint
                  program designed for accelerated results.
                </p>
              </div>

              {/* Program highlights */}
              <div className="bg-zinc-50 rounded-xl p-5 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-semibold text-zinc-900">4</div>
                    <div className="text-xs text-zinc-500">Week Sprint</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-zinc-900">$2,500</div>
                    <div className="text-xs text-zinc-500">Investment</div>
                  </div>
                </div>
                <div className="divider my-4"></div>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Weekly 1-on-1 coaching sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Personalized transformation roadmap
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Direct Slack/email access to your coach
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom exercises and accountability
                  </li>
                </ul>
              </div>

              {/* Error message */}
              {submitStatus === "error" && errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Application form */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-zinc-200 focus:border-zinc-900 focus:ring-zinc-900"
                      } focus:ring-1 outline-none transition-colors text-sm`}
                      disabled={submitStatus === "submitting"}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-zinc-200 focus:border-zinc-900 focus:ring-zinc-900"
                      } focus:ring-1 outline-none transition-colors text-sm`}
                      disabled={submitStatus === "submitting"}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Goals field */}
                  <div>
                    <label
                      htmlFor="goals"
                      className="block text-sm font-medium text-zinc-700 mb-1.5"
                    >
                      Tell us about your business/goals
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="What do you want to achieve? What's holding you back?"
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.goals
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-zinc-200 focus:border-zinc-900 focus:ring-zinc-900"
                      } focus:ring-1 outline-none transition-colors text-sm resize-none`}
                      disabled={submitStatus === "submitting"}
                    />
                    {errors.goals && (
                      <p className="mt-1 text-xs text-red-600">{errors.goals}</p>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="w-full btn-primary py-4 rounded-full text-sm font-medium mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitStatus === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                <p className="text-xs text-zinc-400 text-center mt-4">
                  By submitting, you agree to be contacted about the coaching program.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
