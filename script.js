/* ==========================================================
   Kurd Smart — script.js
   ========================================================== */

/* ==========================================================
   1. Translations (English versions of every data-i18n key)
   The Kurdish text already lives in the HTML as the default.
   ========================================================== */
const translations = {
  navHome: "Home", navVideos: "Videos", navLibrary: "Library", navQuotes: "Quotes",
  navAbout: "About", navCommunity: "Community", navTestimonials: "Reviews",
  navFaq: "FAQ", navContact: "Contact",

  preloaderText: "Loading your journey...",

  heroTag: "🌻 Better Together",
  heroTitle: "Welcome to Kurd Smart",
  heroDesc: "Every day is a new chance to become better.",
  heroBtn: "Get Started",
  heroBtnLibrary: "Browse Library",

  dailyQuoteTitle: "Quote of the Day",

  xpTitle: "Kurd Smart Rank",
  streakTitle: "Daily Streak",
  streakDaysLabel: "Days",

  videosTag: "🌻 Featured",
  videosTitle: "Motivational Videos",
  videosDesc: "Watch motivational videos and stories here.",
  catMotivationTitle: "Motivational Videos",
  catMotivationDesc: "Daily motivating videos to keep you going",
  catIdeasTitle: "Stories",
  catIdeasDesc: "Learn from other people's experiences",
  catGrowthTitle: "Growth",
  catGrowthDesc: "Move one step forward with every line",
  badgeMotivation: "🔥 Motivation",
  badgeStory: "💡 Story",
  v1Title: "Discipline is the secret to success",
  v1Desc: "The video that will change your whole life",
  v2Title: "Do it for yourself",
  v2Desc: "Live for yourself, don't listen to others",
  v3Title: "The power of big thinking",
  v3Desc: "A story that teaches you how to think",
  v4Title: "A strong mindset",
  v4Desc: "Take control of your mental strength",
  v5Title: "Organize your mind",
  v5Desc: "Take control of your mental strength",
  v6Title: "Stay imaginative",
  v6Desc: "Don't listen to what people say",
  v7Title: "Fifth video title",
  v7Desc: "A short summary about the fifth video.",

  searchPlaceholder: "🔍 Search books, quotes, videos...",

  shortsTag: "🔥 Short Videos",
  shortsTitle: "Motivation in a few seconds",
  shortsDesc: "Short, powerful videos for whenever you need a little motivation.",
  short1Tag: "🔥 Mindset", short1Title: "Don't wait for motivation",
  short1Desc: "Discipline begins when motivation disappears.",
  short2Tag: "🌱 Growth", short2Title: "Small steps matter",
  short2Desc: "You don't need to be fast. Just don't stop.",
  short3Tag: "🚀 Success", short3Title: "Your future is watching",
  short3Desc: "What you do today builds who you become tomorrow.",
  short4Tag: "🌻 Life", short4Title: "Keep moving forward",
  short4Desc: "Even a small step is still a step forward.",
  shortsHint: "← Scroll to discover more →",

  libraryTag: "📚 Library",
  libraryTitle: "The Kurd Smart Library",
  libraryDesc: "A collection of the best personal-growth and psychology books, so you learn something new every day.",
  bookFilterAll: "All",
  bookFilterMindset: "Mindset",
  bookFilterHabit: "Habits",
  bookFilterSuccess: "Success",
  bookFilterLife: "Life & Philosophy",
  bookBadgeHabit: "Habit",
  bookBadgeMindset: "Mindset",
  bookBadgeSuccess: "Success",
  bookBadgeLife: "Life",
  book1Desc: "How to build tiny habits that turn into remarkable results.",
  book2Desc: "The difference between a fixed mindset and a growth mindset.",
  book3Desc: "How to focus in a world full of distraction and do deep, meaningful work.",
  book4Desc: "The Japanese secret to finding purpose and joy in everyday life.",
  book5Desc: "The science of habits, and how changing them can change your life.",
  book6Desc: "The power of passion and perseverance in achieving long-term success.",
  booksEmpty: "No books matched your search.",
  bookReadBtn: "📖 Read the summary",

  quotesTag: "💬 Quote of the Day",
  quotesTitle: "Quote of the Day",
  mainQuote: "The smallest step is better than doing nothing at all.",
  copyQuoteBtn: "Copy Quote 📋",
  pastExperienceLabel: "Past experience",

  factTitle: "Did you know?",

  featuresTag: "Why Kurd Smart? 🌟",
  featuresTitle: "A few reasons to choose Kurd Smart",
  featuresDesc: "Knowledge, motivation and great books, all in one place, every day.",
  feature1Title: "Books", feature1Desc: "A curated selection of the best personal-growth books.",
  feature2Title: "Motivation", feature2Desc: "Daily videos and ideas to help you stay consistent.",
  feature3Title: "New Ideas", feature3Desc: "Learn the best ways of thinking and living.",
  featureBtn: "See more →",

  stat1: "Motivational videos for success",
  stat2: "Books for personal growth",
  stat3: "Daily quotes",
  stat4: "Continuous growth",

  aboutTag: "👤 About Kurd Smart",
  aboutTitle: "What is Kurd Smart?",
  aboutDesc: "A place for motivation, learning and daily growth.",
  aboutQuoteTitle: "Commitment, resilience, consistency",
  aboutQuoteText: "You can't begin the next chapter of your life if you keep re-reading the last one.",
  aboutMeTitle: "About me...",
  aboutMeText: "I'm Sarwan Farsat Khdir, a student in the Information Systems Engineering department. On 1-7-2026 I decided to build a website called Kurd Smart. After a lot of effort, I managed to finish the first version within a month, so that every day, even one small step, becomes a way to leave bad habits behind and walk toward a better life. 🌻🤍🌟",
  aboutBtn: "Learn more",

  communityTag: "🌍 The Kurd Smart Community",
  communityTitle: "We're not just a website",
  communityDesc: "Thousands of people learn and grow together here, every day.",
  community1: "Members", community2: "Feedback", community3: "Recommended books",
  communityEveryDay: "Every Day", community4: "We keep growing",
  communityBtn: "Join our community",

  testimonialsTag: "💬 User Feedback",
  testimonialsTitle: "What people say about Kurd Smart",
  testimonialsDesc: "Words from a few people who've grown with us.",
  roleStudent: "Student", roleReader: "Reader", roleDeveloper: "Developer",
  testimonial1: "\"Thank you Kurd Smart. Every day it motivates me to read and grow.\"",
  testimonial2: "\"The design is beautiful, and the books are genuinely well chosen.\"",
  testimonial3: "\"The best place for anyone who wants to be a little better every day.\"",

  faqTag: "❓ Frequently Asked Questions",
  faqTitle: "Frequently Asked Questions",
  faqDesc: "If you have a question, you might find the answer here.",
  faqQ1: "📚 What is Kurd Smart?",
  faqA1: "Kurd Smart is a website for personal growth, books, motivation and new ideas.",
  faqQ2: "💰 Is the website free to use?",
  faqA2: "Yes, all the content is made available for free.",
  faqQ3: "📩 How can I get in touch?",
  faqA3: "You can send a message through the \"Contact\" section, or reach us on social media.",
  faqQ4: "🌱 Is new content added regularly?",
  faqA4: "Yes, new quotes, books and videos are added daily.",

  contactTag: "📩 Contact",
  contactTitle: "Get in touch",
  contactDesc: "If you have a question or a suggestion, feel free to reach out.",
  profileName: "Sarwan Farsat",
  profileDesc: "Guiding your daily growth through knowledge, books and powerful ideas, every day.",
  socialEmail: "📧 Email",
};

