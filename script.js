/* ════════════════════════════════════════
   AHMED M ELSAYYAD — PORTFOLIO SCRIPT
   ════════════════════════════════════════ */

window.addEventListener('scroll', () => {
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('pgbar').style.width = (s / h * 100) + '%';
  const btn = document.getElementById('backTop');
  if (btn) btn.classList.toggle('visible', s > window.innerHeight * 0.8);
}, { passive: true });

window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('stuck', scrollY > 28);
}, { passive: true });

document.getElementById('nav').style.cssText = 'opacity:0;transform:translateY(-20px)';
requestAnimationFrame(() => requestAnimationFrame(() => {
  const n = document.getElementById('nav');
  n.style.transition = 'opacity .6s ease,transform .6s ease';
  n.style.opacity = '1'; n.style.transform = 'none';
}));

document.querySelectorAll('.n-logo, [data-totop]').forEach(el => {
  el.style.cursor = 'pointer';
  el.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
const backTopBtn = document.getElementById('backTop');
if (backTopBtn) backTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal,.reveal-x,.reveal-r').forEach(el => io.observe(el));

function animCount(el) {
  const raw = el.dataset.target || ''; const suffix = el.dataset.suffix || '';
  const num = parseFloat(raw); if (isNaN(num)) return;
  const dur = 1600; const start = performance.now();
  function step(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * num) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const cio = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); cio.unobserve(e.target); } });
}, { threshold: .5 });
document.querySelectorAll('.st-n[data-target]').forEach(el => cio.observe(el));

const sbio = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { const bar = e.target; setTimeout(() => { bar.style.width = (bar.dataset.val || '0') + '%'; }, 100); sbio.unobserve(bar); } });
}, { threshold: .2 });
document.querySelectorAll('.sb-fill').forEach(el => sbio.observe(el));

/* ── Theme Toggle ── */
let dark = false;
document.documentElement.setAttribute('data-theme', 'light');
const themeBtn = document.getElementById('themeBtn');
themeBtn.querySelector('.theme-icon').textContent = '☀';
themeBtn.querySelector('.theme-label').textContent = 'Light';
themeBtn.addEventListener('click', function () {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.querySelector('.theme-icon').textContent = dark ? '☽' : '☀';
  const key = dark ? 'theme_dark' : 'theme_light';
  themeBtn.querySelector('.theme-label').textContent = T[currentLang][key] || (dark ? 'Dark' : 'Light');
});

/* ══════════════════════════════════════════
   TRANSLATIONS (i18n)
   ══════════════════════════════════════════ */
let currentLang = 'en';

