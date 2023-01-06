// Задание №1 +
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.
// ПИСАТЬ КОД ЗДЕСЬ
// let programmer = {
// 	name: 'Tom',
// 	lastName: 'Jerry',
// 	age: 20,
// 	work: 'JS',
// 	salary: 1000,
// };
// console.log(programmer.name);
// console.log(programmer.lastName);
// console.log(programmer.age);
// console.log(programmer.work);
// console.log(programmer.salary);

// Задание №2 +
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

// ПИСАТЬ КОД ЗДЕСЬ
// let firstNum = +prompt('Введите первое число');
// let secondNum = +prompt('Введите второе число');
// let sumNum = firstNum + secondNum;
// let someNum = alert(`${sumNum}`);
// if (sumNum > 10 && sumNum < 20) {
// 	sumNum = sumNum * 5;
// } else if (sumNum > 20 && sumNum < 50) {
// 	sumNum = sumNum / 3;
// } else {
// 	sumNum = sumNum + 10;
// }

// Задание №3 +
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// ПИСАТЬ КОД ЗДЕСЬ

// let aboutUs = [
// 	['name', 'Makers'],
// 	['type', 'Bootcamp'],
// 	['place', 'Bishkek'],
// 	['languages', 'JavaScript, Python'],
// 	['simply', 'the best!'],
// ];
// for (let i = 0; i < aboutUs.length; i++) {
// 	console.log(aboutUs[i][0] + ': ' + aboutUs[i][1]);
// }
// // 2
// for (let i of aboutUs) {
// 	console.log(i[0] + ': ' + i[1]);
// }

// Задание №4 +
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };

// ПИСАТЬ КОД ЗДЕСЬ
// let users = {
// 	John: 28,
// 	Mark: 30,
// 	David: 25,
// 	Richard: 42,
// };
// let res = 0;
// for (let i in users) {
// 	res += users[i];
// }
// console.log(res);

// console.log(sum);

// Задание №5+
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]
// ПИСАТЬ КОД ЗДЕСЬ
// function removeElem(arr, element) {
// 	return arr.filter(del => del !== element);
// }

// let arr = [2, 'hello', true, 'world', 5, 'js'];
// console.log(removeElem(arr, 'world'));

// Задание №6+
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// ПИСАТЬ КОД ЗДЕСЬ
// function palindrom(word) {
// 	word = word.toLowerCase().replace(/\s/g, '');
// 	return word === word.split('').reverse().join('');
// }

// console.log(palindrom('tenet'));
// console.log(palindrom('my gym'));
// console.log(palindrom('nolan'));

// Задание №7 +
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке (использовать цикл while)

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// ПИСАТЬ КОД ЗДЕСЬ
let limit = 1000;
function functionLimit(number) {
	const res = [];
	while (number <= limit) {
		res.push(number);
		number *= 2;
	}
	for (let i = 0; i < res.length; i++) {
		console.log(res[i]);
	}
	for (let i = res.length - 1; i >= 0; i--) {
		console.log(res[i]);
	}
}

functionLimit(50);

// Задание №8 +
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()
// ПИСАТЬ КОД ЗДЕСЬ
// let arr = ['hello', 'js', 'Makers', 'Apple', 'JavaSkript'];
// let res = arr.filter(arr => arr.length > 5);
// console.log(res);

// Задание №9 +
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

// ПИСАТЬ КОД ЗДЕСЬ
// let task2 = [10, 25, 25, 15, 5, 10];
// let res = 0;
// let sumNum = task2.forEach(item => (res += item));
// console.log(res);
// Задание №10 -
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// ПИСАТЬ КОД ЗДЕСЬ

// Задание №11 -
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

// ПИСАТЬ КОД ЗДЕСЬ
let nums = [8, 1, 2, 2, 3];
let res = nums.map(item)({});

// Задание №12 +
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
let a = 0;
let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0
// ПИСАТЬ КОД ЗДЕСЬ
[a, b] = [b, a];
console.log(a, b);

// Задание №13 +
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.
// ПИСАТЬ КОД ЗДЕСЬ
// let obj = {
// 	size: { width: 100, height: 200 },
// 	items: ['Cake', 'Donut'],
// 	extra: true,
// };
// let { size, items, extra } = obj;
// let { width, height } = size;
// console.log(size);
// console.log(items);
// console.log(extra);
// console.log(width);
// console.log(height);

// Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// ПИСАТЬ КОД ЗДЕСЬ
let elevator = {
	currentFloor: 1,
	printFloor() {
		alert(`Вы успешно переметсились на этаж ${this.currentFloor}`);
	},
	upOneFloor() {
		if (this.currentFloor < 16) {
			this.currentFloor++;
		}
	},
	downOneFloor() {
		if (this.currentFloor > 1) {
			this.currentFloor--;
		}
	},
	toFloor(floor) {
		if (floor < 1 || floor > 16) {
			console.log('Invalid floor');
			return;
		}
		let direction = floor > this.currentFloor ? 'up' : 'down';
		while (floor !== this.currentFloor) {
			if (direction === 'up') {
				this.upOneFloor();
			} else {
				this.downOneFloor();
			}
			this.printFloor();
		}
	},
};
elevator.printFloor();
elevator.toFloor(2);