const STORAGE_KEYS = { lang: "ks_lang", theme: "ks_theme" };

/* ==========================================================
   2. Language switching
   ========================================================== */
const kuOriginals = new Map();
document.querySelectorAll("[data-i18n]").forEach((el) => {
  kuOriginals.set(el, el.textContent);
});
const kuPlaceholders = new Map();
document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
  kuPlaceholders.set(el, el.getAttribute("placeholder"));
});

function applyLanguage(lang) {
  const html = document.documentElement;
  const isEn = lang === "en";

  html.setAttribute("lang", isEn ? "en" : "ku");
  html.setAttribute("dir", isEn ? "ltr" : "rtl");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (isEn && translations[key]) {
      el.textContent = translations[key];
    } else {
      el.textContent = kuOriginals.get(el);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (isEn && translations[key]) {
      el.setAttribute("placeholder", translations[key]);
    } else {
      el.setAttribute("placeholder", kuPlaceholders.get(el));
    }
  });

  const label = document.getElementById("langToggleLabel");
  if (label) label.textContent = isEn ? "کو" : "EN";

  localStorage.setItem(STORAGE_KEYS.lang, lang);
  updateGreeting();
  renderDailyQuote();
  renderDailyFact();
  renderQuoteStory();
  updateClock();
  renderFooterMessage();
  refreshVideoTexts();
  renderXP();
  renderStreak();
}

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("lang") === "en" ? "en" : "ku";
    applyLanguage(current === "en" ? "ku" : "en");
  });
}

/* ==========================================================
   3. Theme (dark / light)
   ========================================================== */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

const savedTheme = localStorage.getItem(STORAGE_KEYS.theme)
  || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

