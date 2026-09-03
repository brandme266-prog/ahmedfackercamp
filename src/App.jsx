import React, { useState, useEffect } from 'react';
import './index.css';

const PRODUCTS = [
  {
    id: 'saw-13',
    name: 'ماكينة نشر الجرانيت حمولة 13 أسطوانة',
    category: 'saws',
    categoryName: 'مناشير الجرانيت والرخام',
    img: '/saw-13.jpg',
    desc: 'ماكينة جبارة مصممة خصيصاً للقص المتوازي للكتل الجرانيتية الصخرية الصلبة بدقة متناهية وسرعة إنجاز فائقة لمضاعفة إنتاج المصنع.',
    specs: [
      { label: 'عدد الأسطوانات', val: '13 أسطوانة متوازية' },
      { label: 'نوع الحركة', val: 'هيدروليك ميكانيكي دقيق' },
      { label: 'نظام التزييت', val: 'حمام زيت أوتوماتيكي معزول' },
      { label: 'الضمان', val: 'سنتان مع صيانة دورية معتمدة' }
    ]
  },
  {
    id: 'polisher-10',
    name: 'جلاية 10 رأس طولات لتلميع شرائح الرخام',
    category: 'polishers',
    categoryName: 'جلايات التلميع',
    img: '/polisher-10.jpg',
    desc: 'أحدث تكنولوجيا في تلميع وجلي شرائح الرخام والجرانيت للوصول لأعلى درجات اللمعان والنقاء السطحي الذي يضاهي التشطيب الإيطالي الفاخر.',
    specs: [
      { label: 'عدد الرؤوس', val: '10 رؤوس جلخ وتلميع أوتوماتيكية' },
      { label: 'عرض الطاولة', val: 'تتسع لأكبر أبعاد الشرائح' },
      { label: 'لوحة التحكم', val: 'شاشة تحكم إلكترونية ذكية' },
      { label: 'الكفاءة', val: 'توفير 30% من استهلاك حجر الجلي' }
    ]
  },
  {
    id: 'crane-flag',
    name: 'ونش الزرافة / ونش العلم (عربة 4 حركة)',
    category: 'cranes',
    categoryName: 'أوناش صناعية',
    img: '/crane-flag.jpg',
    desc: 'مرونة وحرية حركة كاملة داخل عنابر المصانع وساحات التحميل، مصمم بنظام عربة 4 حركة لنقل الكتل والألواح بسلاسة وأمان تام للعاملين.',
    specs: [
      { label: 'حمولة الرفع', val: 'من 1 طن إلى 2 طن' },
      { label: 'نظام الحركة', val: 'عربة 4 اتجاهات محكمة' },
      { label: 'الشاسيه', val: 'حديد صلب معالج للخدمة الشاقة' },
      { label: 'مستوى الأمان', val: 'مكابح كهرومغناطيسية مزدوجة' }
    ]
  },
  {
    id: 'crane-yard',
    name: 'ونش الساحة / ونش الأرضية حمولة 100 طن',
    category: 'cranes',
    categoryName: 'أوناش صناعية',
    img: '/crane-yard.jpg',
    desc: 'عملاق ساحات الرخام لنقل وتفريغ الكتل الصخرية الكبرى من التريلات وتخزينها، مزود بأحدث أنظمة التوازن ومقاومة الرياح والخدمة القاسية.',
    specs: [
      { label: 'أقصى حمولة', val: 'تصل إلى 100 طن' },
      { label: 'بحر الونش (Span)', val: 'متاح بتفصيل مخصص حتى 35 متر' },
      { label: 'المحركات', val: 'محركات صناعية أوروبية معزولة' },
      { label: 'نظام الكابينة', val: 'تحكم عن بعد + كابينة قيادة مكيفة' }
    ]
  },
  {
    id: 'cutter-1600',
    name: 'ماكينة فكري 1600 لقص الرخام والجرانيت',
    category: 'saws',
    categoryName: 'مناشير ومعدات قص',
    img: '/cutter-1600.jpg',
    desc: 'الماكينة الأكثر شهرة وطلباً في شق التعبان ومصر، دقة قص استثنائية مع عمر افتراضي طويل جداً بفضل الشاسيه المعالج ضد الاهتزاز.',
    specs: [
      { label: 'قطر القرص', val: 'حتى 1600 مم' },
      { label: 'طول وعرض القطع', val: 'أبعاد مصنعية متقدمة' },
      { label: 'الهيكل', val: 'جسم صلب مسبوك مع مقاومة التآكل' },
      { label: 'الدعم', val: 'قطع غيار متوفرة فوراً بالمصانع' }
    ]
  },
  {
    id: 'hero-banner',
    name: 'منشار حمام الزيت الحصري (ابتكار الشركة الإسلامية)',
    category: 'saws',
    categoryName: 'ابتكارات حصرية',
    img: '/hero-banner.jpg',
    desc: 'الابتكار الذي طوره فريق الخبراء بالشركة الإسلامية لمنع تآكل التروس وإطالة عمر المنشار بنسبة 300% وتخفيض فواتير الصيانة والأعطال المفاجئة.',
    specs: [
      { label: 'نظام التشحيم', val: 'حمام زيت دائم معزول بالكامل' },
      { label: 'مستوى الضجيج', val: 'أقل ضوضاء بنسبة 40%' },
      { label: 'الاستهلاك', val: 'توفير فائق في الطاقة والمياه' },
      { label: 'براءة التصميم', val: 'مسجل ومعتمد باسم الشركة الإسلامية' }
    ]
  }
];

