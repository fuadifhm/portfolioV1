🌌 Personal 3D Fans Page — My Digital Universe

Selamat datang di Personal 3D Fans Page, sebuah website personal interaktif yang berfungsi seperti sosial media pribadi, tempat saya berbagi artikel, proyek, dan tools buatan sendiri.
Didesain dengan pengalaman scroll 3D animated, transisi halus, dan tampilan modern futuristik yang sepenuhnya responsif.

🚀 Fitur Utama
🧭 Scroll 3D Animation — Efek parallax dan depth interaktif dengan React Three Fiber & GSAP
✍️ Personal Feed — Timeline pribadi berisi update, artikel, dan proyek
💼 Project Showcase — Galeri 3D yang menampilkan karya dan tools terbaru
📰 Articles Page — Blog pribadi dengan dukungan Markdown dan filter berdasarkan tag
🌠 About Me Section — Profil personal dengan animasi background 3D dan efek partikel
🌓 Dark/Light Mode — Tema dinamis sesuai preferensi pengguna
⚡ Smooth Page Transition — Navigasi antar halaman tanpa reload
📱 Responsive Design — Optimal di semua ukuran layar

🧩 Teknologi yang Digunakan
Kategori	Teknologi
- Framework	Next.js 14 (React)
- Styling	Tailwind CSS, shadcn/ui
- Animasi	Framer Motion, GSAP
- 3D Engine	Three.js, React Three Fiber
- Ikon	Lucide React Icons
- Data	File JSON statis (dapat diintegrasikan dengan Sanity atau Firebase CMS)
- Deployment	Vercel

🧱 Struktur Folder Proyek
/components
  /Navbar.jsx
  /PostCard.jsx
  /ProjectCard.jsx
  /ThreeScene.jsx
/pages
  /index.jsx
  /projects.jsx
  /articles.jsx
  /articles/[slug].jsx
  /about.jsx
/public
  /images
  /models
/data
  posts.json
  projects.json

⚙️ Cara Menjalankan Proyek
1️⃣ Clone Repository
git clone https://github.com/fuadifhm/portfolioV1.git
cd personal-3d-fanspage

2️⃣ Install Dependency
npm install

3️⃣ Jalankan di Mode Development
npm run dev

4️⃣ Buka di Browser
http://localhost:3000

5️⃣ Build untuk Production
npm run build
npm start

🪄 Cara Menambah Konten
📦 Menambah Project

Edit file /data/projects.json dan tambahkan:

{
  "title": "Nama Project",
  "description": "Deskripsi singkat proyek",
  "tech": ["React", "Three.js"],
  "link": "https://github.com/username/project",
  "image": "/images/project.png"
}

✍️ Menambah Artikel

Tambahkan item baru di /data/posts.json atau buat file markdown baru di /content/articles/.

🎨 Desain & Konsep UX

Website ini dibuat agar terasa seperti ruang digital pribadi, tempat pengunjung bisa menjelajah karya, ide, dan tulisan saya dengan pengalaman visual yang halus, immersive, dan berkarakter.
Desainnya terinspirasi dari konsep digital universe — perpaduan antara keindahan minimalis dan dinamika interaktif 3D.

🔮 Pengembangan Selanjutnya

+ Integrasi CMS (Sanity / Firebase)
+ Komentar dan interaksi pengguna
+ Musik latar interaktif
+ Mode AR/VR showcase project
+ Auto content sync dari Notion atau Markdown folder

🪐 Lisensi

Proyek ini bersifat open-source dan dapat digunakan untuk pengembangan personal dengan atribusi yang sesuai.
Lisensi: MIT License
