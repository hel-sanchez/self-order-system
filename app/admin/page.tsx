"use client";

import StatisticsPage from "@/src/components/admin/Statistics";
import { useAuth } from "@/src/store/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AdminPage() {
  const { t } = useTranslation("admin");
  const user = useAuth((s) => s.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center py-10 text-gray-500">
        {t("loading")}
      </div>
    );
  }

  return (
    <div>
      <StatisticsPage />
    </div>
  );
}
