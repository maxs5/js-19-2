import './index.css';
import jsLogo from './assets/logo.png';

// Создаем заголовок
const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
document.body.appendChild(h1);

// Создаем картинку
const img = document.createElement('img');
img.src = jsLogo;
img.alt = 'JavaScript Logo';
document.body.appendChild(img);

console.log('Hello World!');