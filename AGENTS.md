<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Typography & Content Hierarchy Rules (Universal Standard)

To maintain pristine visibility, professional balance, and consistent reading rhythm across the portfolio, all sections and entries MUST follow this strict typography and visual hierarchy standard.

---

### Level 1: Section Headings (`<h2>` - Tulisan Bab)
All section titles across the entire portfolio use the standardized `<SectionHeading />` component:
- **Title (`<h2>`)**: `text-xl sm:text-2xl font-bold text-white tracking-tight mb-2` (Hierarki visual jelas: lebih besar daripada Level 2 / Isi Bab `text-base sm:text-lg`)
- **Subtitle (`<p>`)**: `text-xs sm:text-sm text-slate-400 font-mono leading-relaxed max-w-3xl`
- **Divider**: `border-b border-white/10 pb-4 mb-8 sm:mb-12`
- Applied universally to: `Infrastructure`, `Capabilities`, `Education & Experience`, `Selected Works`, `Certifications & Honors`, `Photography & Creative Eye`, and `Get In Touch`.

---

### Level 2: Entry Entity / Organization / Institution Titles (`<h3>`)
All primary entry titles MUST have the EXACT SAME size, font weight, color, and tracking:
- **Classes**: `text-base sm:text-lg font-bold text-white tracking-tight`
- **Universality Rule**:
  - `Universitas Gunadarma` (Education)
  - `Lab. Akuntansi Menengah, Universitas Gunadarma` (Experience / Lab)
  - `Kelompok Studi Pasar Modal (KSPM), Universitas Gunadarma` (Experience / Organization)
  - Any future institution or corporate entity title.
- **Link Styling**:
  - When an entity has a public website (e.g. `[Lab. Akuntansi Menengah](https://www.ak-menengah.com/)`), the link MUST retain `text-white font-bold hover:text-accent hover:underline` and include an `<ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-accent transition-colors shrink-0" />`.
  - The entire title string must remain uniformly visible in `text-white font-bold` (NEVER degrade parts of the main title to `text-slate-400 font-normal`).

---

### Level 3: Role, Degree, or Program (`<h4>` or subtitle `<div>`)
Sub-headings directly subordinate to the primary entity title:
- **Classes**: `text-xs sm:text-sm font-semibold text-slate-200 mt-0.5`
- **Secondary tags / Employment status**: `<span className="text-slate-400 font-normal">· Part-time</span>` or `· Undergraduate Degree (S1 Teknik Informatika)`
- **Promoted Badges**: `text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 font-medium`
- Applied identically to:
  - `Bachelor of Informatics Engineering` (Education)
  - `IT Staff & Support` (Part-time)
  - `Head of Asset Management` & `Member` (KSPM Timeline)

---

### Level 4: Metadata Line (Dates, Tenure, Location, Mode)
Chronological and spatial metadata lines:
- **Classes**: `text-xs text-slate-400 font-mono mt-1`
- **Dot Separator**: `<span className="text-slate-500">·</span>`
- Pattern: `{Period} · {Duration} · {City, Country} · {On-site/Remote}`
- Examples:
  - `2024 — Present · Depok, West Java, Indonesia · On-site`
  - `Jun 2026 – Present · 5 mos · Depok, West Java, Indonesia · On-site`

---

### Level 5: Body Content & Bullet Descriptions (`<ul> <li>` or `<p>`)
Descriptions, achievements, and core competencies:
- **Classes**: `text-xs sm:text-sm text-slate-300/90 leading-relaxed`
- **Bullet Lists**: `mt-3 space-y-1.5 list-disc list-outside pl-4 sm:pl-5`
- **Timeline Progression Bullets**: `mt-2 space-y-1.5 list-disc list-outside pl-4 sm:pl-5`
- **Readability Rule**: All bullet items must maintain equal line height (`leading-relaxed`), identical bullet indentation (`pl-4 sm:pl-5`), and high-contrast readable text (`text-slate-300/90`).
