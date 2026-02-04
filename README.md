# Napoli Software - User Group Website

Una pagina web minimale e moderna per il user group Napoli Software, ispirata ai colori e all'atmosfera di Napoli.

## 🚀 Struttura del Progetto

```
napoli-software-webpage/
├── index.html        # Pagina principale
├── styles.css        # Stili CSS
├── src/
│   ├── main.ts       # Script principale TypeScript
│   ├── data.ts       # Dati di eventi e membri (FACILE DA MODIFICARE)
│   └── types.ts      # Definizioni dei tipi TypeScript
├── images/           # Cartella per le immagini dei membri
├── package.json      # Dipendenze e script npm
├── tsconfig.json     # Configurazione TypeScript
├── vite.config.ts    # Configurazione Vite
└── README.md         # Questo file
```

## 🛠️ Setup del Progetto

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview della build
npm run preview
```

## 📝 Come Aggiungere/Modificare Contenuti

### Aggiungere un Nuovo Evento

Apri il file `src/data.ts` e aggiungi un nuovo oggetto nell'array `events`:

```typescript
{
    title: "Nome dell'evento",
    date: "Data (es: 20 Marzo 2026)",
    time: "Orario (es: 19:00)",
    location: "Nome del luogo",
    address: "Indirizzo completo",
    description: "Descrizione dell'evento"
}
```

### Aggiungere un Nuovo Membro del Team

Apri il file `src/data.ts` e aggiungi un nuovo oggetto nell'array `teamMembers`:

```typescript
{
    name: "Nome Cognome",
    role: "Ruolo nel gruppo",
    bio: "Breve descrizione della persona",
    image: "images/nome-file.jpg"  // oppure URL esterno
}
```

Per le immagini puoi:
1. Salvare il file nella cartella `images/` e usare `images/nome-file.jpg`
2. Usare un URL esterno come `https://esempio.com/foto.jpg`

### Modificare i Link Social

Nel file `src/data.ts`, modifica l'oggetto `socialLinks`:

```typescript
export const socialLinks: SocialLinks = {
    email: "tuaemail@gmail.com",
    linkedin: "https://linkedin.com/company/tuazienda",
    instagram: "https://instagram.com/tuoprofilo"
};
```

Poi aggiorna anche i link nell'HTML (`index.html`) nei seguenti punti:
- Footer (in fondo alla pagina)
- Sezione About (pulsanti grandi)

## 🎨 Personalizzazione Colori

I colori sono definiti nelle variabili CSS all'inizio di `styles.css`:

```css
:root {
    --primary: #007DC5;        /* Azzurro Napoli */
    --primary-light: #4BA3D9;
    --primary-dark: #005A8F;
    --accent: #FFB800;         /* Giallo/Oro */
    /* ... altri colori ... */
}
```

## 🌐 Come Visualizzare la Pagina

### Opzione 1: Apertura diretta
Fai doppio clic su `index.html` per aprirla nel browser.

### Opzione 2: Server locale (consigliato)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (se hai installato http-server)
npx http-server

# Con VS Code
# Installa l'estensione "Live Server" e clicca "Go Live"
```

## 📱 Responsive Design

La pagina è completamente responsive e si adatta a:
- Desktop (> 768px)
- Tablet (768px - 480px)
- Mobile (< 480px)

## 🔗 Sezioni della Pagina

1. **Home** - Hero section con introduzione al gruppo
2. **Eventi** - Lista degli eventi programmati
3. **Manifesto** - I valori e principi del gruppo
4. **About** - Team con foto e bio, link social prominenti

---

Fatto con ❤️ a Napoli
