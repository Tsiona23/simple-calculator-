🎯 Overview

Advanced Calculator is a modern, web-based calculator with both standard and scientific modes.
It comes with dark/light mode, calculation history, and full keyboard support.
Designed to be fast, responsive, and user-friendly, it works in both client-side (JS) and server-side (PHP) environments.

✨ Features
🧮 Standard Calculator

Addition (+)

Subtraction (−)

Multiplication (×)

Division (÷)

🔬 Scientific Calculator

Trigonometry: sin(), cos(), tan()

Logarithms: log(), ln()

Square root: √

Exponentiation: xʸ

Percentage %

Constants: π, e

📝 History Panel

Stores the last 50 calculations using LocalStorage

Can clear history with one button

🌗 Dark / Light Mode

Toggle between dark and light themes

Saves preference in LocalStorage

⌨️ Keyboard Support

Enter → Calculate

ESC → Clear input

Supports numbers, operators, parentheses, and scientific functions

🖥 PHP Fallback

Safe server-side evaluation for clients with JavaScript disabled


📂 File Structure
/Advanced-Calculator
│── index.html       # Main calculator interface
│── style.css        # Styling (themes, layout)
│── script.js        # Calculator logic, history, keyboard support
│── compute.php      # Server-side evaluation fallback
│── README.md        # This file
│── LICENSE          # MIT License



⚡ How to Run

Clone the repository or download all files:

git clone https://github.com/Tsiona23/Advanced-Calculator.git


Place the project folder in your local server root (e.g., htdocs for XAMPP).

Start your Apache server.

Open your browser and navigate to:

http://localhost/Advanced-Calculator/

💻 Technologies

HTML5 – Structure & semantic elements

CSS3 – Styling, dark/light themes, responsive layout

JavaScript (ES6) – Calculator logic, scientific functions, history, keyboard support

PHP 8+ – Optional server-side calculation

👤 Author

Tsiona23
GitHub: https://github.com/Tsiona23

📜 License

This project is licensed under the MIT License – see the LICENSE
 file for details.
