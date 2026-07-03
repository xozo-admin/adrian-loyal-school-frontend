import { useState } from "react";
import axios from "axios";

const gradeOptions = [
  "Pre KG",
  "LKG",
  "UKG",
  "Grade I",
  "Grade II",
  "Grade III",
  "Grade IV",
  "Grade V",
  "Grade VI",
  "Grade VII",
  "Grade VIII",
  "Grade IX",
  "Grade X",
];

const initialFormData = {
  childName: "",
  dateOfBirth: "",
  age: "",
  gender: "",
  admissionClass: "",
  previousSchool: "",
  fatherName: "",
  fatherPhone: "",
  fatherOccupation: "",
  motherName: "",
  motherPhone: "",
  motherOccupation: "",
  address: "",
  city: "",
  state: "",
  expectations: "",
};

const baseFieldClassName =
  "w-full border-0 border-b bg-transparent px-3 py-4 text-base text-[#17375D] outline-none placeholder:text-[#A8AFB9] focus:border-[#D4A017]";

const getFieldClassName = (hasError) =>
  `${baseFieldClassName} ${hasError ? "border-[#D62828]" : "border-[#17375D]"}`;

const errorClassName = "mt-2 px-3 text-sm text-[#D62828]";
const API = "https://arun9361499299.pythonanywhere.com/api/admissions";

const validateForm = (formData) => {
  const errors = {};
  const phoneRegex = /^\d{10}$/;

  if (!formData.childName.trim()) {
    errors.childName = "Child name is required.";
  }

  if (!formData.dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required.";
  }

  if (!formData.age.trim()) {
    errors.age = "Age is required.";
  } else if (Number(formData.age) <= 0) {
    errors.age = "Age must be greater than 0.";
  }

  if (!formData.gender) {
    errors.gender = "Please select a gender.";
  }

  if (!formData.admissionClass) {
    errors.admissionClass = "Please select a class.";
  }

  if (!formData.fatherName.trim()) {
    errors.fatherName = "Father's name is required.";
  }

  if (!formData.fatherPhone.trim()) {
    errors.fatherPhone = "Father's phone number is required.";
  } else if (!phoneRegex.test(formData.fatherPhone)) {
    errors.fatherPhone = "Enter a valid 10-digit phone number.";
  }

  if (!formData.fatherOccupation.trim()) {
    errors.fatherOccupation = "Father's education and occupation is required.";
  }

  if (!formData.motherName.trim()) {
    errors.motherName = "Mother's name is required.";
  }

  if (!formData.motherPhone.trim()) {
    errors.motherPhone = "Mother's phone number is required.";
  } else if (!phoneRegex.test(formData.motherPhone)) {
    errors.motherPhone = "Enter a valid 10-digit phone number.";
  }

  if (!formData.motherOccupation.trim()) {
    errors.motherOccupation = "Mother's education and occupation is required.";
  }

  if (!formData.address.trim()) {
    errors.address = "Address is required.";
  }

  if (!formData.city.trim()) {
    errors.city = "City is required.";
  }

  if (!formData.state.trim()) {
    errors.state = "State is required.";
  }

  return errors;
};

const AdmissionForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const nextValue =
      name === "fatherPhone" || name === "motherPhone"
        ? value.replace(/\D/g, "").slice(0, 10)
        : value;

    const nextFormData = {
      ...formData,
      [name]: nextValue,
    };

    setFormData(nextFormData);

    if (isSubmitted) {
      setErrors(validateForm(nextFormData));
    } else if (errors[name]) {
      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);

    setIsSubmitted(true);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setIsSaving(true);
        await axios.post(API, formData);
        setSubmitMessage({
          type: "success",
          text: "Admission enquiry submitted successfully. Our team will contact you soon.",
        });
        setFormData(initialFormData);
        setErrors({});
        setIsSubmitted(false);
      } catch (error) {
        setSubmitMessage({
          type: "error",
          text:
            error?.response?.data?.message ||
            "Failed to submit admission enquiry. Please try again.",
        });
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <section id="admission-form" className="bg-white py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D3131A] sm:text-sm sm:tracking-[0.3em]">
            Admission Form
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17375D] sm:mt-4 sm:text-4xl lg:text-5xl">
            Start Your Child&apos;s Admission Journey
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            Fill in the details below and our admission team will get in touch
            with you shortly.
          </p>
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#F8FAFC] p-8 shadow-xl md:p-12">
          {submitMessage.text ? (
            <div
              className={`mb-6 rounded-2xl border px-5 py-4 ${submitMessage.type === "error"
                  ? "border-red-200 bg-red-50 text-red-700"
                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
                }`}
            >
              {submitMessage.text}
            </div>
          ) : null}

          <form
            className="grid gap-x-8 gap-y-6 md:grid-cols-2"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="md:col-span-2">
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Name of the Child"
                className={getFieldClassName(Boolean(errors.childName))}
              />
              {errors.childName ? (
                <p className={errorClassName}>{errors.childName}</p>
              ) : null}
            </div>

            <div>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={getFieldClassName(Boolean(errors.dateOfBirth))}
              />
              {errors.dateOfBirth ? (
                <p className={errorClassName}>{errors.dateOfBirth}</p>
              ) : null}
            </div>

            <div>
              <input
                type="number"
                min="1"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className={getFieldClassName(Boolean(errors.age))}
              />
              {errors.age ? (
                <p className={errorClassName}>{errors.age}</p>
              ) : null}
            </div>

            <div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`${getFieldClassName(Boolean(errors.gender))} appearance-none`}
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender ? (
                <p className={errorClassName}>{errors.gender}</p>
              ) : null}
            </div>

            <div>
              <select
                name="admissionClass"
                value={formData.admissionClass}
                onChange={handleChange}
                className={`${getFieldClassName(Boolean(errors.admissionClass))} appearance-none`}
              >
                <option value="" disabled>
                  Admission for Class
                </option>
                {gradeOptions.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {errors.admissionClass ? (
                <p className={errorClassName}>{errors.admissionClass}</p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <input
                type="text"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                placeholder="From Which School"
                className={getFieldClassName(Boolean(errors.previousSchool))}
              />
              {errors.previousSchool ? (
                <p className={errorClassName}>{errors.previousSchool}</p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Father's Name"
                className={getFieldClassName(Boolean(errors.fatherName))}
              />
              {errors.fatherName ? (
                <p className={errorClassName}>{errors.fatherName}</p>
              ) : null}
            </div>

            <div>
              <div
                className={`flex items-center border-b px-3 py-4 ${errors.fatherPhone ? "border-[#D62828]" : "border-[#17375D]"
                  }`}
              >
                <span className="mr-3 whitespace-nowrap text-sm text-[#17375D]">
                  +91
                </span>
                <input
                  type="tel"
                  name="fatherPhone"
                  value={formData.fatherPhone}
                  onChange={handleChange}
                  placeholder="Phone No"
                  className="w-full bg-transparent text-base text-[#17375D] outline-none placeholder:text-[#A8AFB9]"
                />
              </div>
              {errors.fatherPhone ? (
                <p className={errorClassName}>{errors.fatherPhone}</p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <input
                type="text"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                placeholder="Education & Occupation"
                className={getFieldClassName(Boolean(errors.fatherOccupation))}
              />
              {errors.fatherOccupation ? (
                <p className={errorClassName}>{errors.fatherOccupation}</p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Mother's Name"
                className={getFieldClassName(Boolean(errors.motherName))}
              />
              {errors.motherName ? (
                <p className={errorClassName}>{errors.motherName}</p>
              ) : null}
            </div>

            <div>
              <div
                className={`flex items-center border-b px-3 py-4 ${errors.motherPhone ? "border-[#D62828]" : "border-[#17375D]"
                  }`}
              >
                <span className="mr-3 whitespace-nowrap text-sm text-[#17375D]">
                  +91
                </span>
                <input
                  type="tel"
                  name="motherPhone"
                  value={formData.motherPhone}
                  onChange={handleChange}
                  placeholder="Phone No"
                  className="w-full bg-transparent text-base text-[#17375D] outline-none placeholder:text-[#A8AFB9]"
                />
              </div>
              {errors.motherPhone ? (
                <p className={errorClassName}>{errors.motherPhone}</p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <input
                type="text"
                name="motherOccupation"
                value={formData.motherOccupation}
                onChange={handleChange}
                placeholder="Education & Occupation"
                className={getFieldClassName(Boolean(errors.motherOccupation))}
              />
              {errors.motherOccupation ? (
                <p className={errorClassName}>{errors.motherOccupation}</p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className={getFieldClassName(Boolean(errors.address))}
              />
              {errors.address ? (
                <p className={errorClassName}>{errors.address}</p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className={getFieldClassName(Boolean(errors.city))}
              />
              {errors.city ? (
                <p className={errorClassName}>{errors.city}</p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className={getFieldClassName(Boolean(errors.state))}
              />
              {errors.state ? (
                <p className={errorClassName}>{errors.state}</p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <textarea
                rows="3"
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                placeholder="Your Expectations from the School"
                className={`${getFieldClassName(
                  Boolean(errors.expectations),
                )} resize-none`}
              />
              {errors.expectations ? (
                <p className={errorClassName}>{errors.expectations}</p>
              ) : null}
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={isSaving}
                className="rounded-xl bg-[#17375D] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#10243A]"
              >
                {isSaving ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
