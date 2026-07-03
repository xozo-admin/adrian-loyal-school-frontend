import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    content: (
      <>
        106/1, Kakavadi Village
        <br />
        Kakkavadi
        <br />
        Karur - 639003
        <br />
        Tamil Nadu, India
      </>
    ),
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    content: (
      <>
        <a
          href="mailto:adrianschoolskarur@gmail.com"
          className="block hover:text-[#17375D]"
        >
          adrianschoolskarur@gmail.com
        </a>
        <a
          href="mailto:theadrianloyal@gmail.com"
          className="block hover:text-[#17375D]"
        >
          theadrianloyal@gmail.com
        </a>
      </>
    ),
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    content: (
      <a
        href="tel:+919600422277"
        className="block hover:text-[#17375D]"
      >
        +91 96004 22277
      </a>
    ),
  },
];

const initialFormData = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = ({ target }) => {
    setFormData((current) => ({
      ...current,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSaving(true);
      await axios.post("https://arun9361499299.pythonanywhere.com/api/contact-messages", formData);
      setSubmitMessage({
        type: "success",
        text: "Your message has been sent successfully.",
      });
      setFormData(initialFormData);
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          "Failed to send your message. Please try again.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-[90%] max-w-7xl">
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      {/* Left */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.22em]">
          Contact Information
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
          Let&apos;s Connect
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
          Reach out for admissions, academics, transport, or campus-related
          enquiries. Our team is happy to assist you.
        </p>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5 lg:mt-12">
          {contactItems.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 sm:rounded-[1.75rem] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-base text-[#17375D] shadow-sm sm:h-12 sm:w-12 sm:text-lg">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#17375D] sm:text-lg">
                    {item.label}
                  </h3>

                  <div className="mt-2 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {item.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:rounded-[2rem] sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.22em]">
          Send Message
        </p>

        <h3 className="mt-3 text-2xl font-bold text-[#17375D] sm:mt-4 sm:text-3xl lg:text-4xl">
          We&apos;d Love to Hear From You
        </h3>

        {submitMessage.text ? (
          <div
            className={`mt-6 rounded-2xl border px-5 py-4 ${
              submitMessage.type === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {submitMessage.text}
          </div>
        ) : null}

        <form className="mt-8 space-y-5 sm:mt-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border-0 border-b border-slate-300 bg-transparent px-1 py-3 text-sm text-[#17375D] outline-none placeholder:text-slate-400 focus:border-[#17375D] sm:py-4 sm:text-[15px]"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border-0 border-b border-slate-300 bg-transparent px-1 py-3 text-sm text-[#17375D] outline-none placeholder:text-slate-400 focus:border-[#17375D] sm:py-4 sm:text-[15px]"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border-0 border-b border-slate-300 bg-transparent px-1 py-3 text-sm text-[#17375D] outline-none placeholder:text-slate-400 focus:border-[#17375D] sm:py-4 sm:text-[15px]"
          />

          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border-0 border-b border-slate-300 bg-transparent px-1 py-3 text-sm text-[#17375D] outline-none placeholder:text-slate-400 focus:border-[#17375D] sm:py-4 sm:text-[15px]"
          />

          <button
            type="submit"
            disabled={isSaving}
            className="mt-3 rounded-full bg-[#17375D] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#0F2745] sm:mt-4 sm:px-8 sm:py-3.5 sm:text-sm"
          >
            {isSaving ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
  );
};

export default ContactSection;
