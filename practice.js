// task -1: console log the secondary school location of Sophia 
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
// console.log(data.Sophia.study[1].secondary[0]);
// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
// console.log(students[2222].address.city);
// console.log(students[3333].name);

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
// console.log(data2.data[0].bookDetails.name);

// task -4
const number = [1, 3, 5, 7, 9, 11]
const evenNumber = number.map((num) => num / 2)
// console.log(evenNumber);

// task-5
const filterNumber = [33, 55, 79, 78, 90, 101, 30]
const divisAble = filterNumber.filter((num) => {
    if (num % 10 === 0) {
        return num
    }
})
// console.log(divisAble);
// task -6
const divisAble2 = filterNumber.find((num) => {
    if (num % 10 === 0) {
        // console.log(num);
    }
})
// console.log(num);

const instructor = [
    { name: "nodi", age: 28, position: "seniour" },
    { name: "Akhi", age: 26, position: "Joniour" },
    { name: "Sobuj", age: 30, position: "seniour" }
]
const useFilter = instructor.filter((person) => {
    if (person.position === "seniour") {
    }
})
// console.log(instructor);
const useFilter2 = instructor.filter((person) => {
    if (person.age >= 30) {
        return person
    }
})
// console.log(useFilter2);

// task -7
const people = [
    { name: "meena", age: 20 },
    { name: "Rina", age: 15 },
    { name: "Nahida", age: 22 }
]
let totalAge = 0;
for (let person of people) {
totalAge += person.age
}
console.log(totalAge);