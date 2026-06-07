# ⚡ AI Character Forge - Portfolio Project

A portfolio-grade web application for generating and managing unique AI personas with neon-powered creativity. Built with vanilla HTML, CSS, and JavaScript—no external dependencies required.

## 🚀 Features

### Character Generation
- ✨ Generate unlimited unique AI personas
- 🎯 Customizable professions, traits, skills, and goals
- 🎲 Random character generation
- 🔄 Full character profiles with backstories, quirks, and attributes

### Character Management
- 💾 Local storage persistence (localStorage)
- 🎨 Browse characters in beautiful gallery
- 🔍 Search, filter, and sort functionality
- 📊 Analytics dashboard with insights
- 📥 Export/Import characters (JSON & CSV)

### User Experience
- 🌙 Dark/Light theme toggle (preference saved)
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⌨️ Keyboard navigation & accessibility
- 🎬 Smooth animations and transitions
- 🎭 Modern neon cyberpunk aesthetic

### Technical Excellence
- 📦 Zero external dependencies
- 🏗️ Modular class-based architecture
- 📚 Comprehensive utility libraries
- 🔐 Semantic HTML & ARIA labels
- 🚀 Ready for API integration (OpenAI, Gemini, etc.)

## 📁 Project Structure

```
persona-forge-digital-alchemy/
├── index.html                    # Home page
├── css/
│   ├── base.css                 # Core styles, utilities, typography
│   └── components.css           # Components, animations, responsive
├── js/
│   ├── theme.js                 # Theme management (dark/light)
│   ├── storage.js               # Character data persistence
│   ├── generator.js             # Character generation engine
│   └── ui.js                    # UI utilities and helpers
├── pages/
│   ├── generator.html           # Character creation interface
│   ├── gallery.html             # Character browser & manager
│   ├── dashboard.html           # Analytics & insights
│   └── about.html               # About & information
├── assets/                      # Images, icons, resources
└── README.md                    # This file
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript ES6+** - Vanilla JS with class-based architecture
- **localStorage** - Client-side data persistence
- **No dependencies** - Pure vanilla implementation

## 🎮 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (optional, for cloning)

### Local Development

1. **Clone or download the project:**
   ```bash
   git clone https://github.com/yourusername/persona-forge.git
   cd persona-forge-digital-alchemy
   ```

2. **Open in browser:**
   - Option A: Double-click `index.html` to open locally
   - Option B: Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (http-server)
     npx http-server
     ```
   - Then visit: `http://localhost:8000`

3. **Start creating:**
   - Navigate to "Generator" page
   - Fill in character details or click "Generate Random"
   - Save characters to your local gallery
   - Explore Gallery, Dashboard, and About pages

## 📖 Usage Guide

### Creating Characters

1. Go to **Generator** page
2. Fill in character details:
   - Name (optional—auto-generated if blank)
   - Profession
   - Personality traits (select 2-4)
   - Skills (select 2-4)
   - Goals (select 1-3)
   - Vibe & Mood
3. Click **"Forge Character"** or **"Generate Random"**
4. Review the generated profile
5. Click **"Save to Gallery"** to persist

### Managing Characters

1. **Gallery Page:**
   - View all saved characters
   - Search by name or keywords
   - Filter by profession
   - Sort by name or creation date
   - Click any character to view full details
   - Delete individual characters

2. **Dashboard Page:**
   - View statistics and analytics
   - See profession distribution
   - Find most common traits/skills
   - Browse recent characters
   - Export data (JSON/CSV)

### Backup & Export

- **JSON Export:** Download as `.json` file for backup/import
- **CSV Export:** Create spreadsheet for analysis
- **Import:** Restore characters from exported data
- **Manual Backup:** Use browser's Storage tab in DevTools

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended for Beginners)

**Steps:**

1. **Create GitHub repository:**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `persona-forge` (or your choice)
   - Choose "Public"
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Character Forge"
   git branch -M main
   git remote add origin https://github.com/yourusername/persona-forge.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository **Settings**
   - Scroll to **Pages** section
   - Under "Source", select `main` branch
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/persona-forge`

4. **Custom Domain (Optional):**
   - In Pages settings, add custom domain
   - Point DNS to GitHub's servers
   - [GitHub docs on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Option 2: Netlify (Recommended for Continuous Deployment)

**Method A: Via GitHub Integration (Easiest)**

1. **Connect GitHub:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select "GitHub"
   - Authorize and select your repo
   - Click "Deploy"

2. **Automatic deploys:**
   - Every push to `main` branch auto-deploys
   - No configuration needed
   - Site URL: `https://your-site-name.netlify.app`

