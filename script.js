// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!»

let name = prompt("Как вас зовут?");


if (name != null) {
  
  alert("Привет, " + name + "!");
}

// 2. Запросите у пользователя целое число и выведите в ответ, 
// четное число или нет. В задании используйте логические 
// операторы. В задании не надо использовать if или switch.

let number = prompt("Введите целое число");


if (number != null) {
  
  number = Number(number);

  
  if (Number.isInteger(number)) {
    
    alert(!(number % 2) ? "Четное число" : "Нечетное число");
  } 
  else {
    
    alert("Это не целое число");
  }
}


// if, else  используется для проверки входных данных. Само задние использует логические операторы.

//  3. Запросить у пользователя длину окружности и периметр 
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.


let c = prompt("Введите длину окружности");
let p = prompt("Введите периметр квадрата");


c = Number(c);
p = Number(p);


let r = c / (2 * Math.PI);
let a = p / 4;


let result3;
if (r <= a / 2) {
  result3 = "Окружность может поместиться в квадрат";
} else {
  result3 = "Окружность не может поместиться в квадрат";
}


alert(result3);



// 4. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

let questions = [
    {
      question: "Как называется самая популярная библиотека для JavaScript?",
      options: ["A) React\nB) jQuery\nC) Angular"],
      answer: "A"
    },
    {
      question: "Какой оператор используется для сравнения двух значений без учета их типов?",
      options: ["A) ===\nB) ==\nC) ="],
      answer: "B"
    },
    {
      question: "Какой метод массива добавляет новые элементы в конец массива?",
      options: ["A) push\nB) pop\nC) shift"],
      answer: "A"
    }
  ];
  
 
  let score = 0;
  
  
  for (let i = 0; i < questions.length; i++) {
    
    let currentQuestion = questions[i];
    let questionText = currentQuestion.question;
    let questionOptions = currentQuestion.options;
    let questionAnswer = currentQuestion.answer;
  
    
    let userAnswer = prompt(questionText + "\n" + questionOptions.join("\n"));
  
    
    if (userAnswer.toUpperCase() === questionAnswer) {

      score += 2;
    }

    
  }
  
  
  alert("Вы набрали " + score + " баллов из " + questions.length * 2);


// 5. Запросить у пользователя 10 чисел и подсчитать, сколько 
//он ввел положительных, отрицательных и нулей. При этом 
//также посчитать, сколько четных и нечетных. Вывести 
//статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем



let number5;


let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;


for (let i = 1; i <= 10; i++) {
  
  number5 = prompt("Введите число " + i);


  number5 = Number(number5);

  
  if (number5 > 0) {
    
    positive++;
  } 
  else if (number5 < 0) {
    
    negative++;
  } 
  else {
    
    zero++;
  }

  
  if (number5 % 2 === 0) {
    
    even++;
  } 
  else {
    
    odd++;
  }
}


let result5 = "";


result5 += "Положительных: " + positive + "\n";
result5 += "Отрицательных: " + negative + "\n";
result5 += "Нулей: " + zero + "\n";
result5 += "Четных: " + even + "\n";
result5 += "Нечетных: " + odd;


alert(result5);


// 6.  Написать функцию, которая принимает длину и ширину 
// прямоугольника и вычисляет его площадь. Если в функцию 
// передали 1 параметр, то она вычисляет площадь квадрата.


function area(a, b) {
    
    if (b === undefined) {
      
      return a * a;

    } else {
      
      return a * b;
    }
  }
  
  
  alert(area(5)); // 25
  alert(area(10, 20)); // 200


  // 7. Написать функцию, которая вычисляет факториал переданного ей числа.

  
function factorial(n) {
    
    let result = 1;
  
    
    for (let i = 1; i <= n; i++) {
      
      result = result * i;
    }
  
  
    return result;
  }
  
 
  alert(factorial(3)); // 6
  alert(factorial(5)); // 120

