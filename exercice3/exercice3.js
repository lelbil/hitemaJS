const arrayToString = data => {
    return data
        .map(e => typeof e === 'string' ? Number(e) : e)
        .filter(e => !isNaN(e) && e !== null)
        .sort()
        .join('-')
}