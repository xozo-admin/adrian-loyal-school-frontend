import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../api/authApi";
import { ADMIN_BASE_PATH } from "../adminConfig";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const response = await loginAdmin(form);
      localStorage.setItem("adminAuthenticated", "true");
      localStorage.setItem("adminUser", JSON.stringify(response.data.admin));
      navigate(`${ADMIN_BASE_PATH}/dashboard`, { replace: true });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          "Unable to login. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-center text-3xl font-bold text-[#16324F]">
          Admin Login
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Adrian Loyal School
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          {message.text ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {message.text}
            </div>
          ) : null}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full rounded-xl border p-3 outline-none focus:border-[#16324F]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-xl border p-3 outline-none focus:border-[#16324F]"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#16324F] py-3 font-semibold text-white transition hover:bg-[#10243A]"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="mt-4 text-center text-xs text-slate-400">
          Admin route: 2026theadrianloyalschool/admin/login
        </p>

      </div>

    </div>
  );
};

export default Login;
