//Методы обьектов
// Object -это класс
// Object.keys - метод достает ключи из обьекта которое превращает в массив в строку
// Object.values -метод достает значение из обьекта которое превращает в массив в строку
// let product = {
// 	tittle: 'Samsung',
// 	coint: 35,
// 	color: 'Red',
// };
// console.log(Object.keys(product));
// [ 'tittle', 'coint', 'color' ]
// -------------
// console.log(Object.values(product));
// [ 'Samsung', 35, 'Red' ]
// ---------------
// console.log(Object.entries(product));
// [ [ 'tittle', 'Samsung' ], [ 'coint', 35 ], [ 'color', 'Red' ] ]
// -----------

// 9. Дан объект следующего вида: {
//     name: 'Jack',
//     age: 34,
//     work: 'IT',
//     hours: 23,
//    salary: 2300,
// experience: 450
// }, задача: добавить объекту методы: ходить на работу(при вызове этого метода, кол-во часов возрастает на 6, и зарплата тоже растет в пропорции 1час-100$), также должен быть метод Получить зарплату(зарплату можно получить только если уже есть мин. 3000$, после вызова этого метода ключи зарплата и наработанные часы должны быть обнулены, а в ключе опыт, необходимо хранить сумму всех отработанных часов)

let obj = {
	name: 'Jack',
	age: 34,
	work: 'IT',
	hours: 23,
	salary: 2300,
	experience: 450,
	goToWork: function () {
		// let hoursJob = 6;
		this.hours += 6;
		this.salary += 600;
		this.experience += 600;
		// console.log(obj.goToWork());
		return this.goToWork;
	},
	// pickUpSalary: function () {
	// 	console.log();
	// },
};

// console.log(obj.goToWork());
// let meaning = Object.values(obj);
// console.log(meaning);
// function useJob() {
// 	for (i of meaning) {
// 		if (i === obj.hours) {
// 			obj.hours += 6;
// 			obj.experience += 600;
// 			obj.salary += 600;
// 			console.log(obj);
// 			// break;
// 		}
// 	}
// 	manager();
// }
// function pickUpSalary() {}
function manager() {
	let answ = prompt('Go to work(w), pick up salary(s),salary(b),exit(e)').toLowerCase();
	switch (answ) {
		case 'w':
			obj.goToWork();
			break;
		case 's':
			if (obj.salary === 3000) {
				pickuUpSalary();
			} else {
				alert('К сожалению вы пока не сможете забрать вашу зарплату');
				manager();
				// return;
			}
		case 'b':
			alert(`Ваша накопленая зарплата составяляет ${obj.salary}`);
		case 'e':
			return;
		default:
			alert('Invalid operation!');
			return;
	}
}
manager();

// while (obj.salary === 3000) {

// }
// if (obj.salary === 3000) {
// 	console.log(obj);
// }

// 10. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья), выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае если победителя нет(решитьс помощью функций)

function Hero(name, strength, agility, element) {
	this.name = name;
	this.strength = strength;
	this.agility = agility;
	this.element = element;
}
function createHeroes() {
	const hero1Name = prompt('Enter the name of hero 1:');
	const hero1Strength = +prompt('Enter the strength of hero 1 (0-100):');
	const hero1Agility = +prompt('Enter the agility of hero 1 (0-100):');
	const hero1Element = prompt('Enter the element of hero 1 (fire, earth, water, air):');

	const hero2Name = prompt('Enter the name of hero 2:');
	const hero2Strength = +prompt('Enter the strength of hero 2 (0-100:');
	const hero2Agility = +prompt('Enter the agility of hero 2 (0-100:');
	const hero2Element = prompt('Enter the element of hero 2 (fire, earth, water, air):');

	const hero1 = new Hero(hero1Name, hero1Strength, hero1Agility, hero1Element);
	const hero2 = new Hero(hero2Name, hero2Strength, hero2Agility, hero2Element);

	return [hero1, hero2];
}

function boost(hero) {
	switch (hero.element) {
		case 'fire':
			hero.strength += 20;
			break;
		case 'air':
			hero.strength += 15;
			break;
		case 'water':
			hero.strength += 10;
			break;
		case 'earth':
			hero.strength += 5;
			break;
	}
}
function determineWinner(hero1, hero2) {
	if (hero1.strength > hero2.strength) {
		return hero1.name;
	} else if (hero1.strength === hero2.strength) {
		if (hero1.agility > hero2.agility) {
			return hero1.name;
		} else if (hero1.agility === hero2.agility) {
			return 'Draw';
		} else {
			return hero2.name;
		}
	} else {
		return hero2.name;
	}
}

function startGame() {
	const heroes = createHeroes();
	boost(heroes[0]);
	boost(heroes[1]);
	const winner = determineWinner(heroes[0], heroes[1]);
	console.log(`The winner is ${winner}!`);
}

startGame();

// Задание №1
// Дан массив из чисел: let nums = [12, 10, 99, 9, 3, 2, 120, 200,];
// Используя метод filter(), выведите в массив числа, которые больше или равны 10.
// Вывод: [12, 10, 99, 120, 200]
let nums = [12, 10, 99, 9, 3, 2, 120, 200];
let arr = nums.filter(() => {
	if (nums >= 10) {
		console.log(nums);
	}
});

// Задание №2
// Дан массив let lengthName = [`Patricia` , `William` , `Barbara` , `James` , `Chloe` , `Elizabeth` ]; Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().

// Задание №3
// Дан массив let arrNums = [12, 21, 27, 31, 45, 50 ];
//  С помощью цикла foreach и оператора if выведите в console элементы массива, которые больше 20-ти, но меньше 30-ти.

// Задание №4
// Дан массив let total = [ 1, 5, 0, 3, 6 ];
// Суммируйте все значения в данном массиве и выведите результат в alert(). Используйте метод reduce().

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
