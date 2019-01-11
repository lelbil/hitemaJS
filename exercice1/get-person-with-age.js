const getPersonWithAge = (person) => {
    const age = calculateAge(person.dateOfBirth)

    return {...person, age}
}

// from StackOverflow
const calculateAge = birthday => {
    const ageDifMs = Date.now() - new Date(birthday).getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

Object.assign(person, { age })