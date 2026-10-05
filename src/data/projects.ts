import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'labamen-accounting-portal',
    name: 'Lab. Akuntansi Menengah',
    purpose: 'Redesign portal praktikum Labamen Universitas Gunadarma — distribusi modul, materi, dan software akuntansi dalam satu platform terpadu.',
    imageUrl: '/images/projects/labamen-portal.jpg',
    technologies: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Digital Workflow Architecture', 'UI/UX Redesign'],
    contributions: [
      'Merancang ulang (Redesign) antarmuka portal laboratorium agar modern, responsif, dan mudah diakses oleh ribuan mahasiswa',
      'Mengembangkan arsitektur alur kerja (workflow) digital terpadu untuk modul praktikum, materi spreadsheet/Excel, dan software akuntansi',
      'Mengoptimalkan sistem navigasi portal terintegrasi untuk kebutuhan praktikum komputasi akuntansi berbasis teknologi',
      'Menyediakan saluran komunikasi dan informasi terpusat antara tim asisten laboratorium, instruktur, dan mahasiswa praktikan'
    ],
    technicalChallenge:
      'Menata dan menyederhanakan alur distribusi materi praktikum, modul digital, serta software akuntansi yang sebelumnya terpisah menjadi satu portal digital yang terpadu dan efisien.',
    status: 'Sistem Aktif',
    links: [
      {
        type: 'live',
        url: 'https://www.ak-menengah.com/',
        label: 'Kunjungi ak-menengah.com',
      },
    ],
    caseStudy: {
      overview:
        'Redesign menyeluruh antarmuka web dan rekayasa alur kerja (workflow) digital Laboratorium Akuntansi Menengah (ak-menengah.com) Universitas Gunadarma, menghadirkan portal praktikum terpadu modern yang melayani ribuan mahasiswa akuntansi.',
      problem:
        'Portal sebelumnya memiliki antarmuka yang lawas dan alur distribusi modul praktikum, software, serta lembar kerja Excel yang membingungkan mahasiswa praktikan sehingga menghambat efisiensi perkuliahan praktikum.',
      role: 'IT Programmer & Lead Redesign Architect',
      architecture:
        'Portal praktikum modern terintegrasi dengan alur terstruktur: Beranda informasi -> Katalog & Unduh Modul Praktikum -> Repositori Materi Spreadsheet/Excel -> Distribusi Software Akuntansi Terlisensi -> Panduan & Ketentuan Praktikum.',
      implementation:
        'Merancang ulang tampilan UI/UX yang modern, profesional, dan responsif dengan identitas resmi Labamen, merapikan alur navigasi mahasiswa, serta mengoptimalkan kecepatan akses materi praktikum digital.',
      technicalConsiderations:
        'Aksesibilitas mobile-first, load time cepat untuk file modul dan dokumen praktikum berukuran besar, serta kejelasan tipografi instruksional.',
      securityConsiderations:
        'Validasi keamanan distribusi berkas modul dan tautan unduhan software praktikum berlisensi kampus.',
      challenges:
        'Menyelaraskan kebutuhan akademis pengajar/instruktur, asisten laboratorium, dan mahasiswa praktikan ke dalam satu antarmuka yang bersih tanpa kurva belajar yang rumit.',
      lessonsLearned:
        'Penyederhanaan alur navigasi dari 5 langkah terpisah menjadi navigasi 1-klik terbukti meningkatkan kepuasan mahasiswa dan mengurangi kendala teknis saat praktikum berlangsung.',
      result:
        'Platform ak-menengah.com aktif digunakan secara live oleh seluruh civitas akademika praktikum Laboratorium Akuntansi Menengah Universitas Gunadarma.',
    },
  },
  {
    slug: 'labamen-admin-dashboard',
    name: 'Labamen Internal Operations & Admin Dashboard',
    purpose: 'Dashboard operasional internal Labamen — manajemen data praktikum, jadwal asisten, dan modul ujian berbasis PHP dan MySQL.',
    imageUrl: '/images/projects/labamen-admin.jpg',
    technologies: ['PHP', 'MySQL', 'Relational Database', 'Admin Dashboard', 'CRUD Operations'],
    contributions: [
      'Mengembangkan dashboard admin internal berbasis PHP dan MySQL untuk operasional harian laboratorium',
      'Merancang arsitektur basis data relasional untuk pengelolaan data praktikan, modul ujian, dan jadwal asisten',
      'Membangun sistem kontrol akses dan manajemen autentikasi untuk tim asisten laboratorium',
      'Mengotomasi pencatatan dan distribusi materi praktikum guna meningkatkan efisiensi operasional'
    ],
    technicalChallenge:
      'Menjaga integritas data relasional antara jadwal praktikum, modul ujian, dan data ratusan mahasiswa dalam sistem kontrol database tertutup.',
    status: null,
    links: [],
    caseStudy: {
      overview:
        'Sistem dashboard operasional dan basis data internal Laboratorium Akuntansi Menengah Universitas Gunadarma, dibangun dengan PHP dan MySQL untuk mengelola administrasi praktikum secara terpusat.',
      problem:
        'Proses administrasi praktikum, penjadwalan asisten, dan pengelolaan modul ujian sebelumnya masih memerlukan pencatatan manual yang memakan waktu dan berisiko redudansi data.',
      role: 'IT Programmer & Database Developer',
      architecture:
        'Aplikasi dashboard berbasis web intranet dengan basis data relasional MySQL dan server PHP untuk pemrosesan logika bisnis internal.',
      implementation:
        'Mengimplementasikan modul CRUD data praktikan, panel monitoring jadwal asisten, dan repositori modul praktikum digital berbasis PHP.',
      technicalConsiderations:
        'Optimalisasi kueri SQL untuk pemrosesan data mahasiswa serta antarmuka admin yang intuitif dan responsif.',
      securityConsiderations:
        'Sistem sesi terproteksi, sanitasi input untuk mencegah SQL injection, dan pembatasan akses hanya untuk lingkungan internal laboratorium.',
      challenges:
        'Menyusun struktur tabel relasional yang fleksibel terhadap perubahan kurikulum praktikum dari semester ke semester.',
      lessonsLearned:
        'Penerapan normalisasi database dan struktur indeks yang tepat mempercepat proses query laporan operasional lab.',
      result:
        'Dashboard operasional internal aktif digunakan untuk mendukung kelancaran seluruh kegiatan praktikum akuntansi di laboratorium.',
    },
  },
  {
    slug: 'cloudflare-edge-tunnel-analytics',
    name: 'Cloudflare Edge Analytics & Zero-Trust Tunnel Infrastructure',
    purpose: 'Self-hosted web via Cloudflare Tunnel terenkripsi tanpa port forwarding — monitoring trafik produksi real-time, DDoS protection, dan edge caching.',
    imageUrl: '/images/projects/cloudflare-tunnel.jpg',
    technologies: ['Cloudflare Tunnel', 'Edge Analytics', 'Zero Trust', 'Traffic Monitoring', 'DDoS Protection', 'CDN Caching'],
    contributions: [
      'Mengonfigurasi daemon cloudflared untuk menyalurkan traffic web portofolio dan homelab secara aman melalui outbound-only tunnel',
      'Mengeliminasi kebutuhan port forwarding dan bypass CGNAT tanpa mengekspos alamat IP publik server lokal',
      'Memantau dan menganalisis performa trafik produksi global (215.65k+ total requests, 5.7k visits, 1.25 GB bandwidth)',
      'Mengoptimalkan edge caching, proteksi WAF, dan SSL/TLS termination otomatis pada jaringan Anycast Cloudflare'
    ],
    technicalChallenge:
      'Mempertahankan performa throughput tinggi dan kestabilan koneksi outbound tunnel 24/7 dari bare-metal server lokal ke edge network global.',
    status: 'Sistem Aktif',
    links: [
      {
        type: 'live',
        url: '/projects/cloudflare-edge-tunnel-analytics',
        label: 'Lihat Analisis & Arsitektur',
      },
    ],
    caseStudy: {
      overview:
        'Infrastruktur edge networking dan pemantauan analitik web real-time yang menghubungkan bare-metal homelab server dengan jaringan global Cloudflare menggunakan Cloudflare Zero Trust Tunnel.',
      problem:
        'Hosting web mandiri dari server lokal sering terhalang oleh ISP CGNAT, risiko keamanan dari port forwarding terbuka di router rumah, dan minimnya observabilitas trafik.',
      role: 'DevOps & Systems Administrator',
      architecture:
        'Client Requests -> Cloudflare Anycast Edge (DDoS/WAF & Edge Caching) -> Encrypted Outbound Tunnel (cloudflared daemon) -> Local Reverse Proxy (Nginx) -> Application Services.',
      implementation:
        'Menerapkan tunnel terenkripsi dua arah tanpa port masuk terbuka, konfigurasi DNS Anycast Cloudflare, serta integrasi dashboard analitik trafik global untuk pemantauan throughput 24/7.',
      technicalConsiderations:
        'Penyetelan cache hit rate pada aset statis, pemantauan status koneksi tunnel, dan isolasi jaringan internal.',
      securityConsiderations:
        'Outbound-only connection (tidak ada port terbuka di router), perlindungan DDoS otomatis, dan enkripsi SSL/TLS end-to-end.',
      challenges:
        'Menjaga ketersediaan tunnel daemon dengan auto-restart service di Linux systemd serta optimasi buffer streaming.',
      lessonsLearned:
        'Penggunaan Cloudflare Tunnel memotong 100% vektor serangan scanning port eksternal dan mempercepat load time global berkat CDN edge caching.',
      result:
        'Infrastruktur aktif melayani lebih dari 215.000 requests dengan traffic global dari Amerika Serikat, Indonesia, Belgia, Jepang, hingga Eropa.',
    },
  },
  {
    slug: 'kerjain-local-service-marketplace',
    name: 'Kerjain (Friendly Local Service Marketplace)',
    purpose: 'Marketplace jasa rumah tangga — menghubungkan konsumen dengan mitra kerja lokal secara transparan dan mudah.',
    imageUrl: '/images/logos/kerjain.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Vercel'],
    contributions: [
      'Merancang arsitektur aplikasi marketplace web responsif untuk kebutuhan rumah tangga harian',
      'Mengintegrasikan caching data asynchronous dan client state management menggunakan TanStack Query',
      'Menerapkan sistem pencarian mitra kerja dan komunikasi kebutuhan tugas mikro yang transparan',
      'Mengoptimalkan performa mobile-first untuk akses cepat di berbagai jaringan seluler di Indonesia'
    ],
    technicalChallenge: 'Memastikan alur penemuan mitra jasa dan pemesanan tugas mikro berjalan lancar dengan latensi rendah pada perangkat mobile.',
    status: 'Sistem Aktif',
    links: [
      {
        type: 'live',
        url: 'https://kerjainv2.vercel.app/',
        label: 'Kunjungi Web Kerjain',
      },
    ],
    caseStudy: {
      overview:
        'Kerjain adalah platform local service marketplace yang mempertemukan konsumen dengan mitra kerja terpercaya untuk menyelesaikan kebutuhan bantuan mikro dan pekerjaan rumah tangga harian secara aman, praktis, dan transparan di Indonesia.',
      problem:
        'Konsumen sering kesulitan menemukan penyedia jasa harian yang terpercaya dengan tarif transparan, sementara pekerja lepas lokal membutuhkan saluran pemasaran jasa yang mudah diakses.',
      role: 'Full-Stack Developer',
      architecture: null,
      implementation:
        'Dikembangkan menggunakan Next.js dengan antarmuka modern Tailwind CSS, proteksi rute pengguna, dan sistem query asynchronous TanStack Query yang di-deploy di Vercel edge infrastructure.',
      technicalConsiderations:
        'Desain antarmuka mobile-first responsif dengan waktu muat halaman cepat untuk kenyamanan pengguna di seluruh Indonesia.',
      securityConsiderations: 'Validasi form pemesanan jasa terenkripsi dan rute pengguna terproteksi.',
      challenges: 'Menyajikan alur pemesanan bantuan mikro yang sangat mudah dipahami oleh pengguna awam tanpa gesekan teknis.',
      lessonsLearned: 'Penerapan caching client-side TanStack Query meningkatkan kecepatan respons navigasi secara drastis.',
      result:
        'Platform aktif beroperasi dan dapat diakses publik melalui kerjainv2.vercel.app.',
    },
  },
  {
    slug: 'pesonatari-cultural-ticketing',
    name: 'Pesona Tari (Indonesian Cultural Performing Arts Ticketing Platform)',
    purpose: 'Platform tiket digital pertunjukan seni tari Nusantara — reservasi online dengan pembayaran QRIS dan manajemen kuota tiket.',
    imageUrl: '/images/projects/pesonatari.jpg',
    technologies: ['PHP', 'MySQL', 'CSS3', 'QRIS Payment Gateway', 'Relational Database', 'Ticketing Workflow'],
    contributions: [
      'Merancang dan membangun arsitektur platform web pemesanan tiket pertunjukan seni tari Nusantara berbasis PHP dan basis data MySQL',
      'Mengintegrasikan sistem pembayaran QRIS otomatis real-time dengan verifikasi kode pesanan unik (order ID)',
      'Mengembangkan sistem manajemen katalog event tari kebudayaan, kuota tiket, dan ringkasan transaksi pemesanan',
      'Merancang antarmuka checkout yang responsif dan user-friendly untuk kenyamanan proses pembayaran digital pengguna'
    ],
    technicalChallenge:
      'Mengelola alur verifikasi transaksi pembayaran QRIS secara dinamis serta sinkronisasi ketersediaan kuota tiket pertunjukan berbasis basis data relasional MySQL.',
    status: 'Sistem Aktif',
    links: [
      {
        type: 'live',
        url: 'https://pesonatari.site',
        label: 'Kunjungi Pesonatari.site',
      },
    ],
    caseStudy: {
      overview:
        'Pesona Tari (pesonatari.site) adalah platform web pemesanan dan tiket digital untuk pertunjukan seni tari tradisional kebudayaan Indonesia (Langit Biru Nusantara), dilengkapi dengan gateway pembayaran digital QRIS dan sistem manajemen pemesanan terstruktur.',
      problem:
        'Pemesanan tiket pentas seni tari tradisional sering kali masih dilakukan manual melalui pesan chat atau loket fisik, menyebabkan antrean, risiko kesalahan pencatatan nomor tiket, dan keterbatasan metode pembayaran non-tunai.',
      role: 'Full-Stack Web Developer',
      architecture:
        'Arsitektur web dinamis berbasis PHP modular dan basis data relasional MySQL: Katalog Pertunjukan Tari -> Detail Event & Jadwal -> Form Reservasi Pemesan -> Modul Generate Invoice & Pembayaran QRIS -> Validasi Transaksi & Penerbitan Tiket Digital.',
      implementation:
        'Membangun sistem pemrosesan transaksi berbasis PHP native dengan database MySQL, mendesain antarmuka kustom dengan CSS modern yang elegan, serta mengintegrasikan modul pembayaran QRIS untuk proses checkout instan.',
      technicalConsiderations:
        'Kecepatan akses halaman pemesanan tiket, kejelasan informasi biaya layanan dan kode unik transaksi, serta kompatibilitas antarmuka pada layar mobile.',
      securityConsiderations:
        'Sanitasi input form reservasi untuk pencegahan SQL injection dan validasi status transaksi invoice pembayaran.',
      challenges:
        'Memastikan sinkronisasi status pembayaran QRIS berjalan akurat dan menghasilkan tiket digital dengan kode order unik tanpa duplikasi.',
      lessonsLearned:
        'Penerapan alur checkout satu layar (one-screen checkout summary) dengan kode QRIS instan mempercepat konversi pembayaran dan mempermudah pengguna.',
      result:
        'Platform aktif beroperasi secara live di pesonatari.site, memfasilitasi reservasi dan tiket pertunjukan seni budaya Nusantara secara digital.',
    },
  },
  {
    slug: 'martha-eco-infrastructure',
    name: 'Mertha (Food Waste Mitigation Platform)',
    purpose: 'Platform web pengurangan food waste — menghubungkan surplus inventori makanan dengan pembeli melalui peta geolokasi real-time.',
    imageUrl: '/images/logos/martha.png',
    technologies: ['Next.js 16', 'React 19', 'Supabase', 'Leaflet Maps', 'Zustand', 'Tailwind CSS'],
    contributions: [
      'Developed responsive user interfaces with Next.js App Router and React 19',
      'Integrated Supabase authentication and realtime database subscriptions',
      'Implemented geolocation and interactive mapping for local merchant discovery',
      'Constructed predictable client state workflows using Zustand'
    ],
    technicalChallenge: 'Ensuring seamless map rendering and low-latency inventory updates on mobile browsers.',
    status: 'Live',
    links: [
      {
        type: 'live',
        url: '/martha',
        label: 'View Project Details',
      },
    ],
    caseStudy: {
      overview:
        'A full-stack web application tailored to minimize food waste by providing businesses and communities an intuitive platform to discover and purchase surplus meals at discounted rates.',
      problem:
        'Food retailers struggle with unsold inventory near closing hours, leading to avoidable food waste and revenue loss.',
      role: 'Full-Stack Developer & Technical Lead',
      architecture: null,
      implementation:
        'Engineered modern frontend components with Next.js 16 and Tailwind CSS. Backed by Supabase PostgreSQL with row-level security and realtime synchronization.',
      technicalConsiderations:
        'Optimized map markers and image assets for fast load times on bandwidth-constrained mobile networks.',
      securityConsiderations: 'Role-based access controls and encrypted authentication via Supabase Auth.',
      challenges: 'Handling real-time synchronization of merchant stocks during high-traffic order spikes.',
      lessonsLearned: 'Modular state architecture significantly reduces unnecessary re-renders in heavy map interfaces.',
      result:
        'Successfully delivered a functional web portal with active merchant listings and responsive geolocation features.',
    },
  },
  {
    slug: 'odc-storage-datacenter',
    name: 'ODC Storage (Media & Private DNS)',
    purpose: 'Cloud storage mandiri multi-tenant dengan API gateway, streaming media, dan private AdGuard DNS di bare-metal server.',
    imageUrl: '/images/logos/odc.png',
    technologies: ['PHP', 'API Gateway', 'Multi-Tenant', 'AdGuard Home', 'Cloudflare', 'Linux'],
    contributions: [
      'Merancang arsitektur penyimpanan berkas fisik independen berbasis UUID di luar webroot publik',
      'Mengimplementasikan streaming video efisien dengan protokol HTTP Byte-Range Requests',
      'Membangun API gateway terproteksi dengan token autentikasi dan rate limiting',
      'Mengintegrasikan server DNS mandiri AdGuard Home untuk proteksi privasi dan ad-blocking jaringan'
    ],
    technicalChallenge: 'Memastikan isolasi direktori multi-tenant aman dan performa streaming media berkecepatan tinggi.',
    status: 'Sistem Aktif',
    links: [
      {
        type: 'live',
        url: 'https://datacenter.oscartambunan.my.id/',
        label: 'Kunjungi ODC Storage',
      },
    ],
    caseStudy: {
      overview:
        'ODC Storage adalah infrastruktur cloud storage mandiri dan API gateway multi-tenant yang melayani penyimpanan aset media (JPG, PNG, WEBP, PDF, MP4 byte-range streaming) serta integrasi server private DNS AdGuard Home yang aktif beroperasi.',
      problem:
        'Kebutuhan infrastruktur penyimpanan file mandiri yang terpusat untuk berbagai aplikasi web tanpa ketergantungan berlebih pada layanan cloud komersial pihak ketiga yang mahal.',
      role: 'Systems Architect & Full-Stack Infrastructure Engineer',
      architecture: null,
      implementation:
        'Dikonfigurasi di atas bare-metal Linux server dengan reverse proxy Cloudflare, gateway API multi-tenant berbasis UUID di luar webroot publik, dan protokol streaming video HTTP byte-range.',
      technicalConsiderations:
        'Isolasi direktori fisik multi-tenant, kuota penyimpanan teratur, validasi ekstensi MIME aman, dan integrasi upstream DNS terenkripsi.',
      securityConsiderations: 'Token-based API authentication, rate limiting, no-store headers, dan proteksi anti-directory traversal.',
      challenges: 'Menangani streaming file video besar tanpa buffering tinggi pada koneksi seluler.',
      lessonsLearned: 'Penerapan HTTP Byte-Range Requests dan Cloudflare CDN caching secara dramatis memotong beban I/O disk server lokal.',
      result:
        'Sistem aktif beroperasi secara live di datacenter.oscartambunan.my.id melayani kebutuhan penyimpanan berkas dan CDN privat.',
    },
  },
  {
    slug: 'virtualized-server-infrastructure',
    name: 'Virtualized Server Infrastructure',
    purpose: 'Virtualisasi bare-metal dengan Proxmox VE sebagai fondasi server dan layanan self-hosted mandiri.',
    technologies: ['Proxmox VE', 'Linux', 'Virtual Machines', 'Containers'],
    contributions: [
      'Implemented Proxmox VE for virtual machine and container management',
      'Allocated CPU, RAM, and storage resources',
      'Deployed and managed Linux-based servers',
      'Performed basic configuration and performance tuning',
      'Built the infrastructure foundation for self-hosted services',
    ],
    technicalChallenge: null, // TODO: Add technical challenge details
    status: null, // TODO: Add current project status
    links: [],
    caseStudy: {
      overview:
        'A personal virtualization environment built using Proxmox VE to serve as the backbone for self-hosted services and server management.',
      problem:
        'Needed a flexible, cost-effective infrastructure to host multiple services without relying on third-party cloud providers for every workload.',
      role: 'Infrastructure designer and system administrator. Solely responsible for planning, deploying, and maintaining the virtualization environment.',
      architecture: null, // TODO: Add architecture details or diagram description
      implementation:
        'Installed and configured Proxmox VE on physical hardware. Created and managed virtual machines and containers, allocating compute and storage resources based on workload requirements. Deployed Linux-based servers within the virtualized environment.',
      technicalConsiderations:
        'Resource allocation required balancing CPU, RAM, and storage across multiple VMs and containers. Considered performance tuning and monitoring to ensure stable operation.',
      securityConsiderations: null, // TODO: Add security details
      challenges: null, // TODO: Add specific challenges encountered
      lessonsLearned: null, // TODO: Add lessons learned
      result:
        'Successfully established a working virtualization environment capable of hosting multiple self-hosted services.',
    },
  },
  {
    slug: 'private-cloud-storage',
    name: 'Private Cloud Storage System',
    purpose: 'Private cloud storage self-hosted berbasis Nextcloud dengan akses aman melalui Cloudflare Tunnel dan multi-factor authentication.',
    technologies: [
      'Nextcloud',
      'Linux',
      'Cloudflare Tunnel',
      'Multi-Factor Authentication',
    ],
    contributions: [
      'Installed and managed Nextcloud',
      'Configured secure remote access using Cloudflare Tunnel',
      'Avoided direct public IP exposure',
      'Enabled multi-factor authentication',
      'Managed synchronization and access across devices',
      'Optimized the environment for personal self-hosted use',
    ],
    technicalChallenge: null, // TODO: Add technical challenge details
    status: null, // TODO: Add current project status
    links: [],
    caseStudy: {
      overview:
        'A self-hosted cloud storage solution built with Nextcloud, providing secure file storage and synchronization without relying on third-party cloud services.',
      problem:
        'Wanted a private cloud storage solution that provides full data ownership while maintaining accessibility from multiple devices without exposing infrastructure publicly.',
      role: 'System administrator and deployer. Handled the complete setup from installation to secure access configuration.',
      architecture: null, // TODO: Add architecture details
      implementation:
        'Deployed Nextcloud on a Linux server within the virtualized infrastructure. Configured Cloudflare Tunnel for secure remote access without exposing the server\'s public IP. Set up multi-factor authentication for additional security.',
      technicalConsiderations:
        'Balancing accessibility with security was key. Cloudflare Tunnel provided a way to expose services securely. Multi-factor authentication added an extra protection layer.',
      securityConsiderations:
        'Avoided direct public IP exposure by routing traffic through Cloudflare Tunnel. Implemented multi-factor authentication to protect user accounts.',
      challenges: null, // TODO: Add specific challenges
      lessonsLearned: null, // TODO: Add lessons learned
      result:
        'Achieved a functional private cloud storage system with secure remote access and multi-device synchronization.',
    },
  },
];
