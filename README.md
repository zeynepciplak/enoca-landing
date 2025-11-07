#  Enoca Akademi Frontend Projesi

Bu proje, **Enoca Akademi** programı kapsamında geliştirilen bir **frontend uygulamasıdır**.  
Amaç, modern web teknolojilerini kullanarak **performanslı, erişilebilir ve modüler bir ürün tanıtım landing page’i** oluşturmaktır.

---

##  Genel Bilgiler

- **Framework:** React (Vite)
- **Stil Yapısı:** SCSS Modules
- **Durum Yönetimi:** Yerel state (useState)
- **Tema:** Light/Dark Mode (CSS Variables)
- **Lint / Format:** ESLint + Prettier
- **Performans:** Lighthouse skoru 100/100  
- **Responsive:** Mobil öncelikli tasarım (320px – 1440px)

---

##  Kurulum

Projeyi çalıştırmadan önce aşağıdaki adımları izleyin:

```bash
# 1. Repository'i klonlayın
git clone https://github.com/kullaniciadi/enoca-landing.git

# 2. Klasöre gidin
cd enoca-landing

# 3. Bağımlılıkları yükleyin
npm install

# 4. Projeyi çalıştırın
npm run dev

-- Uygulama varsayılan olarak http://localhost:5173 adresinde çalışacaktır.

------

## Komutlar 

| Komut             | Açıklama                                     |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Geliştirme ortamında çalıştırır              |
| `npm run build`   | Üretim için optimize edilmiş build oluşturur |
| `npm run preview` | Build sonrası önizleme yapar                 |
| `npm run lint`    | ESLint ile kod kalitesini kontrol eder       |
| `npm run format`  | Prettier ile kod biçimlendirir               |

-----

## Proje Mimarisi

enoca-landing/
│
├── .github/
│   └── workflows/
│       ├── ci.yml                    # CI yapılandırması
│       └── pull_request_template.md  # PR şablonu
│
├── public/
│   └── images/
│       ├── feature1.webp
│       ├── feature2.webp
│       ├── feature3.webp
│       └── hero-images.webp
│
├── src/
│   ├── assets/           # Ek medya, ikon veya ilave görseller
│   ├── components/       # UI bileşenleri (Button, Input, Card, Modal, Accordion)
│   ├── sections/         # Sayfa bölümleri (Hero, Features, Pricing, FAQ, Contact)
│   ├── styles/           # Global SCSS (variables, mixins, reset)
│   ├── utils/            # Yardımcı fonksiyonlar
│   ├── App.jsx           # Uygulama kök bileşeni
│   └── main.jsx          # Giriş noktası
│
├── .eslintrc.cjs         # ESLint yapılandırması
├── .prettierrc           # Prettier kuralları
├── CHANGELOG.md          # Sürüm geçmişi
├── DAILY_PROGRESS.md     # Günlük ilerleme kayıtları
├── index.html            # Root HTML dosyası
├── package.json          # Bağımlılıklar
├── vite.config.js        # Vite yapılandırması
└── README.md             # Dökümantasyon

------

## Tema Desteği

Tüm renkler CSS değişkenleri (variables.scss) üzerinden yönetilir.
:root {
  --bg-color: #ffffff;
  --text-color: #111111;
  --primary-color: #8b5cf6;
}

[data-theme='dark'] {
  --bg-color: #111111;
  --text-color: #ffffff;
  --primary-color: #a78bfa;
}
Kullanıcı teması localStorage’da saklanır ve sayfa yenilendiğinde korunur.

------

## Performans


Görseller .webp formatında optimize edilmiştir.
Tüm image’lerde lazy-loading uygulanmıştır.;

--Lighthouse sonuçları için önce terminalde sırasıyla 
npm run build
npm run preview
komutlarını çalıştırırız.
tarayıcıda http://localhost:4173
 adresine gideriz.


### Production (npm run preview)
![Lighthouse Report - Build](/Users/zeynepciplak/Desktop/enoca-landing/public/images/Ekran Resmi 2025-11-07 13.08.02.jpg)

- **Performance:** 100  
- **Accessibility:** 98  
- **Best Practices:** 100  
- **SEO:** 100

### Development (npm run dev)
![Lighthouse Report - Dev](![Image](https://github.com/user-attachments/assets/2539ac08-e079-4577-b952-cf7650a8d15f))

- **Performance:** 89  
- **Accessibility:** 91  
- **Best Practices:** 100  
- **SEO:** 83
-------

## Yeni bir özellik veya düzenleme eklemeden önce şu adımları takip edin:

# Yeni branch oluştur
git checkout -b feat/new-feature

# Değişiklikleri commit et
git commit -m "feat: yeni özellik eklendi"

# PR oluştur
git push origin feat/new-feature

-----

## Ön İzleme
![Image](https://github.com/user-attachments/assets/a4edcdb8-1340-44f8-aa02-3f5fa89b90d2)
![Image](https://github.com/user-attachments/assets/aa032bd7-c35c-409b-9071-218b8c2b9b2d)
![Image](https://github.com/user-attachments/assets/458f2dd9-3aa1-4ec2-9f4b-f42cb20e7359)
![Image](https://github.com/user-attachments/assets/ea198c28-a238-4976-9d04-58fbe37aab86)
![Image](https://github.com/user-attachments/assets/e2099b9c-8394-41e6-af72-e36383b02db6)

----

## İletişim

Geliştirici: Zeynep Cıplak
📧 zeynepciplaak@gmail.com
💼 LinkedIn