const T = {
  en: {
    nav_about:'About', nav_services:'Services', nav_work:'Work',
    nav_writing:'Writing', nav_contact:'Contact', hire_me:'Hire Me',
    theme_dark:'Dark', theme_light:'Light',
    popup_badge:'Available for Projects',
    popup_title:'Product Manager · 2+ Years · 50+ Products',
    popup_msg:"Got a product idea or looking for a PM who ships with purpose? Let's talk — I'd love to hear what you're building.",
    whatsapp:'WhatsApp', phone:'Phone', email:'Email',
    follow_me:'Follow Me', contact_later:'Contact Later',
    hero_tag:'Product Manager', hero_h1a:'Building Products', hero_h1b:'People Love.',
    hero_desc:"I'm <strong>Ahmed M Elsayyad</strong> — a product manager with <strong>2+ years</strong> of hands-on experience shipping over <strong>50 products</strong> across SaaS, FinTech, HealthTech, Mobility, and more.",
    view_cases:'View Case Studies →', lets_talk:"Let's Talk",
    stat_products:'Products Shipped', stat_years:'Years Experience', stat_users:'Users Impacted',
    badge_currently:'Currently', badge_status:'Open to <span>Work</span>',
    mq1:'Product Strategy', mq2:'User Discovery', mq3:'Roadmapping', mq4:'Agile Delivery',
    mq5:'Growth & Retention', mq6:'Stakeholder Alignment', mq7:'Data-Driven Decisions',
    mq8:'PRD Writing', mq9:'Business Analysis', mq10:'Product Ownership',
    mq11:'0-to-1 Builds', mq12:'Project Management',
    about_tag:'About Me', about_h2:'Built on Curiosity.<br>Driven by Outcomes.',
    about_p1:"I'm <strong>Ahmed M Elsayyad</strong>, a Product Manager with <strong>2+ years of hands-on experience</strong> shipping over <strong>50 products</strong> across SaaS, FinTech, HealthTech, Mobility, E-commerce, and more.",
    about_p2:"I don't just manage backlogs — I chase root causes, write specs engineers trust, and obsess over the metrics that actually move the business.",
    about_p3:"Whether it's a <strong>0-to-1 product build</strong>, a large-scale platform at a consumer brand, or a B2B SaaS that needs better retention — I show up prepared to make hard calls.",
    core_skills:'Core Skills',
    as_role:'Mid-Level Product Manager',
    as_bio:"Results-driven Product Manager with 2+ years of experience turning ambiguous problems into shipped products that users love and businesses measure. I've led discovery, defined roadmaps, and delivered across SaaS, FinTech, HealthTech, Mobility, and E-commerce — writing PRDs engineers trust and making hard prioritization calls grounded in data. I operate at the intersection of strategy and execution: I don't hand off specs and disappear; I stay in the room until the metric moves.",
    as_s1:'Products', as_s2:'Industries', as_s3:'Users',
    as_quote:'"Ship something real. Measure it honestly. Improve relentlessly."',
    skills_tag:'Expertise', skills_h2:'Skills &amp; Proficiency',
    skills_sub:'Real competencies measured against delivered products — not self-assessment alone.',
    sk_cat1:'Product Management', sk_cat2:'Business & Delivery',
    sk_cat3:'Technical & Analytical', sk_cat4:'Frameworks & Methods',
    lv_expert:'Expert', lv_advanced:'Advanced', lv_proficient:'Proficient',
    sk1:'Product Strategy', sk1d:'Vision → roadmap → measurable outcomes',
    sk2:'User Discovery & Research', sk2d:'Interviews, JTBD, usability studies, synthesis',
    sk3:'Roadmapping & Prioritization', sk3d:'Outcome-based, RICE/MoSCoW, risk-sequenced',
    sk4:'Growth & Retention', sk4d:'Activation funnels, churn analysis, A/B loops',
    sk5:'Business Analysis', sk5d:'Requirements elicitation, impact mapping, BA',
    sk6:'Stakeholder Management', sk6d:'Cross-functional alignment & exec comms',
    sk7:'Agile / Scrum', sk7d:'Sprint planning, ceremonies, retrospectives',
    sk8:'PRD & Spec Writing', sk8d:'Specs engineering teams trust and reference',
    sk9:'Data Analytics & SQL', sk9d:'Custom queries, cohort and funnel analysis',
    sk10:'UX Collaboration (Figma)', sk10d:'User flows, wireframes, design reviews',
    sk11:'Mixpanel / Amplitude', sk11d:'Behavioral analytics, retention, north star',
    sk12:'A/B Testing', sk12d:'Experiment design, significance, rollout',
    sk13d:'Context-driven prioritization frameworks',
    sk14d:'Outcome-focused discovery and framing',
    sk15d:'Quarterly planning, outcome-team alignment',
    sk16:'Impact Mapping', sk16d:'Connecting features to behaviors to outcomes',
    svc_tag:'Services', svc_h2:'What I Bring<br>to the Table',
    svc_sub:'Focused product management services to help teams build the right things, in the right order.',
    svc1t:'Product Strategy', svc1d:'Vision definition, competitive analysis, opportunity sizing, and outcome-based roadmaps.',
    svc1tag1:'Vision', svc1tag2:'Roadmap', svc1tag3:'Competitive',
    svc2t:'User Discovery', svc2d:'Customer interviews, jobs-to-be-done mapping, usability studies, and synthesis frameworks.',
    svc2tag1:'Interviews', svc2tag3:'Synthesis',
    svc3t:'PRD & Specs', svc3d:'Requirements documentation that engineering teams actually read, reference, and trust.',
    svc3tag2:'User Stories',
    svc4t:'Growth & Retention', svc4d:'Activation funnel optimization, churn analysis, engagement loops, and experiment design.',
    svc4tag1:'Activation',
    svc5t:'Business Analysis', svc5d:'Requirements elicitation, process modeling, impact mapping, and stakeholder alignment.',
    svc5tag2:'Modeling', svc5tag3:'Alignment',
    svc6t:'0-to-1 Builds', svc6d:'From napkin idea to launched product: market validation, MVP scoping, build-measure-learn loops.',
    svc6tag2:'Launch', svc6tag3:'Validation',
    proc_tag:'How I Work', proc_h2:'A Process Built for Outcomes',
    proc_sub:'Structured, repeatable, and grounded in evidence — not just intuition.',
    proc1t:'Discover', proc1d:'User interviews, competitive audits, analytics deep-dives. No spec gets written until the problem is validated.',
    proc2t:'Define', proc2d:'Opportunity sizing, success metrics defined before design begins, prioritization using RICE or weighted scoring.',
    proc3t:'Deliver', proc3d:'Clear PRDs, sprint planning, daily standups, and a scope log that prevents feature creep.',
    proc4t:'Measure', proc4d:'Post-launch tracking against the metrics defined in step two. The product never stops improving.',
    stat1n:'Across 10+ industries', stat2n:'Measurable behavior change',
    stat3l:'Avg Retention Rate', stat3n:'Across cohorts tracked',
    stat4l:'Case Studies', stat4n:'Documented & measurable',
    proj_tag:'Case Studies', proj_h2:'50+ Products.<br><em>Real Outcomes.</em>',
    proj_sub:'Filter by industry to explore detailed case studies — each with real metrics, discovery process, and PM decisions.',
    all:'All', consumer:'Consumer',
    tools_tag:'Toolkit', tools_h2:'Tools I Use<br>Every Day',
    tools_sub:'Chosen for efficiency and depth — the instruments that turn product thinking into shipped work.',
    tool1d:'Sprint planning, backlog management, velocity tracking.', tool1t:'Delivery',
    tool2d:'PRDs, wikis, decision logs, and project documentation.', tool2t:'Docs',
    tool3d:'Wireframes, user flows, and design reviews.', tool3t:'Design',
    tool4d:'Behavioral analytics, funnel analysis, retention tracking.', tool4t:'Analytics',
    tool5d:'Direct database queries for custom reports and analysis.', tool5t:'Data',
    tool6d:'Discovery workshops, journey mapping, event storming.', tool6t:'Discovery',
    tool7d:'Technical specs, product wikis, and cross-team docs.', tool7t:'Docs',
    tool8d:'Event-based analytics and north star metric monitoring.', tool8t:'Analytics',
    testi_tag:'Testimonials', testi_h2:'What People Say',
    test1:'Ahmed has a rare ability to bring clarity to chaos. He came into our product org when we had no roadmap and no process, and within weeks had the whole team aligned and shipping with confidence.',
    test1r:'Head of Product, SaaS Startup',
    test2:'Working with Ahmed was genuinely different. He never just took requirements — he challenged assumptions and consistently pushed us to focus on what actually mattered to users.',
    test2r:'CTO, E-commerce Platform',
    test3:"Ahmed's discovery process is thorough and his PRDs are some of the clearest I've ever read. He made cross-team collaboration feel effortless and always kept the user perspective front and center.",
    test3r:'Lead Designer, Mobile App',
    blog_tag:'Writing', blog_h2:'Thoughts &amp; Insights',
    blog_sub:'In-depth essays on product management, business analysis, and AI — written for 2026 practitioners.',
    blog_cat_ai:'AI & Product', blog_cat_strategy:'Strategy', blog_cat_research:'Research',
    blog_cat_ba:'Business Analysis', blog_cat_po:'Product Ownership',
    blog_cat_pm:'Project Mgmt', blog_cat_pri:'Prioritization',
    featured:'Featured', feat_title:'Why Most Roadmaps Are Just Wish Lists in Disguise',
    feat_exc:"A roadmap without outcome targets is a delivery plan masquerading as strategy. After 50+ products, here's what separates roadmaps teams believe in.",
    read_article:'Read Article →',
    faq_tag:'FAQ', faq_h2:'Common<br>Questions',
    faq_sub:'Still have questions? Reach out via email or LinkedIn.',
    faq1q:'What types of products do you specialize in?',
    faq1a:"I've worked across B2C mobile apps, B2B SaaS platforms, e-commerce, fintech, healthtech, mobility, and marketplace models — with a strong focus on growth, retention, and 0-to-1 product builds.",
    faq2q:'Do you work as a consultant or full-time?',
    faq2a:"Both. I'm open to embedded consulting engagements, fractional PM roles, and full-time opportunities. Let's have an initial conversation and find the structure that makes the most sense.",
    faq3q:'How do you approach stakeholder alignment?',
    faq3a:"Through consistent communication, transparent roadmaps tied directly to business goals, and written decision logs that keep everyone informed. Alignment isn't a meeting — it's a system.",
    faq4q:"What's the difference between a PM and a Business Analyst?",
    faq4a:'BAs surface the "what" — they translate business needs into requirements. PMs own the "why" — they decide what to build and in what order. I bridge both, which means I write requirements that have strategic context, not just functional specs.',
    faq5q:'What makes your approach different?',
    faq5a:"I lead with evidence, not opinions. I invest in real discovery before committing to solutions, write PRDs that engineering teams find useful, and measure success by outcomes — not features shipped.",
    faq6q:'How do you handle disagreements with engineering teams?',
    faq6a:"I treat engineering concerns as product signals, not obstacles. If engineers push back on scope or feasibility, that's valuable information — it usually means the problem isn't well-defined enough. I invest in shared understanding before pushing for a decision, and I document trade-offs so everyone can see the reasoning, not just the outcome.",
    faq7q:'What does your discovery process look like in practice?',
    faq7a:'It starts with a problem statement that includes who is affected, how often, and what it costs them. Then 5–10 structured user interviews focused on behavior — not opinions. Then synthesis: patterns, root causes, and the riskiest assumptions. Nothing gets written into a PRD until the problem is validated. The whole cycle typically takes 1–2 weeks depending on access to users.',
    faq8q:'How do you prioritize when everything feels urgent?',
    faq8a:"I apply RICE or weighted scoring to separate urgency from importance — they're usually different. Then I align with leadership on the top business outcome for the quarter and map every 'urgent' item against it. Items that don't move the needle on that outcome get deprioritized, regardless of who's asking. The framework makes the conversation about trade-offs, not about personalities.",
    faq9q:'Can you work in Arabic-language markets?',
    faq9a:"Yes — I'm a native Arabic speaker and have led products specifically designed for MENA audiences, including RTL layouts, Arabic UX writing, and localized business logic. I understand the cultural nuances that affect user behavior in the region, not just the language.",
    faq10q:"How do you measure a product's success after launch?",
    faq10a:"Success metrics are defined before a single line of code is written — not after launch. I tie every feature to a specific metric, a direction, and a timeframe. Post-launch, I track those metrics for at least 30 days, run cohort analysis to understand if the behavior change is sticky, and document learnings regardless of outcome. A feature that didn't move the metric is still a success if it generates a validated learning.",
    faq11q:"What's your experience with AI products?",
    faq11a:"I've shipped four AI-powered products including a no-code chatbot builder, an AI content generation platform, a candidate screening tool, and an NLP support platform. My approach to AI features includes defining accuracy thresholds upfront, specifying human fallback paths in every PRD, instrumenting model confidence scores, and planning retraining cycles into the roadmap — not treating AI as a 'ship and forget' feature.",
    faq12q:'How do you write a PRD that engineers actually use?',
    faq12a:"A good PRD answers four things per requirement: who's doing it and under what conditions, exactly what behavior happens, how you'll know it worked (testable acceptance criteria), and what happens when it fails. I also include the business rationale — which tells engineers how to make good judgment calls when they hit an edge case I didn't anticipate. PRDs without a 'why' generate Slack threads; PRDs with one generate shipped features.",
    faq13q:'Do you have experience with 0-to-1 product builds?',
    faq13a:"Yes — several. 0-to-1 requires a completely different mindset than scaling: there's no data, no 'previous version,' and every assumption is a hypothesis. I run lean discovery sprints before any development starts, define the riskiest assumptions explicitly, and sequence validation so we're learning cheaply before we build expensively. The goal isn't a perfect MVP — it's the minimum build that answers the most dangerous question.",
    faq14q:'How do you manage scope when timelines are fixed?',
    faq14a:"With a written scope contract agreed to before the first sprint — covering what's in, what's explicitly out, and the decision criteria for adding new items. Every mid-project request gets evaluated against that contract. If something gets added, something of equivalent effort comes out. This reframes scope conversations from 'can we add this?' to 'what are you willing to remove?'",
    faq15q:'What industries have you worked in?',
    faq15a:'SaaS, FinTech, HealthTech, Mobility, E-commerce, Marketplace, EdTech, GovTech, PropTech, HR Tech, LegalTech, and InsurTech — primarily across the MENA region. The breadth means I pattern-match quickly across domains and bring cross-industry thinking to product problems that often feel unique but rarely are.',
    contact_pre:'Available for New Projects',
    contact_h2:"Let's Build<br><em>Something Great.</em>",
    contact_desc:"If you're building a product that matters and need a PM who ships with purpose — let's have an honest conversation about whether we're the right fit.",
    send_email:'Send an Email →', linkedin_profile:'LinkedIn Profile',
    location:'Location', cairo:'Cairo, Egypt',
    footer_copy:'© 2026 Ahmed M Elsayyad — Product Manager',
  },

  ar: {
    nav_about:'عني', nav_services:'خدماتي', nav_work:'أعمالي',
    nav_writing:'مقالاتي', nav_contact:'تواصل', hire_me:'وظّفني',
    theme_dark:'داكن', theme_light:'فاتح',
    popup_badge:'متاح للمشاريع',
    popup_title:'مدير منتج · +٢ سنوات · +٥٠ منتجاً',
    popup_msg:'هل لديك فكرة منتج أو تبحث عن مدير منتج يُنجز باحترافية؟ دعنا نتحدث — يسعدني أن أسمع ما تبنيه.',
    whatsapp:'واتساب', phone:'هاتف', email:'إيميل',
    follow_me:'تابعني', contact_later:'تواصل لاحقاً',
    hero_tag:'مدير منتج', hero_h1a:'أبني منتجات', hero_h1b:'يحبها الناس.',
    hero_desc:'أنا <strong>أحمد محمد السيد</strong> — مدير منتج بخبرة <strong>+٢ سنة</strong> في شحن أكثر من <strong>٥٠ منتجاً</strong> عبر SaaS وFinTech وHealthTech والتنقل والمزيد.',
    view_cases:'استعرض دراسات الحالة →', lets_talk:'تواصل معي',
    stat_products:'منتج تم شحنه', stat_years:'سنوات خبرة', stat_users:'مستخدم تأثر',
    badge_currently:'حالياً', badge_status:'متاح لـ<span>العمل</span>',
    mq1:'استراتيجية المنتج', mq2:'اكتشاف المستخدم', mq3:'خارطة الطريق', mq4:'التسليم الرشيق',
    mq5:'النمو والاحتفاظ', mq6:'محاذاة أصحاب المصلحة', mq7:'القرارات المبنية على البيانات',
    mq8:'كتابة PRD', mq9:'تحليل الأعمال', mq10:'امتلاك المنتج',
    mq11:'بناء من الصفر', mq12:'إدارة المشاريع',
    about_tag:'عني', about_h2:'فضول يقودني.<br>نتائج تحدد مساري.',
    about_p1:'أنا <strong>أحمد محمد السيد</strong>، مدير منتج بخبرة <strong>+٢ سنة</strong> في شحن أكثر من <strong>٥٠ منتجاً</strong> عبر SaaS وFinTech وHealthTech والتنقل والتجارة الإلكترونية والمزيد.',
    about_p2:'لا أكتفي بإدارة قائمة المهام — أبحث في الأسباب الجذرية، وأكتب المواصفات التي يثق بها المهندسون، وأهتم بالمقاييس التي تحرّك الأعمال فعلاً.',
    about_p3:'سواء كان <strong>بناء منتج من الصفر</strong>، أو منصة واسعة النطاق، أو SaaS يحتاج إلى تحسين الاحتفاظ — أكون دائماً مستعداً لاتخاذ القرارات الصعبة.',
    core_skills:'المهارات الأساسية',
    as_role:'مدير منتج متوسط',
    as_bio:'مدير منتج يحقق نتائج قابلة للقياس، بخبرة تتجاوز السنتين في تحويل المشكلات الغامضة إلى منتجات يحبها المستخدمون. قدت عمليات الاكتشاف، وحددت خرائط الطريق، وأوصلت المنتجات عبر SaaS وFinTech وHealthTech والتنقل والتجارة الإلكترونية — بكتابة PRDs يثق بها المهندسون، واتخاذ قرارات الأولويات الصعبة المبنية على البيانات. أعمل عند تقاطع الاستراتيجية والتنفيذ: لا أسلّم المواصفات وأختفي، بل أبقى في الغرفة حتى يتحرك المقياس.',
    as_s1:'منتجاً', as_s2:'صناعة', as_s3:'مستخدم',
    as_quote:'"اشحن منتجاً حقيقياً. قِس بصدق. حسِّن باستمرار."',
    skills_tag:'الخبرات', skills_h2:'المهارات والكفاءات',
    skills_sub:'كفاءات حقيقية مقاسة بالمنتجات المُسلَّمة — لا تقييم ذاتي فحسب.',
    sk_cat1:'إدارة المنتج', sk_cat2:'الأعمال والتسليم',
    sk_cat3:'التقنية والتحليل', sk_cat4:'أطر العمل والمنهجيات',
    lv_expert:'خبير', lv_advanced:'متقدم', lv_proficient:'مُجيد',
    sk1:'استراتيجية المنتج', sk1d:'الرؤية ← خارطة الطريق ← نتائج قابلة للقياس',
    sk2:'اكتشاف المستخدم والبحث', sk2d:'مقابلات، JTBD، دراسات قابلية الاستخدام، التوليف',
    sk3:'خارطة الطريق والأولويات', sk3d:'مبني على النتائج، RICE/MoSCoW، مُرتَّب حسب المخاطر',
    sk4:'النمو والاحتفاظ', sk4d:'قمع التفعيل، تحليل التذبذب، حلقات A/B',
    sk5:'تحليل الأعمال', sk5d:'استخلاص المتطلبات، رسم خرائط التأثير، BA',
    sk6:'إدارة أصحاب المصلحة', sk6d:'المحاذاة متعددة الوظائف والتواصل التنفيذي',
    sk7:'أجايل / سكرم', sk7d:'تخطيط السبرينت، الاحتفالات، المراجعات',
    sk8:'كتابة PRD والمواصفات', sk8d:'مواصفات يثق بها المهندسون ويرجعون إليها',
    sk9:'تحليل البيانات وSQL', sk9d:'استعلامات مخصصة، تحليل الفئات والقمع',
    sk10:'التعاون في UX (Figma)', sk10d:'تدفقات المستخدم، الواجهات، مراجعات التصميم',
    sk11:'Mixpanel / Amplitude', sk11d:'تحليلات سلوكية، الاحتفاظ، مقياس النجم الشمالي',
    sk12:'اختبار A/B', sk12d:'تصميم التجارب، الأهمية الإحصائية، استراتيجية الطرح',
    sk13d:'أطر عمل الأولويات المبنية على السياق',
    sk14d:'الاكتشاف والتأطير المبني على النتائج',
    sk15d:'التخطيط الفصلي، محاذاة الفريق مع الأهداف',
    sk16:'رسم خرائط التأثير', sk16d:'ربط الميزات بالسلوكيات بالنتائج',
    svc_tag:'الخدمات', svc_h2:'ما أقدمه<br>على الطاولة',
    svc_sub:'خدمات إدارة منتج متخصصة لمساعدة الفرق على بناء الشيء الصحيح، بالترتيب الصحيح.',
    svc1t:'استراتيجية المنتج', svc1d:'تعريف الرؤية، التحليل التنافسي، تحديد الفرص، وخرائط طريق مبنية على النتائج.',
    svc1tag1:'رؤية', svc1tag2:'خارطة الطريق', svc1tag3:'تنافسي',
    svc2t:'اكتشاف المستخدم', svc2d:'مقابلات العملاء، رسم خرائط الوظائف المطلوبة، دراسات قابلية الاستخدام، وأطر التوليف.',
    svc2tag1:'مقابلات', svc2tag3:'توليف',
    svc3t:'PRD والمواصفات', svc3d:'توثيق المتطلبات الذي تقرأه فرق الهندسة وتثق به وترجع إليه.',
    svc3tag2:'قصص المستخدمين',
    svc4t:'النمو والاحتفاظ', svc4d:'تحسين قمع التفعيل، تحليل التذبذب، حلقات التفاعل، وتصميم التجارب.',
    svc4tag1:'تفعيل',
    svc5t:'تحليل الأعمال', svc5d:'استخلاص المتطلبات، نمذجة العمليات، رسم خرائط التأثير، ومحاذاة أصحاب المصلحة.',
    svc5tag2:'نمذجة', svc5tag3:'محاذاة',
    svc6t:'البناء من الصفر', svc6d:'من الفكرة إلى المنتج المُطلق: التحقق من السوق، تحديد نطاق MVP، حلقات البناء والقياس والتعلم.',
    svc6tag2:'إطلاق', svc6tag3:'تحقق',
    proc_tag:'طريقة عملي', proc_h2:'منهجية مبنية للنتائج',
    proc_sub:'منظمة، قابلة للتكرار، ومبنية على الأدلة — لا مجرد حدس.',
    proc1t:'الاكتشاف', proc1d:'مقابلات المستخدمين، المراجعات التنافسية، التحليل العميق للبيانات. لا تُكتب أي مواصفة حتى يتم التحقق من المشكلة.',
    proc2t:'التعريف', proc2d:'تحديد حجم الفرص، تعريف مقاييس النجاح قبل بدء التصميم، تحديد الأولويات باستخدام RICE أو التسجيل الموزون.',
    proc3t:'التسليم', proc3d:'PRDs واضحة، تخطيط السبرينت، ستاندأبات يومية، وسجل نطاق يمنع تضخم الميزات.',
    proc4t:'القياس', proc4d:'التتبع بعد الإطلاق مقابل المقاييس المعرّفة في الخطوة الثانية. المنتج لا يتوقف عن التحسن.',
    stat1n:'عبر أكثر من ١٠ صناعات', stat2n:'تغيير سلوكي قابل للقياس',
    stat3l:'متوسط معدل الاحتفاظ', stat3n:'عبر الفئات المتتبعة',
    stat4l:'دراسات حالة', stat4n:'موثقة وقابلة للقياس',
    proj_tag:'دراسات الحالة', proj_h2:'أكثر من ٥٠ منتجاً.<br><em>نتائج حقيقية.</em>',
    proj_sub:'صفّح حسب الصناعة لاستكشاف دراسات الحالة المفصلة — كل منها بمقاييس حقيقية وعملية اكتشاف وقرارات إدارة المنتج.',
    all:'الكل', consumer:'للمستهلك',
    tools_tag:'الأدوات', tools_h2:'أدوات أستخدمها<br>كل يوم',
    tools_sub:'مختارة للكفاءة والعمق — الأدوات التي تحوّل تفكير المنتج إلى عمل مُنجز.',
    tool1d:'تخطيط السبرينت، إدارة الـ backlog، تتبع السرعة.', tool1t:'تسليم',
    tool2d:'PRDs، ويكي، سجلات القرارات، وتوثيق المشاريع.', tool2t:'توثيق',
    tool3d:'الواجهات، تدفقات المستخدم، ومراجعات التصميم.', tool3t:'تصميم',
    tool4d:'تحليلات سلوكية، تحليل القمع، تتبع الاحتفاظ.', tool4t:'تحليلات',
    tool5d:'استعلامات مباشرة لقاعدة البيانات لتقارير وتحليلات مخصصة.', tool5t:'بيانات',
    tool6d:'ورش الاكتشاف، رسم خرائط الرحلة، Event Storming.', tool6t:'اكتشاف',
    tool7d:'المواصفات التقنية، ويكي المنتج، وثائق متعددة الفرق.', tool7t:'توثيق',
    tool8d:'تحليلات مبنية على الأحداث ومراقبة مقياس النجم الشمالي.', tool8t:'تحليلات',
    testi_tag:'الشهادات', testi_h2:'ماذا يقول الناس',
    test1:'يتمتع أحمد بقدرة نادرة على إضفاء الوضوح على الفوضى. جاء إلى مؤسستنا حين لم يكن لدينا خارطة طريق ولا عمليات، وفي غضون أسابيع قليلة نجح في محاذاة الفريق بالكامل وتسليم المنتجات بثقة.',
    test1r:'رئيسة المنتج، شركة SaaS ناشئة',
    test2:'العمل مع أحمد كان مختلفاً بشكل حقيقي. لم يكتفِ بأخذ المتطلبات — بل طعن في الافتراضات وضغط باستمرار لنركز على ما يهم المستخدمين فعلاً.',
    test2r:'مدير تقني، منصة تجارة إلكترونية',
    test3:'عملية اكتشاف أحمد معمّقة، وPRDs التي يكتبها من أوضح ما قرأت. جعل التعاون متعدد الفرق يبدو سلساً وحافظ دائماً على منظور المستخدم في المقدمة.',
    test3r:'المصممة الرئيسية، تطبيق موبايل',
    blog_tag:'الكتابة', blog_h2:'أفكار ورؤى',
    blog_sub:'مقالات معمّقة في إدارة المنتج وتحليل الأعمال والذكاء الاصطناعي — مكتوبة لممارسي ٢٠٢٦.',
    blog_cat_ai:'الذكاء الاصطناعي والمنتج', blog_cat_strategy:'الاستراتيجية',
    blog_cat_research:'البحث', blog_cat_ba:'تحليل الأعمال',
    blog_cat_po:'امتلاك المنتج', blog_cat_pm:'إدارة المشاريع', blog_cat_pri:'الأولويات',
    featured:'مميز', feat_title:'لماذا معظم خرائط الطريق مجرد قوائم أمنيات مُقنَّعة',
    feat_exc:'خارطة الطريق بلا أهداف قابلة للقياس هي خطة تسليم تتنكر في زي الاستراتيجية. بعد أكثر من ٥٠ منتجاً، إليك ما يميز خرائط الطريق التي تؤمن بها الفرق.',
    read_article:'اقرأ المقال →',
    faq_tag:'الأسئلة الشائعة', faq_h2:'أسئلة<br>شائعة',
    faq_sub:'هل لديك المزيد من الأسئلة؟ تواصل عبر الإيميل أو لينكدإن.',
    faq1q:'ما أنواع المنتجات التي تتخصص فيها؟',
    faq1a:'عملت عبر تطبيقات B2C للموبايل، ومنصات B2B SaaS، والتجارة الإلكترونية، والتقنية المالية، والتقنية الصحية، والتنقل، ونماذج السوق — مع تركيز قوي على النمو والاحتفاظ وبناء المنتجات من الصفر.',
    faq2q:'هل تعمل كمستشار أم بدوام كامل؟',
    faq2a:'كلاهما. أنا منفتح على مشاركات الاستشارة المدمجة، وأدوار مدير المنتج الجزئي، والفرص بدوام كامل. دعنا نتحدث أولاً ونجد الهيكل الأنسب.',
    faq3q:'كيف تتعامل مع محاذاة أصحاب المصلحة؟',
    faq3a:'من خلال التواصل المستمر، وخرائط الطريق الشفافة المرتبطة بأهداف الأعمال، وسجلات القرارات المكتوبة. المحاذاة ليست اجتماعاً — إنها نظام.',
    faq4q:'ما الفرق بين مدير المنتج ومحلل الأعمال في عملك؟',
    faq4a:'محللو الأعمال يحددون "ماذا" — يترجمون احتياجات الأعمال إلى متطلبات. مديرو المنتج يمتلكون "لماذا" — يقررون ما يجب بناؤه وبأي ترتيب. أنا أجمع الاثنين، مما يعني أنني أكتب متطلبات لها سياق استراتيجي، وليست مجرد مواصفات وظيفية.',
    faq5q:'ما الذي يجعل نهجك مختلفاً؟',
    faq5a:'أبدأ بالأدلة لا الآراء. أستثمر في الاكتشاف الحقيقي قبل الالتزام بالحلول، وأكتب PRDs تجدها فرق الهندسة مفيدة، وأقيس النجاح بالنتائج — لا بالميزات التي تم شحنها.',
    faq6q:'كيف تتعامل مع الخلافات مع فرق الهندسة؟',
    faq6a:'أتعامل مع مخاوف المهندسين كإشارات للمنتج، لا عقبات. لو دفع المهندسون ضد النطاق أو الجدوى، هذه معلومة قيّمة — عادةً تعني أن المشكلة لم تُعرَّف بشكل كافٍ. أستثمر في الفهم المشترك قبل الضغط نحو قرار، وأوثّق المقايضات حتى يرى الجميع المنطق، لا النتيجة فقط.',
    faq7q:'كيف تبدو عملية الاكتشاف لديك من الناحية العملية؟',
    faq7a:'تبدأ بجملة مشكلة تتضمن من المتأثر، وكم مرة، وما تكلفتها. ثم ٥-١٠ مقابلات مستخدمين منظمة تركّز على السلوك لا الآراء. ثم التوليف: الأنماط، الأسباب الجذرية، والافتراضات الأكثر خطورة. لا يُكتب شيء في PRD حتى يُتحقق من المشكلة. تستغرق الدورة الكاملة ١-٢ أسبوع حسب إمكانية الوصول للمستخدمين.',
    faq8q:'كيف تحدد الأولويات حين يبدو كل شيء عاجلاً؟',
    faq8a:'أطبّق RICE أو التسجيل الموزون لفصل الإلحاح عن الأهمية — عادةً هما مختلفان. ثم أتماشى مع القيادة على أهم نتيجة أعمال للربع وأقيس كل بند "عاجل" أمامها. البنود التي لا تحرّك الإبرة تنزل في الأولوية بغض النظر عن مصدر الطلب. الإطار يجعل الحوار عن المقايضات، لا عن الشخصيات.',
    faq9q:'هل تستطيع العمل في الأسواق الناطقة بالعربية؟',
    faq9a:'نعم — أنا ناطق أصلي بالعربية وقدت منتجات مصمّمة خصيصاً لجمهور الشرق الأوسط وشمال أفريقيا، بما في ذلك تخطيطات RTL وكتابة UX عربية ومنطق أعمال محلي. أفهم الفروق الثقافية التي تؤثر على سلوك المستخدم في المنطقة، وليس فقط اللغة.',
    faq10q:'كيف تقيس نجاح المنتج بعد الإطلاق؟',
    faq10a:'تُحدَّد مقاييس النجاح قبل كتابة سطر كود واحد — لا بعد الإطلاق. أربط كل ميزة بمقياس محدد واتجاه وإطار زمني. بعد الإطلاق، أتتبع تلك المقاييس لمدة ٣٠ يوماً على الأقل وأجري تحليل فئات لفهم ما إذا كان التغيير السلوكي ثابتاً، وأوثّق الدروس بغض النظر عن النتيجة.',
    faq11q:'ما خبرتك مع منتجات الذكاء الاصطناعي؟',
    faq11a:'أطلقت أربعة منتجات مدعومة بالذكاء الاصطناعي تشمل: منشئ chatbot بدون كود، منصة توليد محتوى بالذكاء الاصطناعي، أداة لفحص المرشحين، ومنصة دعم NLP. نهجي في ميزات الذكاء الاصطناعي يشمل تحديد عتبات الدقة مسبقاً، تحديد مسارات التدخل البشري في كل PRD، قياس نقاط ثقة النموذج، وتخطيط دورات إعادة التدريب في خارطة الطريق.',
    faq12q:'كيف تكتب PRD يستخدمه المهندسون فعلاً؟',
    faq12a:'PRD الجيد يجيب على أربعة أشياء لكل متطلب: من يقوم بذلك وتحت أي ظروف، ما الذي يحدث بالضبط، كيف نعرف أنه نجح (معايير قبول قابلة للاختبار)، وماذا يحدث حين يفشل. أضيف أيضاً المبرر التجاري — الذي يخبر المهندسين كيف يتخذون قرارات سليمة حين يصطدمون بحالة حافة لم أتوقعها.',
    faq13q:'هل لديك خبرة في بناء المنتجات من الصفر؟',
    faq13a:'نعم — عدة تجارب. البناء من الصفر يتطلب عقلية مختلفة تماماً عن التوسع: لا توجد بيانات، ولا "نسخة سابقة"، وكل افتراض فرضية. أجري سبرينتات اكتشاف خفيفة قبل أي تطوير، وأحدد الافتراضات الأكثر خطورة صراحةً، وأرتّب التحقق حتى نتعلم بتكلفة منخفضة قبل أن نبني بتكلفة عالية.',
    faq14q:'كيف تدير النطاق حين تكون المواعيد النهائية ثابتة؟',
    faq14a:'بعقد نطاق مكتوب متفق عليه قبل السبرينت الأول — يغطي ما هو داخل النطاق، وما هو خارجه صراحةً، ومعايير قرار إضافة بنود جديدة. كل طلب في منتصف المشروع يُقيَّم أمام هذا العقد. لو أُضيف شيء، شيء آخر مكافئ في الجهد يخرج. هذا يعيد صياغة حوارات النطاق من "هل نضيف هذا؟" إلى "ماذا أنت مستعد لإزالته؟"',
    faq15q:'ما الصناعات التي عملت فيها؟',
    faq15a:'SaaS، FinTech، HealthTech، التنقل، التجارة الإلكترونية، السوق، EdTech، GovTech، PropTech، HR Tech، LegalTech، وInsurTech — بشكل رئيسي عبر منطقة الشرق الأوسط وشمال أفريقيا. الاتساع يعني أنني أتعرف على الأنماط بسرعة عبر المجالات وأُحضر تفكيراً متعدد الصناعات لمشاكل المنتج التي غالباً ما تبدو فريدة لكنها نادراً ما تكون كذلك.',
    contact_pre:'متاح لمشاريع جديدة',
    contact_h2:'لنبنِ<br><em>شيئاً عظيماً.</em>',
    contact_desc:'إن كنت تبني منتجاً مهماً وتحتاج مدير منتج يُنجز بغاية — دعنا نتحدث بصراحة حول ما إذا كنا الخيار الصحيح لبعضنا.',
    send_email:'أرسل إيميلاً →', linkedin_profile:'ملف لينكدإن',
    location:'الموقع', cairo:'القاهرة، مصر', phone:'هاتف',
    footer_copy:'© ٢٠٢٦ أحمد محمد السيد — مدير منتج',
  }
};

