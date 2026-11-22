"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search, Calendar, User, Tag, ArrowRight, X, BookOpen, Share2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  category: "culture" | "announcements" | "technical";
  categoryLabel: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  fullContent: string[];
  bgGradient: string;
  image?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "p1",
    title: "الموظف المثالي الناجح ومقومات التميز الوظيفي في بيئة التصنيع الدوائي",
    titleEn: "The Ideal Successful Employee & Workplace Excellence in Pharma Packaging",
    category: "culture",
    categoryLabel: "الثقافة والتطوير المؤسسي",
    date: "2024",
    author: "الإدارة العامة للموارد البشرية",
    readTime: "4 min read",
    excerpt: "محاضرة دورية متخصصة تركز على الانضباط الهندسي، وتطبيق أعلى اشتراطات السلامة والتعقيم داخل غرف النظافة ومصانع المستلزمات الطبية.",
    fullContent: [
      "في إطار البرامج التدريبية والتثقيفية المستمرة التي تنظمها شركة مصر فارما لمستلزمات الصناعات الدوائية، نظمت إدارة التدريب محاضرة تثقيفية موسعة حول 'الموظف المثالي ومقومات التميز الوظيفي'.",
      "تناولت المحاضرة مفهوم الجودة ليس فقط كمعيار هندسي للأغطية والحشوات، بل كثقافة عمل يومية تنعكس في الالتزام الدقيق ببروتوكولات التعقيم، والحفاظ على نظافة خطوط الإنتاج، واليقظة التامة أثناء فحص جودة الأغطية عبر أنظمة الكاميرات البصرية.",
      "تم تكريم عدد من الكوادر الفنية المتميزة التي حققت معدلات إنتاجية قياسية مع نسبة هدر صفري (Zero Defect) خلال الربع السنوي، تأكيداً على نهج الشركة في تشجيع الكفاءات الوطنية."
    ],
    bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    image: "/images/blog/مواصفات-الموظف-المثالي.png",
  },
  {
    id: "p2",
    title: "حكمة اليوم: إتقان العمل أمانة في أعناق صناع الدواء",
    titleEn: "Wisdom of the Day: Precision in Manufacturing as a Sacred Duty",
    category: "culture",
    categoryLabel: "إضاءات وتوجيهات",
    date: "2024",
    author: "إدارة الجودة الشاملة",
    readTime: "3 min read",
    excerpt: "إضاءة فلسفية ومهنية تعزز الإدراك بأن كل غطاء ألومنيوم وكل حشوة بولي إيثيلين تمثل صمام أمان لصحة مريض وسلامة مستحضر علاجي.",
    fullContent: [
      "إن صناعة مستلزمات الأدوية والأغطية الصيدلانية ليست مجرد نشاط صناعي تحويلي، بل هي رسالة إنسانية وأمانة تتطلب من كل مهندس وفني استشعار مسؤوليته المباشرة.",
      "فحينما نحرص على دقة قطر الغطاء (28*18 مم) بفارق لا يتعدى أعشار المليمتر، ونضمن إحكام حشوة الـ PE لمنع أي تسرب أو تأكسد للدواء، فإننا نكون شريكاً حقيقياً للطبيب والصيدلي في حماية حياة المريض.",
      "نعمل كل يوم بمبدأ 'الإتقان رسالة' لضمان أن كل تشغيلة تغادر مصنعنا بالعاشر من رمضان ترفع اسم الصناعة المصرية وتلبي أرقى المعايير العالمية."
    ],
    bgGradient: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
  },
  {
    id: "p3",
    title: "تهنئة مجلس الإدارة بمناسبة حلول العام الجديد 2026",
    titleEn: "Board of Directors Greetings on the New Year 2026",
    category: "announcements",
    categoryLabel: "بيانات رسمية",
    date: "يناير 2026",
    author: "مجلس إدارة مصر فارما",
    readTime: "2 min read",
    excerpt: "أطيب التهاني والتبريكات لكافة شركاء النجاح من كبرى شركات الأدوية والمصانع المصرية والعربية، مع استعراض خطط التوسع للعام الجديد.",
    fullContent: [
      "يطيب لرئيس وأعضاء مجلس إدارة شركة مصر فارما لمستلزمات الصناعات الدوائية أن يتقدموا بأسمى آيات التهاني وأصدق التمنيات لجميع العاملين ولشركائنا الكرام بمناسبة العام الجديد 2026.",
      "نستقبل هذا العام بمزيد من الفخر بما حققناه من استقرار في توريد احتياجات السوق الدوائي المصري من أغطية وحشوات الأدوية، ونعلن عن خطط استثمارية جديدة لرفع الطاقة الإنتاجية وتوسيع خطوط الأغطية البلاستيكية المقاومة للعبث.",
      "كل عام وأنتم بخير، ونسأل الله أن يكون عاماً حافلاً بالإنجاز والازدهار لمصرنا الغالية ولصناعتنا الدوائية الرائدة."
    ],
    bgGradient: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)",
    image: "/images/blog/ايجيبت-راس-السنة-2026.jpg",
  },
  {
    id: "p4",
    title: "تهنئة بمناسبة ذكرى الإسراء والمعراج المباركة",
    titleEn: "Greetings on the Auspicious Occasion of Isra and Mi'raj",
    category: "announcements",
    categoryLabel: "مناسبات دينية",
    date: "2025",
    author: "الإدارة العامة",
    readTime: "2 min read",
    excerpt: "خالص التهاني القلبية لجموع الشعب المصري والأمة العربية والإسلامية ولجميع الزملاء في قطاع الرعاية الصحية والدواء.",
    fullContent: [
      "تتقدم أسرة شركة مصر فارما لمستلزمات الصناعات الدوائية بأحر التهاني وأطيب الأماني إلى الشعب المصري الكريم والأمة الإسلامية جمعاء بمناسبة ذكرى الإسراء والمعراج العطرة.",
      "أعادها الله علينا وعليكم وعلى مصرنا الحبيبة بالخير واليمن والبركات، ودوام التقدم والازدهار لقطاعنا الصناعي والصحي."
    ],
    bgGradient: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)",
    image: "/images/blog/ايجيبت-الاسراء-والمعراج.jpg",
  },
  {
    id: "p5",
    title: "المعايير الفنية واختبارات عزم الفتح للأغطية الدوائية Pilfer-Proof",
    titleEn: "Technical Benchmarks & Opening Torque Standards for Pilfer-Proof Closures",
    category: "technical",
    categoryLabel: "دراسات ومقالات فنية",
    date: "2025",
    author: "قطاع الأبحاث وضمان الجودة",
    readTime: "6 min read",
    excerpt: "دليل هندسي يوضح أهمية موازنة عزم الفتح (1.2 - 1.8 N·m) لمنع تساقط جزيئات الألومنيوم وضمان سهولة فتح العبوة للمرضى وكبار السن.",
    fullContent: [
      "تعتبر أغطية الألومنيوم المقاومة للعبث (Roll-on Pilfer-Proof - ROPP) مقاس 28*18 مم حجر الزاوية في تعبئة المحاليل والشرابات الدوائية.",
      "تتطلب معايير الـ ISO 15378 ومواصفات دستور الأدوية الأوروبي ضبط قوة جسور الأمان (Bridges) بدقة فائقة؛ حيث يجب أن تنفصل الحلقة السفلية بسلاسة عند عزم دوران محدد بين 1.2 و 1.8 نيوتن.متر، دون حدوث تمزق حاد أو تساقط لأي برادة معدنية دقيقة.",
      "في مصنع مصر فارما، يتم إخضاع عينات من كل ساعة تشغيل لاختبارات أجهزة العزم الرقمية (Digital Torque Analyzers) مع قياس قوة الضغط الإحكامي لضمان ثبات الغازات ومنع التسرب في مختلف ظروف النقل والتخزين."
    ],
    bgGradient: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
  },
  {
    id: "p6",
    title: "المحاضرة التوعوية الدورية: السلامة والصحة المهنية ومراقبة خطوط الإنتاج",
    titleEn: "Periodic Awareness Lecture: Occupational Health, Safety & Line Monitoring",
    category: "culture",
    categoryLabel: "تدريب وتطوير الكوادر",
    date: "أكتوبر 2025",
    author: "إدارة السلامة والصحة المهنية (HSE)",
    readTime: "4 min read",
    excerpt: "محاضرة شهرية لترسيخ الالتزام الصارم بقواعد الحماية الشخصية، وتشغيل أنظمة الإطفاء الآلية، واستدامة بيئة العمل الخالية من الحوادث.",
    fullContent: [
      "نظمت إدارة السلامة والصحة المهنية بمصنع الشركة بالعاشر من رمضان المحاضرة التوعوية الشهرية للكوادر الفنية وفرق التشغيل.",
      "استعرضت المحاضرة سبل التعامل الآمن مع ماكينات التشكيل والكبس عالية السرعة، وضوابط ارتداء مهمات الوقاية في غرف النظافة، بالإضافة إلى خطط الإخلاء الافتراضية ومواقع شبكات الإطفاء.",
      "تؤكد شركة مصر فارما التزامها الثابت بتوفير أعلى مستويات الأمان لجميع أفراد فريق العمل، إيماناً بأن العنصر البشري هو الركيزة الأساسية لكل نجاح."
    ],
    bgGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    image: "/images/gallery/lectures/محاضرة-أكتوبر-2025-scaled.jpg",
  },
  {
    id: "p7",
    title: "تهنئة أسرة مصر فارما بمناسبة حلول شهر رمضان المبارك 2026",
    titleEn: "Ramadan Mubarak Greetings 2026 from Egypt Pharma Family",
    category: "announcements",
    categoryLabel: "مناسبات دينية",
    date: "فبراير 2026",
    author: "مجلس الإدارة والعلاقات العامة",
    readTime: "2 min read",
    excerpt: "أسمى آيات التهاني والتبريكات بمناسبة قدوم شهر رمضان المبارك لكافة شركائنا وعملائنا الكرام في قطاع الدواء.",
    fullContent: [
      "بمناسبة حلول شهر رمضان المعظم، يسر مجلس إدارة شركة مصر فارما وجميع العاملين أن يرفعوا أسمى آيات التهاني وأطيب الأمنيات لشركاء النجاح وللأمة الإسلامية والعربية.",
      "نسأل الله تعالى أن يتقبل منا ومنكم الصيام وصالح الأعمال، وأن يجعله شهر خير وبركة ونماء على وطننا العزيز، مع استمرار خطوط إنتاجنا في العمل بأعلى طاقة لتأمين احتياجات الدواء."
    ],
    bgGradient: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
    image: "/images/gallery/occasions/ايجيبت-رمضان-2026.jpg",
  },
  {
    id: "p8",
    title: "تهنئة حلول عيد الفطر المبارك لشركاء النجاح والعاملين 2026",
    titleEn: "Eid Al-Fitr Congratulations 2026 to Partners and Workforce",
    category: "announcements",
    categoryLabel: "مناسبات دينية",
    date: "مارس 2026",
    author: "الإدارة العامة",
    readTime: "2 min read",
    excerpt: "خالص التبريكات بمناسبة عيد الفطر المبارك، سائلين الله دوام الصحة والعافية والتقدم لصناعتنا الوطنية.",
    fullContent: [
      "يسعد أسرة شركة مصر فارما لمستلزمات الصناعات الدوائية أن تهنئ الشعب المصري العظيم وشركاءنا في شركات ومصانع الأدوية بمناسبة حلول عيد الفطر المبارك.",
      "تقبل الله منا ومنكم صالح الأعمال، وأعاده علينا وعليكم بموفور الصحة والسلامة والازدهار المستمر."
    ],
    bgGradient: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
    image: "/images/gallery/occasions/عيد-الفطر-ايجيبت-2026.jpg",
  },
  {
    id: "p9",
    title: "محاضرة الانضباط والالتزام المؤسسي: ركائز الولاء والإخلاص في العمل",
    titleEn: "Institutional Discipline & Workplace Dedication Seminar",
    category: "culture",
    categoryLabel: "تطوير الكوادر",
    date: "ديسمبر 2025",
    author: "إدارة الموارد البشرية والتدريب",
    readTime: "3 min read",
    excerpt: "الأمانة، الإخلاص، الولاء والانتماء: ملخص ندوة بناء الوعي المؤسسي وتعزيز العمل الجماعي داخل صالات الإنتاج.",
    fullContent: [
      "في إطار ملتقيات التواصل المستمرة بين الإدارة والعاملين، عُقدت ندوة تثقيفية حول قيم الولاء والانتماء والحرص على أمانة المنتج الدوائي.",
      "أبرزت الندوة أهمية الدور الذي يؤديه كل فني وعامل في منع الأخطاء التصنيعية وضمان تسليم طلبيات الأغطية الدوائية في مواعيدها المحددة لشركات الأدوية الوطنية.",
      "واختُتمت الندوة بتوزيع شهادات تقدير للمتميزين في تطبيق معايير الانضباط وممارسات التصنيع الجيد."
    ],
    bgGradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
    image: "/images/gallery/lectures/محاضرة-ديسمبر-2025-scaled.jpg",
  },
  {
    id: "p10",
    title: "تهنئة بمناسبة الذكرى المجيدة لانتصارات السادس من أكتوبر",
    titleEn: "Salute to the 6th of October Victory & National Pride",
    category: "announcements",
    categoryLabel: "أعياد وطنية",
    date: "أكتوبر 2025",
    author: "مجلس الإدارة",
    readTime: "2 min read",
    excerpt: "تحية إجلال وإكبار لشهداء وأبطال القوات المسلحة المصرية في ذكرى النصر العظيم الذي يلهمنا دوماً مواصلة البناء والإنتاج.",
    fullContent: [
      "تتقدم شركة مصر فارما لمستلزمات الصناعات الدوائية بأسمى آيات الفخر والاعتزاز إلى القيادة والشعب المصري العظيم وقواته المسلحة الباسلة بمناسبة ذكرى انتصارات السادس من أكتوبر.",
      "تظل روح أكتوبر ملهمة لنا جميعاً في ميادين الصناعة والعمل الجاد، لنواصل تعميق التصنيع المحلي وتوفير مستلزمات الدواء بأيدٍ مصرية مخلصة."
    ],
    bgGradient: "linear-gradient(135deg, #be123c 0%, #f43f5e 100%)",
    image: "/images/gallery/occasions/6-اكتوبر-ايجيبت-2025.jpg",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePost]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePost(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              News, Insights &amp; Culture
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Corporate updates, technical articles on pharmaceutical packaging, and workplace values from Egypt Pharma.
            </p>
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10" aria-label="Breadcrumbs">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-sky-400 font-medium">Blog &amp; News</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Toolbar: Search and Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles, technical topics, or news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => setSelectedCategory("technical")}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === "technical"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Technical Insights
            </button>
            <button
              onClick={() => setSelectedCategory("culture")}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === "culture"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Workplace Culture
            </button>
            <button
              onClick={() => setSelectedCategory("announcements")}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === "announcements"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Corporate News
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <p className="text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="mt-4 px-5 py-2.5 rounded-lg bg-sky-600 text-white font-medium text-sm hover:bg-sky-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="flex flex-col rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:border-sky-300 transition-all duration-300">
                <div
                  className="relative h-44 flex flex-col justify-end p-5 text-white overflow-hidden group"
                  style={{ background: post.bgGradient }}
                >
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <BookOpen size={36} className="opacity-80 mb-2 relative z-10" />
                  <span className="absolute top-4 right-4 z-10 text-xs font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/20">
                    {post.categoryLabel}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6 justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug" dir="rtl">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-sky-600 mb-3">
                      {post.titleEn}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6" dir="rtl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setActivePost(post)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 hover:border-sky-600 hover:text-sky-600 text-slate-700 font-medium text-sm transition-all"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Article Reader Modal: 100% Full-Screen Backdrop & Truly Centered */}
        {mounted && activePost && createPortal(
          <div 
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-full h-full min-h-[100dvh] z-[999999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
            onClick={() => setActivePost(null)}
            role="dialog"
            aria-modal="true"
          >
            <div 
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col m-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center transition-colors shadow-xl ring-2 ring-white/20"
                onClick={() => setActivePost(null)}
                aria-label="Close Reader"
              >
                <X size={20} />
              </button>
              <div
                className="relative h-48 sm:h-60 flex items-center justify-center text-white text-center p-6 shrink-0 overflow-hidden"
                style={{ background: activePost.bgGradient }}
              >
                {activePost.image && (
                  <Image
                    src={activePost.image}
                    alt={activePost.title}
                    fill
                    className="object-cover opacity-35"
                  />
                )}
                <div className="relative z-10">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm mb-3 text-white">
                    {activePost.categoryLabel}
                  </span>
                  <div className="flex items-center justify-center gap-4 text-xs sm:text-sm opacity-90">
                    <span>{activePost.date}</span>
                    <span>•</span>
                    <span>{activePost.author}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                <h2 dir="rtl" className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug text-right">
                  {activePost.title}
                </h2>
                <h4 className="text-sm sm:text-base font-semibold text-sky-600 mb-6">
                  {activePost.titleEn}
                </h4>
                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed" dir="rtl">
                  {activePost.fullContent.map((paragraph, idx) => (
                    <p key={idx} className="text-right">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-8 border-t border-slate-200">
                  <span className="text-xs text-slate-400">
                    Published by Egypt Pharma Media Center
                  </span>
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-6 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-colors shadow-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}
