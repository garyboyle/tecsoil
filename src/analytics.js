const GA_MEASUREMENT_ID = "G-M4YX92STE9";

/**
 * Loads Google Analytics only when called — pair with initCookieConsent's
 * onAccept so GA never loads before the visitor consents.
 */
export function loadGoogleAnalytics() {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}