function setLang(lang) {
  currentLang = lang;
  const ar = lang === 'ar';
  const html = document.documentElement;
  html.setAttribute('lang', ar ? 'ar' : 'en');
  html.setAttribute('dir', ar ? 'rtl' : 'ltr');
  document.getElementById('langBtn').querySelector('.lang-label').textContent = ar ? 'EN' : 'AR';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = T[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  // Update theme button label after translation
  const themeKey = dark ? 'theme_dark' : 'theme_light';
  const tl = document.querySelector('.theme-label');
  if (tl) tl.textContent = T[lang][themeKey] || tl.textContent;
  // Re-render blog
  const activeCat = document.querySelector('.bfi.active');
  if (activeCat) renderBlog(activeCat.dataset.cat);
}

const langBtn = document.getElementById('langBtn');
langBtn.addEventListener('click', () => { setLang(currentLang === 'en' ? 'ar' : 'en'); });

/* ── Welcome Popup ── */
function closePopup() {
  const overlay = document.getElementById('welcomeOverlay');
  if (!overlay) return;
  overlay.style.transition = 'opacity .4s ease';
  overlay.style.opacity = '0';
  overlay.style.pointerEvents = 'none';
  setTimeout(() => { if (overlay) overlay.remove(); }, 420);
}
window.closePopup = closePopup;

document.addEventListener('DOMContentLoaded', function() {
  const overlay  = document.getElementById('welcomeOverlay');
  const closeBtn = document.getElementById('closePopup');
  const closeX   = document.getElementById('closePopupX');
  if (closeBtn) closeBtn.addEventListener('click', function(e){ e.stopPropagation(); closePopup(); });
  if (closeX)   closeX.addEventListener('click',   function(e){ e.stopPropagation(); closePopup(); });
  if (overlay) {
    overlay.addEventListener('click', function(e){ if(e.target===overlay) closePopup(); });
    setTimeout(function(){ if(document.getElementById('welcomeOverlay')) closePopup(); }, 30000);
  }
});

const hbg = document.getElementById('hbg'), mm = document.getElementById('mm');
hbg.addEventListener('click', () => {
  mm.classList.toggle('open');
  const s = hbg.querySelectorAll('span');
  if (mm.classList.contains('open')) { s[0].style.transform = 'translateY(6.5px) rotate(45deg)'; s[1].style.opacity = '0'; s[2].style.transform = 'translateY(-6.5px) rotate(-45deg)'; }
  else { s.forEach(x => { x.style.transform = ''; x.style.opacity = ''; }); }
});
function closeMM() { mm.classList.remove('open'); hbg.querySelectorAll('span').forEach(x => { x.style.transform = ''; x.style.opacity = ''; }); }


/* ══════════════════ PROJECT DATA ══════════════════ */
const PROJECTS = [
  { id:'wa', name:'WhatsApp CRM', org:null, year:'May 2024', catLabel:'B2B SaaS', cats:['saas'], role:'Lead PM', featured:true,
    metrics:[{v:'+340%',l:'Msg Volume'},{v:'92%',l:'90d Retention'}],
    desc:'Turned WhatsApp into a full CRM for SMBs — shared inbox, auto-routing, multi-agent support, and analytics.',
    tags:['WhatsApp API','B2B SaaS','RICE','SMB'],
    problem:'SMBs managed thousands of conversations from personal WhatsApp numbers. Zero history, no handoffs, no analytics.',
    approach:[
      {label:'Discovery',text:'40 user interviews across 3 SMB verticals'},
      {label:'JTBD mapping',text:'Mapped 6 core workflows before writing a single spec'},
      {label:'Prioritization',text:'RICE scored 80 requests down to 12 for MVP'},
      {label:'Launch',text:'Phased rollout to 200 beta users with weekly feedback loops'},
    ],
    allMetrics:[{v:'2.1k',l:'Paying Clients',n:'6 months'},{v:'+340%',l:'Message Volume',n:'vs baseline'},{v:'92%',l:'Retention',n:'90-day cohort'},{v:'4.6★',l:'CSAT',n:'Avg'}]
  },
  { id:'ri', name:'RetainIQ', org:null, year:'Jun 2024', catLabel:'Retention SaaS', cats:['saas','analytics'], role:'PM', featured:true,
    metrics:[{v:'-44%',l:'Churn Rate'},{v:'+28%',l:'LTV'}],
    desc:'Behavioral churn prediction engine catching at-risk users 14 days before cancellation with automated intervention playbooks.',
    tags:['Retention','Behavioral Analytics','Churn','SaaS'],
    problem:'Churn was signaled 14 days before users cancelled — feature disengagement, then a support ticket, then cancellation.',
    approach:[
      {label:'Risk scoring',text:'Real-time churn probability per user based on behavioral signals'},
      {label:'Trigger system',text:'Automated interventions at 3 risk thresholds'},
      {label:'Playbooks',text:'12 intervention templates categorized by churn reason'},
    ],
    allMetrics:[{v:'-44%',l:'Churn Rate',n:'YoY'},{v:'+28%',l:'LTV',n:'Per subscriber'},{v:'14d',l:'Early Warning',n:'Before cancellation'},{v:'61%',l:'Save Rate',n:'Per trigger'}]
  },
  { id:'pf', name:'PayFlow', org:null, year:'Aug 2024', catLabel:'Fintech', cats:['fintech'], role:'PM', featured:true,
    metrics:[{v:'-71%',l:'Late Payments'},{v:'4.8★',l:'NPS'}],
    desc:'Invoice & payment automation for freelancers — smart reminders, recurring billing, and one-tap pay links to eliminate late payments.',
    tags:['Fintech','Payments','Automation','Freelance'],
    problem:'Freelancers averaged 3.2 hours/month on manual invoicing and had 34% of invoices more than 30 days overdue.',
    approach:[
      {label:'Smart reminders',text:'Automated escalation sequence for late payers'},
      {label:'Recurring billing',text:'Set-and-forget for ongoing clients'},
      {label:'Instant pay links',text:'One tap to pay from any invoice email or WhatsApp'},
    ],
    allMetrics:[{v:'-71%',l:'Late Payments',n:'Days outstanding'},{v:'3.2h',l:'Time Saved/Month',n:'Per freelancer'},{v:'4.8★',l:'NPS',n:'User satisfaction'},{v:'86%',l:'Auto-Pay Adoption',n:'Recurring clients'}]
  },
  { id:'mc', name:'MedConnect', org:null, year:'Sep 2024', catLabel:'HealthTech B2B', cats:['healthtech'], role:'Lead PM', featured:true,
    metrics:[{v:'-67%',l:'Referral Drop-off'},{v:'3.8x',l:'Faster Handoffs'}],
    desc:'Clinic-to-clinic referral management platform replacing phone/fax workflows with structured digital intake and real-time status.',
    tags:['HealthTech','B2B SaaS','EMR Integration','HIPAA'],
    problem:'GPs sent referrals by fax or phone. Specialists had no structured intake. 40% of referred patients fell through the gap.',
    approach:[
      {label:'Discovery',text:'Shadowed 8 clinic coordinators across 3 specialties to map real referral workflows'},
      {label:'Core insight',text:'Both sides needed status visibility — GPs wanted confirmation, specialists wanted structured intake data'},
      {label:'MVP',text:'Structured referral form + real-time status tracker + automated patient notifications'},
      {label:'EMR integration',text:'API connections to avoid double data entry — #1 reason previous tools failed'},
    ],
    allMetrics:[{v:'-67%',l:'Referral Drop-off',n:'vs paper'},{v:'3.8x',l:'Faster Handoffs',n:'Hours not days'},{v:'94%',l:'GP Adoption',n:'Within 90 days'},{v:'4.7★',l:'Clinic NPS',n:'Both sides'}]
  },
  { id:'px', name:'PatientX', org:null, year:'Nov 2024', catLabel:'Medical SaaS', cats:['healthtech'], role:'PM', featured:true,
    metrics:[{v:'-31%',l:'30d Readmissions'},{v:'78%',l:'Med Adherence'}],
    desc:'Post-discharge patient engagement via WhatsApp/SMS daily check-ins, smart escalation, and real-time care team dashboards.',
    tags:['HealthTech','Patient Engagement','WhatsApp API','Care Coordination'],
    problem:'22% readmission rates within 30 days — mostly preventable. Nurses could not scale manual phone follow-up.',
    approach:[
      {label:'Research',text:'20 interviews with nurses, care coordinators, and recently discharged patients'},
      {label:'Key finding',text:'Patients wanted simpler instructions, not more reminders — complexity was the adherence killer'},
      {label:'Core product',text:'Daily WhatsApp check-ins with symptom triage, medication reminders, and escalation alerts'},
      {label:'Smart escalation',text:'ML-powered risk scoring flagged patients needing outreach before they deteriorated'},
    ],
    allMetrics:[{v:'-31%',l:'30d Readmissions',n:'Pilot cohort'},{v:'78%',l:'Med Adherence',n:'Up from 41%'},{v:'4.5★',l:'Patient Satisfaction',n:'Post-discharge'},{v:'2.1min',l:'Daily Check-in Time',n:'Per patient'}]
  },
  { id:'bf', name:'BotForge', org:null, year:'Jan 2025', catLabel:'AI SaaS', cats:['saas','ai'], role:'PM', featured:true,
    metrics:[{v:'78%',l:'Ticket Deflection'},{v:'500+',l:'Bots in Q1'}],
    desc:'No-code AI chatbot builder — drag-and-drop intent flows, 40 templates, and test mode. Zero engineers required.',
    tags:['AI','No-code','Chatbots','Support Automation'],
    problem:'Non-technical teams knew what they wanted their chatbot to do, but building it required developer backlogs.',
    approach:[
      {label:'Visual builder',text:'Drag-and-drop intent flows with conditional logic'},
      {label:'Template library',text:'40 pre-built bots for common support scenarios'},
      {label:'Test mode',text:'Simulate conversations before publishing to production'},
    ],
    allMetrics:[{v:'78%',l:'Ticket Deflection',n:'AI-handled'},{v:'4.2min',l:'Avg Resolution',n:'Down from 22min'},{v:'500+',l:'Bots Created',n:'First quarter'},{v:'89%',l:'User Activation',n:'First-bot publish'}]
  },
  { id:'cf', name:'CheckoutFix', org:null, year:'Mar 2025', catLabel:'E-commerce', cats:['ecommerce'], role:'PM', featured:true,
    metrics:[{v:'+23%',l:'Checkout Rate'},{v:'+31%',l:'Mobile Conversion'}],
    desc:'Funnel analysis and checkout redesign recovering 23% more revenue from abandoned carts in a 6-week sprint.',
    tags:['E-commerce','Funnel Optimization','Conversion','UX'],
    problem:'63% cart abandonment. Session recordings revealed 3 friction points: payment ordering, address validation, coupon placement.',
    approach:[
      {label:'Payment',text:'Moved preferred methods to top based on user geo data'},
      {label:'Address',text:'Real-time validation with autocomplete to reduce form errors'},
      {label:'Coupon',text:'Moved to order summary with clear error states'},
    ],
    allMetrics:[{v:'+23%',l:'Checkout Rate',n:'6-week project'},{v:'-18%',l:'Cart Abandonment',n:'Funnel optimization'},{v:'+31%',l:'Mobile Conversion',n:'Redesigned flow'},{v:'4.3★',l:'UX Rating',n:'Post-checkout'}]
  },
  { id:'ob', name:'OnboardPro', org:null, year:'May 2025', catLabel:'B2B Onboarding', cats:['saas'], role:'PM', featured:true,
    metrics:[{v:'3d',l:'Time-to-Value'},{v:'+52%',l:'Activation Rate'}],
    desc:'Cut enterprise SaaS time-to-value from 14 days to 3 by rebuilding onboarding with progressive disclosure and inline guidance.',
    tags:['Onboarding','B2B SaaS','Activation','UX'],
    problem:'New users spent their first 14 days in a maze of configuration screens, PDFs, and support email chains.',
    approach:[
      {label:'Progressive disclosure',text:'3 steps to first value instead of 11'},
      {label:'Inline guidance',text:'Contextual tips replaced the 40-page documentation'},
      {label:'Milestone',text:'Celebration screen at first meaningful action to reinforce habit'},
    ],
    allMetrics:[{v:'3d',l:'Time-to-Value',n:'Down from 14 days'},{v:'+52%',l:'Activation Rate',n:'Week-1 cohorts'},{v:'-38%',l:'Support Tickets',n:'Onboarding-related'},{v:'94%',l:'Setup Completion',n:'Full config'}]
  },
  { id:'dl', name:'DataLab', org:null, year:'Jul 2025', catLabel:'Analytics SaaS', cats:['saas','analytics'], role:'PM', featured:true,
    metrics:[{v:'0d',l:'Data Wait Time'},{v:'+89%',l:'Data Team Capacity'}],
    desc:'Self-serve product analytics that eliminated the 3–5 day data request wait — no SQL required for PMs or designers.',
    tags:['Analytics','Self-serve BI','No-code','Data'],
    problem:'Every product decision required a data request. Data teams were bottlenecked. 3–5 day wait slowed every sprint.',
    approach:[
      {label:'Natural language queries',text:'Ask a question, get a chart — no SQL required'},
      {label:'Template library',text:'60 common product analytics views ready to use'},
      {label:'Permission layer',text:'Data team controls schema access by role'},
    ],
    allMetrics:[{v:'0d',l:'Data Wait Time',n:'Down from 3–5 days'},{v:'+89%',l:'Data Team Capacity',n:'Freed for deep work'},{v:'12min',l:'Avg Query Time',n:'Non-technical users'},{v:'91%',l:'Weekly Active',n:'PM + design users'}]
  },
  // AI Projects
  { id:'aicontent', name:'ContentAI', org:null, year:'Sep 2025', catLabel:'AI · Content', cats:['ai','saas'], role:'PM', featured:true,
    metrics:[{v:'8x',l:'Content Output'},{v:'-74%',l:'Production Cost'}],
    desc:'AI-powered content generation platform for marketing teams — brief-to-copy in seconds, brand voice training, and multi-channel export.',
    tags:['AI','Content Generation','LLM','Marketing Tech'],
    problem:'Marketing teams spent 60% of their time on first-draft creation. Quality varied wildly by writer. Brand voice consistency was near-impossible at scale.',
    approach:[
      {label:'Brand voice training',text:'Fine-tuning pipeline on each client\'s top-performing content — 200 samples minimum'},
      {label:'Brief-to-brief',text:'Structured brief template that translated marketing intent into prompt context automatically'},
      {label:'Approval workflow',text:'Human-in-the-loop review step before any content reached publishing queue'},
      {label:'Multi-channel',text:'Single brief → email, social, blog, and ad copy variants in one generation pass'},
    ],
    allMetrics:[{v:'8x',l:'Content Output',n:'Per marketer'},{v:'-74%',l:'Production Cost',n:'Per piece'},{v:'94%',l:'Brand Voice Match',n:'Human evaluator score'},{v:'4.7★',l:'Team NPS',n:'Post-launch'}]
  },
  { id:'aipm', name:'PM Copilot', org:null, year:'Nov 2025', catLabel:'AI · Productivity', cats:['ai','saas'], role:'Lead PM', featured:true,
    metrics:[{v:'-60%',l:'PRD Time'},{v:'91%',l:'Adoption Rate'}],
    desc:'AI assistant for product managers — auto-generate PRDs, user stories, acceptance criteria, and stakeholder summaries from meeting transcripts.',
    tags:['AI','PM Tools','LLM','Productivity'],
    problem:'PMs spent 4–6 hours per feature writing documentation that most engineers skimmed in minutes. Meeting context was lost between sessions.',
    approach:[
      {label:'Transcript ingestion',text:'Connected to Zoom, Google Meet, and Fireflies — PRD drafted from meeting transcript automatically'},
      {label:'Template system',text:'15 PRD templates by product type — SaaS, marketplace, mobile, API — each with smart defaults'},
      {label:'Acceptance criteria engine',text:'AI generates testable ACs from feature description, reviewed and edited inline'},
      {label:'Stakeholder digest',text:'Weekly summary of product decisions, trade-offs, and open questions — auto-sent to leadership'},
    ],
    allMetrics:[{v:'-60%',l:'PRD Writing Time',n:'Per feature'},{v:'91%',l:'Weekly Adoption',n:'Enrolled PMs'},{v:'4.8★',l:'PM Satisfaction',n:'Survey NPS'},{v:'3.2h',l:'Weekly Time Saved',n:'Per PM'}]
  },
  { id:'aisupport', name:'SupportIQ AI', org:null, year:'Dec 2025', catLabel:'AI · Support', cats:['ai','saas'], role:'PM', featured:true,
    metrics:[{v:'71%',l:'Auto-Resolution'},{v:'-4.5h',l:'Handle Time'}],
    desc:'AI-powered customer support platform with intelligent routing, auto-reply, and agent assist — cutting handle time by 4.5 hours per day per agent.',
    tags:['AI','Customer Support','NLP','B2B SaaS'],
    problem:'Support teams handled 80% repetitive tickets manually. Average handle time was 7.5 minutes. Agent burnout was critical.',
    approach:[
      {label:'Intent classification',text:'Fine-tuned classifier on 50k support tickets achieving 94% intent accuracy'},
      {label:'Auto-resolve layer',text:'Rule-based + AI hybrid resolved 71% of tickets without agent involvement'},
      {label:'Agent assist',text:'Real-time suggestion sidebar: relevant docs, previous resolutions, and tone guidance'},
      {label:'Escalation logic',text:'Sentiment + confidence scoring determined when humans must intervene'},
    ],
    allMetrics:[{v:'71%',l:'Auto-Resolution',n:'Without agent'},{v:'-4.5h',l:'Daily Handle Time',n:'Per agent'},{v:'94%',l:'Intent Accuracy',n:'Classification'},{v:'4.6★',l:'Customer CSAT',n:'Post-resolution'}]
  },
  { id:'aihrscreening', name:'TalentScan AI', org:null, year:'Feb 2026', catLabel:'AI · HR Tech', cats:['ai','saas'], role:'PM', featured:true,
    metrics:[{v:'-82%',l:'Screening Time'},{v:'+49%',l:'Interview Quality'}],
    desc:'AI-powered CV screening and candidate ranking platform — structured scoring, bias detection, and async video interview analysis for MENA hiring teams.',
    tags:['AI','HR Tech','Recruitment','NLP'],
    problem:'HR teams spent 3–4 hours per role just reading CVs. Screening decisions were inconsistent across reviewers. Video interviews had no structured scoring.',
    approach:[
      {label:'Structured scoring',text:'10 weighted criteria per role — AI scores each CV against criteria, humans review ranked list'},
      {label:'Bias detection',text:'Names, photos, and university names redacted during initial AI scoring pass'},
      {label:'Async video analysis',text:'AI transcribes and scores video answers against rubric — response quality, clarity, confidence signals'},
      {label:'Calibration loop',text:'Recruiter overrides fed back into scoring model monthly to improve alignment'},
    ],
    allMetrics:[{v:'-82%',l:'Screening Time',n:'Per open role'},{v:'+49%',l:'Interview Quality',n:'Structured score'},{v:'3.1x',l:'Roles Handled',n:'Per recruiter'},{v:'91%',l:'Hiring Manager Satisfaction',n:'Post-hire survey'}]
  },
  { id:'talabat', name:'Talabat', org:'Delivery Hero / Talabat', year:'May 2024', catLabel:'Food Delivery', cats:['mobility','consumer'], role:'Product Manager', featured:true,
    metrics:[{v:'-34%',l:'WISMO Contacts'},{v:'+11%',l:'Reorder Rate'}],
    desc:'Led real-time order tracking overhaul and restaurant portal redesign for one of MENA\'s largest food delivery platforms.',
    tags:['Food Delivery','Real-time','Restaurant Tech','Growth'],
    problem:'WISMO ("Where Is My Order?") contacts were 28% of all support tickets. Restaurant portal adoption was 34% — most restaurants used phone-based confirmation, causing 12% cancellation rate.',
    approach:[
      {label:'Discovery',text:'Mapped the full order journey across 8 cities, identifying 4 trust-breaking moments where customer anxiety peaked'},
      {label:'Live tracking',text:'Shipped driver real-time location with ETA confidence intervals — replacing static "30–45 min" with a live countdown'},
      {label:'Restaurant portal',text:'Rebuilt tablet app with Arabic-first design, simplified order flow, and push notifications — portal adoption rose from 34% to 91%'},
      {label:'Proactive comms',text:'Added automated delay notifications triggered at 80% of ETA with reason and revised estimate'},
    ],
    allMetrics:[{v:'-34%',l:'WISMO Contacts',n:'Support volume'},{v:'+11%',l:'Reorder Rate',n:'30-day cohort'},{v:'91%',l:'Restaurant Portal Adoption',n:'Up from 34%'},{v:'-44%',l:'Cancellation Rate',n:'Restaurant-side'}]
  },
  { id:'indrive', name:'InDrive MENA', org:'InDrive (Contract)', year:'Jul 2024', catLabel:'Ride-sharing · Mobility', cats:['mobility'], role:'Product Consultant', featured:true,
    metrics:[{v:'+19%',l:'Driver Acceptance'},{v:'-27%',l:'Rider Wait Time'}],
    desc:'Optimized driver acceptance rates and supply distribution for InDrive\'s MENA expansion across 8 cities.',
    tags:['Mobility','Supply/Demand','Driver UX','Pricing'],
    problem:'Driver acceptance rate in new MENA cities was 54% — far below the 78% target. Mismatch between counter-offer model and local earning expectations.',
    approach:[
      {label:'Driver research',text:'Rode with 40+ drivers across Cairo, Riyadh, and Dubai to understand the acceptance decision psychology'},
      {label:'Earnings transparency',text:'Added daily earnings comparison feature — drivers saw their take vs. top earners in their zone before accepting or countering'},
      {label:'Surge clarity',text:'Redesigned surge map to show predicted demand 15 minutes ahead — helping drivers position proactively'},
      {label:'New driver onboarding',text:'Built a 3-day guided earnings challenge for new drivers — increasing first-week acceptance from 51% to 74%'},
    ],
    allMetrics:[{v:'+19%',l:'Acceptance Rate',n:'MENA cities'},{v:'-27%',l:'Rider Wait Time',n:'Avg minutes'},{v:'+23%',l:'Driver Daily Earnings',n:'Top quartile'},{v:'4.6★',l:'Rider App Rating',n:'Post-launch'}]
  },
  { id:'noon', name:'Noon.com', org:'Noon (Contract)', year:'Sep 2024', catLabel:'E-commerce', cats:['ecommerce','consumer'], role:'Product Manager', featured:true,
    metrics:[{v:'+28%',l:'Conversion Rate'},{v:'+2.1x',l:'Repeat Purchase'}],
    desc:'Built and shipped a personalization engine for MENA\'s largest e-commerce platform — driving discovery and repeat purchase behavior for 8M+ users.',
    tags:['E-commerce','Personalization','ML','Recommendation'],
    problem:'Noon showed the same catalog to all 8M+ users. Browse-to-purchase conversion was 2.1% vs. 3.8% industry benchmark.',
    approach:[
      {label:'Data analysis',text:'Analyzed 90 days of clickstream data to identify 12 behavioral segments with distinct purchase patterns'},
      {label:'Personalized shelf',text:'Built "Recommended for You" shelf trained on purchase history, browse depth, and category affinity'},
      {label:'Email personalization',text:'Personalized weekly email digest using purchase signals — revenue per email increased 3.4x'},
      {label:'Rollout strategy',text:'Phased A/B rollout per segment — expanded to 100% of users after 6-week test confirmed significance'},
    ],
    allMetrics:[{v:'+28%',l:'Conversion Rate',n:'Homepage'},{v:'+2.1x',l:'Repeat Purchase',n:'90-day cohort'},{v:'+3.4x',l:'Email Revenue/Send',n:'Personalized vs. batch'},{v:'-18%',l:'Bounce Rate',n:'Homepage'}]
  },
  { id:'careem', name:'Careem Super App', org:'Careem (Uber)', year:'Jun 2024', catLabel:'Mobility · Super App', cats:['mobility','consumer'], role:'Product Manager', featured:true,
    metrics:[{v:'+3.2x',l:'MAU per Service'},{v:'68%',l:'Cross-service Usage'}],
    desc:'Led expansion of Careem from ride-hailing to a multi-service super app — delivery, payments, and home services for 12M users.',
    tags:['Super App','Mobility','Fintech','Platform'],
    problem:'Careem had 12M ride-hailing users but near-zero cross-service adoption. Careem Pay had 4% penetration despite heavy marketing.',
    approach:[
      {label:'Platform redesign',text:'Rebuilt the app home as a unified service hub with contextual service surfacing based on time-of-day and behavior'},
      {label:'Cross-service triggers',text:'Added post-ride prompts: "Order food delivered to your destination?" — timed contextually to ride completion'},
      {label:'Careem Pay integration',text:'Made Careem Pay the default with visible cashback before every payment — adoption went from 4% to 51%'},
      {label:'Loyalty unification',text:'Unified loyalty across all services — points earned on rides could be spent on food, and vice versa'},
    ],
    allMetrics:[{v:'+3.2x',l:'MAU per Service',n:'Cross-service'},{v:'68%',l:'Cross-service Usage',n:'Monthly active'},{v:'51%',l:'Careem Pay Adoption',n:'Up from 4%'},{v:'+44%',l:'Overall Revenue',n:'Per active user'}]
  },
  // Additional cards — updated dates
  { id:'tc', name:'ToolCycle', org:null, year:'May 2024', catLabel:'P2P Marketplace', cats:['marketplace'], role:'PM', featured:false, metrics:[{v:'+210%',l:'Utilization'},{v:'88%',l:'Lender Retention'}], desc:'Peer-to-peer tool rental marketplace with damage deposits, photo verification, and proximity matching for idle equipment.', tags:['P2P','Circular Economy','Trust Design'] },
  { id:'rt', name:'ReTech', org:null, year:'Jun 2024', catLabel:'Re-commerce', cats:['ecommerce','marketplace'], role:'PM', featured:false, metrics:[{v:'+65%',l:'Conversion'},{v:'-41%',l:'Return Rate'}], desc:'24-point inspection grading system for pre-owned electronics with photographic evidence and buyback guarantee.', tags:['Re-commerce','Trust UX','Grading'] },
  { id:'hrnest', name:'HRNest', org:null, year:'Jul 2024', catLabel:'HR SaaS', cats:['saas'], role:'PM', featured:false, metrics:[{v:'-60%',l:'HR Admin Time'},{v:'94%',l:'Adoption Rate'}], desc:'HR management SaaS for MENA SMBs — payroll, leave, and compliance in one Arabic-first platform.', tags:['HR Tech','SaaS','Arabic UX','Payroll'] },
  { id:'taskpulse', name:'TaskPulse', org:null, year:'Aug 2024', catLabel:'Productivity SaaS', cats:['saas'], role:'PM', featured:false, metrics:[{v:'+38%',l:'On-time Delivery'},{v:'4.7★',l:'Team NPS'}], desc:'Project management for remote-first MENA teams — async-friendly, Arabic RTL support, and WhatsApp notifications.', tags:['Project Mgmt','Remote','SaaS','Productivity'] },
  { id:'contractflow', name:'ContractFlow', org:null, year:'Sep 2024', catLabel:'LegalTech SaaS', cats:['saas'], role:'PM', featured:false, metrics:[{v:'-80%',l:'Contract Cycle Time'},{v:'99%',l:'Audit Compliance'}], desc:'Legal document automation for MENA businesses — Arabic/English bilingual contracts, e-signature, and approval workflows.', tags:['LegalTech','Automation','B2B SaaS','E-signature'] },
  { id:'feedbackloop', name:'FeedbackLoop', org:null, year:'Oct 2024', catLabel:'CX SaaS', cats:['saas','analytics'], role:'PM', featured:false, metrics:[{v:'8x',l:'Response Rate'},{v:'+34%',l:'NPS Improvement'}], desc:'Contextual NPS & CSAT collection embedded in product — triggered at the right moments via WhatsApp or email.', tags:['NPS','CSAT','CX','SaaS'] },
  { id:'apigate', name:'ApiGate', org:null, year:'Nov 2024', catLabel:'Developer SaaS', cats:['saas'], role:'PM', featured:false, metrics:[{v:'+220%',l:'API Adoption'},{v:'-65%',l:'Time-to-First-Call'}], desc:'Developer portal and API management with interactive docs, sandbox environments, and usage analytics.', tags:['Developer Tools','API','Platform','SaaS'] },
  { id:'skillpath', name:'SkillPath', org:null, year:'Dec 2024', catLabel:'EdTech · Corporate', cats:['saas','edtech'], role:'PM', featured:false, metrics:[{v:'87%',l:'Course Completion'},{v:'+41%',l:'Skill Certification'}], desc:'Corporate LMS with AI-recommended learning paths, LinkedIn integration, and team skill gap analysis.', tags:['EdTech','LMS','Corporate Training','L&D'] },
  { id:'insighthub', name:'InsightHub', org:null, year:'Jan 2025', catLabel:'Analytics SaaS', cats:['analytics','saas'], role:'PM', featured:false, metrics:[{v:'40+',l:'Integrations'},{v:'4.8★',l:'Product Rating'}], desc:'Business intelligence dashboard with no-code report builder, automated insights, and Slack/WhatsApp alert delivery.', tags:['BI','Analytics','No-code','SaaS'] },
  { id:'pricepulse', name:'PricePulse', org:null, year:'Feb 2025', catLabel:'Pricing SaaS', cats:['saas','ecommerce'], role:'PM', featured:false, metrics:[{v:'+19%',l:'Avg Margin'},{v:'3.2x',l:'Revenue/SKU'}], desc:'Dynamic pricing engine — competitor monitoring, demand forecasting, and automated repricing rules for MENA merchants.', tags:['Pricing','E-commerce','AI','MENA'] },
  { id:'walletx', name:'WalletX', org:null, year:'Mar 2025', catLabel:'Fintech · Payments', cats:['fintech'], role:'PM', featured:false, metrics:[{v:'1.8M',l:'Wallet Activations'},{v:'+290%',l:'Transaction Volume'}], desc:'Digital wallet for the MENA unbanked population — no credit history required, Arabic-first UX, cash-in via corner stores.', tags:['Fintech','Wallet','Financial Inclusion','MENA'] },
  { id:'lendbridge', name:'LendBridge', org:null, year:'Apr 2025', catLabel:'Fintech · Lending', cats:['fintech'], role:'PM', featured:false, metrics:[{v:'72h',l:'Loan Decision Time'},{v:'94%',l:'Repayment Rate'}], desc:'SMB lending using alternative data (revenue, digital footprint) to approve underserved MENA businesses in 72 hours.', tags:['Lending','SMB','Alt Data','Fintech'] },
  { id:'finreport', name:'FinReport', org:null, year:'May 2025', catLabel:'FinTech · Accounting', cats:['fintech','saas'], role:'PM', featured:false, metrics:[{v:'-90%',l:'Report Time'},{v:'99.8%',l:'Accuracy Rate'}], desc:'Automated financial reporting for MENA accountants — VAT compliance, multi-currency, and Arabic ledger export.', tags:['Accounting','Fintech','Automation','VAT'] },
  { id:'insurflow', name:'InsurFlow', org:null, year:'Jun 2025', catLabel:'InsurTech', cats:['fintech'], role:'PM', featured:false, metrics:[{v:'-68%',l:'Claims Processing Time'},{v:'4.5★',l:'Customer Satisfaction'}], desc:'AI-powered insurance claims processing — photo damage assessment, fraud detection, and automated payout approval.', tags:['InsurTech','AI','Claims','MENA'] },
  { id:'govpay', name:'GovPay', org:null, year:'Jul 2025', catLabel:'GovTech · Payments', cats:['fintech'], role:'PM', featured:false, metrics:[{v:'4.2M',l:'Monthly Transactions'},{v:'-85%',l:'Office Visits'}], desc:'Government services payment portal for MENA — bills, fines, permits, and renewals in one Arabic-first digital gateway.', tags:['GovTech','Payments','Civic Tech','Arabic UX'] },
  { id:'cryptohub', name:'CryptoHub', org:null, year:'Aug 2025', catLabel:'FinTech · Crypto', cats:['fintech'], role:'PM', featured:false, metrics:[{v:'360k+',l:'Wallets Created'},{v:'4.4★',l:'App Rating'}], desc:'Crypto portfolio management for MENA retail investors — regulatory-compliant, Arabic explanations, and beginner-first onboarding.', tags:['Crypto','Fintech','MENA','Compliance'] },
  { id:'expenseiq', name:'ExpenseIQ', org:null, year:'Sep 2025', catLabel:'FinTech · Expense', cats:['fintech','saas'], role:'PM', featured:false, metrics:[{v:'-72%',l:'Expense Report Time'},{v:'88%',l:'Employee Adoption'}], desc:'Corporate expense management with OCR receipt scanning, policy enforcement, and ERP integration for MENA enterprises.', tags:['Expense','B2B SaaS','Finance','OCR'] },
  { id:'pharmtrack', name:'PharmTrack', org:null, year:'Oct 2025', catLabel:'HealthTech · Pharmacy', cats:['healthtech'], role:'PM', featured:false, metrics:[{v:'-43%',l:'Drug Stockouts'},{v:'99.1%',l:'Prescription Accuracy'}], desc:'Pharmacy inventory and prescription management for MENA chains — expiry tracking, reorder automation, and drug interaction alerts.', tags:['HealthTech','Pharmacy','Inventory','Compliance'] },
  { id:'teledoc', name:'TeleDoc', org:null, year:'Nov 2025', catLabel:'Telemedicine', cats:['healthtech'], role:'PM', featured:false, metrics:[{v:'8 min',l:'Avg Consult Wait'},{v:'91%',l:'Patient Return Rate'}], desc:'Telemedicine appointment platform for MENA — Arabic-speaking doctor matching, prescription delivery, and insurance integration.', tags:['Telemedicine','HealthTech','MENA','Insurance'] },
  { id:'fitcoach', name:'FitCoach AI', org:null, year:'Dec 2025', catLabel:'HealthTech · Fitness', cats:['healthtech','consumer','ai'], role:'PM', featured:false, metrics:[{v:'+67%',l:'30d Retention'},{v:'4.6★',l:'App Rating'}], desc:'AI fitness and nutrition coaching adapted for MENA — Ramadan plans, Arabic food database, prayer-time workout scheduling.', tags:['Fitness','AI','MENA','Personalization'] },
  { id:'mentalspace', name:'MentalSpace', org:null, year:'Jan 2026', catLabel:'Mental Health', cats:['healthtech','consumer'], role:'PM', featured:false, metrics:[{v:'40k+',l:'Active Users'},{v:'4.7★',l:'Therapist Rating'}], desc:'Mental health app for MENA users — culturally sensitive content, anonymous journaling, and Arabic-speaking therapist matching.', tags:['Mental Health','HealthTech','Arabic UX','MENA'] },
  { id:'proconnect', name:'ProConnect', org:null, year:'May 2024', catLabel:'Freelance Marketplace', cats:['marketplace'], role:'PM', featured:false, metrics:[{v:'18k+',l:'Verified Freelancers'},{v:'4.5★',l:'Client NPS'}], desc:'Professional freelance marketplace for MENA — verified skills, escrow payments, and bilingual project management.', tags:['Marketplace','Freelance','MENA','Payments'] },
  { id:'edumarket', name:'EduMarket', org:null, year:'Jun 2024', catLabel:'EdTech Marketplace', cats:['marketplace','edtech'], role:'PM', featured:false, metrics:[{v:'3.2k+',l:'Courses Listed'},{v:'82%',l:'Learner Completion'}], desc:'Arabic-language online course marketplace with creator monetization, subscription bundles, and certificate verification.', tags:['EdTech','Marketplace','Creator Economy','Arabic'] },
  { id:'spacebook', name:'SpaceBook', org:null, year:'Aug 2024', catLabel:'PropTech · Booking', cats:['marketplace'], role:'PM', featured:false, metrics:[{v:'+180%',l:'Space Utilization'},{v:'76%',l:'Repeat Bookings'}], desc:'Co-working space discovery and booking for MENA — hourly/daily/monthly options, community features, and corporate plans.', tags:['PropTech','Co-working','Marketplace','B2B'] },
  { id:'localmart', name:'LocalMart', org:null, year:'Jan 2026', catLabel:'Hyperlocal Commerce', cats:['marketplace','consumer'], role:'PM', featured:false, metrics:[{v:'8 min',l:'Avg Delivery'},{v:'94%',l:'Buyer Satisfaction'}], desc:'Neighborhood commerce platform connecting shoppers with nearby stores for instant delivery — built for Egyptian cities.', tags:['Hyperlocal','Commerce','Delivery','Egypt'] },
  { id:'cartsaver', name:'CartSaver', org:null, year:'Oct 2024', catLabel:'E-commerce Tool', cats:['ecommerce','saas'], role:'PM', featured:false, metrics:[{v:'+26%',l:'Recovered Revenue'},{v:'38%',l:'Recovery Rate'}], desc:'Cart abandonment recovery — exit intent detection, personalized SMS/email sequences, and dynamic discount triggers.', tags:['E-commerce','Retention','SaaS','Automation'] },
  { id:'shipease', name:'ShipEase', org:null, year:'Jul 2024', catLabel:'Logistics SaaS', cats:['ecommerce','saas'], role:'PM', featured:false, metrics:[{v:'-28%',l:'Shipping Cost'},{v:'1.5d',l:'Avg Delivery'}], desc:'Shipping aggregator for MENA merchants — compare rates across 8 carriers, bulk labels, and unified tracking dashboard.', tags:['Logistics','E-commerce','SaaS','MENA'] },
  { id:'reviewiq', name:'ReviewIQ', org:null, year:'Nov 2024', catLabel:'E-commerce Trust', cats:['ecommerce','saas','ai'], role:'PM', featured:false, metrics:[{v:'+42%',l:'Review Trust Score'},{v:'-55%',l:'Fake Reviews'}], desc:'Product review authenticity platform — verified purchase badges, AI fraud detection, and structured review prompts.', tags:['Trust','Reviews','AI','E-commerce'] },
  { id:'communityapp', name:'CommUnity', org:null, year:'May 2024', catLabel:'Consumer · Social', cats:['consumer'], role:'PM', featured:false, metrics:[{v:'120k+',l:'Monthly Active Users'},{v:'4.5★',l:'App Rating'}], desc:'Neighborhood social and services app — bulletin board, local marketplace, emergency alerts, and verified neighbor chat.', tags:['Social','Hyperlocal','Community','Consumer'] },
  { id:'eventsnap', name:'EventSnap', org:null, year:'Sep 2024', catLabel:'Consumer · Events', cats:['consumer'], role:'PM', featured:false, metrics:[{v:'8k+',l:'Events/Month'},{v:'83%',l:'Ticket Sell-through'}], desc:'Event discovery and ticketing for MENA — curated experiences, group booking, and QR-code entry management.', tags:['Events','Ticketing','Discovery','MENA'] },
  { id:'logix', name:'LogiX', org:null, year:'Dec 2024', catLabel:'Logistics · B2B', cats:['mobility','saas'], role:'PM', featured:false, metrics:[{v:'-32%',l:'Last-mile Cost'},{v:'98.2%',l:'On-time Delivery'}], desc:'B2B last-mile logistics for MENA brands — route optimization, driver management, and real-time delivery tracking API.', tags:['Logistics','B2B','Route Optimization','API'] },
  { id:'fleetpro', name:'FleetPro', org:null, year:'Oct 2024', catLabel:'Fleet SaaS', cats:['mobility','saas'], role:'PM', featured:false, metrics:[{v:'-29%',l:'Fuel Cost'},{v:'+38%',l:'Driver Safety Score'}], desc:'Fleet management SaaS for MENA SMBs — GPS tracking, fuel monitoring, maintenance scheduling, and driver behavior analytics.', tags:['Fleet','IoT','SaaS','Mobility'] },
  { id:'examprep', name:'ExamPrep', org:null, year:'Jun 2024', catLabel:'EdTech', cats:['edtech'], role:'PM', featured:false, metrics:[{v:'+31%',l:'Pass Rate'},{v:'500k+',l:'Registered Students'}], desc:'MENA university exam preparation — adaptive practice tests, video explanations in Arabic, and performance analytics.', tags:['EdTech','Arabic','Adaptive Learning','MENA'] },
  { id:'codecamp', name:'CodeCamp', org:null, year:'Oct 2024', catLabel:'EdTech · Coding', cats:['edtech'], role:'PM', featured:false, metrics:[{v:'88%',l:'Job Placement Rate'},{v:'4.8★',l:'Graduate Rating'}], desc:'Coding bootcamp platform — cohort-based live instruction, mentorship matching, and ISA payment model for MENA students.', tags:['EdTech','Coding','ISA','Job Placement'] },
  { id:'kidslearn', name:'KidsLearn', org:null, year:'Feb 2025', catLabel:'EdTech · Kids', cats:['edtech','consumer'], role:'PM', featured:false, metrics:[{v:'+48%',l:'Reading Proficiency'},{v:'93%',l:'Parent Satisfaction'}], desc:'Gamified Arabic literacy app for children 4–10 — phonetics, stories, and curriculum-aligned progress reports for parents.', tags:['Kids','EdTech','Arabic','Gamification'] },
  { id:'propertyiq', name:'PropertyIQ', org:null, year:'May 2025', catLabel:'PropTech', cats:['marketplace','analytics','ai'], role:'PM', featured:false, metrics:[{v:'+57%',l:'Lead Quality'},{v:'-40%',l:'Time-to-Match'}], desc:'Real estate search and matching for MENA — AI-powered recommendations, neighborhood data overlays, and agent analytics.', tags:['PropTech','Real Estate','AI','MENA'] },
  { id:'rentflow', name:'RentFlow', org:null, year:'Jul 2025', catLabel:'PropTech · Rental', cats:['saas','marketplace'], role:'PM', featured:false, metrics:[{v:'-55%',l:'Admin Time'},{v:'98%',l:'Rent Collection Rate'}], desc:'Rental management for MENA landlords — digital leases, WhatsApp rent reminders, maintenance ticketing, and payout automation.', tags:['PropTech','Rental','SaaS','Automation'] },
  { id:'smartmeter', name:'SmartMeter', org:null, year:'Sep 2025', catLabel:'IoT · Energy', cats:['saas'], role:'PM', featured:false, metrics:[{v:'-24%',l:'Energy Consumption'},{v:'4.6★',l:'Building Manager NPS'}], desc:'IoT energy monitoring for MENA commercial buildings — real-time dashboards, anomaly detection, and carbon footprint reporting.', tags:['IoT','Energy','SaaS','Sustainability'] },
  { id:'surveypro', name:'SurveyPro', org:null, year:'Nov 2025', catLabel:'Research SaaS', cats:['saas','analytics'], role:'PM', featured:false, metrics:[{v:'8x',l:'Response Rate vs Email'},{v:'40+',l:'Question Templates'}], desc:'Enterprise survey platform with WhatsApp-native delivery, Arabic RTL question builder, and real-time analytics dashboard.', tags:['Research','SaaS','WhatsApp','Analytics'] },
  { id:'aivision', name:'VisionTag AI', org:null, year:'Jan 2026', catLabel:'AI · Computer Vision', cats:['ai','saas'], role:'PM', featured:false, metrics:[{v:'97%',l:'Tag Accuracy'},{v:'-88%',l:'Manual Effort'}], desc:'Computer vision platform for e-commerce — auto-tags product images, detects defects, and generates alt-text for accessibility.', tags:['AI','Computer Vision','E-commerce','Automation'] },
  { id:'ailegal', name:'LexAI', org:null, year:'Feb 2026', catLabel:'AI · LegalTech', cats:['ai','saas'], role:'PM', featured:false, metrics:[{v:'-71%',l:'Review Time'},{v:'99.2%',l:'Clause Accuracy'}], desc:'AI-powered legal document review — clause extraction, risk flagging, and redline suggestions for MENA legal teams.', tags:['AI','LegalTech','NLP','Contract Review'] },
  { id:'aianalytics', name:'InsightGPT', org:null, year:'Mar 2026', catLabel:'AI · Analytics', cats:['ai','analytics','saas'], role:'PM', featured:false, metrics:[{v:'0 SQL',l:'Required'},{v:'4.9★',l:'PM Rating'}], desc:'Natural language analytics layer — PMs type questions, get charts, explanations, and recommended actions instantly.', tags:['AI','Analytics','NLP','Self-serve BI'] },
];


/* ══════════════════ PROJECT RENDERING ══════════════════ */
let activeProjCat = 'all';

function renderProjects() {
  const grid = document.getElementById('projGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = activeProjCat === 'all' ? PROJECTS : PROJECTS.filter(p => p.cats.includes(activeProjCat));
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'pcard reveal';
    card.style.transitionDelay = (i % 6 * 0.04) + 's';
    card.innerHTML = `
      ${p.featured ? '<span class="pcard-feat">★ Featured</span>' : ''}
      <div class="pcard-header">
        <span class="pcard-cat-badge">${p.catLabel}</span>
        <span class="pcard-year">${p.year}</span>
      </div>
      <div class="pcard-name">${p.name}</div>
      ${p.org ? `<div class="pcard-org">@ ${p.org}</div>` : ''}
      <p class="pcard-desc">${p.desc}</p>
      <div class="pcard-metrics">${p.metrics.map(m => `<div class="pcard-metric"><span class="pm-v">${m.v}</span><span class="pm-l">${m.l}</span></div>`).join('')}</div>
      <div class="pcard-tags">${p.tags.map(t => `<span class="pcard-tag">${t}</span>`).join('')}</div>
      ${p.featured ? '<div class="pcard-hint">Click to read the full case study</div>' : ''}
    `;
    if (p.featured) card.addEventListener('click', () => openProject(p.id));
    grid.appendChild(card);
  });
  grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function filterProjects(cat, btn) {
  activeProjCat = cat;
  document.querySelectorAll('.pf').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects();
}

function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p || !p.featured) return;
  const modal = document.getElementById('projModal');
  document.getElementById('pmodContent').innerHTML = `
    <div class="pmod-meta"><span class="pmod-cat">${p.catLabel}</span> · <span>${p.year}</span> · <span>${p.role}</span></div>
    <h2 class="pmod-title">${p.name}</h2>
    ${p.org ? `<div class="pmod-org">@ ${p.org}</div>` : ''}
    <p class="pmod-lead">${p.desc}</p>
    <div class="pmod-metrics">${p.allMetrics.map(m => `<div class="pmod-m"><div class="pmod-mv">${m.v}</div><div class="pmod-ml">${m.l}</div>${m.n ? `<div class="pmod-mn">${m.n}</div>` : ''}</div>`).join('')}</div>
    <div class="pmod-section"><div class="pmod-st">The Problem</div><p>${p.problem}</p></div>
    <div class="pmod-section"><div class="pmod-st">My Approach</div><div class="pmod-steps">${p.approach.map(a => `<div class="pmod-step"><strong>${a.label}:</strong> ${a.text}</div>`).join('')}</div></div>
    <div class="pcard-tags" style="margin-top:20px">${p.tags.map(t => `<span class="pcard-tag">${t}</span>`).join('')}</div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjModal() {
  document.getElementById('projModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Blog filter ── */
document.querySelectorAll('.bfi').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bfi').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    renderBlog(cat);
  });
});

/* ── ARTICLES DATA ── */
/* ── ARTICLES DATA — Top 15 ── */
const ARTS = [
  {
    id:0, cat:'strategy', catLabel:'Product Strategy',
    date:'Mar 2026', mins:9,
    img:'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=65&auto=format&fit=crop',
    title:'Why Most Roadmaps Are Just Wish Lists in Disguise',
    excerpt:'A roadmap without outcome targets is a delivery plan masquerading as strategy. After 50+ products, here\'s what separates roadmaps teams believe in.',
    body:`<p>A roadmap without outcome targets is a delivery plan masquerading as strategy. I've seen this pattern across more than 50 products: a well-formatted slide deck full of features, quarters, and color-coded priority labels — and zero clarity on what user behavior or business metric each item is supposed to move.</p>
