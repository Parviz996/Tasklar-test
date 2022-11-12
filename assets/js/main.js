/*let name = "Parviz";
let year = 1996;
let dateNow = 2022;

let age = dateNow - year;

let h = `Mənim adım ${name} və mənim ${age} yaşım var`;
console.log(h);*/

/*function sumNums(a, b) {
  console.log((a + b) / 3);
}
sumNums(5, 4, 3);*/

/*let dateNow = 2022;
let year = 1996;

function age(a, b) {
  console.log(a - b);
}
age(dateNow, year);*/

/*
function sumYear(year, date) {
  return date - year;
}
function addNames(name, surname) {
  console.log(
    `Salam mənim adım ${name} soyadım ${surname} və mənim ${sumYear(
      2022,
      1996
    )} yaşım var`
  );
}
addNames("Pərviz", "Baxşəliyev");*/

/*function Auto(year, date) {
  return date - year;
}
function addNames(marka, id) {
  console.log(
    `Qeyd edilən avtomobilin adı ${marka} növü ${id} və istifadə müddəti ${Auto(
      2050,
      2020
    )} il-dir`
  );
}
addNames("BMW", 190);*/

/*const sumNumsArrow = (a, b) => {
  console.log(a + b);
};
sumNumsArrow(3, 5); */

/*
const person = {
  name: "Parviz",
  surname: "Baxshaliyev",
  age: 26,
  country: "Azerbaijan",

  fullName: function () {
    console.log(person.name + "-" + person.age + " -" + person.country);
  },
  city: {
    kodu: 123,
    adi: "Baki",
  },
};

Object.freeze(person);

person.age = 25;
person.name = "Əlmirzə";
person.name = "cavidan";
person.city.kodu = 101;
person.fullName();
console.log(typeof person);
console.log(person.city.kodu);
console.log(person.city.adi);
*/

/*
const person = {
  name: "Parviz",
  surname: "Baxshaliyev",
  age: 26,
  country: "Azerbaijan",

  fullName: function () {
    console.log(person.name + "-" + person.age + " -" + person.country);
  },
};
Object.freeze(person);
person.name = "Ali";
console.log(Object.isFrozen(person));
person.fullName();
*/

/*----- yeniden baxmaq
const person = {
  name: "Parviz",
  surname: "Baxshaliyev",
  age: 26,
};
const person2 = {
  name: "Ali",
  surname: "Aliyev",
  age: 26,
  country: "Azerbaijan",
};
const result = Object.assign(person, person2);
console.log();
*/

/*
class person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}
const Ali = new person("Ali", "Aliyev", 26);
console.log(Ali);
*/

/*
class person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}
let username = prompt("Adınız");
let lastname = prompt("Soyadınz");
let ages = prompt("Yaşınız");

console.log(new person(username, lastname, ages));
*/

/*
class Person {
  constructor(name, surname, dateNow, year) {
    this.name = name;
    this.surname = surname;
    this.dateNow = dateNow;
    this.year = year;
  }
  fullname() {
    console.log(`Adı:${this.name} - Soyadı:${this.surname}`);
  }

  personAge() {
    console.log(`Şəxsin yaşı ${this.dateNow - this.year}`);
  }
}
const names = new Person("Ali", "Aliyev", 2022, 1999);
names.fullname();
names.personAge();
*/

/*
const name = prompt("Adınızı daxil edin");
const surname = prompt("Soyadınızı daxil edin");
const dateNow = prompt("Tarixi daxil edin");
const year = prompt("Doğum tarixinizi daxil edin");

class Person {
  constructor(name, surname, dateNow, year) {
    this.name = name;
    this.surname = surname;
    this.dateNow = dateNow;
    this.year = year;
  }
  fullName() {
    return `Adı:${this.name}+ Soyadı:${this.surname}`;
  }
  personAge() {
    return `Bu adamın yaşı: ${this.dateNow - this.year}`;
  }
  getAlldata() {
    console.log(this.fullName() + "  " + this.personAge());
  }
}
const names = new Person(name, surname, dateNow, year);

names.getAlldata();
*/

/*const arr = [1, 2, 3, 4, 5];
console.log(arr.join("-"));*/

//const nums = [1, 2, 3, 4, 5];
//const nums2 = [6, 7, 8];
/*nums.pop();
nums.push(6);
nums.shift();
nums.unshift("ab");*/
//const result = nums.concat(nums2);
//nums.splice(2, 2, "ab");

/*const arr = ["s", "a", "l", "a", "m"];
arr.sort();
arr.reverse();
console.log(arr);
*/

/*
const a = "salam";
const arr = a.split("");
arr.reverse();
const result = arr.join("");
console.log(result);
*/

/*
const nums2 = [6, 7, 8, 9];

nums2.forEach((item) => {
  console.log(item * item);
});
*/

/*
const data = [
  {
    name: "Ali",
    age: 25,
  },
  {
    name: "Vali",
    age: 24,
  },
  {
    name: "Mammed",
    age: 25,
  },
];
data.map((item) => {
  console.log(item.name);
});
*/

/*
const frontgroup = [15, 17, 23, 28, 30];
function sumAges(age) {
  return age > 18;
}
const result = frontgroup.filter(sumAges);
console.log(result);
*/

//1-ci task
/*
const frontgroup = [15, 13, 87, 26, 19, 28, 21];
let copyItems = [];

frontgroup.forEach((item) => {
  if(item > 18)
  {
  copyItems.push(item);
  }
});
copyItems = copyItems.sort();
console.log(copyItems);
*/

