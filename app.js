                            // Masalalar V-1

// 1.Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang.

// let text = "To be or not to be";
// let firstIndex = text.indexOf(" ");
// let substring = text.substring(0, firstIndex + 1);
// console.log(substring);

/* --------------------------------------------------------------------- */

// 2. Birinchi va so’ngi burchali qavslarni olib tashlang.

// function removeTagBrackets(tag) {
//     return tag.replace(/^<|>$/g, '');
// }

// let tag = '<span>';
// let tag = '<div>';
// let tagName = removeTagBrackets(tag);
// console.log(tagName); 

/* --------------------------------------------------------------------- */

// 3. Funksiyaga berilgan son tub bo'lsa true, aks holda false qaytarsin.

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(10)); 
// console.log(isPrime(7)); 

/* --------------------------------------------------------------------- */

// 4. Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.

// function group(array, keySelector, valueSelector) {
//     const result = {};
//     array.forEach(item => {
//         const key = keySelector(item);
//         const value = valueSelector(item);
//         if (result[key]) {
//             result[key].push(value);
//         } else {
//             result[key] = [value];
//         }
//     });
//     return result;
// }

// const data = [
//     { country: 'Belarus', city: 'Brest' },
//     { country: 'Russia', city: 'Omsk' },
//     { country: 'Russia', city: 'Samara' },
//     { country: 'Belarus', city: 'Grodno' },
//     { country: 'Belarus', city: 'Minsk' },
//     { country: 'Poland', city: 'Lodz' }
// ];

// const groupedData = group(data, item => item.country.toLowerCase(), item => item.city);
// console.log(groupedData);

/* --------------------------------------------------------------------- */

// 5. n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.

// function getSumBetweenNumbers(n1, n2) {
//     let sum = 0;
//     for (let i = n1; i <= n2; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(getSumBetweenNumbers(1, 2)); 

/* --------------------------------------------------------------------- */

// 6. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.

// function getElementsOneTime(arr) {
//     const countMap = {};
//     arr.forEach(item => {
//         countMap[item] = (countMap[item] || 0) + 1;
//     });

//     const result = [];
//     Object.keys(countMap).forEach(key => {
//         if (countMap[key] === 1) {
//             result.push(parseInt(key));
//         }
//     });

//     return result;
// }

// console.log(getElementsOneTime([1, 5, 6, 1, 5, 7, 2])); 

/* --------------------------------------------------------------------- */

// 7. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.

// function removeDuplicates(arr) {
//     const seen = {};
//     const uniqueArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (!seen[item]) {
//             seen[item] = true;
//             uniqueArray.push(item);
//         }
//     }

//     return uniqueArray;
// }

// const inputArray = [1, 2, 3, 4, 2, 5, 6, 3, 8, 9, 8, 9, 7, 7];
// const resultArray = removeDuplicates(inputArray);
// console.log(resultArray); 

/* --------------------------------------------------------------------- */

// 8. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0 < k < m < n). 
// Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.

// function removeElements(arr, k, m) {
//     if (k <= 0 || m >= arr.length || k >= m) {
//         return "K va m notog'ri qiymatlar";
//     }

//     arr.splice(k, m - k + 1);

//     return {
//         length: arr.length,
//         elements: arr
//     };
// }

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const k = 2;
// const m = 5;

// const result = removeElements(inputArray, k, m);
// console.log(result); // Output: { length: 5, elements: [1, 2, 8, 9] }

/* --------------------------------------------------------------------- */

// 9. Quyidagi ko'rinishda objectlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

const books = [
    {
      title: "Halqa",
      author: "Akrom Malik",
      alreadyRead: false,
    },
    {
      title: "Dunyo ishlari",
      author: "O'tkir Hoshimov",
      alreadyRead: true,
    },
    {
      title: "Vaqtning qadri",
      author: "Abdulfattoh Abu G'udda",
      alreadyRead: false,
    },
  ];

function alreadyRead(books) {
    books.forEach((book) => {
      if (book.alreadyRead) {
        console.log(`${book.author}ning ${book.title} kitobi o'qilgan`);
      } else {
        console.log(`${book.author}ning ${book.title} kitobi o'qilmagan`);
      }
    });
  }

alreadyRead(books);

/* --------------------------------------------------------------------- */

// 10. Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

// function totalProducts(products) {
//     let total = 0;
//     products.forEach(product => {
//         const discountedPrice = product.price * (1 - product.discount / 100);
//         total += discountedPrice * product.quantity;
//     });
//     return total;
// }

// // Input
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// // Output
// console.log(totalProducts(products)); // Output: 434600


 









