// //                                   String1

// const n = 10;

// for (let i = 0; i <= n; i++) {
//   console.log(String.fromCharCode(65 + i));
// }


// //                                   String2

// let ch = `?`

// if (ch >= `0` && ch <= `11`) {
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


//                                   String8

const str = `O'zbek 00 10 01 birodarlar !`
let count = 0

for (let ch of str) {
  if (!isNaN(ch) && ch !== " ") {
    count++;
  }
}

console.log('Satrdagi raqamlar soni', count);