<h3>The Core Problem</h3>
<p>Most roadmaps are built backwards. They start with features — often inherited from sales requests, competitor parity lists, or executive hunches — and retrofit justification. A real roadmap starts with the business outcome and works backwards to the minimum capability needed to achieve it.</p>
<p>The telltale sign: ask any PM "what number changes when this ships?" If they pause, the roadmap is a wish list. If they answer in under five seconds with a specific metric, a direction, and a timeframe, you have a real roadmap item.</p>
<h3>The Outcome-First Framework</h3>
<p>Before writing a single line in your roadmap, define the outcome. Not "improve onboarding" — that's a theme. The outcome is: "Increase week-1 activation rate from 34% to 48% by Q3." Now work backwards:</p>
<ul>
  <li><strong>What user behavior needs to change?</strong> Users must complete the first meaningful action (connecting their first integration) within session one.</li>
  <li><strong>What's stopping them now?</strong> Discovery research reveals: confusing UI at step 3, missing inline guidance, and too many required fields before first value.</li>
  <li><strong>What's the minimum capability to remove that blocker?</strong> A redesigned step 3 with progressive disclosure and a contextual tooltip — not a full onboarding overhaul.</li>
</ul>
<p>That is how a roadmap item earns its place. The feature is the last thing you write, not the first.</p>
<h3>Sequencing That Survives Reality</h3>
<p>Once you have outcome-linked items, sequence by dependency and risk — not by desire. High-confidence, low-dependency items first. Anything requiring external integrations or org-wide alignment last. Build in explicit "learning gates" — checkpoints where you validate assumptions before proceeding to the next phase.</p>
<h3>Making the Roadmap Defensible</h3>
<p>Publish the "why" alongside the "what." For every roadmap item, include the outcome it targets, the research or data that supports the hypothesis, and the metric you'll use to declare success. This one change transforms roadmap reviews from political negotiations into evidence-based conversations. Stakeholders who disagree must now provide counter-evidence — not just louder opinions.</p>
<blockquote><p>The goal is not to ship features. The goal is to change user behavior in ways that improve business outcomes. Features are just the current best hypothesis for how to do that.</p></blockquote>`
  },
  {
    id:1, cat:'ai', catLabel:'AI & Product',
    date:'Feb 2026', mins:10,
    img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=65&auto=format&fit=crop',
    title:'Building with LLMs: A PM\'s Honest Field Guide',
    excerpt:'After shipping 4 AI-powered products, here\'s what I actually learned about LLMs — including what they can\'t do and how to spec around their failure modes.',
    body:`<p>After shipping four AI-powered products across 2024 and 2025, I have a much clearer view of what LLMs are genuinely good at, where they predictably fail, and how to write PRDs that account for both. Most of what I read about "building with AI" glosses over the failure modes. This doesn't.</p>