const ARTICLES = [
  {
    id: 'achievements',
    title: 'مسيرة وإنجازات الشركة الإسلامية في النهوض بصناعة الرخام والجرانيت وتحدي الاستيراد الأوروبي',
    category: 'history',
    categoryName: 'إنجازات وريادة',
    date: '15 فبراير 2026',
    readTime: '6 دقائق قراءة متعمقة',
    author: 'الشركة الإسلامية',
    authorRole: 'مؤسس الشركة الإسلامية وخبير هندسة الماكينات الثقيلة',
    excerpt: 'دراسة هندسية شاملة توثق رحلة تطوير مناشير الرخام الوطنية، وابتكار نظام حمام الزيت الحصري الذي أنقذ مصانع شق التعبان من أعباء الاستيراد.',
    content: `
      <h2>المقدمة: واقع صناعة الرخام في مصر والشرق الأوسط</h2>
      <p>لعقود طويلة، كانت مصانع الحجر الطبيعي والرخام في مصر، وتحديداً في منطقة <strong>شق التعبان</strong> ومحافظات المنيا وأسوان والسويس، رهينة لماكينات مستوردة من إيطاليا أو الصين. هذه المعدات، على الرغم من دقتها الأولية، لم تكن مصممة لتحمل ظروف العمل القاسية، درجات الحرارة المرتفعة، وطبيعة كتل الجرانيت المصرية شديدة الصلابة مثل (جرانيت حلايب، أسواني أحمر، وفرسان). وكانت النتيجة الحتمية: أعطال متكررة، توقف خطوط الإنتاج لشهور في انتظار قطع غيار مستوردة بالعملة الصعبة، واستنزاف أرباح المصنعين.</p>
      
      <h2>الابتكار الهندسي المحوري: نظام "منشار حمام الزيت"</h2>
      <p>من قلب ورش التشغيل الميدانية، حلّل <strong>الشركة الإسلامية</strong> السبب الجذري لأكثر من 80% من أعطال مناشير الرخام التقليدية. تبيّن أن مياه التبريد المحملة ببودرة الكوارتز وجزيئات الصخور شديدة الكشط تتسرب عبر جوانات العزل وتصل إلى تروس الحركة الرئيسية، مما يؤدي إلى تآكل الأسنان الميكانيكية وتلف البلي خلال أقل من 6 أشهر.</p>
      
      <div class="article-callout">
        <strong>💡 براءة الفكرة الهندسية:</strong>
        قام الشركة الإسلامية بتصميم غرفة تروس معزولة هيدروليكياً بنظام ضغط موجب وغاطسة بالكامل في "حمام زيت" ميكانيكي دائم. هذا التصميم يمنع فيزيائياً تسرب قطرة ماء واحدة أو ذرة غبار، ويضمن تبريداً وتشحيماً متواصلاً لتروس الصلب المسبوك.
      </div>

      <h2>الأثر الاقتصادي على مصانع الرخام: وفورات حقيقية بالأرقام</h2>
      <p>تطبيق هذا الابتكار أحدث ثورة حقيقية في حسابات الجدوى الاقتصادية للمصانع، ومن أبرز نتائجه الملموسة:</p>
      <ul>
        <li><strong>مضاعفة العمر الافتراضي:</strong> ارتفع العمر التشغيلي للماكينة من 3-5 سنوات إلى أكثر من 15 سنة دون الحاجة لعمرات ميكانيكية شاملة.</li>
        <li><strong>خفض تكلفة الصيانة بنسبة 70%:</strong> اختفاء الحاجة لشراء تروس مستوردة أو تغيير متكرر للرولمان بلي.</li>
        <li><strong>دقة متناهية في التقطيع:</strong> ثبات الشاسيه وغياب الاهتزاز منع تشرشر حواف ألواح الرخام، مما وفّر آلاف الأمتار المربعة من الهدر الخام.</li>
      </ul>

      <h2>تجهيز كبرى المشروعات القومية والتصدير العربي</h2>
      <p>لم تتوقف إنجازات الشركة الإسلامية عند حدود السوق المحلي؛ بل تحولت مصانع <strong>الشركة الإسلامية</strong> في عرب أبو ساعد بحلوان والمنصورة إلى مركز صناعي إقليمي. تم توريد خطوط إنتاج ومناشير 13 أسطوانة وأوناش ساحات عملاقة حمولة 100 طن لتجهيز محاجر ومصانع في المملكة العربية السعودية، ليبيا، السودان، والأردن، مما جعل شعار <em>"صُنع في مصر بإشراف الشركة الإسلامية"</em> عنواناً للجودة والمتانة التي يثق بها كبار رجال الأعمال.</p>

      <h2>الخلاصة ورسالة للمصنعين</h2>
      <p>إن بناء مصنع رخام ناجح لا يتطلب شراء أغلى الماكينات الأجنبية، بل اختيار المعدة المصممة خصيصاً لتحمل طبيعة عملك وتوفر لك دعماً فنياً وقطع غيار محلية على مدار الساعة. هذا هو العهد الذي قطعته الشركة الإسلامية لكل شريك نجاح في مصر والوطن العربي.</p>
    `
  },
  {
    id: 'biography',
    title: 'تاريخ وتطور الشركة الإسلامية: رحلة 20 عاماً في قلب الصناعة الثقيلة وتجهيز كبرى المصانع',
    category: 'bio',
    categoryName: 'السيرة الذاتية',
    date: '28 يناير 2026',
    readTime: '5 دقائق قراءة',
    author: 'هيئة التحرير الصناعية',
    authorRole: 'توثيق رواد الصناعة المصرية',
    excerpt: 'محطات تاريخية بارزة في مسيرة الشركة الإسلامية، من الورش المتخصصة وشغف التطوير إلى تأسيس أكبر صرح لتصنيع معدات الرخام والأوناش في الشرق الأوسط.',
    content: `
      <h2>النشأة والشغف بعالم الميكانيكا والمعادن</h2>
      <p>بدأت رحلة <strong>الشركة الإسلامية</strong> منذ أكثر من عقدين من الزمان، مدفوعة بشغف عميق بديناميكا الحركة الثقيلة وهندسة المعادن المسبوكة. لم تكن بدايته عبر المكاتب النظرية، بل غاص في تفاصيل الورش الصناعية وخبر خفايا الماكينات بيديه، باحثاً دائماً عن مواطن الضعف في التصاميم التقليدية لتحويلها إلى نقاط قوة هندسية.</p>

      <h2>تأسيس الشركة الإسلامية: من ورشة هندسية طموحة إلى صرح صناعي رائد</h2>
      <p>في مطلع الألفينات، أسس الشركة الإسلامية نواة شركة <strong>"الشركة الإسلامية" (Islamic Company)</strong>. ووضع نصب عينيه هدفاً واحداً: أن تكون الماكينة المصرية هي الخيار الأول والأكثر موثوقية لأصحاب مصانع الرخام. وبفضل العمل الدؤوب، توسعت الشركة لتضم صرحين تصنيعيين:</p>
      <ul>
        <li><strong>مصنع عرب أبو ساعد (حلوان):</strong> مخصص لإنتاج الشاسيهات الصلبة الثقيلة، سباكة الهياكل، ومناشير الجرانيت العملاقة.</li>
        <li><strong>مصنع المنصورة:</strong> مخصص لتجميع الأوناش العلوية والساحات وأنظمة التحكم الهيدروليكية والإلكترونية الدقيقة.</li>
      </ul>

      <h2>فلسفة القيادة الهندسية: الأمان والمتانة</h2>
      <p>يتميز الشركة الإسلامية بفلسفة عمل صارمة تقوم على اختبار كل ماكينة تحت أحمال تفوق طاقتها الاسمية بنسبة 30% قبل تسليمها للعميل. كما يحرص شخصياً على متابعة ملاحظات أصحاب المصانع وتطوير التحديثات الميكانيكية سنوياً لتلائم متطلبات السوق المتجددة.</p>
    `
  },
  {
    id: 'buying-guide',
    title: 'دليل المستثمر لمصانع الرخام والجرانيت 2026: دراسة جدوى، الأسعار، واختيار الماكينات',
    category: 'guide',
    categoryName: 'دليل وتوجيهات',
    date: '01 مارس 2026',
    readTime: '7 دقائق قراءة',
    author: 'الشركة الإسلامية',
    authorRole: 'استشاري تجهيز وتطوير مصانع الرخام',
    excerpt: 'دليل إرشادي تفصيلي خطوة بخطوة لكل من يخطط لتأسيس أو تطوير مصنع رخام، مع حسابات دقيقة للتكلفة والإنتاجية والعائد الاستثماري.',
    content: `
      <h2>1. دراسة مساحة المصنع وخطوط سير الإنتاج</h2>
      <p>أول خطأ يقع فيه بعض المستثمرين هو شراء ماكينات لا تتناسب مع المساحة الإجمالية للمصنع أو بدون تخطيط مسار حركة الكتل والألواح. يجب تقسيم المصنع إلى ثلاث مناطق رئيسية:</p>
      <ol>
        <li><strong>ساحة استقبال الكتل الخام:</strong> وتحتاج إلى <em>ونش ساحة حمولة 100 طن</em> لتفريغ التريلات وتنظيم التشوين بأمان.</li>
        <li><strong>عنبر النشر والقص:</strong> يضم مناشير الجرانيت 13 أسطوانة وماكينات القص الدائري 1600.</li>
        <li><strong>خط المعالجة والتشطيب:</strong> يضم جلايات الشرائح متعددة الرؤوس ومنطقة التعبئة والتحميل.</li>
      </ol>

      <h2>2. كيف تختار منشار الجرانيت المناسب؟</h2>
      <p>تعتمد إنتاجية المصنع بنسبة 60% على كفاءة المنشار. يوصي الشركة الإسلامية بالتركيز على ثلاثة معايير حاسمة:</p>
      <ul>
        <li><strong>وزن الشاسيه:</strong> الشاسيه الخفيف يهتز أثناء القص مما يكسر الألواح ويقصر عمر الديسكات. ماكينات الشركة الإسلامية تصنع بصلب مسبوك معالج يزن أضعاف الماكينات التجارية.</li>
        <li><strong>نظام التزييت:</strong> تجنب الماكينات المفتوحة التي تتلف تروسها سريعاً واطلب دائماً نظام <strong>حمام الزيت</strong>.</li>
        <li><strong>توفر قطع الغيار:</strong> لا تشترِ ماكينة مستوردة قد يتعطل إنتاجها شهوراً بسبب قطعة غيار بسيطة.</li>
      </ul>

      <h2>3. الأوناش الصناعية: حماية أرواح العمال ورأس المال</h2>
      <p>سقوط لوح رخام واحد قد يسبب خسارة مادية فادحة أو كارثة بشرية. لذلك يجب أن تكون الأوناش مزودة بمكابح أمان كهرومغناطيسية مزدوجة وعربات 4 حركة تتيح المناورة الدقيقة دون أي اهتزاز للكتل المعلقة.</p>
    `
  },
  {
    id: 'maintenance-tips',
    title: 'أسرار الصيانة الوقائية لمعدات وأوناش الرخام: 5 قواعد ذهبية لتفادي الأعطال المفاجئة',
    category: 'guide',
    categoryName: 'نصائح صيانة',
    date: '10 يناير 2026',
    readTime: '4 دقائق قراءة',
    author: 'قسم الصيانة والدعم الفني',
    authorRole: 'الشركة الإسلامية - شق التعبان',
    excerpt: 'خطوات عملية وتوصيات دورية يشاركها فريق الصيانة للحفاظ على أقصى عزم للمحركات ومنع تآكل الشفرات وقواعد التثبيت.',
    content: `
      <h2>القاعدة الأولى: نقاء مياه التبريد وتدويرها</h2>
      <p>مياه التبريد المستخدمة في قص الرخام تصبح مشبعة ببودرة الكالسيوم وحبيبات السيليكا. إن إعادة ضخ هذه المياه بدون أحواض ترسيب كافية يؤدي لانسداد فتحات التبريد وارتفاع حرارة أسطوانات القص، مما يتسبب في انحنائها وتلفها المبكر.</p>

      <h2>القاعدة الثانية: الفحص الأسبوعي لزوجة زيت الهيدروليك</h2>
      <p>تعمل ماكينات النشر لساعات طويلة متواصلة، مما يرفع درجة حرارة الزيت. احرص على فحص لزوجة ولون الزيت دورياً، واستخدم الزيوت الهيدروليكية ذات المقاومة العالية للحرارة المعتمدة من الشركة الإسلامية.</p>

      <h2>القاعدة الثالثة: تشحيم محاور الأوناش والعربات</h2>
      <p>تتعرض أوناش الزرافة وأوناش الساحات لأحمال ديناميكية ثقيلة وغبار مستمر. يجب تشحيم كراسي المحاور وبكرات الوايرات أسبوعياً بشحوم مخصصة تتحمل الضغوط العالية لضمان حركة سلسة وبدون احتكاك.</p>
    `
  }
];

