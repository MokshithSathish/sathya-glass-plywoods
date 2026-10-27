const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    productCards.forEach((card) => {
      card.classList.toggle("hidden", !(filter === "all" || card.dataset.category === filter));
    });
  });
});

const translations = {
  en: {
    "top-tagline":"Quality materials for homes, shops & interiors", "top-call":"Call us:", "hero-eyebrow":"GLASS • PLYWOOD • INTERIOR MATERIALS", "products-eyebrow":"WHAT WE OFFER", "about-eyebrow":"ABOUT OUR SHOP", "contact-eyebrow":"LET'S TALK ABOUT YOUR PROJECT", "category-glass":"GLASS", "category-mirrors":"MIRRORS", "category-plywood":"PLYWOOD", "category-boards":"BOARDS", "category-laminates":"LAMINATES", "nav-home":"Home", "nav-products":"Products", "nav-about":"About us", "nav-contact":"Contact", "nav-whatsapp":"WhatsApp us ↗",
    "hero-title":"Build your space<br>with <em>clarity</em> and character.", "hero-copy":"Explore glass and plywood solutions for homes, businesses and interior projects. Visit Sathya Glass &amp; Plywoods in K.R. Nagar.", "hero-products":"Explore products <span>↓</span>", "hero-enquire":"Enquire on WhatsApp ↗", "hero-location":"Located near the bus stand, K.R. Nagar",
    "trust-glass":"Glass solutions", "trust-plywood":"Plywood essentials", "trust-help":"Personal assistance", "trust-local":"Local, friendly service",
    "products-title":"Find the right fit<br>for your <em>project.</em>", "products-intro":"From clean, modern glass finishes to dependable plywood options, speak to our team about the materials you need.", "filter-all":"All products", "filter-glass":"Glass", "filter-plywood":"Plywood", "filter-laminates":"Laminates",
    "product-clear-title":"Clear Glass", "product-clear-desc":"A clean, versatile option for a range of interior uses.", "product-tinted-title":"Tinted &amp; Decorative Glass", "product-tinted-desc":"Ask about glass styles for decorative and interior projects.", "product-mirrors-title":"Mirrors", "product-mirrors-desc":"Mirror options to complement bathrooms, bedrooms and interiors.", "product-commercial-title":"Commercial Plywood", "product-commercial-desc":"Ask us about plywood options for furniture and general projects.", "product-waterproof-title":"Waterproof Plywood", "product-waterproof-desc":"Contact the shop to check suitable grades, sizes and availability.", "product-boards-title":"Boards &amp; Panels", "product-boards-desc":"Ask about available board and panel options for your project.", "product-woodgrain-title":"Woodgrain Laminates", "product-woodgrain-desc":"Wood-inspired looks for furniture, cabinets and interiors.", "product-solid-title":"Solid Colour Laminates", "product-solid-desc":"Simple colour finishes for a clean, modern look.", "product-textured-title":"Textured Laminates", "product-textured-desc":"Explore textured finishes and ask about available patterns.", "enquire-short":"Enquire ↗", "availability-note":"Product examples shown for reference. Please contact the shop to confirm available types, sizes, finishes and current stock.",
    "stamp-local":"YOUR LOCAL", "stamp-store":"GLASS &amp;<br>PLYWOOD<br>STORE", "about-title":"Good materials.<br><em>Better spaces.</em>", "about-years":"With more than 20 years in the business, Sathya Glass &amp; Plywoods has been serving customers in and around K.R. Nagar with glass, plywood and interior material solutions for homes, shops and projects.", "about-copy":"Tell us what you are planning, and contact us to check product options and availability before visiting.", "about-contact":"Visit or contact us <span>↗</span>",
    "contact-title":"Need a hand<br>choosing materials?", "contact-copy":"Call us or send a WhatsApp message. We’ll be happy to help with your enquiry.", "contact-whatsapp":"Chat on WhatsApp ↗", "contact-call":"Call the shop", "label-phone":"PHONE", "label-whatsapp":"WHATSAPP", "label-address":"SHOP ADDRESS · TAP TO NAVIGATE", "map-directions":"Get directions in Google Maps <span aria-hidden=\"true\">↗</span>", "review-prompt":"Visited our shop? Your genuine feedback helps other customers find us.", "review-link":"Find us on Google Maps and share feedback ↗", "footer-copy":"Glass, plywood and materials for your next project."
  },
  kn: {
    "top-tagline":"ಮನೆ, ಅಂಗಡಿ ಮತ್ತು ಒಳಾಂಗಣಗಳಿಗೆ ಗುಣಮಟ್ಟದ ವಸ್ತುಗಳು", "top-call":"ಕರೆ ಮಾಡಿ:", "hero-eyebrow":"ಗಾಜು • ಪ್ಲೈವುಡ್ • ಒಳಾಂಗಣ ವಸ್ತುಗಳು", "products-eyebrow":"ನಮ್ಮ ಉತ್ಪನ್ನಗಳು", "about-eyebrow":"ನಮ್ಮ ಅಂಗಡಿಯ ಬಗ್ಗೆ", "contact-eyebrow":"ನಿಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ ಮಾತನಾಡೋಣ", "category-glass":"ಗಾಜು", "category-mirrors":"ಕನ್ನಡಿಗಳು", "category-plywood":"ಪ್ಲೈವುಡ್", "category-boards":"ಬೋರ್ಡ್‌ಗಳು", "category-laminates":"ಲ್ಯಾಮಿನೇಟ್‌ಗಳು", "nav-home":"ಮುಖಪುಟ", "nav-products":"ಉತ್ಪನ್ನಗಳು", "nav-about":"ನಮ್ಮ ಬಗ್ಗೆ", "nav-contact":"ಸಂಪರ್ಕಿಸಿ", "nav-whatsapp":"ವಾಟ್ಸಾಪ್ ಮಾಡಿ ↗",
    "hero-title":"ನಿಮ್ಮ ಸ್ಥಳವನ್ನು<br><em>ಸೊಗಸಾಗಿ</em> ರೂಪಿಸಿ.", "hero-copy":"ಮನೆ, ವ್ಯಾಪಾರ ಮತ್ತು ಒಳಾಂಗಣ ಕೆಲಸಗಳಿಗೆ ಗಾಜು ಹಾಗೂ ಪ್ಲೈವುಡ್ ಆಯ್ಕೆಗಳನ್ನು ತಿಳಿಯಿರಿ. ಕೆ.ಆರ್. ನಗರದಲ್ಲಿರುವ ಸತ್ಯ ಗ್ಲಾಸ್ &amp; ಪ್ಲೈವುಡ್ಸ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.", "hero-products":"ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ <span>↓</span>", "hero-enquire":"ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ ↗", "hero-location":"ಕೆ.ಆರ್. ನಗರ ಬಸ್ ನಿಲ್ದಾಣದ ಸಮೀಪ", 
    "trust-glass":"ಗಾಜಿನ ಪರಿಹಾರಗಳು", "trust-plywood":"ಪ್ಲೈವುಡ್ ವಸ್ತುಗಳು", "trust-help":"ವೈಯಕ್ತಿಕ ಸಹಾಯ", "trust-local":"ಸ್ಥಳೀಯ ಸ್ನೇಹಪರ ಸೇವೆ",
    "products-title":"ನಿಮ್ಮ <em>ಯೋಜನೆಗೆ</em><br>ಸರಿಯಾದ ಆಯ್ಕೆ.", "products-intro":"ಆಧುನಿಕ ಗಾಜಿನ ವಿನ್ಯಾಸಗಳಿಂದ ವಿಶ್ವಾಸಾರ್ಹ ಪ್ಲೈವುಡ್ ಆಯ್ಕೆಗಳವರೆಗೆ, ನಿಮಗೆ ಬೇಕಾದ ವಸ್ತುಗಳ ಬಗ್ಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.", "filter-all":"ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು", "filter-glass":"ಗಾಜು", "filter-plywood":"ಪ್ಲೈವುಡ್", "filter-laminates":"ಲ್ಯಾಮಿನೇಟ್‌ಗಳು",
    "product-clear-title":"ಪಾರದರ್ಶಕ ಗಾಜು", "product-clear-desc":"ವಿವಿಧ ಒಳಾಂಗಣ ಬಳಕೆಗಳಿಗೆ ಸೂಕ್ತವಾದ ಸರಳ ಆಯ್ಕೆ.", "product-tinted-title":"ಬಣ್ಣದ ಮತ್ತು ಅಲಂಕಾರಿಕ ಗಾಜು", "product-tinted-desc":"ಅಲಂಕಾರಿಕ ಹಾಗೂ ಒಳಾಂಗಣ ಕೆಲಸಗಳಿಗೆ ಲಭ್ಯವಿರುವ ಗಾಜಿನ ವಿನ್ಯಾಸಗಳನ್ನು ವಿಚಾರಿಸಿ.", "product-mirrors-title":"ಕನ್ನಡಿಗಳು", "product-mirrors-desc":"ಬಾತ್‌ರೂಮ್, ಮಲಗುವ ಕೋಣೆ ಮತ್ತು ಒಳಾಂಗಣಗಳಿಗೆ ಹೊಂದುವ ಕನ್ನಡಿಗಳ ಆಯ್ಕೆಗಳು.", "product-commercial-title":"ಕಮರ್ಷಿಯಲ್ ಪ್ಲೈವುಡ್", "product-commercial-desc":"ಫರ್ನಿಚರ್ ಮತ್ತು ಸಾಮಾನ್ಯ ಕೆಲಸಗಳಿಗೆ ಲಭ್ಯವಿರುವ ಪ್ಲೈವುಡ್ ಆಯ್ಕೆಗಳನ್ನು ವಿಚಾರಿಸಿ.", "product-waterproof-title":"ವಾಟರ್‌ಪ್ರೂಫ್ ಪ್ಲೈವುಡ್", "product-waterproof-desc":"ಲಭ್ಯವಿರುವ ಗ್ರೇಡ್, ಗಾತ್ರ ಮತ್ತು ಸ್ಟಾಕ್‌ಗಾಗಿ ಅಂಗಡಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.", "product-boards-title":"ಬೋರ್ಡ್‌ಗಳು ಮತ್ತು ಪ್ಯಾನೆಲ್‌ಗಳು", "product-boards-desc":"ನಿಮ್ಮ ಯೋಜನೆಗೆ ಲಭ್ಯವಿರುವ ಬೋರ್ಡ್ ಮತ್ತು ಪ್ಯಾನೆಲ್ ಆಯ್ಕೆಗಳನ್ನು ವಿಚಾರಿಸಿ.", "product-woodgrain-title":"ಮರದ ವಿನ್ಯಾಸದ ಲ್ಯಾಮಿನೇಟ್‌ಗಳು", "product-woodgrain-desc":"ಫರ್ನಿಚರ್, ಕ್ಯಾಬಿನೆಟ್ ಮತ್ತು ಒಳಾಂಗಣಗಳಿಗೆ ಮರದ ವಿನ್ಯಾಸದ ಫಿನಿಷ್‌ಗಳು.", "product-solid-title":"ಏಕಬಣ್ಣದ ಲ್ಯಾಮಿನೇಟ್‌ಗಳು", "product-solid-desc":"ಸರಳ ಮತ್ತು ಆಧುನಿಕ ನೋಟಕ್ಕಾಗಿ ವಿವಿಧ ಬಣ್ಣದ ಫಿನಿಷ್‌ಗಳು.", "product-textured-title":"ಟೆಕ್ಸ್ಚರ್ ಲ್ಯಾಮಿನೇಟ್‌ಗಳು", "product-textured-desc":"ಲಭ್ಯವಿರುವ ವಿನ್ಯಾಸಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ ಮತ್ತು ವಿಭಿನ್ನ ಟೆಕ್ಸ್ಚರ್ ಫಿನಿಷ್‌ಗಳನ್ನು ನೋಡಿ.", "enquire-short":"ವಿಚಾರಿಸಿ ↗", "availability-note":"ಇವು ಉದಾಹರಣೆಯ ಉತ್ಪನ್ನಗಳು. ಲಭ್ಯವಿರುವ ವಿಧಗಳು, ಗಾತ್ರಗಳು, ಫಿನಿಷ್‌ಗಳು ಮತ್ತು ಸ್ಟಾಕ್‌ಗಾಗಿ ಅಂಗಡಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    "stamp-local":"ನಿಮ್ಮ ಸ್ಥಳೀಯ", "stamp-store":"ಗ್ಲಾಸ್ &amp;<br>ಪ್ಲೈವುಡ್<br>ಅಂಗಡಿ", "about-title":"ಗುಣಮಟ್ಟದ ವಸ್ತುಗಳು.<br><em>ಸುಂದರ ಸ್ಥಳಗಳು.</em>", "about-years":"20 ವರ್ಷಗಳಿಗಿಂತ ಹೆಚ್ಚು ಅನುಭವದೊಂದಿಗೆ, ಸತ್ಯ ಗ್ಲಾಸ್ &amp; ಪ್ಲೈವುಡ್ಸ್ ಕೆ.ಆರ್. ನಗರ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಗ್ರಾಹಕರಿಗೆ ಮನೆ, ಅಂಗಡಿ ಮತ್ತು ಒಳಾಂಗಣ ಕೆಲಸಗಳಿಗೆ ಗಾಜು, ಪ್ಲೈವುಡ್ ಹಾಗೂ ಇತರ ವಸ್ತುಗಳನ್ನು ಒದಗಿಸುತ್ತಿದೆ.", "about-copy":"ನಿಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಸಿ. ಭೇಟಿ ನೀಡುವ ಮೊದಲು ಲಭ್ಯವಿರುವ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಆಯ್ಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.", "about-contact":"ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಸಂಪರ್ಕಿಸಿ <span>↗</span>",
    "contact-title":"ವಸ್ತುಗಳ ಆಯ್ಕೆಗೆ<br>ಸಹಾಯ ಬೇಕೇ?", "contact-copy":"ನಮಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಕಳುಹಿಸಿ. ನಿಮ್ಮ ವಿಚಾರಣೆಗೆ ಸಹಾಯ ಮಾಡಲು ಸಂತೋಷವಾಗುತ್ತದೆ.", "contact-whatsapp":"ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ ↗", "contact-call":"ಅಂಗಡಿಗೆ ಕರೆ ಮಾಡಿ", "label-phone":"ಫೋನ್", "label-whatsapp":"ವಾಟ್ಸಾಪ್", "label-address":"ಅಂಗಡಿಯ ವಿಳಾಸ · ದಾರಿ ನೋಡಲು ಒತ್ತಿರಿ", "map-directions":"ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ದಾರಿ ಪಡೆಯಿರಿ <span aria-hidden=\"true\">↗</span>", "review-prompt":"ನಮ್ಮ ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿದ್ದೀರಾ? ನಿಮ್ಮ ನಿಜವಾದ ಅಭಿಪ್ರಾಯ ಇತರ ಗ್ರಾಹಕರಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.", "review-link":"ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನಮ್ಮನ್ನು ಹುಡುಕಿ ಮತ್ತು ಅಭಿಪ್ರಾಯ ಹಂಚಿಕೊಳ್ಳಿ ↗", "footer-copy":"ನಿಮ್ಮ ಮುಂದಿನ ಯೋಜನೆಗೆ ಗಾಜು, ಪ್ಲೈವುಡ್ ಮತ್ತು ಇತರ ವಸ್ತುಗಳು."
  }
};

let currentLanguage = localStorage.getItem("sathya-language") || "en";
const languageToggle = document.getElementById("languageToggle");
function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "kn" ? "kn" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = translations[language] && translations[language][key];
    if (translated) element.innerHTML = translated;
  });
  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "ಕನ್ನಡ" : "English";
    languageToggle.setAttribute("aria-pressed", String(language === "kn"));
    languageToggle.setAttribute("aria-label", language === "en" ? "Switch language to Kannada" : "Switch language to English");
  }
  localStorage.setItem("sathya-language", language);
}
if (languageToggle) {
  languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "kn" : "en"));
}
applyLanguage(currentLanguage);

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
