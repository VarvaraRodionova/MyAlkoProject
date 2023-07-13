const createDrink = document.querySelector('.createDrink')

const dialog = document.querySelector('#newDrink')
const dialogForm = document.querySelector('.dialogForm')

console.log(dialogForm)

createDrink.addEventListener('click', async (event) => {
    console.log('lalalalallalala')
    const response = await fetch('/check/login', {method:"POST"})
    const result = await response.json()
    console.log(result,'<=======================')
    if(result.status) {
        dialog.showModal()
    } else {
        alert('Please register or login')
    }
})

dialogForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
    const data = new FormData(dialogForm);
    const inputs = Object.fromEntries(data);
    console.log(inputs)
    const response = await fetch('/user/newRecipe', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
    })
    //const result = await response.json()
    //console.log("response:", result)
    dialog.close()
    alert('Look at your drinks in "Your creations"')
    } catch (error) {
        console.log('OhMyGod', error)
    }  
})