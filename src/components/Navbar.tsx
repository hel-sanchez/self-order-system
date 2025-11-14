import React from "react";
import { House, ShoppingBasket, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const NavbarPage = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <ul className="list md:flex-row gap-5">
        <li className="p-0 list-row text-xl font-bold cursor-pointer hover:text-blue-700">
          <Link href="/" className="hover:underline flex flex-row">
          <House />
            {t("nav.home")}
          </Link>
        </li>

        <li className="p-0 list-row text-xl font-bold cursor-pointer hover:text-blue-700">
          <Link href="/" className="hover:underline flex flex-row">
          <Users />
            {t("nav.staff")}
          </Link>
        </li>

        <li className="p-0 list-row text-xl font-bold cursor-pointer hover:text-blue-700">
          <Link href="/cart" className="hover:underline flex flex-row">
            <ShoppingBasket />
            {t("nav.cart")}
          </Link>
        </li>
      </ul>
    </div>
  );
};
