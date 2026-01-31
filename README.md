# 💕 Date Choice Website

Website interaktif untuk memilih petualangan date yang sempurna!

## ✨ Fitur

- **3 Pilihan Date Menarik:**
  - 🌆 **Option A**: Cafe Senja dengan pemandangan citylight
  - 🎨 **Option B**: Museum & Photobooth
  - 🎮 **Option C**: Main seru di Timezone

- **Desain Interaktif:**
  - Background slideshow dengan foto-foto Anda
  - Kartu flip 3D yang interaktif
  - Animasi confetti saat memilih
  - Responsive design untuk mobile dan desktop
  - Gradient overlay yang cantik

## 🚀 Cara Deploy ke Vercel

### Method 1: Vercel CLI (Termudah)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd d:\nduy
vercel
```

4. Ikuti instruksi di terminal
5. Website Anda akan live dalam beberapa detik!

### Method 2: Vercel Dashboard

1. Buka [vercel.com](https://vercel.com)
2. Klik "Add New Project"
3. Pilih "Import Git Repository" atau upload folder ini
4. Deploy otomatis!

### Method 3: Drag & Drop

1. Buka [vercel.com/new](https://vercel.com/new)
2. Drag & drop seluruh folder `nduy` ke halaman tersebut
3. Tunggu beberapa detik dan website siap!

## 📁 Struktur File

```
nduy/
├── index.html              # Halaman utama
├── styles.css              # Styling
├── script.js               # Interaktivitas & animasi
├── vercel.json             # Konfigurasi Vercel
├── README.md               # Dokumentasi ini
└── [foto-foto].jpeg        # Background images
```

## 🎨 Customisasi

Untuk mengganti foto background, edit bagian ini di `index.html`:

```html
<div class="bg-slide active" style="background-image: url('./nama-foto.jpeg');"></div>
```

Untuk mengubah pilihan date, edit objek `dateOptions` di `script.js`.

## 💻 Tech Stack

- HTML5
- CSS3 (Animations, Gradients, Transforms)
- Vanilla JavaScript
- No dependencies!

## 📱 Browser Support

- Chrome/Edge (Recommended)
- Firefox
- Safari
- Mobile browsers

Selamat berkencan! 💕✨
