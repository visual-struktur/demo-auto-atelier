# AUTO ATELIER — Premium Fahrzeugpflege

Eine elegante Demo-Website für ein fiktives Auto-Detailing-Atelier, erstellt als Präsentationsprojekt.

![AUTO ATELIER Preview](images/studio.webp)

## 🎨 Über das Projekt

**AUTO ATELIER** ist eine moderne, responsive Landing Page im Premium-Design. Die Website demonstriert professionelle Webentwicklung mit Fokus auf:

- **Elegantes Dark-Theme-Design** mit goldenen Akzenten
- **Hochwertige Typografie** (Playfair Display + Cormorant Garamond)
- **Smooth Animations** und Scroll-Effekte
- **Responsive Layout** für alle Bildschirmgrößen
- **Performance-Optimierung** mit WebP-Bildern und Lazy Loading

## 🚀 Features

### Design & UX
- ✨ Luxuriöses Dark-Theme mit Premium-Ästhetik
- 🎭 Elegante Animationen beim Scrollen (Intersection Observer)
- 📱 Vollständig responsive (Mobile-First-Ansatz)
- 🖼️ Hochwertige WebP-Bilder mit optimierter Ladezeit
- 🎨 CSS-Variablen für konsistente Farbpalette

### Technische Features
- 🔧 Saubere HTML5-Semantik
- 💅 Modernes CSS3 (Flexbox, Grid, Custom Properties)
- ⚡ Vanilla JavaScript (keine Dependencies)
- 📐 Mobile Navigation mit Hamburger-Menü
- 🎯 Smooth Scroll-Navigation
- ♿ Accessibility-optimiert (ARIA-Labels, semantisches HTML)

### Inhalte
- 🏠 Hero-Section mit animiertem Scroll-Indikator
- 🛠️ Leistungsübersicht (6 Services mit Bildern und Preisen)
- 👥 Über-uns-Sektion mit Statistiken
- 📞 Kontaktbereich (Demo-Daten)
- 📄 Impressum & Datenschutz-Seiten

## 📁 Projektstruktur

```
demo-auto-atelier/
│
├── index.html              # Hauptseite
├── impressum.html          # Impressum (Platzhalter)
├── datenschutz.html        # Datenschutz (Platzhalter)
│
├── css/
│   └── styles.css          # Alle Styles (inkl. Responsive)
│
├── js/
│   └── main.js             # JavaScript (Navigation, Scroll, Animations)
│
├── images/                 # Optimierte WebP-Bilder
│   ├── detailing.webp
│   ├── coating.webp
│   ├── polish.webp
│   ├── interior.webp
│   ├── ppf.webp
│   ├── leder.webp
│   └── studio.webp
│
└── README.md               # Diese Datei
```

## 🛠️ Installation & Verwendung

### Voraussetzungen
- Ein moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Optional: Lokaler Webserver (für vollständige Funktionalität)

### Einfache Verwendung
1. **Repository klonen oder ZIP herunterladen**
   ```bash
   git clone https://github.com/IhrBenutzername/demo-auto-atelier.git
   ```

2. **Dateien öffnen**
   - Öffnen Sie `index.html` direkt im Browser
   - ODER starten Sie einen lokalen Server:
   ```bash
   # Mit Python 3
   python -m http.server 8000
   
   # Mit Node.js (http-server)
   npx http-server
   
   # Mit PHP
   php -S localhost:8000
   ```

3. **Im Browser öffnen**
   ```
   http://localhost:8000
   ```

