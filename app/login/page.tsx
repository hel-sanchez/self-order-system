"use client";

import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/store/useAuth";

export default function LoginPage() {
  const { t } = useTranslation("login");
  const router = useRouter();
  const login = useAuth((s) => s.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const ok = login(username, password);
    if (ok) {
      router.push("/admin");
    } else {
      setError(t("invalidCredentials"));
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white border-2 rounded-xl shadow-2xl w-full max-w-md px-8 py-5 md:px-10 md:py-12">
        {/* icon */}
        <div className="flex justify-center mb-6">
          <span className="text-5xl" aria-hidden="true">
            🍽️
          </span>
        </div>

        {/* title + subtitle */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800">
          {t("title")}
        </h1>
        <p className="mt-1 text-center text-sm text-gray-500">
          {t("subtitle")}
        </p>

        {/* form */}
        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          {/* Email / ID */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t("usernameLabel")}
            </label>
            <input
              type="username"
              className="input input-bordered w-full rounded-xl bg-gray-50"
              placeholder={t("usernamePlaceholder")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* PIN / Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t("passwordLabel")}
            </label>
            <input
              type="password"
              className="input input-bordered w-full rounded-xl bg-gray-50"
              placeholder={t("passwordPlaceholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* remember me */}
          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="checkbox checkbox-sm bg-gray-300 text-black"
            />
            <label
              htmlFor="remember"
              className="text-xs md:text-sm text-gray-600"
            >
              {t("rememberMe")}
            </label>
          </div>

          {/* error message */}
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

          {/* login button */}
          <button
            type="submit"
            className="btn w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full border-none"
          >
            {t("loginButton")}
          </button>
        </form>

        {/* footer text */}
        <p className="mt-6 text-[11px] md:text-xs text-center text-gray-500 leading-snug">
          {t("helpText")}
        </p>
      </div>
    </div>
  );
}
