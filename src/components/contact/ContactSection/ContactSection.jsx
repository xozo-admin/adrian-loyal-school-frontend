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
    <section className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#17375D]">
              Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#17375D] md:text-5xl">
              Let&apos;s Connect
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 md:text-lg">
              Reach out for admissions, academics, transport, or campus-related
              enquiries. Our team is happy to assist you.
            </p>

            <div className="mt-12 space-y-5">
              {contactItems.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFC] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-lg text-[#17375D] shadow-sm">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#17375D]">
                        {item.label}
                      </h3>

                      <div className="mt-2 leading-8 text-slate-600">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#17375D]">
              Send Message
            </p>

            <h3 className="mt-4 text-3xl font-bold text-[#17375D] md:text-4xl">
              We&apos;d Love to Hear From You
            </h3>

            {submitMessage.text ? (
              <div
                className={`mt-8 rounded-2xl border px-5 py-4 ${
                  submitMessage.type === "error"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-emerald-200 bg-emerald-50 text-emerald-700"
                }`}
              >
                {submitMessage.text}
              </div>
            ) : null}

            <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-1 py-4 text-[15px] text-[#17375D] outline-none placeholder:text-slate-400 focus:border-[#17375D]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-1 py-4 text-[15px] text-[#17375D] outline-none placeholder:text-slate-400 focus:border-[#17375D]"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-1 py-4 text-[15px] text-[#17375D] outline-none placeholder:text-slate-400 focus:border-[#17375D]"
              />

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border-0 border-b border-slate-300 bg-transparent px-1 py-4 text-[15px] text-[#17375D] outline-none placeholder:text-slate-400 focus:border-[#17375D]"
              />

              <button
                type="submit"
                disabled={isSaving}
                className="mt-4 rounded-full bg-[#17375D] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#0F2745]"
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
