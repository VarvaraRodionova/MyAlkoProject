

document.addEventListener('DOMContentLoaded', async (event) => {
 const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
 console.log(response, "TUT DOLZHNI BIT INGRIDIENTS RESPONSE");
 const result = await response.json();
 console.log("TUT DOLZHNI BIT INGRIDIENTS", result);
 const ingridients = result.drinks.map((el) => el.strIngredient1)
 console.log(ingridients)

 const allIngridients = document.querySelector('#allIngridients')
 const arrIng=[]

for(let i=0; i<ingridients.length; i+=1){
    const ingName = ingridients[i].replaceAll(' ','%20')
    const res = `https://www.thecocktaildb.com/images/ingredients/${ingName}-Medium.png`
    const cardIng = `
    <a href='/ingridients/${ingridients[i]}' style="text-decoration:none; color:#fbe1a1">
    <div class="card" style="width: 10rem; color:#fbe1a1; height: 226px">
            <img style="background-color:rgba(51, 51, 51)" src=${res} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">${ingridients[i]}</h5>
            </div>
            </div>
            </a>
    `
    allIngridients.insertAdjacentHTML('beforeend', cardIng)
} 
});
 