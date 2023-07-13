const spiritForm = document.querySelector(".spiritForm");

spiritForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(spiritForm);
  const inputs = Object.fromEntries(data);
  console.log(inputs);
  const spirits = Object.keys(inputs); //array of what is disposable
  console.log("lalalalalalla", spirits);
  const arr = [];
  for (let i = 0; i < spirits.length; i += 1) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirits[i]}`
    );
    console.log(response);
    const result = await response.json();
    console.log("TUT RESULT", result);
    arr.push({ [spirits[i]]: result.drinks });
  }
  const arrNew = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (el in arr[i]) {
        arrNew.push(arr[i][spirits[i]])
    }
  }
  let allCocktails = arrNew.flat()
  const resp = await fetch("/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ drinks: allCocktails }),
  });
  window.location.href = '/list'
});
