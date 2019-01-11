const input = document.getElementById("awesomeInput")

input.addEventListener('input', e => {
    //No need to preventDefault because it's only on input

    const newValue  = e.target.value

    e.target.value = newValue.replace(/[0-9]/g, '').toUpperCase()
})