<h3>What LLMs Actually Solve Well</h3>
<p>LLMs are remarkable at first-draft generation, document summarization, intent classification, extracting structured data from unstructured text, and adapting tone to context. If your product needs any of these capabilities, LLMs are likely the right tool.</p>
<p>They are significantly weaker at: precise arithmetic, maintaining consistency across very long contexts, citing sources without hallucinating, and handling distribution shifts (performing well in testing, failing on production data they were never trained on).</p>
<h3>The PM's Spec Checklist for AI Features</h3>
<ul>
  <li><strong>Define accuracy thresholds before launch, not after.</strong> "Good enough" must be a number. If your AI feature classifies support tickets, what percentage accuracy triggers a rollback? Agree on this in the PRD, not in the post-mortem.</li>
  <li><strong>Always include a human fallback path.</strong> Every AI feature spec should describe what happens when the model is wrong or uncertain. If there's no fallback, you don't have a complete spec.</li>
  <li><strong>Instrument confidence scores.</strong> Ship logging for model confidence alongside user outcomes. This data is how you know when the model is quietly degrading before users start complaining.</li>
  <li><strong>Plan retraining cycles in the roadmap.</strong> LLM-based features are not "ship and forget." Budget time and data infrastructure for periodic fine-tuning or prompt updates as your product data distribution evolves.</li>
