

const randomCocktik = document.querySelector('.randomCocktik')
const randomCocktail = document.querySelector('.randomCocktail')

randomCocktik.addEventListener('click', async (event) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    const result = await response.json()
    console.log(result)
const randomCard = `
<div class="card animate__rotateIn" style="width: 18rem;">
  <img src="${result.drinks[0].strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.drinks[0].strDrink}</h5>
    <ul>
    <li>${result.drinks[0].strMeasure1} : ${result.drinks[0].strIngredient1}</li>
    <li>${result.drinks[0].strMeasure2} : ${result.drinks[0].strIngredient2}</li>
    <li>${result.drinks[0].strMeasure3} : ${result.drinks[0].strIngredient3}</li>
    <li>${result.drinks[0].strMeasure4} : ${result.drinks[0].strIngredient4}</li>
    <li>${(`${result.drinks[0].strMeasure5} : ${result.drinks[0].strIngredient5}`) || '' }</li>
    </ul>
  </div>
</div>
`
randomCocktail.innerHTML = randomCard
})