/* ==========================================================
   4. Mobile navigation
   ========================================================== */
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navOverlay = document.getElementById("navOverlay");

function closeMobileNav() {
  navMenu.classList.remove("open");
  navOverlay.classList.remove("show");
  menuBtn.setAttribute("aria-expanded", "false");
}

if (menuBtn && navMenu && navOverlay) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navOverlay.classList.toggle("show", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });
  navOverlay.addEventListener("click", closeMobileNav);
  navMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMobileNav));
}

/* ==========================================================
   5. Header scroll shadow + active nav link + progress bar
   ========================================================== */
const header = document.querySelector("header");
const progressBar = document.getElementById("progressBar");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#nav-menu a");
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (header) header.classList.toggle("scrolled", scrollTop > 30);

  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar && pageHeight > 0) {
    progressBar.style.width = `${(scrollTop / pageHeight) * 100}%`;
  }

  if (scrollTopBtn) scrollTopBtn.classList.toggle("show", scrollTop > 400);

  let currentId = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    if (scrollTop >= top) currentId = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ==========================================================
   6. Scroll reveal
   ========================================================== */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

/* ==========================================================
   7. Counters
   ========================================================== */
const counters = document.querySelectorAll(".counter");
if ("IntersectionObserver" in window && counters.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-target"), 10) || 0;
      const duration = 1400;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString();
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach((c) => counterObserver.observe(c));
}

/* ==========================================================
   8. FAQ accordion
   ========================================================== */
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      if (openItem !== item) openItem.classList.remove("open");
    });
    item.classList.toggle("open", !isOpen);
    awardXP("openFaq", 1);
  });
});

/* ==========================================================
   8b. XP + Streak system
   ========================================================== */
const XP_KEYS = { xp: "ks_xp", lastVisit: "ks_last_visit", streak: "ks_streak", awarded: "ks_xp_awarded" };

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function getXP() { return parseInt(localStorage.getItem(XP_KEYS.xp) || "0", 10); }
function setXP(value) { localStorage.setItem(XP_KEYS.xp, String(Math.max(0, value))); }

function getAwardedToday() {
  const raw = localStorage.getItem(XP_KEYS.awarded);
  if (!raw) return { date: todayStr(), types: [] };
  try {
    const parsed = JSON.parse(raw);
    if (parsed.date !== todayStr()) return { date: todayStr(), types: [] };
    return parsed;
  } catch (e) {
    return { date: todayStr(), types: [] };
  }
}

function awardXP(type, amount) {
  const awarded = getAwardedToday();
  if (awarded.types.includes(type)) return;
  awarded.types.push(type);
  localStorage.setItem(XP_KEYS.awarded, JSON.stringify(awarded));
  setXP(getXP() + amount);
  renderXP(true);
}

function processDailyVisit() {
  const today = todayStr();
  const lastVisit = localStorage.getItem(XP_KEYS.lastVisit);
  let streak = parseInt(localStorage.getItem(XP_KEYS.streak) || "0", 10);
  let bonusEarned = false;

  if (lastVisit === today) {
    // already counted today, nothing to do
  } else if (!lastVisit) {
    streak = 1;
    setXP(getXP() + 10);
    bonusEarned = true;
  } else {
    const diffDays = Math.round((new Date(today) - new Date(lastVisit)) / 86400000);
    if (diffDays === 1) {
      streak += 1;
      setXP(getXP() + 10 + Math.min(streak * 2, 30));
    } else {
      streak = 1;
      setXP(getXP() + 5);
    }
    bonusEarned = true;
  }

  localStorage.setItem(XP_KEYS.lastVisit, today);
  localStorage.setItem(XP_KEYS.streak, String(streak));

  if (bonusEarned) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const isEn = document.documentElement.getAttribute("lang") === "en";
        showToast(isEn ? `🔥 Day ${streak} streak bonus!` : `🔥 پاداشتی خۆڕاگری ڕۆژی ${streak}!`);
      }, 1200);
    });
  }
}

const ranks = [
  { min: 0, ku: "دەستپێکەر", en: "Beginner", icon: "🌱" },
  { min: 50, ku: "فێرخواز", en: "Learner", icon: "📘" },
  { min: 150, ku: "هانبوو", en: "Motivated", icon: "🔥" },
  { min: 300, ku: "بەدەستهێنەر", en: "Achiever", icon: "🚀" },
  { min: 600, ku: "ئەفسانە", en: "Legend", icon: "👑" },
];

function getRank(xp) {
  return [...ranks].reverse().find((r) => xp >= r.min) || ranks[0];
}