</ul>
<h3>The PRD Sections That Change for AI</h3>
<p>Add two sections to every AI feature PRD that you wouldn't write for traditional features: <em>Failure Mode Catalog</em> (list the top 5 ways the model can fail and what the product does in each case) and <em>Success Metrics with Time Bounds</em> (because AI metrics don't just need a target — they need a monitoring cadence, because model performance drifts).</p>
<blockquote><p>Shipping an AI feature without a failure mode spec is like shipping a payment flow without handling declined cards. The failure isn't theoretical — it's scheduled.</p></blockquote>`
  },
  {
    id:2, cat:'research', catLabel:'User Research',
    date:'Jan 2026', mins:8,
    img:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=65&auto=format&fit=crop',
    title:'The 5-Interview Rule: How to Validate Before You Build',
    excerpt:'Five well-run interviews surface 80% of the insight that 50 would. Here\'s exactly how to run them so the findings actually change decisions.',
    body:`<p>The most common research mistake I see isn't doing too little — it's doing research that doesn't change anything. Teams run 20 interviews, produce a synthesis document, and then ship exactly what they were planning to ship before the research started. The problem is almost never the number of interviews. It's the structure.</p>
<h3>Why Five is Enough</h3>
<p>Nielsen Norman's foundational research established that five well-recruited users surface 85% of major usability issues. By interview four, you're hearing repetition. By five, you have enough signal to act. More interviews add diminishing returns — unless you're doing quantitative validation or studying multiple distinct user segments.</p>
<p>The ROI calculation is simple: five 45-minute sessions with proper synthesis takes about two days. Fifty sessions takes four weeks. If the two-day version surfaces the same insight that would stop you from building the wrong thing, the math is obvious.</p>
<h3>The Setup That Makes Research Actionable</h3>
<p>Before the first session, write down your three riskiest assumptions — the beliefs that, if wrong, would make the feature not worth building. Structure your interview guide to test those assumptions, not to confirm existing beliefs.</p>
<ul>
  <li><strong>Open with context, not tasks.</strong> "Walk me through the last time you tried to [do the thing your feature helps with]." This surfaces the real workflow before you've influenced it with your product framing.</li>
  <li><strong>Never mention your solution in the first 30 minutes.</strong> The moment you describe your feature, you've shifted from discovery to validation theater.</li>
  <li><strong>Take verbatim notes.</strong> Exact words reveal mental models. "It feels clunky" and "it's confusing" look similar in a summary but point to completely different problems.</li>
  <li><strong>End with the "hire" question.</strong> "What would make you actually use something like this?" This surfaces adoption blockers that task-based sessions never find.</li>
