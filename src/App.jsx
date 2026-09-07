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
    name: 'منشار حمام الزيت الحصري (ابتكار فكري جروب)',
    category: 'saws',
    categoryName: 'ابتكارات حصرية',
    img: '/hero-banner.jpg',
    desc: 'الابتكار الذي طوره فريق الخبراء بفكري جروب لمنع تآكل التروس وإطالة عمر المنشار بنسبة 300% وتخفيض فواتير الصيانة والأعطال المفاجئة.',
    specs: [
      { label: 'نظام التشحيم', val: 'حمام زيت دائم معزول بالكامل' },
      { label: 'مستوى الضجيج', val: 'أقل ضوضاء بنسبة 40%' },
      { label: 'الاستهلاك', val: 'توفير فائق في الطاقة والمياه' },
      { label: 'براءة التصميم', val: 'مسجل ومعتمد باسم فكري جروب' }
    ]
  }
];

const ARTICLES = [
  {
    id: 'ابتكار-نظام-حمام-الزيت',
    image: '/saw-13.jpg',
    title: 'مسيرة وإنجازات فكري جروب في النهوض بصناعة الرخام والجرانيت وتحدي الاستيراد الأوروبي',
    category: 'history',
    categoryName: 'إنجازات وريادة',
    date: '15 فبراير 2026',
    readTime: '6 دقائق قراءة متعمقة',
    author: 'فكري جروب',
    authorRole: 'مؤسس فكري جروب وخبير هندسة الماكينات الثقيلة',
    excerpt: 'اكتشف كيف أنقذ ابتكار "نظام حمام الزيت الحصري" مصانع الرخام والجرانيت في شق التعبان من الاستيراد. دراسة هندسية تفصيلية لزيادة الإنتاجية وتقليل أسعار الصيانة.',
    content: `
      <h2>المقدمة: التحديات التاريخية في صناعة الرخام والجرانيت</h2>
      <p>لعقود طويلة، كانت مصانع <a href="https://ar.wikipedia.org/wiki/%D8%B1%D8%AE%D8%A7%D9%85" target="_blank" rel="noopener noreferrer" style="color:var(--gold-light); text-decoration:underline;">الحجر الطبيعي والرخام</a> في مصر، وتحديداً في منطقة <strong>شق التعبان</strong> ومحافظات المنيا وأسوان والسويس، تعاني من هيمنة الماكينات المستوردة. <strong>بالرغم من ذلك</strong>، هذه المعدات لم تكن مصممة لتحمل ظروف العمل القاسية، ودرجات الحرارة المرتفعة، وطبيعة كتل الجرانيت المصرية شديدة الصلابة. <strong>ونتيجة لذلك</strong>، ظهرت الحاجة الماسة لابتكار محلي يوفر <strong>أسعار مكن الرخام</strong> ويضمن الكفاءة العالية.</p>
      
      <h2>الابتكار الهندسي المحوري: نظام "منشار حمام الزيت"</h2>
      <p>من قلب ورش التشغيل الميدانية، حلّل فريق <strong>فكري جروب</strong> السبب الجذري لأكثر من 80% من أعطال <em>مناشير الرخام التقليدية</em>. <strong>وبناءً على ذلك</strong>، تم ابتكار غرفة تروس معزولة هيدروليكياً بنظام ضغط موجب وغاطسة بالكامل في <strong>حمام زيت</strong> ميكانيكي دائم. هذا التصميم يمنع فيزيائياً تسرب قطرة ماء واحدة أو ذرة غبار، مما يطيل عمر التروس المسبوكة بشكل مذهل.</p>
      
      <div class="article-callout">
        <strong>💡 براءة الفكرة الهندسية:</strong>
        نظام حمام الزيت لا يوفر فقط تبريداً وتشحيماً متواصلاً، بل يخفض بشكل مباشر من تكلفة صيانة <strong>جلايات الرخام</strong> ومناشير الجرانيت، ويعد نقلة نوعية في <em>تجهيز مصانع الرخام</em>.
      </div>

      <h2>الأثر الاقتصادي على مصانع الرخام: وفورات حقيقية بالأرقام</h2>
      <p><strong>علاوة على ذلك</strong>، فإن تطبيق هذا الابتكار أحدث ثورة حقيقية في حسابات الجدوى الاقتصادية للمصانع، ومن أبرز نتائجه الملموسة:</p>
      <ul>
        <li><strong>مضاعفة العمر الافتراضي:</strong> ارتفع العمر التشغيلي لـ <em>مكن تقطيع الجرانيت</em> من 3 سنوات إلى أكثر من 15 سنة.</li>
        <li><strong>خفض تكلفة الصيانة بنسبة 70%:</strong> اختفاء الحاجة لشراء تروس مستوردة، مما يجعل <strong>اسعار مكن الرخام</strong> الاستثمارية أكثر ربحية.</li>
        <li><strong>دقة متناهية في التقطيع:</strong> ثبات الشاسيه منع تشرشر الحواف، مما وفّر آلاف الأمتار المربعة من الهدر الخام.</li>
      </ul>

      <h2>تجهيز كبرى المشروعات القومية والتصدير العربي</h2>
      <p><strong>الأهم من ذلك كله</strong>، لم تتوقف إنجازاتنا عند حدود السوق المحلي. لقد تحولت مصانعنا في حلوان والمنصورة إلى مركز إقليمي لإنتاج <strong>أوناش الساحات حمولة 100 طن</strong>. تم توريد خطوط إنتاج كاملة إلى السعودية، ليبيا، السودان، والأردن. <strong>في الختام</strong>، <em>صُنع في مصر بإشراف فكري جروب</em> أصبح عنواناً للجودة الاستثنائية والثقة المطلقة في عالم <strong>مكن رخام</strong>.</p>
    `
  },
  {
    id: 'تاريخ-الشركة',
    image: '/eng-ahmed.jpg',
    title: 'تاريخ وتطور فكري جروب: رحلة 20 عاماً في قلب الصناعة الثقيلة وتجهيز كبرى المصانع',
    category: 'bio',
    categoryName: 'السيرة الذاتية',
    date: '28 يناير 2026',
    readTime: '5 دقائق قراءة',
    author: 'هيئة التحرير الصناعية',
    authorRole: 'توثيق رواد الصناعة المصرية',
    excerpt: 'السيرة الذاتية لـ "فكري جروب": كيف تحولت ورشة هندسية إلى أكبر صرح لتصنيع مكن الرخام، الجلايات، والأوناش الثقيلة في شق التعبان والشرق الأوسط.',
    content: `
      <h2>النشأة والشغف بعالم هندسة الميكانيكا والمعادن</h2>
      <p>بدأت رحلة <strong>فكري جروب</strong> منذ أكثر من عقدين من الزمان، مدفوعة بشغف عميق بديناميكا الحركة الثقيلة وهندسة <a href="https://ar.wikipedia.org/wiki/%D9%81%D9%88%D9%84%D8%A7%D8%B0" target="_blank" rel="noopener noreferrer" style="color:var(--gold-light); text-decoration:underline;">المعادن المسبوكة</a>. لم تكن بدايته عبر المكاتب النظرية، بل غاص في تفاصيل الورش الصناعية وخبر خفايا <strong>ماكينات الرخام والجرانيت</strong> بيديه. <strong>وبناءً على ذلك</strong>، كان الهدف دائماً هو البحث عن مواطن الضعف في الماكينات المستوردة وتحويلها إلى نقاط قوة هندسية، مما يضمن أفضل <strong>اسعار مكن الرخام</strong> مقابل الجودة.</p>

      <h2>تأسيس فكري جروب: من ورشة طموحة إلى صرح صناعي رائد</h2>
      <p>في مطلع الألفينات، تم وضع حجر الأساس لشركة <strong>فكري جروب</strong>. <strong>وبالإضافة إلى ذلك</strong>، كان الهدف الأساسي هو أن تكون الماكينة المصرية هي الخيار الأول لأصحاب المصانع في <em>شق التعبان</em> والشرق الأوسط. وبفضل العمل الدؤوب والتطوير المستمر في إنتاج <strong>مكن رخام</strong> عالي الكفاءة، توسعت الشركة لتضم صرحين تصنيعيين ضخمين:</p>
      <ul>
        <li><strong>مصنع عرب أبو ساعد (حلوان):</strong> المخصص لإنتاج الشاسيهات الصلبة الثقيلة، سباكة الهياكل، و<strong>مناشير الجرانيت العملاقة</strong>.</li>
        <li><strong>مصنع المنصورة:</strong> المخصص لتجميع <strong>أوناش الساحات والأوناش العلوية</strong> وأنظمة التحكم الهيدروليكية والإلكترونية الدقيقة.</li>
      </ul>

      <h2>فلسفة القيادة الهندسية: الأمان والمتانة القصوى</h2>
      <p><strong>من ناحية أخرى</strong>، يتميز فكري جروب بفلسفة عمل صارمة تقوم على اختبار كل معدة، سواء كانت <strong>جلاية رخام</strong> أو منشار 13 أسطوانة، تحت أحمال تفوق طاقتها الاسمية بنسبة 30% قبل تسليمها للعميل. <strong>في الختام</strong>، يحرص الفريق الهندسي على التطوير السنوي لتقديم أفضل حلول <em>تجهيز مصانع الرخام</em> لعملائنا في جميع أنحاء الوطن العربي.</p>
    `
  },
  {
    id: 'دليل-المستثمر',
    image: '/crane-yard.jpg',
    title: 'دليل المستثمر لمصانع الرخام والجرانيت 2026: دراسة جدوى، الأسعار، واختيار الماكينات',
    category: 'guide',
    categoryName: 'دليل وتوجيهات',
    date: '01 مارس 2026',
    readTime: '7 دقائق قراءة',
    author: 'فكري جروب',
    authorRole: 'استشاري تجهيز وتطوير مصانع الرخام',
    excerpt: 'دليل الاستثمار الشامل 2026: كيف تختار أفضل مكن رخام وجلايات؟ دليلك لمعرفة أسعار مكن الرخام واختيار الأوناش لضمان أعلى عائد استثماري.',
    content: `
      <h2>1. التخطيط المسبق: دراسة مساحة المصنع وخطوط سير الإنتاج</h2>
      <p>الخطوة الأولى والأهم عند تأسيس أو تجهيز مصنع جديد هي التخطيط الدقيق. أول خطأ يقع فيه بعض المستثمرين هو عدم مقارنة <strong>أسعار مكن الرخام</strong> بمساحة المصنع وخط سير العمل. <strong>لذلك</strong>، يجب تقسيم المصنع إلى ثلاث مناطق رئيسية لضمان الانسيابية:</p>
      <ol>
        <li><strong>ساحة استقبال الكتل الخام:</strong> وتحتاج إلى <em>ونش ساحة حمولة 100 طن</em> لتفريغ كتل <a href="https://ar.wikipedia.org/wiki/%D8%AC%D8%B1%D8%A7%D9%86%D9%8A%D8%AA" target="_blank" rel="noopener noreferrer" style="color:var(--gold-light); text-decoration:underline;">الجرانيت</a> الثقيلة.</li>
        <li><strong>عنبر النشر والقص:</strong> يضم <strong>مناشير الجرانيت 13 أسطوانة</strong> وماكينات القص الدائري 1600، وهي قلب عملية الإنتاج.</li>
        <li><strong>خط المعالجة والتشطيب:</strong> يضم <strong>جلايات الشرائح متعددة الرؤوس</strong> لضمان لمعان وجودة نهائية مثالية.</li>
      </ol>

      <h2>2. كيف تختار منشار الجرانيت المناسب لتحقيق أعلى أرباح؟</h2>
      <p>تعتمد إنتاجية المصنع بنسبة كبيرة على كفاءة <strong>مكن تقطيع الرخام والجرانيت</strong>. <strong>بالإضافة إلى ذلك</strong>، يوصي الخبراء في فكري جروب بالتركيز على المعايير الثلاثة التالية لتفادي الخسائر:</p>
      <ul>
        <li><strong>وزن وصلابة الشاسيه:</strong> الشاسيه الخفيف يهتز أثناء القص مما يكسر الألواح. ماكيناتنا تصنع بصلب مسبوك معالج يزن أضعاف الماكينات التجارية الموجودة في شق التعبان.</li>
        <li><strong>نظام التزييت المتطور:</strong> تجنب الماكينات المفتوحة التي تتلف تروسها سريعاً واطلب دائماً نظام <strong>حمام الزيت</strong> الحصري لضمان استمرارية التشغيل.</li>
        <li><strong>توفر قطع الغيار محلياً:</strong> لا تدع إنتاجك يتوقف شهوراً في انتظار استيراد قطعة غيار. نحن نوفر جميع قطع الغيار بشكل فوري بأسعار تنافسية.</li>
      </ul>

      <h2>3. الأوناش الصناعية: حماية رأس المال وأرواح العمال</h2>
      <p><strong>الأهم من ذلك كله</strong>، هو الاستثمار في الأوناش العلوية والساحات. سقوط لوح رخام واحد قد يسبب كارثة فادحة. <strong>ونتيجة لذلك</strong>، يجب أن تكون معدات الرفع مزودة بمكابح كهرومغناطيسية مزدوجة وعربات 4 حركة تتيح المناورة الدقيقة. <strong>في الختام</strong>، عند التفكير في <em>اسعار مكن الرخام</em>، يجب أن يكون عامل الأمان والجودة هو المعيار الأول.</p>
    `
  },
  {
    id: 'أسرار-الصيانة',
    image: '/machine1.jpg',
    title: 'أسرار الصيانة الوقائية لمعدات وأوناش الرخام: 5 قواعد ذهبية لتفادي الأعطال المفاجئة',
    category: 'guide',
    categoryName: 'نصائح صيانة',
    date: '10 يناير 2026',
    readTime: '4 دقائق قراءة',
    author: 'قسم الصيانة والدعم الفني',
    authorRole: 'فكري جروب - شق التعبان',
    excerpt: 'أسرار الصيانة الوقائية 2026: 5 قواعد ذهبية للحفاظ على مكن الرخام، جلايات الجرانيت، والأوناش الثقيلة لتجنب الأعطال المفاجئة وتوفير التكاليف.',
    content: `
      <h2>القاعدة الأولى: نقاء مياه التبريد وأهمية تدويرها</h2>
      <p>في عالم <strong>مكن رخام</strong>، تُعد مياه التبريد شريان الحياة للماكينات. <strong>وبالرغم من ذلك</strong>، تصبح هذه المياه مشبعة ببودرة الكالسيوم وحبيبات السيليكا الناتجة عن عملية القص. إن إعادة ضخ المياه بدون أحواض ترسيب كافية يؤدي لانسداد فتحات التبريد وارتفاع حرارة أسطوانات <strong>مناشير الجرانيت</strong>. <strong>لذلك</strong>، نوصي بتنظيف مجاري المياه بشكل أسبوعي لمنع تلف الشفرات المبكر.</p>

      <h2>القاعدة الثانية: الفحص الأسبوعي لزوجة زيت الهيدروليك</h2>
      <p>تعمل <strong>ماكينات قص الرخام</strong> و <strong>جلايات الجرانيت</strong> لساعات طويلة متواصلة، مما يرفع درجة حرارة الزيت بشكل كبير. <strong>من ناحية أخرى</strong>، الزيت التالف يؤدي إلى تآكل المضخات الهيدروليكية. احرص على فحص لزوجة ولون الزيت دورياً، واستخدم الزيوت ذات المقاومة العالية للحرارة المعتمدة من <em>فكري جروب</em> لضمان أفضل أداء.</p>

      <h2>القاعدة الثالثة: التشحيم الدوري لمحاور الأوناش والعربات</h2>
      <p>تتعرض <strong>أوناش الساحات</strong> والأوناش العلوية لأحمال ديناميكية ثقيلة وغبار مستمر في مناطق مثل <em>شق التعبان</em>. <strong>علاوة على ذلك</strong>، تراكم الأتربة على الوايرات قد يسبب تآكلها وقطعها. يجب تشحيم كراسي المحاور وبكرات الوايرات أسبوعياً بشحوم مخصصة تتحمل الضغوط العالية:</p>
      <ul>
        <li>فحص وتزييت وايرات الرفع بشكل منتظم.</li>
        <li>مراجعة المكابح الكهرومغناطيسية لضمان الاستجابة السريعة.</li>
        <li>التحقق من نقاط الارتكاز في شاسيه <strong>الونش</strong> لضمان عدم وجود تشققات.</li>
      </ul>

      <h2>القاعدة الرابعة: صيانة اللوحات الإلكترونية</h2>
      <p><strong>في الختام</strong>، لا تغفل عن صيانة اللوحات الكهربائية الخاصة بـ <strong>ماكينات الرخام</strong>. تأكد من إحكام إغلاق كبائن التحكم لمنع دخول الأتربة والمياه، وقم بتنظيف فلاتر التهوية شهرياً. هذه الخطوات البسيطة تحافظ على أجهزة الـ Inverter وتطيل عمر الماكينة بأكملها.</p>
    `
  },
  {
    id: 'أفضل-شركة-تجهيز-مصانع',
    image: '/polisher-10.jpg',
    title: 'كيف تختار أفضل شركة لصناعة وتوريد ماكينات الرخام في مصر لعام 2026؟',
    category: 'guide',
    categoryName: 'دليل وتوجيهات',
    date: '07 سبتمبر 2026',
    readTime: '10 دقائق قراءة',
    author: 'فكري جروب',
    authorRole: 'خبراء صناعة الماكينات الثقيلة',
    excerpt: 'دليل حصري وشامل يوضح المعايير الحاسمة لاختيار أفضل شركة لتصنيع ماكينات الرخام والجرانيت والأوناش في شق التعبان ومصر لتجنب الخسائر.',
    content: `
      <h2>المقدمة: لماذا البحث عن الأفضل هو قرارك الأهم؟</h2>
      <p>في عالم الصناعات الثقيلة، وتحديداً في معالجة <a href="https://ar.wikipedia.org/wiki/%D8%B1%D8%AE%D8%A7%D9%85" target="_blank" rel="noopener noreferrer" style="color:var(--gold-light); text-decoration:underline;">الرخام والجرانيت</a>، الماكينة ليست مجرد أداة، بل هي قلب المصنع النابض. <strong>بناءً على ذلك</strong>، فإن اختيارك لـ <strong>أفضل شركة لتصنيع ماكينات الرخام والجرانيت</strong> يحدد مسار أرباحك لسنوات قادمة. الماكينات الرديئة تعني أعطالاً متكررة، هدراً في الخام، وتوقفاً لخطوط الإنتاج. <strong>من ناحية أخرى</strong>، في هذا الدليل، نكشف لك المعايير التي تجعل <em>فكري جروب</em> تتربع بلا منازع على عرش الصناعة في مصر والشرق الأوسط.</p>
      
      <h2>1. تقنية العزل: سر العمر الطويل للتروس</h2>
      <p>معظم الشركات المنافسة تقدم ماكينات بتروس مكشوفة تتآكل بسرعة نتيجة مياه التبريد وبودرة الرخام. <strong>ولكن</strong>، <strong>أفضل شركة</strong> هي التي تقدم حلاً جذرياً لهذه المعضلة. <em>فكري جروب</em> انفردت بابتكار <strong>نظام حمام الزيت الحصري</strong>، وتتجلى فوائده في النقاط التالية:</p>
      <ul>
        <li><strong>عزل تام:</strong> تعمل التروس في بيئة معزولة تماماً عن المياه والأتربة.</li>
        <li><strong>عمر افتراضي أطول:</strong> يطيل عمر الماكينة إلى 15 عاماً وأكثر دون الحاجة لعمرات مكلفة.</li>
        <li><strong>توفير الطاقة:</strong> يقلل الاحتكاك مما يخفض استهلاك الكهرباء بنسبة ملحوظة.</li>
      </ul>
      <p><strong>علاوة على ذلك</strong>، يمكنك الاطلاع على تطبيق هذه التقنية عملياً في <a href="#products" style="color:var(--gold-light); text-decoration:underline;">قسم المنتجات والجلايات</a> الخاص بنا.</p>

      <h2>2. الصلابة الهندسية: ثبات الشاسيه وتأثيره على الإنتاج</h2>
      <p>لا تنخدع بالشكل الخارجي اللامع. الماكينات التي تصنعها الشركات العادية قد تبدو جيدة ولكن وزن شاسيهاتها خفيف جداً. <strong>ونتيجة لذلك</strong>، يحدث اهتزاز عنيف يكسر ألواح الجرانيت ويتلف أسطوانات القص. نحن في <em>فكري جروب</em> نضمن لك الآتي:</p>
      <ol>
        <li>استخدام أطنان من <strong>الصلب المعالج</strong> لبناء شاسيهات عملاقة.</li>
        <li>تحمل الخدمة الشاقة والعمل المتواصل (وردية 24 ساعة) بدون هزة واحدة.</li>
        <li>قص دقيق بالليزر يضمن حواف مستقيمة 100% للألواح.</li>
      </ol>

      <h2>3. الأوناش وحمولات الساحات الضخمة</h2>
      <p><strong>الأهم من ذلك كله</strong>، أن الشركة الأفضل لا تقدم لك ماكينة قص فقط، بل تجهز مصنعك بالكامل من الألف إلى الياء. تصميم وتوريد أوناش ساحة بحمولات تصل إلى <strong>100 طن</strong> هو تحدٍ هندسي ضخم لا تتقنه سوى <em>فكري جروب</em>. ويتحقق ذلك بفضل:</p>
      <ul>
        <li>أنظمة الأمان الكهرومغناطيسية المزدوجة.</li>
        <li>عربات الحركة الرباعية فائقة الدقة.</li>
        <li>وايرات الصلب المجدولة لتحمل أقصى درجات الشد.</li>
      </ul>

      <h2>الخلاصة: استثمر أموالك مع الرواد</h2>
      <p><strong>وفي الختام</strong>، إذا كنت تبحث بجدية عن <strong>أفضل شركة لصناعة ماكينات الرخام في مصر</strong>، فإن السجل الحافل لـ <em>فكري جروب</em> لأكثر من 20 عاماً، وآلاف الماكينات العاملة بكفاءة في شق التعبان والدول العربية، هو خير دليل قاطع. تواصل معنا اليوم لتجهيز مصنعك بأعلى المعايير العالمية.</p>
    `
  }
];