const FAQS = [
  {
    q: 'ما الذي يميز ماكينات الشركة الإسلامية عن الماكينات المستوردة؟',
    a: 'ماكيناتنا مصممة خصيصاً لتتحمل الخدمة الشاقة وظروف العمل القاسية في مصانع الرخام بمصر والشرق الأوسط، وتتميز بنظام حمام الزيت الحصري لمنع الأعطال، مع توفر فوري لكافة قطع الغيار محلياً بأسعار تنافسية وبضمان معتمد من الشركة الإسلامية.'
  },
  {
    q: 'هل توفرون ماكينات بمقاسات وحمولات مخصصة حسب رغبة المصنع؟',
    a: 'نعم بالتأكيد. نقوم بتصميم وتصنيع ماكينات القص، الجلايات، والأوناش العلوية والساحات حتى 100 طن حسب المساحات والأبعاد الخاصة بمصنعك ووفقاً للقدرة الإنتاجية المستهدفة.'
  },
  {
    q: 'كيف يمكنني معاينة الماكينات والتعاقد عليها؟',
    a: 'نرحب بكم دائماً لزيارة مصانعنا في عرب أبو ساعد بحلوان والمنصورة لمعاينة الماكينات أثناء التشغيل الفعلي، كما يمكنكم زيارة مقر الإدارة في شق التعبان (أبراج الأمل برج 99) أو التواصل مباشرة عبر الواتساب على 01011218141.'
  },
  {
    q: 'ما هي مدة الضمان وخدمات ما بعد البيع؟',
    a: 'نقدم ضماناً شاملاً يصل إلى سنتين على الماكينات، مدعوماً بفريق صيانة ودعم فني متخصص جاهز للانتقال لموقع مصنعك للتركيب والتدريب وحل أي مشكلة طارئة على مدار الساعة.'
  }
];

