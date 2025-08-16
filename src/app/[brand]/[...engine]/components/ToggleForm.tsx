"use client";

import { useEffect } from "react";

export default function ToggleForm() {
  useEffect(() => {
    const overlay = document.getElementById("quotation-overlay");
    const openBtn = document.getElementById("open-quotation-btn");
    const closeBtn = document.getElementById("close-quotation-btn");
    const cancelBtn = document.getElementById("cancel-quotation-btn");
    const form = document.querySelector<HTMLFormElement>("#quotation-overlay");

    if (!overlay || !openBtn || !closeBtn || !cancelBtn || !form) return;

    const openOverlay = () => {
      overlay.classList.remove("hidden");
      overlay.classList.add("flex");
    };

    const closeOverlay = () => {
      overlay.classList.remove("flex");
      overlay.classList.add("hidden");
    };

    openBtn.addEventListener("click", openOverlay);
    closeBtn.addEventListener("click", closeOverlay);
    cancelBtn.addEventListener("click", closeOverlay);

    overlay.addEventListener("click", (e) => {
      const target = e.target as HTMLElement | null;
      if (target && target.id === "quotation-overlay") {
        closeOverlay();
      }
    });

    form.addEventListener("submit", () => {
      closeOverlay();
    });

    return () => {
      openBtn.removeEventListener("click", openOverlay);
      closeBtn.removeEventListener("click", closeOverlay);
      cancelBtn.removeEventListener("click", closeOverlay);
      overlay.removeEventListener("click", closeOverlay);
      form.removeEventListener("submit", closeOverlay);
    };
  }, []);

  return null;
}
