class Person {
    setFirstName(stName){
        this.firstName = stName
        return this
    }
    setAge(age){
        this.age = age
        return this
    }
    setLastName(lastName){
        this.lastName = lastName
        return this
    }

    toString() {
        return `${this.firstName || ''} ${this.lastName || ''}, ${this.age} ans`
    }
}