</ul>
<h3>Synthesizing for Decisions, Not Reports</h3>
<p>The synthesis artifact should be one page: your three assumptions, whether each was validated or invalidated, and the specific implication for the next decision. Not a 40-slide deck. One page, one decision per finding. If research doesn't force a product decision, it wasn't worth running.</p>`
  },
  {
    id:3, cat:'business-analysis', catLabel:'Business Analysis',
    date:'Dec 2025', mins:9,
    img:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=65&auto=format&fit=crop',
    title:'Impact Mapping: The BA Technique That Replaces 40 Slides',
    excerpt:'Impact maps force the question every PRD skips: does this feature actually change user behavior in a way that achieves a business goal?',
    body:`<p>Most requirements documents start with features. Impact mapping starts with goals — and forces every feature to justify itself against a chain of logic that connects it to real behavior change and real business outcomes. In my experience, this single shift eliminates 30-40% of the backlog before a single sprint is planned.</p>
<h3>The Four Levels of an Impact Map</h3>
<p>An impact map has four nested levels, and the discipline of building it is as valuable as the artifact itself:</p>
<ul>
  <li><strong>Goal:</strong> The business outcome. Not "launch the feature" — that's a milestone. The goal is "increase monthly active users by 25% in Q2." Quantified, time-bound, business-meaningful.</li>
  <li><strong>Actors:</strong> Who can help or hinder achieving this goal? Actors include users, but also partners, internal teams, regulators, and support staff. Most BA work ignores non-user actors and then wonders why adoption stalls.</li>
  <li><strong>Impacts:</strong> What behavior changes do we need from each actor? This is the most important level and the one most teams skip. We can't make users do anything — we can only create conditions that make the desired behavior easier or more likely.</li>
  <li><strong>Deliverables:</strong> What will we build to create each impact? These are your features, and they appear last — not first.</li>
</ul>
<h3>Running an Impact Mapping Workshop</h3>
<p>The most powerful version of impact mapping is done in a room with PMs, designers, engineers, and one business stakeholder. Start with the goal written on the wall. Work left to right: who are the actors, what impacts do we need, what can we build. The constraint: you cannot write a deliverable until you've written the impact it creates.</p>
<p>In every workshop I've run, at least three "high-priority" features fall off the map before the session ends — because no one can articulate what behavior change they're supposed to create. That's the exercise working correctly.</p>
<h3>When to Use It</h3>
<p>Impact mapping is most valuable at the beginning of a product initiative, before requirements are written. It's a poor fit for maintenance work or bug fixes. It's an excellent fit for: new product areas, significant feature investments, or any time a stakeholder says "I want X" without explaining why.</p>`
  },
  {
    id:4, cat:'product-ownership', catLabel:'Product Ownership',
    date:'Nov 2025', mins:8,
    img:'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=65&auto=format&fit=crop',
    title:'The Backlog Is Lying to You — And You Wrote the Lies',
    excerpt:'Every item over 90 days old in your backlog is a decision you refused to make. Here\'s how to fix it and keep it fixed.',
    body:`<p>A backlog is not a parking lot. It's a prioritized list of the next best investments of your team's time. When it has 300 items spanning three years, it's no longer any of those things — it's a graveyard of unkept promises and unresolved arguments.</p>
