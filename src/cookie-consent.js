const STORAGE_KEY = "cookieConsent";

/**
 * GDPR-style cookie banner: shows once, remembers the choice in
 * localStorage, and only calls `onAccept` (wires up analytics) if the
 * visitor accepts.
 */
export function initCookieConsent({ onAccept } = {}) {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;

  const acceptBtn = document.getElementById("cookie-accept");
  const declineBtn = document.getElementById("cookie-decline");
  const choice = localStorage.getItem(STORAGE_KEY);

  if (choice === "accepted") {
    onAccept?.();
    return;
  }
  if (choice === "declined") {
    return;
  }

  setTimeout(() => banner.removeAttribute("hidden"), 1000);

  const dismiss = () => banner.setAttribute("hidden", "");

  acceptBtn?.addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    dismiss();
    onAccept?.();
  });

  declineBtn?.addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    dismiss();
  });
}
