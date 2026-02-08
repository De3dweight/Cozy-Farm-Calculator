# Cozy-Farm-Calculator
# 🌾 Cozy Farm Pricing Calculator

A **Progressive Web App (PWA)** that helps you calculate costs, profits, and selling prices for farm products.  
Works **offline**, installable on **Android**, partially on **iOS**, with background music and Stardew Valley vibes! 🎵

## Features

- 🧺 Single product and 📦 batch pricing modes  
- 🌱 Ingredients table with total cost calculation  
- 💰 Additional costs table  
- ⭐ Profit percentage calculator  
- 🎵 Optional background music  
- 🌙 Background image and custom font (VT323)  
- ✅ Works offline thanks to Service Worker  
- 📱 Installable as a mobile/desktop app  
- 🎮 Styled like cozy farming games  

## Folder Structure
cozy-farm/
├── index.html ← main HTML
├── app.js ← calculator logic
├── sw.js ← service worker
├── manifest.json ← PWA manifest
├── icon-512.png ← app icon
├── bg.jpg ← background image
├── bgm.mp3 ← optional background music
├── VT323-Regular.ttf ← font file

> Make sure all files are in the same folder. No subfolders needed.

## Installation & Running

### 1️⃣ GitHub Pages / Web

1. Open the repo link: `https://De3dweight.github.io/cozy-farm/`  
2. On Chrome (Android/Desktop) → you can **Install the app** from the menu.  
3. Works **offline** after first load (Service Worker caches everything).  

### 2️⃣ Local Testing

1. Open VS Code → right-click `index.html` → **Open with Live Server**  
2. Make sure all files are in the same folder  
3. Open in browser → PWA features work, offline works after first load  

## Usage

1. **Add Ingredients:** Click “Add Ingredient”, fill in quantity and cost  
2. **Add Additional Costs:** Click “Add Cost”, fill in amounts  
3. **Enter Profit %** → automatically calculates total cost & selling price  
4. **Switch Mode:** Single / Batch pricing  
5. **BGM:** Toggle audio as desired  
6. **Clear All:** Resets all inputs  

## Notes

- Android: full PWA installable + offline support  
- iOS: limited offline support, manual “Add to Home Screen” in Safari  
- All assets are cached locally for offline use  
- Font VT323 is included locally for offline rendering  

## Credits

- Font: [VT323](https://fonts.google.com/specimen/VT323)  
- Images & icon: placeholder / replace with your own  
- Inspired by Stardew Valley cozy style  