export default function App() {
  // Navigation & View States
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'article'
  const [activeArticle, setActiveArticle] = useState(ARTICLES[0]);
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeArticleFilter, setActiveArticleFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    factory: '',
    machine: 'ماكينة نشر الجرانيت 13 أسطوانة',
    notes: ''
  });

  // Handle Browser Back Button integration
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (hash.startsWith('#article-')) {
        const artId = hash.replace('#article-', '');
        const found = ARTICLES.find(a => a.id === artId);
        if (found) {
          setActiveArticle(found);
          setCurrentView('article');
        }
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openArticlePage = (article) => {
    setActiveArticle(article);
    setCurrentView('article');
    window.location.hash = `article-${article.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  const filteredArticles = activeArticleFilter === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeArticleFilter);

  const getWhatsAppUrl = (productOrTopic) => {
    const text = encodeURIComponent(`مرحباً الشركة الإسلامية (الشركة الإسلامية)، أريد الاستفسار عن تفاصيل وسعر: ${productOrTopic || 'ماكينات الرخام والأوناش'}`);
    return `https://wa.me/201011218141?text=${text}`;
  };

  const handleWhatsAppQuote = (productOrTopic) => {
    window.open(getWhatsAppUrl(productOrTopic), '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `طلب عرض سعر جديد:\n- الاسم: ${quoteForm.name}\n- الهاتف: ${quoteForm.phone}\n- المصنع / المحافظة: ${quoteForm.factory}\n- الماكينة المطلوبة: ${quoteForm.machine}\n- ملاحظات: ${quoteForm.notes}`;
    window.open(`https://wa.me/201011218141?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="app">
      {/* Top Info Bar */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-item">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>شق التعبان، أبراج الأمل، برج 99 - القاهرة | مصانعنا: عرب أبو ساعد & المنصورة</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="topbar-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/></svg>
              <span>المبيعات: <strong>01011218141</strong></span>
            </div>
            <div className="topbar-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 Wand 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              <span>الدعم الفني والصيانة: 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={returnToHome}>
            <div className="brand-logo">
              <img src="/logo.png" alt="الشركة الإسلامية - الشركة الإسلامية" />
              <div className="brand-title-wrap">
                <span className="brand-title">الشركة الإسلامية</span>
                <span className="brand-sub">صناعة ماكينات الرخام والجرانيت والأوناش</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li>
              <button 
                onClick={returnToHome} 
                className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                الرئيسية
              </button>
            </li>
            <li><a href="#features" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">مميزاتنا</a></li>
            <li><a href="#products" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">الماكينات</a></li>
            <li><a href="#about" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">الشركة الإسلامية</a></li>
            <li><a href="#articles" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">المقالات والأخبار</a></li>
            <li><a href="#faq" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">الأسئلة الشائعة</a></li>
            <li><a href="#contact" onClick={() => { if(currentView !== 'home') returnToHome(); }} className="nav-link">فروعنا وتواصل</a></li>
          </ul>

          <div className="nav-actions">
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="فتح القائمة"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <aside className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <div className="brand-logo" onClick={() => { returnToHome(); setMobileMenuOpen(false); }}>
              <img src="/logo.png" alt="لوجو الشركة الإسلامية" style={{ height: '40px' }} />
              <div>
                <div style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.1rem' }}>الشركة الإسلامية</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-dark)' }}>الشركة الإسلامية</div>
              </div>
            </div>
            <button className="drawer-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="إغلاق">✕</button>
          </div>

          <nav className="drawer-nav">
            <button className="drawer-link" onClick={() => { returnToHome(); setMobileMenuOpen(false); }} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'right', cursor: 'pointer', fontFamily: 'inherit' }}>
              <span className="drawer-icon">🏠</span>
              <span>الصفحة الرئيسية</span>
            </button>
            <a href="#features" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>
              <span className="drawer-icon">⚙️</span>
              <span>لماذا تختارنا ومميزاتنا</span>
            </a>
            <a href="#products" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>
              <span className="drawer-icon">🏗️</span>
              <span>أسطول الماكينات والأوناش</span>
            </a>
            <a href="#about" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>
              <span className="drawer-icon">👨‍💼</span>
              <span>عن الشركة الإسلامية</span>
            </a>
            <a href="#articles" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>
              <span className="drawer-icon">📰</span>
              <span>المقالات ودليل المصانع</span>
            </a>
            <a href="#faq" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>
              <span className="drawer-icon">❓</span>
              <span>الأسئلة الشائعة</span>
            </a>
            <a href="#contact" className="drawer-link" onClick={() => { if(currentView !== 'home') returnToHome(); setMobileMenuOpen(false); }}>
              <span className="drawer-icon">📍</span>
              <span>الفروع والتواصل</span>
            </a>
          </nav>

          <div className="drawer-footer">
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              📞 تواصل فوري مع الإدارة:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:01011218141" className="btn btn-outline" style={{ width: '100%', padding: '10px' }}>
                📞 01011218141
              </a>
              <button onClick={() => { setMobileMenuOpen(false); handleWhatsAppQuote(); }} className="btn btn-whatsapp" style={{ width: '100%', padding: '10px' }}>
                💬 واتساب الإدارة
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* =========================================================================
          VIEW 1: DEDICATED FULL ARTICLE PAGE (صفحة مقال مخصصة كاملة - مش بوبب)
         ========================================================================= */}
      {currentView === 'article' && activeArticle && (
        <main className="dedicated-article-page">
          {/* Article Page Top Breadcrumb Bar */}
          <div className="article-page-breadcrumb-bar">
            <div className="container breadcrumb-container">
              <button onClick={returnToHome} className="back-home-btn">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                <span>العودة إلى الصفحة الرئيسية</span>
              </button>
              <div className="breadcrumb-path">
                <span onClick={returnToHome} style={{ cursor: 'pointer', color: 'var(--text-muted)' }}>الرئيسية</span>
                <span className="sep">/</span>
                <span onClick={returnToHome} style={{ cursor: 'pointer', color: 'var(--text-muted)' }}>المقالات الصناعية</span>
                <span className="sep">/</span>
                <span className="current">{activeArticle.categoryName}</span>
              </div>
            </div>
          </div>

          <div className="container article-layout-container">
            {/* Main Article Content Column */}
            <article className="main-article-content">
              <div className="article-hero-header">
                <span className="section-badge">{activeArticle.categoryName}</span>
                <h1 className="article-main-title">{activeArticle.title}</h1>

                <div className="article-author-card">
                  <img src="/hero-banner.jpg" alt={activeArticle.author} className="author-avatar" />
                  <div className="author-details">
                    <div className="author-name">{activeArticle.author}</div>
                    <div className="author-role">{activeArticle.authorRole}</div>
                  </div>
                  <div className="article-meta-tags">
                    <span>📅 {activeArticle.date}</span>
                    <span>⏱️ {activeArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Featured Image in Article */}
              <div className="article-featured-image-wrap">
                <img src="/hero-banner.jpg" alt={activeArticle.title} />
                <div className="image-caption">تصنيع وابتكار ماكينات الرخام والجرانيت الثقيلة بمصانع الشركة الإسلامية</div>
              </div>

              {/* Rich Body Content */}
              <div 
                className="article-rich-text"
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              {/* Consultation / Quote Action Box */}
              <div className="article-cta-box">
                <div className="cta-content">
                  <h3>هل تبحث عن الماكينة الأنسب لمصنعك بأعلى عائد استثماري؟</h3>
                  <p>تواصل مباشرة مع الشركة الإسلامية للاستشارات الفنية وتجهيز خطوط الإنتاج والتعرف على الأسعار الخاصة.</p>
                </div>
                <div className="cta-actions">
                  <button onClick={() => handleWhatsAppQuote(activeArticle.title)} className="btn btn-whatsapp">
                    تواصل واتساب مع الشركة الإسلامية
                  </button>
                  <a href="tel:01011218141" className="btn btn-outline">
                    اتصال هاتفي: 01011218141
                  </a>
                </div>
              </div>

              {/* Related Articles Navigation */}
              <div className="related-articles-section">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text-main)' }}>
                  مقالات ودراسات أخرى قد تهمك:
                </h3>
                <div className="articles-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                  {ARTICLES.filter(a => a.id !== activeArticle.id).slice(0, 2).map(ra => (
                    <div key={ra.id} className="article-card">
                      <div className="article-header">
                        <span className="article-tag">{ra.categoryName}</span>
                        <span className="article-read-time">{ra.readTime}</span>
                      </div>
                      <h4 className="article-title" style={{ fontSize: '1.15rem' }}>{ra.title}</h4>
                      <p className="article-excerpt" style={{ fontSize: '0.9rem' }}>{ra.excerpt}</p>
                      <div className="article-footer">
                        <span className="article-date">📅 {ra.date}</span>
                        <button onClick={() => openArticlePage(ra)} className="article-read-btn">
                          اقرأ المقال ←
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar Column */}
            <aside className="article-sidebar">
              {/* Founder Profile Box */}
              <div className="sidebar-widget">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <img 
                    src="/hero-banner.jpg" 
                    alt="الشركة الإسلامية" 
                    style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', border: '3px solid var(--gold-primary)' }}
                  />
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>الشركة الإسلامية</h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gold-dark)' }}>رائد صناعة الماكينات في الشرق الأوسط</div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7', textAlign: 'center' }}>
                  أكثر من 20 عاماً في تطوير صناعات الرخام، وتوريد أعتى المعدات لمصر والوطن العربي بأعلى معايير الأمان.
                </p>
              </div>

              {/* Featured Machine Widget */}
              <div className="sidebar-widget featured-product-widget">
                <span className="section-badge" style={{ marginBottom: '10px' }}>ماكينة الشهر ⭐</span>
                <div style={{ borderRadius: '10px', overflow: 'hidden', height: '160px', marginBottom: '14px' }}>
                  <img src="/saw-13.jpg" alt="ماكينة نشر 13 أسطوانة" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>
                  ماكينة نشر الجرانيت 13 أسطوانة
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  أعلى إنتاجية يومية لمصنعك مع نظام حمام الزيت الحصري وتوفير 30% من استهلاك الطاقة.
                </p>
                <button 
                  onClick={() => handleWhatsAppQuote('ماكينة نشر الجرانيت 13 أسطوانة')}
                  className="btn btn-gold" 
                  style={{ width: '100%', padding: '10px', fontSize: '0.9rem' }}
                >
                  طلب تفاصيل وسعر
                </button>
              </div>

              {/* Quick Branch Directory */}
              <div className="sidebar-widget">
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '14px' }}>
                  مواقع المصانع والإدارة
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <div>📍 <strong>شق التعبان:</strong> أبراج الأمل، برج 99</div>
                  <div>🏭 <strong>المصنع الأول:</strong> عرب أبو ساعد - حلوان</div>
                  <div>🏭 <strong>المصنع الثاني:</strong> محافظة المنصورة</div>
                  <div>📞 <strong>المبيعات:</strong> 01011218141</div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      )}

      {/* =========================================================================
          VIEW 2: HOME PAGE (الصفحة الرئيسية الكاملة)
         ========================================================================= */}
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <section id="hero" className="hero-section">
            <div className="hero-bg-media">
              <img src="/hero-banner.jpg" alt="مصنع ماكينات الرخام الشركة الإسلامية" className="hero-bg-img" />
            </div>
            <div className="hero-gradient-overlay"></div>

            <div className="container hero-content">
              <div className="hero-text">
                <div className="section-badge">
                  <span>🏆</span>
                  <span>أكثر من 20 عاماً من الريادة والثقة الصناعية</span>
                </div>
                
                <h1 className="hero-headline">
                  <span className="gradient-text">الشركة الإسلامية</span><br />
                  أسطورة صناعة ماكينات الرخام والأوناش الثقيلة
                </h1>

                <p className="hero-description">
                  نعيد تعريف معايير القوة والصلابة في مصر والشرق الأوسط. ماكينات نشر وجلايات وأوناش عملاقة مصنعة بصلب فائق الجودة، مزودة بنظام <strong>حمام الزيت الحصري</strong> لتدوم طويلاً وتضاهي التكنولوجيا الأوروبية بأعلى عائد استثماري لمصنعك.
                </p>

                <div className="trust-metrics">
                  <div className="metric-item">
                    <div className="metric-number">+20</div>
                    <div className="metric-label">عاماً من الخبرة الهندسية</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">+500</div>
                    <div className="metric-label">ماكينة عاملة بكبرى المصانع</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">100 طن</div>
                    <div className="metric-label">قدرة رفع الأوناش الثقيلة</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-number">100%</div>
                    <div className="metric-label">صلب معالج وضمان معتمد</div>
                  </div>
                </div>

                <div className="hero-buttons" style={{ marginTop: '32px', marginBottom: '0' }}>
                  <a href="#products" className="btn btn-gold">
                    استكشف أسطول الماكينات
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
                  </a>
                  <a 
                    href={getWhatsAppUrl('استفسار من الصفحة الرئيسية')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <span>تواصل واتساب مباشرة</span>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                  </a>
                  <a href="#articles" className="btn btn-outline">
                    المقالات ودليل المصانع
                  </a>
                </div>
              </div>

              <div className="hero-card">
                <div className="hero-card-img-wrap">
                  <img src="/saw-13.jpg" alt="ماكينة نشر الجرانيت 13 أسطوانة" />
                  <div className="hero-card-badge">الماكينة الأكثر طلباً ⭐</div>
                </div>
                <h3 className="hero-card-title">ماكينة نشر الجرانيت 13 أسطوانة</h3>
                <p className="hero-card-desc">
                  محرك جبار، قص ليزري متعدد، وتوفير استهلاك الشفرات بنظام تبريد وتزييت مغلق يضمن أقصى إنتاجية يومية لمصنعك.
                </p>
                <div className="hero-card-footer">
                  <span style={{ color: 'var(--gold-dark)', fontWeight: '700' }}>مواصفات قياسية أوروبية</span>
                  <button 
                    onClick={() => handleWhatsAppQuote('ماكينة نشر الجرانيت 13 أسطوانة')}
                    className="btn btn-gold" 
                    style={{ padding: '8px 18px', fontSize: '0.88rem' }}
                  >
                    طلب عرض سعر
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Value Pillars / Features */}
          <section id="features" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
              <div className="section-header">
                <div className="section-badge">لماذا تختار الشركة الإسلامية؟</div>
                <h2 className="section-title">ابتكارات هندسية تصنع الفارق لمصنعك</h2>
                <p className="section-subtitle">
                  نصمم ونصنع معدات تتحمل أقصى ظروف التشغيل المستمر مع خفض تكاليف الصيانة وقطع الغيار إلى أدنى حد ممكن.
                </p>
              </div>

              <div className="features-grid">
                <div className="feature-box">
                  <div className="feature-icon-wrap">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                  </div>
                  <h3 className="feature-title">ابتكار حمام الزيت الحصري</h3>
                  <p className="feature-desc">
                    نظام عزل وتزييت دائم يمنع وصول مياه الرخام والأتربة للتروس الميكانيكية، مما يضاعف عمر الماكينة 3 أضعاف ويلغي الأعطال المفاجئة.
                  </p>
                </div>

                <div className="feature-box">
                  <div className="feature-icon-wrap">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <h3 className="feature-title">شاسيهات صلب ثقيل فائق المتانة</h3>
                  <p className="feature-desc">
                    هياكل حديدية معالجة حرارياً ضد الاهتزاز وعوامل التآكل، تضمن استقرار الماكينة حتى مع أثقل كتل الجرانيت وأقصى سرعات دوران.
                  </p>
                </div>

                <div className="feature-box">
                  <div className="feature-icon-wrap">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h3 className="feature-title">دقة قطع متناهية وتشطيب فاخر</h3>
                  <p className="feature-desc">
                    أنظمة تحكم هيدروليكية وحركية مضبوطة بالمليمتر لمنع أي هدر في حجر الرخام والجرانيت، وإخراج ألواح ناعمة ومستوية بالكامل.
                  </p>
                </div>

                <div className="feature-box">
                  <div className="feature-icon-wrap">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  </div>
                  <h3 className="feature-title">خدمة ما بعد البيع وقطع غيار فورية</h3>
                  <p className="feature-desc">
                    فريق من أمهر المهندسين والفنيين جاهز للتركيب والصيانة وتدريب عمال مصنعك، مع توافر مستمر لجميع قطع الغيار الأصلية بمصانعنا.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products Catalog */}
          <section id="products" className="section">
            <div className="container">
              <div className="section-header">
                <div className="section-badge">كتالوج المنتجات الرسمي</div>
                <h2 className="section-title">أسطول الماكينات والأوناش الصناعية</h2>
                <p className="section-subtitle">
                  اختر الماكينة التي تناسب حجم إنتاج مصنعك، وتعرف على المواصفات القياسية لكل منتج.
                </p>
              </div>

              <div className="filter-tabs">
                <button 
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  جميع المنتجات ({PRODUCTS.length})
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'saws' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('saws')}
                >
                  مناشير الرخام والجرانيت
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'polishers' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('polishers')}
                >
                  جلايات التلميع
                </button>
                <button 
                  className={`filter-btn ${activeFilter === 'cranes' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('cranes')}
                >
                  الأوناش الثقيلة والساحات
                </button>
              </div>

              <div className="products-grid">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="product-item">
                    <div className="product-thumb-wrap">
                      <img src={p.img} alt={p.name} className="product-thumb" />
                      <span className="product-category-tag">{p.categoryName}</span>
                    </div>
                    
                    <div className="product-details">
                      <h3 className="product-name">{p.name}</h3>
                      <p className="product-desc">{p.desc}</p>
                      
                      <div className="product-specs">
                        {p.specs.slice(0, 3).map((s, idx) => (
                          <div key={idx} className="spec-item">
                            <span className="spec-label">{s.label}:</span>
                            <span className="spec-val">{s.val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="product-actions">
                        <button 
                          onClick={() => setSelectedProduct(p)}
                          className="btn btn-outline"
                        >
                          المواصفات كاملة
                        </button>
                        <button 
                          onClick={() => handleWhatsAppQuote(p.name)}
                          className="btn btn-gold"
                        >
                          طلب تسعير فوري
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Company Section */}
          <section id="about" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
              <div className="about-box">
                <div className="about-grid">
                  <div className="founder-img-card">
                    <img src="/hero-banner.jpg" alt="الشركة الإسلامية لماكينات الرخام والجرانيت" />
                    <div className="founder-badge">
                      <div className="founder-name">الشركة الإسلامية</div>
                      <div className="founder-title">صرح صناعي متكامل لتجهيز مصانع الرخام والجرانيت والأوناش</div>
                    </div>
                  </div>

                  <div className="about-narrative">
                    <div className="section-badge">الريادة الصناعية والهندسية</div>
                    <h2>شراكة نجاح تثق بها كبرى مصانع الحجر والرخام</h2>
                    
                    <p>
                      تُعد <strong>الشركة الإسلامية</strong> قلعة صناعية شامخة ورائدة في تصنيع ماكينات الرخام والجرانيت والأوناش الثقيلة. على مدار أكثر من عقدين من الزمان، نجحنا في بناء منظومة هندسية مصرية فائقة الجودة تضاهي التكنولوجيا الأوروبية، وتزود كبرى مصانع شق التعبان ومختلف المحافظات والدول بماكينات صلبة ذات عمر افتراضي استثنائي.
                    </p>

                    <div className="quote-block">
                      "نحن لا نبيع مجرد معدات، بل نبني شراكة نجاح مستمرة؛ نضمن لك أعلى إنتاجية وأقل تكلفة صيانة مع توفير فوري لكافة قطع الغيار محلياً لضمان استمرارية تشغيل مصنعك بأعلى طاقة."
                    </div>

                    <div className="about-features-list">
                      <div className="about-feature-item">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>مصانع متكاملة في عرب أبو ساعد والمنصورة</span>
                      </div>
                      <div className="about-feature-item">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>فريق صيانة متنقل متاح على مدار الساعة</span>
                      </div>
                      <div className="about-feature-item">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>إمكانية تصنيع أبعاد ومقاسات مخصصة لمصنعك</span>
                      </div>
                      <div className="about-feature-item">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>تسهيلات في الدفع وتوريد مباشر وسريع</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Articles & Industry Blog Section */}
          <section id="articles" className="section" style={{ background: 'var(--bg-base)' }}>
            <div className="container">
              <div className="section-header">
                <div className="section-badge">المقالات والمعرفة الصناعية (SEO)</div>
                <h2 className="section-title">دليل صناعة وتطوير ماكينات الرخام والجرانيت</h2>
                <p className="section-subtitle">
                  مقالات حصرية ودراسات فنية يقدمها الشركة الإسلامية لمساعدة أصحاب المصانع على مضاعفة الإنتاج وخفض تكاليف التشغيل.
                </p>
              </div>

              <div className="filter-tabs">
                <button 
                  className={`filter-btn ${activeArticleFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveArticleFilter('all')}
                >
                  جميع المقالات ({ARTICLES.length})
                </button>
                <button 
                  className={`filter-btn ${activeArticleFilter === 'history' ? 'active' : ''}`}
                  onClick={() => setActiveArticleFilter('history')}
                >
                  إنجازات وريادة
                </button>
                <button 
                  className={`filter-btn ${activeArticleFilter === 'bio' ? 'active' : ''}`}
                  onClick={() => setActiveArticleFilter('bio')}
                >
                  السيرة الذاتية
                </button>
                <button 
                  className={`filter-btn ${activeArticleFilter === 'guide' ? 'active' : ''}`}
                  onClick={() => setActiveArticleFilter('guide')}
                >
                  دليل الشراء والصيانة
                </button>
              </div>

              <div className="articles-grid">
                {filteredArticles.map((article) => (
                  <article key={article.id} className="article-card">
                    <div className="article-header">
                      <span className="article-tag">{article.categoryName}</span>
                      <span className="article-read-time">{article.readTime}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-footer">
                      <span className="article-date">📅 {article.date}</span>
                      <button 
                        onClick={() => openArticlePage(article)} 
                        className="article-read-btn"
                      >
                        اقرأ المقال في صفحة كاملة ←
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
              <div className="section-header">
                <div className="section-badge">إجابات الخبراء</div>
                <h2 className="section-title">الأسئلة الشائعة حول الماكينات والأوناش</h2>
                <p className="section-subtitle">
                  إليك أهم الاستفسارات التي تهم أصحاب المصانع والمستثمرين في قطاع الرخام والجرانيت.
                </p>
              </div>

              <div className="faq-container">
                {FAQS.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                  >
                    <button 
                      className="faq-question"
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      aria-expanded={openFaqIndex === index}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
                    </button>
                    {openFaqIndex === index && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact & Factory Locations */}
          <section id="contact" className="section">
            <div className="container">
              <div className="section-header">
                <div className="section-badge">تواصل معنا والزيارات</div>
                <h2 className="section-title">فروعنا ومصانعنا في خدمتك دائماً</h2>
                <p className="section-subtitle">
                  تفضل بزيارة مصانعنا ومعاينة الماكينات أثناء التشغيل الفعلي، أو اطلب عرض سعر مخصص وسنتواصل معك فوراً.
                </p>
              </div>

              <div className="contact-grid">
                <div className="contact-card">
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '28px', color: 'var(--text-main)' }}>
                    المقر الرئيسي والمصانع
                  </h3>

                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <div className="contact-icon-box">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      </div>
                      <div>
                        <div className="contact-info-title">الإدارة والمبيعات (القاهرة)</div>
                        <div className="contact-info-text">شق التعبان، أبراج الأمل، برج 99 - طره، القاهرة</div>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-icon-box">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-4L7.11 16.63 4.5 12 2 13.5l4 7 11-16.5H19z"/></svg>
                      </div>
                      <div>
                        <div className="contact-info-title">مصانع الإنتاج والورش الثقيلة</div>
                        <div className="contact-info-text">
                          <strong>المصنع الأول:</strong> عرب أبو ساعد - حلوان<br />
                          <strong>المصنع الثاني:</strong> محافظة المنصورة
                        </div>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-icon-box">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
                      </div>
                      <div>
                        <div className="contact-info-title">أرقام التواصل المباشر</div>
                        <div className="contact-info-text">
                          <strong style={{ color: 'var(--gold-dark)' }}>01011218141</strong> | <strong>01001163633</strong>
                        </div>
                      </div>
                    </div>

                    <div className="contact-info-item">
                      <div className="contact-icon-box">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                      </div>
                      <div>
                        <div className="contact-info-title">البريد الإلكتروني المعتمد</div>
                        <div className="contact-info-text">ic.marblemachines@hotmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-form">
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: 'var(--text-main)' }}>
                    طلب استشارة أو عرض سعر فوري
                  </h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
                    املأ البيانات وسيتم توجيه طلبك مباشرة إلى واتساب الإدارة الهندسية مع تسجيل الأولوية لمصنعك.
                  </p>

                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label className="form-label">الاسم بالكامل / اسم المصنع</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="مثال: مصنع الأمل للرخام" 
                        required 
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">رقم الهاتف أو الواتساب</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        placeholder="010XXXXXXXX" 
                        required 
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">مكان المصنع / المحافظة</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="مثال: شق التعبان، المنيا، السويس..." 
                        required 
                        value={quoteForm.factory}
                        onChange={(e) => setQuoteForm({...quoteForm, factory: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">الماكينة أو الونش المطلوب</label>
                      <select 
                        className="form-select"
                        value={quoteForm.machine}
                        onChange={(e) => setQuoteForm({...quoteForm, machine: e.target.value})}
                      >
                        {PRODUCTS.map(p => (
                          <option key={p.id} value={p.name}>{p.name}</option>
                        ))}
                        <option value="تجهيز مصنع رخام كامل">تجهيز مصنع رخام متكامل</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">ملاحظات أو مواصفات خاصة (اختياري)</label>
                      <textarea 
                        className="form-textarea" 
                        rows="3" 
                        placeholder="اكتب أي متطلبات خاصة بالحمولة، أبعاد القص، أو موعد التوريد..."
                        value={quoteForm.notes}
                        onChange={(e) => setQuoteForm({...quoteForm, notes: e.target.value})}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '16px' }}>
                      إرسال الطلب فوراً للمبيعات
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Main Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="brand-logo" onClick={returnToHome} style={{ cursor: 'pointer' }}>
                <img src="/logo.png" alt="الشركة الإسلامية" />
                <div className="brand-title-wrap">
                  <span className="brand-title" style={{ color: '#fff' }}>الشركة الإسلامية</span>
                  <span className="brand-sub">Islamic Industrial Machinery Group</span>
                </div>
              </div>
              <p>
                الشركة الرائدة في جمهورية مصر العربية والشرق الأوسط لتصنيع ماكينات نشر وقص الرخام والجرانيت، جلايات الشرائح، والأوناش العلوية والساحات حتى 100 طن بأعلى معايير الجودة والصلابة.
              </p>
              <div className="footer-social-links">
                <a href="https://www.facebook.com/ic.marble.machinery" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="فيسبوك">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

              </div>
            </div>

            <div>
              <h4 className="footer-title">أقسام الموقع</h4>
              <ul className="footer-links">
                <li><button onClick={returnToHome} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontFamily: 'inherit' }}>الرئيسية</button></li>
                <li><a href="#features" onClick={() => { if(currentView !== 'home') returnToHome(); }}>مميزات الصناعة</a></li>
                <li><a href="#products" onClick={() => { if(currentView !== 'home') returnToHome(); }}>الماكينات والأوناش</a></li>
                <li><a href="#articles" onClick={() => { if(currentView !== 'home') returnToHome(); }}>المقالات ودراسات الجدوى</a></li>
                <li><a href="#faq" onClick={() => { if(currentView !== 'home') returnToHome(); }}>الأسئلة الشائعة</a></li>
                <li><a href="#about" onClick={() => { if(currentView !== 'home') returnToHome(); }}>عن الشركة الإسلامية</a></li>
                <li><a href="#contact" onClick={() => { if(currentView !== 'home') returnToHome(); }}>طلب عرض سعر</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">الماكينات المتاحة</h4>
              <ul className="footer-links">
                <li><a href="#products" onClick={() => { if(currentView !== 'home') returnToHome(); }}>منشار 13 أسطوانة</a></li>
                <li><a href="#products" onClick={() => { if(currentView !== 'home') returnToHome(); }}>جلاية 10 رأس طولات</a></li>
                <li><a href="#products" onClick={() => { if(currentView !== 'home') returnToHome(); }}>ونش الزرافة والعلم</a></li>
                <li><a href="#products" onClick={() => { if(currentView !== 'home') returnToHome(); }}>ونش ساحة 100 طن</a></li>
                <li><a href="#products" onClick={() => { if(currentView !== 'home') returnToHome(); }}>ماكينة فكري 1600</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">اتصال سريع بالإدارة</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '16px' }}>
                جاهزون لتلقي استفسارات المصانع وعروض التجهيز الشاملة في أي وقت.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="tel:01011218141" style={{ color: 'var(--gold-light)', fontWeight: '700', fontSize: '1.1rem' }}>
                  📞 01011218141
                </a>
                <a href="tel:01001163633" style={{ color: '#cbd5e1', fontWeight: '700' }}>
                  📞 01001163633
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              جميع الحقوق محفوظة © {new Date().getFullYear()} الشركة الإسلامية (الشركة الإسلامية).
            </div>
            <div style={{ color: 'var(--gold-light)' }}>
              صناعة مصرية بمعايير عالمية 🇪🇬
            </div>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal (for machines only) */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
            
            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '300px', marginBottom: '24px' }}>
              <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="section-badge">{selectedProduct.categoryName}</div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '14px' }}>
              {selectedProduct.name}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
              {selectedProduct.desc}
            </p>

            <h4 style={{ color: 'var(--gold-dark)', marginBottom: '12px', fontSize: '1.1rem' }}>المواصفات الفنية التفصيلية:</h4>
            <div className="product-specs" style={{ marginBottom: '28px' }}>
              {selectedProduct.specs.map((s, idx) => (
                <div key={idx} className="spec-item" style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span className="spec-label">{s.label}</span>
                  <span className="spec-val">{s.val}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <button 
                onClick={() => {
                  handleWhatsAppQuote(selectedProduct.name);
                  setSelectedProduct(null);
                }}
                className="btn btn-gold" 
                style={{ flex: 1 }}
              >
                طلب تسعير ومواصفات عبر واتساب
              </button>
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="btn btn-outline"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Floating WhatsApp Widget */}
      <a 
        href={getWhatsAppUrl('تواصل عام مع الشركة الإسلامية')}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget"
        title="تحدث مع الشركة الإسلامية عبر واتساب"
        aria-label="تواصل فوري عبر واتساب"
      >
        <div className="whatsapp-icon-circle">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span className="online-indicator"></span>
        </div>
        <div className="whatsapp-text-content">
          <span className="whatsapp-badge-status">متاح الآن للاستفسارات</span>
          <span className="whatsapp-badge-title">واتساب الشركة الإسلامية</span>
        </div>
      </a>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="mobile-sticky-action-bar">
        <a href="tel:01011218141" className="mobile-action-btn phone">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
          <span>اتصال هاتفي</span>
        </a>
        <a 
          href={getWhatsAppUrl('استفسار فوري عبر الموبايل')}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-action-btn whatsapp"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span>محادثة واتساب</span>
        </a>
      </div>
    </div>
  );
}