function renderXP(animate = false) {
  const xp = getXP();
  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;
  const rank = getRank(xp);
  const isEn = document.documentElement.getAttribute("lang") === "en";

  const xpFill = document.getElementById("xpFill");
  const xpValue = document.getElementById("xpValue");
  const xpLevel = document.getElementById("xpLevel");
  const xpRank = document.getElementById("xpRank");

  if (xpFill) xpFill.style.width = `${progress}%`;
  if (xpValue) xpValue.textContent = `${xp} XP`;
  if (xpLevel) xpLevel.textContent = `Lv.${level}`;
  if (xpRank) xpRank.textContent = `${rank.icon} ${isEn ? rank.en : rank.ku}`;

  if (animate) showToast(isEn ? "+XP earned! 🌻" : "+XP وەرگیرا! 🌻");
}

function renderStreak() {
  const streak = parseInt(localStorage.getItem(XP_KEYS.streak) || "1", 10);
  const isEn = document.documentElement.getAttribute("lang") === "en";
  const streakDaysEl = document.getElementById("streakDays");
  const streakMsgEl = document.getElementById("streakMessage");

  if (streakDaysEl) streakDaysEl.textContent = streak;

  let msgKu, msgEn;
  if (streak >= 30) { msgKu = "مانگێک بەردەوامی! 👑"; msgEn = "A whole month of consistency! 👑"; }
  else if (streak >= 7) { msgKu = "یەک هەفتەی تەواو! سەرسوڕهێنەرە 🌟"; msgEn = "A full week streak! Amazing 🌟"; }
  else if (streak >= 3) { msgKu = "تۆ گڕگرتووی! بەردەوامبە 🔥"; msgEn = "You're on fire! Keep going 🔥"; }
  else { msgKu = "هەموو ڕۆژێک سەردانمان بکە 🌻"; msgEn = "Keep visiting every day 🌻"; }

  if (streakMsgEl) streakMsgEl.textContent = isEn ? msgEn : msgKu;
}

processDailyVisit();

/* ==========================================================
   9. Motivational videos — YouTube lite-embed cards
   ==========================================================
   Edit this array with your real YouTube videos: paste the
   video ID (the part after "v=" or after "youtu.be/"), pick a
   category ("motivation" | "ideas" | "growth"), and fill in a
   Kurdish + English title/description. The first video in the
   list is shown larger as the "featured" video.
   ========================================================== */
const youtubeVideos = [
{
    id: "HvGlroJa1vY",
    category: "ideas",
    badge: "story",
    titleKu: "میهرەبانی",
    titleEn: "Kindness",
    descKu: "ببینە میهرەبانی چۆن دێتەوە ڕێت.",
    descEn: "See how kindness finds its way back to you.",
},
 {
    id: "NWcQOnp2FA4",
    category: "ideas",
    badge: "story",
    titleKu: "هێزی بیرکردنەوەی مەزن 🧠",
    titleEn: "The Power of Great Thinking 🧠",
    descKu: "بەسەرهاتێکی کاریگەر.",
    descEn: "An impactful and inspiring story.",
},
 {
    id: "ZADryqZM_8g",
    category: "ideas",
    badge: "mindset",
    titleKu: "بیرکردنەوەت کۆنتڕۆل بکە 🧠",
    titleEn: "Control Your Mindset",
    descKu: "ئەو بیرکردنەوەیەی ژیانت دەگۆڕێت.",
    descEn: "The mindset that will change your life.",
},
{
    id: "qsgbZ7BlCzs",
    category: "ideas",
    badge: "story",
    titleKu: "بۆ خۆت ئەنجامی بدە 🌻",
    titleEn: "Do It For Yourself",
    descKu: "گوێ بە قسەی خەلک مەدە و بۆ خۆت بژی.",
    descEn: "Stop caring what people think and live for yourself.",
},
];

const badgeText = {
  motivation: { ku: "🔥 هاندان", en: "🔥 Motivation" },
  story: { ku: "💡 بەسەرهات", en: "💡 Story" },
};

function buildVideoCard(video, index) {
  const isEn = document.documentElement.getAttribute("lang") === "en";
  const card = document.createElement("div");
  card.className = "video-card" + (index === 0 ? " featured" : "");
  card.setAttribute("data-category", video.category);
  card.setAttribute("data-video-id", video.id);

  const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  card.innerHTML = `
    <div class="video-player" role="button" tabindex="0" aria-label="Play video">
      <div class="video-thumb" style="background-image:url('${thumbUrl}')"></div>
      <span class="video-play-btn">▶</span>
    </div>
    <div class="video-info">
      <span class="video-badge" data-badge="${video.badge}"></span>
      <h3 class="video-title"></h3>
      <p class="video-desc"></p>
    </div>
  `;

  const player = card.querySelector(".video-player");
  player.addEventListener("click", () => playVideo(player, video.id));
  player.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playVideo(player, video.id); }
  });

  updateVideoCardText(card, video, isEn);
  return card;
}

