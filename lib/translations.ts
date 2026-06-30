export type Locale = "en" | "ar";

export const translations = {
  en: {
    dir: "ltr",
    brand: "GulfAutomation",
    nav: {
      services: "Services",
      why: "Why Us",
      work: "Work",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      cta: "Book a Call",
    },
    hero: {
      badge: "AI & Web Studio · Kuwait",
      title: "We build websites, AI automations and business systems that generate more customers.",
      subtitle:
        "A boutique studio helping small and medium businesses in Kuwait win online — premium websites, smart AI chatbots, and automations that run your operations on autopilot.",
      ctaPrimary: "Book Free Consultation",
      ctaSecondary: "View Portfolio",
      stats: [
        { value: "48h", label: "Avg. first draft" },
        { value: "95+", label: "Lighthouse score" },
        { value: "24/7", label: "AI support" },
      ],
    },
    services: {
      title: "Services",
      subtitle: "Everything you need to grow online, under one roof.",
      items: [
        {
          title: "Website Design",
          desc: "Fast, modern, mobile-first websites that turn visitors into customers.",
        },
        {
          title: "AI Chatbots",
          desc: "24/7 assistants that answer questions, qualify leads and book appointments.",
        },
        {
          title: "Business Automation",
          desc: "Connect your tools and automate repetitive work so your team focuses on growth.",
        },
        {
          title: "Website Maintenance",
          desc: "Updates, backups, security and performance monitoring handled for you.",
        },
        {
          title: "SEO",
          desc: "Rank higher on Google in Kuwait and bring in steady organic traffic.",
        },
        {
          title: "Bilingual Sites",
          desc: "Seamless Arabic & English experiences built for the local market.",
        },
      ],
    },
    why: {
      title: "Why Choose Us",
      subtitle: "Built for results, not just looks.",
      items: [
        { title: "Fast Delivery", desc: "Launch in days, not months, without cutting corners." },
        { title: "Mobile-First", desc: "Designed for the 90% of customers browsing on their phones." },
        { title: "Secure Hosting", desc: "Reliable, encrypted hosting with global performance." },
        { title: "Automation Expertise", desc: "We connect AI and your tools to save real hours every week." },
        { title: "Ongoing Support", desc: "We stay with you long after launch as your tech partner." },
      ],
    },
    portfolio: {
      title: "Selected Work",
      subtitle: "A glimpse of the kind of results we deliver.",
      cta: "View case study",
      items: [
        { title: "Retail Storefront", tag: "E-commerce" },
        { title: "Clinic Booking System", tag: "Automation" },
        { title: "Restaurant Chatbot", tag: "AI Chatbot" },
        { title: "Real Estate Portal", tag: "Web Design" },
        { title: "Logistics Dashboard", tag: "Business System" },
        { title: "Fitness Brand Site", tag: "SEO + Web" },
      ],
    },
    process: {
      title: "How We Work",
      subtitle: "A simple, transparent process from idea to launch.",
      steps: [
        { title: "Discover", desc: "We learn your business, goals and customers." },
        { title: "Design", desc: "We craft a premium, on-brand experience." },
        { title: "Build", desc: "We develop fast, secure and scalable systems." },
        { title: "Launch", desc: "We ship, test and make sure everything performs." },
        { title: "Support", desc: "We maintain, optimize and grow with you." },
      ],
    },
    testimonials: {
      title: "What Clients Say",
      subtitle: "Trusted by ambitious businesses across Kuwait.",
      items: [
        {
          quote: "Our new website doubled enquiries in the first month. The team just gets it.",
          name: "Sara A.",
          role: "Founder, Retail Brand",
        },
        {
          quote: "The AI chatbot handles most customer questions now. It feels like an extra employee.",
          name: "Mohammed K.",
          role: "Owner, Clinic",
        },
        {
          quote: "Automations saved my staff hours every single day. Best investment this year.",
          name: "Layla H.",
          role: "Manager, Logistics",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know before we start.",
      items: [
        {
          q: "How long does a website take?",
          a: "Most projects launch within 1–3 weeks depending on scope. You'll see a first draft within 48 hours.",
        },
        {
          q: "Do you build Arabic and English websites?",
          a: "Yes. Every site can be fully bilingual with proper right-to-left Arabic support built in.",
        },
        {
          q: "What does an AI chatbot cost?",
          a: "It depends on complexity. We'll recommend the most cost-effective option in your free consultation.",
        },
        {
          q: "Do you offer ongoing support?",
          a: "Absolutely. We offer maintenance plans covering updates, security, backups and improvements.",
        },
        {
          q: "Where are you based?",
          a: "We're based in Kuwait and work with small and medium businesses across the GCC.",
        },
      ],
    },
    contact: {
      title: "Let's build something great",
      subtitle: "Tell us about your project and we'll reply within one business day.",
      name: "Name",
      email: "Email",
      business: "Business",
      message: "Message",
      send: "Send Message",
      whatsapp: "Chat on WhatsApp",
      or: "or",
      emailUs: "Email us at",
      emailPlaceholder: "pranaykuwait@gmail.com",
    },
    footer: {
      tagline: "Websites, AI automations and business systems for ambitious companies in Kuwait.",
      rights: "All rights reserved.",
      builtWith: "Crafted with care in Kuwait.",
    },
  },
  ar: {
    dir: "rtl",
    brand: "GulfAutomation",
    nav: {
      services: "الخدمات",
      why: "لماذا نحن",
      work: "أعمالنا",
      process: "آلية العمل",
      faq: "الأسئلة",
      contact: "تواصل",
      cta: "احجز مكالمة",
    },
    hero: {
      badge: "استوديو ذكاء اصطناعي وويب · الكويت",
      title: "نبني مواقع وأنظمة أعمال وأتمتة بالذكاء الاصطناعي تجلب لك عملاء أكثر.",
      subtitle:
        "استوديو متخصص يساعد الشركات الصغيرة والمتوسطة في الكويت على التميّز رقمياً — مواقع احترافية، روبوتات دردشة ذكية، وأتمتة تدير أعمالك تلقائياً.",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "شاهد أعمالنا",
      stats: [
        { value: "٤٨ ساعة", label: "أول تصميم" },
        { value: "+٩٥", label: "تقييم الأداء" },
        { value: "٢٤/٧", label: "دعم ذكي" },
      ],
    },
    services: {
      title: "الخدمات",
      subtitle: "كل ما تحتاجه للنمو رقمياً في مكان واحد.",
      items: [
        { title: "تصميم المواقع", desc: "مواقع سريعة وعصرية تتحول من زوار إلى عملاء." },
        { title: "روبوتات الدردشة الذكية", desc: "مساعدون يعملون ٢٤/٧ للرد وتأهيل العملاء وحجز المواعيد." },
        { title: "أتمتة الأعمال", desc: "نربط أدواتك ونؤتمت المهام المتكررة ليتفرّغ فريقك للنمو." },
        { title: "صيانة المواقع", desc: "تحديثات ونسخ احتياطي وأمان ومراقبة أداء بالكامل." },
        { title: "تحسين محركات البحث", desc: "ترتيب أعلى في جوجل بالكويت وزيارات مستمرة." },
        { title: "مواقع ثنائية اللغة", desc: "تجربة عربية وإنجليزية متكاملة مصممة للسوق المحلي." },
      ],
    },
    why: {
      title: "لماذا تختارنا",
      subtitle: "مصممة لتحقيق النتائج لا للمظهر فقط.",
      items: [
        { title: "تسليم سريع", desc: "إطلاق خلال أيام لا أشهر دون تنازل عن الجودة." },
        { title: "الجوال أولاً", desc: "مصممة لـ ٩٠٪ من العملاء الذين يتصفحون عبر هواتفهم." },
        { title: "استضافة آمنة", desc: "استضافة موثوقة ومشفّرة بأداء عالمي." },
        { title: "خبرة في الأتمتة", desc: "نربط الذكاء الاصطناعي بأدواتك لتوفير ساعات أسبوعياً." },
        { title: "دعم مستمر", desc: "نبقى معك بعد الإطلاق كشريك تقني." },
      ],
    },
    portfolio: {
      title: "أعمال مختارة",
      subtitle: "لمحة عن نوع النتائج التي نقدمها.",
      cta: "عرض الحالة",
      items: [
        { title: "متجر تجزئة", tag: "تجارة إلكترونية" },
        { title: "نظام حجز عيادة", tag: "أتمتة" },
        { title: "روبوت مطعم", tag: "دردشة ذكية" },
        { title: "بوابة عقارات", tag: "تصميم ويب" },
        { title: "لوحة لوجستيات", tag: "نظام أعمال" },
        { title: "موقع لياقة", tag: "سيو وويب" },
      ],
    },
    process: {
      title: "كيف نعمل",
      subtitle: "عملية بسيطة وشفافة من الفكرة إلى الإطلاق.",
      steps: [
        { title: "الاكتشاف", desc: "نتعرف على عملك وأهدافك وعملائك." },
        { title: "التصميم", desc: "نصمم تجربة احترافية تعكس علامتك." },
        { title: "البناء", desc: "نطوّر أنظمة سريعة وآمنة وقابلة للتوسع." },
        { title: "الإطلاق", desc: "نطلق ونختبر ونتأكد من الأداء." },
        { title: "الدعم", desc: "نصون ونحسّن وننمو معك." },
      ],
    },
    testimonials: {
      title: "آراء العملاء",
      subtitle: "موثوق من شركات طموحة في جميع أنحاء الكويت.",
      items: [
        { quote: "موقعنا الجديد ضاعف الاستفسارات في الشهر الأول. الفريق يفهم العمل تماماً.", name: "سارة العنزي", role: "مؤسِّسة، علامة تجزئة" },
        { quote: "روبوت الدردشة يتعامل مع معظم أسئلة العملاء الآن، وكأنه موظف إضافي.", name: "محمد خالد", role: "مالك، عيادة" },
        { quote: "الأتمتة وفّرت على موظفيّ ساعات كل يوم. أفضل استثمار هذا العام.", name: "ليلى حسين", role: "مديرة، لوجستيات" },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته قبل أن نبدأ.",
      items: [
        { q: "كم يستغرق بناء الموقع؟", a: "معظم المشاريع تُطلق خلال ١-٣ أسابيع حسب الحجم، وترى أول تصميم خلال ٤٨ ساعة." },
        { q: "هل تبنون مواقع عربية وإنجليزية؟", a: "نعم، كل موقع يمكن أن يكون ثنائي اللغة بالكامل مع دعم كامل للعربية من اليمين لليسار." },
        { q: "كم تكلفة روبوت الدردشة الذكي؟", a: "يعتمد على التعقيد، وسنرشّح لك الخيار الأنسب في الاستشارة المجانية." },
        { q: "هل تقدمون دعماً مستمراً؟", a: "بالتأكيد، لدينا خطط صيانة تشمل التحديثات والأمان والنسخ الاحتياطي والتحسينات." },
        { q: "أين مقركم؟", a: "مقرنا في الكويت ونعمل مع الشركات الصغيرة والمتوسطة في دول الخليج." },
      ],
    },
    contact: {
      title: "لنبنِ شيئاً رائعاً",
      subtitle: "أخبرنا عن مشروعك وسنرد خلال يوم عمل واحد.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      business: "اسم النشاط",
      message: "رسالتك",
      send: "إرسال الرسالة",
      whatsapp: "تواصل عبر واتساب",
      or: "أو",
      emailUs: "راسلنا على",
      emailPlaceholder: "pranaykuwait@gmail.com",
    },
    footer: {
      tagline: "مواقع وأتمتة ذكاء اصطناعي وأنظمة أعمال للشركات الطموحة في الكويت.",
      rights: "جميع الحقوق محفوظة.",
      builtWith: "صُنع بعناية في الكويت.",
    },
  },
};

export type Dictionary = (typeof translations)["en"];
