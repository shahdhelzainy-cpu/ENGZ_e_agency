
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const langToggle = document.querySelector("#lang-toggle");

const translations = [
  [".nav-links a:nth-child(1)", "Home", "الرئيسية"],
  [".nav-links a:nth-child(2)", "Services", "خدماتنا"],
  [".nav-links a:nth-child(3)", "Our Work", "أعمالنا"],
  [".nav-links a:nth-child(4)", "About", "من نحن"],

  [".nav-cta span:first-child", "Let's Talk", "تواصل معنا"],
  [".social-label", "FOLLOW ENGZ", "تابع ENGZ"],

  [".eyebrow", "INDEPENDENT CREATIVE AGENCY", "وكالة إبداعية مستقلة"],

  ["#home h1", 'WE MAKE<br>BRANDS <span class="outline-text">MATTER.</span>',
    'نصنع<br>علامات تجارية <span class="outline-text">تترك أثرًا.</span>'],

  [".hero-description",
    "We turn bold ideas into powerful brands. Strategy, creativity, and digital experiences that move your business forward.",
    "نحوّل الأفكار الجريئة إلى علامات تجارية قوية، من خلال الاستراتيجية والإبداع والتجارب الرقمية التي تدفع أعمالك إلى الأمام."],

  [".hero-actions .button", 'Explore Our Work <span>↗</span>', 'اكتشف أعمالنا <span>↗</span>'],
  [".hero-actions .text-link", "What We Do ↓", "ماذا نقدم ↓"],

  [".hero-bottom span:first-child", "BUILT FOR THE BOLD.", "صُنعنا لأصحاب الطموح."],
  [".hero-bottom span:last-child", "SCROLL TO EXPLORE ↓", "مرّر لاكتشاف المزيد ↓"],

  [".ticker-track span:nth-child(1)", "BRANDING ✳", "بناء العلامات التجارية ✳"],
  [".ticker-track span:nth-child(2)", "DIGITAL MARKETING ✳", "التسويق الرقمي ✳"],
  [".ticker-track span:nth-child(3)", "WEB DESIGN ✳", "تصميم المواقع ✳"],
  [".ticker-track span:nth-child(4)", "CREATIVE STRATEGY ✳", "الاستراتيجية الإبداعية ✳"],
  [".ticker-track span:nth-child(5)", "BRANDING ✳", "بناء العلامات التجارية ✳"],
  [".ticker-track span:nth-child(6)", "DIGITAL MARKETING ✳", "التسويق الرقمي ✳"],
  [".ticker-track span:nth-child(7)", "WEB DESIGN ✳", "تصميم المواقع ✳"],
  [".ticker-track span:nth-child(8)", "CREATIVE STRATEGY ✳", "الاستراتيجية الإبداعية ✳"],

  [".services .section-label", "01 / WHAT WE DO", "01 / خدماتنا"],
  [".services .section-heading h2", 'GOOD IDEAS.<br><span>GREAT EXECUTION.</span>',
    'أفكار عظيمة.<br><span>تنفيذ استثنائي.</span>'],
  [".services .section-heading > p",
    "Everything your brand needs to stand out, connect, and grow.",
    "كل ما تحتاجه علامتك التجارية لتتميز وتتواصل مع جمهورها وتنمو."],

  [".service-card:nth-child(1) h3", "Brand Identity", "الهوية البصرية"],
  [".service-card:nth-child(1) p", "We build distinctive visual identities that make your brand instantly recognizable.",
    "نصمم هويات بصرية مميزة تجعل علامتك التجارية سهلة التعرّف والتذكّر."],
  [".service-card:nth-child(1) .service-link", "LET'S BUILD YOUR BRAND ↗", "لنبنِ علامتك التجارية ↗"],

  [".service-card:nth-child(2) h3", "Digital Marketing", "التسويق الرقمي"],
  [".service-card:nth-child(2) p", "Smart campaigns designed to reach the right people and turn attention into action.",
    "حملات ذكية تصل إلى الجمهور المناسب وتحول الاهتمام إلى نتائج."],
  [".service-card:nth-child(2) .service-link", "GROW YOUR BUSINESS ↗", "طوّر أعمالك ↗"],

  [".service-card:nth-child(3) h3", "Social Media", "إدارة السوشيال ميديا"],
  [".service-card:nth-child(3) p", "Content and strategies that make people stop scrolling and start connecting.",
    "محتوى واستراتيجيات تجذب الانتباه وتشجع الجمهور على التفاعل."],
  [".service-card:nth-child(3) .service-link", "OWN YOUR SOCIALS ↗", "طوّر حضورك الرقمي ↗"],

  [".service-card:nth-child(4) h3", "Web Development", "تطوير المواقع"],
  [".service-card:nth-child(4) p", "Modern, responsive websites that look great and turn visitors into customers.",
    "مواقع عصرية ومتجاوبة بتصميم جذاب تساعد في تحويل الزوار إلى عملاء."],
  [".service-card:nth-child(4) .service-link", "BUILD YOUR WEBSITE ↗", "أنشئ موقعك ↗"],

  [".work .section-label", "02 / SELECTED WORK", "02 / أعمال مختارة"],
  [".work .section-heading h2", 'LESS TALK.<br><span>MORE IMPACT.</span>',
    'كلام أقل.<br><span>تأثير أكبر.</span>'],
  [".work .section-heading > p", "A glimpse of the creative direction we bring to every project.",
    "لمحة عن رؤيتنا الإبداعية التي نقدمها في كل مشروع."],

  [".work-card:nth-child(1) .project-info h3", "NOVA — Brand Identity", "NOVA — الهوية البصرية"],
  [".work-card:nth-child(1) .project-info p", "Branding / Art Direction", "بناء العلامة / التوجيه الفني"],

  [".work-card:nth-child(2) .project-info h3", "LEVEL — Digital Campaign", "LEVEL — حملة رقمية"],
  [".work-card:nth-child(2) .project-info p", "Marketing / Creative", "تسويق / إبداع"],

  [".portfolio-note", "These are concept projects created for the website design.",
    "هذه مشاريع تجريبية أُنشئت لعرض تصميم الموقع."],

  [".about .section-label", "03 / WHO WE ARE", "03 / من نحن"],
  [".about h2", 'WE DON’T DO<br><span>ORDINARY.</span>',
    'نحن لا نصنع<br><span>شيئًا عاديًا.</span>'],
  [".about-content p:nth-of-type(1)",
    "ENGZ is a creative agency built around one belief: brands deserve more than just attention. They deserve to be remembered.",
    "ENGZ وكالة إبداعية تؤمن بأن العلامات التجارية تستحق أكثر من مجرد لفت الانتباه؛ بل تستحق أن تبقى في الذاكرة."],
  [".about-content p:nth-of-type(2)",
    "We mix strategy, design, and digital thinking to create meaningful experiences for ambitious businesses.",
    "نجمع بين الاستراتيجية والتصميم والتفكير الرقمي لنصنع تجارب مؤثرة للشركات الطموحة."],
  [".about-content .button", 'Let’s Create Something <span>↗</span>', 'لنصنع شيئًا مميزًا <span>↗</span>'],

  [".contact .section-label", "04 / HAVE A PROJECT?", "04 / هل لديك مشروع؟"],
  [".contact h2", 'LET’S MAKE<br><span>SOMETHING BIG.</span>',
    'هيا نصنع<br><span>شيئًا استثنائيًا.</span>'],
  [".contact > p", "Got an idea? Tell us about it. Let's turn it into something real.",
    "لديك فكرة؟ أخبرنا عنها، ودعنا نحولها إلى واقع."],

  [".footer > p", "CREATIVE THINKING. REAL IMPACT.", "تفكير إبداعي. تأثير حقيقي."],
  [".back-top", "BACK TO TOP ↑", "العودة للأعلى ↑"],
  [".footer-bottom span:first-child", "© 2026 ENGZ AGENCY", "© 2026 وكالة ENGZ"],
  [".footer-bottom span:last-child", "BUILT TO STAND OUT.", "صُممنا لنتميز."]
];

function setLanguage(language) {
  const isArabic = language === "ar";

  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  translations.forEach(([selector, english, arabic]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = isArabic ? arabic : english;
    }
  });

  document.querySelectorAll(".social-links a").forEach((link, index) => {
    const labels = isArabic
      ? ["فيسبوك", "إنستجرام", "واتساب", "تيك توك"]
      : ["FB", "IG", "WA", "TK"];

    link.innerHTML = `${labels[index]} <span>↗</span>`;
  });

  if (langToggle) {
    langToggle.textContent = isArabic ? "English" : "عربي";
    langToggle.setAttribute(
      "aria-label",
      isArabic ? "Switch to English" : "التبديل إلى العربية"
    );
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-label", isArabic ? "فتح القائمة" : "Toggle menu");
  }

  localStorage.setItem("engz-language", language);
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLanguage =
      document.documentElement.lang === "ar" ? "en" : "ar";

    setLanguage(nextLanguage);
  });
}

// Mobile navigation
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Restore saved language
const savedLanguage = localStorage.getItem("engz-language");
setLanguage(savedLanguage === "ar" ? "ar" : "en");