function playVideo(playerEl, id) {
  playerEl.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0"
    title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen loading="lazy"></iframe>`;
  awardXP("watchVideo", 3);
}

function updateVideoCardText(card, video, isEn) {
  const badgeEl = card.querySelector(".video-badge");
  const titleEl = card.querySelector(".video-title");
  const descEl = card.querySelector(".video-desc");
  const badgeInfo = badgeText[video.badge] || badgeText.motivation;
  badgeEl.textContent = isEn ? badgeInfo.en : badgeInfo.ku;
  titleEl.textContent = isEn ? video.titleEn : video.titleKu;
  descEl.textContent = isEn ? video.descEn : video.descKu;
}

function renderVideos() {
  const grid = document.getElementById("videosGrid");
  if (!grid) return;
  grid.innerHTML = "";
  youtubeVideos.forEach((video, index) => grid.appendChild(buildVideoCard(video, index)));
}

function refreshVideoTexts() {
  const isEn = document.documentElement.getAttribute("lang") === "en";
  document.querySelectorAll(".video-card").forEach((card, index) => {
    updateVideoCardText(card, youtubeVideos[index], isEn);
  });
}

renderVideos();

const videoFilters = document.querySelectorAll(".video-filter");
let videoCards = document.querySelectorAll(".video-card");

videoFilters.forEach((filterCard) => {
  filterCard.addEventListener("click", () => {
    videoFilters.forEach((c) => c.classList.remove("active"));
    filterCard.classList.add("active");
    const category = filterCard.getAttribute("data-category");
    videoCards.forEach((card) => {
      const match = category === "all" || card.getAttribute("data-category") === category;
      card.classList.toggle("hidden", !match);
    });
    awardXP("filterVideos", 2);
  });
});

/* ==========================================================
   10. Library — book filters + search
   ========================================================== */
const bookFilters = document.querySelectorAll(".book-filter");
const bookCards = document.querySelectorAll(".book-card");
const booksEmptyState = document.getElementById("booksEmptyState");
let activeBookCategory = "all";

function refreshBooksVisibility(searchTerm = "") {
  const term = searchTerm.trim().toLowerCase();
  let visibleCount = 0;

  bookCards.forEach((card) => {
    const categoryMatch = activeBookCategory === "all" || card.getAttribute("data-book-category") === activeBookCategory;
    const searchable = `${card.getAttribute("data-title") || ""} ${card.getAttribute("data-author") || ""} ${card.textContent}`.toLowerCase();
    const searchMatch = term === "" || searchable.includes(term);
    const show = categoryMatch && searchMatch;
    card.classList.toggle("hidden", !show);
    if (show) visibleCount += 1;
  });

  if (booksEmptyState) booksEmptyState.hidden = visibleCount !== 0;
}

bookFilters.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    bookFilters.forEach((b) => b.classList.remove("active"));
    filterBtn.classList.add("active");
    activeBookCategory = filterBtn.getAttribute("data-book-category");
    refreshBooksVisibility(document.getElementById("liveSearch")?.value || "");
    awardXP("browseLibrary", 2);
  });
});

/* ==========================================================
   11. Live search (books + videos)
   ========================================================== */
const liveSearch = document.getElementById("liveSearch");
if (liveSearch) {
  liveSearch.addEventListener("input", () => {
    const term = liveSearch.value.trim().toLowerCase();

    refreshBooksVisibility(term);

    videoCards.forEach((card) => {
      const searchable = card.textContent.toLowerCase();
      const matchesSearch = term === "" || searchable.includes(term);
      const activeCategory = document.querySelector(".video-filter.active")?.getAttribute("data-category");
      const matchesCategory = !activeCategory || activeCategory === "all" || card.getAttribute("data-category") === activeCategory;
      card.classList.toggle("hidden", term !== "" ? !matchesSearch : !matchesCategory);
    });
  });
}

/* ==========================================================
   12. Quote of the day + copy
   ========================================================== */
const quoteCollectionKu = [
  "پێشکەوتنی بچووک هەموو ڕۆژێک، سەرکەوتنی گەورە دروست دەکات. 🌻",
  "خۆڕاگری دەتباتە شوێنێک کە هاندان ناتوانێت.",
  "داهاتووت بە ئەوەی ئەمڕۆ دەیکەیت دروست دەبێت.",
  "خەون کردارت دەوێت، نەک تەنها خەیاڵ.",
  "یەک لاپەڕەی ئەمڕۆ باشترە لە یەک کتێبی سبەی.",
  "خۆڕاگر بە. شتی گەورە کات دەوێت.",
  "بەردەوامی زاڵە بەسەر تەواوکاریدا.",
  "هەرگیز وازمەهێنە لە فێربوون، چونکە ژیان وازناهێنێت لە فێرکردنمان.",
  "پێش هەموو کەسێک باوەڕ بە تواناکانت بهێنە.",
  "سەرکەوتن بە یەک بڕیارەوە دەست پێدەکات.",
];
const quoteCollectionEn = [
  "Small progress every day creates big success. 🌻",
  "Discipline will take you where motivation cannot.",
  "Your future is created by what you do today.",
  "Dreams require action, not only imagination.",
  "One page today is better than one book tomorrow.",
  "Stay patient. Great things take time.",
  "Consistency beats perfection every single time.",
  "Never stop learning because life never stops teaching.",
  "Believe in your ability before others do.",
  "Success begins with one decision.",
];

const smartDailyQuoteEl = document.getElementById("smartDailyQuote");
function renderDailyQuote() {
  if (!smartDailyQuoteEl) return;
  const isEn = document.documentElement.getAttribute("lang") === "en";
  const list = isEn ? quoteCollectionEn : quoteCollectionKu;
  const index = new Date().getDate() % list.length;
  smartDailyQuoteEl.textContent = list[index];
}

/* ==========================================================
   12b. Quote Story Card (Instagram-story style, Day-N counter)
   ========================================================== */
const FOUNDING_DATE = new Date(2026, 6, 1); // Kurd Smart founded 1-7-2026

function calcDayNumber(offset = 0) {
  const diff = Math.floor((Date.now() - FOUNDING_DATE.getTime()) / 86400000) + 1;
  return Math.max(1, diff + offset);
}

const storyQuotes = [
  {
    posterTitle: 'Every <span class="hl-a">closed door</span> is a <span class="hl-b">new opportunity</span> for a <span class="hl-b">better</span> one.',
    tag: { ku: "دەرگای نوێ", en: "new doors" },
    full: { ku: "هەر دەرگایەکی داخراو دەرفەتێکی نوێیە بۆ دەرگایەکی باشتر.", en: "Every closed door is a new opportunity for a better one." },
  },
  {
    posterTitle: 'A journey of a <span class="hl-b">thousand miles</span> begins with a <span class="hl-a">single step</span>.',
    tag: { ku: "هەنگاوی بچووک", en: "small steps" },
    full: { ku: "گەشتێکی هەزار میل بە یەک هەنگاو دەست پێدەکات.", en: "A journey of a thousand miles begins with a single step." },
  },
  {
    posterTitle: '<span class="hl-a">Patience</span> means keeping a <span class="hl-b">good attitude</span> while you wait.',
    tag: { ku: "خۆڕاگری", en: "patience" },
    full: { ku: "خۆڕاگری تەنها چاوەڕوانبوون نییە، بەڵکو بەردەوامیی بیرکردنەوەیەکی باشە لەکاتی چاوەڕوانیدا.", en: "Patience is not just waiting, it's keeping a good attitude while you wait." },
  },
  {
    posterTitle: 'Every <span class="hl-a">sunrise</span> is an invitation to <span class="hl-b">begin again</span>.',
    tag: { ku: "دەستپێکی نوێ", en: "new beginnings" },
    full: { ku: "هەر خۆرهەڵاتنێک بانگهێشتنێکە بۆ دەستپێکردنەوە.", en: "Every sunrise is an invitation to begin again." },
  },
  {
    posterTitle: '<span class="hl-a">Growth</span> is painful, but staying <span class="hl-b">stuck</span> hurts more.',
    tag: { ku: "گەشە", en: "growth" },
    full: { ku: "گەشەکردن ئازارە، بەڵام لەشوێن مانەوە زیاتر ئازار دەدات.", en: "Growth is painful, but staying stuck hurts even more." },
  },
  {
    posterTitle: '<span class="hl-b">Discipline</span> is choosing what you want <span class="hl-a">most</span>, not what you want <span class="hl-b">now</span>.',
    tag: { ku: "پابەندبوون", en: "discipline" },
    full: { ku: "پابەندبوون هەڵبژاردنە لە نێوان ئەوەی ئێستا دەتەوێت و ئەوەی زۆرترین دەتەوێت.", en: "Discipline is choosing between what you want now and what you want most." },
  },
  {
    posterTitle: '<span class="hl-a">Believe</span> you can, and you\u2019re already <span class="hl-b">halfway</span> there.',
    tag: { ku: "باوەڕ بەخۆت", en: "self belief" },
    full: { ku: "باوەڕ بهێنە کە دەتوانیت، ئەوکات نیوەی ڕێگا تێپەڕاندووە.", en: "Believe you can and you're halfway there." },
  },
  {
    posterTitle: 'Where <span class="hl-a">focus</span> goes, <span class="hl-b">energy</span> flows.',
    tag: { ku: "سەرنج", en: "focus" },
    full: { ku: "بۆ کوێ سەرنجت بچێت، وزەشت بۆ ئەوێ دەڕوات.", en: "Where focus goes, energy flows." },
  },
  {
    posterTitle: 'Fall <span class="hl-b">seven times</span>, stand up <span class="hl-a">eight</span>.',
    tag: { ku: "خۆڕاگری", en: "resilience" },
    full: { ku: "حەوت جار بکەوە، هەشتەم جار هەستەوە.", en: "Fall seven times, stand up eight." },
  },
  {
    posterTitle: '<span class="hl-a">Gratitude</span> turns what we have into <span class="hl-b">enough</span>.',
    tag: { ku: "سوپاسگوزاری", en: "gratitude" },
    full: { ku: "سوپاسگوزاری ئەوەی هەمانە دەکاتە بەس.", en: "Gratitude turns what we have into enough." },
  },
];

let quoteDayOffset = 0;

function renderQuoteStory(animate = false) {
  const dayBadge = document.getElementById("quoteDayBadge");
  if (!dayBadge) return;

  const dayNumber = calcDayNumber(quoteDayOffset);
  const total = storyQuotes.length;
  const index = ((dayNumber - 1) % total + total) % total;
  const data = storyQuotes[index];
  const isEn = document.documentElement.getAttribute("lang") === "en";
  const card = document.querySelector(".quote-story-card");

  const paint = () => {
    dayBadge.textContent = `DAY-${dayNumber}`;
    document.getElementById("quoteStoryTitle").innerHTML = data.posterTitle;
    document.getElementById("quoteDayLabel").textContent = isEn ? `Day-${dayNumber}` : `ڕۆژ-${dayNumber}`;
    document.getElementById("quoteTagText").textContent = isEn ? data.tag.en : data.tag.ku;
    document.getElementById("quoteFullText").textContent = isEn ? data.full.en : data.full.ku;
    if (card) card.classList.remove("swap");
  };

  if (animate && card) {
    card.classList.add("swap");
    setTimeout(paint, 180);
  } else {
    paint();
  }
}

document.getElementById("quotePrevBtn")?.addEventListener("click", () => {
  quoteDayOffset -= 1;
  renderQuoteStory(true);
});
document.getElementById("quoteNextBtn")?.addEventListener("click", () => {
  quoteDayOffset += 1;
  renderQuoteStory(true);
});

const copyQuoteBtn = document.getElementById("copyQuote");
if (copyQuoteBtn) {
  copyQuoteBtn.addEventListener("click", () => {
    const isEn = document.documentElement.getAttribute("lang") === "en";
    const text = document.getElementById("quoteFullText")?.textContent || "";
    navigator.clipboard?.writeText(text).then(() => showToast(isEn ? "Quote copied!" : "وتەکە کۆپی کرا!"));
    awardXP("copyQuote", 5);
  });
}

function showToast(message) {
  let toast = document.getElementById("ksToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ksToast";
    toast.style.cssText = `
      position:fixed; bottom:90px; left:50%; transform:translateX(-50%);
      background:var(--primary-color,#0F4C81); color:#fff; padding:12px 22px;
      border-radius:50px; z-index:2000; font-size:.9rem; box-shadow:0 10px 30px rgba(0,0,0,.2);
      opacity:0; transition:opacity .3s ease;`;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => { toast.style.opacity = "1"; });
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = "0"; }, 2200);
}

/* ==========================================================
   13. Smart facts
   ========================================================== */
const dailyFactEl = document.getElementById("dailyFact");
const factsKu = [
  "📚 تەنها ٢٠ خولەک خوێندنەوە هەموو ڕۆژێک، دەتوانێت زیاتر لە یەک ملیۆن وشەت پێبدات لە ساڵێکدا.",
  "🧠 مێشکت پەیوەندی نوێ دروست دەکات هەر کاتێک شتێکی نوێ فێردەبیت.",
  "💪 خووی بچووکی ڕۆژانە بەهێزترە لە هەوڵی گەورەی کاتی.",
  "🌱 فێربوونی یەک بیرۆکەی نوێ هەموو ڕۆژێک، بریتییە لە ٣٦٥ بیرۆکەی نوێ ساڵانە.",
  "⌛ کەسانی سەرکەوتوو زیاتر سەرنج دەدەنە بەردەوامی وەک لە هاندان.",
  "📖 خوێندنەوە پێش نوستن یارمەتی بیرگە و سەرنج دەدات.",
  "🎯 نووسینی ئامانجەکانت دەرفەتی بەدەستهێنانیان زیاد دەکات.",
  "🚀 پێشکەوتن زۆرجار دیار نییە تا ئەوەی نەبێت وازلێهێنان.",
  "🌻 هەموو شارەزایەک ڕۆژێک تازەکار بووە.",
  "💡 زانیاری هێزی ڕاستەقینەی هەیە تەنها کاتێک بەکاربهێنرێت.",
];
const factsEn = [
  "📚 Reading just 20 minutes every day can expose you to over one million words in a year.",
  "🧠 Your brain creates new connections every time you learn something new.",
  "💪 Small daily habits are more powerful than huge occasional efforts.",
  "🌱 Learning one new idea every day means 365 new ideas every year.",
  "⌛ Successful people often focus on consistency more than motivation.",
  "📖 Reading before sleeping can improve memory and focus.",
  "🎯 Writing down your goals increases the chance of achieving them.",
  "🚀 Progress is usually invisible until it becomes impossible to ignore.",
  "🌻 Every expert was once a complete beginner.",
  "💡 Knowledge becomes powerful only when you apply it.",
];

function renderDailyFact() {
  if (!dailyFactEl) return;
  const isEn = document.documentElement.getAttribute("lang") === "en";
  const list = isEn ? factsEn : factsKu;
  const index = new Date().getDay() % list.length;
  dailyFactEl.textContent = list[index];
}

/* ==========================================================
   14. Greeting + live clock
   ========================================================== */
const greetingTitleEl = document.getElementById("greetingTitle");
const greetingMessageEl = document.getElementById("greetingMessage");
const greetingEl = document.getElementById("greeting");
const liveClockEl = document.getElementById("liveClock");

function updateGreeting() {
  const isEn = document.documentElement.getAttribute("lang") === "en";
  const hour = new Date().getHours();
  let title, message;

  if (hour < 12) {
    title = isEn ? "🌅 Good morning!" : "🌅 بەیانیت باش!";
    message = isEn ? "Start your day with one small step." : "ڕۆژەکەت بەیەک هەنگاوی بچووک دەست پێبکە.";
  } else if (hour < 18) {
    title = isEn ? "☀️ Good afternoon!" : "☀️ ڕۆژتان باش!";
    message = isEn ? "Keep going, you're doing great." : "بەردەوامبە، بەباشی بەڕێوەی دەبەیت.";
  } else {
    title = isEn ? "🌙 Good evening!" : "🌙 ئێواران باش!";
    message = isEn ? "Reflect on today and prepare for tomorrow." : "سەیری ئەمڕۆ بکە و بۆ سبەی ئامادە بە.";
  }

  if (greetingTitleEl) greetingTitleEl.textContent = title;
  if (greetingMessageEl) greetingMessageEl.textContent = message;
  if (greetingEl) greetingEl.textContent = isEn ? "🟢 Kurd Smart is live" : "🟢 کورد سمارت چالاکە";
}

function updateClock() {
  if (!liveClockEl) return;
  const now = new Date();
  liveClockEl.textContent = now.toLocaleTimeString(
    document.documentElement.getAttribute("lang") === "en" ? "en-US" : "ar-IQ",
    { hour: "2-digit", minute: "2-digit" }
  );
}
setInterval(updateClock, 30000);

/* ==========================================================
   15. Footer year + message
   ========================================================== */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const footerMessageEl = document.getElementById("footerMessage");
function renderFooterMessage() {
  if (!footerMessageEl) return;
  footerMessageEl.textContent = document.documentElement.getAttribute("lang") === "en"
    ? "Made with 🌻 for daily growth."
    : "دروستکراوە بە 🌻 بۆ گەشەی ڕۆژانە.";
}

/* ==========================================================
   16. Preloader
   ========================================================== */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => preloader.classList.add("hide"), 400);
  }
});

/* ==========================================================
   17. Keyboard shortcuts (Alt+D dark mode, Alt+T top, Alt+L lang)
   ========================================================== */
document.addEventListener("keydown", (event) => {
  if (!event.altKey) return;
  const key = event.key.toLowerCase();
  if (key === "d" && themeToggle) themeToggle.click();
  if (key === "t") window.scrollTo({ top: 0, behavior: "smooth" });
  if (key === "l" && langToggle) langToggle.click();
});

/* ==========================================================
   18. Init (order matters: after all functions are defined)
   ========================================================== */
applyLanguage(localStorage.getItem(STORAGE_KEYS.lang) || "ku");
refreshBooksVisibility();
