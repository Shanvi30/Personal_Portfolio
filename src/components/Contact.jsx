import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "./Section";
import { profile } from "../data/profile";
import { useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const emailConfig = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }),
    [],
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    if (status.type) setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (
        !emailConfig.serviceId ||
        !emailConfig.templateId ||
        !emailConfig.publicKey
      ) {
        setStatus({
          type: "error",
          message:
            "Email service is not configured. Add EmailJS keys in your .env file (see .env.example).",
        });
        return;
      }

      try {
        setSending(true);
        setStatus({ type: "", message: "" });

        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          { publicKey: emailConfig.publicKey },
        );

        setStatus({
          type: "success",
          message: "Message sent successfully. Thank you!",
        });
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again in a moment.",
        });
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <Section id="contact">
      <div className="w-full">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1c1c1e] dark:text-[#f5f5f7] transition-all duration-300 pb-4 relative inline-block group cursor-default">
              Get In Touch
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] transition-all duration-300 group-hover:scale-x-110 group-hover:opacity-80"></span>
            </h2>
          </div>
          <p className="text-center text-[#5f6368] dark:text-[#a1a1aa] mb-12 transition-colors duration-300">
            Feel free to reach out — I'm open to internships & collaboration.
          </p>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-[#1c1c1e] dark:text-[#f5f5f7] mb-6 transition-colors duration-300">
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 card-surface rounded-lg p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#1c1c1e] dark:text-[#f5f5f7] mb-2 transition-colors duration-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-[#1a1a22] text-[#1c1c1e] dark:text-[#f5f5f7] border-[#e4e6eb] dark:border-[#2e2e38] focus:outline-none focus:ring-2 focus:ring-[#dd2a7b]/20 dark:focus:ring-[#c13584]/20 transition-all ${
                    errors.name
                      ? "border-[#dd2a7b] dark:border-[#c13584] focus:ring-[#dd2a7b]/30 dark:focus:ring-[#c13584]/30"
                      : ""
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-[#dd2a7b] dark:text-[#c13584] text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#1c1c1e] dark:text-[#f5f5f7] mb-2 transition-colors duration-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-[#1a1a22] text-[#1c1c1e] dark:text-[#f5f5f7] border-[#e4e6eb] dark:border-[#2e2e38] focus:outline-none focus:ring-2 focus:ring-[#dd2a7b]/20 dark:focus:ring-[#c13584]/20 transition-all ${
                    errors.email
                      ? "border-[#dd2a7b] dark:border-[#c13584] focus:ring-[#dd2a7b]/30 dark:focus:ring-[#c13584]/30"
                      : ""
                  }`}
                  placeholder="name@gmail.com"
                />
                {errors.email && (
                  <p className="text-[#dd2a7b] dark:text-[#c13584] text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#1c1c1e] dark:text-[#f5f5f7] mb-2 transition-colors duration-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-[#1a1a22] text-[#1c1c1e] dark:text-[#f5f5f7] border-[#e4e6eb] dark:border-[#2e2e38] focus:outline-none focus:ring-2 focus:ring-[#dd2a7b]/20 dark:focus:ring-[#c13584]/20 transition-all resize-none ${
                    errors.message
                      ? "border-[#dd2a7b] dark:border-[#c13584] focus:ring-[#dd2a7b]/30 dark:focus:ring-[#c13584]/30"
                      : ""
                  }`}
                  placeholder="Type message here..."
                />
                {errors.message && (
                  <p className="text-[#dd2a7b] dark:text-[#c13584] text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {status.type === "success" && (
                <div className="p-4 bg-[#f3f4f8] dark:bg-[#1a1a22] border border-[#e4e6eb] dark:border-[#2e2e38] text-[#1c1c1e] dark:text-[#f5f5f7] rounded-lg">
                  {status.message}
                </div>
              )}
              {status.type === "error" && (
                <div className="p-4 bg-[#f3f4f8] dark:bg-[#1a1a22] border border-[#dd2a7b] dark:border-[#c13584] text-[#dd2a7b] dark:text-[#c13584] rounded-lg">
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {sending && (
                  <span
                    className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin"
                    aria-hidden="true"
                  />
                )}
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