// function sumAges(age) {
//   return age > 18;
// }
// let result = frontgroup.filter(sumAges);

// result = frontgroup.sort();
// console.log(result);

//2-ci task
/*
const data = [
  { name: "Ali", age: 25, salary: 3000 },
  { name: "Memmed", age: 27, salary: 2300 },
  { name: "Veli", age: 23, salary: 1850 },
];
const result = data.reduce(sumNums);
function sumNums(salary, value) {
  return salary.salary + value.salary;
}
console.log(result);
*/

/* 3
const username = prompt("Istifadəçi adınızı daxil edin");
const password = prompt("Şifrənizi daxil edin");

const name = "Parviz";
const parol = "parviz123";
if ((username == name, password == parol)) {
  alert("Login");
} else {
  alert("logout");
}
*/

/*
const date = Number(prompt("Rəqəm daxil edin"));


switch (date) {
  case 1:
    console.log("Yanvar", "Qış fəsli");
    break;
  case 2:
    console.log("Fevral", "Qış fəsli");
    break;
  case 3:
    console.log("Mart", "Yaz fəsli");
    break;
  case 4:
    console.log("Aprel", "Yaz fəsli");
    break;
  case 5:
    console.log("May", "Yaz fəsli");
    break;
  case 6:
    console.log("İyun", "Yay fəsli");
    break;
  case 7:
    console.log("İyul", "Yay fəsli");
    break;
  case 8:
    console.log("Avqust", "Yay fəsli");
    break;
  case 9:
    console.log("Sentyabr", "Payız fəsli");
    break;
  case 10:
    console.log("Oktyabr", "Payız fəsli");
    break;
  case 11:
    console.log("Noyabr", "Payız fəsli");
    break;
  case 12:
    console.log("Dekabr", "Qış fəsli");
    break;
    default:
      console.log("Something get wrong, try it again ");
}
*/

/* dərsdəki task
let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4, 5];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      console.log(true);
    } 
    else (a[i] !== b[j]) {
    console.log(a[i] !== b[j]);
  }
  }
}
*/

/*
const nums = [1, 2, 3, 4, 5];
nums.splice(0, 2, "ab");

console.log(nums);
*/

/* Döngülər 
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
*/

/* 
let a = "salam";
let i = 0;

do {
  console.log(a[i]);
  i++;
} while (i < a.length);
*/

/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

/*
let a = ["ab", "bc", "cd"];
for (i in a) {
  console.log(a[i]);
}
*/

/*
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) console.log(i);
}
*/

/*
let credit = Number(prompt("Məbləğ daxil edin"));
let month = Number(prompt("Ayları daxil edin"));
console.log(credit, month);

if (!isNaN(credit) && !isNaN(month)) {
  let partofSUm = 0;
  for (let i = 0; i < month; i++) {
    let monthlyPayment = parseInt(credit / month);
    console.log(monthlyPayment);
    if (i + 1 == month) {
      i + 1 + "-" + "Sonuncu ayın ödənişi - " + (credit - partofSUm);
    }
  }
}
*/

/*
let result;
let salary = prompt("Məvacibinizi daxil edin");

if (salary > 250) {
  result = "standart maaş";
} else {
  result = "minimum maaş";
}

console.log(result);
*/

/*
let result;
let a = Number(prompt("1-ci ədədi daxil edin"));
let b = Number(prompt("2-ci ədədi daxil edin"));

if (a == b) {
  result = "bərabərdir";
} else {
  result = "bərabər deyil";
}

console.log(result);
*/

/*
let name = prompt("Adinizi daxil edin");
let surname = prompt("Soyadinizi daxil edin");
let date = Number(prompt("Dogum tarixinizi daxil edin"));
let year = Number(prompt("Hazirki tarixi qeyd edin"));

function sumYear(year, date) {
  return year - date;
}
function Names() {
  console.log(
    `Menim adim ${name} , soyadim ${surname} ve menim ${sumYear(
      year,
      date
    )} yasim var`
  );
}
Names();
*/

/*
str2 = "a";
str2 += "b"; // str2 = "ab"
str2 = "b"; // str2 = "b"
*/

/*
let first = [1, 2, 3, 4, 5];
let second = [1, 2, 3, 4];

let difference = first.filter((x) => second.indexOf(x) === -1);
console.log(difference);
*/

/*
let a = "quru";

console.log(a.replace("r", "t"));
*/

/*
let word1 = "qələm ";
let word2 = "";

for (let i = 0; i < word1.length; i++) {
  if (word1[i] == "ə") {
    let newword = word1[i];
    newword = "a";
    word2 += newword;
  } else {
    word2 += word1[i];
  }
}
console.log(word2);
*/

/*
let word1 = "katib";
let word2 = "";
for (let i = 0; i < word1.length; i++) {
  if (word1[i] == "a") {
    let newword = word1[i];
    newword = "i";
    word2 += newword;
    if (word1[i] == "i") {
      let newword = word1[i];
      newword = "a";
    }
  } else {
    word2 += word1[i];
  }
}
console.log(word2);
*/

/*
let word1 = "katib";
let word2 = "";

for (let i = 0; i < word1.length; i++) {
  if (word1[i] == "a") {
    word2 += "i";
    continue;
  }
  if (word1[i] == "i") {
    word2 += "a";
  } else {
    word2 += word1[i];
  }
}
console.log(word2);
*/

let numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log(sum);