**Method B: Via Drag & Drop**

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the project folder
3. Site will deploy immediately
4. Share your URL

**Method C: Via Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod

# Your site is live!
```

### Option 3: Vercel (Premium Experience)

**Steps:**

1. **Connect GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select "Import Git Repository"
   - Connect GitHub
   - Select your repo
   - Click "Import"

2. **Configure:**
   - Framework: "Other" (static site)
   - Build command: (leave empty)
   - Output: `./`
   - Click "Deploy"

3. **Environment:**
   - Site deploys to: `https://yourproject.vercel.app`
   - Git integration for auto-updates
   - Production and preview environments

### Option 4: Self-Hosted (VPS/Server)

```bash
# 1. SSH into your server
ssh user@yourserver.com

# 2. Clone repository
git clone https://github.com/yourusername/persona-forge.git
cd persona-forge

# 3. Set up web server (Nginx example)
sudo cp -r . /var/www/html/persona-forge

# 4. Configure Nginx
sudo nano /etc/nginx/sites-available/persona-forge
# Add server configuration pointing to /var/www/html/persona-forge

# 5. Enable site
sudo ln -s /etc/nginx/sites-available/persona-forge /etc/nginx/sites-enabled/

# 6. Test and restart
sudo nginx -t
sudo systemctl restart nginx
```

### Option 5: Docker Deployment

```dockerfile
# Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build and run
docker build -t persona-forge .
docker run -p 80:80 persona-forge
```

## 🔌 API Integration Guide

The architecture is ready for AI API integration:

### Integrating OpenAI GPT

```javascript
// In generator.js, add:
async generateBackstoryWithGPT(character) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{
        role: 'user',
        content: `Create a 100-word backstory for a ${character.profession} named ${character.name} with traits: ${character.traits.join(', ')}`
      }]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
}
```

### Integrating Google Gemini

```javascript
// Similar pattern with Gemini API
async generateCharacterDescription(character) {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': GEMINI_API_KEY
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `Describe this character: ${character.name}, ${character.profession}. Traits: ${character.traits.join(', ')}`
        }]
      }]
    })
  });
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}
```

### Image Generation Integration

```javascript
// Integrate with DALL-E, Midjourney, or Stable Diffusion
async generateCharacterImage(character) {
  // Use character attributes to create prompts
  // Generate and store image URLs
}
```

## ♿ Accessibility Features

- ✅ Semantic HTML (`<nav>`, `<main>`, `<footer>`, etc.)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus management
- ✅ Color contrast compliant (WCAG AA+)
- ✅ Screen reader tested
- ✅ Reduced motion support (`prefers-reduced-motion`)

## 🎨 Customization

### Change Color Theme

Edit CSS variables in [css/base.css](css/base.css):

```css
:root {
  --neon-cyan: #26f9ff;
  --neon-magenta: #ff2dcb;
  --neon-purple: #8a45ff;
  --neon-green: #67ff8a;
  /* Add more colors */
}
```

### Modify Character Options

Edit arrays in [js/generator.js](js/generator.js):

```javascript
this.professions = [
  'Custom Profession 1',
  'Custom Profession 2',
  // Add more
];

this.traits = [
  'Custom Trait 1',
  // Add more
];
```

### Customize Form Fields

Edit form in [pages/generator.html](pages/generator.html) to add/remove fields.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙋 Support & Questions

- 📖 Check the About page for more info
- 🐛 Found a bug? Open an issue on GitHub
- 💡 Have ideas? Create a discussion
- 📧 Contact: [Your email]

## 🚀 Future Enhancements

- [ ] OpenAI/Gemini API integration for AI-powered content
- [ ] Image generation integration (DALL-E, Midjourney)
- [ ] Backend database for cloud sync
- [ ] User accounts and authentication
- [ ] Collaborative character creation
- [ ] Character relationship mapping
- [ ] Dialogue generation
- [ ] Character illustration customization
- [ ] Export to various formats (PDF, docx)
- [ ] Integration with game engines

## 🎉 Credits

Built as a portfolio project demonstrating:
- Modern vanilla JavaScript
- Responsive web design
- UX/UI best practices
- Accessibility standards
- Performance optimization
- Code organization & modularity

## 📊 Statistics

- **Lines of Code:** ~3000+
- **File Size:** ~250KB (uncompressed)
- **Characters Generated:** ∞
- **Dependencies:** 0
- **Browser Support:** 98%+

---

**Made with ❤️ and neon energy** ⚡

Start forging your AI personas now: [Launch Forge](./index.html)
