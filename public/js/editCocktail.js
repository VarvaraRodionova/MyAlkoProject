const editCocktail = document.querySelectorAll('.editCocktail')
const dialogFormEdit = document.querySelector('.dialogFormEdit')
const dialogEdit = document.querySelector("#editDrink")
modalEditBtn = document.querySelector('.modalEditBtn')

editCocktail.forEach((el) => {
    el.addEventListener('click', (event) => {
        dialogEdit.showModal()
    })
})

dialogFormEdit.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        const data = new FormData(dialogFormEdit)
    const inputs = Object.fromEntries(data)
    const response = await fetch(`/edit/${e.target.parentNode.parentNode.parentNode.id}`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(inputs),
    })
    const result = await response.json()
    console.log(result,'ETO TUT RESULTAAAAAAT')
    const idDiv = e.target.parentNode.parentNode.parentNode.id
    const editedCocktail = document.getElementById(`${idDiv}`)
    console.log(editedCocktail, 'ETO TUT EDITED COCKTAIL')
    const newContent = `
    <img src=${result.link} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">${result.cocktail}</h5>
      <h3 class="card-ingtidients">${result.ingridients}</h3>
      <p class="card-recipe">${result.recipe}</p>
      <button type='button' class="btn btn-warning editCocktail">Edit cocktail</button>
      <button type='button' class="btn btn-warning deleteCocktail">Delete it!</button>
    `
    editedCocktail.innerHTML = newContent
    dialogEdit.close()
    location.reload()
    } catch (error) {
        console.log('Varya u tebia tut oshibka!!!!!!', error)
    }
    
})