const FAQS = [
  {
    q: 'ما هي اسعار مكن الرخام في مصر؟ وهل توفرون عروضاً للمصانع الجديدة؟',
    a: 'تختلف اسعار مكن الرخام بناءً على نوع الماكينة (منشار، جلاية، أو ونش) والمواصفات المطلوبة. في فكري جروب، نقدم أفضل مصنع مكن رخام بأسعار تنافسية جداً مقارنة بالمستورد، مع توفير خصومات خاصة لتجهيز المصانع الجديدة بالكامل (خطوط الإنتاج والأوناش) مع تسهيلات في أنظمة الدفع.'
  },
  {
    q: 'ما الذي يميز ماكينات فكري جروب عن الماكينات المستوردة؟',
    a: 'ماكيناتنا مصممة خصيصاً لتتحمل الخدمة الشاقة وظروف العمل القاسية في مصانع الرخام بمصر والشرق الأوسط، وتتميز بنظام حمام الزيت الحصري لمنع الأعطال، مع توفر فوري لكافة قطع الغيار محلياً بأسعار تنافسية وبضمان معتمد من فكري جروب.'
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

  // Handle Browser Back Button and Initial Load integration
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.startsWith('/article/')) {
        const artId = path.replace('/article/', '');
        const found = ARTICLES.find(a => a.id === artId);
        if (found) {
          setActiveArticle(found);
          setCurrentView('article');
        }
      } else {
        setCurrentView('home');
      }
    };
    
    // Check on first load
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const openArticlePage = (article) => {
    setActiveArticle(article);
    setCurrentView('article');
    window.history.pushState({}, '', `/article/${article.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnToHome = () => {
    setCurrentView('home');
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (hash) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      setCurrentView('home');
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  const filteredArticles = activeArticleFilter === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeArticleFilter);

  const getWhatsAppUrl = (productOrTopic) => {
    const text = encodeURIComponent(`مرحباً فكري جروب (فكري جروب)، أريد الاستفسار عن تفاصيل وسعر: ${productOrTopic || 'ماكينات الرخام والأوناش'}`);
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
              <img src="/logo.png" alt="فكري جروب - صناعة ماكينات الرخام والجرانيت" />
              <div className="brand-title-wrap">
                <span className="brand-title">فكري جروب</span>
                <span className="brand-sub">لصناعة ماكينات الرخام والجرانيت والأوناش في مصر والوطن العربي</span>
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
            <li><a href="#features" onClick={(e) => { e.preventDefault(); navigateToSection('#features'); }} className="nav-link">مميزاتنا</a></li>
            <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }} className="nav-link">الماكينات</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('#about'); }} className="nav-link">عن فكري جروب</a></li>
            <li><a href="#articles" onClick={(e) => { e.preventDefault(); navigateToSection('#articles'); }} className="nav-link">المقالات والأخبار</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); navigateToSection('#faq'); }} className="nav-link">الأسئلة الشائعة</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('#contact'); }} className="nav-link">فروعنا وتواصل</a></li>
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
              <img src="/logo.png" alt="لوجو فكري جروب" style={{ height: '40px' }} />
              <div>
                <div style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.1rem' }}>فكري جروب</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-dark)' }}>لصناعة معدات الرخام</div>
              </div>
            </div>
            <button className="drawer-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="إغلاق">✕</button>
          </div>

          <nav className="drawer-nav">
            <button className="drawer-link" onClick={() => { returnToHome(); setMobileMenuOpen(false); }} style={{ width: '100%', background: 'none', border: 'none', textAlign: 'right', cursor: 'pointer', fontFamily: 'inherit' }}>
              <span className="drawer-icon">🏠</span>
              <span>الصفحة الرئيسية</span>
            </button>
            <a href="#features" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#features'); }}>
              <span className="drawer-icon">⚙️</span>
              <span>لماذا تختارنا ومميزاتنا</span>
            </a>
            <a href="#products" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>
              <span className="drawer-icon">🏗️</span>
              <span>أسطول الماكينات والأوناش</span>
            </a>
            <a href="#about" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#about'); }}>
              <span className="drawer-icon">👨‍💼</span>
              <span>عن فكري جروب</span>
            </a>
            <a href="#articles" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#articles'); }}>
              <span className="drawer-icon">📰</span>
              <span>المقالات ودليل المصانع</span>
            </a>
            <a href="#faq" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#faq'); }}>
              <span className="drawer-icon">❓</span>
              <span>الأسئلة الشائعة</span>
            </a>
            <a href="#contact" className="drawer-link" onClick={(e) => { e.preventDefault(); navigateToSection('#contact'); }}>
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
                <img src={activeArticle.image || "/hero-banner.jpg"} alt={activeArticle.title} />
                <div className="image-caption">تصنيع وابتكار ماكينات الرخام والجرانيت الثقيلة بمصانع فكري جروب</div>
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
                  <p>تواصل مباشرة مع فكري جروب للاستشارات الفنية وتجهيز خطوط الإنتاج والتعرف على الأسعار الخاصة.</p>
                </div>
                <div className="cta-actions">
                  <button onClick={() => handleWhatsAppQuote(activeArticle.title)} className="btn btn-whatsapp">
                    تواصل واتساب مع فكري جروب
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
                    alt="فكري جروب" 
                    style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', border: '3px solid var(--gold-primary)' }}
                  />
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>فكري جروب</h4>
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
              <img src="/hero-banner.jpg" alt="مصنع ماكينات الرخام فكري جروب" className="hero-bg-img" />
            </div>
            <div className="hero-gradient-overlay"></div>

            <div className="container hero-content">
              <div className="hero-text">
                <div className="section-badge">
                  <span>🏆</span>
                  <span>الخيار الأول: أكثر من 20 عاماً من الريادة والثقة الصناعية</span>
                </div>
                
                <h1 className="hero-headline">
                  <span className="gradient-text">فكري جروب</span><br />
                  أفضل مصنع مكن رخام وجرانيت في مصر
                </h1>

                <p className="hero-description">
                  بتدور على مكن رخام يعيش معاك؟ إحنا بنعيد تعريف معايير القوة والصلابة في مصر والشرق الأوسط. مكن تقطيع وجلايات وأوناش عملاقة مصنعة بصلب فائق الجودة، مزودة بنظام <strong>حمام الزيت الحصري</strong> لتدوم طويلاً وتضمن لك أعلى إنتاجية بأفضل اسعار مكن الرخام.
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

          {/* Why We Are The Best Section */}
          <section id="why-us" className="comparison-section" style={{ padding: '80px 0', backgroundColor: 'var(--bg-alt)' }}>
            <div className="container">
              <div className="section-header">
                <span className="section-badge">مقارنة المنافسين</span>
                <h2>لماذا تُصنف فكري جروب كـ <span className="gradient-text">أفضل شركة</span> لتصنيع ماكينات الرخام؟</h2>
                <p>إليك الأسباب التي تجعل كبرى المصانع في شق التعبان والشرق الأوسط تختارنا دوناً عن غيرنا.</p>
              </div>
              
              <div className="features-grid" style={{ marginTop: '40px' }}>
                <div className="feature-card">
                  <div className="feature-icon">🛡️</div>
                  <h3>نظام حمام الزيت الحصري</h3>
                  <p>بعكس الماكينات العادية التي تتلف تروسها سريعاً بسبب المياه، ماكيناتنا معزولة بالكامل في حمام زيت دائم يضاعف عمرها 300%.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">⚖️</div>
                  <h3>شاسيهات صلب للخدمة الشاقة</h3>
                  <p>نستخدم حديد صلب مسبوك بأوزان مضاعفة لمنع أي اهتزازات أثناء القص، مما يضمن دقة متناهية وحواف مثالية للألواح.</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🤝</div>
                  <h3>ضمان حقيقي ودعم فني 24/7</h3>
                  <p>لا نكتفي ببيع الماكينة؛ بل نوفر صيانة سريعة وقطع غيار فورية ومحلية الصنع لضمان عدم توقف إنتاج مصنعك يوماً واحداً.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Value Pillars / Features */}
          <section id="features" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container">
              <div className="section-header">
                <div className="section-badge">لماذا تختار فكري جروب؟</div>
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
                    <img src="/hero-banner.jpg" alt="فكري جروب لماكينات الرخام والجرانيت" />
                    <div className="founder-badge">
                      <div className="founder-name">فكري جروب</div>
                      <div className="founder-title">صرح صناعي متكامل لتجهيز مصانع الرخام والجرانيت والأوناش</div>
                    </div>
                  </div>

                  <div className="about-narrative">
                    <div className="section-badge">الريادة الصناعية والهندسية</div>
                    <h2>شراكة نجاح تثق بها كبرى مصانع الحجر والرخام</h2>
                    
                    <p>
                      تُعد <strong>فكري جروب</strong> قلعة صناعية شامخة ورائدة في تصنيع ماكينات الرخام والجرانيت والأوناش الثقيلة. على مدار أكثر من عقدين من الزمان، نجحنا في بناء منظومة هندسية مصرية فائقة الجودة تضاهي التكنولوجيا الأوروبية، وتزود كبرى مصانع شق التعبان ومختلف المحافظات والدول بماكينات صلبة ذات عمر افتراضي استثنائي.
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
                  مقالات حصرية ودراسات فنية يقدمها فكري جروب لمساعدة أصحاب المصانع على مضاعفة الإنتاج وخفض تكاليف التشغيل.
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
                      <img src={article.image || "/hero-banner.jpg"} alt={article.title} style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px 12px 0 0", marginBottom: "16px"}} />
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
                <img src="/logo.png" alt="فكري جروب" />
                <div className="brand-title-wrap">
                  <span className="brand-title" style={{ color: '#fff' }}>فكري جروب</span>
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
                <li><a href="#features" onClick={(e) => { e.preventDefault(); navigateToSection('#features'); }}>مميزات الصناعة</a></li>
                <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>الماكينات والأوناش</a></li>
                <li><a href="#articles" onClick={(e) => { e.preventDefault(); navigateToSection('#articles'); }}>المقالات ودراسات الجدوى</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); navigateToSection('#faq'); }}>الأسئلة الشائعة</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('#about'); }}>عن فكري جروب</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('#contact'); }}>طلب عرض سعر</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">الماكينات المتاحة</h4>
              <ul className="footer-links">
                <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>منشار 13 أسطوانة</a></li>
                <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>جلاية 10 رأس طولات</a></li>
                <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>ونش الزرافة والعلم</a></li>
                <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>ونش ساحة 100 طن</a></li>
                <li><a href="#products" onClick={(e) => { e.preventDefault(); navigateToSection('#products'); }}>ماكينة فكري 1600</a></li>
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
              جميع الحقوق محفوظة © {new Date().getFullYear()} فكري جروب (فكري جروب).
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
        href={getWhatsAppUrl('تواصل عام مع فكري جروب')}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-widget"
        title="تحدث مع فكري جروب عبر واتساب"
        aria-label="تواصل فوري عبر واتساب"
      >
        <div className="whatsapp-icon-circle">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span className="online-indicator"></span>
        </div>
        <div className="whatsapp-text-content">
          <span className="whatsapp-badge-status">متاح الآن للاستفسارات</span>
          <span className="whatsapp-badge-title">واتساب فكري جروب</span>
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
