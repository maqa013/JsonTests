
//что выведет в консоли функция call
const person1 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
// Alex=24



// 2)
//получите доступ к методу call и запустите его
const person2 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

console.log(person2.call())


// 3)
//выведите в консоли все ключи из обьекта с помощью for
const person3 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

console.log(Object.values(person3))


// 4)
//выведите в консоли все значения из обьекта с помощью for
const person4 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
console.log(Object.keys(person4))

// 5)
//преобразуйте обьект ниже в массив
const person5= {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

console.log(Object.entries(person5))

// 6)
//преобразуйте обьект ниже в строку
const person6 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

console.log( JSON.stringify(person6))
// 7)
//преобразуйте обьект ниже в конструктор функции
let obj22 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

// 8)
//перечисли встроенные конструкторы javascript
new String()
new Number()
new Boolean()
new Array()
new Object()
new  Function()
new RegExp()
new Date()

// 9)
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}


let person8 = new Person('Murad',24,'Frontender')
console.log(person8)

// 1)

//создайте пустой обьект 3мя способами


let c = {}
let d = new Object()
//   let e = Object.create()


// 2)
//создайте обьект с вашими персональными данными 
//пример: 
// let obj = {
//     name: 'Alex',
//     age: 24
// }

let obj21 = {
   name: ' Mahammad',
   age: 12
}


// 3)
//чем является name в обьекте ниже?
// let obj = {
//     name: 'Alex',
//     age: 24
// }

// name is key in this object 

// 4)
//чем является 'Alex' в обьекте ниже?
let obj16 = {
    name: 'Alex',
    age: 24
 }
 //  'Alex'   is value in this object

// 5)
//создайте пустой обьект и добавте в него данные о человеке из ткста ниже в виде ключ/значения
let personalinfo ={
   name: Samuel,
   birthday: ['4may','1998'],
   age: 24,
   winCompetition:'Mr.Future',
   awards: 2,
   favoritethings: ['reading','proqeamming']

 }

// 6)
//выведите в консоли значение name из обьекта
let obj1 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

console.log(obj1.name)

// 7)
//выведите в консоли значение age из обьекта
let obj2 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}
console.log(obj2.age)


// 8)
//выведите в консоли значение isMarried из обьекта
let obj3 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

console.log(obj3.isMarried)


// 9)
//выведите в консоли имя первого ребенка из обьекта
let obj4 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   children: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}
console.log(obj4.children[0])



// 10)
//выведите в консоли имена всех детей с помощью for из обьекта
let obj5 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}



for(let i in obj5){
   console.log(obj5[i]['childs'])
}

// 11)

//выведите в консоли значение itMaster из обьекта
let obj6 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

console.log(obj6['awards']['itMaster'])


// 12)
//выведите в консоли все свойства с помощью for...in из обьекта
let obj7 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

for(let i in obj7){
   console.log([i])
}



// 13)

//выведите в консоли значение всех свойств с помощью for...in из обьекта
let obj8 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

for(let i in obj8){
   console.log(obj8[i])
}


// 14)

//поменяйте имя дочери на 'Linda' в обьекте ниже
let obj9 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

console.log(obj9.childs[1] = 'Linda')


// 15)
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
let obj10 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

console.log(obj9.job = 'menedjer')
// 16)
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
let obj11 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}


console.log(obj10['awards']['itMaster'])


// 17)
//выведите в консоли значение name из обьекта c помощью квадратных скобок
let obj12 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

console.log(obj10['name'])





// 18)
//удалите job из обьекта и поменяйте значение hasJob на 'false'
let obj13 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

delete obj13.job

console.log(obj13['hasJob'] = false)


// 19)

//удалите name из обьекта
let obj14 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

delete obj14



// 20)

//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
let obj15 = {
   name: 'Alex',
   age: 24,
   isMarried: false,
   hasCar: false,
   hasJob: true,
   job: 'Programmer',
   childs: ['Hanz', 'Marry'],
   awards: {
       itMaster: 'Legend rang',
       driver: 'Fast man'
   }
}

delete obj15['job']

console.log(obj15['hasJob'] = false)


console.log(obj15)

// 1)
//что такое JSON?
// Java Script Object Notation
// 2)
//зачем использовать JSON?  
// Для передачи данных из браузера в сервер
// 3)
//преобразуйте строку ниже в обьект JSON и выведите в консоли
let str = '{name: "Alex", age: 24}';
console.log(JSON.parse(str))

// 4)
//преобразуйте обьект ниже в строку и выведите в консоли
let obj23 = {name: "Alex", age: 24};
console.log(JSON.stringify(obj23))

// 5)
//создайте в отдельности 2 переменные и присвойте одному обьект JSON другому обьект Javascript
let json = '{name:"Jack",age:25}'
let objLast = {
    name:'Alex',
    age:25
}
// 6)
//какие типы данных может содержать JSON обьект?
// строка
// число
// объект
// массив
// логическое
// null

// 7)
//какие типы данных не может содержать обьект?
// функция
// даты
// undefined

// 8)
//в каком виде мы получаем JSON с сервера?
//  в виде строки
// 9)
//в каком виде мы отправляем JSON на сервер?
// в виде объекта