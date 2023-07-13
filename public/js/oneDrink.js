console.log("script works");
const coctCards = document.querySelector(".coctCards");

coctCards.addEventListener("click", async (event) => {
  console.log("button works");
  if(event.target.classList.contains("getdrink")) {
    const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${event.target.id}`
      );
      const result = await response.json()
      console.log(result)
      const resp = await fetch(`/cocktails/${event.target.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
      })
      window.location.href = `/cocktails/${event.target.id}`
  }
});
