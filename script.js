// //                                   String1

// const n = 10;

// for (let i = 0; i <= n; i++) {
//   console.log(String.fromCharCode(65 + i));
// }


// //                                   String2

// let ch = `29836`

// if (!isNaN(Number(ch))) {
//   console.log("digit");
// } else if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
//   console.log("lotin");
// } else {
//   console.log(0);
// }


// //                                   String3

// const str = `O'zbekiston buyuk davlat !`


// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(str.length - 1));


// //                                   String4

// N = 5
// Belgi = 'A'


// Natija = ``

// for (let i = 0; i < N; i++) {
//   Natija += Belgi
// }
// console.log(Natija);


// //                                   String5

// const str = `O'zbekiston buyuk davlat !`

// for (let i = str.length -1; i >= 0; i--) {
//   console.log(str[i]);

// }


// //                                   String6

// const satr = `O'zbekiston`

// const getStringStars = (str, N) => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//     if (i < str.length - 1) {
//       result += "*".repeat(N);
//     }
//   }
//   return result;

// }

// console.log(getStringStars(satr, 3));


// //                                   String7

// const str = `O'zbek 00 10 01 birodarlar !`
// let count = 0

// for (let ch of str) {
//   if (!isNaN(ch) && ch !== " ") {
//     count++;
//   }
// }

// console.log('Satrdagi raqamlar soni', count);


// //                                   String8

// function getNumberOfLatin(str) {
//     let count = 0;
//     for (let ch of str) {
//         if (ch >= 'a' && ch <= 'z' || ch >= 'а' && ch <= 'я' || ch === 'ё') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(getNumberOfLatin(`Привет, мир! Hello, world!`));



// //                                   String9

// const str = `O'zbek 00 10 01 QOCH UZBEKLAR kElAyApTI !`
// let natija = str.toLowerCase();
// console.log(natija);


// //                                   String10

// const str = `O'zbek 00 10 01 QOCH UZBEKLAR kElAyApTI !`

// const changeABS = (str) => {

//   let result = '';

//   for (let i of str) {
//     if (i >= 'A' && i <= 'Z' || i >= 'А' && i <= 'Я' || i === 'Ё') {
//       result += i.toLowerCase();
//     } else if (i >= 'a' && i <= 'z' || i >= 'а' && i <= 'я' || i === 'ё') {
//       result += i.toUpperCase();
//     } else {
//       result += i;
//     }
//   }

//   return result;

// }

// console.log(changeABS("Hello woRld  ОРМтьщчёЕАинпГАЕНаё!")); 


// //                                   String11

// function detectNumberType(str) {
//   let num = Number(str);

//   if (isNaN(num))
//     return 0;
//   if (Number.isInteger(num))
//     return 1;

//   return 2;
// }

// console.log(detectNumberType("123"));


// //                                   String12

// function getInverseNumber(n) {

//   let str = String(n);

//   let reversedStr = str.split('').reverse().join('');

//   return Number(reversedStr);
// }

// console.log(getInverseNumber(122));


// //                                   String13

// function getInverseNumber(n) {

//   let str = String(n);

//   let reversedStr = str.split('').reverse().join('');

//   return Number(reversedStr);
// }

// console.log(getInverseNumber(122));


// //                                   String14

// function getNewSatr(N1, N2, S1, S2) {

//     let part1 = S1.substring(0, N1);


//     let part2 = S2.slice(-N2);


//     return part1 + part2;
// }

// console.log(getNewSatr(5, 6, "SalomDunyo", "Javascript"));


// //                                   String15

// function getDouble(C, S) {
//     return S.replaceAll(C, C.repeat(2));
// }

// console.log(getDouble("?", "?salom"));


// //                                   String16

// function getAlmashganSon(C, S1, S2) {
//     return S1.replaceAll(C, S2 + C);
// }

// console.log(getAlmashganSon("l", "salom", "--"));


// //                                   String17 

// function getSonini(S1, S2) {
//   let count = 0;
//   let s = 0;

//   while (true) {
//     let foundPos = S1.indexOf(S2, s);
//     if (foundPos === -1) break;

//     count++;
//     s = foundPos + S2.length;
//   }

//   return count;
// }

// console.log(getSonini("hello world", "o"))


// //                                   String18

// function getAlmash(S1, S2) {
//     return S1.replace(S2, "");
// }

// console.log(getAlmash("salom dunyo", "yo"));


// //                                   String19

// function getDelete(S1, S2) {
//     return S1.replaceAll(S2, '');
// }

// console.log(getDelete("salom samir", "s"));


// //                                   String20

// function getAlmashganSatr(S1, S2, S3) {
//     return S1.replace(S2, S3);
// }

// console.log(getAlmashganSatr("salom dunyo", "dunyo", "world"));


// //                                   String21

// function replaceLastOccurrence(S1, S2, S3) {
//   let pos = S1.lastIndexOf(S2);
//   if (pos === -1) return S1;


//   return S1.slice(0, pos) + S3 + S1.slice(pos + S2.length);
// }


// console.log(replaceLastOccurrence("salom dunyo dunyo", "dunyo", "world"));


// //                                   String22

// function countSameStartEndWords(str) {
//   let words = str.trim().split(" ");
//   let count = 0;

//   for (let word of words) {
//     let ch = word[0];

//     if ((word[0] === word[word.length - 1]) && (ch >= "A" && ch <= "Z")) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countSameStartEndWords("KITOB NON QAYIQ OZZO"));


// //                                   String23

// function countSameStartEndWords(str) {
//   let words = str.trim().split(" ");
//   let count = 0;

//   for (let word of words) {
//     let ch = word[0];

//     if ((word.split("A").length - 1 >= 2) && (ch >= "A" && ch <= "Z")) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countSameStartEndWords("QANAQ ABOBA OZZO"));


// //                                   String24

// function getMaxOfString(str) {
//   let words = str.split(" "); 
//   let maxWord = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxWord.length) {
//       maxWord = words[i];
//     }
//   }

//   return maxWord;
// }

// let text = "mening ismim Nuriddin";
// console.log(getMaxOfString(text));


// //                                   String25

// function getMaxOfString(str) {
//   let words = str.split(" ").join('.'); 

//   return words;
// }

// let text = "mening ismim Nuriddin";
// console.log(getMaxOfString(text));


// //                                   String26

// function getCapital(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }

// let text = "mening ismim nuriddin";
// console.log(getCapital(text));


// //                                   String27

// function countPunctuation(str) {
//   const marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (marks.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }
// const marks = [".", "ism", ";", "sen", "?", "mening", ")", "salom"];

// console.log(countPunctuation(marks));


// //                                   String28

// function getFileName(path) {
//   let aFile = path.split("/").pop();
//   let fileName = aFile.substring(0, aFile.lastIndexOf(".")); 
//   return fileName;
// }

// let input = "D:/Qudrat_c++/books/My.book.v1.exe";
// console.log(getFileName(input));


// //                                   String29

// function getFileName(a) {
//   let lastDot = a.lastIndexOf(".");
//   if (lastDot === -1) return "";
//   return a.substring(lastDot + 1);
// }

// let input = "D:/Qudrat_c++/books/My.book.v1.exe";
// console.log(getFileName(input));


// //                                   String30

// function getLastFolder(path) {

//   let parts = path.split("/");
//   parts.pop();
//   if (parts.length === 1) {
//     return "/";
//   }
//   return parts.pop();
// }

// let input = "D:/Qudrat_c++/books/My_book.exe";
// console.log(getLastFolder(input));

// console.log(getLastFolder("D:/My_book.exe")); 
