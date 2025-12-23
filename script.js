/**
 * =============================================
 * PORTFOLIO WEBSITE - JAVASCRIPT
 * =============================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== 0. I18N SYSTEM =====
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'nav.services': 'Services',
            'nav.contact': 'Contact',
            'welcome.title': 'Welcome 👋',
            'welcome.subtitle': 'Manage and explore my digital work in one place.',
            'welcome.desc': 'Here you can view projects, services, and my journey as a web developer.',
            'hero.title': 'Web Developer with a Passion for Clean & Modern Interfaces',
            'hero.description': 'I build fast, functional, and visually refined websites with a strong focus on user experience and clean code.',
            'cta.viewProjects': 'View Projects',
            'cta.contactMe': 'Contact Me',
            'value.title': 'What I Do Best',
            'value.clean.title': 'Clean & Structured Code',
            'value.clean.desc': 'Well-organized, readable, and scalable code built with best practices.',
            'value.ui.title': 'Modern UI/UX Design',
            'value.ui.desc': 'Minimal, aesthetic, and user-focused interfaces.',
            'value.responsive.title': 'Responsive & Fast Website',
            'value.responsive.desc': 'Optimized for all devices with smooth performance.',
            'skills.title': 'Skills & Technologies',
            'projects.title': 'Selected Projects',
            'projects.viewDetails': 'View Details',
            'projects.preview': 'Preview Website',
            'projects.visit': 'Visit Project',
            'projects.school.title': 'School Website System',
            'projects.school.desc': 'A complete school website with integrated information system, news, and gallery.',
            'projects.dashboard.title': 'Admin Dashboard',
            'projects.dashboard.desc': 'Comprehensive dashboard for managing student data and academic reports.',
            'projects.kantin.title': 'Kantin Online',
            'projects.kantin.desc': 'Online canteen app to manage menus, orders, and real-time sales reports via admin dashboard.',
            'cta.title': 'Ready to build something great together?',
            'about.title': 'About Me',
            'about.lead': 'I am a Software Engineering student with a strong interest in web development. I believe great websites are not only visually appealing, but also well-structured and easy to use.',
            'about.body': 'I continuously learn new technologies and build real projects to improve my skills.',
            'about.timeline1.title': 'Software Engineering Student',
            'about.timeline1.place': 'SMK Al Falah',
            'about.timeline2.title': 'Freelance Web Developer',
            'about.timeline2.place': 'Remote',
            'services.title': 'What I Can Help You With',
            'services.landing.title': 'Landing Page Website',
            'services.landing.desc': 'High-converting landing pages tailored to your brand.',
            'services.portfolio.title': 'Portfolio Website',
            'services.portfolio.desc': 'Showcase your work with a professional portfolio.',
            'services.company.title': 'Company Profile',
            'services.company.desc': 'Digital presence for your business with modern design.',
            'services.ui.title': 'UI Implementation',
            'services.ui.desc': 'Converting designs into pixel-perfect HTML/CSS code.',
            'contact.title': "Let's Work Together",
            'contact.subtitle': 'Interested in working together or discussing a project? Feel free to reach out.',
            'contact.email': 'Email',
            'contact.whatsapp': 'WhatsApp',
            'contact.placeholder.name': 'Your Name',
            'contact.placeholder.email': 'Your Email',
            'contact.placeholder.message': 'Your Message',
            'contact.send': 'Send Message',
            'footer.text': '© 2024 Anggian Fauzi. Built with ',
            'footer.andCode': ' and Code.'
        },
        id: {
            'nav.home': 'Beranda',
            'nav.about': 'Tentang',
            'nav.projects': 'Proyek',
            'nav.services': 'Layanan',
            'nav.contact': 'Kontak',
            'welcome.title': 'Selamat Datang 👋',
            'welcome.subtitle': 'Kelola dan jelajahi karya digital saya dalam satu tempat.',
            'welcome.desc': 'Di sini Anda dapat melihat proyek, layanan, dan perjalanan saya sebagai pengembang web.',
            'hero.title': 'Pengembang Web dengan Ketertarikan pada Antarmuka Modern & Bersih',
            'hero.description': 'Saya membangun website yang cepat, fungsional, dan menarik secara visual dengan fokus pada pengalaman pengguna dan struktur kode yang rapi.',
            'cta.viewProjects': 'Lihat Proyek',
            'cta.contactMe': 'Hubungi Saya',
            'value.title': 'Apa yang Saya Lakukan Terbaik',
            'value.clean.title': 'Kode Bersih & Terstruktur',
            'value.clean.desc': 'Kode yang terorganisir, mudah dibaca, dan skalabel dengan praktik terbaik.',
            'value.ui.title': 'Desain UI/UX Modern',
            'value.ui.desc': 'Antarmuka minimal, estetis, dan berfokus pada pengguna.',
            'value.responsive.title': 'Website Responsif & Cepat',
            'value.responsive.desc': 'Dioptimalkan untuk semua perangkat dengan performa mulus.',
            'skills.title': 'Keahlian & Teknologi',
            'projects.title': 'Proyek Pilihan',
            'projects.viewDetails': 'Lihat Detail',
            'projects.preview': 'Pratinjau Website',
            'projects.visit': 'Kunjungi Proyek',
            'projects.school.title': 'Sistem Website Sekolah',
            'projects.school.desc': 'Website sekolah lengkap dengan sistem informasi terintegrasi, berita, dan galeri.',
            'projects.dashboard.title': 'Dashboard Admin',
            'projects.dashboard.desc': 'Dashboard komprehensif untuk mengelola data siswa dan laporan akademik.',
            'projects.kantin.title': 'Kantin Online',
            'projects.kantin.desc': 'Aplikasi kantin online untuk mengelola menu, pesanan, dan laporan penjualan secara real-time melalui dashboard admin.',
            'cta.title': 'Siap membangun sesuatu yang hebat bersama?',
            'about.title': 'Tentang Saya',
            'about.lead': 'Saya adalah siswa Rekayasa Perangkat Lunak dengan minat kuat pada pengembangan web. Saya percaya website yang hebat tidak hanya menarik, tetapi juga terstruktur dan mudah digunakan.',
            'about.body': 'Saya terus belajar teknologi baru dan membangun proyek nyata untuk meningkatkan keterampilan.',
            'about.timeline1.title': 'Siswa Rekayasa Perangkat Lunak',
            'about.timeline1.place': 'SMK Al Falah',
            'about.timeline2.title': 'Pengembang Web Freelance',
            'about.timeline2.place': 'Remote',
            'services.title': 'Apa yang Bisa Saya Bantu',
            'services.landing.title': 'Website Landing Page',
            'services.landing.desc': 'Landing page dengan konversi tinggi sesuai brand Anda.',
            'services.portfolio.title': 'Website Portofolio',
            'services.portfolio.desc': 'Tampilkan karya Anda dengan portofolio profesional.',
            'services.company.title': 'Profil Perusahaan',
            'services.company.desc': 'Kehadiran digital bisnis Anda dengan desain modern.',
            'services.ui.title': 'Implementasi UI',
            'services.ui.desc': 'Mengubah desain menjadi kode HTML/CSS yang presisi.',
            'contact.title': 'Mari Bekerja Sama',
            'contact.subtitle': 'Tertarik bekerja sama atau berdiskusi proyek? Silakan hubungi saya.',
            'contact.email': 'Email',
            'contact.whatsapp': 'WhatsApp',
            'contact.placeholder.name': 'Nama Anda',
            'contact.placeholder.email': 'Email Anda',
            'contact.placeholder.message': 'Pesan Anda',
            'contact.send': 'Kirim Pesan',
            'footer.text': '© 2024 Anggian Fauzi. Dibuat dengan ',
            'footer.andCode': ' dan Kode.'
        },
        zh: {
            'nav.home': '主页',
            'nav.about': '关于',
            'nav.projects': '项目',
            'nav.services': '服务',
            'nav.contact': '联系',
            'welcome.title': '欢迎 👋',
            'welcome.subtitle': '在一个地方管理和浏览我的数字作品。',
            'welcome.desc': '在这里您可以查看项目、服务以及我作为网页开发者的旅程。',
            'hero.title': '专注于简洁现代界面的网页开发者',
            'hero.description': '我专注于用户体验和整洁代码，构建快速、功能完善、视觉精致的网站。',
            'cta.viewProjects': '查看项目',
            'cta.contactMe': '联系我',
            'value.title': '我擅长的事',
            'value.clean.title': '干净且结构化的代码',
            'value.clean.desc': '使用最佳实践编写可维护、可扩展的代码。',
            'value.ui.title': '现代 UI/UX 设计',
            'value.ui.desc': '简约、美观、以用户为中心的界面。',
            'value.responsive.title': '响应迅速且快速的网站',
            'value.responsive.desc': '针对所有设备进行了优化，性能流畅。',
            'skills.title': '技能与技术',
            'projects.title': '精选项目',
            'projects.viewDetails': '查看详情',
            'projects.preview': '预览网站',
            'projects.visit': '访问项目',
            'projects.school.title': '学校网站系统',
            'projects.school.desc': '完整的学校网站，集成信息系统、新闻和图库。',
            'projects.dashboard.title': '管理后台',
            'projects.dashboard.desc': '用于管理学生数据和学术报告的综合仪表板。',
            'projects.kantin.title': '在线食堂',
            'projects.kantin.desc': '通过管理员面板实时管理菜单、订单和销售报告的在线食堂应用。',
            'cta.title': '准备好一起构建伟大的作品了吗？',
            'about.title': '关于我',
            'about.lead': '我是软件工程专业学生，对网页开发充满兴趣。我相信优秀的网站不仅要美观，还要结构清晰、易于使用。',
            'about.body': '我持续学习新技术并通过实践项目提升技能。',
            'about.timeline1.title': '软件工程学生',
            'about.timeline1.place': 'SMK Al Falah',
            'about.timeline2.title': '自由职业网页开发者',
            'about.timeline2.place': '远程',
            'services.title': '我能帮助你做什么',
            'services.landing.title': '落地页网站',
            'services.landing.desc': '为你的品牌量身打造高转化率的落地页。',
            'services.portfolio.title': '作品集网站',
            'services.portfolio.desc': '用专业的作品集展示你的作品。',
            'services.company.title': '公司简介网站',
            'services.company.desc': '用现代设计打造企业的数字形象。',
            'services.ui.title': 'UI 实现',
            'services.ui.desc': '将设计转化为像素级精确的 HTML/CSS 代码。',
            'contact.title': '一起合作吧',
            'contact.subtitle': '如果有合作意向或想讨论项目，欢迎联系我。',
            'contact.email': '邮箱',
            'contact.whatsapp': 'WhatsApp',
            'contact.placeholder.name': '你的名字',
            'contact.placeholder.email': '你的邮箱',
            'contact.placeholder.message': '你的留言',
            'contact.send': '发送消息',
            'footer.text': '© 2024 Anggian Fauzi. 由 ',
            'footer.andCode': ' 与代码。'
        },
        ar: {
            'nav.home': 'الرئيسية',
            'nav.about': 'نبذة',
            'nav.projects': 'المشاريع',
            'nav.services': 'الخدمات',
            'nav.contact': 'اتصال',
            'welcome.title': 'مرحبًا 👋',
            'welcome.subtitle': 'إدارة واستكشاف أعمالي الرقمية في مكان واحد.',
            'welcome.desc': 'هنا يمكنك عرض المشاريع والخدمات ورحلتي كمطور ويب.',
            'hero.title': 'مطور ويب شغوف بالواجهات النظيفة والحديثة',
            'hero.description': 'أبني مواقع سريعة وعملية وأنيقة بصريًا مع تركيز قوي على تجربة المستخدم ونظافة الكود.',
            'cta.viewProjects': 'عرض المشاريع',
            'cta.contactMe': 'تواصل معي',
            'value.title': 'أفضل ما أقدمه',
            'value.clean.title': 'كود نظيف ومنظم',
            'value.clean.desc': 'كود قابل للقراءة والتوسّع باستخدام أفضل الممارسات.',
            'value.ui.title': 'تصميم واجهات حديثة',
            'value.ui.desc': 'واجهات بسيطة وأنيقة ومتمحورة حول المستخدم.',
            'value.responsive.title': 'مواقع سريعة ومتجاوبة',
            'value.responsive.desc': 'محسّنة لجميع الأجهزة بأداء سلس.',
            'skills.title': 'المهارات والتقنيات',
            'projects.title': 'مشاريع مختارة',
            'projects.viewDetails': 'عرض التفاصيل',
            'projects.preview': 'معاينة الموقع',
            'projects.visit': 'زيارة المشروع',
            'projects.school.title': 'نظام موقع المدرسة',
            'projects.school.desc': 'موقع مدرسة كامل مع نظام معلومات متكامل، أخبار ومعرض.',
            'projects.dashboard.title': 'لوحة تحكم الإدارة',
            'projects.dashboard.desc': 'لوحة شاملة لإدارة بيانات الطلاب والتقارير الأكاديمية.',
            'projects.kantin.title': 'الكانتين الإلكتروني',
            'projects.kantin.desc': 'تطبيق مقصف إلكتروني لإدارة القوائم والطلبات وتقارير المبيعات في الوقت الفعلي عبر لوحة التحكم للمشرفين.',
            'cta.title': 'جاهز لبناء شيء رائع معًا؟',
            'about.title': 'نبذة عني',
            'about.lead': 'أنا طالب هندسة برمجيات مهتم بتطوير الويب. أؤمن أن المواقع العظيمة ليست جميلة فحسب، بل منظمة وسهلة الاستخدام.',
            'about.body': 'أتعلم باستمرار تقنيات جديدة وأبني مشاريع عملية لتحسين مهاراتي.',
            'about.timeline1.title': 'طالب هندسة برمجيات',
            'about.timeline1.place': 'SMK Al Falah',
            'about.timeline2.title': 'مطور ويب مستقل',
            'about.timeline2.place': 'عن بُعد',
            'services.title': 'بماذا يمكنني المساعدة',
            'services.landing.title': 'موقع صفحة هبوط',
            'services.landing.desc': 'صفحات هبوط عالية التحويل مخصصة لعلامتك التجارية.',
            'services.portfolio.title': 'موقع معرض أعمال',
            'services.portfolio.desc': 'اعرض أعمالك من خلال معرض احترافي.',
            'services.company.title': 'ملف الشركة',
            'services.company.desc': 'حضور رقمي لأعمالك بتصميم حديث.',
            'services.ui.title': 'تنفيذ واجهات المستخدم',
            'services.ui.desc': 'تحويل التصميم إلى كود HTML/CSS دقيق.',
            'contact.title': 'لنعمل معًا',
            'contact.subtitle': 'إذا كنت مهتمًا بالتعاون أو مناقشة مشروع، فلا تتردد في التواصل.',
            'contact.email': 'البريد الإلكتروني',
            'contact.whatsapp': 'واتساب',
            'contact.placeholder.name': 'اسمك',
            'contact.placeholder.email': 'بريدك الإلكتروني',
            'contact.placeholder.message': 'رسالتك',
            'contact.send': 'إرسال الرسالة',
            'footer.text': '© 2024 Anggian Fauzi. تم إنشاؤه باستخدام ',
            'footer.andCode': ' وشفرة.'
        },
        ja: {
            'nav.home': 'ホーム',
            'nav.about': '概要',
            'nav.projects': 'プロジェクト',
            'nav.services': 'サービス',
            'nav.contact': 'お問い合わせ',
            'welcome.title': 'ようこそ 👋',
            'welcome.subtitle': 'デジタル作品を一箇所で管理・閲覧できます。',
            'welcome.desc': 'ここではプロジェクト、サービス、そして私のWeb開発者としての歩みを確認できます。',
            'hero.title': 'クリーンでモダンなインターフェースに情熱を持つWeb開発者',
            'hero.description': 'ユーザー体験とクリーンなコードに重点を置き、速くて機能的で洗練されたウェブサイトを構築します。',
            'cta.viewProjects': 'プロジェクトを見る',
            'cta.contactMe': 'お問い合わせ',
            'value.title': '私の得意分野',
            'value.clean.title': 'クリーンで構造化されたコード',
            'value.clean.desc': 'ベストプラクティスに基づいた読みやすく拡張性のあるコード。',
            'value.ui.title': 'モダンなUI/UXデザイン',
            'value.ui.desc': 'ミニマルで美しく、ユーザー中心のインターフェース。',
            'value.responsive.title': 'レスポンシブで高速なウェブサイト',
            'value.responsive.desc': 'すべてのデバイスで最適化され、スムーズなパフォーマンス。',
            'skills.title': 'スキルと技術',
            'projects.title': '選定プロジェクト',
            'projects.viewDetails': '詳細を見る',
            'projects.preview': 'サイトをプレビュー',
            'projects.visit': 'プロジェクトへ',
            'projects.school.title': '学校ウェブサイトシステム',
            'projects.school.desc': '情報システム、ニュース、ギャラリーを統合した完全な学校サイト。',
            'projects.dashboard.title': '管理ダッシュボード',
            'projects.dashboard.desc': '学生データと学術レポートを管理するための包括的なダッシュボード。',
            'projects.kantin.title': 'オンライン食堂',
            'projects.kantin.desc': '管理者用ダッシュボードでメニュー、注文、売上レポートをリアルタイムに管理するオンライン食堂アプリ。',
            'cta.title': '一緒に素晴らしいものを作りましょう！',
            'about.title': '私について',
            'about.lead': '私はソフトウェア工学の学生で、Web開発に強い関心を持っています。優れたウェブサイトは見た目が美しいだけでなく、構造が明確で使いやすいと信じています。',
            'about.body': '新しい技術を継続的に学び、実際のプロジェクトを通じてスキルを向上させています。',
            'about.timeline1.title': 'ソフトウェア工学の学生',
            'about.timeline1.place': 'SMK Al Falah',
            'about.timeline2.title': 'フリーランスWeb開発者',
            'about.timeline2.place': 'リモート',
            'services.title': 'お手伝いできること',
            'services.landing.title': 'ランディングページ',
            'services.landing.desc': 'ブランドに合わせた高コンバージョンのランディングページ。',
            'services.portfolio.title': 'ポートフォリオサイト',
            'services.portfolio.desc': '作品をプロフェッショナルに見せるポートフォリオ。',
            'services.company.title': '会社概要サイト',
            'services.company.desc': '近代的なデザインで企業のデジタルプレゼンスを構築。',
            'services.ui.title': 'UI実装',
            'services.ui.desc': 'デザインをピクセル単位で正確なHTML/CSSコードに変換。',
            'contact.title': '一緒に働きましょう',
            'contact.subtitle': 'コラボやプロジェクトの相談をご希望の場合は、お気軽にご連絡ください。',
            'contact.email': 'メール',
            'contact.whatsapp': 'WhatsApp',
            'contact.placeholder.name': 'お名前',
            'contact.placeholder.email': 'メールアドレス',
            'contact.placeholder.message': 'メッセージ',
            'contact.send': 'メッセージを送信',
            'footer.text': '© 2024 Anggian Fauzi. 作成ツール: ',
            'footer.andCode': ' とコード。'
        },
        ko: {
            'nav.home': '홈',
            'nav.about': '소개',
            'nav.projects': '프로젝트',
            'nav.services': '서비스',
            'nav.contact': '연락처',
            'welcome.title': '환영합니다 👋',
            'welcome.subtitle': '한 곳에서 나의 디지털 작업을 관리하고 확인하세요.',
            'welcome.desc': '여기에서 프로젝트, 서비스, 그리고 웹 개발자로서의 여정을 볼 수 있습니다.',
            'hero.title': '깔끔하고 현대적인 인터페이스에 열정을 가진 웹 개발자',
            'hero.description': '사용자 경험과 깔끔한 코드에 중점을 두고 빠르고 기능적인 세련된 웹사이트를 만듭니다.',
            'cta.viewProjects': '프로젝트 보기',
            'cta.contactMe': '문의하기',
            'value.title': '내가 가장 잘하는 일',
            'value.clean.title': '깔끔하고 구조적인 코드',
            'value.clean.desc': '베스트 프랙티스를 기반으로 한 가독성과 확장성이 높은 코드.',
            'value.ui.title': '현대적인 UI/UX 디자인',
            'value.ui.desc': '미니멀하고 미려하며 사용자 중심의 인터페이스.',
            'value.responsive.title': '반응형이고 빠른 웹사이트',
            'value.responsive.desc': '모든 기기에 최적화되어 부드러운 성능 제공.',
            'skills.title': '기술 및 테크',
            'projects.title': '선정된 프로젝트',
            'projects.viewDetails': '자세히 보기',
            'projects.preview': '웹사이트 미리보기',
            'projects.visit': '프로젝트 방문',
            'projects.school.title': '학교 웹사이트 시스템',
            'projects.school.desc': '통합 정보 시스템, 뉴스, 갤러리를 포함한 완전한 학교 웹사이트.',
            'projects.dashboard.title': '관리자 대시보드',
            'projects.dashboard.desc': '학생 데이터와 학업 보고서를 관리하기 위한 종합 대시보드.',
            'projects.kantin.title': '온라인 구내식당',
            'projects.kantin.desc': '관리자 대시보드를 통해 메뉴, 주문 및 실시간 판매 보고서를 관리하는 온라인 구내식당 앱.',
            'cta.title': '함께 멋진 것을 만들어봐요!',
            'about.title': '소개',
            'about.lead': '저는 소프트웨어 공학 학생으로 웹 개발에 큰 관심이 있습니다. 훌륭한 웹사이트는 보기만 좋을 뿐 아니라 구조가 명확하고 사용하기 쉬워야 한다고 믿습니다.',
            'about.body': '저는 새로운 기술을 지속적으로 배우고 실제 프로젝트를 통해 실력을 향상합니다.',
            'about.timeline1.title': '소프트웨어 공학 학생',
            'about.timeline1.place': 'SMK Al Falah',
            'about.timeline2.title': '프리랜서 웹 개발자',
            'about.timeline2.place': '원격',
            'services.title': '도와드릴 수 있는 것',
            'services.landing.title': '랜딩 페이지',
            'services.landing.desc': '브랜드에 맞춘 높은 전환율의 랜딩 페이지.',
            'services.portfolio.title': '포트폴리오 웹사이트',
            'services.portfolio.desc': '작품을 전문적으로 보여주는 포트폴리오.',
            'services.company.title': '회사 소개',
            'services.company.desc': '현대적인 디자인으로 비즈니스의 디지털 존재감 구축.',
            'services.ui.title': 'UI 구현',
            'services.ui.desc': '디자인을 픽셀 단위로 정확한 HTML/CSS 코드로 변환.',
            'contact.title': '함께 일해요',
            'contact.subtitle': '협업 또는 프로젝트 논의를 원하시면 언제든지 연락주세요.',
            'contact.email': '이메일',
            'contact.whatsapp': 'WhatsApp',
            'contact.placeholder.name': '이름',
            'contact.placeholder.email': '이메일',
            'contact.placeholder.message': '메시지',
            'contact.send': '메시지 보내기',
            'footer.text': '© 2024 Anggian Fauzi. 제작 도구: ',
            'footer.andCode': ' 그리고 코드.'
        }
    };
    const defaultLang = 'en';
    const rtlLangs = new Set(['ar']);
    const savedLang = localStorage.getItem('lang') || defaultLang;
    
    function applyTranslations(lang) {
        const dict = translations[lang] || translations[defaultLang];
        const nodes = document.querySelectorAll('[data-i18n]');
        nodes.forEach(node => {
            const key = node.getAttribute('data-i18n');
            const attr = node.getAttribute('data-i18n-attr');
            const text = dict[key];
            if (typeof text === 'string') {
                node.style.transition = 'opacity 150ms ease';
                node.style.opacity = '0';
                setTimeout(() => {
                    if (attr) {
                        node.setAttribute(attr, text);
                    } else {
                        node.textContent = text;
                    }
                    node.style.opacity = '1';
                }, 160);
            }
        });
        document.documentElement.setAttribute('dir', rtlLangs.has(lang) ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        const codeEl = document.getElementById('langCode');
        if (codeEl) {
            codeEl.textContent = lang === 'zh' ? '中文' : lang.toUpperCase();
        }
        localStorage.setItem('lang', lang);
    }
    
    applyTranslations(savedLang);
    
    // ===== 1. INITIALIZE AOS ANIMATION =====
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });
    
    // ===== 2. THEME SWITCHER =====
    const themeBtns = document.querySelectorAll('.theme-btn');
    const html = document.documentElement;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateActiveThemeBtn(savedTheme);
    }
    
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateActiveThemeBtn(theme);
            
            // Re-init particles with new theme colors if needed
            if (typeof window.initParticles === 'function') {
                window.initParticles();
            }
        });
    });
    
    function updateActiveThemeBtn(theme) {
        themeBtns.forEach(btn => {
            if (btn.getAttribute('data-theme') === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // ===== 3. MOBILE NAVIGATION TOGGLE =====
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const langCurrent = document.getElementById('langCurrent');
    const langMenu = document.getElementById('langMenu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Icon animation
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    document.body.style.overflow = '';
                }
            });
        });
    }
    
    // Desktop language switcher
    if (langCurrent && langMenu) {
        langCurrent.addEventListener('click', () => {
            const expanded = langCurrent.getAttribute('aria-expanded') === 'true';
            langCurrent.setAttribute('aria-expanded', (!expanded).toString());
            langMenu.classList.toggle('show');
        });
        langMenu.querySelectorAll('button[role="menuitem"][data-lang]').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                // setLanguage is provided by i18n system
                const lg = lang || 'en';
                localStorage.setItem('lang', lg);
                if (typeof applyTranslations === 'function') {
                    applyTranslations(lg);
                } else {
                    const event = new Event('languagechange');
                    document.dispatchEvent(event);
                }
                langCurrent.setAttribute('aria-expanded', 'false');
                langMenu.classList.remove('show');
            });
        });
        document.addEventListener('click', (e) => {
            if (!langMenu.contains(e.target) && !langCurrent.contains(e.target)) {
                langCurrent.setAttribute('aria-expanded', 'false');
                langMenu.classList.remove('show');
            }
        });
    }
    
    // ===== 4. HEADER SCROLL EFFECT =====
    const header = document.querySelector('.header');
    
    // Initial state check for mobile
    function checkHeader() {
        if (window.innerWidth <= 768) {
            if (window.scrollY <= 10) {
                header.style.background = 'transparent';
                header.style.boxShadow = 'none';
                header.style.backdropFilter = 'none';
                header.style.borderBottom = 'none';
            } else {
                header.style.background = 'rgba(10, 14, 23, 0.9)';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
            }
        } else {
            // Desktop behavior
            if (window.scrollY > 50) {
                header.style.background = 'rgba(10, 14, 23, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
                header.style.padding = '0.5rem 0';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'rgba(10, 14, 23, 0.8)';
                header.style.boxShadow = 'none';
                header.style.padding = '1rem 0';
                header.style.backdropFilter = 'blur(10px)';
            }
        }
    }
    
    window.addEventListener('scroll', checkHeader);
    window.addEventListener('resize', checkHeader);
    checkHeader(); // Init
    
    // React to language changes globally
    document.addEventListener('languagechange', () => {
        const lang = localStorage.getItem('lang') || 'en';
        // reuse i18n apply function if available
        if (typeof applyTranslations === 'function') {
            applyTranslations(lang);
        }
    });
    
    // Mobile language buttons
    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            localStorage.setItem('lang', lang);
            if (typeof applyTranslations === 'function') {
                applyTranslations(lang);
            }
        });
    });
    
    // ===== 5. ACTIVE NAV LINK TRACKING =====
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);
    
    // ===== 6. SKILL BARS ANIMATION =====
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.skill-progress');
    let animated = false;
    
    function animateSkills() {
        if (!skillsSection) return;
        
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        
        if (sectionPos < screenPos && !animated) {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            animated = true;
        }
    }
    
    window.addEventListener('scroll', animateSkills);
    
    // ===== 7. PARTICLE ANIMATION =====
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray;
        
        // Resize canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5; // Small particles
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                
                // Get color from CSS variable or default
                const style = getComputedStyle(document.body);
                this.color = style.getPropertyValue('--primary').trim() || '#3b82f6';
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Wrap around screen
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function initParticles() {
    particlesArray = [];
    // Optimize for mobile: fewer particles
    const isMobile = window.innerWidth <= 768;
    const density = isMobile ? 60000 : 15000; // Much higher number = significantly fewer particles
    const numberOfParticles = (canvas.width * canvas.height) / density;
    
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
                
                // Connect particles
                for (let j = i; j < particlesArray.length; j++) {
                    const dx = particlesArray[i].x - particlesArray[j].x;
                    const dy = particlesArray[i].y - particlesArray[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        const style = getComputedStyle(document.body);
                        const color = style.getPropertyValue('--primary').trim() || '#3b82f6';
                        
                        ctx.strokeStyle = color;
                        ctx.lineWidth = 0.2;
                        ctx.globalAlpha = 1 - (distance / 100); // Fade out
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                        ctx.globalAlpha = 1; // Reset
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }
        
        initParticles();
        animateParticles();
        
        // Expose to global for theme switcher
        window.initParticles = initParticles;
    }

    // ===== 8. PROJECT MODAL =====
    const modal = document.getElementById('projectModal');
    const modalBody = document.querySelector('.modal-body');
    const closeBtn = document.querySelector('.close-modal');
    const viewBtns = document.querySelectorAll('.view-project-btn');
    
    // Project Data
    const projects = {
        1: {
            image: "assets/project-sekolah.jpg",
            tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
            link: "#"
        },
        2: {
            image: "assets/project-dashboard.jpg",
            tags: ["Laravel", "Tailwind CSS", "Chart.js", "Vue.js"],
            link: "#"
        },
        3: {
            image: null, // Placeholder will be used
            icon: "fas fa-utensils",
            tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            link: "https://kantin.gamer.gd/login.php"
        }
    };
    const projectI18nKeys = { '1': 'projects.school', '2': 'projects.dashboard', '3': 'projects.kantin' };
    
    if (modal) {
        viewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const projectId = btn.getAttribute('data-project');
                const project = projects[projectId];
                
                if (project) {
                    const lang = localStorage.getItem('lang') || 'en';
                    const dict = translations[lang] || translations['en'];
                    const base = projectI18nKeys[projectId];
                    const titleText = (base && dict[`${base}.title`]) ? dict[`${base}.title`] : '';
                    const descText = (base && dict[`${base}.desc`]) ? dict[`${base}.desc`] : '';
                    const visitLabel = dict['projects.visit'] || 'Visit Project';
                    
                    // Build Modal Content
                    let imgHtml = '';
                    if (project.image) {
                        imgHtml = `<img src="${project.image}" alt="${titleText || ''}" class="modal-img">`;
                    } else {
                        imgHtml = `<div class="modal-placeholder"><i class="${project.icon} fa-4x"></i></div>`;
                    }
                    
                    const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
                    
                    modalBody.innerHTML = `
                        ${imgHtml}
                        <div class="modal-info">
                            <h3 class="modal-title">${titleText || ''}</h3>
                            <div class="modal-tags">${tagsHtml}</div>
                            <p class="modal-desc">${descText || ''}</p>
                            <a href="${project.link}" class="btn btn-primary">${visitLabel} <i class="fas fa-external-link-alt"></i></a>
                        </div>
                    `;
                    
                    modal.style.display = 'flex';
                    // Trigger reflow
                    void modal.offsetWidth;
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }
            });
        });
        
        // Close Modal
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300); // Wait for transition
        });
        
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }, 300);
            }
        });
    }

    // ===== 9. CONTACT FORM =====
    const contactFormEl = document.querySelector('.contact-form');
    function showToast(message) {
        const el = document.createElement('div');
        el.className = 'toast';
        el.textContent = message;
        document.body.appendChild(el);
        requestAnimationFrame(() => el.classList.add('show'));
        setTimeout(() => {
            el.classList.remove('show');
            setTimeout(() => el.remove(), 300);
        }, 3000);
    }
    const params = new URLSearchParams(location.search);
    if (params.get('sent') === '1') {
        showToast('Message sent successfully.');
        history.replaceState(null, '', location.pathname + location.hash);
    }
    if (contactFormEl) {
        const next = document.createElement('input');
        next.type = 'hidden';
        next.name = '_next';
        const url = `${location.origin}${location.pathname}?sent=1#contact`;
        next.value = url;
        contactFormEl.appendChild(next);
    }

    // ===== 10. MOBILE PROJECT CARD CLICK =====
    // Allow clicking the entire card on mobile to open details
    if (window.innerWidth <= 768) {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Prevent double firing if clicking the button directly
                if (e.target.closest('.view-project-btn')) return;
                
                const btn = card.querySelector('.view-project-btn');
                if (btn) {
                    btn.click();
                }
            });
        });
    }
});