<h3>Why Backlogs Bloat</h3>
<p>Backlogs bloat because "adding to the backlog" has become a conflict-resolution mechanism. Stakeholder wants something you're not building? Add it to the backlog. Engineer suggests an improvement? Add it to the backlog. Customer support escalates a complaint? Add it to the backlog. The backlog absorbs everything that nobody wanted to say no to.</p>
<p>The result: a list so long that genuine priorities get buried, and the act of grooming it takes more time than building it.</p>
<h3>The 90-Day Rule</h3>
<p>Any item that has sat in your backlog for more than 90 days without being prioritized into a sprint has implicitly been deprioritized. The honest move is to archive it. If it's truly important, it will come back — with new evidence that justifies its priority. If it doesn't come back, you've just learned it wasn't as important as the person who added it believed.</p>
<h3>The Backlog as a Strategy Signal</h3>
<p>Your backlog, ordered and curated, should tell a story: here's what we believe will move the business most, here's the order we're tackling it, and here's why. When you read the top 20 items and can't articulate the strategic theme, your backlog doesn't reflect your strategy — it reflects your inbox.</p>
<h3>Keeping It Clean</h3>
<p>Implement a monthly archival ritual: any item older than 90 days that hasn't been promoted gets archived with a note. If the requester disagrees, they must provide new evidence — not just re-escalate. This single rule, consistently enforced, transforms backlog grooming from a chore into a strategic exercise.</p>
<blockquote><p>Your backlog is a statement of your product values. If it's bloated and unordered, your values are unclear to everyone — including yourself.</p></blockquote>`
  },
  {
    id:5, cat:'project-management', catLabel:'Project Management',
    date:'Oct 2025', mins:9,
    img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=65&auto=format&fit=crop',
    title:'Why Agile Projects Fail: The 7 Structural Mistakes Teams Keep Making',
    excerpt:'Teams follow all the Agile rituals and still ship late, lose stakeholder trust, and burn out. The problem isn\'t the ceremonies — it\'s how they\'re run.',
    body:`<p>I've seen the same failures across a dozen Agile transformations: teams that run daily standups, hold bi-weekly retrospectives, and do sprint reviews — and still consistently miss deadlines, surprise stakeholders, and struggle with quality. The rituals are there. The principles aren't.</p>
<h3>Mistake 1: Standups as Status Reports</h3>
<p>When every team member answers "what did I do yesterday / what will I do today / any blockers?" and nobody actually unblocks anything, the standup has become a performance. The purpose of the standup is blocker-surfacing and coordination — not status reporting for the PM's benefit. Fix: change the question to "what's the one thing that could slow us down today, and who needs to know?"</p>
<h3>Mistake 2: Sprint Goals That Are Feature Lists</h3>
<p>"This sprint we'll build X, Y, and Z" is not a sprint goal. A sprint goal is a measurable outcome: "By end of sprint, users can complete account setup without leaving the app." Features are the bet you're making to achieve that outcome. When the goal is an outcome, the team can make daily decisions that serve it — even when the original plan hits unexpected friction.</p>
<h3>Mistake 3: Velocity as Performance Metric</h3>
<p>The moment velocity becomes a team KPI, it gets gamed — consciously or not. Story point inflation follows. Teams that optimize for velocity stop optimizing for outcomes. Velocity is a planning tool, not a measure of productivity. Never report it upward.</p>
<h3>Mistake 4: Skipping Retrospectives When Behind Schedule</h3>
<p>Teams most commonly skip retros when they need them most — when behind, stressed, or in crunch mode. The reasoning: "we don't have time to reflect, we need to ship." The reality: the dysfunction causing the delay will repeat in the next sprint without a retro. Protect the retrospective even when (especially when) the sprint was painful.</p>
<h3>Mistake 5: Definition of Done Excluding Analytics</h3>
<p>A feature is not done when it's deployed. It's done when the analytics instrumentation is verified, the success metric is being measured, and the team has a date to review the data. Build this into your Definition of Done or you'll ship features you can never evaluate.</p>
<h3>Mistake 6: No Technical Debt Allocation</h3>
<p>Teams that never allocate sprint capacity to technical debt accumulate it until it slows delivery by 40-60%. Reserve 15-20% of each sprint for debt reduction. Make it explicit. Track it. Celebrate it. It's the highest-leverage investment a mature engineering team can make.</p>
<h3>Mistake 7: Sprint Reviews Without Real Stakeholders</h3>
<p>When sprint reviews become internal demos to people who are already in the team's daily Slack channel, they've lost their purpose. Bring in real stakeholders — product leaders, customers, sales reps — and demo against the sprint goal, not just the feature list. The feedback you get will change what you plan in the next sprint.</p>`
  },
  {
    id:6, cat:'prioritization', catLabel:'Prioritization',
    date:'Sep 2025', mins:8,
    img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=65&auto=format&fit=crop',
    title:'RICE vs MoSCoW: A Decision Guide for PM Practitioners',
    excerpt:'Every prioritization framework has a blind spot. RICE ignores strategic alignment. MoSCoW invites politics. Here\'s how to choose and when each breaks down.',
    body:`<p>The question isn't which framework is better — they're optimized for different situations. The PM mistake is picking one and applying it to everything, then wondering why it doesn't work in some contexts. Here's a practical guide to when each earns its place, and where each predictably fails.</p>
<h3>RICE: When Quantitative Data is Available</h3>
<p>RICE (Reach × Impact × Confidence ÷ Effort) works best when you're comparing growth or retention initiatives and have enough data to estimate reach and impact. It removes politics: items score what they score, and the highest score ships first.</p>
<p><strong>Where RICE breaks down:</strong> When reach is hard to estimate (new markets, new user segments), when strategic alignment isn't captured in the formula, and when it's used to compare items across fundamentally different domains (comparing a user-facing feature to infrastructure work is a category error, not a RICE problem).</p>
<p><strong>The fix:</strong> Add a strategic multiplier. Before applying RICE, assess how well each item aligns with the company's quarterly OKRs. Score 1-3. Multiply it into the RICE score. Now strategic importance shows up in the ranking rather than being overridden by it.</p>
<h3>MoSCoW: When Scope is Fixed</h3>
<p>MoSCoW (Must Have / Should Have / Could Have / Won't Have) is a stakeholder alignment tool, not a discovery tool. It works best in fixed-scope delivery contexts — contractual deliverables, releases with hard deadlines, or situations where you need executives to explicitly commit to what gets cut when timelines slip.</p>
<p><strong>Where MoSCoW breaks down:</strong> Every stakeholder thinks their items are Must Have. Without a neutral scoring mechanism, MoSCoW becomes a political negotiation where the loudest voice wins. It also fails when the "Won't Have" items aren't actually agreed — they just go back on the backlog and create expectation debt.</p>
<p><strong>The fix:</strong> Require documented rationale for every Must Have. "It's important" is not sufficient. "Without it, the product fails to meet [specific user need] for [specific user segment] which represents [specific business risk]" is sufficient.</p>
<h3>The Meta-Framework</h3>
<p>Use RICE for growth initiatives when you have data. Use MoSCoW for release scoping conversations with stakeholders. Use neither as a substitute for the actual hard work: talking to users, understanding the business context, and making judgment calls that no formula can make for you.</p>
<blockquote><p>A prioritization framework is a communication tool, not a decision machine. The decision is always yours — the framework just makes it easier to defend.</p></blockquote>`
  },
  {
    id:7, cat:'strategy', catLabel:'Product Strategy',
    date:'Aug 2025', mins:9,
    img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=65&auto=format&fit=crop',
    title:'Retention Is a Product Problem, Not a Marketing Problem',
    excerpt:'When users churn, most teams respond with campaigns. That\'s the wrong lever — because retention is almost always lost in the product, not the inbox.',
    body:`<p>The pattern is consistent: churn spikes, and the first response is a win-back email campaign. If the campaign works, teams conclude that retention is a marketing problem solved by better messaging. If it doesn't work, they try different messaging. They almost never look at the product.</p>
<p>In every retention analysis I've run, the real churn driver was in the product experience — usually in the first two weeks. Marketing can't fix a product that doesn't create the habit it promised to create.</p>
<h3>Where Retention is Actually Lost</h3>
<p>Retention failure has a consistent anatomy. It starts at activation: users who don't reach the first meaningful value moment within their first session are three to five times more likely to churn within 30 days. The activation moment isn't "created an account" — it's the first time the product delivers on its core promise. Identifying this moment and removing every obstacle between signup and that moment is the highest-ROI retention investment most products can make.</p>
<p>If activation is solid, the next failure point is habit formation. Products that survive week one still need to create a reason to return in week two and three. This is where notification strategy, habit loop design, and personalization matter — but only after the core product delivers enough value to motivate return.</p>
<h3>The Retention Diagnostic</h3>
<p>Before any retention initiative, answer these questions with data:</p>
<ul>
  <li>What percentage of new users reach the first meaningful value moment within their first session? What's the benchmark?</li>
  <li>Of users who reach the value moment, what percentage return within 7 days?</li>
  <li>Where in the funnel do returning users drop off — and what were they trying to do when they stopped?</li>
  <li>What do retained users have in common that churned users don't? (This is your retention predictor.)</li>
</ul>
<h3>Building the Retention Loop</h3>
<p>Once you've diagnosed the failure point, the fix almost always involves product changes: simplifying the path to value, adding contextual guidance at friction points, or redesigning the feature that retained users return to most. Email and push notifications can support a strong habit loop — they can't create one where the product hasn't earned it.</p>
<blockquote><p>Retention is a product problem. If your product creates real value at the right frequency, users will return. If it doesn't, no drip sequence will compensate for a product that isn't delivering on its promise.</p></blockquote>`
  },
  {
    id:8, cat:'ai', catLabel:'AI & Product',
    date:'Jul 2025', mins:8,
    img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=65&auto=format&fit=crop',
    title:'The AI Copilot Pattern: When to Assist vs. Automate',
    excerpt:'The most consequential decision in AI feature design is whether the AI should suggest or decide. Get this wrong and you either underdeliver value or destroy trust.',
    body:`<p>Every AI feature exists on a spectrum from "pure suggestion" to "full automation." Where you place your feature on that spectrum is one of the most consequential product decisions you'll make — and most teams make it implicitly rather than intentionally.</p>
<h3>The Cost of Getting It Wrong in Each Direction</h3>
<p><strong>Too much automation, too early:</strong> Users encounter an AI decision they disagree with and can't override. Trust breaks. Adoption collapses. The product becomes associated with errors rather than efficiency. This is especially damaging in high-stakes domains: healthcare, finance, legal, HR.</p>
<p><strong>Too much suggestion, too little automation:</strong> The AI adds cognitive load without reducing effort. If users have to review and approve every AI output before it does anything, you've just given them more work, not less. The ROI disappears and the feature gets ignored.</p>
<h3>The Copilot Pattern as a Starting Point</h3>
<p>For any AI feature in a new domain, start with the copilot pattern: AI suggests, human decides. This isn't the permanent state — it's the responsible starting point. The copilot pattern has three advantages that pure automation doesn't: it builds user trust incrementally, it generates labeled feedback data (when users override the AI, that's a training signal), and it creates a soft landing when the model misfires — the human was in the loop.</p>
<h3>The Path to Automation</h3>
<p>Move from copilot to automation when three conditions are met:</p>
<ul>
  <li><strong>High accuracy:</strong> The model's decisions match what humans would decide at least 95% of the time in production (not just in testing).</li>
  <li><strong>Low-stakes failures:</strong> When the model is wrong, the cost of the error is low and reversible.</li>
  <li><strong>User trust established:</strong> Users who've worked with the copilot version consistently trust its outputs — evidenced by low override rates on high-confidence suggestions.</li>
</ul>
<p>Never move to automation because it's technically possible. Move because the data and the failure mode analysis justify it.</p>
<h3>The Always-Human Rule</h3>
<p>Some decisions should never be automated regardless of model accuracy: decisions with irreversible consequences, decisions with legal liability, and decisions that users feel strongly should involve a human — even if the human adds no objective accuracy. User perception of fairness matters as much as accuracy in high-stakes contexts.</p>`
  },
  {
    id:9, cat:'strategy', catLabel:'Product Strategy',
    date:'Jun 2025', mins:8,
    img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=65&auto=format&fit=crop',
    title:'North Star Metrics: Finding the One Number That Actually Matters',
    excerpt:'Most teams track 20 metrics and act on none of them. The north star framework forces clarity — but only if you pick the right metric.',
    body:`<p>The north star metric concept is simple: one number that represents the core value your product delivers to users, and whose growth is predictive of sustainable business growth. The execution is harder than it sounds — most teams either pick a vanity metric, confuse it with a revenue metric, or end up with three "north stars" that effectively means zero.</p>
<h3>What Makes a Good North Star</h3>
<p>A good north star metric has three properties that are harder to satisfy simultaneously than they appear:</p>
<ul>
  <li><strong>It measures value delivery, not activity.</strong> "Monthly active users" measures that users opened the app. "Users who complete a meaningful task monthly" measures that the product delivered value. The distinction matters enormously for what decisions the metric drives.</li>
  <li><strong>It's measurable by engineering without significant data infrastructure.</strong> If you can't instrument it and query it, it won't drive decisions. Aspirational metrics that take a quarter to define are not north stars — they're aspirations.</li>
  <li><strong>It correlates with revenue without being revenue.</strong> Revenue is a lagging indicator. The north star should be a leading indicator — a signal that, when it moves, you can predict (with some confidence) that revenue will follow.</li>
</ul>
<h3>Examples That Work and Why</h3>
<p>Spotify: songs listened to per monthly active user. Airbnb: nights booked. Slack: messages sent per active team. Each measures a specific act of value delivery. Each is a leading indicator of retention and revenue. Each is unambiguous enough that a sprint team knows whether their work moves it.</p>
<h3>The Common Mistake: Revenue as the North Star</h3>
<p>Revenue is the outcome of delivering user value at scale. Using it as a north star causes teams to optimize for short-term monetization over long-term value creation — which produces the exact growth trajectory companies are trying to avoid. Track revenue obsessively. Don't let it drive sprint planning.</p>
<h3>Operationalizing the North Star</h3>
<p>Post it on the wall. Include it in every sprint review. For every roadmap item, require someone to articulate the mechanism by which it moves the north star — not just assert that it does. When the connection to the north star is unclear, the item's priority should be questioned. This discipline, applied consistently, fundamentally changes the quality of your roadmap.</p>`
  },
  {
    id:10, cat:'business-analysis', catLabel:'Business Analysis',
    date:'May 2025', mins:9,
    img:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=65&auto=format&fit=crop',
    title:'Writing Requirements That Engineering Teams Actually Use',
    excerpt:'The gap between BAs who write requirements and engineers who use them is almost always the same: the "why" is missing, so every ambiguous case becomes a guess.',
    body:`<p>I've read hundreds of requirements documents across ten industries. The ones that engineering teams trust and reference share a specific structure. The ones that generate endless clarification questions and scope disputes don't. The difference isn't length or format — it's the presence of four specific elements that most documents omit.</p>
<h3>The Four-Part Requirement</h3>
<p>Every requirement worth writing answers four questions:</p>
<ul>
  <li><strong>User context:</strong> Who is doing this, under what conditions, and what have they already done? Not "the user" — "the enterprise account admin, during their first session after the free trial ends."</li>
  <li><strong>Behavior:</strong> What exactly happens? Not "users can upload files" — "the system accepts PDF and DOCX files up to 25MB per file, allows batch selection of up to 10 files, shows a progress indicator per file, and confirms completion with a count of successfully processed files."</li>
  <li><strong>Acceptance criteria:</strong> How will we know it worked? These must be testable. "The upload is fast" is not an acceptance criterion. "95% of files under 5MB upload within 3 seconds on a standard broadband connection" is.</li>
  <li><strong>Failure states:</strong> What happens when it doesn't work? This is the most commonly omitted section and the most expensive omission. Every ambiguous failure case becomes an engineering judgment call — which either produces inconsistent behavior or generates a Slack thread that pulls a PM back in.</li>
</ul>
<h3>The "Why" as a Design Constraint</h3>
<p>The most powerful sentence in any requirements document is the business rationale. "We're adding file upload to reduce support tickets from enterprise customers who currently email attachments manually" tells an engineer everything they need to make good judgment calls when the spec hits an edge case. Without it, every ambiguity requires an escalation.</p>
<h3>Making Requirements Reviewable</h3>
<p>Before signing off on a requirements document, run it through this test: can an engineer who's never spoken to the product manager implement this and have the output be what the PM envisioned? If the answer is no, the document isn't done yet. The goal is not completeness for its own sake — it's eliminating the sources of misalignment before they become sprint problems.</p>`
  },
  {
    id:11, cat:'product-ownership', catLabel:'Product Ownership',
    date:'Apr 2025', mins:8,
    img:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=65&auto=format&fit=crop',
    title:'User Stories Are Not Requirements — And the Confusion Is Costing You Sprints',
    excerpt:'A user story is a conversation placeholder. Treating it as a specification is how scope creep, rework, and sprint failures begin.',
    body:`<p>"As a user, I want to filter my search results so that I can find relevant items faster." This is a user story. It is a placeholder for a conversation, not a specification of behavior. When teams treat it as the complete requirement and start building, they will answer hundreds of implementation questions with guesses — some of which will be wrong.</p>
<h3>The Story vs. Specification Distinction</h3>
<p>User stories serve a specific purpose: they capture user intent in a format that facilitates conversation between PMs and engineers. The conversation — the "3 Cs" of Card, Conversation, Confirmation — is where the specification emerges. The card is just the starting point.</p>
<p>The failure mode is when teams write the card and skip the conversation. The engineer implements based on their interpretation. The PM reviews and says "that's not what I meant." The fix takes another sprint. This cycle is preventable and expensive.</p>
<h3>What Complete Acceptance Criteria Look Like</h3>
<p>Acceptance criteria are the specification. They should be written in Gherkin (Given/When/Then) or plain language, but they must be testable and exhaustive about failure states. The standard is: can a QA engineer who's never seen the feature write a test suite from this AC alone?</p>
<ul>
  <li><strong>Weak AC:</strong> "User can filter search results by date."</li>
  <li><strong>Strong AC:</strong> "Given a search results page with 10+ results, when the user selects a date range filter and applies it, then only results with publication dates within the selected range appear, the result count updates, and the active filter is visually indicated with a clear option to remove it. If no results match the filter, display a specific no-results state with a suggestion to widen the date range."</li>
</ul>
<h3>The Acceptance Criteria That Always Gets Skipped</h3>
<p>Permission states, error states, loading states, and empty states. Every feature has them. Most ACs document the happy path and leave the rest to engineering judgment. Document them explicitly, even if they seem obvious — what's obvious to a PM is not always obvious to an engineer working from a ticket at 4pm on a Friday.</p>
<h3>Refinement as a Quality Gate</h3>
<p>Refinement sessions should not end until every story has acceptance criteria that passes the "testable and exhaustive" test. If a story isn't ready, it doesn't enter the sprint. This one rule, consistently enforced, cuts sprint failures in half.</p>`
  },
  {
    id:12, cat:'ai', catLabel:'AI & Product',
    date:'Mar 2025', mins:8,
    img:'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=65&auto=format&fit=crop',
    title:'Prompt Engineering Is Now a Core PM Skill',
    excerpt:'The quality gap between a mediocre AI feature and a great one is often the system prompt. PMs who understand prompt design ship better products faster.',
    body:`<p>Twelve months ago, prompt engineering felt like a developer concern. Today, the PMs I work with who understand it consistently ship higher-quality AI features faster, write better technical specs, and have more productive conversations with ML engineers. It's moved from optional to foundational.</p>
<h3>What a System Prompt Actually Does</h3>
<p>A system prompt is the specification document for an AI's behavior. It defines: the AI's persona and tone, the scope of what it will and won't do, the format of its outputs, how it handles edge cases and uncertainty, and what to do when the user's request conflicts with the intended use case. Every production AI feature has one, even when it's poorly written.</p>
<p>The PM's role is to specify what the system prompt should achieve — which is exactly the kind of outcome-focused, edge-case-aware thinking that good product work requires. The engineer implements the prompt; the PM defines its requirements.</p>
<h3>The Prompt Requirements Document</h3>
<p>Add a prompt specification section to every AI feature PRD. It should include:</p>
<ul>
  <li><strong>Persona and tone:</strong> How should the AI present itself? What's the appropriate level of formality? What should it never sound like?</li>
  <li><strong>Scope constraints:</strong> What topics are in scope? What should the AI explicitly decline to address?</li>
  <li><strong>Output format:</strong> Should responses be concise or detailed? Bulleted or prose? Should they include citations or confidence qualifiers?</li>
  <li><strong>Edge case handling:</strong> What does the AI do when the user asks something ambiguous? When it doesn't know? When the request is out of scope?</li>
</ul>
<h3>Testing Prompt Specs Before Launch</h3>
<p>Before any AI feature ships, the prompt spec should be stress-tested against adversarial inputs — not just happy-path queries. Create a test suite of 20-30 inputs that represent: typical use, edge cases, ambiguous requests, and attempts to break the intended behavior. If the AI fails more than 10% of these, the prompt spec needs revision. This is QA for AI, and it belongs in your sprint Definition of Done.</p>
<h3>The Ongoing Maintenance Reality</h3>
<p>Prompts degrade as products evolve and user behavior shifts. Build in a monthly prompt review into your product calendar — not because the model changed, but because your users' needs and your product's context will. A prompt that was excellent at launch may be mediocre six months later.</p>`
  },
  {
    id:13, cat:'project-management', catLabel:'Project Management',
    date:'Feb 2025', mins:7,
    img:'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=65&auto=format&fit=crop',
    title:'Scope Creep Is Always the PM\'s Fault — Here\'s How to Fix It',
    excerpt:'Scope doesn\'t creep on organized teams. It creeps when there\'s no written contract between the PM, engineering, and stakeholders about what\'s in and what\'s out.',
    body:`<p>Scope creep has a bad reputation as something that happens to teams — an external force that sneaks in through stakeholder requests and "quick additions." In my experience, it's almost always an internal failure. It happens when there's no shared, written definition of what the team committed to building before the first sprint began.</p>
<h3>The Scope Contract</h3>
<p>Before any project starts, publish a one-page scope document. It has three sections and no exceptions:</p>
<ul>
  <li><strong>In scope:</strong> Exactly what will be delivered. Not themes or goals — specific capabilities with measurable acceptance criteria.</li>
  <li><strong>Out of scope (explicit):</strong> The items that were considered and deliberately deferred. This section is as important as the in-scope list. When stakeholders raise these items mid-sprint, you can reference the document rather than the conversation.</li>
  <li><strong>Decision criteria:</strong> Under what conditions will scope change? Who has authority to change it? What's the process? (Usually: new scope requires removing existing scope of equivalent effort, and both the PM and engineering lead must agree.)</li>
</ul>
<h3>Getting Sign-Off That Sticks</h3>
<p>The scope document needs to be explicitly reviewed and agreed to — not just sent. Schedule a 30-minute alignment session before sprint one. Walk through the in-scope and out-of-scope lists. Capture questions and resolve them. Get written acknowledgment from the key stakeholders. This session is the most valuable 30 minutes of the project. It eliminates scope arguments before they start.</p>
<h3>Using the Document Mid-Project</h3>
<p>When a new request arrives mid-sprint — and it always will — the scope document is your reference point, not your memory. "This wasn't in our scope document. Here's what would need to come out to add it, and here's the decision we'd need to make." This reframes scope negotiation from a personal disagreement to a business trade-off conversation.</p>
<h3>The Real Cost of Scope Creep</h3>
<p>Every scope addition that doesn't remove existing scope has a hidden cost: it either extends the timeline, reduces quality, or burns out the team. Making this cost explicit in the moment — "adding this means either X comes out or we slip the release by two weeks" — changes how stakeholders evaluate their requests.</p>`
  },
  {
    id:14, cat:'research', catLabel:'User Research',
    date:'Jan 2025', mins:7,
    img:'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=65&auto=format&fit=crop',
    title:'Jobs-to-be-Done: The Research Framework That Changed How I Build Products',
    excerpt:'JTBD reframes every product decision around the job the user is hiring your product to do — not the feature they\'re requesting. The distinction changes everything.',
    body:`<p>Feature requests are not product requirements. When a user says "I want a dark mode," they're not telling you what they need — they're telling you their current best guess at a solution. The job they're trying to do — work at night without eye strain, or signal that they're a power user, or match their system-wide preference — is what you actually need to understand before you can decide whether dark mode is the right investment.</p>
<h3>What a Job Actually Is</h3>
<p>A job-to-be-done is the progress a person is trying to make in a specific situation. It's not a task (upload a file), a feature (cloud storage), or a goal (be more organized). It's the functional, emotional, and social progress the user is trying to make: "When I'm presenting to a client, I want to be able to access my latest files instantly, so I don't look disorganized in front of someone I'm trying to impress."</p>
<p>The difference matters because it changes what you build. If you know the job is "not look disorganized in front of clients," you'll build something different than if you assume the job is "access cloud files." Maybe the real solution is a client presentation mode, not faster file access.</p>
<h3>Running a JTBD Interview</h3>
<p>JTBD interviews focus on the moments of switching and hiring — when someone found your product or changed their behavior — rather than on feature preferences or satisfaction scores:</p>
<ul>
  <li>Start with: "Tell me about the last time you [did the thing your product helps with]. Walk me through exactly what happened."</li>
  <li>Probe the timeline: "What triggered this? What were you doing before you started? What did you try first?"</li>
  <li>Explore the emotional context: "How were you feeling when you realized you needed to do this? What would have made it worse?"</li>
  <li>Uncover the social dimension: "Was anyone else involved in this? Who would notice if you did it differently?"</li>
</ul>
<h3>Applying JTBD to the Roadmap</h3>
<p>Once you understand the jobs your users are hiring your product for, you can evaluate every roadmap item against a simple test: does this make the job easier, faster, more reliable, or more socially acceptable? If none of the above, it's a feature — not a solution. Features that don't serve a job don't get used. Building them is waste.</p>
<blockquote><p>Users don't want your product. They want progress. Your product is the best available means to that progress — until something better comes along. Understanding the job they're hiring you for is the only sustainable competitive advantage.</p></blockquote>`
  }
];


function renderBlog(cat) {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  const filtered = (!cat || cat === 'all') ? ARTS.slice(1) : ARTS.slice(1).filter(a => a.cat === cat);
  grid.innerHTML = '';
  filtered.forEach((a, i) => {
    const d = document.createElement('div');
    d.className = 'ba reveal';
    if (i % 3 === 1) d.classList.add('d1');
    if (i % 3 === 2) d.classList.add('d2');
    d.dataset.cat = a.cat;
    d.innerHTML = `
      <div class="ba-img">
        <img src="${a.img}" alt="" loading="lazy">
        <span class="ba-cb">${a.catLabel}</span>
      </div>
      <div class="ba-bd">
        <div class="ba-mt">${a.date} · ${a.mins} min</div>
        <div class="ba-t">${a.title}</div>
        <p class="ba-ex">${a.excerpt}</p>
        <div class="ba-ft"><span class="ba-r">Read Article →</span><span class="ba-m">${a.mins} min</span></div>
      </div>`;
    d.addEventListener('click', () => openArt(a.id));
    grid.appendChild(d);
  });
  grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function openArt(id) {
  const a = ARTS.find(x => x.id === id); if (!a) return;
  const m = document.getElementById('artModal');
  document.getElementById('mHero').style.display = a.img ? 'block' : 'none';
  if (a.img) document.getElementById('mImg').src = a.img;
  document.getElementById('mCat').textContent = a.catLabel;
  document.getElementById('mTit').textContent = a.title;
  document.getElementById('mMet').textContent = a.date + ' · ' + a.mins + ' min read';
  document.getElementById('mCon').innerHTML = a.body;
  m.classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeArt() { document.getElementById('artModal').classList.remove('open'); document.body.style.overflow = ''; }
function artClick(e) { if (e.target === e.currentTarget || e.target.classList.contains('amod-bd')) closeArt(); }

/* ── FAQ ── */
document.querySelectorAll('.fbtn').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.fitem'), was = item.classList.contains('open');
    document.querySelectorAll('.fitem').forEach(i => i.classList.remove('open'));
    if (!was) item.classList.add('open');
  });
});

window.addEventListener('DOMContentLoaded', () => { renderProjects(); renderBlog('all'); });
