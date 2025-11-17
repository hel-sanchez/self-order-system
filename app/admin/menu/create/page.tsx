"use client";
import { useState } from "react";
import { useMenuStore } from "@/src/store/useMenuStore";
import { useTranslation } from "react-i18next";

export default function CreateMenuPage() {
  const { t } = useTranslation("create");
  const addMenuItem = useMenuStore((s) => s.addMenuItem);
  const menu = useMenuStore((s) => s.menu); // 👈 get existing created menus

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !price) return;

    addMenuItem({
      name,
      description,
      price: parseFloat(price),
      image: image || undefined,
    });

    setSuccess(true);
    setName("");
    setDescription("");
    setPrice("");
    setImage("");

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 mx-auto">
      {/* LEFT: form */}
      <div className="md:min-w-150">
        <h1 className="text-3xl font-extrabold text-[#3B82F6] mb-4">
          {t("title")}
        </h1>

        {success && (
          <div className="alert alert-success mb-4">
            <span>{t("success")}</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
        >
          {/* NAME */}
          <div>
            <label className="font-semibold">{t("fields.nameLabel")}</label>
            <input
              type="text"
              className="input bg-white border border-black input-bordered w-full mt-1"
              placeholder={t("fields.namePlaceholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="font-semibold">
              {t("fields.descriptionLabel")}
            </label>
            <textarea
              className="textarea bg-white border border-black textarea-bordered w-full mt-1"
              placeholder={t("fields.descriptionPlaceholder")}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="font-semibold">{t("fields.priceLabel")}</label>
            <input
              type="number"
              className="input bg-white border border-black input-bordered w-full mt-1"
              placeholder={t("fields.pricePlaceholder")}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* IMAGE INPUTS */}
          <div>
            <label className="font-semibold">{t("fields.imageLabel")}</label>

            {/* URL INPUT */}
            <input
              type="text"
              className="input bg-white border border-black input-bordered w-full mt-1"
              placeholder={t("fields.imageUrlPlaceholder")}
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <p className="text-xs text-gray-500 mt-1">
              {t("fields.imageOrUpload")}
            </p>

            {/* FILE INPUT */}
            <input
              type="file"
              accept="image/*"
              className="file-input bg-white border border-black file-input-bordered w-full mt-1"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setImage(url);
                }
              }}
            />

            {/* PREVIEW */}
            {image && (
              <div className="mt-2">
                <p className="text-xs text-gray-500 mb-1">
                  {t("fields.imagePreview")}
                </p>
                <div className="w-32 h-20 rounded-lg overflow-hidden border">
                  <img
                    src={image}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <button className="btn bg-[#3B82F6] text-white w-full">
            {t("actions.submit")}
          </button>
        </form>
      </div>

      {/* RIGHT: list of all menus */}
      <div className="md:w-80">
        <h2 className="text-xl font-bold mb-3">{t("list.title")}</h2>

        {menu.length === 0 ? (
          <p className="text-sm text-gray-500">
            {t("list.empty")}
          </p>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-4 max-h-[420px] overflow-y-auto space-y-3">
            {menu.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-3 flex flex-col gap-1"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                )}
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="text-sm font-bold text-[#3B82F6]">
                    ¥{item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
