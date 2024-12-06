// 1. Ismni so'rash
let names = prompt("Ismingizni kiriting:");

// 2. Matn rangini so'rash
let textColor = prompt("Matn rangini ingliz tilida kiriting: (masalan: 'red', 'blue', 'green'):");

// 3. Orqa fon rangini so'rash
let backgroundColor = prompt("Orqa fon rangini ingliz tilida kiriting: (masalan: 'black', 'white', 'yellow'):");

// 4. Sahifadagi elementlarni o'zgartirish
document.body.style.backgroundColor = backgroundColor;  // Orqa fon rangini o'rnatish
document.body.innerHTML = `<h1 style="color: ${textColor}; text-align: center;">Salom,  ${names} !</h1>`;  // Ism va rangni ekranga chiqarish
