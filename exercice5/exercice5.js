const stringToArray = str => {
    const arrayWithDuplicates = str.split(';').map(letter => letter.toLowerCase()).sort()
    const noDuplicates = []
    arrayWithDuplicates.forEach((letter, index) => {
        if (letter !== arrayWithDuplicates[index - 1]) noDuplicates.push(letter)
    })

    return noDuplicates
}