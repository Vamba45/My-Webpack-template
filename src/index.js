class Person {
    constructor(PerName) {
        this.PerName = PerName
    }
}

let persons = []

for(let i = 0; i < 10; i ++) {
    persons.push(new Person(PerName =`${i}`))
}

console.log(persons)