# 🌡️ Temperature Converter | TypeScript + DOM

This is a **lightweight, interactive temperature converter** built using **TypeScript** and plain HTML/CSS.  
You can switch between **Celsius ↔ Fahrenheit** and instantly see the converted result as you type!

> ✅ This project is proudly my **first TypeScript app** 🎉

---

## ✨ Features

- 🔁 **Convert Celsius to Fahrenheit** and vice versa
- ⚡ **Live conversion** as you type
- 🧠 **Type-safe DOM manipulation** with TypeScript
- 🌙 Simple switch UI to toggle conversion direction
- 📱 Responsive and clean layout
- 💡 Perfect for TypeScript beginners to learn `type assertions`, DOM handling, and functions

---

## 🎥 Demo

👉 [Live Demo on GitHub Pages](https://mahdijds.github.io/temperature-converter-ts)  
*(replace this link with your own after publishing)*

---

## 📁 Project Structure

```
temperature-converter/
├── index.html 
├── style.css
├── /src
    ├── index.ts 
├── /dist 
    ├── index.js
├── tsconfig.json 

```

---

## ⚙️ Tech Stack

- 🧩 TypeScript (DOM + logic)
- 🖼️ HTML5 (semantic layout)
- 🎨 CSS (simple styling)
- ☑️ No frameworks or libraries — 100% vanilla!

---

### ▶️ Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/temperature-converter-ts.git
   cd temperature-converter-ts

2. Compile TypeScript (if needed):
   tsc script.ts

3. Open index.html in your browser and test the app!

---

### 🧠 Code Highlights
- Convert Celsius to Fahrenheit:
```
function convertCelOfFah(input: number): number {
  return (input * 9) / 5 + 32;
}
```

- Convert Fahrenheit to Celsius:
```
function convertFahOfCel(input: number): number {
  return (input - 32) * 5 / 9;
}
```

---

### 📄 License

Licensed under the MIT License — feel free to use and improve it!

--- 

## 🧑‍💻 Developer

- [MahdiJDS on GitHub](https://github.com/MahdiJDS)  
- Email: mahdijahed56@gmail.com  

---