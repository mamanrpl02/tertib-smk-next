"use client";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const main = document.getElementById("mainContent");
    if (!main) return;

    const handleScroll = () => {
      setVisible(main.scrollTop > 200);
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => {
        const main = document.getElementById("mainContent");
        main?.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-12 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition z-50 ${
        visible ? "block" : "hidden"
      }`}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