### Live-Demo
Besuchen Sie die Live-Demo unter: [https://visual-struktur.github.io/demo-auto-atelier/](https://visual-struktur.github.io/demo-auto-atelier/)

## 🎯 Verwendung

### Navigation
Die Website verfügt über eine feste Navigation mit drei Hauptbereichen:
- **LEISTUNGEN** — Übersicht der angebotenen Services
- **ÜBER UNS** — Informationen über das Atelier
- **KONTAKT** — Kontaktinformationen (Demo-Daten)

### Mobile Navigation
Auf kleineren Bildschirmen erscheint ein Hamburger-Menü, das die Navigation ausblendet.

### Anpassung

#### Farben ändern
Bearbeiten Sie die CSS-Variablen in `css/styles.css`:
```css
:root {
  --color-bg: #0a0a0a;           /* Hintergrundfarbe */
  --color-accent: #c9a961;       /* Akzentfarbe (Gold) */
  --color-text: #e8e8e8;         /* Textfarbe */
  /* ... weitere Variablen */
}
```

#### Texte ändern
Alle Texte befinden sich direkt in `index.html` und können einfach bearbeitet werden.

#### Bilder ersetzen
Ersetzen Sie die WebP-Dateien im `images/`-Ordner. Achten Sie darauf:
- WebP-Format für optimale Performance
- Gleiche Dateinamen beibehalten ODER Pfade in `index.html` anpassen
- Empfohlene Größe: 1200x800px (3:2 Seitenverhältnis)

#### Services hinzufügen/entfernen
Services werden in der `<div class="services-grid">` definiert. Kopieren Sie einfach einen `.service-card`-Block:

```html
<div class="service-card reveal">
  <div class="service-media">
    <img src="images/ihr-bild.webp" alt="Service Name" loading="lazy">
  </div>
  <div class="service-icon">✦</div>
  <h3 class="service-name">Ihr Service</h3>
  <p class="service-description">Beschreibung...</p>
  <div class="service-price"><span class="price-from">ab</span>XXX €</div>
</div>
```

## 🎨 Design-System

### Farbpalette
| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Schwarz | `#0a0a0a` | Haupthintergrund |
| Dunkelgrau | `#141414` | Cards/Surface |
| Gold | `#c9a961` | Akzente, Hover |
| Hellgrau | `#e8e8e8` | Haupttext |
| Grau | `#8a8a8a` | Sekundärtext |

### Typografie
- **Display-Schrift**: Playfair Display (Überschriften, Logo)
- **Body-Schrift**: Cormorant Garamond (Fließtext)
- **Tracking**: Weit für Eleganz (0.1em - 0.3em)

### Breakpoints
```css
Desktop:  > 1024px
Tablet:   768px - 1024px
Mobile:   < 768px
```

## 📱 Browser-Kompatibilität

✅ **Vollständig unterstützt:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

⚠️ **Teilweise unterstützt:**
- Internet Explorer 11 (ohne CSS-Grid, Animationen eingeschränkt)

## 🔧 Technologien

- **HTML5** — Semantische Struktur
- **CSS3** — Grid, Flexbox, Custom Properties, Animations
- **Vanilla JavaScript** — Intersection Observer, Smooth Scroll
- **Google Fonts** — Playfair Display, Cormorant Garamond
- **WebP** — Optimierte Bildformate

## ⚡ Performance

### Optimierungen
- ✅ WebP-Bilder (ca. 30% kleiner als JPEG)
- ✅ Lazy Loading für Bilder
- ✅ CSS in einer Datei (reduzierte HTTP-Requests)
- ✅ Minimale JavaScript-Nutzung
- ✅ Keine externen Dependencies

### Lighthouse-Score (Desktop)
- 🟢 Performance: 95+
- 🟢 Accessibility: 90+
- 🟢 Best Practices: 100
- 🟢 SEO: 90+

## 📝 Lizenz

Dieses Projekt ist eine **Demo/Präsentation** und steht unter der MIT-Lizenz.

```
MIT License

Copyright (c) 2025 AUTO ATELIER Demo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

Siehe [LICENSE](LICENSE) für vollständige Details.

## 👨‍💻 Autor

Erstellt als Demo-Projekt für **Visual Struktur**

- 🌐 Website: [https://visual-struktur.github.io/visual-struktur/](https://visual-struktur.github.io/visual-struktur/)
- 📧 Kontakt: Über GitHub Issues

## 🙏 Danksagungen

- **Google Fonts** für die wunderschönen Schriftarten
- **Unsplash** / Stock-Foto-Anbieter für Bildressourcen
- **Inspiration** von Premium-Automotive-Websites

## 📚 Weitere Ressourcen

- [Google Fonts](https://fonts.google.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [WebP Image Format](https://developers.google.com/speed/webp)

## 🐛 Bekannte Probleme

Derzeit keine bekannten Probleme. Für Bug-Reports oder Feature-Requests bitte ein [GitHub Issue](https://github.com/IhrBenutzername/demo-auto-atelier/issues) erstellen.

## 🔮 Zukünftige Verbesserungen

- [ ] Kontaktformular mit Backend-Integration
- [ ] Bildergalerie mit Lightbox
- [ ] Online-Terminbuchung
- [ ] Mehrsprachigkeit (EN, RU, etc.)
- [ ] Blog/News-Sektion
- [ ] Google Maps Integration
- [ ] Cookie-Banner / DSGVO-Compliance

---

**Hinweis:** Dies ist eine Demo-Website. Alle Kontaktdaten und Informationen sind fiktiv und dienen nur zu Präsentationszwecken.

⭐ Wenn Ihnen dieses Projekt gefällt, geben Sie ihm einen Star auf GitHub!
